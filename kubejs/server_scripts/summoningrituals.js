onEvent('recipes', (event) => {
    //piglin
    event.recipes.summoningrituals
        .altar('graveyard:corruption') //catalyst
        .mobOutput(SummoningOutput.mob('minecraft:zombie').count(6).offset(0, 4, 0))
        .input('minecraft:beef')
        .input('minecraft:green_wool')
        .input('botania:mana_powder')
        .input('botania:manasteel_ingot')
        .input('minecraft:bone')
        .recipeTime(300)

    event.recipes.summoningrituals
        .altar('minecraft:egg') //catalyst
        .mobOutput(SummoningOutput.mob('chickens:quartz_chicken').count(2).offset(0, 4, 0))
        .input('minecraft:soul_sand')
        .input('minecraft:glass')
        .input('minecraft:end_stone')
        .input('minecraft:wheat_seeds')
        .input('minecraft:glowstone')
        .recipeTime(150)

    event.recipes.summoningrituals
        .altar('bloodmagic:soulsnare') //catalyst
        .mobOutput(SummoningOutput.mob('minecraft:guardian').count(2).offset(0, 4, 0))
        .input('#minecraft:fishes')
        .input('#minecraft:fishes')
        .input('#minecraft:fishes')
        .input('#minecraft:fishes')
        .input('minecraft:water_bucket')
        .input('bloodmagic:basemonstersoul')
        .recipeTime(150)



    event.recipes.summoningrituals
        .altar('bloodmagic:soulsnare') //catalyst
        .mobOutput(SummoningOutput.mob('minecraft:zombifiedpiglin').count(4).offset(0, 4, 0))
        .input('minecraft:obsidian')
        .input('minecraft:obsidian')
        .input('minecraft:obsidian')
        .input('minecraft:obsidian')
        .input('minecraft:flint_and_steel')
        .input('bloodmagic:basemonstersoul')
        .recipeTime(150)

        // what was this?!?
   // event.shapeless('workspacedead:weakpurifycrystal', ['minecraft:flint_and_steel', '4x minecraft:obsidian']);

    // //piglin
    // event.recipes.summoningrituals
    //     .altar('soulshards:vile_dust') //catalyst
    //     .mobOutput(SummoningOutput.mob('minecraft:piglin').offset(0,4,0))
    //     .input('minecraft:crimson_fungus')
    //     .input('minecraft:red_mushroom')
    //     .input('minecraft:gold_ingot')
    //     .input('minecraft:bone_block')
    //     .recipeTime(300)

    // //slime
    // event.recipes.summoningrituals
    //     .altar('soulshards:vile_dust') //catalyst
    //     .mobOutput(SummoningOutput.mob('minecraft:slime').count(2).offset(0,4,0))
    //     .input('3x minecraft:lime_dye')
    //     .input('biomesoplenty:flesh')
    //     .input('minecraft:magma_cream')
    //     .recipeTime(300)

    // //strider
    // event.recipes.summoningrituals
    //     .altar('soulshards:vile_dust') //catalyst
    //     .mobOutput(SummoningOutput.mob('minecraft:strider').offset(0,4,0))
    //     .input('3x minecraft:leather')
    //     .input('minecraft:warped_fungus')
    //     .input('minecraft:bone_block')
    //     .recipeTime(300)

    // //chicken
    // event.recipes.summoningrituals
    //     .altar('soulshards:vile_dust') //catalyst
    //     .mobOutput(
    //         SummoningOutput.mob('minecraft:chicken').offset(0,4,0).count(4)
    //     )
    //     .input('3x minecraft:wheat_seeds')
    //     .input('minecraft:warped_fungus')
    //     .input('minecraft:bone_meal')
    //     .recipeTime(300)

    // //cow
    // event.recipes.summoningrituals
    //     .altar('soulshards:vile_dust') //catalyst
    //     .mobOutput(SummoningOutput.mob('minecraft:cow').offset(0,4,0).count(2))
    //     .input('3x minecraft:leather')
    //     .input('minecraft:warped_fungus')
    //     .input('minecraft:bone_meal')
    //     .input('minecraft:wheat')
    //     .recipeTime(300)

    // //sheep
    // event.recipes.summoningrituals
    //     .altar('soulshards:vile_dust') //catalyst
    //     .mobOutput(SummoningOutput.mob('minecraft:sheep').offset(0,4,0).count(2))
    //     .input('3x minecraft:white_wool')
    //     .input('minecraft:warped_fungus')
    //     .input('minecraft:bone_meal')
    //     .recipeTime(300)

    // //rabbit
    // event.recipes.summoningrituals
    //     .altar('soulshards:vile_dust') //catalyst
    //     .mobOutput(SummoningOutput.mob('minecraft:rabbit').offset(0,4,0).count(2))
    //     .input('minecraft:carrot')
    //     .input('3x minecraft:leather')
    //     .input('minecraft:warped_fungus')
    //     .input('minecraft:bone_meal')
    //     .recipeTime(300)

    // //bee
    // event.recipes.summoningrituals
    //     .altar('soulshards:vile_dust') //catalyst
    //     .mobOutput(SummoningOutput.mob('minecraft:bee').offset(0,1,0).count(2))
    //     .input('minecraft:poppy')
    //     .input('minecraft:warped_fungus')
    //     .input('minecraft:sugar')
    //     .recipeTime(300)

    // //wolf
    // event.recipes.summoningrituals
    //     .altar('soulshards:vile_dust') //catalyst
    //     .mobOutput(SummoningOutput.mob('minecraft:wolf').offset(0,1,0).count(1))
    //     .input('3x minecraft:bone')
    //     .input('3x minecraft:rotten_flesh')
    //     .recipeTime(300)

    // //blaze
    // event.recipes.summoningrituals
    //     .altar('soulshards:vile_dust') //catalyst
    //     .mobOutput(SummoningOutput.mob('minecraft:blaze').offset(0,1,0).count(3))
    //     .input('minecraft:crimson_fungus')
    //     .input('minecraft:blaze_powder')
    //     .input('2x nethersdelight:propelpearl')
    //     .recipeTime(300)

    // //snow golem
    // event.recipes.summoningrituals
    //     .altar('soulshards:vile_dust') //catalyst
    //     .mobOutput(
    //         SummoningOutput.mob('minecraft:snow_golem').offset(0,1,0).count(4)
    //     )
    //     .input(Item.of('minecraft:potion','{Potion:"minecraft:water"}'))
    //     .input(Item.of('minecraft:potion','{Potion:"minecraft:water"}'))
    //     .input(Item.of('minecraft:potion','{Potion:"minecraft:water"}'))
    //     .input('minecraft:crimson_fungus')
    //     .input('minecraft:experience_bottle')
    //     .recipeTime(300)

    // //blizz
    // event.recipes.summoningrituals
    //     .altar('naturesaura:gold_powder') //catalyst
    //     .mobOutput(
    //         SummoningOutput.mob('thermal:blizz')
    //             .offset(0,1,0)
    //             .data({
    //                 Health: 60,
    //                 Attributes: [{ Name: 'generic.max_health',Base: 60 }],
    //             })
    //             .count(4)
    //     )
    //     .input('minecraft:blaze_rod')
    //     .input('2x bloodmagic:reagentwater')
    //     .input('minecraft:blue_ice')
    //     .recipeTime(300)

    // //blitz
    // event.recipes.summoningrituals
    //     .altar('naturesaura:gold_powder') //catalyst
    //     .mobOutput(
    //         SummoningOutput.mob('thermal:blitz')
    //             .offset(0,1,0)
    //             .data({
    //                 Health: 60,
    //                 Attributes: [{ Name: 'generic.max_health',Base: 60 }],
    //             })
    //             .count(4)
    //     )
    //     .input('ars_nouveau:air_essence')
    //     .input('bloodmagic:reagentair')
    //     .input('occultism:spirit_attuned_gem')
    //     .recipeTime(300)

    // //basalz
    // event.recipes.summoningrituals
    //     .altar('naturesaura:gold_powder') //catalyst
    //     .mobOutput(
    //         SummoningOutput.mob('thermal:basalz')
    //             .offset(0,1,0)
    //             .data({
    //                 Health: 60,
    //                 Attributes: [{ Name: 'generic.max_health',Base: 60 }],
    //             })
    //             .count(4)
    //     )
    //     .input('ars_nouveau:earth_essence')
    //     .input('bloodmagic:reagentlava')
    //     .input('occultism:spirit_attuned_gem')
    //     .recipeTime(300)

    // //Zombie Villager
    // event.recipes.summoningrituals
    //     .altar('soulshards:vile_dust') //catalyst
    //     .mobOutput(
    //         SummoningOutput.mob('minecraft:zombie_villager')
    //             .offset(0,1,0)
    //             .data({
    //                 Health: 60,
    //                 Attributes: [{ Name: 'generic.max_health',Base: 60 }],
    //             })
    //             .count(3)
    //     )
    //     .input('biomesoplenty:flesh')
    //     .input('occultism:iesnium_ingot')
    //     .input('evilcraft:dark_power_gem')
    //     .input('naturesaura:infused_iron')
    //     .recipeTime(320)

    // //Squids
    // event.recipes.summoningrituals
    //     .altar('soulshards:vile_dust') //catalyst
    //     .mobOutput(
    //         SummoningOutput.mob('minecraft:squid')
    //             .offset(0,1,0)
    //             .data({
    //                 Health: 60,
    //                 Attributes: [{ Name: 'generic.max_health',Base: 60 }],
    //             })
    //             .count(4)
    //     )
    //     .mobOutput(
    //         SummoningOutput.mob('minecraft:glow_squid')
    //             .offset(0,1,0)
    //             .data({
    //                 Health: 60,
    //                 Attributes: [{ Name: 'generic.max_health',Base: 60 }],
    //             })
    //             .count(1)
    //     )
    //     .input('minecraft:cod')
    //     .input('minecraft:ink_sac')
    //     .input('minecraft:water_bucket')
    //     .input('minecraft:glowstone_dust')
    //     .recipeTime(320)

    // //spiders
    // event.recipes.summoningrituals
    //     .altar('soulshards:vile_dust') //catalyst
    //     .mobOutput(SummoningOutput.mob('minecraft:spider').offset(0,1,0).count(6))
    //     .mobOutput(
    //         SummoningOutput.mob('canes_wonderful_spiders:hard_shell_spider')
    //             .offset(0,1,0)
    //             .data({
    //                 Health: 100,
    //                 Attributes: [{ Name: 'generic.max_health',Base: 100 }],
    //             })
    //             .count(1)
    //     )
    //     .input('minecraft:cobweb')
    //     .input('minecraft:rotten_flesh')
    //     .input('hexerei:dried_belladonna_flowers')
    //     .recipeTime(320)

    // //Crow
    // event.recipes.summoningrituals
    //     .altar('hexerei:sage_bundle')
    //     .mobOutput(SummoningOutput.mob('hexerei:crow').offset(0,1,0).count(1))
    //     .input('3x minecraft:feather')
    //     .input('hexerei:seed_mixture')
    //     .input('minecraft:hopper')
    //     .recipeTime(200)

    // //Witherstorm
    // event.recipes.summoningrituals
    //     .altar('avaritia:infinity_ingot')
    //     .mobOutput(
    //         SummoningOutput.mob('witherstormmod:wither_storm')
    //             .offset(0,10,0)
    //             .count(1)
    //     )

    //     .input('bloodmagic:dungeon_metal')
    //     .input('inferno:purifiedinfernalessence')
    //     .input('ars_nouveau:glyph_wither')
    //     .input(
    //         Item.of(
    //             'productivebees:configurable_comb',
    //             '{EntityTag:{type:"productivebees:withered"}}'
    //         )
    //     )
    //     .input('reliquary:witherless_rose')
    //     .sacrifice('minecraft:wither')
    //     .sacrificeRegion(5,5)
    //     .blockBelow('inferno:pseudo_command_block')
    //     .dayTime('night')
    //     .weather('thunder')
    //     .recipeTime(200)
    //     .id('inferno:witherstorm')
})