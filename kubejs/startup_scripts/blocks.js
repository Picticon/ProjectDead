onEvent('block.registry', event => {
    event.create('projectdead:reddeadstone')
        .material('stone')
        .tagBlock('minecraft:mineable/pickaxe')
        .displayName('Red Dead Stone');
    event.create('projectdead:yellowdeadstone')
        .material('stone')
        .tagBlock('minecraft:mineable/pickaxe')
        .displayName('Yellow Dead Stone');
    event.create('projectdead:bluedeadstone')
        .material('stone')
        .tagBlock('minecraft:mineable/pickaxe')
        .displayName('Blue Dead Stone');

    // event.create('projectdead:thermalfoodblock')
    //     .material('wood')
    //     .tagBlock('minecraft:mineable/axe')
    //     .displayName('Blue Dead Stone');

    // // Block with custom type (see below for list of types)
    // event.create('test_block_slab', 'slab').material('glass').hardness(0.5)
})