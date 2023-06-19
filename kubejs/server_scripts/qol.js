// priority: 1
onEvent('recipes', event => {
    //Utils.server.tell("QOL Loading");

    event.shapeless('1x minecraft:wheat_seeds', ['1x minecraft:wheat']);

    // Sticks from logs
    event.shaped("16x minecraft:stick", [
        ["#minecraft:oak_logs"], // can't figure out how to exclude botania logs...
        ["#minecraft:oak_logs"],
    ]);
    //event.remove({ output: "16x minecraft:stick", mod: "botania" });

    // Hopper using 2 logs
    event.shaped(Item.of("minecraft:hopper"), [
        ["minecraft:iron_ingot", "#minecraft:logs", "minecraft:iron_ingot"],
        ["minecraft:iron_ingot", "#minecraft:logs", "minecraft:iron_ingot"],
        [null, "minecraft:iron_ingot", null],
    ]);

    // // Buckets 9x from blocks of iron
    // event.shaped(Item.of("minecraft:bucket", 9), [
    //     ["null", "null", "null"],
    //     ["#forge:storage_blocks/iron", "null", "#forge:storage_blocks/iron"],
    //     ["null", "#forge:storage_blocks/iron", "null"],
    // ]);

    // Chests from logs
    event.shaped(Item.of("minecraft:chest", 4), [
        ["#minecraft:logs_that_burn", "#minecraft:logs_that_burn", "#minecraft:logs_that_burn"],
        ["#minecraft:logs_that_burn", null, "#minecraft:logs_that_burn"],
        ["#minecraft:logs_that_burn", "#minecraft:logs_that_burn", "#minecraft:logs_that_burn"],
    ]);

    // Firework Rockets 9x
    event.remove({ output: "minecraft:firework_rocket" });
    event.shaped(Item.of("minecraft:firework_rocket", 9), [
        ["minecraft:gunpowder", "minecraft:paper", "null"],
        ["minecraft:gunpowder", "minecraft:paper", "null"],
        ["minecraft:gunpowder", "minecraft:paper", "null"],
    ]);

    // Firework Rockets 6x
    event.remove({ output: "minecraft:firework_rocket" });
    event.shaped(Item.of("minecraft:firework_rocket", 6), [
        ["minecraft:gunpowder", "minecraft:paper", "null"],
        ["minecraft:gunpowder", "minecraft:paper", "null"],
    ]);

    // Firework Rockets 3x
    event.remove({ output: "minecraft:firework_rocket" });
    event.shaped(Item.of("minecraft:firework_rocket", 3), [
        ["minecraft:gunpowder", "minecraft:paper", "null"],
    ]);
});
