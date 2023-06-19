onEvent('recipes', event => {
    event.remove({ id: "extendedcrafting:black_iron_ingot" });
    event.custom({
        type: "powah:energizing",
        ingredients: [
            { "item": "minecraft:iron_ingot" },
            { "item": "minecraft:iron_ingot" },
            { "item": "minecraft:iron_ingot" },
            { "item": "minecraft:iron_ingot" },
            { "item": "minecraft:black_dye" }

        ],
        energy: 15000,
        result: { "item": "extendedcrafting:black_iron_ingot", count: 4 }
    })
});