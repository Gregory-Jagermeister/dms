export const preloadHandlebarsTemplates = async function () {
    const partials = [
        // Actor Sheet Partials
        "modules/dms/templates/parts/ship-features.hbs",
      "modules/dms/templates/parts/ship-inventory.hbs",
      "modules/dms/templates/parts/ship-traits.hbs",
        "modules/dms/templates/parts/crew-roles.hbs",
    ];
  
    const paths = {};
    for (const path of partials) {
      paths[path.replace(".hbs", ".html")] = path;
      paths[`dms.${path.split("/").pop().replace(".hbs", "")}`] = path;
    }
  
    return loadTemplates(paths);
  };