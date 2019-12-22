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
    console.log("Inside the secondary js");
    var underbarrel = false;

    //Muzzles

    var muzzles = [{
            name: 'Flash Guard',
            image: 'attachments/secondaries/comingsoon.png'
        },
        {
            name: 'Muzzle Brake',
            image: 'attachments/secondaries/comingsoon.png'
        },
        {
            name: 'Monolithic Suppressor',
            image: 'attachments/secondaries/comingsoon.png'
        },
        {
            name: 'Oil Can Suppressor',
            image: 'attachments/secondaries/comingsoon.png'
        },
        {
            name: 'Compensator',
            image: 'attachments/secondaries/comingsoon.png'
        },
        {
            name: 'Lightweight Suppressor',
            image: 'attachments/secondaries/comingsoon.png'
        },
        {
            name: 'Tactical Suppressor',
            image: 'attachments/secondaries/comingsoon.png'
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
        var ranMuzzle = Math.floor(Math.random() * 7) + 0;

        var muzzlePick = muzzles[ranMuzzle];
        //console.log(muzzlePick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt1").innerHTML = '<b>' + "Muzzle -  " + '</b>' + muzzlePick.name + '<br>' + '<img  style="width:250px;"  src="' + muzzlePick.image + '">';
    }

    //Barrel

    var barrels = [{
            name: 'FORGE TAC Extended',
            image: 'attachments/secondaries/comingsoon.png'
        },
        {
            name: 'FORGE TAC Enforcer',
            image: 'attachments/secondaries/comingsoon.png'
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
        var ranBarrel = Math.floor(Math.random() * 2) + 0;

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
        var ranLaser = Math.floor(Math.random() * 3) + 0;

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
            name: 'VLK 3.0x Optic',
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
        var ranOptic = Math.floor(Math.random() * 12) + 0;

        var opticPick = optics[ranOptic];
        //console.log(opticPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt4").innerHTML = '<b>' + "Optic -  " + '</b>' + opticPick.name + '<br>' + '<img  style="width:250px;"  src="' + opticPick.image + '">';
    }



    //Trigger Action

    var triggers = [{
            name: 'Lightweight Trigger',
            image: 'attachments/secondaries/comingsoon.png'
        },
        {
            name: 'Heavy Duty Trigger',
            image: 'attachments/secondaries/comingsoon.png'
        },
        {
            name: 'Match Grade Trigger',
            image: 'attachments/secondaries/comingsoon.png'
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
        var ranTrigger = Math.floor(Math.random() * 3) + 0;

        var triggerPick = triggers[ranTrigger];
        //console.log(stockPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt5").innerHTML = '<b>' + "Trigger -  " + '</b>' + triggerPick.name + '<br>' + '<img  style="width:250px;"  src="' + triggerPick.image + '">';
    }



    //Ammunation

    var ammunations = [{
            name: '10 Round Mags (.50 GS)',
            image: 'attachments/secondaries/comingsoon.png'
        },
        {
            name: '13 Round Mags',
            image: 'attachments/secondaries/comingsoon.png'
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
        var ranAmmunation = Math.floor(Math.random() * 2) + 0;

        var ammunationPick = ammunations[ranAmmunation];
        //console.log(ammunationPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt7").innerHTML = '<b>' + "Ammunation -  " + '</b>' + ammunationPick.name + '<br>' + '<img  style="width:250px;"  src="' + ammunationPick.image + '">';
    }




    //RearGrip

    var reargrips = [{
            name: 'Granulated Grip Tape',
            image: 'attachments/secondaries/comingsoon.png'
        },
        {
            name: 'Rubberized Grip Tape',
            image: 'attachments/secondaries/comingsoon.png'
        },
        {
            name: 'Stippled Grip Tape',
            image: 'attachments/secondaries/comingsoon.png'
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
        var ranRearGrip = Math.floor(Math.random() * 3) + 0;

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
        var ranPerk = Math.floor(Math.random() * 9) + 0;

        var perkPick = perks[ranPerk];
        //console.log(perkPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt9").innerHTML = '<b>' + "Perk -  " + '</b>' + perkPick.name + '<br>' + ' <img  style="width:250px;"  src="' + perkPick.image + '" "' + '">';
    }

}