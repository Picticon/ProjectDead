// priority: 0

//console.info('Hello, World! (You will only see this line once in console, during startup)')


onEvent('server.load', e => {
    Utils.server.runCommandSilent(`/gamerule doTraderSpawning false`);
    Utils.server.runCommandSilent(`/gamerule disableRaids true`);
    Utils.server.runCommandSilent(`/gamerule doPatrolSpawning true`);
});

onEvent('item.registry', event => {
    // Register new items here
    event.create('projectdead:fakedeadleaves').displayName('Fake Dead Leaves');
    //event.create('projectdead:bigcrateoffood').displayName('');
    event.create('projectdead:netherigniter').displayName('Nether Igniter');
    event.create('projectdead:purified_flesh').displayName('Purified Flesh');

    event.create('projectdead:singularity_poop').displayName('Poop Singularity');
    event.create('projectdead:singularity_potato').displayName('Potato Singularity');

});


onEvent('item.modification', event => {
    event.modify('minecraft:egg', item => { item.maxStackSize = 64 })
    event.modify('minecraft:ender_pearl', item => { item.maxStackSize = 64 })
    event.modify('minecraft:snowball', item => { item.maxStackSize = 64 })
})
