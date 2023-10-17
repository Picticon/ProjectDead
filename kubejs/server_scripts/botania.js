onEvent("recipes", event => {
    event.remove({ output: 'botania:spark' });
    event.shaped('botania:spark', [' P ', 'DGD', ' P '], { G: 'minecraft:gold_nugget', P: '#botania:petals', D: "#workspacedead:poop" });

    event.remove({ id: 'botania:runic_altar/air' });
    event.recipes.botania.runic_altar("botania:rune_air",
        ["botania:mana_powder", "botania:manasteel_ingot", "#minecraft:carpets", "minecraft:feather", "minecraft:string", 'mysticalagriculture:air_essence'], 5000);

    event.remove({ id: 'botania:runic_altar/earth' });
    event.recipes.botania.runic_altar("botania:rune_earth",
        ["botania:mana_powder", "botania:manasteel_ingot", "minecraft:stone", "minecraft:coal_block", "#forge:mushrooms", 'mysticalagriculture:earth_essence'], 5000);

    event.remove({ id: 'botania:runic_altar/fire' });
    event.recipes.botania.runic_altar("botania:rune_fire",
        ["botania:mana_powder", "botania:manasteel_ingot", "minecraft:nether_brick", "minecraft:gunpowder", "minecraft:nether_wart", 'mysticalagriculture:fire_essence'], 5000);

    event.remove({ id: 'botania:runic_altar/water' });
    event.recipes.botania.runic_altar("botania:rune_water",
        ["botania:mana_powder", "botania:manasteel_ingot", "minecraft:bone_meal", "minecraft:sugar_cane", "minecraft:fishing_rod", 'mysticalagriculture:water_essence'], 5000);


    event.remove({ output: 'botania:rune_mana' });
    event.recipes.botania.runic_altar("botania:rune_mana",
        ["bloodmagic:reinforcedslate", "botania:manasteel_ingot", "botania:mana_powder", "naturesaura:infused_iron", "spirit:soul_powder"], 5000);

    event.recipes.botania.terra_plate("projectdead:netherigniter", ["botania:manasteel_ingot", "minecraft:flint_and_steel", "minecraft:netherrack"], 500000);



    // event.remove({ output: 'botania:thermalily' });
    // event.remove({ output: 'botania:rosa_arcana' });
    // event.remove({ output: 'botania:munchdew' });
    // event.remove({ output: 'botania:entropinnyum' });
    // event.remove({ output: 'botania:kekimurus' });
    // event.remove({ output: 'botania:gourmaryllis' });
    // event.remove({ output: 'botania:slimmus' });
    // event.remove({ output: 'botania:spectrolus' });
    // event.remove({ output: 'botania:dandelifeon' });
    // event.remove({ output: 'botania:afflowsia' });
    // event.remove({ output: 'botania:shulkmenot' });


});