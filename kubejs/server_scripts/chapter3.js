onEvent('recipes', event => {

    // golden fiber
    event.remove({ output: "naturesaura:gold_fiber", mod: "naturesaura" });
    event.shaped('8x naturesaura:gold_fiber', ['RGR', 'GFG', 'RGR'], { R: 'minecraft:grass', F: 'projectdead:purified_flesh', G: 'gold_nugget' });

    // Mycelium  poop==compost, sorta
    event.replaceInput({ output: "minecraft:podzol" }, "thermal:compost", "#workspacedead:poop");
    event.replaceInput({ output: "minecraft:mycelium" }, "thermal:compost", "#workspacedead:poop");


});
