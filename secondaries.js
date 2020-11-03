document.getElementById("secondary").innerHTML = "";
function gs50() {
    var numAttachments = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    var totalCount = 9;
    var ran = Math.floor(Math.random() * 5) + 0;
    var attArr = [];
    for (var i = 0; i <= ran; i++) {
        var rand = numAttachments[Math.floor(Math.random() * totalCount)];
        attArr.push(rand);
        numAttachments.splice(rand, 1);
        totalCount--;
    }
    //console.log(attArr);
    // console.log("Inside the secondary js");
    var underbarrel = false;

    //Muzzles

    var muzzles = [
        {
            name: 'Flash Guard',
            image: 'attachments/secondaries/flashguard.png'
        },
        {
            name: 'Muzzle Brake',
            image: 'attachments/secondaries/muzzlebrake.png'
        },
        {
            name: 'Monolithic Suppressor',
            image: 'attachments/secondaries/monolithicsuppressor.png'
        },
        {
            name: 'Oil Can Suppressor',
            image: 'attachments/secondaries/oilcansuppressor.png'
        },
        {
            name: 'Compensator',
            image: 'attachments/secondaries/compensator.png'
        },
        {
            name: 'Lightweight Suppressor',
            image: 'attachments/secondaries/lightweightsuppressor.png'
        },
        {
            name: 'Tactical Suppressor',
            image: 'attachments/secondaries/tacticalsuppressor.png'
        }
    ];


    var muzzle = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        muzzle = true;
        //console.log("Muzzle is true");
    }

    if (muzzle != false) {
        var ranMuzzle = Math.floor(Math.random() * muzzles.length) + 0;

        var muzzlePick = muzzles[ranMuzzle];
        //console.log(muzzlePick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt1").innerHTML = '<b>' + "Muzzle -  " + '</b>' + muzzlePick.name + '<br>' + '<img  style="width:250px;"  src="' + muzzlePick.image + '">';
    }

    //Barrel

    var barrels = [
        {
            name: 'FORGE TAC Extended',
            image: 'attachments/secondaries/forgetacextended.png'
        },
        {
            name: 'FORGE TAC Enforcer',
            image: 'attachments/secondaries/forgetacenforcer.png'
        }
    ];


    var barrel = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        barrel = true;
        //console.log("Barrel is true");
    }

    if (barrel != false) {
        var ranBarrel = Math.floor(Math.random() * barrels.length) + 0;

        var barrelPick = barrels[ranBarrel];
        //console.log(barrelPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt2").innerHTML = '<b>' + "Barrel -  " + '</b>' + barrelPick.name + '<br>' + '<img  style="width:250px;"  src="' + barrelPick.image + '">';
    }




    //Laser

    var lasers = [{
            name: '1mW Laser',
            image: 'attachments/lasers/1mw.png'
        },
        {
            name: '5mW Laser',
            image: 'attachments/lasers/5mw.png'
        },
        {
            name: 'Tac Laser',
            image: 'attachments/lasers/tac.png'
        }
    ];


    var laser = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt3").innerHTML = "";

    if (attArr.includes(2)) {
        laser = true;
        //console.log("laser is true");
    }

    if (laser != false) {
        var ranLaser = Math.floor(Math.random() * lasers.length) + 0;

        var laserPick = lasers[ranLaser];
        //console.log(laserPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt3").innerHTML = '<b>' + "Laser -  " + '</b>' + laserPick.name + '<br>' + '<img  style="width:250px;"  src="' + laserPick.image + '">';
    }



    //Optic

    var optics = [
        {
            name: 'Cronen LP945 Mini Reflex',
            image: 'attachments/optics/cronenlp945.png'
        },
        {
            name: 'Corp Combat Holo Sight',
            image: 'attachments/optics/corp.png'
        },
        {
            name: 'Operator Reflex Sight',
            image: 'attachments/optics/operator.png'
        },
        {
            name: 'Scout Combat Optic',
            image: 'attachments/optics/scout.png'
        },
        {
            name: 'Aim-Op Reflex Sight',
            image: 'attachments/optics/aimop.png'
        },
        {
            name: 'APx5 Holographic Sight',
            image: 'attachments/optics/apx5.png'
        },
        {
            name: 'VLK 2.5x Optic',
            image: 'attachments/optics/vlk25.png'
        },
 
        {
            name: 'Viper Reflex Sight',
            image: 'attachments/optics/viper.png'
        },
        {
            name: 'G.I. Mini Reflex',
            image: 'attachments/optics/gi.png'
        },
        {
            name: 'Cronen C480 Pro Optic',
            image: 'attachments/optics/cronenc480.png'
        },
        {
            name: 'Monocle Reflex Sight',
            image: 'attachments/optics/monocle.png'
        },
        {
            name: 'Solozero Optics Mini Reflex ',
            image: 'attachments/optics/solozeromini.png'
        }
    ];


    var optic = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt4").innerHTML = "";

    if (attArr.includes(3)) {
        optic = true;
        //console.log("optic is true");
    }

    if (optic != false) {
        var ranOptic = Math.floor(Math.random() * optics.length) + 0;

        var opticPick = optics[ranOptic];
        //console.log(opticPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt4").innerHTML = '<b>' + "Optic -  " + '</b>' + opticPick.name + '<br>' + '<img  style="width:250px;"  src="' + opticPick.image + '">';
    }



    //Trigger Action

    var triggers = [{
            name: 'Lightweight Trigger',
            image: 'attachments/secondaries/lightweighttrigger50.png'
        },
        {
            name: 'Heavy Duty Trigger',
            image: 'attachments/secondaries/heavydutytrigger50.png'
        },
        {
            name: 'Match Grade Trigger',
            image: 'attachments/secondaries/matchgradetrigger50.png'
        }
    ];


    var trigger = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt5").innerHTML = "";

    if (attArr.includes(4)) {
        trigger = true;
        //console.log("stock is true");
    }

    if (trigger != false) {
        var ranTrigger = Math.floor(Math.random() * triggers.length) + 0;
        

        var triggerPick = triggers[ranTrigger];
        //console.log(stockPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt5").innerHTML = '<b>' + "Trigger -  " + '</b>' + triggerPick.name + '<br>' + '<img  style="width:250px;"  src="' + triggerPick.image + '">';
    }



    //Ammunation

    var ammunations = [{
            name: '10 Round Mags',
            image: 'attachments/secondaries/1050.png'
        },
        {
            name: '13 Round Mags',
            image: 'attachments/secondaries/13.png'
        }
    ];


    var ammunation = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt7").innerHTML = "";

    if (attArr.includes(6)) {
        ammunation = true;
        //console.log("ammunation is true");
    }

    if (ammunation != false) {
        var ranAmmunation = Math.floor(Math.random() * ammunations.length) + 0;

        var ammunationPick = ammunations[ranAmmunation];
        //console.log(ammunationPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt7").innerHTML = '<b>' + "Ammunation -  " + '</b>' + ammunationPick.name + '<br>' + '<img  style="width:250px;"  src="' + ammunationPick.image + '">';
    }




    //RearGrip

    var reargrips = [{
            name: 'Granulated Grip Tape',
            image: 'attachments/secondaries/granulated50.png'
        },
        {
            name: 'Rubberized Grip Tape',
            image: 'attachments/secondaries/rubberized50.png'
        },
        {
            name: 'Stippled Grip Tape',
            image: 'attachments/secondaries/stippled50.png'
        }
    ];


    var reargrip = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt8").innerHTML = "";

    if (attArr.includes(7)) {
        reargrip = true;
        //console.log("rear grip is true");
    }

    if (reargrip != false) {
        var ranRearGrip = Math.floor(Math.random() * reargrips.length) + 0;

        var rearGripPick = reargrips[ranRearGrip];
        //console.log(rearGripPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt8").innerHTML = '<b>' + "Rear Grip -  " + '</b>' + rearGripPick.name + '<br>' + '<img  style="width:250px;"  src="' + rearGripPick.image + '">';
    }


    //Perks

    var perks = [
        {
            name: 'FMJ',
            image: 'attachments/perks/fmj.png'
        },
        {
            name: 'Sleight of Hand',
            image: 'attachments/perks/sleight.png'
        },
        {
            name: 'Frangible - Wounding',
            image: 'attachments/perks/wounding.png'
        },
        {
            name: 'Heavy Hitter',
            image: 'attachments/perks/heavyhitter.png'
        },
        {
            name: 'Fully Loaded',
            image: 'attachments/perks/fullyloaded.png'
        },
        {
            name: 'Recon',
            image: 'attachments/perks/recon.png'
        },
        {
            name: 'Mo Money',
            image: 'attachments/perks/money.png'
        },
        {
            name: 'Fast Melee',
            image: 'attachments/perks/fastmelee.png'
        },
        {
            name: 'Frangible - Disabling',
            image: 'attachments/perks/disabling.png'
        },
        {
            name: 'Akimbo',
            image: 'attachments/perks/akimbo.png'
        }
    ];


    var perk = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt9").innerHTML = "";

    if (attArr.includes(8)) {
        perk = true;
        //console.log("perk is true");
    }

    if (perk != false) {
        var ranPerk = Math.floor(Math.random() * perks.length) + 0;

        var perkPick = perks[ranPerk];
        //console.log(perkPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt9").innerHTML = '<b>' + "Perk -  " + '</b>' + perkPick.name + '<br>' + ' <img  style="width:250px;"  src="' + perkPick.image + '" "' + '">';
    }

}


