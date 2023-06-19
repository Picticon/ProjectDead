onEvent('recipes', event => {
    // event.smelting("minecraft:diamond", "projectdead:singularity_poop");
    event.remove({ output: "create:super_glue" });
    event.shaped('create:super_glue', ['AB ', 'CC ', '   '], { B: 'minecraft:iron_nugget', C: '#forge:slimeballs', A: 'minecraft:blaze_rod' });
});