import { DarkMatterShipSheet } from "./DarkMatterVehicle.js";
import { DMS } from "./config.js";
import { applyPatches, setupPatches } from "./patch.js";
import { preloadHandlebarsTemplates } from "./templates.js";
import { applyProperties } from "./DarkMatterProperties.js";
import { ShieldButton } from "./DarkMatterTokenHud.js";
import { handleHpChange, shieldRegen } from "./healthUpdates.js";

Actors.registerSheet("dms", DarkMatterShipSheet, {
    types: ["vehicle"],
    makeDefault: true,
    label: "Dark Matter Spaceship"
});

Hooks.once('ready', async () => {
  console.log("Dark Matter Ships 5e is now ready");
  

});

Handlebars.registerHelper('isNotFighter', (value) => {
    return value !== "fighter";
});

Handlebars.registerHelper('getActorName', function(actorId) {
    const actor = game.actors.get(actorId);
    return actor ? actor.name : '';
});

Handlebars.registerHelper('getActorImage', function(actorId) {
    const actor = game.actors.get(actorId);
    return actor ? actor.img : '';
});

Hooks.once('setup', () => {
  setupPatches();
});

Hooks.once("init", () => {

  console.log("dms | Initializing Dark Matter Ship Systems");

  if (!game.modules.get('lib-wrapper')?.active && game.user.isGM) {
      ui.notifications.error("Module Dark Matter Ships requires the 'libWrapper' module. Please install and activate it.");
      return;
  }

  applyProperties();
  
  applyPatches();

  CONFIG.DMS = DMS;
  
  preloadHandlebarsTemplates();

  Hooks.once("setup", function () {
  
      // Localize DMS objects once up-front
      const toLocalize = [
        "actorSizes",
          "shipClass",
        "darkMatterEngineClass"
      ];
  
      // Exclude some from sorting where the default order matters
      const noSort = ["shipClass"];
  
      // Localize and sort DMS objects
      for (let o of toLocalize) {
        const localized = Object.entries(DMS[o]).map((e) => {
          return [e[0], game.i18n.localize(e[1])];
        });
        if (!noSort.includes(o))
          localized.sort((a, b) => a[1].localeCompare(b[1]));
        DMS[o] = localized.reduce((obj, e) => {
          obj[e[0]] = e[1];
          return obj;
        }, {});
      }
    });
});

// Register a hook for actor updates
Hooks.on("dnd5e.preApplyDamage", (actor, amount, updates, options) => {
  if (actor.getFlag("dms", "dmActor")) {
    handleHpChange(actor, amount, options);
    return false;
  }
});

Hooks.on("updateCombat", async function(combat, updateData, options, userId) {
  if (hasProperty(updateData, "turn")) {
    const combatant = combat.combatants.get(combat.current.combatantId);
    if (combatant) {
      const actor = combatant.actor;
      console.log(`${actor.name}'s turn starts.`);
      if (actor.getFlag("dms", "dmActor")) {
        // Call your custom function here
        shieldRegen(actor);
      }
    }
  }
});

Hooks.on("renderTokenHUD", (hud, html, token) => {
  let actor = game.actors.get(token.actorId);
  if (actor.flags.dms?.dmActor) {
      ShieldButton.prepTokenHUD(hud, html, token);
  } else {
    return;
  }
});

Hooks.on("preCreateChatMessage", (message, options, userId) => {
  // Check if the message contains a damage roll
  if (message.isRoll && message.flags?.dnd5e?.roll?.type === "damage") {
      handleDamageRoll(message);
  }
});

async function handleDamageRoll(message) {
  // Get the current targets
  const attacker = canvas.tokens.get(message.speaker.token);
  const targets = Array.from(game.user.targets);

  if (targets.length === 0) return;

  // Iterate over each target to check for shield direction and apply logic
  for (const target of targets) {
      const actor = target.actor;
      if (actor && actor.flags.dms.dmActor) {
        const attackDirection = getAttackDirection(target, attacker);
        let customText = "";
        if (isShielded(actor.getFlag('dms', 'shieldDirection'), attackDirection)) {
          console.log("Damage roll hits the shield on target:", target.name);
          customText = "Attack hits the shield!";
          // Apply shield effects or modify the damage roll here
          actor.setFlag('dms', 'shieldHit', true);
        } else {
          console.log("Damage roll bypasses the shield on target:", target.name);
          customText = "Attack bypasses the shield!";
        }

        await updateChatMessage(message, customText);
      }
  }
}

async function updateChatMessage(message, customText) {
  const newContent = `<br><div class="shield-text">${customText}</div>`;
  await message.updateSource({content: newContent });
}

function getAttackDirection(targetToken, attackerToken) {
  const deltaX = attackerToken.x - targetToken.x;
  const deltaY = attackerToken.y - targetToken.y;

  if (Math.abs(deltaX) > Math.abs(deltaY)) {
      return deltaX > 0 ? "right" : "left";
  } else {
      return deltaY > 0 ? "back" : "front";
  }
}

function isShielded(shieldDirection, attackDirection) {
  return shieldDirection === attackDirection;
}
