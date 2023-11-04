// priority: 0

//settings.logAddedRecipes = true
//settings.logRemovedRecipes = true
//settings.logSkippedRecipes = false
settings.logErroringRecipes = true

//console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
    event.remove({ type: "exnihilosequentia:sieve" });
    //Utils.server.tell("QOL Loading");

    event.remove({ id: "minecraft:wooden_pickaxe" });
    event.shaped('minecraft:wooden_pickaxe', ['ABA', ' C ', ' D '], { C: 'workspacedead:poop', B: 'graveyard:corruption', D: 'minecraft:stick', A: 'workspacedead:deadplanks' });

    // early survival
    event.shaped('4x workspacedead:dirtybread', [' A ', 'ABA', ' A '], { B: '#workspacedead:poop', A: 'workspacedead:deadgrass_scraps' });
    event.shaped('workspacedead:dirtybow', ['SP ', 'S P', 'SP '], { P: '#workspacedead:poop', S: 'minecraft:stick' });
    event.shaped('12x workspacedead:deadarrow', [' A ', ' B ', ' C '], { A: 'workspacedead:deadsand', B: 'minecraft:stick', C: 'minecraft:feather' });

    // poop gen
    event.shaped('2x workspacedead:deadcookie', ['SS', 'SS'], { S: 'workspacedead:deadgrass_scraps' });
    event.shaped('workspacedead:dirtysword', [' AB', ' BC', 'DC '], { A: 'graveyard:corruption', C: '#workspacedead:poop', D: 'minecraft:stick', B: 'workspacedead:deadstone' });
    event.shaped('5x graveyard:corruption', [' A ', 'ABA', ' A '], { A: '#workspacedead:poop', B: 'graveyard:corruption' });

    // early wood
    event.shapeless('4x workspacedead:deadplanks', ['1x workspacedead:deadlog']);

    // life infusions
    event.remove({ output: "bloodmagic:altar" });
    event.shaped('bloodmagic:altar', ['   ', 'SCS', 'SSS'], { C: 'graveyard:corruption', S: 'workspacedead:deadstone' });

    event.remove({ output: "bloodmagic:sacrificialdagger" });
    event.shaped('bloodmagic:sacrificialdagger', ['  C', 'SC ', 'DS '], { C: 'graveyard:corruption', S: 'workspacedead:deadstone', D: 'graveyard:bone_dagger' });

    event.recipes.bloodmagic.altar('minecraft:cobblestone', 'workspacedead:deadstone').upgradeLevel(0).altarSyphon(200).consumptionRate(15).drainRate(15);

    event.shaped('minecraft:dirt', [' A ', 'BCB', ' B '], { A: 'workspacedead:deaddirt', B: 'minecraft:bone_meal', C: 'workspacedead:purifyshard' });
    //event.shaped('workspacedead:purifyshard', [' P ', 'PSP', ' P '], { S: 'bloodmagic:blankslate', P: '#workspacedead:poop' });
    event.recipes.bloodmagic.altar('workspacedead:purifyshard', 'graveyard:corruption').upgradeLevel(0).altarSyphon(750).consumptionRate(5).drainRate(1);

    //event.recipes.bloodmagic.altar('minecraft:grass', 'workspacedead:deadgrass_scraps').upgradeLevel(0).altarSyphon(200).consumptionRate(15).drainRate(15);

    event.remove({ id: 'bloodmagic:altar/weakbloodorb' });
    event.recipes.bloodmagic.altar('bloodmagic:weakbloodorb', 'evilcraft:hardened_blood_shard').upgradeLevel(0).altarSyphon(2000).consumptionRate(5).drainRate(1);

    event.remove({ id: 'evilcraft:crafting/blood_extractor' });
    event.shaped('evilcraft:blood_extractor', ['AAA', ' B ', ' C '], { B: 'minecraft:bowl', C: 'graveyard:corruption', A: 'minecraft:bone' });

    event.custom(
        {
            "type": "lychee:item_inside",
            "item_in": { "item": "workspacedead:poop_seeded" },
            "time": 10,
            "block_in": { "blocks": ["minecraft:water"], "state": { "level": 0 } },
            "post": [{ "type": "drop_item", "item": "minecraft:wheat_seeds" }
            ]
        });

    event.custom(
        {
            "type": "lychee:block_interacting",
            "post": [
                {
                    "type": "random",
                    "entries": [
                        { "type": "place", "weight": 3, "block": "minecraft:poppy" },
                        { "type": "place", "weight": 1, "block": "minecraft:oak_sapling" },
                        { "type": "place", "weight": 1, "block": "minecraft:spruce_sapling" },
                        { "type": "place", "weight": 1, "block": "minecraft:jungle_sapling" },
                        { "type": "place", "weight": 1, "block": "minecraft:acacia_sapling" },
                        { "type": "place", "weight": 1, "block": "minecraft:dark_oak_sapling" },
                        { "type": "place", "weight": 1, "block": "minecraft:birch_sapling" }
                    ]
                },
                { "type": "execute", "command": "playsound minecraft:block.enchantment_table.use record @s" }
            ],
            "item_in": { "item": "graveyard:corruption" },
            "block_in": "minecraft:grass"
        });
    event.custom(
        {
            "type": "lychee:block_interacting",
            "post": [
                {
                    "type": "place", "weight": 1, "block": "workspacedead:mutating_farmland"
                },
                { "type": "execute", "command": "playsound minecraft:block.enchantment_table.use record @s" }
            ],
            "item_in": { "item": "graveyard:corruption" },
            "block_in": "minecraft:farmland"
        });

    event.remove({ id: "workspacedead:cropmutation/grassypotatoseed_from_potato_grass" });


    var mutations = [
        ["minecraft:wheat", "minecraft:wheat", "minecraft:potatoes", 0.05], // potato
        ["minecraft:wheat", "minecraft:potatoes", "workspacedead:grassypotato_plant", 0.05],
        ["minecraft:wheat", "botania:red_mystical_flower", "minecraft:beetroots", 0.05], // beetroot
        ["minecraft:wheat", "botania:blue_mystical_flower", "supplementaries:wild_flax", .05], // Wild Flax
        ["minecraft:wheat", "botania:orange_mystical_flower", "minecraft:carrots", 0.05], // carrot
        ["minecraft:wheat", "botania:green_mystical_flower", "minecraft:melon_stem", 0.05], // melon
        ["minecraft:melon_stem", "botania:orange_mystical_flower", "minecraft:pumpkin_stem", 0.05], // pumpkin
        ["minecraft:wheat", "botania:lime_mystical_flower", "minecraft:sugar_cane", 0.05] // sugarcane
    ];
    for (var i = 0; i < mutations.length; i++) {
        event.custom({
            "type": "workspacedead:cropmutation", "inputs": [
                { "type": "block", "block": mutations[i][0] },
                { "type": "block", "block": mutations[i][1] }],
            "output": { "type": "block", "block": mutations[i][2] },
            "catalyst": { "type": "block", "block": "workspacedead:poopblock" }, "chance": mutations[i][3]
        });

    }

    event.custom({
        "type": "farmersdelight:cutting",
        "ingredients": [{ "item": "workspacedead:deadlog" }],
        "tool": { "type": "farmersdelight:tool_action", "action": "axe_strip" },
        "result": [{ "item": "workspacedead:deadplanks" }, { "item": "workspacedead:deadplanks" }, { "item": "farmersdelight:tree_bark" }],
        "sound": "minecraft:item.axe.strip"
    });

    // event.remove({ output: 'farmersdelight:organic_compost' });
    // event.shaped('farmersdelight:organic_compost', ['ABA', 'BCB', 'ABA'], { A: 'farmersdelight:tree_bark', B: 'minecraft:wheat', C: 'workspacedead:poopblock' });
    // event.shaped('workspacedead:biomass_block', ['ABA', 'BCB', 'ABA'], { B: 'minecraft:hay_block', C: 'workspacedead:poopblock', A: 'farmersdelight:organic_compost' });
    // event.shaped('workspacedead:grassypotato_seeds', ['PWP', 'WOW', 'PWP'], { P: 'minecraft:potato', W: 'minecraft:wheat', O: 'workspacedead:poopblock2x' });

    //event.shapeless('1x minecraft:beetroot_seeds', ['1x minecraft:wheat_seeds', '4x minecraft:red_dye']);

    // event.shapeless('4x exnihilosequentia:porcelain_clay',
    //     ['1x workspacedead:deadclay', '4x minecraft:bone_meal', 'workspacedead:purifyshard']).keepIngredient('workspacedead:purifyshard');


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
    // event.shaped('4x projectdead:fakedeadleaves', ['PWP', 'XSX', 'PWP'], { W: 'minecraft:grass', S: 'workspacedead:purifyshard', X: 'minecraft:stick', P: 'workspacedead:poop' })
    //     .keepIngredient('workspacedead:purifyshard');

    // event.shaped('minecraft:poppy', ['ABA', 'ACA', 'AXA'], { B: 'minecraft:apple', A: 'minecraft:grass', C: 'workspacedead:purifyshard', X: 'graveyard:corruption' })
    //     .keepIngredient('workspacedead:purifyshard');;


    // event.recipes.exnihilosequentia.sieve('minecraft:gravel', 'exnihilosequentia:gold_pieces')
    //     .addRoll(1, 'iron')
    //     .addRoll(.5, 'diamond')
    //     .addRoll(.5, 'emerald')
    //     .addRoll(.5, 'netherite');

    //event.shaped('workspacedead:purifyshard', [' P ', 'PSP', ' P '], { S: 'bloodmagic:blankslate', P: 'workspacedead:poop' });

    //event.shapeless(Item.of('minecraft:splash_potion', '{Potion:"workspacedead:deadinside_potion"}'), ["1x workspacedead:deadsand"]);
})

