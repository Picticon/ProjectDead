onEvent('recipes', event => {
    //event.replaceInput({id:''},'','');
    event.replaceInput({ id: 'mysticalagriculture:nature_agglomeratio' }, 'minecraft:cactus', 'minecraft:apple');
    event.replaceInput({ id: 'mysticalagriculture:nature_agglomeratio' }, 'minecraft:sugar_cane', 'minecraft:carrot');
    event.replaceInput({ id: 'mysticalagriculture:seed/infusion/nature' }, 'mysticalagriculture:prudentium_essence', 'mysticalagriculture:inferium_essence');
    /*
    event.remove({ output: 'mysticalagriculture:nature_seeds' });
    event.custom({
        "type": "mysticalagriculture:infusion",
        "conditions": [
            {
                "type": "mysticalagriculture:crop_enabled",
                "crop": "mysticalagriculture:coal"
            },
            {
                "type": "mysticalagriculture:crop_has_material",
                "crop": "mysticalagriculture:coal"
            }
        ],
        "input": {
            "type": "mysticalagriculture:crop_component",
            "component": "seed",
            "crop": "mysticalagriculture:coal"
        },
        "ingredients": [
            {
                "type": "mysticalagriculture:crop_component",
                "component": "material",
                "crop": "mysticalagriculture:coal"
            },
            {
                "type": "mysticalagriculture:crop_component",
                "component": "essence",
                "crop": "mysticalagriculture:coal"
            },
            {
                "type": "mysticalagriculture:crop_component",
                "component": "material",
                "crop": "mysticalagriculture:coal"
            },
            {
                "type": "mysticalagriculture:crop_component",
                "component": "essence",
                "crop": "mysticalagriculture:coal"
            },
            {
                "type": "mysticalagriculture:crop_component",
                "component": "material",
                "crop": "mysticalagriculture:coal"
            },
            {
                "type": "mysticalagriculture:crop_component",
                "component": "essence",
                "crop": "mysticalagriculture:coal"
            },
            {
                "type": "mysticalagriculture:crop_component",
                "component": "material",
                "crop": "mysticalagriculture:coal"
            },
            {
                "type": "mysticalagriculture:crop_component",
                "component": "essence",
                "crop": "mysticalagriculture:coal"
            }
        ],
        "result": {
            "item": "mysticalagriculture:nature_seeds"
        }
    });
    */

    event.custom({
        "type": "mysticalagriculture:infusion",
        "conditions": [
        ],
        "input": {
            "item": "workspacedead:deadstone"
        },
        "ingredients": [
            {
                "item": "minecraft:red_dye"
            },
            {
                "item": "minecraft:red_dye"
            },
            {
                "item": "minecraft:red_dye"
            },
            {
                "item": "minecraft:red_dye"
            },
            {
                "item": "minecraft:red_dye"
            },
            {
                "item": "minecraft:red_dye"
            },
            {
                "item": "minecraft:red_dye"
            },
            {
                "item": "minecraft:red_dye"
            }
        ],
        "result": {
            "item": "minecraft:redstone_ore"
        }
    });

});