function ebr(){
    var numAttachments = [0, 1, 2, 3, 4, 5, 6, 8];
    var totalCount = 8;
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
        { name: 'Flash Guard', image: 'attachments/muzzles/flashguard.png' }, 
        { name: 'Breacher Device', image: 'attachments/muzzles/breacherdevice.png' }, 
        { name: 'Tactical Suppressor', image: 'attachments/muzzles/tacticalsuppressor.png' },
        { name: 'Muzzle Brake', image: 'attachments/muzzles/muzzlebrake.png' },
        { name: 'Lightweight Suppressor', image: 'attachments/muzzles/lightweightsuppressor.png' },
        { name: 'Compensator', image: 'attachments/muzzles/compensator.png' },
        { name: 'Monolithic Suppressor', image: 'attachments/muzzles/monolithicsuppressor.png' }
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
        { name: 'FORGE TAC Precision 20.0', image: 'attachments/mrs/barrels/precision20.png' }, 
        { name: 'FORGE TAC Elite', image: 'attachments/mrs/barrels/elite.png' }, 
        { name: 'FORGE TAC Precision 22.0', image: 'attachments/mrs/barrels/precision22.png' },
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
        var ranLaser = Math.floor(Math.random() * 1) + 0;
    
        var laserPick = lasers[ranLaser];
        //console.log(laserPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt3").innerHTML = '<b>'+ "Laser -  " + '</b>' + laserPick.name + '<br>' + '<img src="'+laserPick.image+'">';
    }



    //Optic

    var optics = [
        { name: 'Corp Combat Holo Sight', image: 'attachments/optics/corp.png' }, 
        { name: 'Operator Reflex Sight', image: 'attachments/optics/operator.png' },
        { name: 'Scout Combat Optic', image: 'attachments/optics/scout.png' },
        { name: '4.0x Flip Hybrid', image: 'attachments/optics/40x.png' },
        { name: 'Aim-Op Reflex Sight', image: 'attachments/optics/aimop.png' },
        { name: 'APx5 Holographic Sight', image: 'attachments/optics/apx5.png' },
        { name: 'Integral Hybrid', image: 'attachments/optics/integral.png' },
        { name: 'Solozero NVG Enhanced', image: 'attachments/optics/solozero.png' },
        { name: 'VLK 3.0x Optic', image: 'attachments/optics/vlk.png' },
        { name: 'Sniper Scope', image: 'attachments/optics/sniperscope.png' },
        { name: 'Viper Reflex Sight', image: 'attachments/optics/viper.png' },
        { name: 'G.I. Mini Reflex', image: 'attachments/optics/gi.png' },
        { name: 'PBX Holo 7 Sight', image: 'attachments/optics/pbx.png' },
        { name: 'Cronen C480 Pro Optic', image: 'attachments/optics/cronenc480.png' },
        { name: 'Monocle Reflex Sight', image: 'attachments/optics/monocle.png' },
        { name: 'Variable Zoom Scope', image: 'attachments/optics/variable.png' },
        { name: 'Canted Hybrid', image: 'attachments/optics/canted.png' },
        { name: 'Merc Thermal Optic', image: 'attachments/optics/merc.png' }, 
        { name: 'Thermal Hybrid', image: 'attachments/optics/thermal.png' }
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
        { name: 'FTAC Precision Comb', image: 'attachments/mrs/stocks/comb.png' },
        { name: 'FSS Raider Chassis Pro', image: 'attachments/mrs/stocks/pro.png' }, 
        { name: 'FTAC Lightweight Stock', image: 'attachments/mrs/stocks/lightweight.png' },
        { name: 'FSS Raider Chassis Elite', image: 'attachments/mrs/stocks/elite.png' }
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
        { name: 'Commando Foregrip', image: 'attachments/underbarrels/commando.png' },
        { name: 'Merc Foregrip', image: 'attachments/underbarrels/merc.png' },
        { name: 'Tactical Foregrip', image: 'attachments/underbarrels/tactical.png' },
        { name: 'Bipod', image: 'attachments/underbarrels/bipod.png' },
        { name: 'Ranger Foregrip', image: 'attachments/underbarrels/ranger.png' },
        { name: 'Operator Foregrip', image: 'attachments/underbarrels/operator.png' }
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
        { name: '15 Round Mags', image: 'attachments/mrs/ammunations/15.png' },
        { name: '20 Round Mags', image: 'attachments/mrs/ammunations/20.png' }, 

      ];


    var ammunation = false;
    document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt7").innerHTML = "";

    if (attArr.includes(6)){
        ammunation = true;
        //console.log("ammunation is true");
    }

    if (ammunation != false){
        var ranAmmunation = Math.floor(Math.random() *2) + 0;
    
        var ammunationPick = ammunations[ranAmmunation];
        //console.log(ammunationPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt7").innerHTML = '<b>'+ "Ammunation -  " + '</b>' + ammunationPick.name + '<br>' + '<img src="'+ammunationPick.image+'">';
    }




//Perks

var perks = [
{ name: 'FMJ', image: 'attachments/perks/fmj.png' },
{ name: 'Sleight of Hand', image: 'attachments/perks/sleight.png' }, 
{ name: 'Frangible - Wounding', image: 'attachments/perks/wounding.png' },
{ name: 'Heavy Hitter', image: 'attachments/perks/heavyhitter.png' },
{ name: 'Fully Loaded', image: 'attachments/perks/fullyloaded.png' },
{ name: 'Focus', image: 'attachments/perks/focus.png' },
{ name: 'Recon', image: 'attachments/perks/recon.png' },
{ name: 'Mo Money', image: 'attachments/perks/money.png' },
{ name: 'Fast Melee', image: 'attachments/perks/fastmelee.png' },
{ name: 'Frangible - Disabling', image: 'attachments/perks/disabling.png' },
{ name: 'Presence of Mind', image: 'attachments/perks/mind.png' }
];


var perk = false;
document.getElementById("primaryAttH2").innerHTML = "";
document.getElementById("primaryAtt9").innerHTML = "";

if (attArr.includes(8)){
perk = true;
//console.log("perk is true");
}

if (perk != false){
var ranPerk= Math.floor(Math.random() * 11) + 0;

var perkPick = perks[ranPerk];
//console.log(perkPick.name);
document.getElementById("primaryAttH2").innerHTML = "";
document.getElementById("primaryAtt9").innerHTML = '<b>'+ "Perk -  " + '</b>' + perkPick.name + '<br>' + ' <img src="'+perkPick.image+ '" "' + '">';
}






    }
    