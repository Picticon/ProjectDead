// priority: 10

onEvent('recipes', event => {
    function replace(olditem, newitem) {
        event.replaceOutput({ output: olditem }, olditem, newitem);
        event.replaceInput({}, olditem, newitem);
    }
    replace("mekanism:dust_sulfur", "thermal:sulfur_dust");
    replace("bloodmagic:sulfur", "thermal:sulfur_dust");
    replace("immersiveengineering:dust_sulfur", "thermal:sulfur_dust");

    replace("bloodmagic:saltpeter", "thermal:niter_dust");
    replace("immersiveengineering:dust_saltpeter", "thermal:niter_dust");

    replace("bloodmagic:coalsand", "mekanism:dust_coal");

    replace("thermal:charcoal_block", "mekanism:block_charcoal");


    // IRON
    replace('mekanism:dust_iron', 'thermal:iron_dust')
    replace('ftbic:iron_dust', 'thermal:iron_dust')

    // TIN
    replace('exnihilosequentia:tin_ingot', 'thermal:tin_ingot');
    replace('mekanism:ingot_tin', 'thermal:tin_ingot')
    replace('ftbic:tin_ingot', 'thermal:tin_ingot');
    replace('mekanism:nugget_tin', 'thermal:tin_nugget');
    replace('ftbic:tin_nugget', 'thermal:tin_nugget');
    event.remove({ id: "mekanism:processing/tin/ingot/from_block" });
    event.remove({ id: "mekanism:processing/tin/ingot/from_nuggets" });
    event.remove({ id: "ftbic:shaped/nuggets/tin_to_tin_ingot" });
    event.remove({ id: "ftbic:shapeless/tin_block_to_tin_ingot" });

    // COPPER... SO MUCH COPPER
    replace('ftbic:copper_nugget', 'thermal:copper_nugget');
    replace('immersiveengineering:nugget_copper', 'thermal:copper_nugget');
    replace('create:copper_nugget', 'thermal:copper_nugget');
    replace('exnihilosequentia:copper_nugget', 'thermal:copper_nugget');
    replace('tconstruct:copper_nugget', 'thermal:copper_nugget');
    replace('cyclic:copper_nugget', 'thermal:copper_nugget');

    replace('ftbic:copper_dust', 'thermal:copper_dust');
    replace('immersiveengineering:dust_copper', 'thermal:copper_dust');
    replace('mekanism:dust_copper', 'thermal:copper_dust');
    replace('bloodmagic:coppersand', 'thermal:copper_dust');

    event.remove({ id: "thermal:storage/copper_ingot_from_nuggets" });

    event.remove({ id: "create:crafting/materials/copper_nugget" });
    event.remove({ id: "create:crafting/materials/copper_ingot" });

    event.remove({ id: "immersiveengineering:crafting/nugget_copper_to_copper_ingot" });
    event.remove({ id: "immersiveengineering:crafting/copper_ingot_to_nugget_copper" });
    event.remove({ id: "immersiveengineering:smelting/copper_ingot_from_dust_from_blasting" });

    event.remove({ id: "ftbic:shapeless/copper_ingot_to_copper_nugget" });
    event.remove({ id: "ftbic:shaped/nuggets/copper_to_copper_ingot" });
    event.remove({ id: "ftbic:blasting/dusts/copper_to_copper_ingot" });

    event.remove({ id: "exnihilosequentia:ens_copper_nugget" });

    event.remove({ id: "cyclic:copper_nugget" });
    event.remove({ id: "cyclic:copper_ingot" });

    event.remove({ id: "tconstruct:common/materials/copper_nugget_from_ingot" });
    event.remove({ id: "tconstruct:common/materials/copper_ingot_from_nuggets" });

    event.remove({ id: "bloodmagic:smelting/blasting_ingot_copper" });

    event.remove({ id: "mekanism:processing/copper/ingot/from_dust_blasting" });


});