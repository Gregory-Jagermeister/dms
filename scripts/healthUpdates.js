/**
 * Custom function to handle HP changes
 * @param {Actor} actor - The actor whose HP changed
 * @param {Object} hpData - The updated HP data
 * @param {Object} options - Additional options (e.g., diff)
 */
export async function handleHpChange(actor, amount, options) {
    // Assuming hpData includes current values for temp and regular HP
    const hp = actor.system.attributes.hp;     // Current HP from actor data
  
    // Detect the conditions
    const isShieldHit = await actor.getFlag('dms', 'shieldHit');
  
    // Handle condition A: Subtract from temp HP as normal
    if (isShieldHit) {
        await actor.setFlag('dms', 'shieldHit', false);
        amount = amount > 0 ? Math.floor(amount) : Math.ceil(amount);

        const deltaTemp = amount > 0 ? Math.min(hp.temp, amount) : 0;
        const deltaHP = Math.clamp(amount - deltaTemp, -hp.damage, hp.value);
        await actor.update({
        "system.attributes.hp.temp": hp.temp - deltaTemp,
        "system.attributes.hp.value":  hp.value - deltaHP
        });
    }else {
      const newRegularHp = hp.value - amount;
  
      // Ensure not subtracting more than available HP
      await actor.update({
        "system.attributes.hp.value": Math.max(newRegularHp, 0)
      });
    }
}
  
export async function shieldRegen(actor) {
    if (!(actor.system.attributes.hp.temp === actor.system.attributes.hp.tempmax)) {
        await actor.update({
            "system.attributes.hp.temp": actor.system.attributes.hp.temp + (actor.system.attributes.hp.tempmax / 2)
        });
    }
}