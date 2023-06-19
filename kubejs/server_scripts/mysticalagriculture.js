onEvent('recipes', event => {
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
});