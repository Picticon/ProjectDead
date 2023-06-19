onEvent('recipes', event => {
    event.shaped('minecraft:melon', ['SSS', 'SPS', 'SXS'], { S: 'minecraft:green_dye', P: 'minecraft:pumpkin', X: 'projectdead:singularity_poop' });
    event.shaped('minecraft:rose_bush', ['SPS', 'SPS', 'SXS'], { S: 'minecraft:string', P: 'minecraft:poppy', X: 'projectdead:singularity_poop' });
    event.shaped('minecraft:kelp', [' A ', ' A ', ' B '], { B: 'projectdead:singularity_poop', A: 'minecraft:grass' });
    event.shaped('minecraft:sweet_berries', [' A ', ' B ', ' C '], { B: 'minecraft:dead_bush', C: 'projectdead:singularity_poop', A: 'minecraft:redstone' });

    event.custom({
        "type": "naturesaura:tree_ritual",
        "ingredients": [
            { "item": "minecraft:oak_sapling" },
            { "item": "minecraft:oak_sapling" },
            { "item": "minecraft:oak_sapling" },
            { "item": "minecraft:oak_sapling" },
            { "item": "minecraft:oak_sapling" },
            { "item": "minecraft:oak_sapling" },
            { "item": "minecraft:oak_sapling" },
            { "item": "naturesaura:gold_leaf" }
        ],
        "sapling": {
            "item": "minecraft:oak_sapling"
        },
        "output": {
            "item": "naturesaura:ancient_sapling",
            "count": 2
        },
        "time": 200
    });

    event.shaped('4x powah:dielectric_paste', ['ABA', 'ABA', ' C '], { B: 'minecraft:clay_ball', C: 'minecraft:torch', A: 'minecraft:charcoal' });
    event.shapeless('2x workspacedead:ender_dust', ['workspacedead:ender_rod']);
    event.remove({ output: "draconicevolution:draconium_core" });
    event.shaped('draconicevolution:draconium_core', ['ABA', 'BCB', 'ABA'], { B: 'minecraft:gold_ingot', C: 'workspacedead:ender_dust', A: 'draconicevolution:draconium_ingot' });
    event.remove({ output: "draconicevolution:crafting_core" });
    event.shaped('draconicevolution:crafting_core', ['ABA', 'BCB', 'ABA'], { A: 'minecraft:lapis_block', C: 'draconicevolution:draconium_core', B: 'workspacedead:ender_dust' });
    event.remove({ output: "draconicevolution:generator" });
    event.shaped('draconicevolution:generator', ['ABA', 'BCB', 'ADA'], { B: 'minecraft:iron_ingot', D: 'draconicevolution:draconium_core', A: 'minecraft:end_stone', C: 'minecraft:furnace' });
    event.remove({ output: "draconicevolution:basic_crafting_injector" });
    event.shaped('draconicevolution:basic_crafting_injector', ['ABA', 'CDC', 'CCC'], { C: 'minecraft:stone', B: 'draconicevolution:draconium_core', D: 'minecraft:iron_block', A: 'workspacedead:ender_dust' });

    event.replaceInput({ id: "extendedcrafting:compressor" }, "extendedcrafting:elite_component", "extendedcrafting:basic_component");
    event.replaceInput({ id: "extendedcrafting:compressor" }, "extendedcrafting:elite_catalyst", "extendedcrafting:basic_catalyst");

    event.shaped('workspacedead:mrhanky_block', ['ABC', 'ADA', 'AAA'], { A: 'minecraft:stone', C: 'projectdead:singularity_poop', D: 'minecraft:water_bucket', B: 'minecraft:red_wool' });

});
