export const DMS = {};

DMS.mnvs = {
    0: 0,
    45: 45,
    90: 90,
    135: 135,
    180: 180,
    360: 360,
};

DMS.actorSizes = {
    tiny: "DMS.SizeMegaTiny", // 0.5x0.5
    sm: "DMS.SizeMegaSmall", // 1x1
    med: "DMS.SizeMegaMedium", // 1x1
    lg: "DMS.SizeMegaLarge", // 2x2
    huge: "DMS.SizeMegaHuge", // 3x3
    grg: "DMS.SizeMegaGargantuan", // 4x4
};

DMS.shipClass = {
    fighter: "fighter",
    personal: "Personal",
    transport: "transport",
    corvette: "corvette",
    frigate: "frigate",
    lightCrusier: "light crusier",
    heavyCrusier: "heavy crusier",
    capital: "capital",
    titan: "titan",
}

DMS.darkMatterEngineClass = {
    0: "DMS.NoDMEngine",
    1: "DMS.Tier1",
    2: "DMS.Tier2",
    3: "DMS.Tier3",
    4: "DMS.Tier4",
    5: "DMS.Tier5",
    6: "DMS.Tier6",
    7: "DMS.Tier7",
    8: "DMS.Tier8",
    9: "DMS.Tier9",
    10: "DMS.Tier10",
}

DMS.crewRoles = {
    "engineer": {"crew-actions":"Compendium.dms.actions-dark-matter.Item.edCKxs2LULAMRLVP"},
    "captain": {"crew-actions":"Compendium.dms.actions-dark-matter.Item.KzEJeJdogJZllBRE"},
    "gunner": {"crew-actions":"Compendium.dms.actions-dark-matter.Item.J2EdkQMsEiKT7Lh0"},
    "pilot": {"crew-actions":"Compendium.dms.actions-dark-matter.Item.ElRdDMwToXVSXjso"},
    "dogfighter" : {"crew-actions":"Compendium.dms.actions-dark-matter.Item.w0E63yzbj38Nlm9e"}
}

