onEvent('recipes', event => {

    // allow niter dust to be made earlier for gunpowder
    event.recipes.bloodmagic.alchemytable("3x thermal:niter_dust", ["bloodmagic:plantoil", "bloodmagic:plantoil", "mekanism:dust_charcoal"]).upgradeLevel(2);
    //event.recipes.bloodmagic.array(output, baseInput, addedInput)
    event.recipes.bloodmagic.array("graveyard:dark_iron_ingot", "minecraft:iron_ingot", "graveyard:corruption").texture("bloodmagic:plantoil");

    event.recipes.remove({ output: Item.of('patchouli:guide_book', '{"patchouli:book":"bloodmagic:guide"}') });
    event.recipes.bloodmagic.altar(Item.of('patchouli:guide_book', '{"patchouli:book":"bloodmagic:guide"}'), 'minecraft:book').upgradeLevel(0).altarSyphon(50).consumptionRate(25).drainRate(25);

    // event.recipes.remove({ output: 'bloodmagic:apprenticebloodorb' });
    // event.recipes.bloodmagic.altar('bloodmagic:apprenticebloodorb', 'botania:manasteel_ingot').upgradeLevel(0).altarSyphon(500).consumptionRate(5).drainRate(5);

    //event.recipes.bloodmagic.altar('minecraft:dirt', 'workspacedead:deaddirt').upgradeLevel(0).altarSyphon(100).consumptionRate(25).drainRate(25);

    event.recipes.bloodmagic.altar('workspacedead:deadleaves', 'projectdead:fakedeadleaves').upgradeLevel(1).altarSyphon(100).consumptionRate(25).drainRate(25);
    event.recipes.bloodmagic.altar('minecraft:oak_sapling', 'workspacedead:deadsapling').upgradeLevel(1).altarSyphon(100).consumptionRate(25).drainRate(25);
    event.recipes.bloodmagic.altar('minecraft:potato', 'minecraft:poisonous_potato').upgradeLevel(1).altarSyphon(100).consumptionRate(25).drainRate(25);


});