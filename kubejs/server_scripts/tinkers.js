onEvent('recipes', event => {
    event.replaceInput({ output: 'tconstruct:pattern' }, 'minecraft:stick', 'minecraft:iron_nugget');
    event.remove({ output: 'tconstruct:smeltery_controller' })
    //event.remove({ id: Item.of('tconstruct:smeltery_controller', '{texture:"tconstruct:seared_bricks"}') });

    event.shaped(Item.of('tconstruct:smeltery_controller', '{texture:"tconstruct:seared_bricks"}'),
        [' S ', 'SCS', ' S '], { S: 'tconstruct:seared_bricks', C: 'minecraft:copper_block' });
    event.shaped(Item.of('tconstruct:smeltery_controller', '{texture:"tconstruct:seared_stone"}'),
        [' S ', 'SCS', ' S '], { S: 'tconstruct:seared_stone', C: 'minecraft:copper_block' });
    event.shaped(Item.of('tconstruct:smeltery_controller', '{texture:"tconstruct:seared_cracked_bricks"}'),
        [' S ', 'SCS', ' S '], { S: 'tconstruct:seared_cracked_bricks', C: 'minecraft:copper_block' });
    event.shaped(Item.of('tconstruct:smeltery_controller', '{texture:"tconstruct:seared_cobble"}'),
        [' S ', 'SCS', ' S '], { S: 'tconstruct:seared_cobble', C: 'minecraft:copper_block' });
    event.shaped(Item.of('tconstruct:smeltery_controller', '{texture:"tconstruct:seared_paver"}'),
        [' S ', 'SCS', ' S '], { S: 'tconstruct:seared_paver', C: 'minecraft:copper_block' });
    event.shaped(Item.of('tconstruct:smeltery_controller', '{texture:"tconstruct:seared_fancy_bricks"}'),
        [' S ', 'SCS', ' S '], { S: 'tconstruct:seared_fancy_bricks', C: 'minecraft:copper_block' });
    event.shaped(Item.of('tconstruct:smeltery_controller', '{texture:"tconstruct:seared_triangle_bricks"}'),
        [' S ', 'SCS', ' S '], { S: 'tconstruct:seared_triangle_bricks', C: 'minecraft:copper_block' });
    // event.custom({
    //     type: 'tconstruct:casting_basin',
    //     cast: {
    //         item: 'minecraft:nether_wart_block',
    //     },
    //     cast_consumed: true,
    //     fluid: {
    //         name: 'kubejs:liquid_mud',
    //         amount: 1000,
    //     },
    //     result: 'minecraft:podzol',
    //     cooling_time: 225,
    // })
    //     .id('inferno:mudtodirt');
});