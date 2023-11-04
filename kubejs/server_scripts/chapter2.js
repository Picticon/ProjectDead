onEvent('recipes', event => {

    event.remove({ id: "botania:apothecary_default" });
    event.shaped('botania:apothecary_default', ['ABA', ' C ', 'AAA'], { C: 'workspacedead:weakpurifycrystal', B: '#botania:petals', A: 'minecraft:cobblestone' }).keepIngredient('workspacedead:weakpurifycrystal');

    event.remove({ id: "botania:pure_daisy/livingwood" });
    event.recipes.botania.pure_daisy("botania:livingwood_log", "workspacedead:deadlog");
    event.remove({ id: "botania:pure_daisy/livingrock" });
    event.recipes.botania.pure_daisy("botania:livingrock", "workspacedead:deadstone");
    event.remove({ id: "botania:mana_spreader" });
    event.shaped('botania:mana_spreader', ['AAA', 'BC ', 'AAA'], { A: 'botania:livingwood_log', B: 'workspacedead:weakpurifycrystal', C: '#botania:petals' });

    event.remove({ id: "mysticalagriculture:prosperity_seed_base" });
    event.recipes.botania.mana_infusion('mysticalagriculture:prosperity_seed_base', "minecraft:wheat_seeds", 200);

    event.remove({ id: "mysticalagriculture:inferium_seeds" });
    event.shaped('mysticalagriculture:inferium_seeds', ['AAA', 'ABA', 'AAA'], { A: 'mysticalagriculture:inferium_essence', B: 'mysticalagriculture:prosperity_seed_base' });

    //    event.remove({ id: "mysticalagriculture:seed/infusion/nature" }); // replaced with mutation
    var mutations2 = [
        //        ["mysticalagriculture:inferium_crop", "minecraft:sugar_cane", 'mysticalagriculture:nature_crop', 0.05]
    ];
    for (var i = 0; i < mutations2.length; i++) {
        event.custom({
            "type": "workspacedead:cropmutation", "inputs": [
                { "type": "block", "block": mutations2[i][0] },
                { "type": "block", "block": mutations2[i][1] }],
            "output": { "type": "block", "block": mutations2[i][2] },
            "catalyst": { "type": "block", "block": "workspacedead:poopblock" }, "chance": mutations2[i][3]
        });

    }

    event.replaceInput({ id: "mysticalagriculture:mystical_fertilizer" }, "minecraft:diamond", "workspacedead:poopblock");
    event.replaceInput({ id: "mysticalagriculture:mystical_fertilizer_better" }, "minecraft:diamond", "workspacedead:poopblock");

    event.remove({ id: "botania:runic_altar" });
    event.shaped('botania:runic_altar', [' A ', 'BBB', 'BCB'], { A: 'workspacedead:weakpurifycrystal', C: 'bloodmagic:altar', B: 'botania:livingrock' })
        .keepIngredient("workspacedead:weakpurifycrystal");

    event.remove({ id: "mysticalagriculture:infusion_altar" });
    event.shaped('mysticalagriculture:infusion_altar', ['ABA', ' C ', 'CCC'], { A: 'minecraft:yellow_wool', B: 'thermal:red_rockwool', C: 'botania:livingrock' });

    event.remove({ id: "mysticalagriculture:infusion_pedestal" });
    event.shaped('mysticalagriculture:infusion_pedestal', ['ABA', ' C ', ' C '], { A: 'minecraft:yellow_wool', B: 'thermal:red_rockwool', C: 'botania:livingrock' });

    // MANUAL ESSENCES TIER 1
    event.shaped('mysticalagriculture:wood_essence', ['ABA', 'BCB', 'ABA'], { C: '#matc:inferium', A: 'botania:green_petal_block', B: 'minecraft:oak_log' });
    event.shaped('mysticalagriculture:dirt_essence', ['ABA', 'BCB', 'ABA'], { C: '#matc:inferium', A: 'botania:brown_petal_block', B: 'excompressum:compressed_dirt' });
    event.shaped('mysticalagriculture:stone_essence', ['ABA', 'BCB', 'ABA'], { C: '#matc:inferium', B: 'excompressum:compressed_cobblestone', A: 'botania:light_gray_petal_block' });
    event.shaped('mysticalagriculture:deepslate_essence', ['ABA', 'BCB', 'ABA'], { C: '#matc:inferium', B: 'minecraft:deepslate', A: 'botania:gray_petal_block' });
    event.shaped('mysticalagriculture:ice_essence', ['ABA', 'BCB', 'ABA'], { C: '#matc:inferium', B: 'minecraft:snow_block', A: 'botania:white_petal_block' });
    event.replaceInput({ id: "mysticalagriculture:seed/infusion/wood" }, "#minecraft:logs", "mysticalagriculture:wood_essence");
    event.replaceInput({ id: "mysticalagriculture:seed/infusion/deepslate" }, "minecraft:deepslate", "mysticalagriculture:deepslate_essence");
    event.replaceInput({ id: "mysticalagriculture:seed/infusion/stone" }, "minecraft:stone", "mysticalagriculture:stone_essence");
    event.replaceInput({ id: "mysticalagriculture:seed/infusion/dirt" }, "minecraft:dirt", "mysticalagriculture:dirt_essence");
    event.replaceInput({ id: "mysticalagriculture:seed/infusion/ice" }, "minecraft:ice", "mysticalagriculture:ice_essence");

    // inferium crystal
    event.remove({ id: "matc:crystals/inferium" });
    event.shaped('matc:inferium_crystal', ['AAA', 'ABA', 'AAA'], { A: 'mysticalagriculture:inferium_essence', B: 'workspacedead:weakpurifycrystal' })
        .keepIngredient("workspacedead:weakpurifycrystal");

    // TINKERS
    event.remove({ id: "tconstruct:tables/pattern" });
    event.shaped('3x tconstruct:pattern', ['AB', 'BA'], { B: 'botania:manasteel_nugget', A: 'minecraft:oak_planks' });








    event.shaped('summoningrituals:altar', ['ABA', 'CDC', 'EFE'],
        { B: 'minecraft:yellow_wool', E: 'minecraft:iron_block', F: 'bloodmagic:sacrificerune', A: 'graveyard:corruption', D: 'workspacedead:weakpurifycrystal', C: 'minecraft:red_wool' })
        .keepIngredient('workspacedead:weakpurifycrystal');


    // prosperity shards via block
    event.custom({
        "type": "mysticalagriculture:infusion",
        "conditions": [],
        "input": { "item": "workspacedead:purifyshard" },
        "ingredients": [
            { "item": "minecraft:glass" },
            { "item": "minecraft:prismarine_crystals" },
            { "item": "minecraft:glass" },
            { "item": "minecraft:prismarine" },
            { "item": "minecraft:glass" },
            { "item": "minecraft:prismarine_crystals" },
            { "item": "minecraft:glass" },
            { "item": "minecraft:prismarine" }

        ],
        "result": { "item": "mysticalagriculture:prosperity_block" }
    });


    event.remove({ id: "bloodmagic:alchemytable/arcane_ash" });
    event.recipes.bloodmagic.alchemytable("bloodmagic:arcaneashes", ["#minecraft:coals", "minecraft:white_dye", "bloodmagic:plantoil", 'mysticalagriculture:inferium_essence', 'mysticalagriculture:prosperity_shard']).upgradeLevel(1);

    event.remove({ id: "graveyard:dark_iron_ingot" });
    event.recipes.bloodmagic.array("graveyard:dark_iron_ingot", "minecraft:iron_ingot", "graveyard:corruption").texture("bloodmagic:plantoil");

    event.remove({ id: "bloodmagic:altar/apprenticebloodorb" });
    event.recipes.bloodmagic.altar('bloodmagic:apprenticebloodorb', 'graveyard:dark_iron_ingot').upgradeLevel(1).altarSyphon(3000).consumptionRate(10).drainRate(2);

    // allow niter dust to be made earlier for gunpowder
    event.recipes.bloodmagic.alchemytable("3x thermal:niter_dust", ["bloodmagic:plantoil", "bloodmagic:plantoil", "mekanism:dust_charcoal"]).upgradeLevel(2);


    // allow nature seeds
    event.replaceInput({ id: 'mysticalagriculture:nature_agglomeratio' }, 'minecraft:cactus', 'minecraft:apple');
    event.replaceInput({ id: 'mysticalagriculture:nature_agglomeratio' }, 'minecraft:sugar_cane', 'minecraft:carrot');





    event.custom({
        "type": "lychee:block_interacting",
        "contextual": [{ "type": "is_sneaking", "secret": true }],
        "item_in": { "item": "bloodmagic:daggerofsacrifice" },
        "block_in": "bloodmagic:altar",
        "post": [
            { "type": "prevent_default" },
            { "type": "drop_item", "item": "projectdead:liverpiece" },
            { "type": "add_item_cooldown", "s": .5 },
            { "type": "hurt", "damage": 18, "source": "magic" }]
    }
    );

    event.shaped('minecraft:ink_sac', [' A ', 'A A', ' A '], { A: 'workspacedead:poop_squid' });

    event.custom({
        "type": "mysticalagriculture:infusion",
        "conditions": [],
        "input": { "item": "workspacedead:deadore" },
        "ingredients": [
            { "item": "thermal:spinach" },
            { "item": "minecraft:red_mushroom" },
            { "item": "minecraft:ink_sac" },
            { "item": "minecraft:wheat" },
            { "item": "projectdead:liverpiece" },
            { "item": "minecraft:cocoa_beans" },
            { "item": "minecraft:brown_mushroom" },
            { "item": "minecraft:potato" }

        ],
        "result": { "item": "minecraft:copper_ore" }
    });

    //event.shaped('matc:prudentium_crystal', ['AAA', 'BCD', 'AAA'], { A: 'mysticalagriculture:prudentium_essence', C: 'matc:inferium_crystal', D: 'bloodmagic:reagentwater', B: 'bloodmagic:reagentgrowth' }).keepIngredient("matc:inferium_crystal");

    event.remove({ id: 'mysticalagriculture:prudentium_block_combine' });
    event.remove({ id: 'matc:prudentium_essence' });
    event.shaped('mysticalagriculture:prudentium_essence', ['ABA', 'BCB', 'ABA'], { B: 'mysticalagriculture:inferium_essence', C: '#matc:inferium', A: '#workspacedead:poop' });

    event.remove({ id: 'mysticalagriculture:tertium_block_combine' });
    event.remove({ id: 'matc:tertium_essence' });
    event.shaped('mysticalagriculture:tertium_essence', ['ABA', 'BCB', 'ABA'], { B: 'mysticalagriculture:prudentium_essence', C: '#matc:prudentium', A: 'bloodmagic:reinforcedslate' });

});