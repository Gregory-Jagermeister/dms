export class ShieldButton {
    static createButton(direction) {
        let button = document.createElement("div");
        button.classList.add("control-icon", "shield-button", direction);
        button.innerHTML = `<i class="fas fa-shield-alt"></i>`;
        button.dataset.tooltip = game.i18n.localize(`Shield Direction: ${direction}`);
        button.dataset.direction = direction;

        return button;
    }

    static async handleShieldDirection(event) {
        const direction = event.currentTarget.dataset.direction;
        console.log(`Shield direction set to: ${direction}`);
        const token = canvas.tokens.controlled[0]; // Assuming only one token is being controlled
        if (!token) return;
        await token.actor.setFlag('dms', 'shieldDirection', direction);

        //Call the Update Hook.
        await token.document.update({
            "flags.dms.shieldDirection": direction // This ensures `updateToken` hook runs
        });

        // Update the token with a visual indicator
        await ShieldButton.updateShieldOverlay(token, direction);
    }

    static async updateShieldOverlay(token, direction) {

        let dmToken;
        
        if (token?.children) {
            dmToken = token;
        } else {
            dmToken = token._object;
        }

        if (dmToken?.children) {
            dmToken.children.forEach(child => {
                if (child.name === "shieldOverlay") {
                    dmToken.removeChild(child);
                }
            });
    
            // Add new overlay
            const texture = PIXI.Texture.from(`modules/dms/assets/overlays/Shields/${direction}.webp`);
            const overlay = new PIXI.Sprite(texture);
            overlay.name = "shieldOverlay";
            overlay.parent = dmToken;
            overlay.width = dmToken.w;
            overlay.height = dmToken.h;
            overlay.anchor.set(0.5);
            overlay.x = dmToken.w / 2;
            overlay.y = dmToken.h / 2;
            overlay.rotation = dmToken.rotation;
    
            dmToken.children = dmToken.children.concat(overlay);

            canvas.tokens.hud.render();
        }
        
        
    }

    static async prepTokenHUD(hud, html, token) {
        const actor = game.actors.get(token.actorId);
        const directions = ["front", "left", "back", "right"];
        for (const direction of directions) {
            let button = ShieldButton.createButton(direction);
            button.addEventListener("click", ShieldButton.handleShieldDirection);
            html.append(button);
        }
    }
}

async function getDarkMatterTokens(canvas) {
    let canvasTokens = canvas.tokens.placeables;
    let dmTokens = [];
    dmTokens = await dmTokens.concat(canvasTokens.filter((token) => token.actor.getFlag('dms', 'dmActor')));

    if (dmTokens) {
        return dmTokens;
    }
    return [];
}

Hooks.on('canvasReady', async (canvas) => {
    let dmTokens = await getDarkMatterTokens(canvas);
    dmTokens.forEach(async (token) => {
        ShieldButton.updateShieldOverlay(token, await token.actor.getFlag("dms", "shieldDirection"));
    });
});

Hooks.on('updateToken', async (token, changed, options, userId) => {
    if (token.actor.getFlag('dms', 'dmActor')) {
        ShieldButton.updateShieldOverlay(token, await token.actor.getFlag("dms", "shieldDirection"));
    }
});