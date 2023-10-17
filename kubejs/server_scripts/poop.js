onEvent('recipes', event => {
    event.shapeless('workspacedead:poopblock', ['9x #workspacedead:poop']);
    event.shapeless('workspacedead:poopblock2x', ['9x workspacedead:poopblock']);

    event.shapeless('draconicevolution:draconium_dust', ['5x workspacedead:poop_dragon']);


    event.shapeless('minecraft:rotten_flesh', ['3x workspacedead:poop_zombie']);
    event.shapeless('minecraft:leather', ['4x workspacedead:poop_cow']);

    // animal products
    event.shaped('3x minecraft:porkchop', ['AAA', 'A A', 'AAA'], { A: 'workspacedead:poop_pig' });
    event.shaped('3x minecraft:beef', ['AAA', 'A A', 'AAA'], { A: 'workspacedead:poop_cow' });
    event.shaped('3x minecraft:mutton', ['AAA', 'A A', 'AAA'], { A: 'workspacedead:poop_sheep' });
    event.shaped('minecraft:white_wool', ['AA', 'AA'], { A: 'workspacedead:poop_sheep' });
    event.shaped('minecraft:egg', [' A ', 'A A', ' A '], { A: 'workspacedead:poop_chicken' });
    event.shaped('3x minecraft:chicken', ['AAA', 'A A', 'AAA'], { A: 'workspacedead:poop_chicken' });

    // ingots
    event.shapeless('minecraft:gold_ingot', ['6x workspacedead:poop_piglin']);
    event.shapeless('minecraft:gold_ingot', ['6x workspacedead:poop_zombifiedpiglin']);
    event.shapeless('minecraft:iron_ingot', ['6x workspacedead:poop_iron_golem']);


    // guardians
    event.shaped('minecraft:prismarine_crystals', [' A ', 'AAA', ' A '], { A: 'workspacedead:poop_guardian' });
    event.shaped('minecraft:prismarine_shard', ['A A', ' A ', 'A A'], { A: 'workspacedead:poop_guardian' });

});