onEvent('recipes', event => {
    event.remove({ output: 'naturesaura:bottle_two_the_rebottling', mod: "naturesaura" });
    event.shapeless('naturesaura:bottle_two_the_rebottling', ['minecraft:glass_bottle', '#minecraft:planks', 'naturesaura:gold_powder']);
    event.remove({ output: 'naturesaura:ancient_sapling', mod: "naturesaura" });
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

    event.custom({
        "type": "naturesaura:tree_ritual",
        "ingredients": [
            { "item": "minecraft:sweet_berries" },
            { "item": "minecraft:glistering_melon_slice" },
            { "item": "minecraft:dried_kelp_block" },
            { "item": "minecraft:rose_bush" },
            { "tag": "minecraft:fishes" },
            { "item": "workspacedead:weakpurifycrystal" },
            { "item": "naturesaura:gold_leaf" }
        ],
        "sapling": {
            "item": "minecraft:spruce_sapling"
        },
        "output": {
            "item": "workspacedead:purifycrystal"
        },
        "time": 300
    });
    event.custom({
        "type": "naturesaura:tree_ritual",
        "ingredients": [
            { "item": "create:super_glue" },
            { "item": "mob_grinding_utils:solid_xp_baby" },
            { "item": "thermal:jelly" },
            { "item": "thermal:jelly" },
            { "item": "tconstruct:blood_slime_ball" },
            { "item": "tconstruct:blood_slime_ball" },
            { "item": "tconstruct:blood_slime_ball" },
            { "item": "naturesaura:gold_leaf" }
        ],
        "sapling": {
            "item": "minecraft:oak_sapling"
        },
        "output": {
            "item": "myrtrees:rubberwood_sapling",
            count: 4
        },
        "time": 300
    });

    event.shaped('32x naturesaura:gold_powder', ['CAC', 'ABA', 'CAC'], { A: 'minecraft:glowstone_dust', B: 'naturesaura:gold_powder', C: 'minecraft:gold_nugget' });
    event.shaped('naturesaura:gold_fiber', [' A ', 'ABA', ' A '], { B: 'naturesaura:gold_powder', A: 'minecraft:string' });
});