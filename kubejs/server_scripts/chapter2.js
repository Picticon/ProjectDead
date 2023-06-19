onEvent('recipes', event => {
    event.shaped('2x minecraft:slime_ball', [' P ', 'PWP', ' P '], { P: 'workspacedead:poop', W: 'minecraft:water_bucket' });
    event.shaped('2x minecraft:slime_ball', [' P ', 'PWP', ' P '], { P: 'workspacedead:poop', W: Item.of('woodenbucket:wooden_bucket', '{Fluid:{Amount:1000,FluidName:"minecraft:water"}}') });
    event.shaped('2x minecraft:slime_ball', [' P ', 'PWP', ' P '], { P: 'workspacedead:poop', W: Item.of('ceramicbucket:ceramic_bucket', '{Fluid:{Amount:1000,FluidName:"minecraft:water"}}') });
    // event.shaped(Item.of('minecraft:tipped_arrow', 9, '{Potion:"workspacedead:deadinside_potion"}'), [' S ', ' X ', ' X '], {
    //     S: 'workspacedead:deadsand', X: 'minecraft:stick'
    // });
    event.shaped('projectdead:reddeadstone', ['RRR', 'RSR', 'RRR'], { R: 'minecraft:red_dye', S: 'workspacedead:deadstone' });
    event.shaped('projectdead:bluedeadstone', [' R ', 'RSR', ' R '], { R: 'minecraft:blue_dye', S: 'workspacedead:deadstone' });
    event.shaped('projectdead:yellowdeadstone', [' R ', 'RSR', ' R '], { R: 'minecraft:yellow_dye', S: 'workspacedead:deadstone' });
    event.shaped('minecraft:dead_bush', ['SSS', 'SSS', ' S '], { S: 'minecraft:stick' });

    // event.replaceInput({ output: 'mysticalagriculture:infusion_altar' }, 'minecraft:gold_ingot', 'minecraft:gold_block');
    // event.replaceInput({ output: 'mysticalagriculture:infusion_altar' }, 'minecraft:stone', 'gold_block');

    event.remove({ output: "minecraft:gunpowder", mod: "thermal" });
    event.remove({ output: "minecraft:gunpowder", mod: "immersiveengineering" });
    event.remove({ output: "graveyard:dark_iron_ingot", mod: "graveyard" });

    event.shaped('workspacedead:potato_portal_catalyst', ['ABA', 'BCB', 'ABA'], { A: 'minecraft:grass', B: Item.of('minecraft:flint_and_steel', '{Damage:0}'), C: 'projectdead:singularity_potato' });

    event.remove({ output: "botania:apothecary_default", mod: "botania" });
    event.shaped('botania:apothecary_default', ['ABA', ' A ', 'ACA'], { A: 'minecraft:stone', C: 'bloodmagic:sacrificerune', B: '#botania:petals' });

    event.remove({ output: "cobblefordays:tier_2" });
    event.remove({ output: "cobblefordays:tier_3" });
    event.remove({ output: "cobblefordays:tier_4" });
    event.shaped('cobblefordays:tier_2', ['AAA', 'ABA', 'AAA'], { B: 'cobblefordays:tier_1', A: 'extrautilitiesrebirth:compressed_cobblestone' });
    event.shaped('cobblefordays:tier_3', ['AAA', 'ABA', 'AAA'], { B: 'cobblefordays:tier_2', A: 'minecraft:iron_block' });
    event.shaped('cobblefordays:tier_4', ['AAA', 'ABA', 'AAA'], { B: 'cobblefordays:tier_3', A: 'minecraft:gold_block' });
    event.shaped('cobblefordays:tier_5', ['AAA', 'ABA', 'AAA'], { A: 'minecraft:diamond_block', B: 'cobblefordays:tier_4' });

    //event.replaceInput({ output: "botania:apothecary_default" }, "minecraft:cobblestone", "bloodmagic:sacrificerune");
    //event.replaceInput({ output: "botania:apothecary_mossy" }, "minecraft:cobblestone", "bloodmagic:bettercapacityrune");

    //event.shaped('projectdead:'
});