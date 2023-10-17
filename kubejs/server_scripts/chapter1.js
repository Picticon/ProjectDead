// priority: 0

//settings.logAddedRecipes = true
//settings.logRemovedRecipes = true
//settings.logSkippedRecipes = false
settings.logErroringRecipes = true

//console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
    event.remove({ type: "exnihilosequentia:sieve" });
    //Utils.server.tell("QOL Loading");
    event.shaped('2x workspacedead:deadcookie', ['SS', 'SS'], { S: 'workspacedead:deadgrass_scraps' });
    event.shaped('4x workspacedead:dirtybread', [' A ', 'ABA', ' A '], { B: '#workspacedead:poop', A: 'workspacedead:deadgrass_scraps' });

    event.shaped('workspacedead:dirtybow', ['SP ', 'S P', 'SP '], { P: '#workspacedead:poop', S: 'minecraft:stick' });
    event.shaped('12x workspacedead:deadarrow', [' A ', ' B ', ' C '], { A: 'workspacedead:deadsand', B: 'minecraft:stick', C: 'minecraft:feather' });
    event.shaped('workspacedead:dirtysword',[' AB',' BC','DC '],{A:'graveyard:corruption',C:'#workspacedead:poop',D:'minecraft:stick',B:'workspacedead:deadstone'});

    event.shapeless('4x workspacedead:deadplanks', ['1x workspacedead:deadlog']);

    event.remove({ output: "bloodmagic:altar" });
    event.shaped('bloodmagic:altar', ['   ', 'SCS', 'SSS'], { C: 'graveyard:corruption', S: 'workspacedead:deadstone' });

    event.remove({ output: "bloodmagic:sacrificialdagger" });
    event.shaped('bloodmagic:sacrificialdagger', ['  C', 'SC ', 'DS '], { C: 'graveyard:corruption', S: 'workspacedead:deadstone', D: 'graveyard:bone_dagger' });

    event.recipes.bloodmagic.altar('minecraft:cobblestone', 'workspacedead:deadstone').upgradeLevel(0).altarSyphon(100).consumptionRate(25).drainRate(25);

    // corruption to first orb
    event.remove({ id: 'bloodmagic:altar/weakbloodorb' });
    event.recipes.bloodmagic.altar('bloodmagic:weakbloodorb', 'graveyard:corruption').upgradeLevel(0).altarSyphon(2000).consumptionRate(5).drainRate(1);

    event.custom(
        {
            "type": "lychee:item_inside",
            "item_in": {
                "item": "workspacedead:poop_seeded"
            },
            "time": 10,
            "block_in": {
                "blocks": ["minecraft:water"],
                "state": {
                    "level": 0
                }
            },
            "post": [
                {
                    "type": "drop_item",
                    "item": "minecraft:wheat_seeds"
                }
            ]
        });

    event.shaped('minecraft:dirt', [' A ', 'BCB', ' B '], { A: 'workspacedead:deaddirt', B: 'minecraft:bone_meal', C: 'workspacedead:purifyshard' });

    event.custom({
        "type": "farmersdelight:cutting",
        "ingredients": [{ "item": "workspacedead:deadlog" }],
        "tool": { "type": "farmersdelight:tool_action", "action": "axe_strip" },
        "result": [{ "item": "workspacedead:deadplanks" }, { "item": "workspacedead:deadplanks" }, { "item": "farmersdelight:tree_bark" }],
        "sound": "minecraft:item.axe.strip"
    });

    event.remove({ output: 'farmersdelight:organic_compost' });
    event.shaped('farmersdelight:organic_compost', ['ABA', 'BCB', 'ABA'], { A: 'farmersdelight:tree_bark', B: 'minecraft:wheat', C: 'workspacedead:poopblock' });
    event.shaped('workspacedead:biomass_block', ['ABA', 'BCB', 'ABA'], { B: 'minecraft:hay_block', C: 'workspacedead:poopblock', A: 'farmersdelight:organic_compost' });
    event.shaped('workspacedead:grassypotato_seeds', ['PWP', 'WOW', 'PWP'], { P: 'minecraft:potato', W: 'minecraft:wheat', O: 'workspacedead:poopblock2x' });

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

    event.shaped('minecraft:poppy', ['ABA', 'ACA', 'AXA'], { B: 'minecraft:apple', A: 'minecraft:grass', C: 'workspacedead:purifyshard', X: 'graveyard:corruption' })
        .keepIngredient('workspacedead:purifyshard');;


    event.recipes.exnihilosequentia.sieve('minecraft:gravel', 'exnihilosequentia:gold_pieces')
        .addRoll(1, 'iron')
        .addRoll(.5, 'diamond')
        .addRoll(.5, 'emerald')
        .addRoll(.5, 'netherite');

    //event.shaped('workspacedead:purifyshard', [' P ', 'PSP', ' P '], { S: 'bloodmagic:blankslate', P: 'workspacedead:poop' });

    //event.shapeless(Item.of('minecraft:splash_potion', '{Potion:"workspacedead:deadinside_potion"}'), ["1x workspacedead:deadsand"]);
})

