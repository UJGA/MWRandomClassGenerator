function ax50(){
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
        { name: 'Flash Guard', image: 'attachments/snipers/flashguard.png' }, 
        { name: 'Monolithic Suppressor', image: 'attachments/snipers/monolithicsuppressor.png' }, 
        { name: 'Breacher Device', image: 'attachments/snipers/breacherdevice.png' }, 
        { name: 'Muzzle Brake', image: 'attachments/snipers/muzzlebrake.png' }, 
        { name: 'Tactical Suppressor', image: 'attachments/snipers/tacticalsuppressor.png' }, 
        { name: 'Compensator', image: 'attachments/snipers/compensator.png' }, 
        { name: 'Lightweight Suppressor', image: 'attachments/snipers/lightweightsuppressor.png' }, 
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
        { name: 'Singuard Arms Pro', image: 'attachments/snipers/singuardarms.png' }, 
        { name: '17.0 Factory Barrel', image: 'attachments/snipers/17factory.png' }, 
        { name: '32.0 Factory Barrel', image: 'attachments/snipers/32factory.png' },
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
        { name: 'Tac Laser', image: 'attachments/snipers/taclaser.png' }, 
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
        { name: 'Scout Combat Optic', image: 'attachments/snipers/scout.png' },
        { name: 'Thermal Sniper Scope', image: 'attachments/snipers/thermal.png' },
        { name: 'VLK 3.0x Optic', image: 'attachments/snipers/vlk.png' },
        { name: 'Variable Zoom Scope', image: 'attachments/snipers/variable.png' },
        { name: 'Thermal Dual Power Scope', image: 'attachments/snipers/thermaldual.png' },
        { name: 'Cronen C480 Pro Optic', image: 'attachments/snipers/cronen.png' },
        { name: 'Merc Thermal Optic', image: 'attachments/snipers/merc.png' },
      ];


    var optic = false;
    document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt4").innerHTML = "";

    if (attArr.includes(3)){
        optic = true;
        //console.log("optic is true");
    }

    if (optic != false){
        var ranOptic = Math.floor(Math.random() * 7) + 0;
    
        var opticPick = optics[ranOptic];
        //console.log(opticPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt4").innerHTML = '<b>'+ "Optic -  " + '</b>' + opticPick.name + '<br>' + '<img src="'+opticPick.image+'">';
    }



    //Stock

    var stocks = [
        { name: 'Singuard Arms Marksman', image: 'attachments/snipers/marksman.png' },
        { name: 'Singuard Arms Evader', image: 'attachments/snipers/evader.png' },
        { name: 'Singuard Arms Assassin', image: 'attachments/snipers/assassin.png' },
      ];


    var stock = false;
    document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt5").innerHTML = "";

    if (attArr.includes(4)){
        stock = true;
        //console.log("stock is true");
    }

    if (stock != false){
        var ranStock = Math.floor(Math.random() * 3) + 0;
    
        var stockPick = stocks[ranStock];
        //console.log(stockPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt5").innerHTML = '<b>'+ "Stock -  " + '</b>' + stockPick.name + '<br>' + '<img src="'+stockPick.image+'">';
    }


    

    //Underbarrel

    var underbarrels = [
        { name: 'Bipod', image: 'attachments/snipers/bipod.png' },
      ];


    var underbarrel = false;
    document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt6").innerHTML = "";

    if (attArr.includes(5)){
        underbarrel = true;
        //console.log("underbarrel is true");
    }

    if (underbarrel != false){
        var ranUnderbarrel = Math.floor(Math.random() * 1) + 0;
    
        var underbarrelPick = underbarrels[ranUnderbarrel];
        //console.log(underbarrelPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt6").innerHTML = '<b>'+ "Underbarrel -  " + '</b>' + underbarrelPick.name + '<br>' + '<img src="'+underbarrelPick.image+'">';
    }







     //Ammunation

     var ammunations = [
        { name: '7 Round Mags', image: 'attachments/snipers/7.png' },
        { name: '9 Round Mags', image: 'attachments/snipers/9.png' },
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
    { name: 'Granulated Grip Tape', image: 'attachments/reargrips/granulated.png' },
    { name: 'Rubberized Grip Tape', image: 'attachments/reargrips/rubberized.png' }, 
    { name: 'Stippled Grip Tape', image: 'attachments/reargrips/stippled.png' }
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
    