// priority: 100
onEvent('recipes', event => {
    var toremove = [
        "ftbic:smelting/dusts/copper_to_copper_ingot",
        "immersiveengineering:smelting/copper_ingot_from_dust",
        "mekanism:processing/copper/ingot/from_dust_smelting",
        "bloodmagic:smelting/ingot_copper"
    ];
    for (var i = 0; i < toremove.length; i++) {
        event.remove({ id: toremove[i] });
    }
});
