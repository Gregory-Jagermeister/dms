import DarkMatterSpeedConfig from "./DarkMatterSpeedConfig.js";

export class DarkMatterShipSheet extends dnd5e.applications.actor.ActorSheet5eVehicle {

  constructor(...args) {
    super(...args);
    // Initialize flags
    this.actor.setFlag('dms', 'shieldDirection', "front");
    this.actor.setFlag('dms', 'dmActor', true);
    this.actor.setFlag('dms', 'shipClass', "fighter");
    this.actor.setFlag('dms', 'dmClass', "--");
    this.actor.setFlag('dms', 'fighterCapacity', 0);
    this.actor.setFlag('dms', 'shieldHit', false);
  }

  static get  defaultOptions() {

    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["dnd5e","sheet", "actor", "vehicle", "dms"],
      width: 700,
      height: 800,
    });
  }

  get template() {
      return "modules/dms/templates/dark-matter-ship-sheet.html";
  }
  
  async getData(options) {
    const data = await super.getData(options);
    const actorFlags = this.actor.flags;
    if (!actorFlags?.dms) actorFlags["dms"] = {};
    if (!actorFlags?.dms?.speed)
      actorFlags["dms"]["speed"] = { movement: 0, mnv: 0 };
    if (!actorFlags?.dms?.roleAssignments)
      actorFlags["dms"]["roleAssignments"] = {};


    data.crewRoles = [];
    data.shipSystems = this._getShipSystems(actorFlags);
    data.shipUpgrades = this._getShipUpgrades(actorFlags);
    data.crewRoles = this._getCrewRoles(actorFlags, data);

    data.flags = actorFlags;
    data.config = CONFIG.DMS;
    return data;
  }

  async _resetAllFlags() {
      await this.actor.update({ flags: {} });
      this.render();
      console.log(this.actor.flags);
  }

  _getShipSystems(actorFlags) {
      return Object.entries(CONFIG.DMS.shipSystems).reduce((obj, [key, system]) => {
          obj[key] = {
              label: system.systemName,
              reference: system.reference,
              value: actorFlags.dms.shipSystems?.[key] ?? false
          };
          return obj;
      }, {});
  }

  _getShipUpgrades(actorFlags) {
      const conditions = { 
          hasSensors: actorFlags.dms.shipSystems?.sen ?? false,
          hasCommunications: actorFlags.dms.shipSystems?.com ?? false,
          hasProbe: actorFlags.dms.shipSystems?.pro ?? false,
          hasShieldGenerators: actorFlags.dms.shipSystems?.shi ?? false,
          hasDarkMatterEngine: actorFlags.dms.dmClass > 0 ?? false,
          hasSickbay: actorFlags.dms.shipSystems?.med ?? false,
          isFighterSized: actorFlags.dms.shipClass === "fighter"
      };

      return Object.entries(CONFIG.DMS.shipUpgrades).reduce((obj, [key, upgrade]) => {
          if (this._shouldDisplayUpgrade(key, conditions)) {
              obj[key] = {
                  label: game.i18n.localize(upgrade.systemName),
                  reference: upgrade.reference,
                  value: actorFlags.dms.shipUpgrades?.[key] ?? false
              };
          }
          return obj;
      }, {});
  }

  _shouldDisplayUpgrade(key, conditions) {
      switch (key) {
          case "ap":
          case "cc":
          case "cm":
              return conditions.isFighterSized;
          case "dr":
          case "jr":
          case "pd":
              return conditions.hasDarkMatterEngine;
          case "ls":
          case "ma":
              return conditions.hasSensors;
          case "lf":
          case "ra":
              return conditions.hasCommunications;
          case "ms":
              return conditions.hasSickbay;
          case "os":
              return conditions.hasShieldGenerators;
          case "tp":
              return conditions.hasProbe;
          default:
              return true;
      }
  }

  _getCrewRoles(actorFlags, context) {
      const roleAssignments = actorFlags.dms.roleAssignments;
      const numWeapons = this.actor.items.filter(item => item.type === "weapon").length;
      const numDogfighters = actorFlags.dms.fighterCapacity ?? 0;
      const isFighterSized = actorFlags.dms.shipClass === "fighter";

      const crewRoles = [];
      if (isFighterSized) {
          crewRoles.push({ role: "pilot", roleKey: "pilot", actorId: roleAssignments?.pilot ?? null });
      } else {
          for (let i = 0; i < numDogfighters; i++) {
              crewRoles.push({ role: "dogfighter", roleKey: `dogfighter${i}`, actorId: roleAssignments[`dogfighter${i}`] ?? null });
          }
          crewRoles.push({ role: "pilot", roleKey: "pilot", actorId: roleAssignments?.pilot ?? null });
          crewRoles.push({ role: "captain", roleKey: "captain", actorId: roleAssignments?.captain ?? null });
          for (let i = 0; i < numWeapons; i++) {
              const weapons = this.actor.items.filter(item => item.type === "weapon");
              const weapon = weapons[i];
              let actorId = roleAssignments[`gunner${i}`] ?? null;
              crewRoles.push({ 
                  role: "gunner", 
                  roleKey: `gunner${i}`, 
                  actorId, 
                  weaponName: weapon ? weapon.name : null 
              });
          }
          crewRoles.push({ role: "engineer", roleKey: "engineer", actorId: roleAssignments?.engineer ?? null });
      }
      context.crewRoles = crewRoles;
      context.gmView = game.user.isGM;

      return crewRoles;
  }
    
    _prepareItems(context) {
        const cargoColumns = [{
          label: game.i18n.localize("DND5E.Quantity"),
          css: "item-qty",
          property: "quantity",
          editable: "Number"
        }];
    
        const equipmentColumns = [{
          label: game.i18n.localize("DND5E.Quantity"),
          css: "item-qty",
          property: "system.quantity",
          editable: "Number"
        }, {
          label: game.i18n.localize("DND5E.HP"),
          css: "item-hp",
          property: "system.hp.value",
          maxProperty: "system.hp.max",
          editable: "Number"
        }, {
          label: game.i18n.localize("DND5E.Threshold"),
          css: "item-threshold",
          property: "threshold"
        }];
    
        const features = {
          actions: {
            label: game.i18n.localize("DND5E.ActionPl"),
            items: [],
            hasActions: true,
            crewable: false,
            dataset: {type: "feat", "activation.type": "crew"},
            columns: [{
              label: game.i18n.localize("DND5E.Cover"),
              css: "item-cover",
              property: "cover"
            }]
          },
          shipSystems: {
            label: game.i18n.localize("DMS.shipSystems"),
            items: [],
            crewable: false,
            dataset: {type: "equipment", "system.type.value": "vehicle"},
            columns: equipmentColumns
          },
          passive: {
            label: game.i18n.localize("DMS.Features"),
            items: [],
            dataset: {type: "feat"}
          },
          reactions: {
            label: game.i18n.localize("DND5E.ReactionPl"),
            items: [],
            dataset: {type: "feat", "activation.type": "reaction"}
          },
          weapons: {
            label: game.i18n.localize(`${CONFIG.Item.typeLabels.weapon}Pl`),
            items: [],
            crewable: true,
              dataset: { type: "weapon", "weapon-type": "spaceship", "hp.max": 10, "hp.value": 10},
            columns: equipmentColumns
          }
        };
    
        context.items.forEach(item => {
          const {uses} = item.system;
          const ctx = context.itemContext[item.id] ??= {};
          ctx.canToggle = false;
          ctx.isExpanded = this._expanded.has(item.id);
          ctx.hasUses = uses && (uses.max > 0);
        });
    
        const cargo = {
          cargo: {
            label: game.i18n.localize("DND5E.VehicleCargo"),
            items: [],
            dataset: {type: "loot"},
            columns: [{
              label: game.i18n.localize("DND5E.Quantity"),
              css: "item-qty",
              property: "system.quantity",
              editable: "Number"
            }, {
              label: game.i18n.localize("DND5E.Price"),
              css: "item-price",
              property: "system.price.value",
              editable: "Number"
            }, {
              label: game.i18n.localize("DND5E.Weight"),
              css: "item-weight",
              property: "system.weight.value",
              editable: "Number"
            }]
          }
        };
    
        // Classify items owned by the vehicle and compute total cargo weight
        for ( const item of context.items ) {
          const ctx = context.itemContext[item.id] ??= {};
          this._prepareCrewedItem(item, ctx);
    
          // Handle cargo explicitly
          const isCargo = item.flags.dnd5e?.vehicleCargo === true;
          if ( isCargo ) {
            cargo.cargo.items.push(item);
            continue;
          }
    
          // Handle non-cargo item types
          switch ( item.type ) {
            case "weapon":
              features.weapons.items.push(item);
              break;
            case "equipment":
              features.shipSystems.items.push(item);
              break;
            case "feat":
              const act = item.system.activation;
              if ( !act.type || (act.type === "none") ) features.passive.items.push(item);
              else if (act.type === "reaction") features.reactions.items.push(item);
              else features.actions.items.push(item);
              break;
            default:
              cargo.cargo.items.push(item);
          }
        }
    
        // Update the rendering context data
        context.inventoryFilters = false;
        context.features = Object.values(features);
        context.cargo = Object.values(cargo);
        context.encumbrance = context.system.attributes.encumbrance;
      }
  
    activateListeners(html) {
        super.activateListeners(html);
  
        if (!this.options.editable) return;

        html.find(".armor-config-button").click(super._onConfigMenu.bind(this));
        html.find(".config-button").click(this._onSpeedConfigMenu.bind(this));

        html.find('.systems-list input[type="checkbox"]').on('change', this._onCheckboxChange.bind(this));

        html.find(".remove-role").click(this._onRemoveRole.bind(this));

        this._setupDragAndDrop(html);
        
    }

    _setupDragAndDrop(html) {
        // Implement drag-and-drop functionality
        const roles = html.find('.crew-role');
        roles.on('dragstart', event => this._onDragStart(event));
        roles.on('dragover', event => this._onDragOver(event));
        roles.on('dragleave', event => this._onDragLeave(event));
      }
      
    
    _onDragStart(event) {
        const originalEvent = event.originalEvent || event;
        const dragData = {
          uuid: event.currentTarget.dataset.actorId,
          role: event.currentTarget.dataset.role,
          roleKey: event.currentTarget.dataset.roleKey,
        };
        originalEvent.dataTransfer.setData('text/plain', JSON.stringify(dragData));
      }
    
      async _onDropActor(event, data) {
        // Check if this is a role drop
        const originalEvent = event.originalEvent || event;
          const dropTarget = event.target.closest(".crew-role");
          
          let actor = await fromUuid(data.uuid);
          if (!actor) return;

          if (actor.type === "vehicle") {
            ui.notifications.error(game.i18n.localize("DMS.NoShipCrew"));
            return;
          }

        if (dropTarget) {
            event.preventDefault();
            const dropData = JSON.parse(originalEvent.dataTransfer.getData('text/plain'));
            const newRoleKey = dropTarget.dataset.roleKey;
            const uuid = dropData.uuid.split(".").pop();
            this._addCrewActionsFromCompendium(dropTarget.dataset.role);
            this._updateCrewRoles(uuid, dropData.roleKey, newRoleKey);

            //dropTarget.classList.remove('drag-over');
        } else {
            return super._onDropActor(event, data);
        }
    }
    
      _onDragOver(event) {
        event.preventDefault();
        event.currentTarget.classList.add('drag-over');
      }
    
      _onDragLeave(event) {
        event.currentTarget.classList.remove('drag-over');
      }
    
    async _updateCrewRoles(actorId, oldRoleKey, newRoleKey) {
        const roleAssignments = duplicate(this.actor.flags.dms.roleAssignments || {});
        const updateData = {};

        if (oldRoleKey && roleAssignments[oldRoleKey] === actorId) {
            console.log(`Removing ${actorId} from ${oldRoleKey}`);
            updateData[`flags.dms.roleAssignments.-=${oldRoleKey}`] = null;
        }

        if (newRoleKey) {
            console.log(`Adding ${actorId} to ${newRoleKey}`);
            updateData[`flags.dms.roleAssignments.${newRoleKey}`] = actorId;
        }

        console.log("Updated role assignments:", updateData);

        await this.actor.update(updateData);
        this.render();
  }
  
  async _addCrewActionsFromCompendium(role) {
    const itemConfig = CONFIG.DMS.crewRoles[role];
    if (!itemConfig) return;

    const itemReference = itemConfig["crew-actions"];
    let item = await fromUuid(itemReference);
    if (!item) return;

    // Check if the item already exists in the actor's features to avoid duplication
    const existingItem = this.actor.items.find(i => i.name === item.name);
    if (existingItem) return;

    // Add the item to the actor's inventory
    await this.actor.createEmbeddedDocuments("Item", [item]);
  }

  async _removeCrewActionsFromCompendium(role) {
    const itemConfig = CONFIG.DMS.crewRoles[role];
    if (!itemConfig) return;

    const itemReference = itemConfig["crew-actions"];
    const item = await fromUuid(itemReference);
    if (!item) return;

    // Find and remove the item from the actor's inventory
    const existingItem = this.actor.items.find(i => i.name === item.name);
    if (existingItem) {
        await this.actor.deleteEmbeddedDocuments("Item", [existingItem.id]);
    }
  }

  async _addItemsFromCompendium(checkboxName) {
    const itemConfig = CONFIG.DMS.shipUpgrades[checkboxName] || CONFIG.DMS.shipSystems[checkboxName];
    if (!itemConfig) return;

    const itemReference = itemConfig["item-reference"];
    let item = await fromUuid(itemReference);
    if (!item) return;

    // Check if the item already exists in the actor's features to avoid duplication
    const existingItem = this.actor.items.find(i => i.name === item.name);
    if (existingItem) return;

    // Add the item to the actor's inventory
    await this.actor.createEmbeddedDocuments("Item", [item]);
  }

  async _removeItemsFromCompendium(checkboxName) {
    const itemConfig = CONFIG.DMS.shipUpgrades[checkboxName] || CONFIG.DMS.shipSystems[checkboxName];
    if (!itemConfig) return;

    const itemReference = itemConfig["item-reference"];
    const item = await fromUuid(itemReference);
    if (!item) return;

    // Find and remove the item from the actor's inventory
    const existingItem = this.actor.items.find(i => i.name === item.name);
    if (existingItem) {
        await this.actor.deleteEmbeddedDocuments("Item", [existingItem.id]);
    }
  }

  async _onCheckboxChange(event) {
    event.preventDefault();
    const input = event.currentTarget;
    const field = input.name.split('.').reverse().reduce((o, i) => ({ [i]: o }), input.checked);
    
    if (input.checked) {
      await this._addItemsFromCompendium(input.id);
    } else {
        await this._removeItemsFromCompendium(input.id);
    }
  
    this.actor.update({ [`flags.dms.${input.name}`]: input.checked });
  }

  _getMovementSpeed(actorData, largestPrimary = true) {
      return super._getMovementSpeed(actorData, largestPrimary);
  }

  _onSpeedConfigMenu(event) {
      event.preventDefault();
      const button = event.currentTarget;
      switch (button.dataset.action) {
        case "speed":
          new DarkMatterSpeedConfig(this.object).render(true);
          break;
      }
  }
  
  async _onRemoveRole(event) {
      event.preventDefault();
      const li = event.currentTarget.closest(".crew-role");
      const actorId = li.dataset.actorId;
      const role = li.dataset.roleKey;
      if (actorId) {
        const actor = game.actors.get(actorId);
        if (actor) {
          this._updateCrewRoles(actorId, role, null);
          this._removeCrewActionsFromCompendium(role);
          //notifyRoleChange(this.actor, actor, "unassigned");
        }
        this.render();
      }
    }
      
}
  
Hooks.on('renderDarkMatterShipSheet', (app, html, data) => {
    // Remove the text from the header buttons
    html.find('.header-button').each(function() {
      let headerButton = $(this);
      let textNode = headerButton.contents().filter(function() {
        return this.nodeType === 3; // Node.TEXT_NODE
      });
      // Remove the text node
      textNode.remove();
    });
});