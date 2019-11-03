var primarysArray = [
    { name: '725', image: 'primary/725.png' }, 
    { name: 'AK-47', image: 'primary/AK47.png' }, 
    { name: 'AUG', image: 'primary/AUG.png' },
    { name: 'AX-50', image: 'primary/AX50.png' },
    { name: 'Dragunov', image: 'primary/Dragunov.png' },
    { name: 'EBR-14', image: 'primary/EBR14.png' },
    { name: 'FAL', image: 'primary/FAL.png' },
    { name: 'FN Scar 17', image: 'primary/FNScar17.png' },
    { name: 'FR 5.56', image: 'primary/FR556.png' },
    { name: 'HDR', image: 'primary/HDR.png' },
    { name: 'Kar98k', image: 'primary/Kar98k.png' },
    { name: 'Kilo 141', image: 'primary/Kilo141.png' },
    { name: 'M4A1', image: 'primary/M4A1.png' },
    { name: 'M13', image: 'primary/M13.png' },
    { name: 'M91', image: 'primary/M91.png' },
    { name: 'MG34', image: 'primary/MG34.png' },
    { name: 'MK2 Carbine', image: 'primary/MK2Carbine.png' },
    { name: 'Model 680', image: 'primary/Model680.png' },
    { name: 'MP5', image: 'primary/MP5.png' },
    { name: 'MP7', image: 'primary/MP7.png' },
    { name: 'Oden', image: 'primary/Oden.png' },
    { name: 'Origin 12 Shotgun', image: 'primary/Origin12Shotgun.png' },
    { name: 'P90', image: 'primary/P90.png' },
    { name: 'PKM', image: 'primary/PKM.png' },
    { name: 'PP19 Bizon', image: 'primary/PP19Bizon.png' },
    { name: 'R9-0 Shotgun', image: 'primary/R90Shotgun.png' },
    { name: 'Riot Shield', image: 'primary/RiotShield.png' },
    { name: 'SA87', image: 'primary/SA87.png' },
    { name: 'Uzi', image: 'primary/Uzi.png' }
  ];

  var secondarysArray = [
    { name: '.50 GS', image: 'secondary/50GS.png' }, 
    { name: '.357', image: 'secondary/357.png' }, 
    { name: '1911', image: 'secondary/1911.png' },
    { name: 'Combat Knife', image: 'secondary/combatKnife.png' },
    { name: 'JOKR', image: 'secondary/JOKR.png' },
    { name: 'M19', image: 'secondary/M19.png' },
    { name: 'PILA', image: 'secondary/PILA.png' },
    { name: 'RPG-7', image: 'secondary/RPG7.png' },
    { name: 'Strela-P', image: 'secondary/StrelaP.png' },
    { name: 'X16', image: 'secondary/X16.png' }
  ];

  var perk1Array = [
    { name: 'Cold Blooded', image: 'perk1/ColdBlooded.png' }, 
    { name: 'Double Time', image: 'perk1/DoubleTime.png' }, 
    { name: 'EOD', image: 'perk1/EOD.png' },
    { name: 'Overkill', image: 'perk1/Overkill.png' },
    { name: 'Quick Fix', image: 'perk1/QuickFix.png' },
    { name: 'Scavenger', image: 'perk1/Scavenger.png' }
  ];

  var perk2Array = [
    { name: 'Ghost', image: 'perk2/Ghost.png' }, 
    { name: 'Hardline', image: 'perk2/Hardline.png' }, 
    { name: 'High Alert', image: 'perk2/HighAlert.png' },
    { name: 'Kill Chain', image: 'perk2/KillChain.png' },
    { name: 'Pointman', image: 'perk2/Pointman.png' },
    { name: 'Restock', image: 'perk2/Restock.png' }
  ];

  var perk3Array = [
    { name: 'Amped', image: 'perk3/Amped.png' }, 
    { name: 'Battle Hardened', image: 'perk3/BattleHardened.png' }, 
    { name: 'Shrapnel', image: 'perk3/Shrapnel.png' },
    { name: 'Spotter', image: 'perk3/Spotter.png' },
    { name: 'Tracker', image: 'perk3/Tracker.png' },
    { name: 'Tune Up', image: 'perk3/TuneUp.png' }
  ];