function x16() {
    var numAttachments = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    var totalCount = 9;
    var ran = Math.floor(Math.random() * 5) + 0;
    var attArr = [];
    for (var i = 0; i <= ran; i++) {
        var rand = numAttachments[Math.floor(Math.random() * totalCount)];
        attArr.push(rand);
        numAttachments.splice(rand, 1);
        totalCount--;
    }
    //console.log(attArr);
    // console.log("Inside the secondary js");
    var underbarrel = false;

    //Muzzles

    var muzzles = [{
            name: 'Flash Guard',
            image: 'attachments/secondaries/flashguard.png'
        },
        {
            name: 'Muzzle Brake',
            image: 'attachments/secondaries/muzzlebrake.png'
        },
        {
            name: 'Monolithic Suppressor',
            image: 'attachments/secondaries/monolithicsuppressor.png'
        },
        {
            name: 'Oil Can Suppressor',
            image: 'attachments/secondaries/oilcansuppressor.png'
        },
        {
            name: 'Compensator',
            image: 'attachments/secondaries/compensator.png'
        },
        {
            name: 'Lightweight Suppressor',
            image: 'attachments/secondaries/lightweightsuppressor.png'
        },
        {
            name: 'Tactical Suppressor',
            image: 'attachments/secondaries/tacticalsuppressor.png'
        }
    ];


    var muzzle = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        muzzle = true;
        //console.log("Muzzle is true");
    }

    if (muzzle != false) {
        var ranMuzzle = Math.floor(Math.random() * muzzles.length) + 0;

        var muzzlePick = muzzles[ranMuzzle];
        //console.log(muzzlePick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt1").innerHTML = '<b>' + "Muzzle -  " + '</b>' + muzzlePick.name + '<br>' + '<img  style="width:250px;"  src="' + muzzlePick.image + '">';
    }

    //Barrel

    var barrels = [{
            name: 'Singuard Arms Featherweight',
            image: 'attachments/secondaries/siguardarmsfeatherweight.png'
        },
        {
            name: 'Vanguard Elite',
            image: 'attachments/secondaries/vanguardelite.png'
        },
        {
            name: 'Singuard Arms Advantage',
            image: 'attachments/secondaries/siguardarmsadvantage.png'
        }
    ];


    var barrel = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        barrel = true;
        //console.log("Barrel is true");
    }

    if (barrel != false) {
        var ranBarrel = Math.floor(Math.random() * barrels.length) + 0;

        var barrelPick = barrels[ranBarrel];
        //console.log(barrelPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt2").innerHTML = '<b>' + "Barrel -  " + '</b>' + barrelPick.name + '<br>' + '<img  style="width:250px;"  src="' + barrelPick.image + '">';
    }




    //Laser

    var lasers = [{
            name: '1mW Laser',
            image: 'attachments/lasers/1mw.png'
        },
        {
            name: '5mW Laser',
            image: 'attachments/lasers/5mw.png'
        },
        {
            name: 'Tac Laser',
            image: 'attachments/lasers/tac.png'
        }
    ];


    var laser = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt3").innerHTML = "";

    if (attArr.includes(2)) {
        laser = true;
        //console.log("laser is true");
    }

    if (laser != false) {
        var ranLaser = Math.floor(Math.random() * lasers.length) + 0;

        var laserPick = lasers[ranLaser];
        //console.log(laserPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt3").innerHTML = '<b>' + "Laser -  " + '</b>' + laserPick.name + '<br>' + '<img  style="width:250px;"  src="' + laserPick.image + '">';
    }



    //Optic

    var optics = [
        {
            name: 'Cronen LP945 Mini Reflex',
            image: 'attachments/secondaries/cronenlp945.png'
        },
        {
            name: 'Solozero Optics Mini Reflex',
            image: 'attachments/secondaries/solozeromini.png'
        },
        {
            name: 'G.I. Mini Reflex',
            image: 'attachments/secondaries/gimini.png'
        }
    ];


    var optic = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt4").innerHTML = "";

    if (attArr.includes(3)) {
        optic = true;
        //console.log("optic is true");
    }

    if (optic != false) {
        var ranOptic = Math.floor(Math.random() * optics.length) + 0;

        var opticPick = optics[ranOptic];
        //console.log(opticPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt4").innerHTML = '<b>' + "Optic -  " + '</b>' + opticPick.name + '<br>' + '<img  style="width:250px;"  src="' + opticPick.image + '">';
    }



    //Trigger Action

    var triggers = [{
            name: 'Lightweight Trigger',
            image: 'attachments/secondaries/lightweighttrigger.png'
        },
        {
            name: 'Heavy Duty Trigger',
            image: 'attachments/secondaries/heavydutytrigger.png'
        },
        {
            name: 'Match Grade Trigger',
            image: 'attachments/secondaries/matchgradetrigger.png'
        }
    ];


    var trigger = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt5").innerHTML = "";

    if (attArr.includes(4)) {
        trigger = true;
        //console.log("stock is true");
    }

    if (trigger != false) {
        var ranTrigger = Math.floor(Math.random() * triggers.length) + 0;

        var triggerPick = triggers[ranTrigger];
        //console.log(stockPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt5").innerHTML = '<b>' + "Trigger -  " + '</b>' + triggerPick.name + '<br>' + '<img  style="width:250px;"  src="' + triggerPick.image + '">';
    }



    //Ammunation

    var ammunations = [{
            name: '17 Round Mags',
            image: 'attachments/secondaries/17.png'
        },
        {
            name: '26 Round Mags',
            image: 'attachments/secondaries/26.png'
        }
    ];


    var ammunation = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt7").innerHTML = "";

    if (attArr.includes(6)) {
        ammunation = true;
        //console.log("ammunation is true");
    }

    if (ammunation != false) {
        var ranAmmunation = Math.floor(Math.random() * ammunations.length) + 0;

        var ammunationPick = ammunations[ranAmmunation];
        //console.log(ammunationPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt7").innerHTML = '<b>' + "Ammunation -  " + '</b>' + ammunationPick.name + '<br>' + '<img  style="width:250px;"  src="' + ammunationPick.image + '">';
    }




    //RearGrip

    var reargrips = [{
            name: 'Granulated Grip Tape',
            image: 'attachments/secondaries/granulated.png'
        },
        {
            name: 'Rubberized Grip Tape',
            image: 'attachments/secondaries/rubberized.png'
        },
        {
            name: 'Stippled Grip Tape',
            image: 'attachments/secondaries/stippled.png'
        },
        {
            name: 'X16 Stock',
            image: 'attachments/secondaries/x16.png'
        }
    ];


    var reargrip = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt8").innerHTML = "";

    if (attArr.includes(7)) {
        reargrip = true;
        //console.log("rear grip is true");
    }

    if (reargrip != false) {
        var ranRearGrip = Math.floor(Math.random() * reargrips.length) + 0;

        var rearGripPick = reargrips[ranRearGrip];
        //console.log(rearGripPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt8").innerHTML = '<b>' + "Rear Grip -  " + '</b>' + rearGripPick.name + '<br>' + '<img  style="width:250px;"  src="' + rearGripPick.image + '">';
    }


    //Perks

    var perks = [
        {
            name: 'FMJ',
            image: 'attachments/perks/fmj.png'
        },
        {
            name: 'Sleight of Hand',
            image: 'attachments/perks/sleight.png'
        },
        {
            name: 'Frangible - Wounding',
            image: 'attachments/perks/wounding.png'
        },
        {
            name: 'Heavy Hitter',
            image: 'attachments/perks/heavyhitter.png'
        },
        {
            name: 'Fully Loaded',
            image: 'attachments/perks/fullyloaded.png'
        },
        {
            name: 'Recon',
            image: 'attachments/perks/recon.png'
        },
        {
            name: 'Mo Money',
            image: 'attachments/perks/money.png'
        },
        {
            name: 'Fast Melee',
            image: 'attachments/perks/fastmelee.png'
        },
        {
            name: 'Frangible - Disabling',
            image: 'attachments/perks/disabling.png'
        },
        {
            name: 'Akimbo',
            image: 'attachments/perks/akimbo.png'
        }
    ];


    var perk = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt9").innerHTML = "";

    if (attArr.includes(8)) {
        perk = true;
        //console.log("perk is true");
    }

    if (perk != false) {
        var ranPerk = Math.floor(Math.random() * perks.length) + 0;

        var perkPick = perks[ranPerk];
        //console.log(perkPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt9").innerHTML = '<b>' + "Perk -  " + '</b>' + perkPick.name + '<br>' + ' <img  style="width:250px;"  src="' + perkPick.image + '" "' + '">';
    }

}


