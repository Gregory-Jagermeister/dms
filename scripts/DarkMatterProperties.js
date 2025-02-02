export function applyProperties() {
    CONFIG.DND5E.itemProperties.blas = {
        label: 'Blaster',
    };
    CONFIG.DND5E.validProperties.weapon.add('blas');

    CONFIG.DND5E.itemProperties.reco = {
        label: 'Recoil',
    };
    CONFIG.DND5E.validProperties.weapon.add('reco');

    CONFIG.DND5E.itemProperties.fist = {
        label: 'Fist',
    };
    CONFIG.DND5E.validProperties.weapon.add('fist');

    CONFIG.DND5E.itemProperties.fore = {
        label: 'Foregrip',
    };
    CONFIG.DND5E.validProperties.weapon.add('fore');

    CONFIG.DND5E.itemProperties.heat = {
        label: 'Heat',
    };
    CONFIG.DND5E.validProperties.weapon.add('heat');

    CONFIG.DND5E.itemProperties.nonle = {
        label: 'Non-Leathal',
    };
    CONFIG.DND5E.validProperties.weapon.add('nonle');

    CONFIG.DND5E.itemProperties.cld = {
        label: 'Cooldown',
    };
    CONFIG.DND5E.validProperties.weapon.add('cld');

    CONFIG.DND5E.itemProperties.dest = {
        label: 'Destructible',
    };
    CONFIG.DND5E.validProperties.weapon.add('dest');

    CONFIG.DND5E.languages.standard.children.amoeboid = 'Amoeboid';
    CONFIG.DND5E.languages.standard.children.aviara = 'Avia-Ra';
    CONFIG.DND5E.languages.standard.children.skathari = 'Skathári';
    CONFIG.DND5E.languages.standard.children.wrothian = 'Wrothian';

    //CONFIG.DND5E.senses.thermalsight = "Thermalsight";

    CONFIG.DND5E.equipmentTypes.grafts = 'Construct Grafts';
    CONFIG.DND5E.miscEquipmentTypes.grafts = 'Constructs Grafts';

    CONFIG.DND5E.weaponMasteries.automatic = {
        label: 'Automatic',
        reference:
            'Compendium.dms.rule-book-dark-matter.JournalEntry.BJiuHTRaJiyxNhHK.JournalEntryPage.sDVM8aeCyMJI3Y05',
    };
    CONFIG.DND5E.weaponMasteries.bludgeon = {
        label: 'Bludgeon',
        reference:
            'Compendium.dms.rule-book-dark-matter.JournalEntry.BJiuHTRaJiyxNhHK.JournalEntryPage.PM28fzU2d3Idgyv1',
    };
    CONFIG.DND5E.weaponMasteries.explode = {
        label: 'Explode',
        reference:
            'Compendium.dms.rule-book-dark-matter.JournalEntry.BJiuHTRaJiyxNhHK.JournalEntryPage.pwMqTfmrNcA2hA2P',
    };
    CONFIG.DND5E.weaponMasteries.mounted = {
        label: 'Mounted',
        reference:
            'Compendium.dms.rule-book-dark-matter.JournalEntry.BJiuHTRaJiyxNhHK.JournalEntryPage.4vM1MUnjVlIbzPHZ',
    };
    CONFIG.DND5E.weaponMasteries.jolt = {
        label: 'Jolt',
        reference:
            'Compendium.dms.rule-book-dark-matter.JournalEntry.BJiuHTRaJiyxNhHK.JournalEntryPage.77XPK38laRNIZNMM',
    };
    CONFIG.DND5E.weaponMasteries.sighted = {
        label: 'Sighted',
        reference:
            'Compendium.dms.rule-book-dark-matter.JournalEntry.BJiuHTRaJiyxNhHK.JournalEntryPage.0BTMbCQilYVhSeQz',
    };
    CONFIG.DND5E.weaponMasteries.scatter = {
        label: 'Scatter',
        reference:
            'Compendium.dms.rule-book-dark-matter.JournalEntry.BJiuHTRaJiyxNhHK.JournalEntryPage.JeWhZcR6EkEYiXTV',
    };
    CONFIG.DND5E.weaponMasteries.overheat = {
        label: 'Overheat',
        reference:
            'Compendium.dms.rule-book-dark-matter.JournalEntry.BJiuHTRaJiyxNhHK.JournalEntryPage.Vmqh5SsBHN5v71Kr',
    };

    CONFIG.DND5E.skills.data = {
        label: 'Data',
        ability: 'int',
        fullKey: 'data', // Full key used in enrichers
        reference:
            'Compendium.dms.rule-book-dark-matter.JournalEntry.V9i0nElFa0T8vwHw.JournalEntryPage.aHfBq8JMZ1J0zfkJ', // UUID of journal entry page for rich tooltips
        icon: '…', // Icon used in favorites on new character sheet
    };

    CONFIG.DND5E.skills.tech = {
        label: 'Technology',
        ability: 'int',
        fullKey: 'technology', // Full key used in enrichers
        reference:
            'Compendium.dms.rule-book-dark-matter.JournalEntry.V9i0nElFa0T8vwHw.JournalEntryPage.Lu7X02t1jGqp7pxK', // UUID of journal entry page for rich tooltips
        icon: '…', // Icon used in favorites on new character sheet
    };

    CONFIG.DND5E.skills.pilot = {
        label: 'Piloting',
        ability: 'dex',
        fullKey: 'piloting', // Full key used in enrichers
        reference:
            'Compendium.dms.rule-book-dark-matter.JournalEntry.V9i0nElFa0T8vwHw.JournalEntryPage.mXGH81bII95DgoOB', // UUID of journal entry page for rich tooltips
        icon: '…', // Icon used in favorites on new character sheet
    };

    CONFIG.DND5E.weaponTypes.spaceship = 'Spaceship weapon';

    CONFIG.DND5E.weaponProficiencies.simbla = 'Simple Blasters';
    CONFIG.DND5E.weaponProficiencies.marbla = 'Martial Blasters';

    CONFIG.DND5E.weaponTypes.simpleB = 'Simple Blasters';
    CONFIG.DND5E.weaponTypes.martialB = 'Martial Blasters';

    CONFIG.DND5E.weaponProficienciesMap.simpleB = 'simbla';
    CONFIG.DND5E.weaponProficienciesMap.martialB = 'marbla';

    CONFIG.DND5E.weaponIds.simpleblaster = 'Compendium.dms.items-dark-matter.Item.gBFf7s7c8QSVuACe';
    CONFIG.DND5E.weaponIds.martialblaster =
        'Compendium.dms.items-dark-matter.Item.J7hcfLcMJtuuvQVH';
    CONFIG.DND5E.weaponIds.sunstaff = 'Compendium.dms.items-dark-matter.Item.D525586k348q8iJ';
    CONFIG.DND5E.weaponIds.ioncannon = 'Compendium.dms.items-dark-matter.Item.nVbbMLkHGX0KcG55';
    CONFIG.DND5E.weaponIds.phaser = 'Compendium.dms.items-dark-matter.Item.A47LRwxBLY0ZjTvM';
    CONFIG.DND5E.weaponIds.repeater = 'Compendium.dms.items-dark-matter.Item.nVXoKeGmPyLUSP7O';
    CONFIG.DND5E.weaponIds.scarbine = 'Compendium.dms.items-dark-matter.Item.bNhhJSnanBpsoRAX';
    CONFIG.DND5E.weaponIds.swarmpistol = 'Compendium.dms.items-dark-matter.Item.fFthQy7bfInJy6pn';
    CONFIG.DND5E.weaponIds.anticarbine = 'Compendium.dms.items-dark-matter.Item.WLNlhCwNMPqXj3qM';
    CONFIG.DND5E.weaponIds.blitzcannon = 'Compendium.dms.items-dark-matter.Item.pbl5zsbWNNGayUng';
    CONFIG.DND5E.weaponIds.concussrifle = 'Compendium.dms.items-dark-matter.Item.WSx8HlTIMkSETQfc';
    CONFIG.DND5E.weaponIds.diodebeam = 'Compendium.dms.items-dark-matter.Item.kfSjRCcufKpjpiWC';
    CONFIG.DND5E.weaponIds.magnus = 'Compendium.dms.items-dark-matter.Item.oyOkQcddWA6P0qQH';
    CONFIG.DND5E.weaponIds.plasmalauncher =
        'Compendium.dms.items-dark-matter.Item.4sUkxsL4pozbOEqu';
    CONFIG.DND5E.weaponIds.psionichelm = 'Compendium.dms.items-dark-matter.Item.Jofn53Ra2H2VY9yX';
    CONFIG.DND5E.weaponIds.recgun = 'Compendium.dms.items-dark-matter.Item.AjBeUJ809N4L1OvJ';
    CONFIG.DND5E.weaponIds.singularityemitter =
        'Compendium.dms.items-dark-matter.Item.e0d9t7J3pHAUyjmY';
    CONFIG.DND5E.weaponIds.volcanic = 'Compendium.dms.items-dark-matter.Item.lp5qc6MnixsD5b2j';
    CONFIG.DND5E.weaponIds.antidaggers = 'Compendium.dms.items-dark-matter.Item.S92MUrVs0IkiHqWR';
    CONFIG.DND5E.weaponIds.ballisticgloves =
        'Compendium.dms.items-dark-matter.Item.xpN982HXYpOYptol';
    CONFIG.DND5E.weaponIds.laserclaws = 'Compendium.dms.items-dark-matter.Item.eg9EB00ob29KIFGv';
    CONFIG.DND5E.weaponIds.skathwarclub = 'Compendium.dms.items-dark-matter.Item.DQ8UNUTfAjHIr921';
    CONFIG.DND5E.weaponIds.voidshackles = 'Compendium.dms.items-dark-matter.Item.ajkR3RdRSg2tPcTP';
    CONFIG.DND5E.weaponIds.arcbaton = 'Compendium.dms.items-dark-matter.Item.JeQtmBYrfJPjryIL';
    CONFIG.DND5E.weaponIds.battlefist = 'Compendium.dms.items-dark-matter.Item.PUu68OGnlOwN5Gwr';
    CONFIG.DND5E.weaponIds.crystalinerod = 'Compendium.dms.items-dark-matter.Item.mG4OaiQyxe05IUc1';
    CONFIG.DND5E.weaponIds.laserhalfsword =
        'Compendium.dms.items-dark-matter.Item.qqloXunQBIScskya';
    CONFIG.DND5E.weaponIds.lasersword = 'Compendium.dms.items-dark-matter.Item.hJcSewk9cH0WLhv5';
    CONFIG.DND5E.weaponIds.photoniclash = 'Compendium.dms.items-dark-matter.Item.ve49aSFfLn9ovWKe';
    CONFIG.DND5E.weaponIds.plasmacutter = 'Compendium.dms.items-dark-matter.Item.qA4K8qtPwHuOgWNT';
    CONFIG.DND5E.weaponIds.repulsorgauntlet =
        'Compendium.dms.items-dark-matter.Item.YVi3pxuyfqZoO6ZY';
    CONFIG.DND5E.weaponIds.rockethammer = 'Compendium.dms.items-dark-matter.Item.CmGgrTdyICjyr182';
    CONFIG.DND5E.weaponIds.thermallance = 'Compendium.dms.items-dark-matter.Item.ByY6U4gPD60JVk7E';
    CONFIG.DND5E.weaponIds.wrenchinator = 'Compendium.dms.items-dark-matter.Item.40odIUG419QT7Txf';
    CONFIG.DND5E.tools.circuitkit = {
        ability: 'int',
        id: 'Compendium.dms.items-dark-matter.Item.f1k0RthbVbMExX3I',
    };
    CONFIG.DND5E.tools.mechtools = {
        ability: 'int',
        id: 'Compendium.dms.items-dark-matter.Item.cqJLKlGxRxBIg4LJ',
    };
    CONFIG.DND5E.tools.shiptools = {
        ability: 'int',
        id: 'Compendium.dms.items-dark-matter.Item.IXOdACPYT3SEbUyM',
    };
}