DMS.shipUpgrades = {
    "afb": {"systemName":"DMS.afb","reference":"Compendium.dms.rule-book-dark-matter.JournalEntry.dedzDcjgFzUUMX83.JournalEntryPage.BFtwXyVmqsABxCQz", "item-reference":"Compendium.dms.items-dark-matter.Item.1WFxlSvGW4mG1fBD"},
    "ai": {"systemName":"DMS.ai","reference":"Compendium.dms.rule-book-dark-matter.JournalEntry.dedzDcjgFzUUMX83.JournalEntryPage.mihsRrkP4bphVTQY", "item-reference":"Compendium.dms.items-dark-matter.Item.jTzUqH0ujEvTokdJ"},
    "am": {"systemName":"DMS.am","reference":"Compendium.dms.rule-book-dark-matter.JournalEntry.dedzDcjgFzUUMX83.JournalEntryPage.nVEvKVk3Jf2DqzCF", "item-reference":"Compendium.dms.items-dark-matter.Item.Oi4dxSnHu6WHkSu8"},
    "ar": {"systemName":"DMS.ar","reference":"Compendium.dms.rule-book-dark-matter.JournalEntry.dedzDcjgFzUUMX83.JournalEntryPage.ar8RH1yItzAg7ufU", "item-reference":"Compendium.dms.items-dark-matter.Item.NQ0NFobXAHAGB5uI"},
    "ap": {"systemName":"DMS.ap","reference":"Compendium.dms.rule-book-dark-matter.JournalEntry.dedzDcjgFzUUMX83.JournalEntryPage.ClDiqicI8hdD1zak", "item-reference":"Compendium.dms.items-dark-matter.Item.X9iXFJWPJ9A2eiGi"},
    "cc": {"systemName":"DMS.cc","reference":"Compendium.dms.rule-book-dark-matter.JournalEntry.dedzDcjgFzUUMX83.JournalEntryPage.ssG5Z7L226NOA1u3", "item-reference":"Compendium.dms.items-dark-matter.Item.IMtkll4vaz2ttGTz"},
    "cm": {"systemName":"DMS.cm","reference":"Compendium.dms.rule-book-dark-matter.JournalEntry.dedzDcjgFzUUMX83.JournalEntryPage.HYlCjHnwplJL9M68", "item-reference":"Compendium.dms.items-dark-matter.Item.4MfdBFfQEHcB62nr"},
    "ce": {"systemName":"DMS.ce","reference":"Compendium.dms.rule-book-dark-matter.JournalEntry.dedzDcjgFzUUMX83.JournalEntryPage.ahqssV3JSm0cD547", "item-reference":"Compendium.dms.items-dark-matter.Item.byzuQhIgD6KHBXie"},
    "dr": {"systemName":"DMS.dr","reference":"Compendium.dms.rule-book-dark-matter.JournalEntry.dedzDcjgFzUUMX83.JournalEntryPage.Jm519jatikLWUexo", "item-reference":"Compendium.dms.items-dark-matter.Item.7s6LpxLSnUBzW54i"},
    "df": {"systemName":"DMS.df","reference":"Compendium.dms.rule-book-dark-matter.JournalEntry.dedzDcjgFzUUMX83.JournalEntryPage.1mpX03NqQIFefzTP", "item-reference":"Compendium.dms.items-dark-matter.Item.aX6A1oJapU69m3Wd"},
    "eh": {"systemName":"DMS.eh","reference":"Compendium.dms.rule-book-dark-matter.JournalEntry.dedzDcjgFzUUMX83.JournalEntryPage.6G6LyI47lr1UvTu2", "item-reference":"Compendium.dms.items-dark-matter.Item.BAfjNOekBpXoRJRl"},
    "eq": {"systemName":"DMS.eq","reference":"Compendium.dms.rule-book-dark-matter.JournalEntry.dedzDcjgFzUUMX83.JournalEntryPage.UvbHMTDOWxrl9axe", "item-reference":"Compendium.dms.items-dark-matter.Item.IMBvE7izinWmGl9v"},
    "em": {"systemName":"DMS.em","reference":"Compendium.dms.rule-book-dark-matter.JournalEntry.dedzDcjgFzUUMX83.JournalEntryPage.Hm4bl5ROrXLqVM0z", "item-reference":"Compendium.dms.items-dark-matter.Item.72dJ1JQCaDicHfLA"},
    "ir": {"systemName":"DMS.ir","reference":"Compendium.dms.rule-book-dark-matter.JournalEntry.dedzDcjgFzUUMX83.JournalEntryPage.pXFtJHSgNOAAfIrC", "item-reference":"Compendium.dms.items-dark-matter.Item.mYCAqiQUeltJDwcC"},
    "jr": {"systemName":"DMS.jr","reference":"Compendium.dms.rule-book-dark-matter.JournalEntry.dedzDcjgFzUUMX83.JournalEntryPage.zqlvEy9iwfiKpSxs", "item-reference":"Compendium.dms.items-dark-matter.Item.QTzN1CQWvRkoCFIK"},
    "ls": {"systemName":"DMS.ls","reference":"Compendium.dms.rule-book-dark-matter.JournalEntry.dedzDcjgFzUUMX83.JournalEntryPage.oCmGBHwOjOA2CiI9", "item-reference":"Compendium.dms.items-dark-matter.Item.6vrvGjFSy6Am6Ax3"},
    "lf": {"systemName":"DMS.lf","reference":"Compendium.dms.rule-book-dark-matter.JournalEntry.dedzDcjgFzUUMX83.JournalEntryPage.isr0LDlztlM2sfj0", "item-reference":"Compendium.dms.items-dark-matter.Item.swJo6vCwaYT3TIEq"},
    "ma": {"systemName":"DMS.ma","reference":"Compendium.dms.rule-book-dark-matter.JournalEntry.dedzDcjgFzUUMX83.JournalEntryPage.Ir0IYvrWb5b4y1NJ", "item-reference":"Compendium.dms.items-dark-matter.Item.UjZIJibYkWprrk8m"},
    "ms": {"systemName":"DMS.ms","reference":"Compendium.dms.rule-book-dark-matter.JournalEntry.dedzDcjgFzUUMX83.JournalEntryPage.I2aun9VRd1eXU9hR", "item-reference":"Compendium.dms.items-dark-matter.Item.22nhawp3pO9wTjux"},
    "os": {"systemName":"DMS.os","reference":"Compendium.dms.rule-book-dark-matter.JournalEntry.dedzDcjgFzUUMX83.JournalEntryPage.3yPOoSyVuX8OkLwh", "item-reference":"Compendium.dms.items-dark-matter.Item.ragVdEUUGpRPIwzp"},
    "pd": {"systemName":"DMS.pd","reference":"Compendium.dms.rule-book-dark-matter.JournalEntry.dedzDcjgFzUUMX83.JournalEntryPage.pG3wFlqlmpstMsvY", "item-reference":"Compendium.dms.items-dark-matter.Item.pbjBCjFGHENw2lDv"},
    "ra": {"systemName":"DMS.ra","reference":"Compendium.dms.rule-book-dark-matter.JournalEntry.dedzDcjgFzUUMX83.JournalEntryPage.RxdrKshKEjXSM1BE", "item-reference":"Compendium.dms.items-dark-matter.Item.AQ8POeMJmo76SVr2"},
    "rh": {"systemName":"DMS.rh","reference":"Compendium.dms.rule-book-dark-matter.JournalEntry.dedzDcjgFzUUMX83.JournalEntryPage.nuk1GKb3PHMlBXUT", "item-reference":"Compendium.dms.items-dark-matter.Item.anSF3U6YAgGOG2Ty"},
    "rd": {"systemName":"DMS.rd","reference":"Compendium.dms.rule-book-dark-matter.JournalEntry.dedzDcjgFzUUMX83.JournalEntryPage.Wq6ukDO5wJkuM4hp", "item-reference":"Compendium.dms.items-dark-matter.Item.y1k1ntKVnO0xc7p6"},
    "to": {"systemName":"DMS.to","reference":"Compendium.dms.rule-book-dark-matter.JournalEntry.dedzDcjgFzUUMX83.JournalEntryPage.pw8V4JLskzkZT5Rg", "item-reference":"Compendium.dms.items-dark-matter.Item.8PW5r5QAvASYD7MJ"},
    "tp": {"systemName":"DMS.tp","reference":"Compendium.dms.rule-book-dark-matter.JournalEntry.dedzDcjgFzUUMX83.JournalEntryPage.e9ZJeOJFKHunOrnB", "item-reference":"Compendium.dms.items-dark-matter.Item.WH2UItbJUiqjymMf"},
    "sh": {"systemName":"DMS.sh","reference":"Compendium.dms.rule-book-dark-matter.JournalEntry.dedzDcjgFzUUMX83.JournalEntryPage.x58Rb7AlOFv2L8Pe", "item-reference":"Compendium.dms.items-dark-matter.Item.i8OhsolyMujFY37U"},
}