function s1911() {
    var numAttachments = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    var totalCount = 9;
    var ran = Math.floor(Math.random() * 5) + 0;
    var attArr = [];
    for (var i = 0; i <= ran; i++) {
        var rand = numAttachments[Math.floor(Math.random() * totalCount)];
        attArr.push(rand);
        numAttachments.splice(rand, 1);
        totalCount--;
    }
    //console.log(attArr);
    // console.log("Inside the secondary js");
    var underbarrel = false;

    //Muzzles

    var muzzles = [{
            name: 'Flash Guard',
            image: 'attachments/secondaries/flashguard.png'
        },
        {
            name: 'Muzzle Brake',
            image: 'attachments/secondaries/muzzlebrake.png'
        },
        {
            name: 'Monolithic Suppressor',
            image: 'attachments/secondaries/monolithicsuppressor.png'
        },
        {
            name: 'Oil Can Suppressor',
            image: 'attachments/secondaries/oilcansuppressor.png'
        },
        {
            name: 'Compensator',
            image: 'attachments/secondaries/compensator.png'
        },
        {
            name: 'Lightweight Suppressor',
            image: 'attachments/secondaries/lightweightsuppressor.png'
        },
        {
            name: 'Tactical Suppressor',
            image: 'attachments/secondaries/tacticalsuppressor.png'
        }
    ];


    var muzzle = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        muzzle = true;
        //console.log("Muzzle is true");
    }

    if (muzzle != false) {
        var ranMuzzle = Math.floor(Math.random() * muzzles.length) + 0;

        var muzzlePick = muzzles[ranMuzzle];
        //console.log(muzzlePick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt1").innerHTML = '<b>' + "Muzzle -  " + '</b>' + muzzlePick.name + '<br>' + '<img  style="width:250px;"  src="' + muzzlePick.image + '">';
    }

    //Barrel

    var barrels = [{
            name: '.45 Compact',
            image: 'attachments/secondaries/45compact.png'
        },
        {
            name: '.45 Match Grade',
            image: 'attachments/secondaries/45matchgrade.png'
        },
        {
            name: '1911 Stalker',
            image: 'attachments/secondaries/1911stalker.png'
        }
    ];


    var barrel = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        barrel = true;
        //console.log("Barrel is true");
    }

    if (barrel != false) {
        var ranBarrel = Math.floor(Math.random() * barrels.length) + 0;

        var barrelPick = barrels[ranBarrel];
        //console.log(barrelPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt2").innerHTML = '<b>' + "Barrel -  " + '</b>' + barrelPick.name + '<br>' + '<img  style="width:250px;"  src="' + barrelPick.image + '">';
    }




    //Laser

    var lasers = [{
            name: '1mW Laser',
            image: 'attachments/lasers/1mw.png'
        },
        {
            name: '5mW Laser',
            image: 'attachments/lasers/5mw.png'
        },
        {
            name: 'Tac Laser',
            image: 'attachments/lasers/tac.png'
        }
    ];


    var laser = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt3").innerHTML = "";

    if (attArr.includes(2)) {
        laser = true;
        //console.log("laser is true");
    }

    if (laser != false) {
        var ranLaser = Math.floor(Math.random() * lasers.length) + 0;

        var laserPick = lasers[ranLaser];
        //console.log(laserPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt3").innerHTML = '<b>' + "Laser -  " + '</b>' + laserPick.name + '<br>' + '<img  style="width:250px;"  src="' + laserPick.image + '">';
    }



    //Optic

    var optics = [
        {
            name: 'Cronen LP945 Mini Reflex',
            image: 'attachments/secondaries/cronenlp945.png'
        },
        {
            name: 'Solozero Optics Mini Reflex',
            image: 'attachments/secondaries/solozeromini.png'
        },
        {
            name: 'G.I. Mini Reflex',
            image: 'attachments/secondaries/gimini.png'
        }
    ];


    var optic = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt4").innerHTML = "";

    if (attArr.includes(3)) {
        optic = true;
        //console.log("optic is true");
    }

    if (optic != false) {
        var ranOptic = Math.floor(Math.random() * optics.length) + 0;

        var opticPick = optics[ranOptic];
        //console.log(opticPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt4").innerHTML = '<b>' + "Optic -  " + '</b>' + opticPick.name + '<br>' + '<img  style="width:250px;"  src="' + opticPick.image + '">';
    }



    //Trigger Action

    var triggers = [{
            name: 'Lightweight Trigger',
            image: 'attachments/secondaries/ligthweighttrigger1911.png'
        },
        {
            name: 'Heavy Duty Trigger',
            image: 'attachments/secondaries/heavydutytrigger1911.png'
        },
        {
            name: 'Match Grade Trigger',
            image: 'attachments/secondaries/matchgradetrigger1911.png'
        }
    ];


    var trigger = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt5").innerHTML = "";

    if (attArr.includes(4)) {
        trigger = true;
        //console.log("stock is true");
    }

    if (trigger != false) {
        var ranTrigger = Math.floor(Math.random() * triggers.length) + 0;

        var triggerPick = triggers[ranTrigger];
        //console.log(stockPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt5").innerHTML = '<b>' + "Trigger -  " + '</b>' + triggerPick.name + '<br>' + '<img  style="width:250px;"  src="' + triggerPick.image + '">';
    }



    //Ammunation

    var ammunations = [{
            name: '10 Round Mags',
            image: 'attachments/secondaries/10.png'
        },
        {
            name: '15 Round Mags',
            image: 'attachments/secondaries/15.png'
        }
    ];


    var ammunation = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt7").innerHTML = "";

    if (attArr.includes(6)) {
        ammunation = true;
        //console.log("ammunation is true");
    }

    if (ammunation != false) {
        var ranAmmunation = Math.floor(Math.random() * ammunations.length) + 0;

        var ammunationPick = ammunations[ranAmmunation];
        //console.log(ammunationPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt7").innerHTML = '<b>' + "Ammunation -  " + '</b>' + ammunationPick.name + '<br>' + '<img  style="width:250px;"  src="' + ammunationPick.image + '">';
    }




    //RearGrip

    var reargrips = [{
            name: 'Granulated Grip Tape',
            image: 'attachments/secondaries/granulated1911.png'
        },
        {
            name: 'Rubberized Grip Tape',
            image: 'attachments/secondaries/rubberized1911.png'
        },
        {
            name: 'Stippled Grip Tape',
            image: 'attachments/secondaries/stippled1911.png'
        },
    ];


    var reargrip = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt8").innerHTML = "";

    if (attArr.includes(7)) {
        reargrip = true;
        //console.log("rear grip is true");
    }

    if (reargrip != false) {
        var ranRearGrip = Math.floor(Math.random() * reargrips.length) + 0;

        var rearGripPick = reargrips[ranRearGrip];
        //console.log(rearGripPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt8").innerHTML = '<b>' + "Rear Grip -  " + '</b>' + rearGripPick.name + '<br>' + '<img  style="width:250px;"  src="' + rearGripPick.image + '">';
    }


    //Perks

    var perks = [
        {
            name: 'FMJ',
            image: 'attachments/perks/fmj.png'
        },
        {
            name: 'Sleight of Hand',
            image: 'attachments/perks/sleight.png'
        },
        {
            name: 'Frangible - Wounding',
            image: 'attachments/perks/wounding.png'
        },
        {
            name: 'Heavy Hitter',
            image: 'attachments/perks/heavyhitter.png'
        },
        {
            name: 'Fully Loaded',
            image: 'attachments/perks/fullyloaded.png'
        },
        {
            name: 'Recon',
            image: 'attachments/perks/recon.png'
        },
        {
            name: 'Mo Money',
            image: 'attachments/perks/money.png'
        },
        {
            name: 'Fast Melee',
            image: 'attachments/perks/fastmelee.png'
        },
        {
            name: 'Frangible - Disabling',
            image: 'attachments/perks/disabling.png'
        },
        {
            name: 'Akimbo',
            image: 'attachments/perks/akimbo.png'
        }
    ];


    var perk = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt9").innerHTML = "";

    if (attArr.includes(8)) {
        perk = true;
        //console.log("perk is true");
    }

    if (perk != false) {
        var ranPerk = Math.floor(Math.random() * perks.length) + 0;

        var perkPick = perks[ranPerk];
        //console.log(perkPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt9").innerHTML = '<b>' + "Perk -  " + '</b>' + perkPick.name + '<br>' + ' <img  style="width:250px;"  src="' + perkPick.image + '" "' + '">';
    }

}





