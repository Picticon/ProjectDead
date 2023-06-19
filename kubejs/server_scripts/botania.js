onEvent("recipes", event => {
    //event.recipes.botania.pure_daisy("minecraft:lapis_block", "projectdead:bluedeadstone");
    //event.recipes.botania.pure_daisy("minecraft:redstone_block", "projectdead:reddeadstone");
    event.recipes.botania.pure_daisy("minecraft:glowstone", "projectdead:yellowdeadstone");

    event.recipes.botania.pure_daisy("minecraft:coal_block", "mekanism:block_charcoal");

    event.remove({ output: 'botania:mana_pool' });
    event.shaped('botania:mana_pool', ['X X', 'SPS', 'SSS'], { S: 'botania:livingrock', X: 'minecraft:snow_block', P: "workspacedead:sheeppoop" });

    event.remove({ output: 'botania:mana_spreader' });
    event.shaped('botania:mana_spreader', ['WWW', 'WSP', 'WWW'], { W: '#botania:livingwood_logs', S: '#botania:petals', P: "workspacedead:cowpoop" });

    event.remove({ output: 'botania:spark' });
    event.shaped('botania:spark', [' P ', 'DGD', ' P '], { G: 'minecraft:gold_nugget', P: '#botania:petals', D: "#workspacedead:poop" });

    event.remove({ output: 'botania:runic_altar' });
    event.recipes.botania.mana_infusion("botania:runic_altar", "bloodmagic:altar", 250000, "workspacedead:biomass_block");

    event.remove({ output: 'botania:endoflame' });
    event.recipes.botania.petal_apothecary('botania:endoflame', ["#botania:petals/red", "#botania:petals/light_gray", "workspacedead:poopblock", "minecraft:coal_block", "minecraft:coal_block"]);

    event.remove({ output: 'botania:hydroangeas' });
    event.recipes.botania.petal_apothecary('botania:hydroangeas', ["#botania:petals/blue", "#botania:petals/cyan", "workspacedead:poopblock", "minecraft:snow_block", "minecraft:snow_block"]);

    event.remove({ output: 'botania:rune_mana' });
    event.recipes.botania.runic_altar("botania:rune_mana",
        ["bloodmagic:reinforcedslate", "botania:manasteel_ingot", "botania:mana_powder", "naturesaura:infused_iron", "spirit:soul_powder"], 5000);

    event.recipes.botania.terra_plate("projectdead:netherigniter", ["botania:manasteel_ingot", "minecraft:flint_and_steel", "minecraft:netherrack"], 500000);

    event.recipes.botania.runic_altar('summoningrituals:altar',
        [
            'tconstruct:rose_gold_block',
            'minecraft:yellow_dye',
            "botania:manasteel_ingot",
            "botania:mana_powder",
            'minecraft:blue_dye',
            'minecraft:red_dye',
            'graveyard:dark_iron_ingot',
            'graveyard:dark_iron_ingot',
            'graveyard:dark_iron_ingot'
        ]
    );


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