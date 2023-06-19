onEvent('recipes', event => {

    event.remove({ output: "bloodmagic:altar" });
    event.shaped('bloodmagic:altar', ['   ', 'SCS', 'SSS'], { C: 'graveyard:corruption', S: 'workspacedead:deadstone' });

    event.remove({ output: "bloodmagic:sacrificialdagger" });
    event.shaped('bloodmagic:sacrificialdagger', ['  C', 'SC ', 'DS '], { C: 'graveyard:corruption', S: 'workspacedead:deadstone', D: 'graveyard:bone_dagger' });

    // make the alchemy table a bit harder
    event.remove({ output: "bloodmagic:alchemytable" });
    event.shaped('bloodmagic:alchemytable', ['AAA', 'BCB', 'DEF'],
        { A: '#forge:stone', F: 'minecraft:lapis_block', C: 'minecraft:iron_block', E: 'bloodmagic:reinforcedslate', B: '#minecraft:planks', D: 'minecraft:gold_block' });

    // allow niter dust to be made earlier for gunpowder
    event.recipes.bloodmagic.alchemytable("3x thermal:niter_dust", ["bloodmagic:plantoil", "bloodmagic:plantoil", "mekanism:dust_charcoal"]).upgradeLevel(2);
    //event.recipes.bloodmagic.array(output, baseInput, addedInput)
    event.recipes.bloodmagic.array("graveyard:dark_iron_ingot", "minecraft:iron_ingot", "graveyard:corruption").texture("bloodmagic:plantoil");

    // corruption to first orb
    event.recipes.remove({ output: 'bloodmagic:weakbloodorb' });
    event.recipes.bloodmagic.altar('bloodmagic:weakbloodorb', 'graveyard:corruption').upgradeLevel(0).altarSyphon(500).consumptionRate(5).drainRate(5);

    event.recipes.remove({ output: Item.of('patchouli:guide_book', '{"patchouli:book":"bloodmagic:guide"}') });
    event.recipes.bloodmagic.altar(Item.of('patchouli:guide_book', '{"patchouli:book":"bloodmagic:guide"}'), 'minecraft:book').upgradeLevel(0).altarSyphon(50).consumptionRate(25).drainRate(25);

    // event.recipes.remove({ output: 'bloodmagic:apprenticebloodorb' });
    // event.recipes.bloodmagic.altar('bloodmagic:apprenticebloodorb', 'botania:manasteel_ingot').upgradeLevel(0).altarSyphon(500).consumptionRate(5).drainRate(5);

    event.recipes.bloodmagic.altar('minecraft:cobblestone', 'workspacedead:deadstone').upgradeLevel(0).altarSyphon(100).consumptionRate(25).drainRate(25);
    event.recipes.bloodmagic.altar('minecraft:dirt', 'workspacedead:deaddirt').upgradeLevel(0).altarSyphon(100).consumptionRate(25).drainRate(25);
    event.recipes.bloodmagic.altar('minecraft:bread', 'workspacedead:dirtybread').upgradeLevel(0).altarSyphon(100).consumptionRate(25).drainRate(25);

    event.recipes.bloodmagic.altar('workspacedead:deadleaves', 'projectdead:fakedeadleaves').upgradeLevel(1).altarSyphon(100).consumptionRate(25).drainRate(25);
    event.recipes.bloodmagic.altar('minecraft:oak_sapling', 'workspacedead:deadsapling').upgradeLevel(1).altarSyphon(100).consumptionRate(25).drainRate(25);
    event.recipes.bloodmagic.altar('minecraft:potato', 'minecraft:poisonous_potato').upgradeLevel(1).altarSyphon(100).consumptionRate(25).drainRate(25);


});