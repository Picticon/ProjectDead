// // function debug(obj) {
// //     var output = "";
// //     for (var property in obj) {
// //         output += `${property}\n`;//=${obj[property]}\n`;
// //     }
// //     Utils.server.tell(`${output}`);
// // }

// function make(type, level, target, player, hand) {
//     player.swingArm(hand);
//     //Utils.server.tell(`swapping ${target.type} with ${type}`)
//     let myEntity = level.createEntity(type);
//     myEntity.x = target.x;
//     myEntity.y = target.y;
//     myEntity.z = target.z;
//     myEntity.potionEffects.add('minecraft:slowness', 120, 0, false, true);
//     myEntity.potionEffects.add('minecraft:blindness', 120, 0, false, true);
//     myEntity.setDefaultMovementSpeed(0);
//     myEntity.spawn();
//     target.remove();
//     Utils.server.runCommandSilent(`/playsound minecraft:item.chorus_fruit.teleport master @a ${player.x} ${player.y} ${player.z} .5 1.4 .5`);
//     Utils.server.runCommandSilent(`particle minecraft:crit ${target.x} ${target.y} ${target.z} .1 .9 .1 1 125 force`);
//     //Utils.server.tell(`swapped ${target.type} with ${type}`)
// }

// onEvent('item.entity_interact', event => {
//     const { item, player, entity, hand, target } = event;
//     //Utils.server.tell(`interact with ${event.target.type}`);
//     //debug(event.target);//Utils.server.tell(`${debug(event.target)}`);
//     if (hand == "MAIN_HAND" && item.id == 'kubejs:purifycrystal') {
//         if (target.type == 'graveyard:skeleton_creeper') make('minecraft:creeper', event.level, target, player, hand);
//         if (target.type == 'graveyard:ghoul') make('minecraft:zombie', event.level, target, player, hand);
//         if (target.type == 'graveyard:revenant') make('minecraft:skeleton', event.level, target, player, hand);
//         if (target.type == 'graveyard:nightmare') make('minecraft:enderman', event.level, target, player, hand);        
//         if (target.type == 'graveyard:acolyte') make('minecraft:zombie_villager', event.level, target, player, hand);        
//         //if (target.type == 'minecraft:chicken') make('minecraft:cow', event.level, target, player, hand);
//     }
//     //myEntity.setAggressive(false);
// });

// onEvent('block.right_click', event => {
//     const { item, player, block, hand } = event;

//     if (hand == "MAIN_HAND") {
//         if (block.id == 'kubejs:deadsand' && item.id == 'kubejs:purifycrystal') {
//             //Utils.server.tell(`${Object.keys(event.player)}`);
//             block.set('minecraft:sand')
//             swingy(player, block, hand);
//         }
//         if (block.id == 'kubejs:deadstone' && item.id == 'kubejs:purifycrystal') {
//             block.set('minecraft:stone')
//             swingy(player, block, hand);
//         }
//         if (block.id == 'kubejs:deaddirt' && item.id == 'kubejs:purifycrystal') {
//             block.set('minecraft:dirt')
//             swingy(player, block, hand);
//         }
//         if (block.id == 'kubejs:deadgravel' && item.id == 'kubejs:purifycrystal') {
//             block.set('minecraft:gravel')
//             swingy(player, block, hand);
//         }
//     }
// });

// function swingy(player, block, hand) {
//     player.swingArm(hand);
//     Utils.server.runCommandSilent(`/playsound minecraft:block.amethyst_block.hit master @a ${player.x} ${player.y} ${player.z} .5 1.4 .5`);
//     Utils.server.runCommandSilent(`particle minecraft:glow_squid_ink ${block.x} ${block.y} ${block.z} 0 .1 0 1 25 force`);
//     Utils.server.runCommandSilent(`particle minecraft:composter ${block.x} ${block.y} ${block.z} .25 .5 .25 1 50 force`);
//     //player.attack(1);
// }
