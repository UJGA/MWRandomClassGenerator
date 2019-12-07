function mg34(){
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
    //console.log(attArr);
    var underbarrel = false;

    //Muzzles

    var muzzles = [
        { name: 'Flash Guard', image: 'attachments/lmgs/muzzles/flash.png' }, 
        { name: 'Monolithic Suppressor', image: 'attachments/lmgs/muzzles/monolithic.png' }, 
        { name: 'Muzzle Brake', image: 'attachments/lmgs/muzzles/muzzle.png' }, 
        { name: 'CQB Breacher Device', image: 'attachments/lmgs/muzzles/cqb.png' }, 
        { name: 'Lightweight Suppressor', image: 'attachments/lmgs/muzzles/lightweight.png' }, 
        { name: 'Compensator', image: 'attachments/lmgs/muzzles/compensator.png' }, 
        { name: 'Tactical Suppressor', image: 'attachments/lmgs/muzzles/tactical.png' }, 
      ];


    var muzzle = false;
    document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt1").innerHTML = "";

    if (attArr.includes(0)){
        muzzle = true;
        //console.log("Muzzle is true");
    }

    if (muzzle != false){
        var ranMuzzle = Math.floor(Math.random() * 7) + 0;
    
        var muzzlePick = muzzles[ranMuzzle];
        //console.log(muzzlePick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt1").innerHTML = '<b>'+ "Muzzle -  " + '</b>' + muzzlePick.name + '<br>' + '<img src="'+muzzlePick.image+'">';
    }

     //Barrel

     var barrels = [
        { name: 'FSS Brute', image: 'attachments/lmgs/barrels/brute.png' }, 
        { name: 'FSS Stubby', image: 'attachments/lmgs/barrels/stubby.png' }, 
        { name: 'FSS Elite', image: 'attachments/lmgs/barrels/elite.png' }, 

      ];


    var barrel = false;
    document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt2").innerHTML = "";

    if (attArr.includes(1)){
        barrel = true;
        //console.log("Barrel is true");
    }

    if (barrel != false){
        var ranBarrel = Math.floor(Math.random() * 3) + 0;
    
        var barrelPick = barrels[ranBarrel];
        //console.log(barrelPick.name);

        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt2").innerHTML = '<b>'+ "Barrel -  " + '</b>' + barrelPick.name + '<br>' + '<img src="'+barrelPick.image+'">';
    }




    //Laser

    var lasers = [
        { name: '1mW Laser', image: 'attachments/lasers/1mw.png' }, 
        { name: '5mW Laser', image: 'attachments/lasers/5mw.png' }, 
        { name: 'Tac Laser', image: 'attachments/lasers/tac.png' }
      ];


    var laser = false;
    document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt3").innerHTML = "";

    if (attArr.includes(2)){
        laser = true;
        //console.log("laser is true");
    }

    if (laser != false){
        var ranLaser = Math.floor(Math.random() * 3) + 0;
    
        var laserPick = lasers[ranLaser];
        //console.log(laserPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt3").innerHTML = '<b>'+ "Laser -  " + '</b>' + laserPick.name + '<br>' + '<img src="'+laserPick.image+'">';
    }



    //Optic

    var optics = [
        { name: 'Cronen LP945 Mini Reflex', image: 'attachments/lmgs/optics/cronenlp945.png' },
        { name: 'Corp Combat Holo Sight', image: 'attachments/lmgs/optics/corp.png' }, 
        { name: 'Operator Reflex Sight', image: 'attachments/lmgs/optics/operator.png' },
        { name: 'Scout Combat Optic', image: 'attachments/lmgs/optics/scout.png' },
        { name: 'Aim-Op Reflex Sight', image: 'attachments/lmgs/optics/aimop.png' },
        { name: 'APx5 Holographic Sight', image: 'attachments/lmgs/optics/apx5.png' },
        { name: 'Integral Hybrid', image: 'attachments/lmgs/optics/integral.png' },
        { name: 'Solozero NVG Enhanced', image: 'attachments/lmgs/optics/solozero.png' },
        { name: 'VLK 3.0x Optic', image: 'attachments/lmgs/optics/vlk.png' },
        { name: 'Solozero Optics Mini Reflex', image: 'attachments/lmgs/optics/solozeromini.png' },
        { name: 'Sniper Scope', image: 'attachments/lmgs/optics/sniperscope.png' },
        { name: 'Viper Reflex Sight', image: 'attachments/lmgs/optics/viper.png' },
        { name: 'G.I. Mini Reflex', image: 'attachments/lmgs/optics/gi.png' },
        { name: 'PBX Holo 7 Sight', image: 'attachments/lmgs/optics/pbx.png' },
        { name: 'Cronen C480 Pro Optic', image: 'attachments/lmgs/optics/cronenc480.png' },
        { name: 'Monocle Reflex Sight', image: 'attachments/lmgs/optics/monocle.png' },
        { name: 'Canted Hybrid', image: 'attachments/lmgs/optics/canted.png' },
        { name: 'Merc Thermal Optic', image: 'attachments/lmgs/optics/merc.png' }, 
        { name: 'Thermal Hybrid', image: 'attachments/lmgs/optics/thermal.png' }
      ];


    var optic = false;
    document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt4").innerHTML = "";

    if (attArr.includes(3)){
        optic = true;
        //console.log("optic is true");
    }

    if (optic != false){
        var ranOptic = Math.floor(Math.random() * 19) + 0;
    
        var opticPick = optics[ranOptic];
        //console.log(opticPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt4").innerHTML = '<b>'+ "Optic -  " + '</b>' + opticPick.name + '<br>' + '<img src="'+opticPick.image+'">';
    }



    //Stock

    var stocks = [
        { name: 'FORGE TAC Stalker', image: 'attachments/lmgs/stocks/stalker.png' },
        { name: 'FORGE TAC Ultralight', image: 'attachments/lmgs/stocks/ultralight.png' },
        { name: 'No Stock', image: 'attachments/lmgs/stocks/nostock.png' },
        { name: 'FSS Close Quarters Stock', image: 'attachments/lmgs/stocks/close.png' },

      ];


    var stock = false;
    document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt5").innerHTML = "";

    if (attArr.includes(4)){
        stock = true;
        //console.log("stock is true");
    }

    if (stock != false){
        var ranStock = Math.floor(Math.random() * 4) + 0;
    
        var stockPick = stocks[ranStock];
        //console.log(stockPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt5").innerHTML = '<b>'+ "Stock -  " + '</b>' + stockPick.name + '<br>' + '<img src="'+stockPick.image+'">';
    }


    

    //Underbarrel

    var underbarrels = [
        { name: 'Commando Foregrip', image: 'attachments/lmgs/underbarrels/commando.png' },
        { name: 'Merc Foregrip', image: 'attachments/lmgs/underbarrels/merc.png' },
        { name: 'Tactical Foregrip', image: 'attachments/lmgs/underbarrels/tactical.png' },
        { name: 'Bipod', image: 'attachments/lmgs/underbarrels/bipod.png' },
        { name: 'Ranger Foregrip', image: 'attachments/lmgs/underbarrels/ranger.png' },
        { name: 'Operator Foregrip', image: 'attachments/lmgs/underbarrels/commando.png' },
    ];
    var underbarrel = false;
    document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt6").innerHTML = "";

    if (attArr.includes(5)){
        underbarrel = true;
        //console.log("underbarrel is true");
    }

    if (underbarrel != false){
        var ranUnderbarrel = Math.floor(Math.random() * 6) + 0;
    
        var underbarrelPick = underbarrels[ranUnderbarrel];
        //console.log(underbarrelPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt6").innerHTML = '<b>'+ "Underbarrel -  " + '</b>' + underbarrelPick.name + '<br>' + '<img src="'+underbarrelPick.image+'">';
    }







     //Ammunation

     var ammunations = [
        { name: '75 Round Belt', image: 'attachments/lmgs/ammunations/75.png' },
        { name: '100 Round Belt', image: 'attachments/lmgs/ammunations/100.png' },

      ];


    var ammunation = false;
    document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt7").innerHTML = "";

    if (attArr.includes(6)){
        ammunation = true;
        //console.log("ammunation is true");
    }

    if (ammunation != false){
        var ranAmmunation = Math.floor(Math.random() * 2) + 0;
    
        var ammunationPick = ammunations[ranAmmunation];
        //console.log(ammunationPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt7").innerHTML = '<b>'+ "Ammunation -  " + '</b>' + ammunationPick.name + '<br>' + '<img src="'+ammunationPick.image+'">';
    }




//RearGrip

var reargrips = [
{ name: 'Granulated Grip Tape', image: 'attachments/lmgs/reargrips/granulatedmg.png' },
{ name: 'Stippled Grip Tape', image: 'attachments/lmgs/reargrips/stippledmg.png' },
{ name: 'Rubberized Grip Tape', image: 'attachments/lmgs/reargrips/rubberizedmg.png' },

];


var reargrip = false;
document.getElementById("primaryAttH2").innerHTML = "";
document.getElementById("primaryAtt8").innerHTML = "";

if (attArr.includes(7)){
reargrip = true;
//console.log("rear grip is true");
}

if (reargrip != false){
var ranRearGrip = Math.floor(Math.random() * 3) + 0;

var rearGripPick = reargrips[ranRearGrip];
//console.log(rearGripPick.name);
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
//console.log("perk is true");
}

if (perk != false){
var ranPerk= Math.floor(Math.random() * 9) + 0;

var perkPick = perks[ranPerk];
//console.log(perkPick.name);
document.getElementById("primaryAttH2").innerHTML = "";
document.getElementById("primaryAtt9").innerHTML = '<b>'+ "Perk -  " + '</b>' + perkPick.name + '<br>' + ' <img src="'+perkPick.image+ '" "' + '">';
}






    }
    