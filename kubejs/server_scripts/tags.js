onEvent('item.tags', event => {
    // Get the #forge:cobblestone tag collection and add Diamond Ore to it
    // event.get('forge:cobblestone').add('minecraft:diamond_ore')

    // Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
    // event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
    event.get('workspacedead:fireproofitem').add('workspacedead:poopblock2x');
    event.get('workspacedead:fireproofitem').add('minecraft:pumpkin');
    //event.get('workspacedead:fireproofitem').add('workspacedead:poop');

    event.add("ftbultimine:excluded_blocks", [
        "workspacedead:deadstone",
        "workspacedead:deadsand",
        "workspacedead:deadclay",
        "workspacedead:deadgravel",
        "workspacedead:deaddirt",
        "workspacedead:deadslate"
    ]);
})