function s357() {
    var numAttachments = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    var totalCount = 9;
    var ran = Math.floor(Math.random() * 5) + 0;
    var attArr = [];
    for (var i = 0; i <= ran; i++) {
        var rand = numAttachments[Math.floor(Math.random() * totalCount)];
        attArr.push(rand);
        numAttachments.splice(rand, 1);
        totalCount--;
    }
    //console.log(attArr);
    // console.log("Inside the secondary js");
    var underbarrel = false;

    //Muzzles

    var muzzles = [{
            name: 'Flash Guard',
            image: 'attachments/secondaries/flashguard.png'
        },
        {
            name: 'Muzzle Brake',
            image: 'attachments/secondaries/muzzlebrake.png'
        },
        {
            name: 'Compensator',
            image: 'attachments/secondaries/compensator.png'
        }
    ];


    var muzzle = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        muzzle = true;
        //console.log("Muzzle is true");
    }

    if (muzzle != false) {
        var ranMuzzle = Math.floor(Math.random() * muzzles.length) + 0;

        var muzzlePick = muzzles[ranMuzzle];
        //console.log(muzzlePick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt1").innerHTML = '<b>' + "Muzzle -  " + '</b>' + muzzlePick.name + '<br>' + '<img  style="width:250px;"  src="' + muzzlePick.image + '">';
    }

    //Barrel

    var barrels = [{
            name: '.357 Snub Noset',
            image: 'attachments/secondaries/357snubnose.png'
        },
        {
            name: 'Silverfield Ordnanace .357',
            image: 'attachments/secondaries/silverfield.png'
        },
        {
            name: '.357 Long',
            image: 'attachments/secondaries/357long.png'
        }
    ];


    var barrel = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        barrel = true;
        //console.log("Barrel is true");
    }

    if (barrel != false) {
        var ranBarrel = Math.floor(Math.random() * barrels.length) + 0;

        var barrelPick = barrels[ranBarrel];
        //console.log(barrelPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt2").innerHTML = '<b>' + "Barrel -  " + '</b>' + barrelPick.name + '<br>' + '<img  style="width:250px;"  src="' + barrelPick.image + '">';
    }




    //Laser

    var lasers = [{
            name: '1mW Laser',
            image: 'attachments/lasers/1mw.png'
        },
        {
            name: '5mW Laser',
            image: 'attachments/lasers/5mw.png'
        },
        {
            name: 'Tac Laser',
            image: 'attachments/lasers/tac.png'
        }
    ];


    var laser = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt3").innerHTML = "";

    if (attArr.includes(2)) {
        laser = true;
        //console.log("laser is true");
    }

    if (laser != false) {
        var ranLaser = Math.floor(Math.random() * lasers.length) + 0;

        var laserPick = lasers[ranLaser];
        //console.log(laserPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt3").innerHTML = '<b>' + "Laser -  " + '</b>' + laserPick.name + '<br>' + '<img  style="width:250px;"  src="' + laserPick.image + '">';
    }



    //Optic

    var optics = [
        {
            name: 'Cronen LP945 Mini Reflex',
            image: 'attachments/optics/cronenlp945.png'
        },
        {
            name: 'Corp Combat Holo Sight',
            image: 'attachments/optics/corp.png'
        },
        {
            name: 'Operator Reflex Sight',
            image: 'attachments/optics/operator.png'
        },
        {
            name: 'Scout Combat Optic',
            image: 'attachments/optics/scout.png'
        },
        {
            name: 'Aim-Op Reflex Sight',
            image: 'attachments/optics/aimop.png'
        },
        {
            name: 'APx5 Holographic Sight',
            image: 'attachments/optics/apx5.png'
        },
        {
            name: 'VLK 2.5x Optic',
            image: 'attachments/optics/vlk.png'
        },
 
        {
            name: 'Viper Reflex Sight',
            image: 'attachments/optics/viper.png'
        },
        {
            name: 'G.I. Mini Reflex',
            image: 'attachments/optics/gi.png'
        },
        {
            name: 'Cronen C480 Pro Optic',
            image: 'attachments/optics/cronenc480.png'
        },
        {
            name: 'Monocle Reflex Sight',
            image: 'attachments/optics/monocle.png'
        },
        {
            name: 'Solozero Optics Mini Reflex',
            image: 'attachments/optics/solozeromini.png'
        },
        {
            name: 'Lockwood Pistol Scope',
            image: 'attachments/secondaries/lockwood.png'
        }
    ];


    var optic = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt4").innerHTML = "";

    if (attArr.includes(3)) {
        optic = true;
        //console.log("optic is true");
    }

    if (optic != false) {
        var ranOptic = Math.floor(Math.random() * optics.length) + 0;

        var opticPick = optics[ranOptic];
        //console.log(opticPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt4").innerHTML = '<b>' + "Optic -  " + '</b>' + opticPick.name + '<br>' + '<img  style="width:250px;"  src="' + opticPick.image + '">';
    }



    //Trigger Action

    var triggers = [{
            name: 'Lightweight Trigger',
            image: 'attachments/secondaries/lightweightrigger357.png'
        },
        {
            name: 'Heavy Duty Trigger',
            image: 'attachments/secondaries/heavydutytrigger357.png'
        },
        {
            name: 'Match Grade Trigger',
            image: 'attachments/secondaries/matchgradetrigger357.png'
        }
    ];


    var trigger = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt5").innerHTML = "";

    if (attArr.includes(4)) {
        trigger = true;
        //console.log("stock is true");
    }

    if (trigger != false) {
        var ranTrigger = Math.floor(Math.random() * triggers.length) + 0;

        var triggerPick = triggers[ranTrigger];
        //console.log(stockPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt5").innerHTML = '<b>' + "Trigger -  " + '</b>' + triggerPick.name + '<br>' + '<img  style="width:250px;"  src="' + triggerPick.image + '">';
    }



    //Ammunation

    var ammunations = [{
            name: 'Snake Shot',
            image: 'attachments/secondaries/snakeshot.png'
        }
    ];


    var ammunation = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt7").innerHTML = "";

    if (attArr.includes(6)) {
        ammunation = true;
        //console.log("ammunation is true");
    }

    if (ammunation != false) {
        var ranAmmunation = Math.floor(Math.random() * ammunations.length) + 0;

        var ammunationPick = ammunations[ranAmmunation];
        //console.log(ammunationPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt7").innerHTML = '<b>' + "Ammunation -  " + '</b>' + ammunationPick.name + '<br>' + '<img  style="width:250px;"  src="' + ammunationPick.image + '">';
    }




    //RearGrip

    var reargrips = [{
            name: 'Granulated Grip Tape',
            image: 'attachments/secondaries/granulated357.png'
        },
        {
            name: 'Rubberized Grip Tape',
            image: 'attachments/secondaries/rubberized357.png'
        },
        {
            name: 'Stippled Grip Tape',
            image: 'attachments/secondaries/stippled357.png'
        },
        {
            name: 'Lockwood .357 Custom Stock',
            image: 'attachments/secondaries/lockwood357.png'
        },
        {
            name: 'FSS Raider Stock',
            image: 'attachments/secondaries/fssraider.png'
        }
    ];


    var reargrip = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt8").innerHTML = "";

    if (attArr.includes(7)) {
        reargrip = true;
        //console.log("rear grip is true");
    }

    if (reargrip != false) {
        var ranRearGrip = Math.floor(Math.random() * reargrips.length) + 0;

        var rearGripPick = reargrips[ranRearGrip];
        //console.log(rearGripPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt8").innerHTML = '<b>' + "Rear Grip -  " + '</b>' + rearGripPick.name + '<br>' + '<img  style="width:250px;"  src="' + rearGripPick.image + '">';
    }


    //Perks

    var perks = [
        {
            name: 'FMJ',
            image: 'attachments/perks/fmj.png'
        },
        {
            name: 'Sleight of Hand',
            image: 'attachments/perks/sleight.png'
        },
        {
            name: 'Frangible - Wounding',
            image: 'attachments/perks/wounding.png'
        },
        {
            name: 'Heavy Hitter',
            image: 'attachments/perks/heavyhitter.png'
        },
        {
            name: 'Fully Loaded',
            image: 'attachments/perks/fullyloaded.png'
        },
        {
            name: 'Recon',
            image: 'attachments/perks/recon.png'
        },
        {
            name: 'Mo Money',
            image: 'attachments/perks/money.png'
        },
        {
            name: 'Fast Melee',
            image: 'attachments/perks/fastmelee.png'
        },
        {
            name: 'Frangible - Disabling',
            image: 'attachments/perks/disabling.png'
        },
        {
            name: 'Akimbo',
            image: 'attachments/perks/akimbo.png'
        }
    ];


    var perk = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt9").innerHTML = "";

    if (attArr.includes(8)) {
        perk = true;
        //console.log("perk is true");
    }

    if (perk != false) {
        var ranPerk = Math.floor(Math.random() * perks.length) + 0;

        var perkPick = perks[ranPerk];
        //console.log(perkPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt9").innerHTML = '<b>' + "Perk -  " + '</b>' + perkPick.name + '<br>' + ' <img  style="width:250px;"  src="' + perkPick.image + '" "' + '">';
    }

}





