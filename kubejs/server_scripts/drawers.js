onEvent('recipes', event => {
    event.remove({ id: "storagedrawers:controller" });
    event.remove({ id: "storagedrawers:upgrade_template" });
    event.remove({ id: "storagedrawers:compacting_drawers_3" });

    event.shaped('storagedrawers:controller', ['AAA', 'BCB', 'ADA'],
        { A: 'minecraft:stone', C: 'projectdead:widget_drawers', B: 'minecraft:comparator', D: 'minecraft:lapis_block' });

    event.shaped('storagedrawers:compacting_drawers_3', ['AAA', 'BCB', 'ADA'],
        { A: 'minecraft:stone', C: 'projectdead:widget_drawers', D: 'minecraft:iron_ingot', B: 'minecraft:piston' });

    event.shaped('storagedrawers:upgrade_template', ['AAA', 'ABA', 'AAA'],
        { B: 'projectdead:widget_drawers', A: 'minecraft:stick' });


    event.replaceInput({ output: "storagedrawers:iron_storage_upgrade" },
        "storagedrawers:upgrade_template", "storagedrawers:obsidian_storage_upgrade");
    event.replaceInput({ output: "storagedrawers:gold_storage_upgrade" },
        "storagedrawers:upgrade_template", "storagedrawers:iron_storage_upgrade");
    event.replaceInput({ output: "storagedrawers:diamond_storage_upgrade" },
        "storagedrawers:upgrade_template", "storagedrawers:gold_storage_upgrade");
    event.replaceInput({ output: "storagedrawers:emerald_storage_upgrade" },
        "storagedrawers:upgrade_template", "storagedrawers:diamond_storage_upgrade");
});
