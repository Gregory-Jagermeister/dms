export default class DarkMatterSpeedConfig extends DocumentSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        classes: ["dnd5e"],
        template: "modules/dms/templates/speed-config.hbs",
        width: 300,
        height: "auto",
      });
    }
  
    /* -------------------------------------------- */
  
    /** @override */
    get title() {
      return `${game.i18n.localize("DMS.SpeedConfig")}: ${this.document.name}`;
    }
  
    /* -------------------------------------------- */
  
    /** @override */
    getData() {
      const data = {
        speed: this.document.flags.dms.speed,
        config: CONFIG.DMS,
      };
      return data;
    }
  }