function m19() {
    var numAttachments = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    var totalCount = 9;
    var ran = Math.floor(Math.random() * 5) + 0;
    var attArr = [];
    for (var i = 0; i <= ran; i++) {
        var rand = numAttachments[Math.floor(Math.random() * totalCount)];
        attArr.push(rand);
        numAttachments.splice(rand, 1);
        totalCount--;
    }
    //console.log(attArr);
    // console.log("Inside the secondary js");
    var underbarrel = false;

    //Muzzles

    var muzzles = [{
            name: 'Flash Guard',
            image: 'attachments/secondaries/flashguard.png'
        },
        {
            name: 'Muzzle Brake',
            image: 'attachments/secondaries/muzzlebrake.png'
        },
        {
            name: 'Monolithic Suppressor',
            image: 'attachments/secondaries/monolithicsuppressor.png'
        },
        {
            name: 'Lightweight Suppressor',
            image: 'attachments/secondaries/lightweightsuppressor.png'
        },
        {
            name: 'Compensator',
            image: 'attachments/secondaries/compensator.png'
        },
        {
            name: 'Oil Can Suppressor',
            image: 'attachments/secondaries/oilcansuppressor.png'
        },
        {
            name: 'Tactical Suppressor',
            image: 'attachments/secondaries/tacticalsuppressor.png'
        }
    ];


    var muzzle = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        muzzle = true;
        //console.log("Muzzle is true");
    }

    if (muzzle != false) {
        var ranMuzzle = Math.floor(Math.random() * muzzles.length) + 0;

        var muzzlePick = muzzles[ranMuzzle];
        //console.log(muzzlePick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt1").innerHTML = '<b>' + "Muzzle -  " + '</b>' + muzzlePick.name + '<br>' + '<img  style="width:250px;"  src="' + muzzlePick.image + '">';
    }

    //Barrel

    var barrels = [{
            name: 'XRK L Super',
            image: 'attachments/secondaries/xrkl.png'
        },
        {
            name: 'XRK V Extended',
            image: 'attachments/secondaries/xrkv.png'
        },
        {
            name: 'A9-19 Lightweight',
            image: 'attachments/secondaries/a916.png'
        }
    ];


    var barrel = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        barrel = true;
        //console.log("Barrel is true");
    }

    if (barrel != false) {
        var ranBarrel = Math.floor(Math.random() * barrels.length) + 0;

        var barrelPick = barrels[ranBarrel];
        //console.log(barrelPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt2").innerHTML = '<b>' + "Barrel -  " + '</b>' + barrelPick.name + '<br>' + '<img  style="width:250px;"  src="' + barrelPick.image + '">';
    }




    //Laser

    var lasers = [{
            name: '1mW Laser',
            image: 'attachments/lasers/1mw.png'
        },
        {
            name: '5mW Laser',
            image: 'attachments/lasers/5mw.png'
        },
        {
            name: 'Tac Laser',
            image: 'attachments/lasers/tac.png'
        }
    ];


    var laser = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt3").innerHTML = "";

    if (attArr.includes(2)) {
        laser = true;
        //console.log("laser is true");
    }

    if (laser != false) {
        var ranLaser = Math.floor(Math.random() * lasers.length) + 0;

        var laserPick = lasers[ranLaser];
        //console.log(laserPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt3").innerHTML = '<b>' + "Laser -  " + '</b>' + laserPick.name + '<br>' + '<img  style="width:250px;"  src="' + laserPick.image + '">';
    }



    //Optic

    var optics = [
        {
            name: 'Cronen LP945 Mini Reflex',
            image: 'attachments/secondaries/cronenlp945.png'
        },
        {
            name: 'Solozero Mini Reflex',
            image: 'attachments/secondaries/solozeromini.png'
        },
        {
            name: 'G.I. Mini Reflex',
            image: 'attachments/secondaries/gimini.png'
        }
    ];


    var optic = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt4").innerHTML = "";

    if (attArr.includes(3)) {
        optic = true;
        //console.log("optic is true");
    }

    if (optic != false) {
        var ranOptic = Math.floor(Math.random() * optics.length) + 0;

        var opticPick = optics[ranOptic];
        //console.log(opticPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt4").innerHTML = '<b>' + "Optic -  " + '</b>' + opticPick.name + '<br>' + '<img  style="width:250px;"  src="' + opticPick.image + '">';
    }



    //Trigger Action

    var triggers = [{
            name: 'Lightweight Trigger',
            image: 'attachments/secondaries/lightweighttriggerm19.png'
        },
        {
            name: 'Heavy Duty Trigger',
            image: 'attachments/secondaries/heavydutytriggerm19.png'
        },
        {
            name: 'Match Grade Trigger',
            image: 'attachments/secondaries/matchgradetriggerm19.png'
        }
    ];


    var trigger = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt5").innerHTML = "";

    if (attArr.includes(4)) {
        trigger = true;
        //console.log("stock is true");
    }

    if (trigger != false) {
        var ranTrigger = Math.floor(Math.random() * triggers.length) + 0;

        var triggerPick = triggers[ranTrigger];
        //console.log(stockPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt5").innerHTML = '<b>' + "Trigger -  " + '</b>' + triggerPick.name + '<br>' + '<img  style="width:250px;"  src="' + triggerPick.image + '">';
    }



    //Ammunation

    var ammunations = [{
            name: '21 Round Mags',
            image: 'attachments/secondaries/21.png'
        },
        {
            name: '32 Round Mags',
            image: 'attachments/secondaries/32.png'
        }
    ];


    var ammunation = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt7").innerHTML = "";

    if (attArr.includes(6)) {
        ammunation = true;
        //console.log("ammunation is true");
    }

    if (ammunation != false) {
        var ranAmmunation = Math.floor(Math.random() * ammunations.length) + 0;

        var ammunationPick = ammunations[ranAmmunation];
        //console.log(ammunationPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt7").innerHTML = '<b>' + "Ammunation -  " + '</b>' + ammunationPick.name + '<br>' + '<img  style="width:250px;"  src="' + ammunationPick.image + '">';
    }




    //RearGrip

    var reargrips = [{
            name: 'Granulated Grip Tape',
            image: 'attachments/secondaries/granulatedm19.png'
        },
        {
            name: 'Rubberized Grip Tape',
            image: 'attachments/secondaries/rubberizedm19.png'
        },
        {
            name: 'Stippled Grip Tape',
            image: 'attachments/secondaries/stippledm19.png'
        }
    ];


    var reargrip = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt8").innerHTML = "";

    if (attArr.includes(7)) {
        reargrip = true;
        //console.log("rear grip is true");
    }

    if (reargrip != false) {
        var ranRearGrip = Math.floor(Math.random() * reargrips.length) + 0;

        var rearGripPick = reargrips[ranRearGrip];
        //console.log(rearGripPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt8").innerHTML = '<b>' + "Rear Grip -  " + '</b>' + rearGripPick.name + '<br>' + '<img  style="width:250px;"  src="' + rearGripPick.image + '">';
    }


    //Perks

    var perks = [
        {
            name: 'FMJ',
            image: 'attachments/perks/fmj.png'
        },
        {
            name: 'Sleight of Hand',
            image: 'attachments/perks/sleight.png'
        },
        {
            name: 'Frangible - Wounding',
            image: 'attachments/perks/wounding.png'
        },
        {
            name: 'Heavy Hitter',
            image: 'attachments/perks/heavyhitter.png'
        },
        {
            name: 'Fully Loaded',
            image: 'attachments/perks/fullyloaded.png'
        },
        {
            name: 'Recon',
            image: 'attachments/perks/recon.png'
        },
        {
            name: 'Mo Money',
            image: 'attachments/perks/money.png'
        },
        {
            name: 'Fast Melee',
            image: 'attachments/perks/fastmelee.png'
        },
        {
            name: 'Frangible - Disabling',
            image: 'attachments/perks/disabling.png'
        },
        {
            name: 'Akimbo',
            image: 'attachments/perks/akimbo.png'
        }
    ];


    var perk = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt9").innerHTML = "";

    if (attArr.includes(8)) {
        perk = true;
        //console.log("perk is true");
    }

    if (perk != false) {
        var ranPerk = Math.floor(Math.random() * perks.length) + 0;

        var perkPick = perks[ranPerk];
        //console.log(perkPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt9").innerHTML = '<b>' + "Perk -  " + '</b>' + perkPick.name + '<br>' + ' <img  style="width:250px;"  src="' + perkPick.image + '" "' + '">';
    }

}















