onEvent('recipes', event => {
    settings.logRemovedRecipes = true;
    event.remove({
        output: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:poop"}')
    });
    event.remove({ type: 'extendedcrafting:compressor' });
    event.remove({ output: "extendedcrafting:singularity" });
    event.custom({
        "type": "extendedcrafting:compressor",
        "powerCost": 25000,
        "powerRate": 500,
        "inputCount": 256,
        "ingredient": {
            "tag": "workspacedead:poop"
        },
        "catalyst": {
            "item": "minecraft:paper"
        },
        "result": {
            "type": "forge:nbt",
            "item": "projectdead:singularity_poop"
        }
    });
    event.custom({
        "type": "extendedcrafting:compressor",
        "powerCost": 25000,
        "powerRate": 500,
        "inputCount": 256,
        "ingredient": {
            "item": "minecraft:potato"
        },
        "catalyst": {
            "item": "minecraft:poisonous_potato"
        },
        "result": {
            "type": "forge:nbt",
            "item": "projectdead:singularity_potato"
        }
    });
});