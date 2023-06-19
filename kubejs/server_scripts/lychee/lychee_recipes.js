onEvent('recipes', event => {
    event.custom({
        "type": "lychee:block_clicking",
        "item_in": {
            "item": "minecraft:stick"
        },
        "block_in": {
            "blocks": ["workspacedead:biomass_block"]
        },
        "post": [{
            "type": "drop_item",
            "item": "poisonous_potato",
            contextual: [
                {
                    "type": "chance",
                    "chance": 0.1
                }
            ]
        }, {
            "type": "add_item_cooldown",
            "s": .2
        }]
    });

    // event.custom({
    //     "type": "lychee:block_crushing",
    //     "item_in": [
    //         {
    //             "entity": "pig"
    //         }
    //     ],
    //     "post": [{
    //         "type": "drop_item",
    //         "item": "paper",
    //         "count": 3
    //     }, {
    //         "type": "add_item_cooldown",
    //         "s": .2
    //     }]
    // });

    event.custom(
        {
            "type": "lychee:item_inside",
            "item_in": {
                "item": "workspacedead:poopblock2x"
            },
            "time": 10,
            "block_in": {
                "blocks": ["minecraft:lava"],
                "state": {
                    "level": 0
                }
            },
            "post": [
                {
                    "type": "drop_item",
                    "item": "minecraft:pumpkin"
                }
            ]
        });
})