onEvent('recipes', event => {
    event.remove({ id: "ftbic:shaped/fuse" });
    event.shaped('24x ftbic:fuse', ['AAA', 'BCB', 'AAA'], { B: 'ftbic:industrial_grade_metal', A: 'minecraft:glass', C: 'minecraft:blaze_rod' });

    event.custom({
        "type": "ftbic:macerating",
        "inputItems": [
            { "ingredient": { "item": "projectdead:singularity_poop" }, "count": 1 }
        ],
        "outputItems": [
            { "item": "minecraft:diamond", "count": 1 }
        ]
    });

    event.remove({ id: "ftbic:campfire_cooking/rubber" });
    event.remove({ id: "ftbic:smelting/rubber" });
    event.remove({ id: "ftbic:smoking/rubber" });

    event.remove({ output: "ftbic:centrifuge" });
    event.shaped('ftbic:centrifuge', ['   ', 'ABA', 'ACA'], { C: 'ftbic:fuse', B: 'ftbic:machine_block', A: 'myrtrees:tree_tap' });

});