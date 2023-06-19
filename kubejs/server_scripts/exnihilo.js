onEvent('recipes', event => {
    event.remove({ type: "exnihilosequentia:sieve" });
    event.recipes.exnihilosequentia.sieve('minecraft:dirt', 'minecraft:carrot')
        .addRoll(.5, 'string');
    event.recipes.exnihilosequentia.sieve('minecraft:gravel', 'exnihilosequentia:copper_pieces')
        .addRoll(1, 'iron')
        .addRoll(.5, 'diamond')
        .addRoll(.5, 'emerald')
        .addRoll(.5, 'netherite');
    event.recipes.exnihilosequentia.sieve('minecraft:dirt', 'exnihilosequentia:sugarcane_seeds')
        .addRoll(.1, 'netherite')
        .addRoll(.1, 'emerald')
        .addRoll(.1, 'diamond')
        .addRoll(.2, 'iron')
        ;
    event.recipes.exnihilosequentia.sieve('minecraft:podzol', 'minecraft:spruce_sapling')
        .addRoll(.25, 'iron');
    event.recipes.exnihilosequentia.sieve('exnihilosequentia:dust', 'mysticalagriculture:prosperity_shard')
        .addRoll(.5, 'iron');
    event.recipes.exnihilosequentia.sieve('exnihilosequentia:crushed_netherrack', 'minecraft:nether_wart').addRoll(1, 'iron');
    event.recipes.exnihilosequentia.heat('workspacedead:deadstone', 50);

    event.remove({ id: "exnihilosequentia:fluid_item/ens_end_stone" });

    const mesh = ['string', 'flint', 'iron', 'diamond', 'emerald', 'netherite'];
    const STRING = 0;
    const FLINT = 1;
    const IRON = 2;
    const DIAMOND = 3;
    const EMERALD = 4;
    const NETHERITE = 5;
    function progression(input, output, start, basechance, additive) {
        var multiplier = 0;
        for (var i = start; i <= NETHERITE; i++) {
            event.recipes.exnihilosequentia.sieve(input, output)
                .addRoll(basechance + additive * multiplier, mesh[i]);
        }
    }

    //progression('exnihilosequentia:crushed_end_stone', 'minecraft:diamond', IRON, .1, .1);

    event.recipes.exnihilosequentia.crook('workspacedead:deadleaves')
        .addDrop('workspacedead:deadsapling', 1, .75);

    event.recipes.exnihilosequentia.hammer('projectdead:reddeadstone')
        .addDrop('minecraft:redstone', 1, 1)
        .addDrop('minecraft:redstone', 2, .25)
        .addDrop('minecraft:redstone', 2, .1);
    event.recipes.exnihilosequentia.hammer('projectdead:bluedeadstone')
        .addDrop('minecraft:lapis_lazuli', 1, 1)
        .addDrop('minecraft:lapis_lazuli', 2, .25)
        .addDrop('minecraft:lapis_lazuli', 2, .1);
    event.recipes.exnihilosequentia.hammer('projectdead:yellowdeadstone')
        .addDrop('thermal:gold_dust', 1, 1)
        .addDrop('thermal:gold_dust', 2, .25)
        .addDrop('thermal:gold_dust', 2, .1);
    event.recipes.exnihilosequentia.hammer('mekanism:block_charcoal')
        .addDrop('mekanism:dust_charcoal', 9, 1)

});