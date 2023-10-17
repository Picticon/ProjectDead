onEvent('recipes', event => {

    event.shaped('summoningrituals:altar', ['ABA', 'CDC', 'EFE'],
        { B: 'minecraft:yellow_wool', E: 'minecraft:iron_block', F: 'bloodmagic:sacrificerune', A: 'graveyard:corruption', D: 'workspacedead:weakpurifycrystal', C: 'minecraft:red_wool' })
        .keepIngredient('workspacedead:weakpurifycrystal');

    event.remove({ id: "mysticalagriculture:infusion_altar" });
    event.shaped('mysticalagriculture:infusion_altar', ['ABA', ' C ', 'DDD'], { D: 'minecraft:stone', A: 'minecraft:gold_ingot', C: 'workspacedead:weakpurifycrystal', B: 'minecraft:red_wool' })
        .keepIngredient('workspacedead:weakpurifycrystal');

    event.remove({ id: "mysticalagriculture:infusion_pedestal" });
    event.shaped('mysticalagriculture:infusion_pedestal', ['ABA', ' C ', ' D '], { D: 'minecraft:stone', A: 'minecraft:gold_ingot', C: 'workspacedead:weakpurifycrystal', B: 'minecraft:red_wool' })
        .keepIngredient('workspacedead:weakpurifycrystal');


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



    //event.shaped('projectdead:'
});