var lethalsArray = [
    { name: 'Claymore', image: 'lethal/claymore.png' }, 
    { name: 'Frag Grenade', image: 'lethal/FragGrenade.png' }, 
    { name: 'Molotov Cocktail', image: 'lethal/MolotovCocktail.png' },
    { name: 'C4', image: 'lethal/C4.png' },
    { name: 'Semtex', image: 'lethal/Semtex.png' },
    { name: 'Throwing Knife', image: 'lethal/ThrowingKnife.png' },
    { name: 'Proximity Mine', image: 'lethal/ProximityMine.png' },
    { name: 'Thermite', image: 'lethal/Thermite.png' }
  ];

  var tacticalsArray = [
    { name: 'Flash Grenade', image: 'tactical/FlashGrenade.png' }, 
    { name: 'Stun Grenade', image: 'tactical/StunGrenade.png' }, 
    { name: 'Smoke Grenade', image: 'tactical/SmokeGrenade.png' },
    { name: 'Snapshot Grenade', image: 'tactical/SnapshotGrenade.png' },
    { name: 'Heartbeat Sensor', image: 'tactical/HeartbeatSensor.png' },
    { name: 'Gas Grenade', image: 'tactical/GasGrenade.png' },
    { name: 'Stim', image: 'tactical/Stim.png' },
    { name: 'Decoy Grenade', image: 'tactical/DecoyGrenade.png' }
  ];

  var fieldUpgradesArray = [
    { name: 'Dead Silence', image: 'upgrade/DeadSilence.png' }, 
    { name: 'Deployable Cover', image: 'upgrade/DeployableCover.png' }, 
    { name: 'EMP Drone', image: 'upgrade/EMPDrone.png' },
    { name: 'Munitions Box', image: 'upgrade/MunitionsBox.png' },
    { name: 'Recon Drone', image: 'upgrade/ReconDrone.png' },
    { name: 'Stopping Power Rounds', image: 'upgrade/StoppingPowerRounds.png' },
    { name: 'Tactical Insertion', image: 'upgrade/TacticalInsertion.png' },
    { name: 'Trophy System', image: 'upgrade/TrophySystem.png' },
    { name: 'Weapon Drop', image: 'upgrade/WeaponDrop.png' }
  ];


function random_item()
{
    //Primary
    var randomPrimary = primarysArray[Math.floor(Math.random()*primarysArray.length)];
    document.getElementById("primary").innerHTML =randomPrimary.name + '<br>' + '<img src="'+randomPrimary.image+'">';
    document.getElementById("primaryH3").innerHTML = "Primary";

    //Secondary
    var randomSecondary = secondarysArray[Math.floor(Math.random()*secondarysArray.length)];
    document.getElementById("secondary").innerHTML = randomSecondary.name + '<br>' + '<img src="'+randomSecondary.image+'">';
    document.getElementById("secondaryH3").innerHTML = "Secondary";

    //Perk 1
    var randomPerk1 = perk1Array[Math.floor(Math.random()*perk1Array.length)];
    document.getElementById("perk1").innerHTML = randomPerk1.name + '<br>' + '<img src="'+randomPerk1.image+'">';
    document.getElementById("perk1H3").innerHTML = "Perk 1";

    if(randomPerk1.name == 'Overkill'){
        var randomSecondary = primarysArray[Math.floor(Math.random()*primarysArray.length)];
        document.getElementById("secondary").innerHTML = randomSecondary.name + '<br>' + '<img src="'+randomSecondary.image+'">';
        document.getElementById("secondaryH3").innerHTML = "Secondary";
    }

    //Perk 2
    var randomPerk2 = perk2Array[Math.floor(Math.random()*perk2Array.length)];
    document.getElementById("perk2").innerHTML = randomPerk2.name + '<br>' + '<img src="'+randomPerk2.image+'">';
    document.getElementById("perk2H3").innerHTML = "Perk 2";

    //Perk 3
    var randomPerk3 = perk3Array[Math.floor(Math.random()*perk3Array.length)];
    document.getElementById("perk3").innerHTML = randomPerk3.name + '<br>' + '<img src="'+randomPerk3.image+'">';
    document.getElementById("perk3H3").innerHTML = "Perk 3";

    //Lethal
    var randomLethal = lethalsArray[Math.floor(Math.random()*lethalsArray.length)];
document.getElementById("lethal").innerHTML = randomLethal.name + '<br>' + '<img src="'+randomLethal.image+'">';
document.getElementById("lethalH3").innerHTML = "Lethal";

//Tactical
var randomTactical = tacticalsArray[Math.floor(Math.random()*tacticalsArray.length)];
document.getElementById("tactical").innerHTML = randomTactical.name + '<br>' + '<img src="'+randomTactical.image+'">';
document.getElementById("tacticalH3").innerHTML = "Tactical";

//Field Upgrade
var randomUpgrade = fieldUpgradesArray[Math.floor(Math.random()*fieldUpgradesArray.length)];
document.getElementById("upgrade").innerHTML = randomUpgrade.name + '<br>' + '<img src="'+randomUpgrade.image+'">';
document.getElementById("upgradeH3").innerHTML = "Field Upgrade";


document.getElementById("myTitle").innerHTML = "";
document.getElementById("goAgain").innerHTML = '<button id="mybtn" class="btn btn-primary" onclick="random_item()">Generate Again</button>';
}
