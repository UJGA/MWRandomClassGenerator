function origin12(){
    var numAttachments = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    var totalCount = 9;
    var ran = Math.floor(Math.random() * 5) + 0;
    var attArr = [];
    for (var i = 0; i <= ran; i++) {
    var rand = numAttachments[Math.floor(Math.random() * totalCount)];
    attArr.push(rand);
    numAttachments.splice(rand,1);
    totalCount--;
    }
    // console.log(attArr);
    var underbarrel = false;

    //Muzzles

    var muzzles = [
        { name: 'Breacher Device', image: 'attachments/shotguns/origin12shotgun/breacherdevice.png' },
        { name: 'Flash Guard', image: 'attachments/shotguns/origin12shotgun/flashguard.png' },
        { name: 'Muzzle Brake', image: 'attachments/shotguns/origin12shotgun/muzzlebrake.png' },
        { name: 'Compensator', image: 'attachments/shotguns/origin12shotgun/compensator.png' },
        { name: 'Choke', image: 'attachments/shotguns/origin12shotgun/choke.png' },
        { name: 'Lightweight Suppressor', image: 'attachments/shotguns/origin12shotgun/lightweightsuppressor.png' },
        { name: 'Tactical Suppressor', image: 'attachments/shotguns/origin12shotgun/tacticalsuppressor.png' },

      ];


    var muzzle = false;
    document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt1").innerHTML = "";

    if (attArr.includes(0)){
        muzzle = true;
        // console.log("Muzzle is true");
    }

    if (muzzle != false){
        var ranMuzzle = Math.floor(Math.random() * 7) + 0;
    
        var muzzlePick = muzzles[ranMuzzle];
        // console.log(muzzlePick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt1").innerHTML = '<b>'+ "Muzzle -  " + '</b>' + muzzlePick.name + '<br>' + '<img src="'+muzzlePick.image+'">';
    }

     //Barrel

     var barrels = [
        { name: 'FORGE TAC Precision', image: 'attachments/shotguns/origin12shotgun/forgetacprecision.png' }, 
        { name: 'FORGE TAC Wideshot', image: 'attachments/shotguns/origin12shotgun/forgetacwideshot.png' },  
        { name: 'FORGE TAC Impaler', image: 'attachments/shotguns/origin12shotgun/forgetacimpaler.png' },
      ];


    var barrel = false;
    document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt2").innerHTML = "";

    if (attArr.includes(1)){
        barrel = true;
        // console.log("Barrel is true");
    }

    if (barrel != false){
        var ranBarrel = Math.floor(Math.random() * 3) + 0;
    
        var barrelPick = barrels[ranBarrel];
        // console.log(barrelPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt2").innerHTML = '<b>'+ "Barrel -  " + '</b>' + barrelPick.name + '<br>' + '<img src="'+barrelPick.image+'">';
    }




    //Laser

    var lasers = [
        { name: '1mW Laser', image: 'attachments/shotguns/origin12shotgun/1mwlaser.png' }, 
        { name: '5mW Laser', image: 'attachments/shotguns/origin12shotgun/5mwlaser.png' }, 
        { name: 'Tac Laser', image: 'attachments/shotguns/origin12shotgun/taclaser.png' }, 
      ];


    var laser = false;
    document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt3").innerHTML = "";

    if (attArr.includes(2)){
        laser = true;
        // console.log("laser is true");
    }

    if (laser != false){
        var ranLaser = Math.floor(Math.random() * 3) + 0;
    
        var laserPick = lasers[ranLaser];
        // console.log(laserPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt3").innerHTML = '<b>'+ "Laser -  " + '</b>' + laserPick.name + '<br>' + '<img src="'+laserPick.image+'">';
    }



    //Optic

    var optics = [
        { name: 'Operator Reflex Sight', image: 'attachments/shotguns/optics/operatorrelfexsight.png' },
        { name: 'Corp Combat Holo Sight', image: 'attachments/shotguns/optics/corpcombatholosight.png' },
        { name: 'Aim-Op Reflex Sight', image: 'attachments/shotguns/optics/aimopreflexsight.png' },
        { name: 'Cronen LP945 Mini Reflex', image: 'attachments/shotguns/optics/cronenlp945minireflex.png' },
        { name: 'APX5 Holographic Sight', image: 'attachments/shotguns/optics/apx5holographicsight.png' },
        { name: 'Scout Combat Optic', image: 'attachments/shotguns/optics/scoutcombatoptic.png' },
        { name: 'Viper Reflex Sight', image: 'attachments/shotguns/optics/viperreflexsight.png' },
        { name: 'VLK 3.0x Optic', image: 'attachments/shotguns/optics/vlk30xoptic.png' },
        { name: 'G.I. Mini Reflex', image: 'attachments/shotguns/optics/giminireflex.png' },
        { name: 'Solozero NVG Enhanced', image: 'attachments/shotguns/optics/solozeronvgenhanced.png' },
        { name: 'PBX Holo 7 Sight', image: 'attachments/shotguns/optics/pbxholo7sight.png' },
        { name: 'Monocle Reflex Sight', image: 'attachments/shotguns/optics/monoclereflexsight.png' },
        { name: 'Cronen C480 Pro Optic', image: 'attachments/shotguns/optics/cronenc480prooptic.png' },
        { name: 'Solozero Optics Mini Reflex', image: 'attachments/shotguns/optics/solozeroopticsminireflex.png' },
      ];


    var optic = false;
    document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt4").innerHTML = "";

    if (attArr.includes(3)){
        optic = true;
        // console.log("optic is true");
    }

    if (optic != false){
        var ranOptic = Math.floor(Math.random() * 14) + 0;
    
        var opticPick = optics[ranOptic];
        // console.log(opticPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt4").innerHTML = '<b>'+ "Optic -  " + '</b>' + opticPick.name + '<br>' + '<img src="'+opticPick.image+'">';
    }



    //Pumps

    var pumps = [
        { name: 'FTAC Hunter', image: 'attachments/shotguns/origin12shotgun/ftachunter.png' },
        { name: 'FORGE TAC Ultralight', image: 'attachments/shotguns/origin12shotgun/forgetacultralight.png' },
        { name: 'No Stock', image: 'attachments/shotguns/origin12shotgun/nostock.png' },
        { name: 'FORGE TAC Dart', image: 'attachments/shotguns/origin12shotgun/forgetacdart.png' },
      ];


    var pump = false;
    document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt5").innerHTML = "";

    if (attArr.includes(4)){
        pump = true;
        // console.log("pump is true");
    }

    if (pump != false){
        var ranPump = Math.floor(Math.random() * 4) + 0;
    
        var pumpPick = pumps[ranPump];
        // console.log(pumpPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt5").innerHTML = '<b>'+ "Stock -  " + '</b>' + pumpPick.name + '<br>' + '<img src="'+pumpPick.image+'">';
    }


    

    //Underbarrel

    var underbarrels = [
        { name: 'Merc Foregrip', image: 'attachments/shotguns/origin12shotgun/mercforegrip.png' },
        { name: 'Commando Foregrip', image: 'attachments/shotguns/origin12shotgun/commandoforegrip.png' },
      ];


    var underbarrel = false;
    document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt6").innerHTML = "";

    if (attArr.includes(5)){
        underbarrel = true;
        // console.log("underbarrel is true");
    }

    if (underbarrel != false){
        var ranUnderbarrel = Math.floor(Math.random() * 2) + 0;
    
        var underbarrelPick = underbarrels[ranUnderbarrel];
        // console.log(underbarrelPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt6").innerHTML = '<b>'+ "Underbarrel -  " + '</b>' + underbarrelPick.name + '<br>' + '<img src="'+underbarrelPick.image+'">';
    }







     //Ammunation

     var ammunations = [
        { name: '12 Round Mags', image: 'attachments/shotguns/origin12shotgun/12.png' },
        { name: '8 Round Slug Mags', image: 'attachments/shotguns/origin12shotgun/8.png' },
        { name: '25 ROund Drum Mags', image: 'attachments/shotguns/origin12shotgun/25.png' },
      ];


    var ammunation = false;
    document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt7").innerHTML = "";

    if (attArr.includes(6)){
        ammunation = true;
        // console.log("ammunation is true");
    }

    if (ammunation != false){
        var ranAmmunation = Math.floor(Math.random() * 3) + 0;
    
        var ammunationPick = ammunations[ranAmmunation];
        // console.log(ammunationPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt7").innerHTML = '<b>'+ "Ammunation -  " + '</b>' + ammunationPick.name + '<br>' + '<img src="'+ammunationPick.image+'">';
    }

//RearGrip

var reargrips = [
    { name: 'Granulated Grip Tape', image: 'attachments/shotguns/origin12shotgun/granulated.png' },
    { name: 'Rubberized Grip Tape', image: 'attachments/shotguns/origin12shotgun/rubberized.png' },
    { name: 'Stippled Grip Tape', image: 'attachments/shotguns/origin12shotgun/stippled.png' },
];


var reargrip = false;
document.getElementById("primaryAttH2").innerHTML = "";
document.getElementById("primaryAtt8").innerHTML = "";

if (attArr.includes(7)){
reargrip = true;
// console.log("rear grip is true");
}

if (reargrip != false){
var ranRearGrip = Math.floor(Math.random() * 3) + 0;

var rearGripPick = reargrips[ranRearGrip];
// console.log(rearGripPick.name);
document.getElementById("primaryAttH2").innerHTML = "";
document.getElementById("primaryAtt8").innerHTML = '<b>'+ "Rear Grip -  " + '</b>' + rearGripPick.name + '<br>' + '<img src="'+rearGripPick.image+'">';
}

//Perks

var perks = [
{ name: 'FMJ', image: 'attachments/perks/fmj.png' },
{ name: 'Sleight of Hand', image: 'attachments/perks/sleight.png' }, 
{ name: 'Frangible - Wounding', image: 'attachments/perks/wounding.png' },
{ name: 'Heavy Hitter', image: 'attachments/perks/heavyhitter.png' },
{ name: 'Fully Loaded', image: 'attachments/perks/fullyloaded.png' },
{ name: 'Recon', image: 'attachments/perks/recon.png' },
{ name: 'Mo Money', image: 'attachments/perks/money.png' },
{ name: 'Fast Melee', image: 'attachments/perks/fastmelee.png' },
{ name: 'Frangible - Disabling', image: 'attachments/perks/disabling.png' },
];


var perk = false;
document.getElementById("primaryAttH2").innerHTML = "";
document.getElementById("primaryAtt9").innerHTML = "";

if (attArr.includes(8)){
perk = true;
// console.log("perk is true");
}

if (perk != false){
var ranPerk= Math.floor(Math.random() * 9) + 0;

var perkPick = perks[ranPerk];
// console.log(perkPick.name);
document.getElementById("primaryAttH2").innerHTML = "";
document.getElementById("primaryAtt9").innerHTML = '<b>'+ "Perk -  " + '</b>' + perkPick.name + '<br>' + ' <img src="'+perkPick.image+ '" "' + '">';
}





    }
    