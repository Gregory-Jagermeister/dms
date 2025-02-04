export function initialiseMouduleSettings() {
    // Initialise module settings here
    game.settings.register('dms', 'useCredits', {
        name: 'Use Credit Currency?',
        hint: 'Would you like to use credit currency from the Dark Matter source book?',
        scope: 'world',
        config: true,
        type: new foundry.data.fields.BooleanField(),
        default: true,
        requiresReload: true,
    });
}
