onEvent('recipes', event => {
    // template for all the colors:
    var common = {
        "type": "bonsaitrees3:sapling",
        "conditions": [{ "type": "forge:mod_loaded", "modid": "botania" }],
        "sapling": [
            { "item": "botania:white_double_flower" }
        ],
        "drops": [
            {
                "rolls": 1,
                "chance": 0.1,
                "result": {
                    "item": "botania:white_mystical_flower"
                }
            },
            {
                "rolls": 1,
                "chance": 0.9,
                "result": {
                    "item": "botania:white_petal"
                }
            },
            {
                "rolls": 1,
                "chance": 0.025,
                "result": {
                    "item": "botania:white_double_flower"
                }
            }
        ],
        "compatibleSoilTags": [
            "dirt",
            "grass"
        ]
    };
    var arr = ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "light_gray", "cyan", "purple", "blue", "brown", "green", "red", "black"];
    for (var idx = 0; idx < 16; idx++) {
        common.sapling[0].item = "botania:" + arr[idx] + "_double_flower";
        common.drops[0].result.item = "botania:" + arr[idx] + "_mystical_flower";
        common.drops[1].result.item = "botania:" + arr[idx] + "_petal";
        common.drops[2].result.item = "botania:" + arr[idx] + "_double_flower";
        event.custom(common);
    }
});