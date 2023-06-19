// priority: 0

//settings.logAddedRecipes = true
//settings.logRemovedRecipes = true
//settings.logSkippedRecipes = false
settings.logErroringRecipes = true

//console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
    //Utils.server.tell("QOL Loading");
    event.shaped('workspacedead:deadcookie', ['SS', 'SS'], { S: 'workspacedead:deadsand' });
    event.shapeless('workspacedead:dirtybread', ['1x workspacedead:poop', '2x workspacedead:deadsand']);

    //event.shaped('8x workspacedead:deaddirt', ['SSS', 'SPS', 'SSS'], { P: 'workspacedead:poop', S: 'workspacedead:deadsand' });
    //event.shaped('8x workspacedead:deadgravel', ['SSS', 'SPS', 'SSS'], { P: 'workspacedead:poop', S: 'workspacedead:deaddirt' });

    event.shaped('workspacedead:dirtybow', ['SP ', 'S P', 'SP '], { P: '#workspacedead:poop', S: 'minecraft:stick' });
    event.shaped('12x workspacedead:deadarrow', [' A ', ' B ', ' C '], { A: 'workspacedead:deadsand', B: 'minecraft:stick', C: 'minecraft:feather' });
    event.shaped('workspacedead:dirtysword', ['P', 'N', 'S'], { N: 'workspacedead:deadsand', P: '#workspacedead:poop', S: 'minecraft:stick' });

    event.shapeless('4x workspacedead:deadplanks', ['1x workspacedead:deadlog']);

    event.shapeless('1x minecraft:beetroot_seeds', ['1x minecraft:wheat_seeds', '4x minecraft:red_dye']);

    event.shapeless('4x exnihilosequentia:porcelain_clay',
        ['1x workspacedead:deadclay', '4x minecraft:bone_meal', 'workspacedead:purifyshard']).keepIngredient('workspacedead:purifyshard');

    event.shaped('workspacedead:purifyshard', [' P ', 'PSP', ' P '], { S: 'bloodmagic:blankslate', P: '#workspacedead:poop' });

    event.shaped('workspacedead:weakpurifycrystal', ['ABC', 'DSE', 'FGH'], {
        S: 'workspacedead:purifyshard',
        'A': 'minecraft:potato',
        'B': 'minecraft:grass',
        'C': 'minecraft:poppy',
        'D': 'minecraft:wheat',
        'E': 'minecraft:beetroot',
        'F': 'minecraft:pumpkin',
        'G': 'minecraft:oak_sapling',
        'H': 'minecraft:carrot'
    });
    event.shaped('4x projectdead:fakedeadleaves', ['PWP', 'XSX', 'PWP'], { W: 'minecraft:grass', S: 'workspacedead:purifyshard', X: 'minecraft:stick', P: 'workspacedead:poop' })
        .keepIngredient('workspacedead:purifyshard');

    event.shaped('workspacedead:biomass_block', ['HHH', 'HPH', 'HHH'], { H: 'minecraft:hay_block', P: 'workspacedead:poopblock2x' });
    event.shaped('workspacedead:grassypotato_seeds', ['PWP', 'WOW', 'PWP'], { P: 'minecraft:potato', W: 'minecraft:wheat', O: 'workspacedead:poopblock2x' });
    event.shaped('minecraft:poppy', ['ABA', 'ACA', 'AXA'], { B: 'minecraft:apple', A: 'minecraft:grass', C: 'workspacedead:purifyshard', X: 'graveyard:corruption' })
        .keepIngredient('workspacedead:purifyshard');;

    //event.shaped('workspacedead:purifyshard', [' P ', 'PSP', ' P '], { S: 'bloodmagic:blankslate', P: 'workspacedead:poop' });

    //event.shapeless(Item.of('minecraft:splash_potion', '{Potion:"workspacedead:deadinside_potion"}'), ["1x workspacedead:deadsand"]);
})