function renetti() {
    var numAttachments = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    var totalCount = 9;
    var ran = Math.floor(Math.random() * 5) + 0;
    var attArr = [];
    for (var i = 0; i <= ran; i++) {
        var rand = numAttachments[Math.floor(Math.random() * totalCount)];
        attArr.push(rand);
        numAttachments.splice(rand, 1);
        totalCount--;
    }
    // //console.log(attArr);
    var underbarrel = false;

    //Muzzles

    var muzzles = [
        {
            name: 'Flash Guard',
            image: 'attachments/secondaries/flashguard.png'
        },
        {
            name: 'Muzzle Brake',
            image: 'attachments/secondaries/muzzlebrake.png'
        },
        {
            name: 'Monolithic Suppressor',
            image: 'attachments/secondaries/monolithicsuppressor.png'
        },
        {
            name: 'Oil Can Suppressor',
            image: 'attachments/secondaries/oilcansuppressor.png'
        },
        {
            name: 'Desperado Pro Compensator',
            image: 'attachments/secondaries/desperado.png'
        },
        {
            name: 'Lightweight Suppressor',
            image: 'attachments/secondaries/lightweightsuppressor.png'
        },
        {
            name: 'Tactical Suppressor',
            image: 'attachments/secondaries/tacticalsuppressor.png'
        }
    ];


    var muzzle = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        muzzle = true;
        // //console.log("Muzzle is true");
    }

    if (muzzle != false) {
        var ranMuzzle = Math.floor(Math.random() * muzzles.length) + 0;

        var muzzlePick = muzzles[ranMuzzle];
        // //console.log(muzzlePick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt1").innerHTML = '<b>' + "Muzzle -  " + '</b>' + muzzlePick.name + '<br>' + '<img  style="width:250px;"  src="' + muzzlePick.image + '">';
    }

    //Barrel

    var barrels = [
        {
            name: 'Mk1 Competition',
            image: 'attachments/secondaries/competition.png'
        },
        {
            name: 'Mk1 Extended',
            image: 'attachments/secondaries/extended.png'
        },
        {
            name: 'Mk3 Burst Mod',
            image: 'attachments/secondaries/burst.png'
        }
    ];


    var barrel = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        barrel = true;
        // //console.log("Barrel is true");
    }

    if (barrel != false) {
        var ranBarrel = Math.floor(Math.random() * barrels.length) + 0;

        var barrelPick = barrels[ranBarrel];
        // //console.log(barrelPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt2").innerHTML = '<b>' + "Barrel -  " + '</b>' + barrelPick.name + '<br>' + '<img  style="width:250px;"  src="' + barrelPick.image + '">';
    }




    //Laser

    var lasers = [{
            name: '1mW Laser',
            image: 'attachments/smgs/1mwlaser.png'
        },
        {
            name: '5mW Laser',
            image: 'attachments/smgs/5mwlaser.png'
        },
        {
            name: 'Tac Laser',
            image: 'attachments/smgs/taclaser.png'
        },
    ];


    var laser = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt3").innerHTML = "";

    if (attArr.includes(2)) {
        laser = true;
        // //console.log("laser is true");
    }

    if (laser != false) {
        var ranLaser = Math.floor(Math.random() * lasers.length) + 0;

        var laserPick = lasers[ranLaser];
        // //console.log(laserPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt3").innerHTML = '<b>' + "Laser -  " + '</b>' + laserPick.name + '<br>' + '<img  style="width:250px;"  src="' + laserPick.image + '">';
    }



    //Optic

    var optics = [
        {
            name: 'Operator Reflex Sight',
            image: 'attachments/smgs/operatorreflex.png'
        },
        {
            name: 'Corp Combat Holo Sight',
            image: 'attachments/smgs/corp.png'
        },
        {
            name: 'Aim-Op Relfex Sight',
            image: 'attachments/smgs/aimop.png'
        },
        {
            name: 'G.I. Mini Relex',
            image: 'attachments/smgs/gi.png'
        },
        {
            name: 'Scout Combat Optic',
            image: 'attachments/smgs/scout.png'
        },
        {
            name: 'APX5 Holographic Sight',
            image: 'attachments/smgs/apx5.png'
        },
        {
            name: 'Solozero Optics Mini Reflex',
            image: 'attachments/smgs/solozeromini.png'
        },
        {
            name: 'VLK 2.5x Optic',
            image: 'attachments/secondaries/2.5x.png'
        },
        {
            name: 'XRX 4.0x Pistol Scope',
            image: 'attachments/smgs/40x.png'
        },
        {
            name: 'Viper Reflex Sight',
            image: 'attachments/smgs/viper.png'
        },
        {
            name: 'Cronen LP945 Mini Reflex',
            image: 'attachments/smgs/cronenlp945.png'
        },
        {
            name: 'Monocle Reflex Sight',
            image: 'attachments/smgs/monocle.png'
        },
        {
            name: 'Cronen C480 Pro Optic',
            image: 'attachments/smgs/cronenc480.png'
        },
    ];


    var optic = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt4").innerHTML = "";

    if (attArr.includes(3)) {
        optic = true;
        // //console.log("optic is true");
    }

    if (optic != false) {
        var ranOptic = Math.floor(Math.random() * optics.length) + 0;

        var opticPick = optics[ranOptic];
        // //console.log(opticPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt4").innerHTML = '<b>' + "Optic -  " + '</b>' + opticPick.name + '<br>' + '<img  style="width:250px;"  src="' + opticPick.image + '">';
    }



    //Stock

    var stocks = [{
            name: 'FTAC SATUS CS-3',
            image: 'attachments/pistols/cs3.png'
        },
        {
            name: 'FTAC G-X',
            image: 'attachments/pistols/gx.png'
        },
        {
            name: 'FTAC SATUS CS-X',
            image: 'attachments/pistols/csx.png'
        },
    ];


    var stock = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt5").innerHTML = "";

    if (attArr.includes(4)) {
        stock = true;
        // //console.log("stock is true");
    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * 3) + 0;

        var stockPick = stocks[ranStock];
        // //console.log(stockPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt5").innerHTML = '<b>' + "Stock -  " + '</b>' + stockPick.name + '<br>' + '<img  style="width:250px;"  src="' + stockPick.image + '">';
    }




    //Underbarrel

    var underbarrels = [{
            name: 'Lightweight Trigger',
            image: 'attachments/pistols/lightweight.png'
        },
        {
            name: 'Heavy Duty Trigger',
            image: 'attachments/pistols/heavy.png'
        },
        {
            name: 'Match Grade Trigger',
            image: 'attachments/pistols/match.png'
        }
    ];


    var underbarrel = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt6").innerHTML = "";

    if (attArr.includes(5)) {
        underbarrel = true;
        // //console.log("underbarrel is true");
    }

    if (underbarrel != false) {
        var ranUnderbarrel = Math.floor(Math.random() * 3) + 0;

        var underbarrelPick = underbarrels[ranUnderbarrel];
        // //console.log(underbarrelPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt6").innerHTML = '<b>' + "Trigger Action -  " + '</b>' + underbarrelPick.name + '<br>' + '<img  style="width:250px;"  src="' + underbarrelPick.image + '">';
    }







    //Ammunation

    var ammunations = [{
            name: '21 Round Mags',
            image: 'attachments/pistols/21.png'
        },
        {
            name: '27 Round Mags',
            image: 'attachments/pistols/27.png'
        }
    ];


    var ammunation = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt7").innerHTML = "";

    if (attArr.includes(6)) {
        ammunation = true;
        // //console.log("ammunation is true");
    }

    if (ammunation != false) {
        var ranAmmunation = Math.floor(Math.random() * ammunations.length) + 0;

        var ammunationPick = ammunations[ranAmmunation];
        // //console.log(ammunationPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt7").innerHTML = '<b>' + "Ammunation -  " + '</b>' + ammunationPick.name + '<br>' + '<img  style="width:250px;"  src="' + ammunationPick.image + '">';
    }




    //RearGrip

    var reargrips = [{
            name: 'XRX Pro Grip',
            image: 'attachments/pistols/pro.png'
        },
        {
            name: 'XRX Speed Grip',
            image: 'attachments/pistols/speed.png'
        }
    ];


    var reargrip = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt8").innerHTML = "";

    if (attArr.includes(7)) {
        reargrip = true;
        // //console.log("rear grip is true");
    }

    if (reargrip != false) {
        var ranRearGrip = Math.floor(Math.random() * reargrips.length) + 0;

        var rearGripPick = reargrips[ranRearGrip];
        // //console.log(rearGripPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt8").innerHTML = '<b>' + "Rear Grip -  " + '</b>' + rearGripPick.name + '<br>' + '<img  style="width:250px;"  src="' + rearGripPick.image + '">';
    }


    //Perks

    var perks = [
        {
            name: 'FMJ',
            image: 'attachments/perks/fmj.png'
        },
        {
            name: 'Sleight of Hand',
            image: 'attachments/perks/sleight.png'
        },
        {
            name: 'Frangible - Wounding',
            image: 'attachments/perks/wounding.png'
        },
        {
            name: 'Heavy Hitter',
            image: 'attachments/perks/heavyhitter.png'
        },
        {
            name: 'Fully Loaded',
            image: 'attachments/perks/fullyloaded.png'
        },
        {
            name: 'Akimbo',
            image: 'attachments/perks/akimbo.png'
        },
        {
            name: 'Recon',
            image: 'attachments/perks/recon.png'
        },
        {
            name: 'Mo Money',
            image: 'attachments/perks/money.png'
        },
        {
            name: 'Fast Melee',
            image: 'attachments/perks/fastmelee.png'
        },
        {
            name: 'Frangible - Disabling',
            image: 'attachments/perks/disabling.png'
        },
    ];


    var perk = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt9").innerHTML = "";

    if (attArr.includes(8)) {
        perk = true;
        // //console.log("perk is true");
    }

    if (perk != false) {
        var ranPerk = Math.floor(Math.random() * perks.length) + 0;

        var perkPick = perks[ranPerk];
        // //console.log(perkPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt9").innerHTML = '<b>' + "Perk -  " + '</b>' + perkPick.name + '<br>' + ' <img  style="width:250px;"  src="' + perkPick.image + '" "' + '">';
    }





}





