DMS.shipSystems = {
    "arc":{"systemName":"DMS.arc", "reference": "Compendium.dms.rule-book-dark-matter.JournalEntry.dedzDcjgFzUUMX83.JournalEntryPage.dkZDsTmMrjrHwgkX", "item-reference":"Compendium.dms.items-dark-matter.Item.znajoJirlyM9nAnu"},
    "clo":{"systemName":"DMS.clo","reference": "Compendium.dms.rule-book-dark-matter.JournalEntry.dedzDcjgFzUUMX83.JournalEntryPage.1uNu0vYl5b1SFknD", "item-reference":"Compendium.dms.items-dark-matter.Item.Qz3jSymsdyCWZdh1"},
    "com":{"systemName":"DMS.com","reference": "Compendium.dms.rule-book-dark-matter.JournalEntry.dedzDcjgFzUUMX83.JournalEntryPage.s9cqI7ZbV5PHyros", "item-reference":"Compendium.dms.items-dark-matter.Item.lnNil0NtsaYN1OK3"},
    "fab":{"systemName":"DMS.fab","reference": "Compendium.dms.rule-book-dark-matter.JournalEntry.dedzDcjgFzUUMX83.JournalEntryPage.0aLwqrtIcyMpUhwA", "item-reference":"Compendium.dms.items-dark-matter.Item.xfrI8AzBPFZd0OE0"},
    "hyp":{"systemName":"DMS.hyp","reference": "Compendium.dms.rule-book-dark-matter.JournalEntry.dedzDcjgFzUUMX83.JournalEntryPage.sPuwpmyqruXWhpQx", "item-reference":"Compendium.dms.items-dark-matter.Item.1JyuvOLBgRuyG2a8"},
    "lpod":{"systemName":"DMS.lpod","reference": "Compendium.dms.rule-book-dark-matter.JournalEntry.dedzDcjgFzUUMX83.JournalEntryPage.O9Zj6BYjU6jSpKu5", "item-reference":"Compendium.dms.items-dark-matter.Item.ETMW6ptNlLBFaLgL"},
    "lsp":{"systemName":"DMS.lsp","reference": "Compendium.dms.rule-book-dark-matter.JournalEntry.dedzDcjgFzUUMX83.JournalEntryPage.ZIQp6P5fHZqCEFtb", "item-reference":"Compendium.dms.items-dark-matter.Item.xJ64tjeVKRJmakQx"},
    "pro":{"systemName":"DMS.pro","reference": "Compendium.dms.rule-book-dark-matter.JournalEntry.dedzDcjgFzUUMX83.JournalEntryPage.VyPlAICwT3pNJxeI", "item-reference":"Compendium.dms.items-dark-matter.Item.xG0luu6e1PJDgFRV"},
    "sen":{"systemName":"DMS.sen","reference": "Compendium.dms.rule-book-dark-matter.JournalEntry.dedzDcjgFzUUMX83.JournalEntryPage.eUFevI4BFoN7cIy9", "item-reference":"Compendium.dms.items-dark-matter.Item.BWHwC21YjnrLt08X"},
    "shi":{"systemName":"DMS.shi","reference": "Compendium.dms.rule-book-dark-matter.JournalEntry.dedzDcjgFzUUMX83.JournalEntryPage.uvEPl1Kc5LnY5PM6", "item-reference":"Compendium.dms.items-dark-matter.Item.AHiIvQazwoLWnBHT"},
    "shu":{"systemName":"DMS.shu","reference": "Compendium.dms.rule-book-dark-matter.JournalEntry.dedzDcjgFzUUMX83.JournalEntryPage.ldvEx3BlnNGyv5ET", "item-reference":"Compendium.dms.items-dark-matter.Item.WNOOF3qbQCQDYvxV"},
    "sib":{"systemName":"DMS.sib","reference": "Compendium.dms.rule-book-dark-matter.JournalEntry.dedzDcjgFzUUMX83.JournalEntryPage.yvklfgntMiYdSxkN", "item-reference":"Compendium.dms.items-dark-matter.Item.yIYX7hfBve19rR58"},
    "sim":{"systemName":"DMS.sim","reference": "Compendium.dms.rule-book-dark-matter.JournalEntry.dedzDcjgFzUUMX83.JournalEntryPage.qasj1MfX8yx2cvgS", "item-reference":"Compendium.dms.items-dark-matter.Item.nQaZggkpdH6WPgJI"},
    "tel":{"systemName":"DMS.tel","reference": "Compendium.dms.rule-book-dark-matter.JournalEntry.dedzDcjgFzUUMX83.JournalEntryPage.vYrpdrpvhD0UozqO", "item-reference":"Compendium.dms.items-dark-matter.Item.UoxHjBQO94IBXtOS"},
    "tra":{"systemName":"DMS.tra","reference": "Compendium.dms.rule-book-dark-matter.JournalEntry.dedzDcjgFzUUMX83.JournalEntryPage.tlJiklRBGkcTI6Lj", "item-reference":"Compendium.dms.items-dark-matter.Item.cMyMpdWMFBoMGaCz"},
    "umb":{"systemName":"DMS.umb","reference": "Compendium.dms.rule-book-dark-matter.JournalEntry.dedzDcjgFzUUMX83.JournalEntryPage.mtHZXRtV11VqU8ob", "item-reference":"Compendium.dms.items-dark-matter.Item.BMlaxiKWIVSy4o6u"},
}

DMS.currencies = {
    "cp": { "label": 'Copper', "abbreviation": 'cp', "conversion": 100 },
    "ep": { "label": 'Electrum', "abbreviation": 'ep', "conversion": 2 },
    "gp": { "label": 'Gold', "abbreviation": 'gp', "conversion": 1 },
    "pp": { "label": 'Platinum', "abbreviation": 'pp', "conversion": 0.1 },
    "sp": { "label": 'Silver', "abbreviation": 'sp', "conversion": 10 }
}

DMS.cargoTypes = [
    "consumable",
    "backpack",
    "equipment",
    "loot",
    "spell",
    "tool",
    "weapon",
];

DMS.shipRamDice = {
    tiny: 1,
    sm: 1,
    med: 2,
    lg: 3,
    huge: 4,
    grg: 0,
  };

export default DMS;