// onEvent('entity.spawned', event => {
//     //debug2(event.entity);
//     //Utils.server.tell(`${event.entity.type}`);
//     /** @type {Internal.Mob} */     
//     var entity = event.entity;
//     if (entity.type == 'minecraft:creeper') {
//         let fusetime = 15;
//         let nbt = entity.fullNBT;
//         //Utils.server.tell(`creeper! ${nbt.ExplosionRadius} ${nbt.Fuse}`);
//         nbt.Fuse = fusetime;
//         nbt.ExplosionRadius = 10;
//         //nbt.powered = 1;
//         event.entity.fullNBT = nbt;
//         //event.entity.nbt.cena=true;
//         entity.getPotionEffects().add("kubejs:johncena",100000);
//         //Utils.server.tell(`creeper had potion added`);
//         //entity.addEffect(new Internal.EffectInstance()
//         //event.entity.setDefaultMovementSpeed(20);
//     }
// })

// onEvent('entity.death', event => {
//     Utils.server.tell(`death of ${event.entity.type}`);
//     if (event.entity.type == 'minecraft:creeper') {
//         let nbt = event.entity.fullNBT;
//         Utils.server.tell(`creeper! ${nbt.ExplosionRadius} ${nbt.Fuse}`);
//         if (nbt.ExplosionRadius > 3) {
//             Utils.server.runCommandSilent(`/playsound minecraft:item.chorus_fruit.teleport master @a ${event.entity.x} ${event.entity.y} ${event.entity.z} .5 1.4 .5`);
//         }
//     }
// });

// function debug2(obj) {
//     var output = "";
//     for (var property in obj) {
//         output += `${property}\n`;//=${obj[property]}\n`;
//     }
//     Utils.server.tell(`${output}`);
// }

// onEvent('level.explosion.pre', event => {
//     //debug2(event.getExploder());
//     //Utils.server.tell(`explosion = ${event.type}`);
//     if (event.getExploder().type == 'minecraft:creeper') {
//         //Utils.server.tell("JOHN");
//         let nbt = event.getExploder().fullNBT;
//         if (nbt.ExplosionRadius >= 5) {
//             Utils.server.runCommandSilent(`/playsound kubejs:rickroll master @a ${event.getExploder().x} ${event.getExploder().y} ${event.getExploder().z} .5 1 .5`);
//         }
//         //Utils.server.tell("CENA!");
//     }
//     // Utils.server.tell(`explode pre event=${event}`);
//     // //Utils.server.tell(`explode pre of ${debug2(event)}`);
//     // var exploder = event.getExploder();
//     // Utils.server.tell(`explode pre exploder=${debug2(exploder)}`);
// });