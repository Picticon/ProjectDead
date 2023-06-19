onEvent('recipes', event => {
    // Purified Flesh
    event.recipes.bloodmagic.altar('projectdead:purified_flesh', 'rotten_flesh').upgradeLevel(2).altarSyphon(500).consumptionRate(5).drainRate(5);

    // Mushrooms from Biomass (compost) block
    event.custom({
        "type": "lychee:block_clicking",
        "item_in": { "item": "projectdead:purified_flesh" },
        "block_in": { "blocks": ["workspacedead:biomass_block"] },
        "post": [{
            "type": "drop_item",
            "item": "minecraft:brown_mushroom",
            contextual: [{ "type": "chance", "chance": 1, "count": 1 }]
        }, {
            "type": "drop_item",
            "item": "minecraft:red_mushroom",
            contextual: [{ "type": "chance", "chance": 1, "count": 1 }]
        },
        {
            "type": "drop_item",
            "item": "minecraft:brown_mushroom",
            contextual: [{ "type": "chance", "chance": .25, "count": 2 }]
        }, {
            "type": "drop_item",
            "item": "minecraft:red_mushroom",
            contextual: [{ "type": "chance", "chance": .25, "count": 2 }]
        },
        {
            "type": "add_item_cooldown",
            "s": 1
        }]
    });

    // golden fiber
    event.remove({ output: "naturesaura:gold_fiber", mod: "naturesaura" });
    event.shaped('naturesaura:gold_fiber', ['FGF', 'GRG', 'FGF'], { R: 'minecraft:grass', F: 'projectdead:purified_flesh', G: 'gold_nugget' });

    // Mycelium  poop==compost, sorta
    event.replaceInput({ output: "minecraft:podzol" }, "thermal:compost", "#workspacedead:poop");
    event.replaceInput({ output: "minecraft:mycelium" }, "thermal:compost", "#workspacedead:poop");


});
