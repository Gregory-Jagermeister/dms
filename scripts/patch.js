function patchPrepareData() {
    libWrapper.register(
      "dms",
      "game.dnd5e.documents.Actor5e.prototype.prepareData",
      function (wrapped, ...args) {
        if (this.flags?.dms?.traits?.sc?.value)
          this.flags.dms.traits.sc.value = new Set(
            this.flags.dms.traits.sc.value
          );
  
        return wrapped(...args);
      },
      "MIXED"
  );
  
  libWrapper.register(
    "dms",
    "dnd5e.dataModels.item.WeaponData.prototype.isMountable",
    function () {
      // Call the original function
      //const originalResult = wrapped.apply(this, args);
  
      // Extend the logic to include the custom "Mountable Weapon" type
      return this.type.value === "siege" || this.type.value === "spaceship";
    },
    "OVERRIDE"
  );

  
}

export function setupPatches() {
  libWrapper.register('dms', 'dnd5e.dataModels.shared.SensesField.prototype.constructor', function(wrapped, fields={}, options={}) {
    const numberConfig = { required: true, nullable: true, integer: true, min: 0, initial: null };
    // Original senses
    const originalFields = wrapped.call(this, fields, options);
    
    // Adding thermalsight
    originalFields.fields.thermalsight = new foundry.data.fields.NumberField({ 
      ...numberConfig, 
      label: "ThermalSight" 
    });
    
    // This will return the newly amended fields with thermalsight
    return originalFields;
  }, 'MIXED');
}

export function applyPatches() {
    patchPrepareData();
}