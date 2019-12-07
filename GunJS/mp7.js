function mp7(){
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
        { name: 'Breacher Device', image: 'attachments/smgs/breacherdevice.png' },
        { name: 'Tactical Suppressor', image: 'attachments/smgs/tacticalsuppressor.png' }, 
        { name: 'Flash Guard', image: 'attachments/smgs/flashguard.png' }, 
        { name: 'Monolithic Suppressor', image: 'attachments/smgs/monolithicsuppressor.png' }, 
        { name: 'Muzzle Brake', image: 'attachments/smgs/muzzlebrake.png' }, 
        { name: 'Compensator', image: 'attachments/smgs/compensator.png' }, 
        { name: 'Lightweight Suppressor', image: 'attachments/smgs/lightweightsuppressor.png' }, 
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
        { name: 'FSS STRIKE', image: 'attachments/smgs/fssstrike.png' }, 
        { name: 'FSS RECON', image: 'attachments/smgs/fssrecon.png' }, 
        { name: 'FSS SWAT', image: 'attachments/smgs/fssswat.png' }, 
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
        { name: '1mW Laser', image: 'attachments/smgs/1mwlaser.png' },
        { name: '5mW Laser', image: 'attachments/smgs/5mwlaser.png' }, 
        { name: 'Tac Laser', image: 'attachments/smgs/taclaser.png' },  
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
        { name: 'Operator Reflex Sight', image: 'attachments/smgs/operatorreflex.png' },
        { name: 'Corp Combat Holo Sight', image: 'attachments/smgs/corp.png' },
        { name: 'Aim-Op Relfex Sight', image: 'attachments/smgs/aimop.png' },
        { name: 'G.I. Mini Relex', image: 'attachments/smgs/gi.png' },
        { name: 'Scout Combat Optic', image: 'attachments/smgs/scout.png' },
        { name: 'APX5 Holographic Sight', image: 'attachments/smgs/apx5.png' },
        { name: 'Solozero Optics Mini Reflex', image: 'attachments/smgs/solozeromini.png' },
        { name: 'VLK 3.0x Optic', image: 'attachments/smgs/vlk.png' },
        { name: 'Thermal hybrid', image: 'attachments/smgs/thermal.png' },
        { name: 'Viper Reflex Sight', image: 'attachments/smgs/viper.png' },
        { name: 'PBX Holo 7 sight', image: 'attachments/smgs/pbx.png' },
        { name: 'Solozero NVG Enhanced', image: 'attachments/smgs/solozero.png' },
        { name: 'Cronen LP945 Mini Reflex', image: 'attachments/smgs/cronenlp945.png' },
        { name: '4.0x Flip Hybrid', image: 'attachments/smgs/40x.png' },
        { name: 'Monocle Reflex Sight', image: 'attachments/smgs/monocle.png' },
        { name: 'Cronen C480 Pro Optic', image: 'attachments/smgs/cronenc480.png' },
        { name: 'Merc Thermal Optic', image: 'attachments/smgs/mercthermal.png' },
      ];


    var optic = false;
    document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt4").innerHTML = "";

    if (attArr.includes(3)){
        optic = true;
        // console.log("optic is true");
    }

    if (optic != false){
        var ranOptic = Math.floor(Math.random() * 17) + 0;
    
        var opticPick = optics[ranOptic];
        // console.log(opticPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt4").innerHTML = '<b>'+ "Optic -  " + '</b>' + opticPick.name + '<br>' + '<img src="'+opticPick.image+'">';
    }



    //Stock

    var stocks = [
        { name: 'FORGE TAC Ultralight', image: 'attachments/smgs/forgetacultralight.png' },
        { name: 'FORGE TAC Stalker', image: 'attachments/smgs/forgetacstalker.png' },
        { name: 'FSS Close Quarters Stock', image: 'attachments/smgs/fssclosequartersstock.png' },
        { name: 'No Stock', image: 'attachments/smgs/nostockmp7.png' },
      ];


    var stock = false;
    document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt5").innerHTML = "";

    if (attArr.includes(4)){
        stock = true;
        // console.log("stock is true");
    }

    if (stock != false){
        var ranStock = Math.floor(Math.random() * 3) + 0;
    
        var stockPick = stocks[ranStock];
        // console.log(stockPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt5").innerHTML = '<b>'+ "Stock -  " + '</b>' + stockPick.name + '<br>' + '<img src="'+stockPick.image+'">';
    }


    

    //Underbarrel

    var underbarrels = [
        { name: 'Merc Foregrup', image: 'attachments/smgs/merc.png' },
        { name: 'Commando Foregrip', image: 'attachments/smgs/commando.png' },
        { name: 'Tactical Foregrip', image: 'attachments/smgs/tactical.png' },
        { name: 'Ranger Foregrip', image: 'attachments/smgs/ranger.png' },
        { name: 'Operator Foregrip', image: 'attachments/smgs/operator.png' },
      ];


    var underbarrel = false;
    document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt6").innerHTML = "";

    if (attArr.includes(5)){
        underbarrel = true;
        // console.log("underbarrel is true");
    }

    if (underbarrel != false){
        var ranUnderbarrel = Math.floor(Math.random() * 5) + 0;
    
        var underbarrelPick = underbarrels[ranUnderbarrel];
        // console.log(underbarrelPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt6").innerHTML = '<b>'+ "Underbarrel -  " + '</b>' + underbarrelPick.name + '<br>' + '<img src="'+underbarrelPick.image+'">';
    }







     //Ammunation

     var ammunations = [
        { name: '50 Round Mags', image: 'attachments/smgs/50mp7.png' },
        { name: '60 Round Mags', image: 'attachments/smgs/60mp7.png' },
      ];


    var ammunation = false;
    document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt7").innerHTML = "";

    if (attArr.includes(6)){
        ammunation = true;
        // console.log("ammunation is true");
    }

    if (ammunation != false){
        var ranAmmunation = Math.floor(Math.random() * 2) + 0;
    
        var ammunationPick = ammunations[ranAmmunation];
        // console.log(ammunationPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt7").innerHTML = '<b>'+ "Ammunation -  " + '</b>' + ammunationPick.name + '<br>' + '<img src="'+ammunationPick.image+'">';
    }




//RearGrip

var reargrips = [
{ name: 'Granulated Grip Tape', image: 'attachments/smgs/granulatedgriptape.png' },
{ name: 'Rubberized Grip Tape', image: 'attachments/smgs/rubberizedgriptape.png' },
{ name: 'Stippled Grip Tape', image: 'attachments/smgs/stippledgriptape.png' },
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
    