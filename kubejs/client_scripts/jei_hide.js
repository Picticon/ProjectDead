onEvent('jei.hide.items', event => {
    event.hide({ output: "thermal:charcoal_block" });

    event.hide('exnihilosequentia:tin_ingot');

    event.hide('mekanism:ingot_tin');
    event.hide('mekanism:nugget_tin');
    event.hide('mekanism:block_tin');

    event.hide('ftbic:tin_ingot');
    event.hide('ftbic:tin_nugget');
    event.hide('ftbic:tin_block');

    event.hide('ftb:iron_dust');
    event.hide('mekanism:dust_iron');

    event.hide('ftbic:copper_dust');
    event.hide('mekanism:dust_copper');
    event.hide('ftbic:copper_nugget');
    event.hide('immersiveengineering:nugget_copper');
    event.hide('create:copper_nugget');
    event.hide('exnihilosequentia:copper_nugget');
    event.hide('tconstruct:copper_nugget');
    event.hide('cyclic:copper_nugget');
    //event.hide({ output:  });
});
onEvent('jei.hide.fluids', event => {
    //event.hide('example:fluid')
});
onEvent('jei.information', event => {
    //event.add('example:ingredient', ['Line 1', 'Line 2'])
});
