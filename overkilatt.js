function ak47o() {
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
    var underbarrel = false;

    //Muzzles

    var muzzles = [{
            name: 'Flash Guard',
            image: 'attachments/muzzles/flashguard.png'
        },
        {
            name: 'Bayonet',
            image: 'attachments/muzzles/bayonet.png'
        },
        {
            name: 'Tactical Suppressor',
            image: 'attachments/muzzles/tacticalsuppressor.png'
        },
        {
            name: 'Muzzle Brake',
            image: 'attachments/muzzles/muzzlebrake.png'
        },
        {
            name: 'Lightweight Suppressor',
            image: 'attachments/muzzles/lightweightsuppressor.png'
        },
        {
            name: 'Compensator',
            image: 'attachments/muzzles/compensator.png'
        },
        {
            name: 'Monolithic Suppressor',
            image: 'attachments/muzzles/monolithicsuppressor.png'
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
            name: 'Spetsnaz Elite',
            image: 'attachments/barrels/spetsnazelite.png'
        },
        {
            name: '23.0 RPK Barrel',
            image: 'attachments/barrels/230rpkbarrel.png'
        },
        {
            name: '8.1 Compact Barrel',
            image: 'attachments/barrels/81compactbarrel.png'
        },
        {
            name: '23.0 Romanian',
            image: 'attachments/barrels/230romanian.png'
        },
    ];


    var barrel = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        barrel = true;
        //console.log("Barrel is true");
    }

    if (barrel != false) {
        var ranBarrel = Math.floor(Math.random() * 4) + 0;

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

    var optics = [{
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
            name: 'Integral Hybrid',
            image: 'attachments/optics/integral.png'
        },
        {
            name: 'Solozero NVG Enhanced',
            image: 'attachments/optics/solozero.png'
        },
        {
            name: 'VLK 3.0x Optic',
            image: 'attachments/optics/vlk.png'
        },
        {
            name: 'Sniper Scope',
            image: 'attachments/optics/sniperscope.png'
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
            name: 'Variable Zoom Scope',
            image: 'attachments/optics/variable.png'
        },
        {
            name: 'Canted Hybrid',
            image: 'attachments/optics/canted.png'
        },
        {
            name: 'Merc Thermal Optic',
            image: 'attachments/optics/merc.png'
        },
        {
            name: 'Thermal Hybrid',
            image: 'attachments/optics/thermal.png'
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
        var ranOptic = Math.floor(Math.random() * 19) + 0;

        var opticPick = optics[ranOptic];
        //console.log(opticPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt4").innerHTML = '<b>' + "Optic -  " + '</b>' + opticPick.name + '<br>' + '<img  style="width:250px;"  src="' + opticPick.image + '">';
    }



    //Stock

    var stocks = [{
            name: 'Field LMG Stock',
            image: 'attachments/stocks/fieldlmgstock.png'
        },
        {
            name: 'Skeleton Stock',
            image: 'attachments/stocks/skeletonstock.png'
        },
        {
            name: 'No Stock',
            image: 'attachments/stocks/nostockak47.png'
        },
        {
            name: 'FSS Close Quarters Stock',
            image: 'attachments/stocks/closequartersfal.png'
        },
        {
            name: 'FORGE TAC Ultralight',
            image: 'attachments/stocks/ultralight.png'
        }
    ];


    var stock = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt5").innerHTML = "";

    if (attArr.includes(4)) {
        stock = true;
        //console.log("stock is true");
    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * 5) + 0;

        var stockPick = stocks[ranStock];
        //console.log(stockPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt5").innerHTML = '<b>' + "Stock -  " + '</b>' + stockPick.name + '<br>' + '<img  style="width:250px;"  src="' + stockPick.image + '">';
    }




    //Underbarrel

    var underbarrels = [{
            name: 'Commando Foregrip',
            image: 'attachments/underbarrels/commando.png'
        },
        {
            name: 'GP25 40mm High-explosive',
            image: 'attachments/underbarrels/GP25explosive.png'
        },
        {
            name: 'GP25 40mm Incendiary',
            image: 'attachments/underbarrels/GP25incendiary.png'
        },
        {
            name: '12 Gauge Deputy',
            image: 'attachments/underbarrels/12gauge.png'
        },
        {
            name: 'Merc Foregrip',
            image: 'attachments/underbarrels/merc.png'
        },
        {
            name: 'GP25 40mm Smokescreen',
            image: 'attachments/underbarrels/GP25smokescreen.png'
        },
        {
            name: 'Tactical Foregrip',
            image: 'attachments/underbarrels/tactical.png'
        },
        {
            name: 'GP25 40mm Recon',
            image: 'attachments/underbarrels/GP25recon.png'
        },
        {
            name: 'Bipod',
            image: 'attachments/underbarrels/bipodak47.png'
        },
        {
            name: 'GP25 40mm Flash',
            image: 'attachments/underbarrels/GP25flash.png'
        },
        {
            name: 'Ranger Foregrip',
            image: 'attachments/underbarrels/ranger.png'
        },
        {
            name: 'GP25 40mm Concussive',
            image: 'attachments/underbarrels/GP25concussive.png'
        },
        {
            name: 'Operator Foregrip',
            image: 'attachments/underbarrels/operator.png'
        }
    ];


    var underbarrel = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt6").innerHTML = "";

    if (attArr.includes(5)) {
        underbarrel = true;
        //console.log("underbarrel is true");
    }

    if (underbarrel != false) {
        var ranUnderbarrel = Math.floor(Math.random() * 13) + 0;

        var underbarrelPick = underbarrels[ranUnderbarrel];
        //console.log(underbarrelPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt6").innerHTML = '<b>' + "Underbarrel -  " + '</b>' + underbarrelPick.name + '<br>' + '<img  style="width:250px;"  src="' + underbarrelPick.image + '">';
    }







    //Ammunation

    var ammunations = [{
            name: '40 Round Mags',
            image: 'attachments/ammunations/40.png'
        },
        {
            name: '5.45x39mm 30-Round Mags',
            image: 'attachments/ammunations/30ak.png'
        },
        {
            name: '75 Round Drum Mags',
            image: 'attachments/ammunations/75.png'
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
        var ranAmmunation = Math.floor(Math.random() * 3) + 0;

        var ammunationPick = ammunations[ranAmmunation];
        //console.log(ammunationPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt7").innerHTML = '<b>' + "Ammunation -  " + '</b>' + ammunationPick.name + '<br>' + '<img  style="width:250px;"  src="' + ammunationPick.image + '">';
    }




    //RearGrip

    var reargrips = [{
            name: 'Granulated Grip Tape',
            image: 'attachments/reargrips/granulated.png'
        },
        {
            name: 'Rubberized Grip Tape',
            image: 'attachments/reargrips/rubberized.png'
        },
        {
            name: 'Stippled Grip Tape',
            image: 'attachments/reargrips/stippled.png'
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

    var perks = [{
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
            name: 'Presence of Mind',
            image: 'attachments/perks/mind.png'
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
        var ranPerk = Math.floor(Math.random() * 10) + 0;

        var perkPick = perks[ranPerk];
        //console.log(perkPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt9").innerHTML = '<b>' + "Perk -  " + '</b>' + perkPick.name + '<br>' + ' <img  style="width:250px;"  src="' + perkPick.image + '" "' + '">';
    }

}

function r90o() {
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
    // // console.log(attArr);
    // // console.log("R90 is the gun");
    var underbarrel = false;

    //Muzzles

    var muzzles = [{
            name: 'Breacher Device',
            image: 'attachments/shotguns/r90shotgun/breacherdevice.png'
        },
        {
            name: 'Flash Guard',
            image: 'attachments/shotguns/r90shotgun/flashguard.png'
        },
        {
            name: 'Monolithic Suppressor',
            image: 'attachments/shotguns/r90shotgun/monolithicsuppressor.png'
        },
        {
            name: 'Muzzle Brake',
            image: 'attachments/shotguns/r90shotgun/muzzlebrake.png'
        },
        {
            name: 'Compensator',
            image: 'attachments/shotguns/r90shotgun/compensator.png'
        },
        {
            name: 'Choke',
            image: 'attachments/shotguns/r90shotgun/choke.png'
        },
        {
            name: 'Lightweight Suppressor',
            image: 'attachments/shotguns/r90shotgun/lightweightsuppressor.png'
        },
        {
            name: 'Tactical Suppressor',
            image: 'attachments/shotguns/r90shotgun/tacticalsuppressor.png'
        },

    ];


    var muzzle = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        muzzle = true;
        // console.log("Muzzle is true");
    }

    if (muzzle != false) {
        var ranMuzzle = Math.floor(Math.random() * 8) + 0;

        var muzzlePick = muzzles[ranMuzzle];
        // console.log(muzzlePick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt1").innerHTML = '<b>' + "Muzzle -  " + '</b>' + muzzlePick.name + '<br>' + '<img  style="width:250px;"  src="' + muzzlePick.image + '">';
    }

    //Barrel

    var barrels = [{
            name: 'FORGE TAC Sentry',
            image: 'attachments/shotguns/r90shotgun/forgetacsentry.png'
        },
        {
            name: 'FORGE TAC Gemini',
            image: 'attachments/shotguns/r90shotgun/forgetacgemini.png'
        },
    ];


    var barrel = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        barrel = true;
        // console.log("Barrel is true");
    }

    if (barrel != false) {
        var ranBarrel = Math.floor(Math.random() * 2) + 0;

        var barrelPick = barrels[ranBarrel];
        // console.log(barrelPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt2").innerHTML = '<b>' + "Barrel -  " + '</b>' + barrelPick.name + '<br>' + '<img  style="width:250px;"  src="' + barrelPick.image + '">';
    }




    //Laser

    var lasers = [{
            name: '1mW Laser',
            image: 'attachments/shotguns/r90shotgun/1mwlaser.png'
        },
        {
            name: '5mW Laser',
            image: 'attachments/shotguns/r90shotgun/5mwlaser.png'
        },
        {
            name: 'Tac Laser',
            image: 'attachments/shotguns/r90shotgun/taclaser.png'
        },
    ];


    var laser = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt3").innerHTML = "";

    if (attArr.includes(2)) {
        laser = true;
        // console.log("laser is true");
    }

    if (laser != false) {
        var ranLaser = Math.floor(Math.random() * 3) + 0;

        var laserPick = lasers[ranLaser];
        // console.log(laserPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt3").innerHTML = '<b>' + "Laser -  " + '</b>' + laserPick.name + '<br>' + '<img  style="width:250px;"  src="' + laserPick.image + '">';
    }



    //Optic

    var optics = [{
            name: 'Operator Reflex Sight',
            image: 'attachments/shotguns/optics/operatorrelfexsight.png'
        },
        {
            name: 'Corp Combat Holo Sight',
            image: 'attachments/shotguns/optics/corpcombatholosight.png'
        },
        {
            name: 'Aim-Op Reflex Sight',
            image: 'attachments/shotguns/optics/aimopreflexsight.png'
        },
        {
            name: 'Cronen LP945 Mini Reflex',
            image: 'attachments/shotguns/optics/cronenlp945minireflex.png'
        },
        {
            name: 'APX5 Holographic Sight',
            image: 'attachments/shotguns/optics/apx5holographicsight.png'
        },
        {
            name: 'Scout Combat Optic',
            image: 'attachments/shotguns/optics/scoutcombatoptic.png'
        },
        {
            name: 'Viper Reflex Sight',
            image: 'attachments/shotguns/optics/viperreflexsight.png'
        },
        {
            name: 'VLK 3.0x Optic',
            image: 'attachments/shotguns/optics/vlk30xoptic.png'
        },
        {
            name: 'G.I. Mini Reflex',
            image: 'attachments/shotguns/optics/giminireflex.png'
        },
        {
            name: 'Solozero NVG Enhanced',
            image: 'attachments/shotguns/optics/solozeronvgenhanced.png'
        },
        {
            name: 'PBX Holo 7 Sight',
            image: 'attachments/shotguns/optics/pbxholo7sight.png'
        },
        {
            name: 'Monocle Reflex Sight',
            image: 'attachments/shotguns/optics/monoclereflexsight.png'
        },
        {
            name: 'Cronen C480 Pro Optic',
            image: 'attachments/shotguns/optics/cronenc480prooptic.png'
        },
        {
            name: 'Solozero Optics Mini Reflex',
            image: 'attachments/shotguns/optics/solozeroopticsminireflex.png'
        },
    ];


    var optic = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt4").innerHTML = "";

    if (attArr.includes(3)) {
        optic = true;
        // console.log("optic is true");
    }

    if (optic != false) {
        var ranOptic = Math.floor(Math.random() * 14) + 0;

        var opticPick = optics[ranOptic];
        // console.log(opticPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt4").innerHTML = '<b>' + "Optic -  " + '</b>' + opticPick.name + '<br>' + '<img  style="width:250px;"  src="' + opticPick.image + '">';
    }



    //Pumps

    var pumps = [{
            name: 'FSS R9-0 Bulldog',
            image: 'attachments/shotguns/r90shotgun/fssr90bulldog.png'
        },
        {
            name: 'FTAC Ultralight Pump',
            image: 'attachments/shotguns/r90shotgun/ftacultralightpump.png'
        },
        {
            name: 'FTAC Close Quarters Pro',
            image: 'attachments/shotguns/r90shotgun/ftacclosequarterspro.png'
        },
    ];


    var pump = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt5").innerHTML = "";

    if (attArr.includes(4)) {
        pump = true;
        // console.log("pump is true");
    }

    if (pump != false) {
        var ranPump = Math.floor(Math.random() * 3) + 0;

        var pumpPick = pumps[ranPump];
        // console.log(pumpPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt5").innerHTML = '<b>' + "Pump -  " + '</b>' + pumpPick.name + '<br>' + '<img  style="width:250px;"  src="' + pumpPick.image + '">';
    }




    //Underbarrel

    var underbarrels = [{
            name: 'Merc Foregrip',
            image: 'attachments/shotguns/r90shotgun/mercforegrip.png'
        },
        {
            name: 'Ranger Foregrip',
            image: 'attachments/shotguns/r90shotgun/rangerforerip.png'
        },
        {
            name: 'Operator Foregrip',
            image: 'attachments/shotguns/r90shotgun/operatorforegrip.png'
        },
    ];


    var underbarrel = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt6").innerHTML = "";

    if (attArr.includes(5)) {
        underbarrel = true;
        // console.log("underbarrel is true");
    }

    if (underbarrel != false) {
        var ranUnderbarrel = Math.floor(Math.random() * 3) + 0;

        var underbarrelPick = underbarrels[ranUnderbarrel];
        // console.log(underbarrelPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt6").innerHTML = '<b>' + "Underbarrel -  " + '</b>' + underbarrelPick.name + '<br>' + '<img  style="width:250px;"  src="' + underbarrelPick.image + '">';
    }







    //Ammunation

    var ammunations = [{
            name: 'Tube Extension',
            image: 'attachments/shotguns/model680/tubeextension.png'
        },
        {
            name: 'Slug Rounds',
            image: 'attachments/shotguns/model680/slugrounds.png'
        },
    ];


    var ammunation = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt7").innerHTML = "";

    if (attArr.includes(6)) {
        ammunation = true;
        // console.log("ammunation is true");
    }

    if (ammunation != false) {
        var ranAmmunation = Math.floor(Math.random() * 2) + 0;

        var ammunationPick = ammunations[ranAmmunation];
        // console.log(ammunationPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt7").innerHTML = '<b>' + "Ammunation -  " + '</b>' + ammunationPick.name + '<br>' + '<img  style="width:250px;"  src="' + ammunationPick.image + '">';
    }

    //RearGrip

    var reargrips = [{
            name: 'Granulated Grip Tape',
            image: 'attachments/shotguns/r90shotgun/granulatedgriptape.png'
        },
        {
            name: 'Rubberized Grip Tape',
            image: 'attachments/shotguns/r90shotgun/rubberizedgriptape.png'
        },
        {
            name: 'Stippled Grip Tape',
            image: 'attachments/shotguns/r90shotgun/stippledgriptape.png'
        },
    ];


    var reargrip = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt8").innerHTML = "";

    if (attArr.includes(7)) {
        reargrip = true;
        // console.log("rear grip is true");
    }

    if (reargrip != false) {
        var ranRearGrip = Math.floor(Math.random() * 3) + 0;

        var rearGripPick = reargrips[ranRearGrip];
        // console.log(rearGripPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt8").innerHTML = '<b>' + "Rear Grip -  " + '</b>' + rearGripPick.name + '<br>' + '<img  style="width:250px;"  src="' + rearGripPick.image + '">';
    }

    //Perks

    var perks = [{
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
    ];


    var perk = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt9").innerHTML = "";

    if (attArr.includes(8)) {
        perk = true;
        // console.log("perk is true");
    }

    if (perk != false) {
        var ranPerk = Math.floor(Math.random() * 9) + 0;

        var perkPick = perks[ranPerk];
        // console.log(perkPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt9").innerHTML = '<b>' + "Perk -  " + '</b>' + perkPick.name + '<br>' + ' <img  style="width:250px;"  src="' + perkPick.image + '" "' + '">';
    }


}


function ram7o() {
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
    var underbarrel = false;

    //Muzzles

    var muzzles = [{
            name: 'Flash Guard',
            image: 'attachments/muzzles/flashguard.png'
        },
        {
            name: 'Breacher Device',
            image: 'attachments/muzzles/breacherdevice.png'
        },
        {
            name: 'Tactical Suppressor',
            image: 'attachments/muzzles/tacticalsuppressor.png'
        },
        {
            name: 'Muzzle Brake',
            image: 'attachments/muzzles/muzzlebrake.png'
        },
        {
            name: 'Lightweight Suppressor',
            image: 'attachments/muzzles/lightweightsuppressor.png'
        },
        {
            name: 'Compensator',
            image: 'attachments/muzzles/compensator.png'
        },
        {
            name: 'Monolithic Suppressor',
            image: 'attachments/muzzles/monolithicsuppressor.png'
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
            name: 'FTAC 13.5 Compact',
            image: 'attachments/barrels/compact.png'
        },
        {
            name: 'FORGE TAC Eclipse',
            image: 'attachments/barrels/eclipse.png'
        },
        {
            name: 'XRX Ranger',
            image: 'attachments/barrels/ranger.png'
        },
    ];


    var barrel = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        barrel = true;
        //console.log("Barrel is true");
    }

    if (barrel != false) {
        var ranBarrel = Math.floor(Math.random() * 3) + 0;

        var barrelPick = barrels[ranBarrel];
        //console.log(barrelPick.name);
        if (barrelPick.name == "FFS 12.4 Predator")
            document.getElementById("secondaryAttH2").innerHTML = "";

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

    var optics = [{
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
            name: '4.0x Flip Hybrid',
            image: 'attachments/optics/40x.png'
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
            name: 'Integral Hybrid',
            image: 'attachments/optics/integral.png'
        },
        {
            name: 'Solozero NVG Enhanced',
            image: 'attachments/optics/solozero.png'
        },
        {
            name: 'VLK 3.0x Optic',
            image: 'attachments/optics/vlk.png'
        },
        {
            name: 'Sniper Scope',
            image: 'attachments/optics/sniperscope.png'
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
            name: 'PBX Holo 7 Sight',
            image: 'attachments/optics/pbx.png'
        },
        {
            name: 'Cronen 2x2 Elite',
            image: 'attachments/optics/cronen2x2elite.png'
        },
        {
            name: 'Monocle Reflex Sight',
            image: 'attachments/optics/monocle.png'
        },
        {
            name: 'Variable Zoom Scope',
            image: 'attachments/optics/variable.png'
        },
        {
            name: 'Canted Hybrid',
            image: 'attachments/optics/canted.png'
        },
        {
            name: 'Merc Thermal Optic',
            image: 'attachments/optics/merc.png'
        },
        {
            name: 'Thermal Hybrid',
            image: 'attachments/optics/thermal.png'
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
        var ranOptic = Math.floor(Math.random() * 20) + 0;

        var opticPick = optics[ranOptic];
        //console.log(opticPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt4").innerHTML = '<b>' + "Optic -  " + '</b>' + opticPick.name + '<br>' + '<img  style="width:250px;"  src="' + opticPick.image + '">';
    }



    //Stock

    var stocks = [{
            name: 'FTAC Equilibrium',
            image: 'attachments/stocks/equilibrium.png'
        },
        {
            name: 'XRX Ultralight Hollow',
            image: 'attachments/stocks/hollow.png'
        },
        {
            name: 'XRX Close Quarters',
            image: 'attachments/stocks/quarters.png'
        },
    ];


    var stock = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt5").innerHTML = "";

    if (attArr.includes(4)) {
        stock = true;
        //console.log("stock is true");
    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * 3) + 0;

        var stockPick = stocks[ranStock];
        //console.log(stockPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt5").innerHTML = '<b>' + "Stock -  " + '</b>' + stockPick.name + '<br>' + '<img  style="width:250px;"  src="' + stockPick.image + '">';
    }




    //Underbarrel

    var underbarrels = [{
            name: 'Commando Foregrip',
            image: 'attachments/underbarrels/commando.png'
        },
        {
            name: 'M203 40mm High-explosive',
            image: 'attachments/underbarrels/m203high.png'
        },
        {
            name: 'M203 40mm Incendiary',
            image: 'attachments/underbarrels/m203incendiary.png'
        },
        {
            name: '12 Gauge Deputy',
            image: 'attachments/underbarrels/12gauge.png'
        },
        {
            name: 'Merc Foregrip',
            image: 'attachments/underbarrels/merc.png'
        },
        {
            name: 'M203 40mm Smokescreen',
            image: 'attachments/underbarrels/m203smokescreen.png'
        },
        {
            name: 'Tactical Foregrip',
            image: 'attachments/underbarrels/tactical.png'
        },
        {
            name: 'M203 40mm Recon',
            image: 'attachments/underbarrels/m203recon.png'
        },
        {
            name: 'M203 40mm Flash',
            image: 'attachments/underbarrels/m203flash.png'
        },
        {
            name: 'Ranger Foregrip',
            image: 'attachments/underbarrels/ranger.png'
        },
        {
            name: 'M203 40mm Concussive',
            image: 'attachments/underbarrels/m203concussive.png'
        },
        {
            name: 'Operator Foregrip',
            image: 'attachments/underbarrels/operator.png'
        }
    ];


    var underbarrel = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt6").innerHTML = "";

    if (attArr.includes(5)) {
        underbarrel = true;
        //console.log("underbarrel is true");
    }

    if (underbarrel != false) {
        var ranUnderbarrel = Math.floor(Math.random() * 12) + 0;

        var underbarrelPick = underbarrels[ranUnderbarrel];
        //console.log(underbarrelPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt6").innerHTML = '<b>' + "Underbarrel -  " + '</b>' + underbarrelPick.name + '<br>' + '<img  style="width:250px;"  src="' + underbarrelPick.image + '">';
    }







    //Ammunation

    var ammunations = [{
            name: '45 Round Mags',
            image: 'attachments/ammunations/45.png'
        },

    ];


    var ammunation = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt7").innerHTML = "";

    if (attArr.includes(6)) {
        ammunation = true;
        //console.log("ammunation is true");
    }

    if (ammunation != false) {
        var ranAmmunation = Math.floor(Math.random() * 1) + 0;

        var ammunationPick = ammunations[ranAmmunation];
        //console.log(ammunationPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt7").innerHTML = '<b>' + "Ammunation -  " + '</b>' + ammunationPick.name + '<br>' + '<img  style="width:250px;"  src="' + ammunationPick.image + '">';
    }




    //RearGrip

    var reargrips = [{
            name: 'Granulated Grip Tape',
            image: 'attachments/reargrips/granulated.png'
        },
        {
            name: 'Rubberized Grip Tape',
            image: 'attachments/reargrips/rubberized.png'
        },
        {
            name: 'Stippled Grip Tape',
            image: 'attachments/reargrips/stippled.png'
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

    var perks = [{
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
            name: 'Burst',
            image: 'attachments/perks/burst.png'
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
            name: 'Presence of Mind',
            image: 'attachments/perks/mind.png'
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
        var ranPerk = Math.floor(Math.random() * 11) + 0;

        var perkPick = perks[ranPerk];
        //console.log(perkPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt9").innerHTML = '<b>' + "Perk -  " + '</b>' + perkPick.name + '<br>' + ' <img  style="width:250px;"  src="' + perkPick.image + '" "' + '">';
    }

}


function sa87o() {
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
    var underbarrel = false;

    //Muzzles

    var muzzles = [{
            name: 'Flash Guard',
            image: 'attachments/lmgs/muzzles/flash.png'
        },
        {
            name: 'Monolithic Suppressor',
            image: 'attachments/lmgs/muzzles/monolithic.png'
        },
        {
            name: 'Muzzle Brake',
            image: 'attachments/lmgs/muzzles/muzzle.png'
        },
        {
            name: 'CQB Breacher Device',
            image: 'attachments/lmgs/muzzles/cqb.png'
        },
        {
            name: 'Lightweight Suppressor',
            image: 'attachments/lmgs/muzzles/lightweight.png'
        },
        {
            name: 'Compensator',
            image: 'attachments/lmgs/muzzles/compensator.png'
        },
        {
            name: 'Tactical Suppressor',
            image: 'attachments/lmgs/muzzles/tactical.png'
        },
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
            name: 'SA87 18.2 Factory',
            image: 'attachments/lmgs/barrels/182factory.png'
        },
        {
            name: 'SA87 25.4 Factory',
            image: 'attachments/lmgs/barrels/254factory.png'
        },
        {
            name: 'SA87 12.4 Factory',
            image: 'attachments/lmgs/barrels/124factory.png'
        },

    ];


    var barrel = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        barrel = true;
        //console.log("Barrel is true");
    }

    if (barrel != false) {
        var ranBarrel = Math.floor(Math.random() * 3) + 0;

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

    var optics = [{
            name: 'Cronen LP945 Mini Reflex',
            image: 'attachments/lmgs/optics/cronenlp945.png'
        },
        {
            name: 'Corp Combat Holo Sight',
            image: 'attachments/lmgs/optics/corp.png'
        },
        {
            name: 'Operator Reflex Sight',
            image: 'attachments/lmgs/optics/operator.png'
        },
        {
            name: 'Scout Combat Optic',
            image: 'attachments/lmgs/optics/scout.png'
        },
        {
            name: 'Aim-Op Reflex Sight',
            image: 'attachments/lmgs/optics/aimop.png'
        },
        {
            name: 'APx5 Holographic Sight',
            image: 'attachments/lmgs/optics/apx5.png'
        },
        {
            name: 'Integral Hybrid',
            image: 'attachments/lmgs/optics/integral.png'
        },
        {
            name: 'Solozero NVG Enhanced',
            image: 'attachments/lmgs/optics/solozero.png'
        },
        {
            name: 'VLK 3.0x Optic',
            image: 'attachments/lmgs/optics/vlk.png'
        },
        {
            name: 'Solozero Optics Mini Reflex',
            image: 'attachments/lmgs/optics/solozeromini.png'
        },
        {
            name: 'Sniper Scope',
            image: 'attachments/lmgs/optics/sniperscope.png'
        },
        {
            name: 'Viper Reflex Sight',
            image: 'attachments/lmgs/optics/viper.png'
        },
        {
            name: 'G.I. Mini Reflex',
            image: 'attachments/lmgs/optics/gi.png'
        },
        {
            name: 'PBX Holo 7 Sight',
            image: 'attachments/lmgs/optics/pbx.png'
        },
        {
            name: 'Cronen C480 Pro Optic',
            image: 'attachments/lmgs/optics/cronenc480.png'
        },
        {
            name: 'Monocle Reflex Sight',
            image: 'attachments/lmgs/optics/monocle.png'
        },
        {
            name: 'Canted Hybrid',
            image: 'attachments/lmgs/optics/canted.png'
        },
        {
            name: 'Merc Thermal Optic',
            image: 'attachments/lmgs/optics/merc.png'
        },
        {
            name: 'Thermal Hybrid',
            image: 'attachments/lmgs/optics/thermal.png'
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
        var ranOptic = Math.floor(Math.random() * 19) + 0;

        var opticPick = optics[ranOptic];
        //console.log(opticPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt4").innerHTML = '<b>' + "Optic -  " + '</b>' + opticPick.name + '<br>' + '<img  style="width:250px;"  src="' + opticPick.image + '">';
    }



    //Stock

    var stocks = [{
            name: 'FSS SA87 Heavy Stock Pro',
            image: 'attachments/lmgs/stocks/sa87heavy.png'
        },
        {
            name: 'SA87 Ultalight Hollow',
            image: 'attachments/lmgs/stocks/sa87ultralight.png'
        },
        {
            name: 'FORGE TAC CQB Comb',
            image: 'attachments/lmgs/stocks/comb.png'
        },

    ];


    var stock = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt5").innerHTML = "";

    if (attArr.includes(4)) {
        stock = true;
        //console.log("stock is true");
    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * 3) + 0;

        var stockPick = stocks[ranStock];
        //console.log(stockPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt5").innerHTML = '<b>' + "Stock -  " + '</b>' + stockPick.name + '<br>' + '<img  style="width:250px;"  src="' + stockPick.image + '">';
    }




    //Underbarrel

    var underbarrels = [{
            name: 'Commando Foregrip',
            image: 'attachments/lmgs/underbarrels/commando.png'
        },
        {
            name: 'Merc Foregrip',
            image: 'attachments/lmgs/underbarrels/merc.png'
        },
        {
            name: 'Tactical Foregrip',
            image: 'attachments/lmgs/underbarrels/tactical.png'
        },
        {
            name: 'Bipod',
            image: 'attachments/lmgs/underbarrels/bipodsa87.png'
        },
        {
            name: 'Ranger Foregrip',
            image: 'attachments/lmgs/underbarrels/ranger.png'
        },
        {
            name: 'Operator Foregrip',
            image: 'attachments/lmgs/underbarrels/commando.png'
        },
    ];
    var underbarrel = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt6").innerHTML = "";

    if (attArr.includes(5)) {
        underbarrel = true;
        //console.log("underbarrel is true");
    }

    if (underbarrel != false) {
        var ranUnderbarrel = Math.floor(Math.random() * 6) + 0;

        var underbarrelPick = underbarrels[ranUnderbarrel];
        //console.log(underbarrelPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt6").innerHTML = '<b>' + "Underbarrel -  " + '</b>' + underbarrelPick.name + '<br>' + '<img  style="width:250px;"  src="' + underbarrelPick.image + '">';
    }







    //Ammunation

    var ammunations = [{
            name: '50 Round Mags',
            image: 'attachments/lmgs/ammunations/50.png'
        },
        {
            name: '60 Round Mags',
            image: 'attachments/lmgs/ammunations/60.png'
        },

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
            image: 'attachments/lmgs/reargrips/granulated.png'
        },
        {
            name: 'Stippled Grip Tape',
            image: 'attachments/lmgs/reargrips/stippled.png'
        },
        {
            name: 'Rubberized Grip Tape',
            image: 'attachments/lmgs/reargrips/rubberized.png'
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
        var ranRearGrip = Math.floor(Math.random() * 3) + 0;

        var rearGripPick = reargrips[ranRearGrip];
        //console.log(rearGripPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt8").innerHTML = '<b>' + "Rear Grip -  " + '</b>' + rearGripPick.name + '<br>' + '<img  style="width:250px;"  src="' + rearGripPick.image + '">';
    }


    //Perks

    var perks = [{
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


function uzio() {
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
    // console.log(attArr);
    var underbarrel = false;

    //Muzzles

    var muzzles = [{
            name: 'CQB Breacher Device',
            image: 'attachments/smgs/cqbbreacherdevice.png'
        },
        {
            name: 'Tactical Suppressor',
            image: 'attachments/smgs/tacticalsuppressor.png'
        },
        {
            name: 'Flash Guard',
            image: 'attachments/smgs/flashguard.png'
        },
        {
            name: 'Monolithic Suppressor',
            image: 'attachments/smgs/monolithicsuppressor.png'
        },
        {
            name: 'Muzzle Brake',
            image: 'attachments/smgs/muzzlebrake.png'
        },
        {
            name: 'Compensator',
            image: 'attachments/smgs/compensator.png'
        },
        {
            name: 'Lightweight Suppressor',
            image: 'attachments/smgs/lightweightsuppressor.png'
        },
    ];


    var muzzle = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        muzzle = true;
        // console.log("Muzzle is true");
    }

    if (muzzle != false) {
        var ranMuzzle = Math.floor(Math.random() * 7) + 0;

        var muzzlePick = muzzles[ranMuzzle];
        // console.log(muzzlePick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt1").innerHTML = '<b>' + "Muzzle -  " + '</b>' + muzzlePick.name + '<br>' + '<img  style="width:250px;"  src="' + muzzlePick.image + '">';
    }

    //Barrel

    var barrels = [{
            name: '13.1 First Responder',
            image: 'attachments/smgs/131firstresponder.png'
        },
        {
            name: '8.5 Factory Mini',
            image: 'attachments/smgs/85factorymini.png'
        },
        {
            name: '16.5 Factory Carbine',
            image: 'attachments/smgs/165factorycarbine.png'
        },
    ];


    var barrel = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        barrel = true;
        // console.log("Barrel is true");
    }

    if (barrel != false) {
        var ranBarrel = Math.floor(Math.random() * 3) + 0;

        var barrelPick = barrels[ranBarrel];
        // console.log(barrelPick.name);
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
        }
    ];


    var laser = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt3").innerHTML = "";

    if (attArr.includes(2)) {
        laser = true;
        // console.log("laser is true");
    }

    if (laser != false) {
        var ranLaser = Math.floor(Math.random() * 3) + 0;

        var laserPick = lasers[ranLaser];
        // console.log(laserPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt3").innerHTML = '<b>' + "Laser -  " + '</b>' + laserPick.name + '<br>' + '<img  style="width:250px;"  src="' + laserPick.image + '">';
    }



    //Optic

    var optics = [{
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
            name: 'VLK 3.0x Optic',
            image: 'attachments/smgs/vlk.png'
        },
        {
            name: 'Thermal hybrid',
            image: 'attachments/smgs/thermal.png'
        },
        {
            name: 'Viper Reflex Sight',
            image: 'attachments/smgs/viper.png'
        },
        {
            name: 'PBX Holo 7 sight',
            image: 'attachments/smgs/pbx.png'
        },
        {
            name: 'Solozero NVG Enhanced',
            image: 'attachments/smgs/solozero.png'
        },
        {
            name: 'Cronen LP945 Mini Reflex',
            image: 'attachments/smgs/cronenlp945.png'
        },
        {
            name: 'Canted Hybrid',
            image: 'attachments/smgs/cantedhybrid.png'
        },
        {
            name: 'Monocle Reflex Sight',
            image: 'attachments/smgs/monocle.png'
        },
        {
            name: 'Cronen C480 Pro Optic',
            image: 'attachments/smgs/cronenc480.png'
        },
        {
            name: 'Merc Thermal Optic',
            image: 'attachments/smgs/mercthermal.png'
        },
        {
            name: 'Integral Hybrid',
            image: 'attachments/smgs/integral.png'
        },
    ];


    var optic = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt4").innerHTML = "";

    if (attArr.includes(3)) {
        optic = true;
        // console.log("optic is true");
    }

    if (optic != false) {
        var ranOptic = Math.floor(Math.random() * 18) + 0;

        var opticPick = optics[ranOptic];
        // console.log(opticPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt4").innerHTML = '<b>' + "Optic -  " + '</b>' + opticPick.name + '<br>' + '<img  style="width:250px;"  src="' + opticPick.image + '">';
    }



    //Stock

    var stocks = [{
            name: 'FORGE TAC Ultralight',
            image: 'attachments/smgs/forgetacultralight.png'
        },
        {
            name: 'Standard-Issue Wood Stock',
            image: 'attachments/smgs/standardissuewoodstock.png'
        },
        {
            name: 'No Stock',
            image: 'attachments/smgs/nostockuzi.png'
        },
        {
            name: 'FFS Close Quarters Stock',
            image: 'attachments/smgs/fssclosequartersstock.png'
        },
    ];


    var stock = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt5").innerHTML = "";

    if (attArr.includes(4)) {
        stock = true;
        // console.log("stock is true");
    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * 3) + 0;

        var stockPick = stocks[ranStock];
        // console.log(stockPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt5").innerHTML = '<b>' + "Stock -  " + '</b>' + stockPick.name + '<br>' + '<img  style="width:250px;"  src="' + stockPick.image + '">';
    }




    //Underbarrel

    var underbarrels = [{
            name: 'Merc Foregrup',
            image: 'attachments/smgs/merc.png'
        },
        {
            name: 'Commando Foregrip',
            image: 'attachments/smgs/commando.png'
        },
        {
            name: 'Tactical Foregrip',
            image: 'attachments/smgs/tactical.png'
        },
        {
            name: 'Ranger Foregrip',
            image: 'attachments/smgs/ranger.png'
        },
        {
            name: 'Operator Foregrip',
            image: 'attachments/smgs/operator.png'
        },
    ];


    var underbarrel = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt6").innerHTML = "";

    if (attArr.includes(5)) {
        underbarrel = true;
        // console.log("underbarrel is true");
    }

    if (underbarrel != false) {
        var ranUnderbarrel = Math.floor(Math.random() * 5) + 0;

        var underbarrelPick = underbarrels[ranUnderbarrel];
        // console.log(underbarrelPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt6").innerHTML = '<b>' + "Underbarrel -  " + '</b>' + underbarrelPick.name + '<br>' + '<img  style="width:250px;"  src="' + underbarrelPick.image + '">';
    }







    //Ammunation

    var ammunations = [{
            name: '40 Round Mags',
            image: 'attachments/smgs/40uzi.png'
        },
        {
            name: '50 Round Mags',
            image: 'attachments/smgs/50uzi.png'
        },
    ];


    var ammunation = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt7").innerHTML = "";

    if (attArr.includes(6)) {
        ammunation = true;
        // console.log("ammunation is true");
    }

    if (ammunation != false) {
        var ranAmmunation = Math.floor(Math.random() * 2) + 0;

        var ammunationPick = ammunations[ranAmmunation];
        // console.log(ammunationPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt7").innerHTML = '<b>' + "Ammunation -  " + '</b>' + ammunationPick.name + '<br>' + '<img  style="width:250px;"  src="' + ammunationPick.image + '">';
    }




    //RearGrip

    var reargrips = [{
            name: 'Granulated Grip Tape',
            image: 'attachments/smgs/granulatedgriptape.png'
        },
        {
            name: 'Rubberized Grip Tape',
            image: 'attachments/smgs/rubberizedgriptape.png'
        },
        {
            name: 'Stippled Grip Tape',
            image: 'attachments/smgs/stippledgriptape.png'
        },
    ];


    var reargrip = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt8").innerHTML = "";

    if (attArr.includes(7)) {
        reargrip = true;
        // console.log("rear grip is true");
    }

    if (reargrip != false) {
        var ranRearGrip = Math.floor(Math.random() * 3) + 0;

        var rearGripPick = reargrips[ranRearGrip];
        // console.log(rearGripPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt8").innerHTML = '<b>' + "Rear Grip -  " + '</b>' + rearGripPick.name + '<br>' + '<img  style="width:250px;"  src="' + rearGripPick.image + '">';
    }


    //Perks

    var perks = [{
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
            name: 'Burst',
            image: 'attachments/perks/burst.png'
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
        // console.log("perk is true");
    }

    if (perk != false) {
        var ranPerk = Math.floor(Math.random() * 9) + 0;

        var perkPick = perks[ranPerk];
        // console.log(perkPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt9").innerHTML = '<b>' + "Perk -  " + '</b>' + perkPick.name + '<br>' + ' <img  style="width:250px;"  src="' + perkPick.image + '" "' + '">';
    }


}

function pp19o() {
    var numAttachments = [0, 1, 2, 3, 4, 6, 7, 8];
    var totalCount = 8;
    var ran = Math.floor(Math.random() * 5) + 0;
    var attArr = [];
    for (var i = 0; i <= ran; i++) {
        var rand = numAttachments[Math.floor(Math.random() * totalCount)];
        attArr.push(rand);
        numAttachments.splice(rand, 1);
        totalCount--;
    }
    // console.log(attArr);
    var underbarrel = false;

    //Muzzles

    var muzzles = [{
            name: 'CQB Breacher Device',
            image: 'attachments/smgs/cqbbreacherdevice.png'
        },
        {
            name: 'Tactical Suppressor',
            image: 'attachments/smgs/tacticalsuppressor.png'
        },
        {
            name: 'Flash Guard',
            image: 'attachments/smgs/flashguard.png'
        },
        {
            name: 'Monolithic Suppressor',
            image: 'attachments/smgs/monolithicsuppressor.png'
        },
        {
            name: 'Muzzle Brake',
            image: 'attachments/smgs/muzzlebrake.png'
        },
        {
            name: 'Compensator',
            image: 'attachments/smgs/compensator.png'
        },
        {
            name: 'Lightweight Suppressor',
            image: 'attachments/smgs/lightweightsuppressor.png'
        },
    ];


    var muzzle = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        muzzle = true;
        // console.log("Muzzle is true");
    }

    if (muzzle != false) {
        var ranMuzzle = Math.floor(Math.random() * 7) + 0;

        var muzzlePick = muzzles[ranMuzzle];
        // console.log(muzzlePick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt1").innerHTML = '<b>' + "Muzzle -  " + '</b>' + muzzlePick.name + '<br>' + '<img  style="width:250px;"  src="' + muzzlePick.image + '">';
    }

    //Barrel

    var barrels = [{
            name: '8.7 Steel',
            image: 'attachments/smgs/87steel.png'
        },
        {
            name: '8.7 Polygonal',
            image: 'attachments/smgs/87pologonal.png'
        },
        {
            name: '8.7 Aluminum',
            image: 'attachments/smgs/87aluminum.png'
        },
    ];


    var barrel = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        barrel = true;
        // console.log("Barrel is true");
    }

    if (barrel != false) {
        var ranBarrel = Math.floor(Math.random() * 3) + 0;

        var barrelPick = barrels[ranBarrel];
        // console.log(barrelPick.name);
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
        }
    ];


    var laser = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt3").innerHTML = "";

    if (attArr.includes(2)) {
        laser = true;
        // console.log("laser is true");
    }

    if (laser != false) {
        var ranLaser = Math.floor(Math.random() * 3) + 0;

        var laserPick = lasers[ranLaser];
        // console.log(laserPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt3").innerHTML = '<b>' + "Laser -  " + '</b>' + laserPick.name + '<br>' + '<img  style="width:250px;"  src="' + laserPick.image + '">';
    }



    //Optic

    var optics = [{
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
            name: 'VLK 3.0x Optic',
            image: 'attachments/smgs/vlk.png'
        },
        {
            name: 'Thermal hybrid',
            image: 'attachments/smgs/thermal.png'
        },
        {
            name: 'Viper Reflex Sight',
            image: 'attachments/smgs/viper.png'
        },
        {
            name: 'PBX Holo 7 sight',
            image: 'attachments/smgs/pbx.png'
        },
        {
            name: 'Solozero NVG Enhanced',
            image: 'attachments/smgs/solozero.png'
        },
        {
            name: 'Cronen LP945 Mini Reflex',
            image: 'attachments/smgs/cronenlp945.png'
        },
        {
            name: 'Canted Hybrid',
            image: 'attachments/smgs/cantedhybrid.png'
        },
        {
            name: 'Monocle Reflex Sight',
            image: 'attachments/smgs/monocle.png'
        },
        {
            name: 'Cronen C480 Pro Optic',
            image: 'attachments/smgs/cronenc480.png'
        },
        {
            name: 'Merc Thermal Optic',
            image: 'attachments/smgs/mercthermal.png'
        },
        {
            name: 'Integral Hybrid',
            image: 'attachments/smgs/integral.png'
        },
    ];


    var optic = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt4").innerHTML = "";

    if (attArr.includes(3)) {
        optic = true;
        // console.log("optic is true");
    }

    if (optic != false) {
        var ranOptic = Math.floor(Math.random() * 18) + 0;

        var opticPick = optics[ranOptic];
        // console.log(opticPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt4").innerHTML = '<b>' + "Optic -  " + '</b>' + opticPick.name + '<br>' + '<img  style="width:250px;"  src="' + opticPick.image + '">';
    }



    //Stock

    var stocks = [{
            name: 'Factory Aiuminum Stock',
            image: 'attachments/smgs/factoryalumniumstock.png'
        },
        {
            name: 'No Stock',
            image: 'attachments/smgs/nostockpp.png'
        },
        {
            name: 'Corvus Skeleton Stock',
            image: 'attachments/smgs/corvussleketonstock.png'
        },
        {
            name: 'FFS Close Quarters Stock',
            image: 'attachments/smgs/fssclosequartersstock.png'
        },
    ];


    var stock = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt5").innerHTML = "";

    if (attArr.includes(4)) {
        stock = true;
        // console.log("stock is true");
    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * 3) + 0;

        var stockPick = stocks[ranStock];
        // console.log(stockPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt5").innerHTML = '<b>' + "Stock -  " + '</b>' + stockPick.name + '<br>' + '<img  style="width:250px;"  src="' + stockPick.image + '">';
    }






    //Ammunation

    var ammunations = [{
        name: '84 Round Helical Mags',
        image: 'attachments/smgs/84round.png'
    }, ];


    var ammunation = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt7").innerHTML = "";

    if (attArr.includes(6)) {
        ammunation = true;
        // console.log("ammunation is true");
    }

    if (ammunation != false) {
        var ranAmmunation = Math.floor(Math.random() * 1) + 0;

        var ammunationPick = ammunations[ranAmmunation];
        // console.log(ammunationPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt7").innerHTML = '<b>' + "Ammunation -  " + '</b>' + ammunationPick.name + '<br>' + '<img  style="width:250px;"  src="' + ammunationPick.image + '">';
    }




    //RearGrip

    var reargrips = [{
            name: 'Granulated Grip Tape',
            image: 'attachments/smgs/granulatedgriptape.png'
        },
        {
            name: 'Rubberized Grip Tape',
            image: 'attachments/smgs/rubberizedgriptape.png'
        },
        {
            name: 'Stippled Grip Tape',
            image: 'attachments/smgs/stippledgriptape.png'
        },
    ];


    var reargrip = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt8").innerHTML = "";

    if (attArr.includes(7)) {
        reargrip = true;
        // console.log("rear grip is true");
    }

    if (reargrip != false) {
        var ranRearGrip = Math.floor(Math.random() * 3) + 0;

        var rearGripPick = reargrips[ranRearGrip];
        // console.log(rearGripPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt8").innerHTML = '<b>' + "Rear Grip -  " + '</b>' + rearGripPick.name + '<br>' + '<img  style="width:250px;"  src="' + rearGripPick.image + '">';
    }


    //Perks

    var perks = [{
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
    ];


    var perk = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt9").innerHTML = "";

    if (attArr.includes(8)) {
        perk = true;
        // console.log("perk is true");
    }

    if (perk != false) {
        var ranPerk = Math.floor(Math.random() * 9) + 0;

        var perkPick = perks[ranPerk];
        // console.log(perkPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt9").innerHTML = '<b>' + "Perk -  " + '</b>' + perkPick.name + '<br>' + ' <img  style="width:250px;"  src="' + perkPick.image + '" "' + '">';
    }


}

function pkmo() {
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
    var underbarrel = false;

    //Muzzles

    var muzzles = [{
            name: 'Flash Guard',
            image: 'attachments/lmgs/muzzles/flash.png'
        },
        {
            name: 'Monolithic Suppressor',
            image: 'attachments/lmgs/muzzles/monolithic.png'
        },
        {
            name: 'Muzzle Brake',
            image: 'attachments/lmgs/muzzles/muzzle.png'
        },
        {
            name: 'CQB Breacher Device',
            image: 'attachments/lmgs/muzzles/cqb.png'
        },
        {
            name: 'Lightweight Suppressor',
            image: 'attachments/lmgs/muzzles/lightweight.png'
        },
        {
            name: 'Compensator',
            image: 'attachments/lmgs/muzzles/compensator.png'
        },
        {
            name: 'Tactical Suppressor',
            image: 'attachments/lmgs/muzzles/tactical.png'
        },
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
            name: '18.2 Compact Barrel',
            image: 'attachments/lmgs/barrels/182compact.png'
        },
        {
            name: '26.9 Extended Barrel',
            image: 'attachments/lmgs/barrels/269extended.png'
        },
        {
            name: '25.9 Heavy Barrel',
            image: 'attachments/lmgs/barrels/259heavy.png'
        },

    ];


    var barrel = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        barrel = true;
        //console.log("Barrel is true");
    }

    if (barrel != false) {
        var ranBarrel = Math.floor(Math.random() * 3) + 0;

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

    var optics = [{
            name: 'Cronen LP945 Mini Reflex',
            image: 'attachments/lmgs/optics/cronenlp945.png'
        },
        {
            name: 'Corp Combat Holo Sight',
            image: 'attachments/lmgs/optics/corp.png'
        },
        {
            name: 'Operator Reflex Sight',
            image: 'attachments/lmgs/optics/operator.png'
        },
        {
            name: 'Scout Combat Optic',
            image: 'attachments/lmgs/optics/scout.png'
        },
        {
            name: 'Aim-Op Reflex Sight',
            image: 'attachments/lmgs/optics/aimop.png'
        },
        {
            name: 'APx5 Holographic Sight',
            image: 'attachments/lmgs/optics/apx5.png'
        },
        {
            name: 'Integral Hybrid',
            image: 'attachments/lmgs/optics/integral.png'
        },
        {
            name: 'Solozero NVG Enhanced',
            image: 'attachments/lmgs/optics/solozero.png'
        },
        {
            name: 'VLK 3.0x Optic',
            image: 'attachments/lmgs/optics/vlk.png'
        },
        {
            name: 'Solozero Optics Mini Reflex',
            image: 'attachments/lmgs/optics/solozeromini.png'
        },
        {
            name: 'Sniper Scope',
            image: 'attachments/lmgs/optics/sniperscope.png'
        },
        {
            name: 'Viper Reflex Sight',
            image: 'attachments/lmgs/optics/viper.png'
        },
        {
            name: 'G.I. Mini Reflex',
            image: 'attachments/lmgs/optics/gi.png'
        },
        {
            name: 'PBX Holo 7 Sight',
            image: 'attachments/lmgs/optics/pbx.png'
        },
        {
            name: 'Cronen C480 Pro Optic',
            image: 'attachments/lmgs/optics/cronenc480.png'
        },
        {
            name: 'Monocle Reflex Sight',
            image: 'attachments/lmgs/optics/monocle.png'
        },
        {
            name: 'Canted Hybrid',
            image: 'attachments/lmgs/optics/canted.png'
        },
        {
            name: 'Merc Thermal Optic',
            image: 'attachments/lmgs/optics/merc.png'
        },
        {
            name: 'Thermal Hybrid',
            image: 'attachments/lmgs/optics/thermal.png'
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
        var ranOptic = Math.floor(Math.random() * 19) + 0;

        var opticPick = optics[ranOptic];
        //console.log(opticPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt4").innerHTML = '<b>' + "Optic -  " + '</b>' + opticPick.name + '<br>' + '<img  style="width:250px;"  src="' + opticPick.image + '">';
    }



    //Stock

    var stocks = [{
            name: 'FORGE TAC Stalker',
            image: 'attachments/lmgs/stocks/stalker.png'
        },
        {
            name: 'FORGE TAC Ultralight',
            image: 'attachments/lmgs/stocks/ultralight.png'
        },
        {
            name: 'FSS Close Quarters Stock',
            image: 'attachments/lmgs/stocks/close.png'
        },
        {
            name: 'No Stock',
            image: 'attachments/lmgs/stocks/nostock.png'
        },
    ];


    var stock = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt5").innerHTML = "";

    if (attArr.includes(4)) {
        stock = true;
        //console.log("stock is true");
    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * 4) + 0;

        var stockPick = stocks[ranStock];
        //console.log(stockPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt5").innerHTML = '<b>' + "Stock -  " + '</b>' + stockPick.name + '<br>' + '<img  style="width:250px;"  src="' + stockPick.image + '">';
    }




    //Underbarrel

    var underbarrels = [{
            name: 'Commando Foregrip',
            image: 'attachments/lmgs/underbarrels/commando.png'
        },
        {
            name: 'Merc Foregrip',
            image: 'attachments/lmgs/underbarrels/merc.png'
        },
        {
            name: 'Tactical Foregrip',
            image: 'attachments/lmgs/underbarrels/tactical.png'
        },
        {
            name: 'Bipod',
            image: 'attachments/lmgs/underbarrels/bipod.png'
        },
        {
            name: 'Snatch Grip',
            image: 'attachments/lmgs/underbarrels/snach.png'
        },
        {
            name: 'Operator Foregrip',
            image: 'attachments/lmgs/underbarrels/commando.png'
        },
    ];
    var underbarrel = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt6").innerHTML = "";

    if (attArr.includes(5)) {
        underbarrel = true;
        //console.log("underbarrel is true");
    }

    if (underbarrel != false) {
        var ranUnderbarrel = Math.floor(Math.random() * 6) + 0;

        var underbarrelPick = underbarrels[ranUnderbarrel];
        //console.log(underbarrelPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt6").innerHTML = '<b>' + "Underbarrel -  " + '</b>' + underbarrelPick.name + '<br>' + '<img  style="width:250px;"  src="' + underbarrelPick.image + '">';
    }







    //Ammunation

    var ammunations = [{
            name: '150 Round Belt',
            image: 'attachments/lmgs/ammunations/150.png'
        },
        {
            name: '200 Round Belt',
            image: 'attachments/lmgs/ammunations/200.png'
        },

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
            image: 'attachments/lmgs/reargrips/granulated.png'
        },
        {
            name: 'Stippled Grip Tape',
            image: 'attachments/lmgs/reargrips/stippled.png'
        },
        {
            name: 'Rubberized Grip Tape',
            image: 'attachments/lmgs/reargrips/rubberized.png'
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
        var ranRearGrip = Math.floor(Math.random() * 3) + 0;

        var rearGripPick = reargrips[ranRearGrip];
        //console.log(rearGripPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt8").innerHTML = '<b>' + "Rear Grip -  " + '</b>' + rearGripPick.name + '<br>' + '<img  style="width:250px;"  src="' + rearGripPick.image + '">';
    }


    //Perks

    var perks = [{
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

function p90o() {
    var numAttachments = [0, 1, 2, 3, 4, 5, 7, 8];
    var totalCount = 8;
    var ran = Math.floor(Math.random() * 5) + 0;
    var attArr = [];
    for (var i = 0; i <= ran; i++) {
        var rand = numAttachments[Math.floor(Math.random() * totalCount)];
        attArr.push(rand);
        numAttachments.splice(rand, 1);
        totalCount--;
    }
    // console.log(attArr);
    var underbarrel = false;

    //Muzzles

    var muzzles = [{
            name: 'Breacher Device',
            image: 'attachments/smgs/breacherdevice.png'
        },
        {
            name: 'Tactical Suppressor',
            image: 'attachments/smgs/tacticalsuppressor.png'
        },
        {
            name: 'Flash Guard',
            image: 'attachments/smgs/flashguard.png'
        },
        {
            name: 'Monolithic Suppressor',
            image: 'attachments/smgs/monolithicsuppressor.png'
        },
        {
            name: 'Muzzle Brake',
            image: 'attachments/smgs/muzzlebrake.png'
        },
        {
            name: 'Compensator',
            image: 'attachments/smgs/compensator.png'
        },
        {
            name: 'Lightweight Suppressor',
            image: 'attachments/smgs/lightweightsuppressor.png'
        },
    ];


    var muzzle = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        muzzle = true;
        // console.log("Muzzle is true");
    }

    if (muzzle != false) {
        var ranMuzzle = Math.floor(Math.random() * 7) + 0;

        var muzzlePick = muzzles[ranMuzzle];
        // console.log(muzzlePick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt1").innerHTML = '<b>' + "Muzzle -  " + '</b>' + muzzlePick.name + '<br>' + '<img  style="width:250px;"  src="' + muzzlePick.image + '">';
    }

    //Barrel

    var barrels = [{
            name: 'FORGE TAC Retribution',
            image: 'attachments/smgs/forgetacretribution.png'
        },
        {
            name: 'FFS 10.6 Pro',
            image: 'attachments/smgs/fss109pro.png'
        },
    ];


    var barrel = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        barrel = true;
        // console.log("Barrel is true");
    }

    if (barrel != false) {
        var ranBarrel = Math.floor(Math.random() * 2) + 0;

        var barrelPick = barrels[ranBarrel];
        // console.log(barrelPick.name);
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
        // console.log("laser is true");
    }

    if (laser != false) {
        var ranLaser = Math.floor(Math.random() * 3) + 0;

        var laserPick = lasers[ranLaser];
        // console.log(laserPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt3").innerHTML = '<b>' + "Laser -  " + '</b>' + laserPick.name + '<br>' + '<img  style="width:250px;"  src="' + laserPick.image + '">';
    }



    //Optic

    var optics = [{
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
            name: 'VLK 3.0x Optic',
            image: 'attachments/smgs/vlk.png'
        },
        {
            name: 'Thermal hybrid',
            image: 'attachments/smgs/thermal.png'
        },
        {
            name: 'Viper Reflex Sight',
            image: 'attachments/smgs/viper.png'
        },
        {
            name: 'PBX Holo 7 sight',
            image: 'attachments/smgs/pbx.png'
        },
        {
            name: 'Solozero NVG Enhanced',
            image: 'attachments/smgs/solozero.png'
        },
        {
            name: 'Cronen LP945 Mini Reflex',
            image: 'attachments/smgs/cronenlp945.png'
        },
        {
            name: 'FSS Ring Sight',
            image: 'attachments/smgs/fssringsight.png'
        },
        {
            name: 'Monocle Reflex Sight',
            image: 'attachments/smgs/monocle.png'
        },
        {
            name: 'Canted Hybrid',
            image: 'attachments/smgs/cantedhybrid.png'
        },
        {
            name: 'Cronen C480 Pro Optic',
            image: 'attachments/smgs/cronenc480.png'
        },
        {
            name: 'Merc Thermal Optic',
            image: 'attachments/smgs/mercthermal.png'
        },
        {
            name: 'Integral Hybrid',
            image: 'attachments/smgs/integral.png'
        },
    ];


    var optic = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt4").innerHTML = "";

    if (attArr.includes(3)) {
        optic = true;
        // console.log("optic is true");
    }

    if (optic != false) {
        var ranOptic = Math.floor(Math.random() * 19) + 0;

        var opticPick = optics[ranOptic];
        // console.log(opticPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt4").innerHTML = '<b>' + "Optic -  " + '</b>' + opticPick.name + '<br>' + '<img  style="width:250px;"  src="' + opticPick.image + '">';
    }



    //Stock

    var stocks = [{
            name: 'FORGE TAC CQB Comb',
            image: 'attachments/smgs/forgetaccqbcomb.png'
        },
        {
            name: 'Fly Strap',
            image: 'attachments/smgs/flystrap.png'
        },
        {
            name: 'FSS Heavy Stock Pro',
            image: 'attachments/smgs/fssheavystockpro.png'
        },
    ];


    var stock = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt5").innerHTML = "";

    if (attArr.includes(4)) {
        stock = true;
        // console.log("stock is true");
    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * 3) + 0;

        var stockPick = stocks[ranStock];
        // console.log(stockPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt5").innerHTML = '<b>' + "Stock -  " + '</b>' + stockPick.name + '<br>' + '<img  style="width:250px;"  src="' + stockPick.image + '">';
    }




    //Underbarrel

    var underbarrels = [{
            name: 'Granuldated Grip Tape',
            image: 'attachments/smgs/granulatedgriptapeub.png'
        },
        {
            name: 'Stippled Grip Tape',
            image: 'attachments/smgs/stippledgriptapeub.png'
        },
        {
            name: 'Rubberized Grip Tape',
            image: 'attachments/smgs/rubberizedgriptapeub.png'
        },
    ];


    var underbarrel = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt6").innerHTML = "";

    if (attArr.includes(5)) {
        underbarrel = true;
        // console.log("underbarrel is true");
    }

    if (underbarrel != false) {
        var ranUnderbarrel = Math.floor(Math.random() * 3) + 0;

        var underbarrelPick = underbarrels[ranUnderbarrel];
        // console.log(underbarrelPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt6").innerHTML = '<b>' + "Underbarrel -  " + '</b>' + underbarrelPick.name + '<br>' + '<img  style="width:250px;"  src="' + underbarrelPick.image + '">';
    }





    //RearGrip

    var reargrips = [{
            name: 'Granulated Grip Tape',
            image: 'attachments/smgs/granulatedgriptape.png'
        },
        {
            name: 'Rubberized Grip Tape',
            image: 'attachments/smgs/rubberizedgriptape.png'
        },
        {
            name: 'Stippled Grip Tape',
            image: 'attachments/smgs/stippledgriptape.png'
        },
    ];


    var reargrip = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt8").innerHTML = "";

    if (attArr.includes(7)) {
        reargrip = true;
        // console.log("rear grip is true");
    }

    if (reargrip != false) {
        var ranRearGrip = Math.floor(Math.random() * 3) + 0;

        var rearGripPick = reargrips[ranRearGrip];
        // console.log(rearGripPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt8").innerHTML = '<b>' + "Rear Grip -  " + '</b>' + rearGripPick.name + '<br>' + '<img  style="width:250px;"  src="' + rearGripPick.image + '">';
    }


    //Perks

    var perks = [{
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
    ];


    var perk = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt9").innerHTML = "";

    if (attArr.includes(8)) {
        perk = true;
        // console.log("perk is true");
    }

    if (perk != false) {
        var ranPerk = Math.floor(Math.random() * 9) + 0;

        var perkPick = perks[ranPerk];
        // console.log(perkPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt9").innerHTML = '<b>' + "Perk -  " + '</b>' + perkPick.name + '<br>' + ' <img  style="width:250px;"  src="' + perkPick.image + '" "' + '">';
    }





}

function origin12o() {
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
    // console.log(attArr);
    var underbarrel = false;

    //Muzzles

    var muzzles = [{
            name: 'Breacher Device',
            image: 'attachments/shotguns/origin12shotgun/breacherdevice.png'
        },
        {
            name: 'Flash Guard',
            image: 'attachments/shotguns/origin12shotgun/flashguard.png'
        },
        {
            name: 'Muzzle Brake',
            image: 'attachments/shotguns/origin12shotgun/muzzlebrake.png'
        },
        {
            name: 'Compensator',
            image: 'attachments/shotguns/origin12shotgun/compensator.png'
        },
        {
            name: 'Choke',
            image: 'attachments/shotguns/origin12shotgun/choke.png'
        },
        {
            name: 'Lightweight Suppressor',
            image: 'attachments/shotguns/origin12shotgun/lightweightsuppressor.png'
        },
        {
            name: 'Tactical Suppressor',
            image: 'attachments/shotguns/origin12shotgun/tacticalsuppressor.png'
        },

    ];


    var muzzle = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        muzzle = true;
        // console.log("Muzzle is true");
    }

    if (muzzle != false) {
        var ranMuzzle = Math.floor(Math.random() * 7) + 0;

        var muzzlePick = muzzles[ranMuzzle];
        // console.log(muzzlePick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt1").innerHTML = '<b>' + "Muzzle -  " + '</b>' + muzzlePick.name + '<br>' + '<img  style="width:250px;"  src="' + muzzlePick.image + '">';
    }

    //Barrel

    var barrels = [{
            name: 'FORGE TAC Precision',
            image: 'attachments/shotguns/origin12shotgun/forgetacprecision.png'
        },
        {
            name: 'FORGE TAC Wideshot',
            image: 'attachments/shotguns/origin12shotgun/forgetacwideshot.png'
        },
        {
            name: 'FORGE TAC Impaler',
            image: 'attachments/shotguns/origin12shotgun/forgetacimpaler.png'
        },
    ];


    var barrel = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        barrel = true;
        // console.log("Barrel is true");
    }

    if (barrel != false) {
        var ranBarrel = Math.floor(Math.random() * 3) + 0;

        var barrelPick = barrels[ranBarrel];
        // console.log(barrelPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt2").innerHTML = '<b>' + "Barrel -  " + '</b>' + barrelPick.name + '<br>' + '<img  style="width:250px;"  src="' + barrelPick.image + '">';
    }




    //Laser

    var lasers = [{
            name: '1mW Laser',
            image: 'attachments/shotguns/origin12shotgun/1mwlaser.png'
        },
        {
            name: '5mW Laser',
            image: 'attachments/shotguns/origin12shotgun/5mwlaser.png'
        },
        {
            name: 'Tac Laser',
            image: 'attachments/shotguns/origin12shotgun/taclaser.png'
        },
    ];


    var laser = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt3").innerHTML = "";

    if (attArr.includes(2)) {
        laser = true;
        // console.log("laser is true");
    }

    if (laser != false) {
        var ranLaser = Math.floor(Math.random() * 3) + 0;

        var laserPick = lasers[ranLaser];
        // console.log(laserPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt3").innerHTML = '<b>' + "Laser -  " + '</b>' + laserPick.name + '<br>' + '<img  style="width:250px;"  src="' + laserPick.image + '">';
    }



    //Optic

    var optics = [{
            name: 'Operator Reflex Sight',
            image: 'attachments/shotguns/optics/operatorrelfexsight.png'
        },
        {
            name: 'Corp Combat Holo Sight',
            image: 'attachments/shotguns/optics/corpcombatholosight.png'
        },
        {
            name: 'Aim-Op Reflex Sight',
            image: 'attachments/shotguns/optics/aimopreflexsight.png'
        },
        {
            name: 'Cronen LP945 Mini Reflex',
            image: 'attachments/shotguns/optics/cronenlp945minireflex.png'
        },
        {
            name: 'APX5 Holographic Sight',
            image: 'attachments/shotguns/optics/apx5holographicsight.png'
        },
        {
            name: 'Scout Combat Optic',
            image: 'attachments/shotguns/optics/scoutcombatoptic.png'
        },
        {
            name: 'Viper Reflex Sight',
            image: 'attachments/shotguns/optics/viperreflexsight.png'
        },
        {
            name: 'VLK 3.0x Optic',
            image: 'attachments/shotguns/optics/vlk30xoptic.png'
        },
        {
            name: 'G.I. Mini Reflex',
            image: 'attachments/shotguns/optics/giminireflex.png'
        },
        {
            name: 'Solozero NVG Enhanced',
            image: 'attachments/shotguns/optics/solozeronvgenhanced.png'
        },
        {
            name: 'PBX Holo 7 Sight',
            image: 'attachments/shotguns/optics/pbxholo7sight.png'
        },
        {
            name: 'Monocle Reflex Sight',
            image: 'attachments/shotguns/optics/monoclereflexsight.png'
        },
        {
            name: 'Cronen C480 Pro Optic',
            image: 'attachments/shotguns/optics/cronenc480prooptic.png'
        },
        {
            name: 'Solozero Optics Mini Reflex',
            image: 'attachments/shotguns/optics/solozeroopticsminireflex.png'
        },
    ];


    var optic = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt4").innerHTML = "";

    if (attArr.includes(3)) {
        optic = true;
        // console.log("optic is true");
    }

    if (optic != false) {
        var ranOptic = Math.floor(Math.random() * 14) + 0;

        var opticPick = optics[ranOptic];
        // console.log(opticPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt4").innerHTML = '<b>' + "Optic -  " + '</b>' + opticPick.name + '<br>' + '<img  style="width:250px;"  src="' + opticPick.image + '">';
    }



    //Pumps

    var pumps = [{
            name: 'FTAC Hunter',
            image: 'attachments/shotguns/origin12shotgun/ftachunter.png'
        },
        {
            name: 'FORGE TAC Ultralight',
            image: 'attachments/shotguns/origin12shotgun/forgetacultralight.png'
        },
        {
            name: 'No Stock',
            image: 'attachments/shotguns/origin12shotgun/nostock.png'
        },
        {
            name: 'FORGE TAC Dart',
            image: 'attachments/shotguns/origin12shotgun/forgetacdart.png'
        },
    ];


    var pump = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt5").innerHTML = "";

    if (attArr.includes(4)) {
        pump = true;
        // console.log("pump is true");
    }

    if (pump != false) {
        var ranPump = Math.floor(Math.random() * 4) + 0;

        var pumpPick = pumps[ranPump];
        // console.log(pumpPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt5").innerHTML = '<b>' + "Stock -  " + '</b>' + pumpPick.name + '<br>' + '<img  style="width:250px;"  src="' + pumpPick.image + '">';
    }




    //Underbarrel

    var underbarrels = [{
            name: 'Merc Foregrip',
            image: 'attachments/shotguns/origin12shotgun/mercforegrip.png'
        },
        {
            name: 'Commando Foregrip',
            image: 'attachments/shotguns/origin12shotgun/commandoforegrip.png'
        },
    ];


    var underbarrel = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt6").innerHTML = "";

    if (attArr.includes(5)) {
        underbarrel = true;
        // console.log("underbarrel is true");
    }

    if (underbarrel != false) {
        var ranUnderbarrel = Math.floor(Math.random() * 2) + 0;

        var underbarrelPick = underbarrels[ranUnderbarrel];
        // console.log(underbarrelPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt6").innerHTML = '<b>' + "Underbarrel -  " + '</b>' + underbarrelPick.name + '<br>' + '<img  style="width:250px;"  src="' + underbarrelPick.image + '">';
    }







    //Ammunation

    var ammunations = [{
            name: '12 Round Mags',
            image: 'attachments/shotguns/origin12shotgun/12.png'
        },
        {
            name: '8 Round Slug Mags',
            image: 'attachments/shotguns/origin12shotgun/8.png'
        },
        {
            name: '25 ROund Drum Mags',
            image: 'attachments/shotguns/origin12shotgun/25.png'
        },
    ];


    var ammunation = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt7").innerHTML = "";

    if (attArr.includes(6)) {
        ammunation = true;
        // console.log("ammunation is true");
    }

    if (ammunation != false) {
        var ranAmmunation = Math.floor(Math.random() * 3) + 0;

        var ammunationPick = ammunations[ranAmmunation];
        // console.log(ammunationPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt7").innerHTML = '<b>' + "Ammunation -  " + '</b>' + ammunationPick.name + '<br>' + '<img  style="width:250px;"  src="' + ammunationPick.image + '">';
    }

    //RearGrip

    var reargrips = [{
            name: 'Granulated Grip Tape',
            image: 'attachments/shotguns/origin12shotgun/granulated.png'
        },
        {
            name: 'Rubberized Grip Tape',
            image: 'attachments/shotguns/origin12shotgun/rubberized.png'
        },
        {
            name: 'Stippled Grip Tape',
            image: 'attachments/shotguns/origin12shotgun/stippled.png'
        },
    ];


    var reargrip = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt8").innerHTML = "";

    if (attArr.includes(7)) {
        reargrip = true;
        // console.log("rear grip is true");
    }

    if (reargrip != false) {
        var ranRearGrip = Math.floor(Math.random() * 3) + 0;

        var rearGripPick = reargrips[ranRearGrip];
        // console.log(rearGripPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt8").innerHTML = '<b>' + "Rear Grip -  " + '</b>' + rearGripPick.name + '<br>' + '<img  style="width:250px;"  src="' + rearGripPick.image + '">';
    }

    //Perks

    var perks = [{
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
    ];


    var perk = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt9").innerHTML = "";

    if (attArr.includes(8)) {
        perk = true;
        // console.log("perk is true");
    }

    if (perk != false) {
        var ranPerk = Math.floor(Math.random() * 9) + 0;

        var perkPick = perks[ranPerk];
        // console.log(perkPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt9").innerHTML = '<b>' + "Perk -  " + '</b>' + perkPick.name + '<br>' + ' <img  style="width:250px;"  src="' + perkPick.image + '" "' + '">';
    }





}

function odeno() {
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
    // console.log(attArr);
    var underbarrel = false;

    //Muzzles

    var muzzles = [{
            name: 'Flash Guard',
            image: 'attachments/muzzles/flashguard.png'
        },
        {
            name: 'Colossus Suppressor',
            image: 'attachments/muzzles/colossussuppressor.png'
        },
        {
            name: 'Tactical Suppressor',
            image: 'attachments/muzzles/tacticalsuppressor.png'
        },
        {
            name: 'Muzzle Brake',
            image: 'attachments/muzzles/muzzlebrake.png'
        },
        {
            name: 'CQB Breacher Device',
            image: 'attachments/muzzles/cqbbreacherdevice.png'
        },
        {
            name: 'Compensator',
            image: 'attachments/muzzles/compensator.png'
        },
        {
            name: 'Monolithic Suppressor',
            image: 'attachments/muzzles/monolithicsuppressor.png'
        }
    ];


    var muzzle = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        muzzle = true;
        // console.log("Muzzle is true");
    }

    if (muzzle != false) {
        var ranMuzzle = Math.floor(Math.random() * 7) + 0;

        var muzzlePick = muzzles[ranMuzzle];
        // console.log(muzzlePick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt1").innerHTML = '<b>' + "Muzzle -  " + '</b>' + muzzlePick.name + '<br>' + '<img  style="width:250px;"  src="' + muzzlePick.image + '">';
    }



    //Image coming soon Sorry :'(


    //Barrel
    var barrels = [{
            name: 'Oden Factory 810mm',
            image: 'attachments/barrels/oden810.png'
        },
        {
            name: 'Oden Factory 730mm',
            image: 'attachments/barrels/oden730.png'
        },
        {
            name: 'Oden Factory 420mm',
            image: 'attachments/barrels/oden420.png'
        },
    ];


    var barrel = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        barrel = true;
        // console.log("Barrel is true");
    }

    if (barrel != false) {
        var ranBarrel = Math.floor(Math.random() * 3) + 0;

        var barrelPick = barrels[ranBarrel];
        // console.log(barrelPick.name);
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
        // console.log("laser is true");
    }

    if (laser != false) {
        var ranLaser = Math.floor(Math.random() * 3) + 0;

        var laserPick = lasers[ranLaser];
        // console.log(laserPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt3").innerHTML = '<b>' + "Laser -  " + '</b>' + laserPick.name + '<br>' + '<img  style="width:250px;"  src="' + laserPick.image + '">';
    }



    //Optic

    var optics = [{
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
            name: 'Integral Hybrid',
            image: 'attachments/optics/integral.png'
        },
        {
            name: 'Solozero NVG Enhanced',
            image: 'attachments/optics/solozero.png'
        },
        {
            name: 'VLK 3.0x Optic',
            image: 'attachments/optics/vlk.png'
        },
        {
            name: 'Sniper Scope',
            image: 'attachments/optics/sniperscope.png'
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
            name: 'PBX Holo 7 Sight',
            image: 'attachments/optics/pbx.png'
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
            name: 'Variable Zoom Scope',
            image: 'attachments/optics/variable.png'
        },
        {
            name: 'Canted Hybrid',
            image: 'attachments/optics/canted.png'
        },
        {
            name: 'Merc Thermal Optic',
            image: 'attachments/optics/merc.png'
        },
        {
            name: 'Thermal Hybrid',
            image: 'attachments/optics/thermal.png'
        },
        {
            name: 'Solozero Optics Mini Reflex',
            image: 'attachments/optics/solozeromini.png'
        }
    ];


    var optic = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt4").innerHTML = "";

    if (attArr.includes(3)) {
        optic = true;
        // console.log("optic is true");
    }

    if (optic != false) {
        var ranOptic = Math.floor(Math.random() * 20) + 0;

        var opticPick = optics[ranOptic];
        // console.log(opticPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt4").innerHTML = '<b>' + "Optic -  " + '</b>' + opticPick.name + '<br>' + '<img  style="width:250px;"  src="' + opticPick.image + '">';
    }



    //Stock

    var stocks = [{
            name: 'FORGE TAC Ballast Pack',
            image: 'attachments/stocks/forgetacballastpackoden.png'
        },
        {
            name: 'Oden Ultralight Hollow',
            image: 'attachments/stocks/odenultralighthollow.png'
        },
        {
            name: 'FTAC XL Elite Comb',
            image: 'attachments/stocks/ftacxlelitecomb.png'
        }
    ];


    var stock = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt5").innerHTML = "";

    if (attArr.includes(4)) {
        stock = true;
        // console.log("stock is true");
    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * 3) + 0;

        var stockPick = stocks[ranStock];
        // console.log(stockPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt5").innerHTML = '<b>' + "Stock -  " + '</b>' + stockPick.name + '<br>' + '<img  style="width:250px;"  src="' + stockPick.image + '">';
    }




    //Underbarrel

    var underbarrels = [{
            name: 'Commando Foregrip',
            image: 'attachments/underbarrels/commando.png'
        },
        {
            name: 'M203 40mm High-explosive',
            image: 'attachments/underbarrels/m203high.png'
        },
        {
            name: 'M203 40mm Incendiary',
            image: 'attachments/underbarrels/m203incendiary.png'
        },
        {
            name: '12 Gauge Deputy',
            image: 'attachments/underbarrels/12gauge.png'
        },
        {
            name: 'Merc Foregrip',
            image: 'attachments/underbarrels/merc.png'
        },
        {
            name: 'M203 40mm Smokescreen',
            image: 'attachments/underbarrels/m203smokescreen.png'
        },
        {
            name: 'Tactical Foregrip',
            image: 'attachments/underbarrels/tactical.png'
        },
        {
            name: 'M203 40mm Recon',
            image: 'attachments/underbarrels/m203recon.png'
        },
        {
            name: 'Bipod',
            image: 'attachments/underbarrels/bipod.png'
        },
        {
            name: 'M203 40mm Flash',
            image: 'attachments/underbarrels/m203flash.png'
        },
        {
            name: 'Ranger Foregrip',
            image: 'attachments/underbarrels/ranger.png'
        },
        {
            name: 'M203 40mm Concussive',
            image: 'attachments/underbarrels/m203concussive.png'
        },
        {
            name: 'Operator Foregrip',
            image: 'attachments/underbarrels/operator.png'
        }
    ];


    var underbarrel = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt6").innerHTML = "";

    if (attArr.includes(5)) {
        underbarrel = true;
        // console.log("underbarrel is true");
    }

    if (underbarrel != false) {
        var ranUnderbarrel = Math.floor(Math.random() * 13) + 0;

        var underbarrelPick = underbarrels[ranUnderbarrel];
        // console.log(underbarrelPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt6").innerHTML = '<b>' + "Underbarrel -  " + '</b>' + underbarrelPick.name + '<br>' + '<img  style="width:250px;"  src="' + underbarrelPick.image + '">';
    }







    //Ammunation

    var ammunations = [{
            name: '25 Round Mags',
            image: 'attachments/ammunations/25.png'
        },
        {
            name: '30 Round Mags',
            image: 'attachments/ammunations/30.png'
        }
    ];


    var ammunation = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt7").innerHTML = "";

    if (attArr.includes(6)) {
        ammunation = true;
        // console.log("ammunation is true");
    }

    if (ammunation != false) {
        var ranAmmunation = Math.floor(Math.random() * 2) + 0;

        var ammunationPick = ammunations[ranAmmunation];
        // console.log(ammunationPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt7").innerHTML = '<b>' + "Ammunation -  " + '</b>' + ammunationPick.name + '<br>' + '<img  style="width:250px;"  src="' + ammunationPick.image + '">';
    }




    //RearGrip

    var reargrips = [{
            name: 'Granulated Grip Tape',
            image: 'attachments/reargrips/granulated.png'
        },
        {
            name: 'Rubberized Grip Tape',
            image: 'attachments/reargrips/rubberized.png'
        },
        {
            name: 'Stippled Grip Tape',
            image: 'attachments/reargrips/stippled.png'
        }
    ];


    var reargrip = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt8").innerHTML = "";

    if (attArr.includes(7)) {
        reargrip = true;
        // console.log("rear grip is true");
    }

    if (reargrip != false) {
        var ranRearGrip = Math.floor(Math.random() * 3) + 0;

        var rearGripPick = reargrips[ranRearGrip];
        // console.log(rearGripPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt8").innerHTML = '<b>' + "Rear Grip -  " + '</b>' + rearGripPick.name + '<br>' + '<img  style="width:250px;"  src="' + rearGripPick.image + '">';
    }


    //Perks

    var perks = [{
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
            name: 'Burst Fire (x2)',
            image: 'attachments/perks/burstoden.png'
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
            name: 'Presence of Mind',
            image: 'attachments/perks/mind.png'
        }
    ];


    var perk = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt9").innerHTML = "";

    if (attArr.includes(8)) {
        perk = true;
        // console.log("perk is true");
    }

    if (perk != false) {
        var ranPerk = Math.floor(Math.random() * 11) + 0;

        var perkPick = perks[ranPerk];
        // console.log(perkPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt9").innerHTML = '<b>' + "Perk -  " + '</b>' + perkPick.name + '<br>' + ' <img  style="width:250px;"  src="' + perkPick.image + '" "' + '">';
    }






}

function mp7o() {
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
    // console.log(attArr);
    var underbarrel = false;

    //Muzzles

    var muzzles = [{
            name: 'Breacher Device',
            image: 'attachments/smgs/breacherdevice.png'
        },
        {
            name: 'Tactical Suppressor',
            image: 'attachments/smgs/tacticalsuppressor.png'
        },
        {
            name: 'Flash Guard',
            image: 'attachments/smgs/flashguard.png'
        },
        {
            name: 'Monolithic Suppressor',
            image: 'attachments/smgs/monolithicsuppressor.png'
        },
        {
            name: 'Muzzle Brake',
            image: 'attachments/smgs/muzzlebrake.png'
        },
        {
            name: 'Compensator',
            image: 'attachments/smgs/compensator.png'
        },
        {
            name: 'Lightweight Suppressor',
            image: 'attachments/smgs/lightweightsuppressor.png'
        },
    ];


    var muzzle = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        muzzle = true;
        // console.log("Muzzle is true");
    }

    if (muzzle != false) {
        var ranMuzzle = Math.floor(Math.random() * 7) + 0;

        var muzzlePick = muzzles[ranMuzzle];
        // console.log(muzzlePick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt1").innerHTML = '<b>' + "Muzzle -  " + '</b>' + muzzlePick.name + '<br>' + '<img  style="width:250px;"  src="' + muzzlePick.image + '">';
    }

    //Barrel

    var barrels = [{
            name: 'FSS STRIKE',
            image: 'attachments/smgs/fssstrike.png'
        },
        {
            name: 'FSS RECON',
            image: 'attachments/smgs/fssrecon.png'
        },
        {
            name: 'FSS SWAT',
            image: 'attachments/smgs/fssswat.png'
        },
    ];


    var barrel = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        barrel = true;
        // console.log("Barrel is true");
    }

    if (barrel != false) {
        var ranBarrel = Math.floor(Math.random() * 3) + 0;

        var barrelPick = barrels[ranBarrel];
        // console.log(barrelPick.name);
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
        // console.log("laser is true");
    }

    if (laser != false) {
        var ranLaser = Math.floor(Math.random() * 3) + 0;

        var laserPick = lasers[ranLaser];
        // console.log(laserPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt3").innerHTML = '<b>' + "Laser -  " + '</b>' + laserPick.name + '<br>' + '<img  style="width:250px;"  src="' + laserPick.image + '">';
    }



    //Optic

    var optics = [{
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
            name: 'VLK 3.0x Optic',
            image: 'attachments/smgs/vlk.png'
        },
        {
            name: 'Thermal hybrid',
            image: 'attachments/smgs/thermal.png'
        },
        {
            name: 'Viper Reflex Sight',
            image: 'attachments/smgs/viper.png'
        },
        {
            name: 'PBX Holo 7 sight',
            image: 'attachments/smgs/pbx.png'
        },
        {
            name: 'Solozero NVG Enhanced',
            image: 'attachments/smgs/solozero.png'
        },
        {
            name: 'Cronen LP945 Mini Reflex',
            image: 'attachments/smgs/cronenlp945.png'
        },
        {
            name: '4.0x Flip Hybrid',
            image: 'attachments/smgs/40x.png'
        },
        {
            name: 'Monocle Reflex Sight',
            image: 'attachments/smgs/monocle.png'
        },
        {
            name: 'Cronen C480 Pro Optic',
            image: 'attachments/smgs/cronenc480.png'
        },
        {
            name: 'Merc Thermal Optic',
            image: 'attachments/smgs/mercthermal.png'
        },
    ];


    var optic = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt4").innerHTML = "";

    if (attArr.includes(3)) {
        optic = true;
        // console.log("optic is true");
    }

    if (optic != false) {
        var ranOptic = Math.floor(Math.random() * 17) + 0;

        var opticPick = optics[ranOptic];
        // console.log(opticPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt4").innerHTML = '<b>' + "Optic -  " + '</b>' + opticPick.name + '<br>' + '<img  style="width:250px;"  src="' + opticPick.image + '">';
    }



    //Stock

    var stocks = [{
            name: 'FORGE TAC Ultralight',
            image: 'attachments/smgs/forgetacultralight.png'
        },
        {
            name: 'FORGE TAC Stalker',
            image: 'attachments/smgs/forgetacstalker.png'
        },
        {
            name: 'FSS Close Quarters Stock',
            image: 'attachments/smgs/fssclosequartersstock.png'
        },
        {
            name: 'No Stock',
            image: 'attachments/smgs/nostockmp7.png'
        },
    ];


    var stock = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt5").innerHTML = "";

    if (attArr.includes(4)) {
        stock = true;
        // console.log("stock is true");
    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * 3) + 0;

        var stockPick = stocks[ranStock];
        // console.log(stockPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt5").innerHTML = '<b>' + "Stock -  " + '</b>' + stockPick.name + '<br>' + '<img  style="width:250px;"  src="' + stockPick.image + '">';
    }




    //Underbarrel

    var underbarrels = [{
            name: 'Merc Foregrup',
            image: 'attachments/smgs/merc.png'
        },
        {
            name: 'Commando Foregrip',
            image: 'attachments/smgs/commando.png'
        },
        {
            name: 'Tactical Foregrip',
            image: 'attachments/smgs/tactical.png'
        },
        {
            name: 'Ranger Foregrip',
            image: 'attachments/smgs/ranger.png'
        },
        {
            name: 'Operator Foregrip',
            image: 'attachments/smgs/operator.png'
        },
    ];


    var underbarrel = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt6").innerHTML = "";

    if (attArr.includes(5)) {
        underbarrel = true;
        // console.log("underbarrel is true");
    }

    if (underbarrel != false) {
        var ranUnderbarrel = Math.floor(Math.random() * 5) + 0;

        var underbarrelPick = underbarrels[ranUnderbarrel];
        // console.log(underbarrelPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt6").innerHTML = '<b>' + "Underbarrel -  " + '</b>' + underbarrelPick.name + '<br>' + '<img  style="width:250px;"  src="' + underbarrelPick.image + '">';
    }







    //Ammunation

    var ammunations = [{
            name: '50 Round Mags',
            image: 'attachments/smgs/50mp7.png'
        },
        {
            name: '60 Round Mags',
            image: 'attachments/smgs/60mp7.png'
        },
    ];


    var ammunation = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt7").innerHTML = "";

    if (attArr.includes(6)) {
        ammunation = true;
        // console.log("ammunation is true");
    }

    if (ammunation != false) {
        var ranAmmunation = Math.floor(Math.random() * 2) + 0;

        var ammunationPick = ammunations[ranAmmunation];
        // console.log(ammunationPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt7").innerHTML = '<b>' + "Ammunation -  " + '</b>' + ammunationPick.name + '<br>' + '<img  style="width:250px;"  src="' + ammunationPick.image + '">';
    }




    //RearGrip

    var reargrips = [{
            name: 'Granulated Grip Tape',
            image: 'attachments/smgs/granulatedgriptape.png'
        },
        {
            name: 'Rubberized Grip Tape',
            image: 'attachments/smgs/rubberizedgriptape.png'
        },
        {
            name: 'Stippled Grip Tape',
            image: 'attachments/smgs/stippledgriptape.png'
        },
    ];


    var reargrip = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt8").innerHTML = "";

    if (attArr.includes(7)) {
        reargrip = true;
        // console.log("rear grip is true");
    }

    if (reargrip != false) {
        var ranRearGrip = Math.floor(Math.random() * 3) + 0;

        var rearGripPick = reargrips[ranRearGrip];
        // console.log(rearGripPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt8").innerHTML = '<b>' + "Rear Grip -  " + '</b>' + rearGripPick.name + '<br>' + '<img  style="width:250px;"  src="' + rearGripPick.image + '">';
    }


    //Perks

    var perks = [{
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
    ];


    var perk = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt9").innerHTML = "";

    if (attArr.includes(8)) {
        perk = true;
        // console.log("perk is true");
    }

    if (perk != false) {
        var ranPerk = Math.floor(Math.random() * 9) + 0;

        var perkPick = perks[ranPerk];
        // console.log(perkPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt9").innerHTML = '<b>' + "Perk -  " + '</b>' + perkPick.name + '<br>' + ' <img  style="width:250px;"  src="' + perkPick.image + '" "' + '">';
    }





}

function mp5o() {
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
    // console.log(attArr);
    var underbarrel = false;

    //Muzzles

    var muzzles = [{
            name: 'Breacher Device',
            image: 'attachments/smgs/breacherdevice.png'
        },
        {
            name: 'Tactical Suppressor',
            image: 'attachments/smgs/tacticalsuppressor.png'
        },
        {
            name: 'Flash Guard',
            image: 'attachments/smgs/flashguard.png'
        },
        {
            name: 'Monolithic Suppressor',
            image: 'attachments/smgs/monolithicsuppressor.png'
        },
        {
            name: 'Muzzle Brake',
            image: 'attachments/smgs/muzzlebrake.png'
        },
        {
            name: 'Compensator',
            image: 'attachments/smgs/compensator.png'
        },
        {
            name: 'Lightweight Suppressor',
            image: 'attachments/smgs/lightweightsuppressor.png'
        },
    ];


    var muzzle = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        muzzle = true;
        // console.log("Muzzle is true");
    }

    if (muzzle != false) {
        var ranMuzzle = Math.floor(Math.random() * 7) + 0;

        var muzzlePick = muzzles[ranMuzzle];
        // console.log(muzzlePick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt1").innerHTML = '<b>' + "Muzzle -  " + '</b>' + muzzlePick.name + '<br>' + '<img  style="width:250px;"  src="' + muzzlePick.image + '">';
    }

    //Barrel

    var barrels = [
        // { name: 'FFS Light', image: 'attachments/smgs/fsslight.png' }, 
        {
            name: 'Monolithic Integral Suppressor',
            image: 'attachments/smgs/monolithicintegralsuppressor.png'
        },
        // { name: 'FFS Mini', image: 'attachments/smgs/fssmini.png' }, 
        {
            name: 'Subsonic Integral Suppressor',
            image: 'attachments/smgs/subsonicintegralsuppressor.png'
        },
    ];



    var barrel = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        barrel = true;
        // console.log("Barrel is true");
    }

    if (barrel != false) {
        var ranBarrel = Math.floor(Math.random() * 2) + 0;

        var barrelPick = barrels[ranBarrel];


        if ((barrelPick.name == "Subsonic Integral Suppressor") || (barrelPick.name == "Monolithic Integral Suppressor")) {
            document.getElementById("secondaryAtt1").innerHTML = "";
        }

        // console.log(barrelPick.name);
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
        // console.log("laser is true");
    }

    if (laser != false) {
        var ranLaser = Math.floor(Math.random() * 3) + 0;

        var laserPick = lasers[ranLaser];
        // console.log(laserPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt3").innerHTML = '<b>' + "Laser -  " + '</b>' + laserPick.name + '<br>' + '<img  style="width:250px;"  src="' + laserPick.image + '">';
    }



    //Optic

    var optics = [{
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
            name: 'VLK 3.0x Optic',
            image: 'attachments/smgs/vlk.png'
        },
        {
            name: 'Thermal hybrid',
            image: 'attachments/smgs/thermal.png'
        },
        {
            name: 'Viper Reflex Sight',
            image: 'attachments/smgs/viper.png'
        },
        {
            name: 'PBX Holo 7 sight',
            image: 'attachments/smgs/pbx.png'
        },
        {
            name: 'Solozero NVG Enhanced',
            image: 'attachments/smgs/solozero.png'
        },
        {
            name: 'Cronen LP945 Mini Reflex',
            image: 'attachments/smgs/cronenlp945.png'
        },
        {
            name: 'Canted Hybrid',
            image: 'attachments/smgs/cantedhybrid.png'
        },
        {
            name: 'Monocle Reflex Sight',
            image: 'attachments/smgs/monocle.png'
        },
        {
            name: 'Cronen C480 Pro Optic',
            image: 'attachments/smgs/cronenc480.png'
        },
        {
            name: 'Merc Thermal Optic',
            image: 'attachments/smgs/mercthermal.png'
        },
        {
            name: 'Integral Hybrid',
            image: 'attachments/smgs/integral.png'
        },
    ];


    var optic = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt4").innerHTML = "";

    if (attArr.includes(3)) {
        optic = true;
        // console.log("optic is true");
    }

    if (optic != false) {
        var ranOptic = Math.floor(Math.random() * 18) + 0;

        var opticPick = optics[ranOptic];
        // console.log(opticPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt4").innerHTML = '<b>' + "Optic -  " + '</b>' + opticPick.name + '<br>' + '<img  style="width:250px;"  src="' + opticPick.image + '">';
    }



    //Stock

    var stocks = [{
            name: 'FTAC Ultralight Hollow',
            image: 'attachments/smgs/ftacultralighthollow.png'
        },
        {
            name: 'FORGE TAC CQB Comb',
            image: 'attachments/smgs/forgetaccqbcomb.png'
        },
        {
            name: 'FSS Heavy Stock Pro',
            image: 'attachments/smgs/fssheavystockpro.png'
        },
    ];


    var stock = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt5").innerHTML = "";

    if (attArr.includes(4)) {
        stock = true;
        // console.log("stock is true");
    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * 3) + 0;

        var stockPick = stocks[ranStock];
        // console.log(stockPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt5").innerHTML = '<b>' + "Stock -  " + '</b>' + stockPick.name + '<br>' + '<img  style="width:250px;"  src="' + stockPick.image + '">';
    }




    //Underbarrel

    var underbarrels = [{
            name: 'Merc Foregrup',
            image: 'attachments/smgs/merc.png'
        },
        {
            name: 'Commando Foregrip',
            image: 'attachments/smgs/commando.png'
        },
        {
            name: 'Tactical Foregrip',
            image: 'attachments/smgs/tactical.png'
        },
        {
            name: 'Ranger Foregrip',
            image: 'attachments/smgs/ranger.png'
        },
        {
            name: 'Operator Foregrip',
            image: 'attachments/smgs/operator.png'
        },
    ];


    var underbarrel = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt6").innerHTML = "";

    if (attArr.includes(5)) {
        underbarrel = true;
        // console.log("underbarrel is true");
    }

    if (underbarrel != false) {
        var ranUnderbarrel = Math.floor(Math.random() * 5) + 0;

        var underbarrelPick = underbarrels[ranUnderbarrel];
        // console.log(underbarrelPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt6").innerHTML = '<b>' + "Underbarrel -  " + '</b>' + underbarrelPick.name + '<br>' + '<img  style="width:250px;"  src="' + underbarrelPick.image + '">';
    }







    //Ammunation

    var ammunations = [{
            name: '45 Round Mags',
            image: 'attachments/smgs/45mp5.png'
        },
        {
            name: '10mm Auto 30-Round Mags',
            image: 'attachments/smgs/30mp5.png'
        },
    ];


    var ammunation = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt7").innerHTML = "";

    if (attArr.includes(6)) {
        ammunation = true;
        // console.log("ammunation is true");
    }

    if (ammunation != false) {
        var ranAmmunation = Math.floor(Math.random() * 2) + 0;

        var ammunationPick = ammunations[ranAmmunation];
        // console.log(ammunationPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt7").innerHTML = '<b>' + "Ammunation -  " + '</b>' + ammunationPick.name + '<br>' + '<img  style="width:250px;"  src="' + ammunationPick.image + '">';
    }




    //RearGrip

    var reargrips = [{
            name: 'Granulated Grip Tape',
            image: 'attachments/smgs/granulatedgriptape.png'
        },
        {
            name: 'Rubberized Grip Tape',
            image: 'attachments/smgs/rubberizedgriptape.png'
        },
        {
            name: 'Stippled Grip Tape',
            image: 'attachments/smgs/stippledgriptape.png'
        },
    ];


    var reargrip = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt8").innerHTML = "";

    if (attArr.includes(7)) {
        reargrip = true;
        // console.log("rear grip is true");
    }

    if (reargrip != false) {
        var ranRearGrip = Math.floor(Math.random() * 3) + 0;

        var rearGripPick = reargrips[ranRearGrip];
        // console.log(rearGripPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt8").innerHTML = '<b>' + "Rear Grip -  " + '</b>' + rearGripPick.name + '<br>' + '<img  style="width:250px;"  src="' + rearGripPick.image + '">';
    }


    //Perks

    var perks = [{
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
            name: 'Burst',
            image: 'attachments/perks/burst.png'
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
        // console.log("perk is true");
    }

    if (perk != false) {
        var ranPerk = Math.floor(Math.random() * 10) + 0;

        var perkPick = perks[ranPerk];
        // console.log(perkPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt9").innerHTML = '<b>' + "Perk -  " + '</b>' + perkPick.name + '<br>' + ' <img  style="width:250px;"  src="' + perkPick.image + '" "' + '">';
    }





}

function model680o() {
    var numAttachments = [0, 1, 2, 3, 4, 5, 6, 8];
    var totalCount = 8;
    var ran = Math.floor(Math.random() * 5) + 0;
    var attArr = [];
    for (var i = 0; i <= ran; i++) {
        var rand = numAttachments[Math.floor(Math.random() * totalCount)];
        attArr.push(rand);
        numAttachments.splice(rand, 1);
        totalCount--;
    }
    // console.log(attArr);
    var underbarrel = false;

    //Muzzles

    var muzzles = [{
            name: 'Breacher Device',
            image: 'attachments/shotguns/model680/breacherdevice.png'
        },
        {
            name: 'Flash Guard',
            image: 'attachments/shotguns/model680/flashguard.png'
        },
        {
            name: 'Monolithic Suppressor',
            image: 'attachments/shotguns/model680/monolithicsuppressor.png'
        },
        {
            name: 'Muzzle Brake',
            image: 'attachments/shotguns/model680/muzzlebrake.png'
        },
        {
            name: 'Compensator',
            image: 'attachments/shotguns/model680/compensator.png'
        },
        {
            name: 'Choke',
            image: 'attachments/shotguns/model680/choke.png'
        },
        {
            name: 'FSS Marauder',
            image: 'attachments/shotguns/model680/fssmarauder.png'
        },
        {
            name: 'Tactical Suppressor',
            image: 'attachments/shotguns/model680/tacticalsuppressor.png'
        },

    ];


    var muzzle = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        muzzle = true;
        // console.log("Muzzle is true");
    }

    if (muzzle != false) {
        var ranMuzzle = Math.floor(Math.random() * 8) + 0;

        var muzzlePick = muzzles[ranMuzzle];
        // console.log(muzzlePick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt1").innerHTML = '<b>' + "Muzzle -  " + '</b>' + muzzlePick.name + '<br>' + '<img  style="width:250px;"  src="' + muzzlePick.image + '">';
    }

    //Barrel

    var barrels = [{
            name: 'XRX 18.0 Liberator',
            image: 'attachments/shotguns/model680/xrx180liberator.png'
        },
        {
            name: 'XRX 14.0 SWAT',
            image: 'attachments/shotguns/model680/xrx140swat.png'
        },
        {
            name: 'XRX 30.0 Sport',
            image: 'attachments/shotguns/model680/xrx300sport.png'
        },
    ];


    var barrel = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        barrel = true;
        // console.log("Barrel is true");
    }

    if (barrel != false) {
        var ranBarrel = Math.floor(Math.random() * 3) + 0;

        var barrelPick = barrels[ranBarrel];
        // console.log(barrelPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt2").innerHTML = '<b>' + "Barrel -  " + '</b>' + barrelPick.name + '<br>' + '<img  style="width:250px;"  src="' + barrelPick.image + '">';
    }




    //Laser

    var lasers = [{
            name: '1mW Laser',
            image: 'attachments/shotguns/model680/1mwlaser.png'
        },
        {
            name: '5mW Laser',
            image: 'attachments/shotguns/model680/5mwlaser.png'
        },
        {
            name: 'Tac Laser',
            image: 'attachments/shotguns/model680/taclaser.png'
        },
    ];


    var laser = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt3").innerHTML = "";

    if (attArr.includes(2)) {
        laser = true;
        // console.log("laser is true");
    }

    if (laser != false) {
        var ranLaser = Math.floor(Math.random() * 3) + 0;

        var laserPick = lasers[ranLaser];
        // console.log(laserPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt3").innerHTML = '<b>' + "Laser -  " + '</b>' + laserPick.name + '<br>' + '<img  style="width:250px;"  src="' + laserPick.image + '">';
    }



    //Optic

    var optics = [{
            name: 'Operator Reflex Sight',
            image: 'attachments/shotguns/optics/operatorrelfexsight.png'
        },
        {
            name: 'Corp Combat Holo Sight',
            image: 'attachments/shotguns/optics/corpcombatholosight.png'
        },
        {
            name: 'Aim-Op Reflex Sight',
            image: 'attachments/shotguns/optics/aimopreflexsight.png'
        },
        {
            name: 'Cronen LP945 Mini Reflex',
            image: 'attachments/shotguns/optics/cronenlp945minireflex.png'
        },
        {
            name: 'APX5 Holographic Sight',
            image: 'attachments/shotguns/optics/apx5holographicsight.png'
        },
        {
            name: 'Scout Combat Optic',
            image: 'attachments/shotguns/optics/scoutcombatoptic.png'
        },
        {
            name: 'Viper Reflex Sight',
            image: 'attachments/shotguns/optics/viperreflexsight.png'
        },
        {
            name: 'VLK 3.0x Optic',
            image: 'attachments/shotguns/optics/vlk30xoptic.png'
        },
        {
            name: 'G.I. Mini Reflex',
            image: 'attachments/shotguns/optics/giminireflex.png'
        },
        {
            name: 'Solozero NVG Enhanced',
            image: 'attachments/shotguns/optics/solozeronvgenhanced.png'
        },
        {
            name: 'PBX Holo 7 Sight',
            image: 'attachments/shotguns/optics/pbxholo7sight.png'
        },
        {
            name: 'Monocle Reflex Sight',
            image: 'attachments/shotguns/optics/monoclereflexsight.png'
        },
        {
            name: 'Cronen C480 Pro Optic',
            image: 'attachments/shotguns/optics/cronenc480prooptic.png'
        },
        {
            name: 'Solozero Optics Mini Reflex',
            image: 'attachments/shotguns/optics/solozeroopticsminireflex.png'
        },
    ];


    var optic = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt4").innerHTML = "";

    if (attArr.includes(3)) {
        optic = true;
        // console.log("optic is true");
    }

    if (optic != false) {
        var ranOptic = Math.floor(Math.random() * 14) + 0;

        var opticPick = optics[ranOptic];
        // console.log(opticPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt4").innerHTML = '<b>' + "Optic -  " + '</b>' + opticPick.name + '<br>' + '<img  style="width:250px;"  src="' + opticPick.image + '">';
    }



    //Stock

    var stocks = [{
            name: 'FTAC Stalker-12',
            image: 'attachments/shotguns/model680/ftacstalker12.png'
        },
        {
            name: 'FORGE TAC Ultralight',
            image: 'attachments/shotguns/model680/forgetacultralight.png'
        },
        {
            name: 'No Stock',
            image: 'attachments/shotguns/model680/nostock.png'
        },
        {
            name: 'Lockwood Precision Series',
            image: 'attachments/shotguns/model680/lockwoodprecisionseries.png'
        },
        {
            name: 'FTAC Hunter',
            image: 'attachments/shotguns/model680/ftachunter.png'
        },
    ];


    var stock = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt5").innerHTML = "";

    if (attArr.includes(4)) {
        stock = true;
        // console.log("stock is true");
    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * 5) + 0;

        var stockPick = stocks[ranStock];
        // console.log(stockPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt5").innerHTML = '<b>' + "Stock -  " + '</b>' + stockPick.name + '<br>' + '<img  style="width:250px;"  src="' + stockPick.image + '">';
    }




    //Underbarrel

    var underbarrels = [{
            name: 'Commando Foregrip',
            image: 'attachments/shotguns/model680/commandoforegrip.png'
        },
        {
            name: 'Merc Foregrip',
            image: 'attachments/shotguns/model680/mercforegrip.png'
        },
        {
            name: 'Tactical Foregrip',
            image: 'attachments/shotguns/model680/tacticalforegrip.png'
        },
        {
            name: 'Lockwood Precision Series',
            image: 'attachments/shotguns/model680/lockwoodprecisionseriesub.png'
        },
        {
            name: 'Operator Foregrip',
            image: 'attachments/shotguns/model680/operatorforegrip.png'
        },
        {
            name: 'XRX Truegrip Tactical',
            image: 'attachments/shotguns/model680/xrxtruegriptactical.png'
        },
    ];


    var underbarrel = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt6").innerHTML = "";

    if (attArr.includes(5)) {
        underbarrel = true;
        // console.log("underbarrel is true");
    }

    if (underbarrel != false) {
        var ranUnderbarrel = Math.floor(Math.random() * 6) + 0;

        var underbarrelPick = underbarrels[ranUnderbarrel];
        // console.log(underbarrelPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt6").innerHTML = '<b>' + "Underbarrel -  " + '</b>' + underbarrelPick.name + '<br>' + '<img  style="width:250px;"  src="' + underbarrelPick.image + '">';
    }







    //Ammunation

    var ammunations = [{
            name: 'Tube Extension',
            image: 'attachments/shotguns/model680/tubeextension.png'
        },
        {
            name: 'Slug Rounds',
            image: 'attachments/shotguns/model680/slugrounds.png'
        },
    ];


    var ammunation = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt7").innerHTML = "";

    if (attArr.includes(6)) {
        ammunation = true;
        // console.log("ammunation is true");
    }

    if (ammunation != false) {
        var ranAmmunation = Math.floor(Math.random() * 2) + 0;

        var ammunationPick = ammunations[ranAmmunation];
        // console.log(ammunationPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt7").innerHTML = '<b>' + "Ammunation -  " + '</b>' + ammunationPick.name + '<br>' + '<img  style="width:250px;"  src="' + ammunationPick.image + '">';
    }



    //Perks

    var perks = [{
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
    ];


    var perk = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt9").innerHTML = "";

    if (attArr.includes(8)) {
        perk = true;
        // console.log("perk is true");
    }

    if (perk != false) {
        var ranPerk = Math.floor(Math.random() * 8) + 0;

        var perkPick = perks[ranPerk];
        // console.log(perkPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt9").innerHTML = '<b>' + "Perk -  " + '</b>' + perkPick.name + '<br>' + ' <img  style="width:250px;"  src="' + perkPick.image + '" "' + '">';
    }





}

function mk2o() {
    var numAttachments = [0, 1, 2, 3, 4, 7, 8];
    var totalCount = 7;
    var ran = Math.floor(Math.random() * 5) + 0;
    var attArr = [];
    for (var i = 0; i <= ran; i++) {
        var rand = numAttachments[Math.floor(Math.random() * totalCount)];
        attArr.push(rand);
        numAttachments.splice(rand, 1);
        totalCount--;
    }
    //console.log(attArr);
    var underbarrel = false;

    //Muzzles

    var muzzles = [{
            name: 'Flash Guard',
            image: 'attachments/muzzles/flashguard.png'
        },
        {
            name: 'Breacher Device',
            image: 'attachments/muzzles/breacherdevice.png'
        },
        {
            name: 'Tactical Suppressor',
            image: 'attachments/muzzles/tacticalsuppressor.png'
        },
        {
            name: 'Muzzle Brake',
            image: 'attachments/muzzles/muzzlebrake.png'
        },
        {
            name: 'Lightweight Suppressor',
            image: 'attachments/muzzles/lightweightsuppressor.png'
        },
        {
            name: 'Compensator',
            image: 'attachments/muzzles/compensator.png'
        },
        {
            name: 'Monolithic Suppressor',
            image: 'attachments/muzzles/monolithicsuppressor.png'
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
            name: 'FSS 18.0 Factory',
            image: 'attachments/mrs/barrels/180.png'
        },
        {
            name: 'FSS 20.0 Factory',
            image: 'attachments/mrs/barrels/200.png'
        },
        {
            name: 'FSS 24.0 Factory',
            image: 'attachments/mrs/barrels/240.png'
        },
    ];


    var barrel = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        barrel = true;
        //console.log("Barrel is true");
    }

    if (barrel != false) {
        var ranBarrel = Math.floor(Math.random() * 3) + 0;

        var barrelPick = barrels[ranBarrel];
        //console.log(barrelPick.name);

        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt2").innerHTML = '<b>' + "Barrel -  " + '</b>' + barrelPick.name + '<br>' + '<img  style="width:250px;"  src="' + barrelPick.image + '">';
    }




    //Laser

    var lasers = [

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
        var ranLaser = Math.floor(Math.random() * 1) + 0;

        var laserPick = lasers[ranLaser];
        //console.log(laserPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt3").innerHTML = '<b>' + "Laser -  " + '</b>' + laserPick.name + '<br>' + '<img  style="width:250px;"  src="' + laserPick.image + '">';
    }



    //Optic

    var optics = [{
            name: 'Cronen Lp945 Mini Reflex',
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
            name: '4.0x Flip Hybrid',
            image: 'attachments/optics/40x.png'
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
            name: 'Integral Hybrid',
            image: 'attachments/optics/integral.png'
        },
        {
            name: 'Solozero NVG Enhanced',
            image: 'attachments/optics/solozero.png'
        },
        {
            name: 'VLK 3.0x Optic',
            image: 'attachments/optics/vlk.png'
        },
        {
            name: 'Sniper Scope',
            image: 'attachments/optics/sniperscope.png'
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
            name: 'PBX Holo 7 Sight',
            image: 'attachments/optics/pbx.png'
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
            name: 'Variable Zoom Scope',
            image: 'attachments/optics/variable.png'
        },
        {
            name: 'Solozero Optics Mini Reflex',
            image: 'attachments/optics/solozeromini.png'
        },
        {
            name: 'Merc Thermal Optic',
            image: 'attachments/optics/merc.png'
        },
        {
            name: 'Thermal Hybrid',
            image: 'attachments/optics/thermal.png'
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
        var ranOptic = Math.floor(Math.random() * 20) + 0;

        var opticPick = optics[ranOptic];
        //console.log(opticPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt4").innerHTML = '<b>' + "Optic -  " + '</b>' + opticPick.name + '<br>' + '<img  style="width:250px;"  src="' + opticPick.image + '">';
    }



    //Stock

    var stocks = [{
            name: 'Cartridge Sleeve',
            image: 'attachments/mrs/stocks/sleeve.png'
        },
        {
            name: 'FSS MK2 Sport Comb',
            image: 'attachments/mrs/stocks/sportcomb.png'
        },
        {
            name: 'FSS MK2 Precision Comb',
            image: 'attachments/mrs/stocks/precisioncomb.png'
        },
        {
            name: 'MK2 Ultralight Hollow',
            image: 'attachments/mrs/stocks/hollow.png'
        }
    ];


    var stock = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt5").innerHTML = "";

    if (attArr.includes(4)) {
        stock = true;
        //console.log("stock is true");
    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * 4) + 0;

        var stockPick = stocks[ranStock];
        //console.log(stockPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt5").innerHTML = '<b>' + "Stock -  " + '</b>' + stockPick.name + '<br>' + '<img  style="width:250px;"  src="' + stockPick.image + '">';
    }


    //RearGrip

    var reargrips = [{
            name: 'Granulated Grip Tape',
            image: 'attachments/reargrips/granulatedmk2.png'
        },
        {
            name: 'Rubberized Grip Tape',
            image: 'attachments/reargrips/rubberizedmk2.png'
        },
        {
            name: 'Stippled Grip Tape',
            image: 'attachments/reargrips/stippledmk2.png'
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

    var perks = [{
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
            name: 'Focus',
            image: 'attachments/perks/focus.png'
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
            name: 'Presence of Mind',
            image: 'attachments/perks/mind.png'
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
        var ranPerk = Math.floor(Math.random() * 11) + 0;

        var perkPick = perks[ranPerk];
        //console.log(perkPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt9").innerHTML = '<b>' + "Perk -  " + '</b>' + perkPick.name + '<br>' + ' <img  style="width:250px;"  src="' + perkPick.image + '" "' + '">';
    }






}

function mg34o() {
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
    var underbarrel = false;

    //Muzzles

    var muzzles = [{
            name: 'Flash Guard',
            image: 'attachments/lmgs/muzzles/flash.png'
        },
        {
            name: 'Monolithic Suppressor',
            image: 'attachments/lmgs/muzzles/monolithic.png'
        },
        {
            name: 'Muzzle Brake',
            image: 'attachments/lmgs/muzzles/muzzle.png'
        },
        {
            name: 'CQB Breacher Device',
            image: 'attachments/lmgs/muzzles/cqb.png'
        },
        {
            name: 'Lightweight Suppressor',
            image: 'attachments/lmgs/muzzles/lightweight.png'
        },
        {
            name: 'Compensator',
            image: 'attachments/lmgs/muzzles/compensator.png'
        },
        {
            name: 'Tactical Suppressor',
            image: 'attachments/lmgs/muzzles/tactical.png'
        },
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
            name: 'FSS Brute',
            image: 'attachments/lmgs/barrels/brute.png'
        },
        {
            name: 'FSS Stubby',
            image: 'attachments/lmgs/barrels/stubby.png'
        },
        {
            name: 'FSS Elite',
            image: 'attachments/lmgs/barrels/elite.png'
        },

    ];


    var barrel = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        barrel = true;
        //console.log("Barrel is true");
    }

    if (barrel != false) {
        var ranBarrel = Math.floor(Math.random() * 3) + 0;

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

    var optics = [{
            name: 'Cronen LP945 Mini Reflex',
            image: 'attachments/lmgs/optics/cronenlp945.png'
        },
        {
            name: 'Corp Combat Holo Sight',
            image: 'attachments/lmgs/optics/corp.png'
        },
        {
            name: 'Operator Reflex Sight',
            image: 'attachments/lmgs/optics/operator.png'
        },
        {
            name: 'Scout Combat Optic',
            image: 'attachments/lmgs/optics/scout.png'
        },
        {
            name: 'Aim-Op Reflex Sight',
            image: 'attachments/lmgs/optics/aimop.png'
        },
        {
            name: 'APx5 Holographic Sight',
            image: 'attachments/lmgs/optics/apx5.png'
        },
        {
            name: 'Integral Hybrid',
            image: 'attachments/lmgs/optics/integral.png'
        },
        {
            name: 'Solozero NVG Enhanced',
            image: 'attachments/lmgs/optics/solozero.png'
        },
        {
            name: 'VLK 3.0x Optic',
            image: 'attachments/lmgs/optics/vlk.png'
        },
        {
            name: 'Solozero Optics Mini Reflex',
            image: 'attachments/lmgs/optics/solozeromini.png'
        },
        {
            name: 'Sniper Scope',
            image: 'attachments/lmgs/optics/sniperscope.png'
        },
        {
            name: 'Viper Reflex Sight',
            image: 'attachments/lmgs/optics/viper.png'
        },
        {
            name: 'G.I. Mini Reflex',
            image: 'attachments/lmgs/optics/gi.png'
        },
        {
            name: 'PBX Holo 7 Sight',
            image: 'attachments/lmgs/optics/pbx.png'
        },
        {
            name: 'Cronen C480 Pro Optic',
            image: 'attachments/lmgs/optics/cronenc480.png'
        },
        {
            name: 'Monocle Reflex Sight',
            image: 'attachments/lmgs/optics/monocle.png'
        },
        {
            name: 'Canted Hybrid',
            image: 'attachments/lmgs/optics/canted.png'
        },
        {
            name: 'Merc Thermal Optic',
            image: 'attachments/lmgs/optics/merc.png'
        },
        {
            name: 'Thermal Hybrid',
            image: 'attachments/lmgs/optics/thermal.png'
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
        var ranOptic = Math.floor(Math.random() * 19) + 0;

        var opticPick = optics[ranOptic];
        //console.log(opticPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt4").innerHTML = '<b>' + "Optic -  " + '</b>' + opticPick.name + '<br>' + '<img  style="width:250px;"  src="' + opticPick.image + '">';
    }



    //Stock

    var stocks = [{
            name: 'FORGE TAC Stalker',
            image: 'attachments/lmgs/stocks/stalker.png'
        },
        {
            name: 'FORGE TAC Ultralight',
            image: 'attachments/lmgs/stocks/ultralight.png'
        },
        {
            name: 'No Stock',
            image: 'attachments/lmgs/stocks/nostock.png'
        },
        {
            name: 'FSS Close Quarters Stock',
            image: 'attachments/lmgs/stocks/close.png'
        },

    ];


    var stock = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt5").innerHTML = "";

    if (attArr.includes(4)) {
        stock = true;
        //console.log("stock is true");
    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * 4) + 0;

        var stockPick = stocks[ranStock];
        //console.log(stockPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt5").innerHTML = '<b>' + "Stock -  " + '</b>' + stockPick.name + '<br>' + '<img  style="width:250px;"  src="' + stockPick.image + '">';
    }




    //Underbarrel

    var underbarrels = [{
            name: 'Commando Foregrip',
            image: 'attachments/lmgs/underbarrels/commando.png'
        },
        {
            name: 'Merc Foregrip',
            image: 'attachments/lmgs/underbarrels/merc.png'
        },
        {
            name: 'Tactical Foregrip',
            image: 'attachments/lmgs/underbarrels/tactical.png'
        },
        {
            name: 'Bipod',
            image: 'attachments/lmgs/underbarrels/bipod.png'
        },
        {
            name: 'Ranger Foregrip',
            image: 'attachments/lmgs/underbarrels/ranger.png'
        },
        {
            name: 'Operator Foregrip',
            image: 'attachments/lmgs/underbarrels/commando.png'
        },
    ];
    var underbarrel = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt6").innerHTML = "";

    if (attArr.includes(5)) {
        underbarrel = true;
        //console.log("underbarrel is true");
    }

    if (underbarrel != false) {
        var ranUnderbarrel = Math.floor(Math.random() * 6) + 0;

        var underbarrelPick = underbarrels[ranUnderbarrel];
        //console.log(underbarrelPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt6").innerHTML = '<b>' + "Underbarrel -  " + '</b>' + underbarrelPick.name + '<br>' + '<img  style="width:250px;"  src="' + underbarrelPick.image + '">';
    }







    //Ammunation

    var ammunations = [{
            name: '75 Round Belt',
            image: 'attachments/lmgs/ammunations/75.png'
        },
        {
            name: '100 Round Belt',
            image: 'attachments/lmgs/ammunations/100.png'
        },

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
            image: 'attachments/lmgs/reargrips/granulatedmg.png'
        },
        {
            name: 'Stippled Grip Tape',
            image: 'attachments/lmgs/reargrips/stippledmg.png'
        },
        {
            name: 'Rubberized Grip Tape',
            image: 'attachments/lmgs/reargrips/rubberizedmg.png'
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
        var ranRearGrip = Math.floor(Math.random() * 3) + 0;

        var rearGripPick = reargrips[ranRearGrip];
        //console.log(rearGripPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt8").innerHTML = '<b>' + "Rear Grip -  " + '</b>' + rearGripPick.name + '<br>' + '<img  style="width:250px;"  src="' + rearGripPick.image + '">';
    }


    //Perks

    var perks = [{
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

function m91o() {
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
    var underbarrel = false;

    //Muzzles

    var muzzles = [{
            name: 'Flash Guard',
            image: 'attachments/lmgs/muzzles/flash.png'
        },
        {
            name: 'Monolithic Suppressor',
            image: 'attachments/lmgs/muzzles/monolithic.png'
        },
        {
            name: 'Muzzle Brake',
            image: 'attachments/lmgs/muzzles/muzzle.png'
        },
        {
            name: 'Breacher Device',
            image: 'attachments/lmgs/muzzles/breacher.png'
        },
        {
            name: 'Lightweight Suppressor',
            image: 'attachments/lmgs/muzzles/lightweight.png'
        },
        {
            name: 'Compensator',
            image: 'attachments/lmgs/muzzles/compensator.png'
        },
        {
            name: 'Tactical Suppressor',
            image: 'attachments/lmgs/muzzles/tactical.png'
        },
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
            name: 'M91 Special Forces',
            image: 'attachments/lmgs/barrels/special.png'
        },
        {
            name: 'M91 Infantry',
            image: 'attachments/lmgs/barrels/infantry.png'
        },
        {
            name: 'M91 Heavy',
            image: 'attachments/lmgs/barrels/m91heavy.png'
        },

    ];


    var barrel = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        barrel = true;
        //console.log("Barrel is true");
    }

    if (barrel != false) {
        var ranBarrel = Math.floor(Math.random() * 3) + 0;

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

    var optics = [{
            name: 'Cronen LP945 Mini Reflex',
            image: 'attachments/lmgs/optics/cronenlp945.png'
        },
        {
            name: 'Corp Combat Holo Sight',
            image: 'attachments/lmgs/optics/corp.png'
        },
        {
            name: 'Operator Reflex Sight',
            image: 'attachments/lmgs/optics/operator.png'
        },
        {
            name: 'Scout Combat Optic',
            image: 'attachments/lmgs/optics/scout.png'
        },
        {
            name: 'Aim-Op Reflex Sight',
            image: 'attachments/lmgs/optics/aimop.png'
        },
        {
            name: 'APx5 Holographic Sight',
            image: 'attachments/lmgs/optics/apx5.png'
        },
        {
            name: 'Integral Hybrid',
            image: 'attachments/lmgs/optics/integral.png'
        },
        {
            name: 'Solozero NVG Enhanced',
            image: 'attachments/lmgs/optics/solozero.png'
        },
        {
            name: 'VLK 3.0x Optic',
            image: 'attachments/lmgs/optics/vlk.png'
        },
        {
            name: 'Solozero Optics Mini Reflex',
            image: 'attachments/lmgs/optics/solozeromini.png'
        },
        {
            name: 'Sniper Scope',
            image: 'attachments/lmgs/optics/sniperscope.png'
        },
        {
            name: 'Viper Reflex Sight',
            image: 'attachments/lmgs/optics/viper.png'
        },
        {
            name: '4.0x Flip Hybrid',
            image: 'attachments/lmgs/optics/40x.png'
        },
        {
            name: 'G.I. Mini Reflex',
            image: 'attachments/lmgs/optics/gi.png'
        },
        {
            name: 'PBX Holo 7 Sight',
            image: 'attachments/lmgs/optics/pbx.png'
        },
        {
            name: 'Cronen C480 Pro Optic',
            image: 'attachments/lmgs/optics/cronenc480.png'
        },
        {
            name: 'Monocle Reflex Sight',
            image: 'attachments/lmgs/optics/monocle.png'
        },
        {
            name: 'Canted Hybrid',
            image: 'attachments/lmgs/optics/canted.png'
        },
        {
            name: 'Merc Thermal Optic',
            image: 'attachments/lmgs/optics/merc.png'
        },
        {
            name: 'Thermal Hybrid',
            image: 'attachments/lmgs/optics/thermal.png'
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
        var ranOptic = Math.floor(Math.random() * 20) + 0;

        var opticPick = optics[ranOptic];
        //console.log(opticPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt4").innerHTML = '<b>' + "Optic -  " + '</b>' + opticPick.name + '<br>' + '<img  style="width:250px;"  src="' + opticPick.image + '">';
    }



    //Stock

    var stocks = [{
            name: 'FORGE TAC Stalker',
            image: 'attachments/lmgs/stocks/stalker.png'
        },
        {
            name: 'FORGE TAC Ultralight',
            image: 'attachments/lmgs/stocks/ultralight.png'
        },
        {
            name: 'No Stock',
            image: 'attachments/lmgs/stocks/nostock.png'
        },
        {
            name: 'XRX Striker',
            image: 'attachments/lmgs/stocks/striker.png'
        },

    ];


    var stock = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt5").innerHTML = "";

    if (attArr.includes(4)) {
        stock = true;
        //console.log("stock is true");
    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * 4) + 0;

        var stockPick = stocks[ranStock];
        //console.log(stockPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt5").innerHTML = '<b>' + "Stock -  " + '</b>' + stockPick.name + '<br>' + '<img  style="width:250px;"  src="' + stockPick.image + '">';
    }




    //Underbarrel

    var underbarrels = [{
            name: 'Commando Foregrip',
            image: 'attachments/lmgs/underbarrels/commando.png'
        },
        {
            name: 'Merc Foregrip',
            image: 'attachments/lmgs/underbarrels/merc.png'
        },
        {
            name: 'Tactical Foregrip',
            image: 'attachments/lmgs/underbarrels/tactical.png'
        },
        {
            name: 'Bipod',
            image: 'attachments/lmgs/underbarrels/bipod.png'
        },
        {
            name: 'Ranger Foregrip',
            image: 'attachments/lmgs/underbarrels/ranger.png'
        },
        {
            name: 'Operator Foregrip',
            image: 'attachments/lmgs/underbarrels/commando.png'
        },
    ];
    var underbarrel = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt6").innerHTML = "";

    if (attArr.includes(5)) {
        underbarrel = true;
        //console.log("underbarrel is true");
    }

    if (underbarrel != false) {
        var ranUnderbarrel = Math.floor(Math.random() * 6) + 0;

        var underbarrelPick = underbarrels[ranUnderbarrel];
        //console.log(underbarrelPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt6").innerHTML = '<b>' + "Underbarrel -  " + '</b>' + underbarrelPick.name + '<br>' + '<img  style="width:250px;"  src="' + underbarrelPick.image + '">';
    }







    //Ammunation

    var ammunations = [{
            name: '120 Round Belt',
            image: 'attachments/lmgs/ammunations/120.png'
        },
        {
            name: '150 Round Belt',
            image: 'attachments/lmgs/ammunations/150m19.png'
        },

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
            image: 'attachments/lmgs/reargrips/granulated.png'
        },
        {
            name: 'Stippled Grip Tape',
            image: 'attachments/lmgs/reargrips/stippled.png'
        },
        {
            name: 'Rubberized Grip Tape',
            image: 'attachments/lmgs/reargrips/rubberized.png'
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
        var ranRearGrip = Math.floor(Math.random() * 3) + 0;

        var rearGripPick = reargrips[ranRearGrip];
        //console.log(rearGripPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt8").innerHTML = '<b>' + "Rear Grip -  " + '</b>' + rearGripPick.name + '<br>' + '<img  style="width:250px;"  src="' + rearGripPick.image + '">';
    }


    //Perks

    var perks = [{
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

function m13o() {
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
    var underbarrel = false;

    //Muzzles

    var muzzles = [{
            name: 'Flash Guard',
            image: 'attachments/muzzles/flashguard.png'
        },
        {
            name: 'Lightweight Suppressor',
            image: 'attachments/muzzles/lightweightsuppressor.png'
        },
        {
            name: 'Tactical Suppressor',
            image: 'attachments/muzzles/tacticalsuppressor.png'
        },
        {
            name: 'Muzzle Brake',
            image: 'attachments/muzzles/muzzlebrake.png'
        },
        {
            name: 'Breacher Device',
            image: 'attachments/muzzles/breacherdevice.png'
        },
        {
            name: 'Compensator',
            image: 'attachments/muzzles/compensator.png'
        },
        {
            name: 'Monolithic Suppressor',
            image: 'attachments/muzzles/monolithicsuppressor.png'
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



    //Image coming soon Sorry :'(


    //Barrel
    var barrels = [{
            name: 'Tempus Mini',
            image: 'attachments/barrels/tempusmini.png'
        },
        {
            name: 'Tempus Cyclone',
            image: 'attachments/barrels/tempuscyclone.png'
        },
        {
            name: 'Tempus Marksman',
            image: 'attachments/barrels/tempusmarksman.png'
        },
    ];


    var barrel = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        barrel = true;
        //console.log("Barrel is true");
    }

    if (barrel != false) {
        var ranBarrel = Math.floor(Math.random() * 3) + 0;

        var barrelPick = barrels[ranBarrel];

        if (barrelPick.name == "Tempus Cyclone")
            document.getElementById("secondaryAttH2").innerHTML = "";

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

    var optics = [{
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
            name: '4.0x Flip Hybrid',
            image: 'attachments/optics/40x.png'
        },
        {
            name: 'Integral Hybrid',
            image: 'attachments/optics/integral.png'
        },
        {
            name: 'Solozero NVG Enhanced',
            image: 'attachments/optics/solozero.png'
        },
        {
            name: 'VLK 3.0x Optic',
            image: 'attachments/optics/vlk.png'
        },
        {
            name: 'Sniper Scope',
            image: 'attachments/optics/sniperscope.png'
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
            name: 'PBX Holo 7 Sight',
            image: 'attachments/optics/pbx.png'
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
            name: 'Variable Zoom Scope',
            image: 'attachments/optics/variable.png'
        },
        {
            name: 'Canted Hybrid',
            image: 'attachments/optics/canted.png'
        },
        {
            name: 'Merc Thermal Optic',
            image: 'attachments/optics/merc.png'
        },
        {
            name: 'Thermal Hybrid',
            image: 'attachments/optics/thermal.png'
        },
        {
            name: 'Solozero Optics Mini Reflex',
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
        var ranOptic = Math.floor(Math.random() * 21) + 0;

        var opticPick = optics[ranOptic];
        //console.log(opticPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt4").innerHTML = '<b>' + "Optic -  " + '</b>' + opticPick.name + '<br>' + '<img  style="width:250px;"  src="' + opticPick.image + '">';
    }



    //Stock

    var stocks = [{
            name: 'FORGE TAC Stalker',
            image: 'attachments/stocks/forgetacstalker.png'
        },
        {
            name: 'No Stock',
            image: 'attachments/stocks/nostockkilo.png'
        },
        {
            name: 'FFS Close Quarters Stock',
            image: 'attachments/stocks/closequartersfal.png'
        },
        {
            name: 'M13 Skeleton Stock',
            image: 'attachments/stocks/m13skeletonstock.png'
        }
    ];


    var stock = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt5").innerHTML = "";

    if (attArr.includes(4)) {
        stock = true;
        //console.log("stock is true");
    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * 4) + 0;

        var stockPick = stocks[ranStock];
        //console.log(stockPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt5").innerHTML = '<b>' + "Stock -  " + '</b>' + stockPick.name + '<br>' + '<img  style="width:250px;"  src="' + stockPick.image + '">';
    }




    //Underbarrel

    var underbarrels = [{
            name: 'Commando Foregrip',
            image: 'attachments/underbarrels/commando.png'
        },
        {
            name: 'M203 40mm High-explosive',
            image: 'attachments/underbarrels/m203high.png'
        },
        {
            name: 'M203 40mm Incendiary',
            image: 'attachments/underbarrels/m203incendiary.png'
        },
        {
            name: '12 Gauge Deputy',
            image: 'attachments/underbarrels/12gauge.png'
        },
        {
            name: 'Merc Foregrip',
            image: 'attachments/underbarrels/merc.png'
        },
        {
            name: 'M203 40mm Smokescreen',
            image: 'attachments/underbarrels/m203smokescreen.png'
        },
        {
            name: 'Tactical Foregrip',
            image: 'attachments/underbarrels/tactical.png'
        },
        {
            name: 'M203 40mm Recon',
            image: 'attachments/underbarrels/m203recon.png'
        },
        {
            name: 'Bipod',
            image: 'attachments/underbarrels/bipod.png'
        },
        {
            name: 'M203 40mm Flash',
            image: 'attachments/underbarrels/m203flash.png'
        },
        {
            name: 'Ranger Foregrip',
            image: 'attachments/underbarrels/ranger.png'
        },
        {
            name: 'M203 40mm Concussive',
            image: 'attachments/underbarrels/m203concussive.png'
        },
        {
            name: 'Operator Foregrip',
            image: 'attachments/underbarrels/operator.png'
        }
    ];


    var underbarrel = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt6").innerHTML = "";

    if (attArr.includes(5)) {
        underbarrel = true;
        //console.log("underbarrel is true");
    }

    if (underbarrel != false) {
        var ranUnderbarrel = Math.floor(Math.random() * 13) + 0;

        var underbarrelPick = underbarrels[ranUnderbarrel];
        //console.log(underbarrelPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt6").innerHTML = '<b>' + "Underbarrel -  " + '</b>' + underbarrelPick.name + '<br>' + '<img  style="width:250px;"  src="' + underbarrelPick.image + '">';
    }







    //Ammunation

    var ammunations = [{
            name: '50 Round Mags',
            image: 'attachments/ammunations/50.png'
        },
        {
            name: '.300 Blackout 30-Round Mags',
            image: 'attachments/ammunations/300blackout30.png'
        },
        {
            name: '60 Round Mags',
            image: 'attachments/ammunations/60.png'
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
        var ranAmmunation = Math.floor(Math.random() * 3) + 0;

        var ammunationPick = ammunations[ranAmmunation];
        //console.log(ammunationPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt7").innerHTML = '<b>' + "Ammunation -  " + '</b>' + ammunationPick.name + '<br>' + '<img  style="width:250px;"  src="' + ammunationPick.image + '">';
    }




    //RearGrip

    var reargrips = [{
            name: 'Granulated Grip Tape',
            image: 'attachments/reargrips/granulated.png'
        },
        {
            name: 'Rubberized Grip Tape',
            image: 'attachments/reargrips/rubberized.png'
        },
        {
            name: 'Stippled Grip Tape',
            image: 'attachments/reargrips/stippled.png'
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

    var perks = [{
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
            name: 'Burst',
            image: 'attachments/perks/burst.png'
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
            name: 'Presence of Mind',
            image: 'attachments/perks/mind.png'
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
        var ranPerk = Math.floor(Math.random() * 11) + 0;

        var perkPick = perks[ranPerk];
        //console.log(perkPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt9").innerHTML = '<b>' + "Perk -  " + '</b>' + perkPick.name + '<br>' + ' <img  style="width:250px;"  src="' + perkPick.image + '" "' + '">';
    }






}

function m4a1o() {
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
    var underbarrel = false;

    //Muzzles

    var muzzles = [{
            name: 'Flash Guard',
            image: 'attachments/muzzles/flashguard.png'
        },
        {
            name: 'Breacher Device',
            image: 'attachments/muzzles/breacherdevice.png'
        },
        {
            name: 'Tactical Suppressor',
            image: 'attachments/muzzles/tacticalsuppressor.png'
        },
        {
            name: 'Muzzle Brake',
            image: 'attachments/muzzles/muzzlebrake.png'
        },
        {
            name: 'Lightweight Suppressor',
            image: 'attachments/muzzles/lightweightsuppressor.png'
        },
        {
            name: 'Compensator',
            image: 'attachments/muzzles/compensator.png'
        },
        {
            name: 'Monolithic Suppressor',
            image: 'attachments/muzzles/monolithicsuppressor.png'
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
            name: 'FFS 11.5 Commando',
            image: 'attachments/barrels/ffs115.png'
        },
        {
            name: 'Stock M16 Grenadier',
            image: 'attachments/barrels/stockm16.png'
        },
        {
            name: 'FFS 14.5 Tac lite',
            image: 'attachments/barrels/ffs145.png'
        },
        {
            name: 'Corvus Custom Marksman',
            image: 'attachments/barrels/corvus.png'
        },
        {
            name: 'FFS 12.4 Predator',
            image: 'attachments/barrels/ffs124.png'
        },
    ];


    var barrel = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        barrel = true;
        //console.log("Barrel is true");
    }

    if (barrel != false) {
        var ranBarrel = Math.floor(Math.random() * 5) + 0;

        var barrelPick = barrels[ranBarrel];
        //console.log(barrelPick.name);
        if (barrelPick.name == "FFS 12.4 Predator")
            document.getElementById("secondaryAttH2").innerHTML = "";

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

    var optics = [{
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
            name: '4.0x Flip Hybrid',
            image: 'attachments/optics/40x.png'
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
            name: 'Integral Hybrid',
            image: 'attachments/optics/integral.png'
        },
        {
            name: 'Solozero NVG Enhanced',
            image: 'attachments/optics/solozero.png'
        },
        {
            name: 'VLK 3.0x Optic',
            image: 'attachments/optics/vlk.png'
        },
        {
            name: 'Sniper Scope',
            image: 'attachments/optics/sniperscope.png'
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
            name: 'PBX Holo 7 Sight',
            image: 'attachments/optics/pbx.png'
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
            name: 'Variable Zoom Scope',
            image: 'attachments/optics/variable.png'
        },
        {
            name: 'Canted Hybrid',
            image: 'attachments/optics/canted.png'
        },
        {
            name: 'Merc Thermal Optic',
            image: 'attachments/optics/merc.png'
        },
        {
            name: 'Thermal Hybrid',
            image: 'attachments/optics/thermal.png'
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
        var ranOptic = Math.floor(Math.random() * 20) + 0;

        var opticPick = optics[ranOptic];
        //console.log(opticPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt4").innerHTML = '<b>' + "Optic -  " + '</b>' + opticPick.name + '<br>' + '<img  style="width:250px;"  src="' + opticPick.image + '">';
    }



    //Stock

    var stocks = [{
            name: 'M-16 Stock',
            image: 'attachments/stocks/m16.png'
        },
        {
            name: 'Singuard Arms Invader',
            image: 'attachments/stocks/singuard.png'
        },
        {
            name: 'No Stock',
            image: 'attachments/stocks/nostockm4a1.png'
        },
        {
            name: 'FORGE TAC CQS',
            image: 'attachments/stocks/forge.png'
        }
    ];


    var stock = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt5").innerHTML = "";

    if (attArr.includes(4)) {
        stock = true;
        //console.log("stock is true");
    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * 4) + 0;

        var stockPick = stocks[ranStock];
        //console.log(stockPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt5").innerHTML = '<b>' + "Stock -  " + '</b>' + stockPick.name + '<br>' + '<img  style="width:250px;"  src="' + stockPick.image + '">';
    }




    //Underbarrel

    var underbarrels = [{
            name: 'Commando Foregrip',
            image: 'attachments/underbarrels/commando.png'
        },
        {
            name: 'M203 40mm High-explosive',
            image: 'attachments/underbarrels/m203high.png'
        },
        {
            name: 'M203 40mm Incendiary',
            image: 'attachments/underbarrels/m203incendiary.png'
        },
        {
            name: '12 Gauge Deputy',
            image: 'attachments/underbarrels/12gauge.png'
        },
        {
            name: 'Merc Foregrip',
            image: 'attachments/underbarrels/merc.png'
        },
        {
            name: 'M203 40mm Smokescreen',
            image: 'attachments/underbarrels/m203smokescreen.png'
        },
        {
            name: 'Tactical Foregrip',
            image: 'attachments/underbarrels/tactical.png'
        },
        {
            name: 'M203 40mm Recon',
            image: 'attachments/underbarrels/m203recon.png'
        },
        {
            name: 'Bipod',
            image: 'attachments/underbarrels/bipod.png'
        },
        {
            name: 'M203 40mm Flash',
            image: 'attachments/underbarrels/m203flash.png'
        },
        {
            name: 'Ranger Foregrip',
            image: 'attachments/underbarrels/ranger.png'
        },
        {
            name: 'M203 40mm Concussive',
            image: 'attachments/underbarrels/m203concussive.png'
        },
        {
            name: 'Operator Foregrip',
            image: 'attachments/underbarrels/operator.png'
        }
    ];


    var underbarrel = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt6").innerHTML = "";

    if (attArr.includes(5)) {
        underbarrel = true;
        //console.log("underbarrel is true");
    }

    if (underbarrel != false) {
        var ranUnderbarrel = Math.floor(Math.random() * 13) + 0;

        var underbarrelPick = underbarrels[ranUnderbarrel];
        //console.log(underbarrelPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt6").innerHTML = '<b>' + "Underbarrel -  " + '</b>' + underbarrelPick.name + '<br>' + '<img  style="width:250px;"  src="' + underbarrelPick.image + '">';
    }







    //Ammunation

    var ammunations = [{
            name: '50 Round Mags',
            image: 'attachments/ammunations/50.png'
        },
        {
            name: '60 Round Mags',
            image: 'attachments/ammunations/60.png'
        },
        {
            name: '9mm Para 32-Round Mags',
            image: 'attachments/ammunations/9mm.png'
        },
        {
            name: '.458 SOCOM 10-Round Mags',
            image: 'attachments/ammunations/458.png'
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
        var ranAmmunation = Math.floor(Math.random() * 4) + 0;

        var ammunationPick = ammunations[ranAmmunation];
        //console.log(ammunationPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt7").innerHTML = '<b>' + "Ammunation -  " + '</b>' + ammunationPick.name + '<br>' + '<img  style="width:250px;"  src="' + ammunationPick.image + '">';
    }




    //RearGrip

    var reargrips = [{
            name: 'Granulated Grip Tape',
            image: 'attachments/reargrips/granulated.png'
        },
        {
            name: 'Rubberized Grip Tape',
            image: 'attachments/reargrips/rubberized.png'
        },
        {
            name: 'Stippled Grip Tape',
            image: 'attachments/reargrips/stippled.png'
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

    var perks = [{
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
            name: 'Burst',
            image: 'attachments/perks/burst.png'
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
            name: 'Presence of Mind',
            image: 'attachments/perks/mind.png'
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
        var ranPerk = Math.floor(Math.random() * 11) + 0;

        var perkPick = perks[ranPerk];
        //console.log(perkPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt9").innerHTML = '<b>' + "Perk -  " + '</b>' + perkPick.name + '<br>' + ' <img  style="width:250px;"  src="' + perkPick.image + '" "' + '">';
    }






}

function kilo141o() {
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
    var underbarrel = false;

    //Muzzles

    var muzzles = [{
            name: 'Flash Guard',
            image: 'attachments/muzzles/flashguard.png'
        },
        {
            name: 'Breacher Device',
            image: 'attachments/muzzles/breacherdevice.png'
        },
        {
            name: 'Tactical Suppressor',
            image: 'attachments/muzzles/tacticalsuppressor.png'
        },
        {
            name: 'Muzzle Brake',
            image: 'attachments/muzzles/muzzlebrake.png'
        },
        {
            name: 'Lightweight Suppressor',
            image: 'attachments/muzzles/lightweightsuppressor.png'
        },
        {
            name: 'Compensator',
            image: 'attachments/muzzles/compensator.png'
        },
        {
            name: 'Monolithic Suppressor',
            image: 'attachments/muzzles/monolithicsuppressor.png'
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
            name: 'Singuard Arms 15.6 SOCOM',
            image: 'attachments/barrels/socom.png'
        },
        {
            name: 'Singuard Arms 19.7 Prowler',
            image: 'attachments/barrels/prowler.png'
        },
        {
            name: 'Singuard Arms Whisper',
            image: 'attachments/barrels/whisper.png'
        },
    ];


    var barrel = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        barrel = true;
        //console.log("Barrel is true");
    }

    if (barrel != false) {
        var ranBarrel = Math.floor(Math.random() * 3) + 0;

        var barrelPick = barrels[ranBarrel];

        if (barrelPick.name == "Singuard Arms Whisper")
            document.getElementById("secondaryAttH2").innerHTML = "";

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

    var optics = [{
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
            name: '4.0x Flip Hybrid',
            image: 'attachments/optics/40x.png'
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
            name: 'Integral Hybrid',
            image: 'attachments/optics/integral.png'
        },
        {
            name: 'Solozero NVG Enhanced',
            image: 'attachments/optics/solozero.png'
        },
        {
            name: 'VLK 3.0x Optic',
            image: 'attachments/optics/vlk.png'
        },
        {
            name: 'Sniper Scope',
            image: 'attachments/optics/sniperscope.png'
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
            name: 'PBX Holo 7 Sight',
            image: 'attachments/optics/pbx.png'
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
            name: 'Variable Zoom Scope',
            image: 'attachments/optics/variable.png'
        },
        {
            name: 'Canted Hybrid',
            image: 'attachments/optics/canted.png'
        },
        {
            name: 'Merc Thermal Optic',
            image: 'attachments/optics/merc.png'
        },
        {
            name: 'Thermal Hybrid',
            image: 'attachments/optics/thermal.png'
        },
        {
            name: 'Solozero Optics Mini Reflex',
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
        var ranOptic = Math.floor(Math.random() * 21) + 0;

        var opticPick = optics[ranOptic];
        //console.log(opticPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt4").innerHTML = '<b>' + "Optic -  " + '</b>' + opticPick.name + '<br>' + '<img  style="width:250px;"  src="' + opticPick.image + '">';
    }



    //Stock

    var stocks = [{
            name: 'FORGE TAC Ultralight',
            image: 'attachments/stocks/ultralight.png'
        },
        {
            name: 'Singuard Arms Sniper Pro',
            image: 'attachments/stocks/sniperpro.png'
        },
        {
            name: 'No Stock',
            image: 'attachments/stocks/nostockkilo.png'
        },
        {
            name: 'FFS CLose Quarters Stock',
            image: 'attachments/stocks/closequarters.png'
        }
    ];


    var stock = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt5").innerHTML = "";

    if (attArr.includes(4)) {
        stock = true;
        //console.log("stock is true");
    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * 4) + 0;

        var stockPick = stocks[ranStock];
        //console.log(stockPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt5").innerHTML = '<b>' + "Stock -  " + '</b>' + stockPick.name + '<br>' + '<img  style="width:250px;"  src="' + stockPick.image + '">';
    }




    //Underbarrel

    var underbarrels = [{
            name: 'Commando Foregrip',
            image: 'attachments/underbarrels/commando.png'
        },
        {
            name: 'M203 40mm High-explosive',
            image: 'attachments/underbarrels/m203high.png'
        },
        {
            name: 'M203 40mm Incendiary',
            image: 'attachments/underbarrels/m203incendiary.png'
        },
        {
            name: '12 Gauge Deputy',
            image: 'attachments/underbarrels/12gauge.png'
        },
        {
            name: 'Merc Foregrip',
            image: 'attachments/underbarrels/merc.png'
        },
        {
            name: 'M203 40mm Smokescreen',
            image: 'attachments/underbarrels/m203smokescreen.png'
        },
        {
            name: 'Tactical Foregrip',
            image: 'attachments/underbarrels/tactical.png'
        },
        {
            name: 'M203 40mm Recon',
            image: 'attachments/underbarrels/m203recon.png'
        },
        {
            name: 'Bipod',
            image: 'attachments/underbarrels/bipod.png'
        },
        {
            name: 'M203 40mm Flash',
            image: 'attachments/underbarrels/m203flash.png'
        },
        {
            name: 'Ranger Foregrip',
            image: 'attachments/underbarrels/ranger.png'
        },
        {
            name: 'M203 40mm Concussive',
            image: 'attachments/underbarrels/m203concussive.png'
        },
        {
            name: 'Operator Foregrip',
            image: 'attachments/underbarrels/operator.png'
        }
    ];


    var underbarrel = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt6").innerHTML = "";

    if (attArr.includes(5)) {
        underbarrel = true;
        //console.log("underbarrel is true");
    }

    if (underbarrel != false) {
        var ranUnderbarrel = Math.floor(Math.random() * 13) + 0;

        var underbarrelPick = underbarrels[ranUnderbarrel];
        //console.log(underbarrelPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt6").innerHTML = '<b>' + "Underbarrel -  " + '</b>' + underbarrelPick.name + '<br>' + '<img  style="width:250px;"  src="' + underbarrelPick.image + '">';
    }







    //Ammunation

    var ammunations = [{
            name: '50 Round Mags',
            image: 'attachments/ammunations/50.png'
        },
        {
            name: '60 Round Mags',
            image: 'attachments/ammunations/60.png'
        },
        {
            name: '100 Round Drums',
            image: 'attachments/ammunations/100.png'
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
        var ranAmmunation = Math.floor(Math.random() * 3) + 0;

        var ammunationPick = ammunations[ranAmmunation];
        //console.log(ammunationPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt7").innerHTML = '<b>' + "Ammunation -  " + '</b>' + ammunationPick.name + '<br>' + '<img  style="width:250px;"  src="' + ammunationPick.image + '">';
    }




    //RearGrip

    var reargrips = [{
            name: 'Granulated Grip Tape',
            image: 'attachments/reargrips/granulated.png'
        },
        {
            name: 'Rubberized Grip Tape',
            image: 'attachments/reargrips/rubberized.png'
        },
        {
            name: 'Stippled Grip Tape',
            image: 'attachments/reargrips/stippled.png'
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

    var perks = [{
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
            name: 'Burst',
            image: 'attachments/perks/burst.png'
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
            name: 'Presence of Mind',
            image: 'attachments/perks/mind.png'
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
        var ranPerk = Math.floor(Math.random() * 11) + 0;

        var perkPick = perks[ranPerk];
        //console.log(perkPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt9").innerHTML = '<b>' + "Perk -  " + '</b>' + perkPick.name + '<br>' + ' <img  style="width:250px;"  src="' + perkPick.image + '" "' + '">';
    }






}

function karo() {
    var numAttachments = [0, 1, 2, 3, 4, 5, 7, 8];
    var totalCount = 8;
    var ran = Math.floor(Math.random() * 5) + 0;
    var attArr = [];
    for (var i = 0; i <= ran; i++) {
        var rand = numAttachments[Math.floor(Math.random() * totalCount)];
        attArr.push(rand);
        numAttachments.splice(rand, 1);
        totalCount--;
    }
    //console.log(attArr);
    var underbarrel = false;

    //Muzzles

    var muzzles = [{
            name: 'Flash Guard',
            image: 'attachments/muzzles/flashguard.png'
        },
        {
            name: 'Breacher Device',
            image: 'attachments/muzzles/breacherdevice.png'
        },
        {
            name: 'Tactical Suppressor',
            image: 'attachments/muzzles/tacticalsuppressor.png'
        },
        {
            name: 'Muzzle Brake',
            image: 'attachments/muzzles/muzzlebrake.png'
        },
        {
            name: 'Lightweight Suppressor',
            image: 'attachments/muzzles/lightweightsuppressor.png'
        },
        {
            name: 'Compensator',
            image: 'attachments/muzzles/compensator.png'
        },
        {
            name: 'Monolithic Suppressor',
            image: 'attachments/muzzles/monolithicsuppressor.png'
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
            name: 'Singuard Custom 25.1',
            image: 'attachments/mrs/barrels/251.png'
        },
        {
            name: 'Singuard Custom 21.2',
            image: 'attachments/mrs/barrels/212.png'
        },
        {
            name: 'Singuard Custom 27.6',
            image: 'attachments/mrs/barrels/276.png'
        },
    ];


    var barrel = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        barrel = true;
        //console.log("Barrel is true");
    }

    if (barrel != false) {
        var ranBarrel = Math.floor(Math.random() * 3) + 0;

        var barrelPick = barrels[ranBarrel];
        //console.log(barrelPick.name);

        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt2").innerHTML = '<b>' + "Barrel -  " + '</b>' + barrelPick.name + '<br>' + '<img  style="width:250px;"  src="' + barrelPick.image + '">';
    }




    //Laser

    var lasers = [

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
        var ranLaser = Math.floor(Math.random() * 1) + 0;

        var laserPick = lasers[ranLaser];
        //console.log(laserPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt3").innerHTML = '<b>' + "Laser -  " + '</b>' + laserPick.name + '<br>' + '<img  style="width:250px;"  src="' + laserPick.image + '">';
    }



    //Optic

    var optics = [{
            name: 'Cronen Lp945 Mini Reflex',
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
            name: '4.0x Flip Hybrid',
            image: 'attachments/optics/40x.png'
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
            name: 'Integral Hybrid',
            image: 'attachments/optics/integral.png'
        },
        {
            name: 'Solozero NVG Enhanced',
            image: 'attachments/optics/solozero.png'
        },
        {
            name: 'VLK 3.0x Optic',
            image: 'attachments/optics/vlk.png'
        },
        {
            name: 'Sniper Scope',
            image: 'attachments/optics/sniperscope.png'
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
            name: 'PBX Holo 7 Sight',
            image: 'attachments/optics/pbx.png'
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
            name: 'Variable Zoom Scope',
            image: 'attachments/optics/variable.png'
        },
        {
            name: 'Canted Hybrid',
            image: 'attachments/optics/canted.png'
        },
        {
            name: 'Merc Thermal Optic',
            image: 'attachments/optics/merc.png'
        },
        {
            name: 'Thermal Hybrid',
            image: 'attachments/optics/thermal.png'
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
        var ranOptic = Math.floor(Math.random() * 20) + 0;

        var opticPick = optics[ranOptic];
        //console.log(opticPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt4").innerHTML = '<b>' + "Optic -  " + '</b>' + opticPick.name + '<br>' + '<img  style="width:250px;"  src="' + opticPick.image + '">';
    }



    //Stock

    var stocks = [{
            name: 'STVOL Precision Comb',
            image: 'attachments/mrs/stocks/stvol.png'
        },
        {
            name: 'Hollow Stock Mod',
            image: 'attachments/mrs/stocks/mod.png'
        },
        {
            name: 'FTAC Sport Comb',
            image: 'attachments/mrs/stocks/ftac.png'
        },
    ];


    var stock = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt5").innerHTML = "";

    if (attArr.includes(4)) {
        stock = true;
        //console.log("stock is true");
    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * 3) + 0;

        var stockPick = stocks[ranStock];
        //console.log(stockPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt5").innerHTML = '<b>' + "Stock -  " + '</b>' + stockPick.name + '<br>' + '<img  style="width:250px;"  src="' + stockPick.image + '">';
    }

    //Underbarrel

    var underbarrels = [

        {
            name: 'Bipod',
            image: 'attachments/underbarrels/bipodkar.png'
        },
    ];


    var underbarrel = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt6").innerHTML = "";

    if (attArr.includes(5)) {
        underbarrel = true;
        //console.log("underbarrel is true");
    }

    if (underbarrel != false) {
        var ranUnderbarrel = Math.floor(Math.random() * 1) + 0;

        var underbarrelPick = underbarrels[ranUnderbarrel];
        //console.log(underbarrelPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt6").innerHTML = '<b>' + "Underbarrel -  " + '</b>' + underbarrelPick.name + '<br>' + '<img  style="width:250px;"  src="' + underbarrelPick.image + '">';
    }





    //RearGrip

    var reargrips = [{
            name: 'Granulated Grip Tape',
            image: 'attachments/reargrips/granulatedkar.png'
        },
        {
            name: 'Rubberized Grip Tape',
            image: 'attachments/reargrips/rubberizedkar.png'
        },
        {
            name: 'Stippled Grip Tape',
            image: 'attachments/reargrips/stippledkar.png'
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

    var perks = [{
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
            name: 'Focus',
            image: 'attachments/perks/focus.png'
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
            name: 'Presence of Mind',
            image: 'attachments/perks/mind.png'
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
        var ranPerk = Math.floor(Math.random() * 11) + 0;

        var perkPick = perks[ranPerk];
        //console.log(perkPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt9").innerHTML = '<b>' + "Perk -  " + '</b>' + perkPick.name + '<br>' + ' <img  style="width:250px;"  src="' + perkPick.image + '" "' + '">';
    }






}

function holgero() {
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
    var underbarrel = false;

    //Muzzles

    var muzzles = [{
            name: 'Flash Guard',
            image: 'attachments/lmgs/muzzles/flash.png'
        },
        {
            name: 'Monolithic Suppressor',
            image: 'attachments/lmgs/muzzles/monolithic.png'
        },
        {
            name: 'Muzzle Brake',
            image: 'attachments/lmgs/muzzles/muzzle.png'
        },
        {
            name: 'Breacher Device',
            image: 'attachments/lmgs/muzzles/breacher.png'
        },
        {
            name: 'Lightweight Suppressor',
            image: 'attachments/lmgs/muzzles/lightweight.png'
        },
        {
            name: 'Compensator',
            image: 'attachments/lmgs/muzzles/compensator.png'
        },
        {
            name: 'Tactical Suppressor',
            image: 'attachments/lmgs/muzzles/tactical.png'
        },
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
            name: 'XRX Ultralight',
            image: 'attachments/lmgs/barrels/ultralight.png'
        },
        {
            name: 'FTAC 8.98 Spitfire',
            image: 'attachments/lmgs/barrels/spitfire.png'
        },


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

    var optics = [{
            name: 'Cronen LP945 Mini Reflex',
            image: 'attachments/lmgs/optics/cronenlp945.png'
        },
        {
            name: 'Corp Combat Holo Sight',
            image: 'attachments/lmgs/optics/corp.png'
        },
        {
            name: 'Operator Reflex Sight',
            image: 'attachments/lmgs/optics/operator.png'
        },
        {
            name: 'Scout Combat Optic',
            image: 'attachments/lmgs/optics/scout.png'
        },
        {
            name: 'Aim-Op Reflex Sight',
            image: 'attachments/lmgs/optics/aimop.png'
        },
        {
            name: 'APx5 Holographic Sight',
            image: 'attachments/lmgs/optics/apx5.png'
        },
        {
            name: 'Integral Hybrid',
            image: 'attachments/lmgs/optics/integral.png'
        },
        {
            name: 'Solozero NVG Enhanced',
            image: 'attachments/lmgs/optics/solozero.png'
        },
        {
            name: 'VLK 3.0x Optic',
            image: 'attachments/lmgs/optics/vlk.png'
        },
        {
            name: 'Solozero Optics Mini Reflex',
            image: 'attachments/lmgs/optics/solozeromini.png'
        },
        {
            name: 'Sniper Scope',
            image: 'attachments/lmgs/optics/sniperscope.png'
        },
        {
            name: 'FSS Integral Reflex',
            image: 'attachments/lmgs/optics/integralreflex.png'
        },
        {
            name: 'Solozero K498 4.0x Integral',
            image: 'attachments/lmgs/optics/solozerintegral.png'
        },
        {
            name: '4.0x Flip Hybrid',
            image: 'attachments/lmgs/optics/40x.png'
        },
        {
            name: 'Viper Reflex Sight',
            image: 'attachments/lmgs/optics/viper.png'
        },
        {
            name: 'G.I. Mini Reflex',
            image: 'attachments/lmgs/optics/gi.png'
        },
        {
            name: 'PBX Holo 7 Sight',
            image: 'attachments/lmgs/optics/pbx.png'
        },
        {
            name: 'Cronen C480 Pro Optic',
            image: 'attachments/lmgs/optics/cronenc480.png'
        },
        {
            name: 'Monocle Reflex Sight',
            image: 'attachments/lmgs/optics/monocle.png'
        },
        {
            name: 'Canted Hybrid',
            image: 'attachments/lmgs/optics/canted.png'
        },
        {
            name: 'Merc Thermal Optic',
            image: 'attachments/lmgs/optics/merc.png'
        },
        {
            name: 'Thermal Hybrid',
            image: 'attachments/lmgs/optics/thermal.png'
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
        var ranOptic = Math.floor(Math.random() * 19) + 0;

        var opticPick = optics[ranOptic];
        //console.log(opticPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt4").innerHTML = '<b>' + "Optic -  " + '</b>' + opticPick.name + '<br>' + '<img  style="width:250px;"  src="' + opticPick.image + '">';
    }



    //Stock

    var stocks = [{
            name: 'FSS Ranger',
            image: 'attachments/lmgs/stocks/ranger.png'
        },
        {
            name: 'FSS infantry',
            image: 'attachments/lmgs/stocks/infantry.png'
        },
        {
            name: 'No Stock',
            image: 'attachments/lmgs/stocks/nostock.png'
        },
        {
            name: 'XRX Axis',
            image: 'attachments/lmgs/stocks/axis.png'
        },

    ];


    var stock = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt5").innerHTML = "";

    if (attArr.includes(4)) {
        stock = true;
        //console.log("stock is true");
    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * 4) + 0;

        var stockPick = stocks[ranStock];
        //console.log(stockPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt5").innerHTML = '<b>' + "Stock -  " + '</b>' + stockPick.name + '<br>' + '<img  style="width:250px;"  src="' + stockPick.image + '">';
    }




    //Underbarrel

    var underbarrels = [{
            name: 'Commando Foregrip',
            image: 'attachments/lmgs/underbarrels/commando.png'
        },
        {
            name: 'Merc Foregrip',
            image: 'attachments/lmgs/underbarrels/merc.png'
        },
        {
            name: 'Tactical Foregrip',
            image: 'attachments/lmgs/underbarrels/tactical.png'
        },
        {
            name: 'Ranger Foregrip',
            image: 'attachments/lmgs/underbarrels/ranger.png'
        },
        {
            name: 'Operator Foregrip',
            image: 'attachments/lmgs/underbarrels/commando.png'
        },
    ];
    var underbarrel = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt6").innerHTML = "";

    if (attArr.includes(5)) {
        underbarrel = true;
        //console.log("underbarrel is true");
    }

    if (underbarrel != false) {
        var ranUnderbarrel = Math.floor(Math.random() * 5) + 0;

        var underbarrelPick = underbarrels[ranUnderbarrel];
        //console.log(underbarrelPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt6").innerHTML = '<b>' + "Underbarrel -  " + '</b>' + underbarrelPick.name + '<br>' + '<img  style="width:250px;"  src="' + underbarrelPick.image + '">';
    }







    //Ammunation

    var ammunations = [{
            name: '30 Round Mags',
            image: 'attachments/lmgs/ammunations/30.png'
        },

    ];


    var ammunation = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt7").innerHTML = "";

    if (attArr.includes(6)) {
        ammunation = true;
        //console.log("ammunation is true");
    }

    if (ammunation != false) {
        var ranAmmunation = Math.floor(Math.random() * 1) + 0;

        var ammunationPick = ammunations[ranAmmunation];
        //console.log(ammunationPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt7").innerHTML = '<b>' + "Ammunation -  " + '</b>' + ammunationPick.name + '<br>' + '<img  style="width:250px;"  src="' + ammunationPick.image + '">';
    }




    //RearGrip

    var reargrips = [{
            name: 'Granulated Grip Tape',
            image: 'attachments/lmgs/reargrips/granulatedmg.png'
        },
        {
            name: 'Stippled Grip Tape',
            image: 'attachments/lmgs/reargrips/stippledmg.png'
        },
        {
            name: 'Rubberized Grip Tape',
            image: 'attachments/lmgs/reargrips/rubberizedmg.png'
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
        var ranRearGrip = Math.floor(Math.random() * 3) + 0;

        var rearGripPick = reargrips[ranRearGrip];
        //console.log(rearGripPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt8").innerHTML = '<b>' + "Rear Grip -  " + '</b>' + rearGripPick.name + '<br>' + '<img  style="width:250px;"  src="' + rearGripPick.image + '">';
    }


    //Perks

    var perks = [{
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

function hdro() {
    var numAttachments = [0, 1, 2, 3, 4, 5, 6, 8];
    var totalCount = 8;
    var ran = Math.floor(Math.random() * 5) + 0;
    var attArr = [];
    for (var i = 0; i <= ran; i++) {
        var rand = numAttachments[Math.floor(Math.random() * totalCount)];
        attArr.push(rand);
        numAttachments.splice(rand, 1);
        totalCount--;
    }
    //console.log(attArr);
    var underbarrel = false;

    //Muzzles

    var muzzles = [{
            name: 'Flash Guard',
            image: 'attachments/snipers/flashguard.png'
        },
        {
            name: 'Monolithic Suppressor',
            image: 'attachments/snipers/monolithicsuppressor.png'
        },
        {
            name: 'Breacher Device',
            image: 'attachments/snipers/breacherdevice.png'
        },
        {
            name: 'Muzzle Brake',
            image: 'attachments/snipers/muzzlebrake.png'
        },
        {
            name: 'Tactical Suppressor',
            image: 'attachments/snipers/tacticalsuppressor.png'
        },
        {
            name: 'Compensator',
            image: 'attachments/snipers/compensator.png'
        },
        {
            name: 'Lightweight Suppressor',
            image: 'attachments/snipers/lightweightsuppressor.png'
        },
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
            name: '26.9 HDR Pro',
            image: 'attachments/snipers/hdrpro.png'
        },
        {
            name: '26.0 Bull Barrel',
            image: 'attachments/snipers/260bull.png'
        },
        {
            name: '17.2 Bull Barrel',
            image: 'attachments/snipers/172bull.png'
        },
    ];


    var barrel = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        barrel = true;
        //console.log("Barrel is true");
    }

    if (barrel != false) {
        var ranBarrel = Math.floor(Math.random() * 3) + 0;

        var barrelPick = barrels[ranBarrel];
        //console.log(barrelPick.name);


        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt2").innerHTML = '<b>' + "Barrel -  " + '</b>' + barrelPick.name + '<br>' + '<img  style="width:250px;"  src="' + barrelPick.image + '">';
    }




    //Laser

    var lasers = [{
        name: 'Tac Laser',
        image: 'attachments/snipers/taclaser.png'
    }, ];


    var laser = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt3").innerHTML = "";

    if (attArr.includes(2)) {
        laser = true;
        //console.log("laser is true");
    }

    if (laser != false) {
        var ranLaser = Math.floor(Math.random() * 1) + 0;

        var laserPick = lasers[ranLaser];
        //console.log(laserPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt3").innerHTML = '<b>' + "Laser -  " + '</b>' + laserPick.name + '<br>' + '<img  style="width:250px;"  src="' + laserPick.image + '">';
    }



    //Optic

    var optics = [{
            name: 'Scout Combat Optic',
            image: 'attachments/snipers/scout.png'
        },
        {
            name: 'Thermal Sniper Scope',
            image: 'attachments/snipers/thermal.png'
        },
        {
            name: 'VLK 3.0x Optic',
            image: 'attachments/snipers/vlk.png'
        },
        {
            name: 'Variable Zoom Scope',
            image: 'attachments/snipers/variable.png'
        },
        {
            name: 'Thermal Dual Power Scope',
            image: 'attachments/snipers/thermaldual.png'
        },
        {
            name: 'Cronen C480 Pro Optic',
            image: 'attachments/snipers/cronen.png'
        },
        {
            name: 'Merc Thermal Optic',
            image: 'attachments/snipers/merc.png'
        },
    ];


    var optic = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt4").innerHTML = "";

    if (attArr.includes(3)) {
        optic = true;
        //console.log("optic is true");
    }

    if (optic != false) {
        var ranOptic = Math.floor(Math.random() * 7) + 0;

        var opticPick = optics[ranOptic];
        //console.log(opticPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt4").innerHTML = '<b>' + "Optic -  " + '</b>' + opticPick.name + '<br>' + '<img  style="width:250px;"  src="' + opticPick.image + '">';
    }



    //Stock

    var stocks = [{
            name: 'FTAC Stalker-Scout',
            image: 'attachments/snipers/stalkerhdr.png'
        },
        {
            name: 'FTAC Hunter-Scout',
            image: 'attachments/snipers/hunterhdr.png'
        },
        {
            name: 'FSS Nomad Stock',
            image: 'attachments/snipers/nomad.png'
        },
        {
            name: 'FTAC Champion',
            image: 'attachments/snipers/champion.png'
        },
    ];


    var stock = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt5").innerHTML = "";

    if (attArr.includes(4)) {
        stock = true;
        //console.log("stock is true");
    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * 4) + 0;

        var stockPick = stocks[ranStock];
        //console.log(stockPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt5").innerHTML = '<b>' + "Stock -  " + '</b>' + stockPick.name + '<br>' + '<img  style="width:250px;"  src="' + stockPick.image + '">';
    }




    //Underbarrel

    var underbarrels = [{
        name: 'Bipod',
        image: 'attachments/snipers/bipod.png'
    }, ];


    var underbarrel = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt6").innerHTML = "";

    if (attArr.includes(5)) {
        underbarrel = true;
        //console.log("underbarrel is true");
    }

    if (underbarrel != false) {
        var ranUnderbarrel = Math.floor(Math.random() * 1) + 0;

        var underbarrelPick = underbarrels[ranUnderbarrel];
        //console.log(underbarrelPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt6").innerHTML = '<b>' + "Underbarrel -  " + '</b>' + underbarrelPick.name + '<br>' + '<img  style="width:250px;"  src="' + underbarrelPick.image + '">';
    }







    //Ammunation

    var ammunations = [{
            name: '7 Round Mags',
            image: 'attachments/snipers/7.png'
        },
        {
            name: '9 Round Mags',
            image: 'attachments/snipers/9.png'
        },
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


    //Perks

    var perks = [{
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
            name: 'Focus',
            image: 'attachments/perks/focus.png'
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
            name: 'Presence of Mind',
            image: 'attachments/perks/mind.png'
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
        var ranPerk = Math.floor(Math.random() * 11) + 0;

        var perkPick = perks[ranPerk];
        //console.log(perkPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt9").innerHTML = '<b>' + "Perk -  " + '</b>' + perkPick.name + '<br>' + ' <img  style="width:250px;"  src="' + perkPick.image + '" "' + '">';
    }






}

function fr556o() {
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
    var underbarrel = false;

    //Muzzles

    var muzzles = [{
            name: 'Flash Guard',
            image: 'attachments/muzzles/flashguard.png'
        },
        {
            name: 'Tactical Suppressor',
            image: 'attachments/muzzles/tacticalsuppressor.png'
        },
        {
            name: 'Muzzle Brake',
            image: 'attachments/muzzles/muzzlebrake.png'
        },
        {
            name: 'Lightweight Suppressor',
            image: 'attachments/muzzles/lightweightsuppressor.png'
        },
        {
            name: 'Compensator',
            image: 'attachments/muzzles/compensator.png'
        },
        {
            name: 'Monolithic Suppressor',
            image: 'attachments/muzzles/monolithicsuppressor.png'
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
        var ranMuzzle = Math.floor(Math.random() * 6) + 0;

        var muzzlePick = muzzles[ranMuzzle];
        //console.log(muzzlePick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt1").innerHTML = '<b>' + "Muzzle -  " + '</b>' + muzzlePick.name + '<br>' + '<img  style="width:250px;"  src="' + muzzlePick.image + '">';
    }



    //Image coming soon Sorry :'(

    //Barrel
    var barrels = [{
            name: 'FR 15.9 Commando',
            image: 'attachments/barrels/fr159commando.png'
        },
        {
            name: 'FR 24.4 Sniper',
            image: 'attachments/barrels/fr244sniper.png'
        },
        {
            name: 'TAC FORGE Ultralight',
            image: 'attachments/barrels/tacforgeultralight.png'
        },
    ];


    var barrel = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        barrel = true;
        //console.log("Barrel is true");
    }

    if (barrel != false) {
        var ranBarrel = Math.floor(Math.random() * 3) + 0;

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

    var optics = [{
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
            name: '4.0x Flip Hybrid',
            image: 'attachments/optics/40x.png'
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
            name: 'Integral Hybrid',
            image: 'attachments/optics/integral.png'
        },
        {
            name: 'Solozero NVG Enhanced',
            image: 'attachments/optics/solozero.png'
        },
        {
            name: 'VLK 3.0x Optic',
            image: 'attachments/optics/vlk.png'
        },
        {
            name: 'Sniper Scope',
            image: 'attachments/optics/sniperscope.png'
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
            name: 'PBX Holo 7 Sight',
            image: 'attachments/optics/pbx.png'
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
            name: 'Variable Zoom Scope',
            image: 'attachments/optics/variable.png'
        },
        {
            name: 'Canted Hybrid',
            image: 'attachments/optics/canted.png'
        },
        {
            name: 'Merc Thermal Optic',
            image: 'attachments/optics/merc.png'
        },
        {
            name: 'Thermal Hybrid',
            image: 'attachments/optics/thermal.png'
        },
        {
            name: 'Solozero Optics Mini Reflex',
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
        var ranOptic = Math.floor(Math.random() * 21) + 0;

        var opticPick = optics[ranOptic];
        //console.log(opticPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt4").innerHTML = '<b>' + "Optic -  " + '</b>' + opticPick.name + '<br>' + '<img  style="width:250px;"  src="' + opticPick.image + '">';
    }



    //Stock

    var stocks = [{
            name: 'FR Ultralight Hollow',
            image: 'attachments/stocks/frultralighthollow.png'
        },
        {
            name: 'FORGE TAC Ballast Pack',
            image: 'attachments/stocks/forgetacballastpackfr.png'
        },
        {
            name: 'FFS Tac-Wrap',
            image: 'attachments/stocks/ffstacwrap.png'
        }
    ];


    var stock = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt5").innerHTML = "";

    if (attArr.includes(4)) {
        stock = true;
        //console.log("stock is true");
    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * 3) + 0;

        var stockPick = stocks[ranStock];
        //console.log(stockPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt5").innerHTML = '<b>' + "Stock -  " + '</b>' + stockPick.name + '<br>' + '<img  style="width:250px;"  src="' + stockPick.image + '">';
    }




    //Underbarrel

    var underbarrels = [{
            name: 'Commando Foregrip',
            image: 'attachments/underbarrels/commando.png'
        },
        {
            name: 'M203 40mm High-explosive',
            image: 'attachments/underbarrels/m203high.png'
        },
        {
            name: 'M203 40mm Incendiary',
            image: 'attachments/underbarrels/m203incendiary.png'
        },
        {
            name: '12 Gauge Deputy',
            image: 'attachments/underbarrels/12gauge.png'
        },
        {
            name: 'Merc Foregrip',
            image: 'attachments/underbarrels/merc.png'
        },
        {
            name: 'M203 40mm Smokescreen',
            image: 'attachments/underbarrels/m203smokescreen.png'
        },
        {
            name: 'Tactical Foregrip',
            image: 'attachments/underbarrels/tactical.png'
        },
        {
            name: 'M203 40mm Recon',
            image: 'attachments/underbarrels/m203recon.png'
        },
        {
            name: 'Bipod',
            image: 'attachments/underbarrels/bipod.png'
        },
        {
            name: 'M203 40mm Flash',
            image: 'attachments/underbarrels/m203flash.png'
        },
        {
            name: 'Ranger Foregrip',
            image: 'attachments/underbarrels/ranger.png'
        },
        {
            name: 'M203 40mm Concussive',
            image: 'attachments/underbarrels/m203concussive.png'
        },
        {
            name: 'Operator Foregrip',
            image: 'attachments/underbarrels/operator.png'
        }
    ];


    var underbarrel = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt6").innerHTML = "";

    if (attArr.includes(5)) {
        underbarrel = true;
        //console.log("underbarrel is true");
    }

    if (underbarrel != false) {
        var ranUnderbarrel = Math.floor(Math.random() * 13) + 0;

        var underbarrelPick = underbarrels[ranUnderbarrel];
        //console.log(underbarrelPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt6").innerHTML = '<b>' + "Underbarrel -  " + '</b>' + underbarrelPick.name + '<br>' + '<img  style="width:250px;"  src="' + underbarrelPick.image + '">';
    }







    //Ammunation

    var ammunations = [{
            name: '50 Round Mags',
            image: 'attachments/ammunations/50.png'
        },
        {
            name: '60 Round Mags',
            image: 'attachments/ammunations/60.png'
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
            image: 'attachments/reargrips/granulated.png'
        },
        {
            name: 'Rubberized Grip Tape',
            image: 'attachments/reargrips/rubberized.png'
        },
        {
            name: 'Stippled Grip Tape',
            image: 'attachments/reargrips/stippled.png'
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

    var perks = [{
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
            name: 'Presence of Mind',
            image: 'attachments/perks/mind.png'
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
        var ranPerk = Math.floor(Math.random() * 10) + 0;

        var perkPick = perks[ranPerk];
        //console.log(perkPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt9").innerHTML = '<b>' + "Perk -  " + '</b>' + perkPick.name + '<br>' + ' <img  style="width:250px;"  src="' + perkPick.image + '" "' + '">';
    }






}

function fnscar17o() {
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
    var underbarrel = false;

    //Muzzles

    var muzzles = [{
            name: 'Flash Guard',
            image: 'attachments/muzzles/flashguard.png'
        },
        {
            name: 'Lightweight Suppressor',
            image: 'attachments/muzzles/lightweightsuppressor.png'
        },
        {
            name: 'Tactical Suppressor',
            image: 'attachments/muzzles/tacticalsuppressor.png'
        },
        {
            name: 'Muzzle Brake',
            image: 'attachments/muzzles/muzzlebrake.png'
        },
        {
            name: 'Breacher Device',
            image: 'attachments/muzzles/breacherdevice.png'
        },
        {
            name: 'Compensator',
            image: 'attachments/muzzles/compensator.png'
        },
        {
            name: 'Monolithic Suppressor',
            image: 'attachments/muzzles/monolithicsuppressor.png'
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



    //Image coming soon Sorry :'(


    //Barrel
    var barrels = [{
            name: 'Forge Tac 17.2 LB',
            image: 'attachments/barrels/forgetac172lb.png'
        },
        {
            name: 'Forge Tac 20.0 LB',
            image: 'attachments/barrels/forgetac200lb.png'
        },
        {
            name: 'Forge Tac CQC Pro',
            image: 'attachments/barrels/forgetaccqcpro.png'
        },
    ];


    var barrel = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        barrel = true;
        //console.log("Barrel is true");
    }

    if (barrel != false) {
        var ranBarrel = Math.floor(Math.random() * 3) + 0;

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

    var optics = [{
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
            name: '4.0x Flip Hybrid',
            image: 'attachments/optics/40x.png'
        },
        {
            name: 'Integral Hybrid',
            image: 'attachments/optics/integral.png'
        },
        {
            name: 'Solozero NVG Enhanced',
            image: 'attachments/optics/solozero.png'
        },
        {
            name: 'VLK 3.0x Optic',
            image: 'attachments/optics/vlk.png'
        },
        {
            name: 'Sniper Scope',
            image: 'attachments/optics/sniperscope.png'
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
            name: 'PBX Holo 7 Sight',
            image: 'attachments/optics/pbx.png'
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
            name: 'Variable Zoom Scope',
            image: 'attachments/optics/variable.png'
        },
        {
            name: 'Canted Hybrid',
            image: 'attachments/optics/canted.png'
        },
        {
            name: 'Merc Thermal Optic',
            image: 'attachments/optics/merc.png'
        },
        {
            name: 'Thermal Hybrid',
            image: 'attachments/optics/thermal.png'
        },
        {
            name: 'Solozero Optics Mini Reflex',
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
        var ranOptic = Math.floor(Math.random() * 20) + 0;

        var opticPick = optics[ranOptic];
        //console.log(opticPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt4").innerHTML = '<b>' + "Optic -  " + '</b>' + opticPick.name + '<br>' + '<img  style="width:250px;"  src="' + opticPick.image + '">';
    }



    //Stock

    var stocks = [{
            name: 'FTAC Hunter',
            image: 'attachments/stocks/ftachunter.png'
        },
        {
            name: 'FTAC Collapsible Stock',
            image: 'attachments/stocks/ftaccollapsiblestock.png'
        },
        {
            name: 'FFS Close Quarters Stock',
            image: 'attachments/stocks/closequartersfal.png'
        },
        {
            name: 'XRK Obelisk Pro',
            image: 'attachments/stocks/xrkobeliskpro.png'
        }
    ];


    var stock = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt5").innerHTML = "";

    if (attArr.includes(4)) {
        stock = true;
        //console.log("stock is true");
    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * 4) + 0;

        var stockPick = stocks[ranStock];
        //console.log(stockPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt5").innerHTML = '<b>' + "Stock -  " + '</b>' + stockPick.name + '<br>' + '<img  style="width:250px;"  src="' + stockPick.image + '">';
    }




    //Underbarrel

    var underbarrels = [{
            name: 'Commando Foregrip',
            image: 'attachments/underbarrels/commando.png'
        },
        {
            name: '40mm High-explosive',
            image: 'attachments/underbarrels/40mmhighexplosive.png'
        },
        {
            name: '40mm Incendiary',
            image: 'attachments/underbarrels/40mmincendiary.png'
        },
        {
            name: '12 Gauge Deputy',
            image: 'attachments/underbarrels/12gauge.png'
        },
        {
            name: 'Merc Foregrip',
            image: 'attachments/underbarrels/merc.png'
        },
        {
            name: '40mm Smokescreen',
            image: 'attachments/underbarrels/40mmsmokescreen.png'
        },
        {
            name: 'Tactical Foregrip',
            image: 'attachments/underbarrels/tactical.png'
        },
        {
            name: '40mm Recon',
            image: 'attachments/underbarrels/40mmrecon.png'
        },
        {
            name: 'Bipod Foregrip',
            image: 'attachments/underbarrels/bipodforegrip.png'
        },
        {
            name: '40mm Flash',
            image: 'attachments/underbarrels/40mmflash.png'
        },
        {
            name: '40mm Concussive',
            image: 'attachments/underbarrels/40mmconcussive.png'
        },
        {
            name: 'Operator Foregrip',
            image: 'attachments/underbarrels/operator.png'
        }
    ];


    var underbarrel = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt6").innerHTML = "";

    if (attArr.includes(5)) {
        underbarrel = true;
        //console.log("underbarrel is true");
    }

    if (underbarrel != false) {
        var ranUnderbarrel = Math.floor(Math.random() * 12) + 0;

        var underbarrelPick = underbarrels[ranUnderbarrel];
        //console.log(underbarrelPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt6").innerHTML = '<b>' + "Underbarrel -  " + '</b>' + underbarrelPick.name + '<br>' + '<img  style="width:250px;"  src="' + underbarrelPick.image + '">';
    }







    //Ammunation

    var ammunations = [{
            name: '25 Round Mags',
            image: 'attachments/ammunations/25scar.png'
        },
        {
            name: '30 Round Mags',
            image: 'attachments/ammunations/30scar.png'
        },
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
            image: 'attachments/reargrips/granulated.png'
        },
        {
            name: 'Rubberized Grip Tape',
            image: 'attachments/reargrips/rubberized.png'
        },
        {
            name: 'Stippled Grip Tape',
            image: 'attachments/reargrips/stippled.png'
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

    var perks = [{
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

function falo() {
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
    var underbarrel = false;

    //Muzzles

    var muzzles = [{
            name: 'Flash Guard',
            image: 'attachments/muzzles/flashguard.png'
        },
        {
            name: 'Breacher Device',
            image: 'attachments/muzzles/breacherdevice.png'
        },
        {
            name: 'Tactical Suppressor',
            image: 'attachments/muzzles/tacticalsuppressor.png'
        },
        {
            name: 'Muzzle Brake',
            image: 'attachments/muzzles/muzzlebrake.png'
        },
        {
            name: 'Lightweight Suppressor',
            image: 'attachments/muzzles/lightweightsuppressor.png'
        },
        {
            name: 'Compensator',
            image: 'attachments/muzzles/compensator.png'
        },
        {
            name: 'Monolithic Suppressor',
            image: 'attachments/muzzles/monolithicsuppressor.png'
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



    //Image coming soon Sorry :'(


    //Barrel
    var barrels = [{
            name: '18.0 Ultralight',
            image: 'attachments/barrels/180ultralight.png'
        },
        {
            name: 'XRX Marksman',
            image: 'attachments/barrels/xrxmarksman.png'
        },
        {
            name: '13.0 OSW Para',
            image: 'attachments/barrels/130oswpara.png'
        },
    ];


    var barrel = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        barrel = true;
        //console.log("Barrel is true");
    }

    if (barrel != false) {
        var ranBarrel = Math.floor(Math.random() * 3) + 0;

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

    var optics = [{
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
            name: '4.0x Flip Hybrid',
            image: 'attachments/optics/40x.png'
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
            name: 'Integral Hybrid',
            image: 'attachments/optics/integral.png'
        },
        {
            name: 'Solozero NVG Enhanced',
            image: 'attachments/optics/solozero.png'
        },
        {
            name: 'VLK 3.0x Optic',
            image: 'attachments/optics/vlk.png'
        },
        {
            name: 'Sniper Scope',
            image: 'attachments/optics/sniperscope.png'
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
            name: 'PBX Holo 7 Sight',
            image: 'attachments/optics/pbx.png'
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
            name: 'Variable Zoom Scope',
            image: 'attachments/optics/variable.png'
        },
        {
            name: 'Canted Hybrid',
            image: 'attachments/optics/canted.png'
        },
        {
            name: 'Merc Thermal Optic',
            image: 'attachments/optics/merc.png'
        },
        {
            name: 'Thermal Hybrid',
            image: 'attachments/optics/thermal.png'
        },
        {
            name: 'Solozero Optics Mini Reflex',
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
        var ranOptic = Math.floor(Math.random() * 21) + 0;

        var opticPick = optics[ranOptic];
        //console.log(opticPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt4").innerHTML = '<b>' + "Optic -  " + '</b>' + opticPick.name + '<br>' + '<img  style="width:250px;"  src="' + opticPick.image + '">';
    }



    //Stock

    var stocks = [{
            name: 'Factory 18 Aluminum Stock',
            image: 'attachments/stocks/factory18aluminumstock.png'
        },
        {
            name: 'FORGE TAC Stalker',
            image: 'attachments/stocks/forgetacstalker.png'
        },
        {
            name: 'No Stock',
            image: 'attachments/stocks/nostockkilo.png'
        },
        {
            name: 'FFS CLose Quarters Stock',
            image: 'attachments/stocks/closequartersfal.png'
        }
    ];


    var stock = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt5").innerHTML = "";

    if (attArr.includes(4)) {
        stock = true;
        //console.log("stock is true");
    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * 4) + 0;

        var stockPick = stocks[ranStock];
        //console.log(stockPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt5").innerHTML = '<b>' + "Stock -  " + '</b>' + stockPick.name + '<br>' + '<img  style="width:250px;"  src="' + stockPick.image + '">';
    }




    //Underbarrel

    var underbarrels = [{
            name: 'Commando Foregrip',
            image: 'attachments/underbarrels/commando.png'
        },
        {
            name: 'M203 40mm High-explosive',
            image: 'attachments/underbarrels/m203high.png'
        },
        {
            name: 'M203 40mm Incendiary',
            image: 'attachments/underbarrels/m203incendiary.png'
        },
        {
            name: '12 Gauge Deputy',
            image: 'attachments/underbarrels/12gauge.png'
        },
        {
            name: 'Merc Foregrip',
            image: 'attachments/underbarrels/merc.png'
        },
        {
            name: 'M203 40mm Smokescreen',
            image: 'attachments/underbarrels/m203smokescreen.png'
        },
        {
            name: 'Tactical Foregrip',
            image: 'attachments/underbarrels/tactical.png'
        },
        {
            name: 'M203 40mm Recon',
            image: 'attachments/underbarrels/m203recon.png'
        },
        {
            name: 'Bipod',
            image: 'attachments/underbarrels/bipod.png'
        },
        {
            name: 'M203 40mm Flash',
            image: 'attachments/underbarrels/m203flash.png'
        },
        {
            name: 'Ranger Foregrip',
            image: 'attachments/underbarrels/ranger.png'
        },
        {
            name: 'M203 40mm Concussive',
            image: 'attachments/underbarrels/m203concussive.png'
        },
        {
            name: 'Operator Foregrip',
            image: 'attachments/underbarrels/operator.png'
        }
    ];


    var underbarrel = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt6").innerHTML = "";

    if (attArr.includes(5)) {
        underbarrel = true;
        //console.log("underbarrel is true");
    }

    if (underbarrel != false) {
        var ranUnderbarrel = Math.floor(Math.random() * 13) + 0;

        var underbarrelPick = underbarrels[ranUnderbarrel];
        //console.log(underbarrelPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt6").innerHTML = '<b>' + "Underbarrel -  " + '</b>' + underbarrelPick.name + '<br>' + '<img  style="width:250px;"  src="' + underbarrelPick.image + '">';
    }







    //Ammunation

    var ammunations = [{
            name: '24 Round Mags',
            image: 'attachments/ammunations/24.png'
        },
        {
            name: '30 Round Mags',
            image: 'attachments/ammunations/30.png'
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
            image: 'attachments/reargrips/granulated.png'
        },
        {
            name: 'Rubberized Grip Tape',
            image: 'attachments/reargrips/rubberized.png'
        },
        {
            name: 'Stippled Grip Tape',
            image: 'attachments/reargrips/stippled.png'
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

    var perks = [{
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
            name: 'Burst',
            image: 'attachments/perks/burst.png'
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
            name: 'Presence of Mind',
            image: 'attachments/perks/mind.png'
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
        var ranPerk = Math.floor(Math.random() * 11) + 0;

        var perkPick = perks[ranPerk];
        //console.log(perkPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt9").innerHTML = '<b>' + "Perk -  " + '</b>' + perkPick.name + '<br>' + ' <img  style="width:250px;"  src="' + perkPick.image + '" "' + '">';
    }






}

function ebro() {
    var numAttachments = [0, 1, 2, 3, 4, 5, 6, 8];
    var totalCount = 8;
    var ran = Math.floor(Math.random() * 5) + 0;
    var attArr = [];
    for (var i = 0; i <= ran; i++) {
        var rand = numAttachments[Math.floor(Math.random() * totalCount)];
        attArr.push(rand);
        numAttachments.splice(rand, 1);
        totalCount--;
    }
    //console.log(attArr);
    var underbarrel = false;

    //Muzzles

    var muzzles = [{
            name: 'Flash Guard',
            image: 'attachments/muzzles/flashguard.png'
        },
        {
            name: 'Breacher Device',
            image: 'attachments/muzzles/breacherdevice.png'
        },
        {
            name: 'Tactical Suppressor',
            image: 'attachments/muzzles/tacticalsuppressor.png'
        },
        {
            name: 'Muzzle Brake',
            image: 'attachments/muzzles/muzzlebrake.png'
        },
        {
            name: 'Lightweight Suppressor',
            image: 'attachments/muzzles/lightweightsuppressor.png'
        },
        {
            name: 'Compensator',
            image: 'attachments/muzzles/compensator.png'
        },
        {
            name: 'Monolithic Suppressor',
            image: 'attachments/muzzles/monolithicsuppressor.png'
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
            name: 'FORGE TAC Precision 20.0',
            image: 'attachments/mrs/barrels/precision20.png'
        },
        {
            name: 'FORGE TAC Elite',
            image: 'attachments/mrs/barrels/elite.png'
        },
        {
            name: 'FORGE TAC Precision 22.0',
            image: 'attachments/mrs/barrels/precision22.png'
        },
    ];


    var barrel = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        barrel = true;
        //console.log("Barrel is true");
    }

    if (barrel != false) {
        var ranBarrel = Math.floor(Math.random() * 3) + 0;

        var barrelPick = barrels[ranBarrel];
        //console.log(barrelPick.name);

        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt2").innerHTML = '<b>' + "Barrel -  " + '</b>' + barrelPick.name + '<br>' + '<img  style="width:250px;"  src="' + barrelPick.image + '">';
    }




    //Laser

    var lasers = [

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
        var ranLaser = Math.floor(Math.random() * 1) + 0;

        var laserPick = lasers[ranLaser];
        //console.log(laserPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt3").innerHTML = '<b>' + "Laser -  " + '</b>' + laserPick.name + '<br>' + '<img  style="width:250px;"  src="' + laserPick.image + '">';
    }



    //Optic

    var optics = [{
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
            name: '4.0x Flip Hybrid',
            image: 'attachments/optics/40x.png'
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
            name: 'Integral Hybrid',
            image: 'attachments/optics/integral.png'
        },
        {
            name: 'Solozero NVG Enhanced',
            image: 'attachments/optics/solozero.png'
        },
        {
            name: 'VLK 3.0x Optic',
            image: 'attachments/optics/vlk.png'
        },
        {
            name: 'Sniper Scope',
            image: 'attachments/optics/sniperscope.png'
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
            name: 'PBX Holo 7 Sight',
            image: 'attachments/optics/pbx.png'
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
            name: 'Variable Zoom Scope',
            image: 'attachments/optics/variable.png'
        },
        {
            name: 'Canted Hybrid',
            image: 'attachments/optics/canted.png'
        },
        {
            name: 'Merc Thermal Optic',
            image: 'attachments/optics/merc.png'
        },
        {
            name: 'Thermal Hybrid',
            image: 'attachments/optics/thermal.png'
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
        var ranOptic = Math.floor(Math.random() * 19) + 0;

        var opticPick = optics[ranOptic];
        //console.log(opticPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt4").innerHTML = '<b>' + "Optic -  " + '</b>' + opticPick.name + '<br>' + '<img  style="width:250px;"  src="' + opticPick.image + '">';
    }



    //Stock

    var stocks = [{
            name: 'FTAC Precision Comb',
            image: 'attachments/mrs/stocks/comb.png'
        },
        {
            name: 'FSS Raider Chassis Pro',
            image: 'attachments/mrs/stocks/pro.png'
        },
        {
            name: 'FTAC Lightweight Stock',
            image: 'attachments/mrs/stocks/lightweight.png'
        },
        {
            name: 'FSS Raider Chassis Elite',
            image: 'attachments/mrs/stocks/elite.png'
        }
    ];


    var stock = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt5").innerHTML = "";

    if (attArr.includes(4)) {
        stock = true;
        //console.log("stock is true");
    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * 4) + 0;

        var stockPick = stocks[ranStock];
        //console.log(stockPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt5").innerHTML = '<b>' + "Stock -  " + '</b>' + stockPick.name + '<br>' + '<img  style="width:250px;"  src="' + stockPick.image + '">';
    }




    //Underbarrel

    var underbarrels = [{
            name: 'Commando Foregrip',
            image: 'attachments/underbarrels/commando.png'
        },
        {
            name: 'Merc Foregrip',
            image: 'attachments/underbarrels/merc.png'
        },
        {
            name: 'Tactical Foregrip',
            image: 'attachments/underbarrels/tactical.png'
        },
        {
            name: 'Bipod',
            image: 'attachments/underbarrels/bipod.png'
        },
        {
            name: 'Ranger Foregrip',
            image: 'attachments/underbarrels/ranger.png'
        },
        {
            name: 'Operator Foregrip',
            image: 'attachments/underbarrels/operator.png'
        }
    ];


    var underbarrel = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt6").innerHTML = "";

    if (attArr.includes(5)) {
        underbarrel = true;
        //console.log("underbarrel is true");
    }

    if (underbarrel != false) {
        var ranUnderbarrel = Math.floor(Math.random() * 6) + 0;

        var underbarrelPick = underbarrels[ranUnderbarrel];
        //console.log(underbarrelPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt6").innerHTML = '<b>' + "Underbarrel -  " + '</b>' + underbarrelPick.name + '<br>' + '<img  style="width:250px;"  src="' + underbarrelPick.image + '">';
    }







    //Ammunation

    var ammunations = [{
            name: '15 Round Mags',
            image: 'attachments/mrs/ammunations/15.png'
        },
        {
            name: '20 Round Mags',
            image: 'attachments/mrs/ammunations/20.png'
        },

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




    //Perks

    var perks = [{
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
            name: 'Focus',
            image: 'attachments/perks/focus.png'
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
            name: 'Presence of Mind',
            image: 'attachments/perks/mind.png'
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
        var ranPerk = Math.floor(Math.random() * 11) + 0;

        var perkPick = perks[ranPerk];
        //console.log(perkPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt9").innerHTML = '<b>' + "Perk -  " + '</b>' + perkPick.name + '<br>' + ' <img  style="width:250px;"  src="' + perkPick.image + '" "' + '">';
    }






}

function dragunovo() {
    var numAttachments = [0, 1, 2, 3, 4, 5, 6, 8];
    var totalCount = 8;
    var ran = Math.floor(Math.random() * 5) + 0;
    var attArr = [];
    for (var i = 0; i <= ran; i++) {
        var rand = numAttachments[Math.floor(Math.random() * totalCount)];
        attArr.push(rand);
        numAttachments.splice(rand, 1);
        totalCount--;
    }
    //console.log(attArr);
    var underbarrel = false;

    //Muzzles

    var muzzles = [{
            name: 'Flash Guard',
            image: 'attachments/snipers/flashguard.png'
        },
        {
            name: 'Monolithic Suppressor',
            image: 'attachments/snipers/monolithicsuppressor.png'
        },
        {
            name: 'Breacher Device',
            image: 'attachments/snipers/breacherdevice.png'
        },
        {
            name: 'Muzzle Brake',
            image: 'attachments/snipers/muzzlebrake.png'
        },
        {
            name: 'Tactical Suppressor',
            image: 'attachments/snipers/tacticalsuppressor.png'
        },
        {
            name: 'Compensator',
            image: 'attachments/snipers/compensator.png'
        },
        {
            name: 'Lightweight Suppressor',
            image: 'attachments/snipers/lightweightsuppressor.png'
        },
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
            name: '510mm Compact Barrel',
            image: 'attachments/snipers/510mmcompact.png'
        },
        {
            name: '660mm Extended Barrel',
            image: 'attachments/snipers/660mmextended.png'
        },
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
        name: 'Tac Laser',
        image: 'attachments/snipers/taclaser.png'
    }, ];


    var laser = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt3").innerHTML = "";

    if (attArr.includes(2)) {
        laser = true;
        //console.log("laser is true");
    }

    if (laser != false) {
        var ranLaser = Math.floor(Math.random() * 1) + 0;

        var laserPick = lasers[ranLaser];
        //console.log(laserPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt3").innerHTML = '<b>' + "Laser -  " + '</b>' + laserPick.name + '<br>' + '<img  style="width:250px;"  src="' + laserPick.image + '">';
    }



    //Optic

    var optics = [{
            name: 'Scout Combat Optic',
            image: 'attachments/snipers/scout.png'
        },
        {
            name: 'Thermal Sniper Scope',
            image: 'attachments/snipers/thermal.png'
        },
        {
            name: 'VLK 3.0x Optic',
            image: 'attachments/snipers/vlk.png'
        },
        {
            name: 'Variable Zoom Scope',
            image: 'attachments/snipers/variable.png'
        },
        {
            name: 'Thermal Dual Power Scope',
            image: 'attachments/snipers/thermaldual.png'
        },
        {
            name: 'Cronen C480 Pro Optic',
            image: 'attachments/snipers/cronen.png'
        },
        {
            name: 'Merc Thermal Optic',
            image: 'attachments/snipers/merc.png'
        },
    ];


    var optic = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt4").innerHTML = "";

    if (attArr.includes(3)) {
        optic = true;
        //console.log("optic is true");
    }

    if (optic != false) {
        var ranOptic = Math.floor(Math.random() * 7) + 0;

        var opticPick = optics[ranOptic];
        //console.log(opticPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt4").innerHTML = '<b>' + "Optic -  " + '</b>' + opticPick.name + '<br>' + '<img  style="width:250px;"  src="' + opticPick.image + '">';
    }



    //Stock

    var stocks = [{
            name: 'FTAC Hunter-Scout',
            image: 'attachments/snipers/hunter.png'
        },
        {
            name: 'Skeleton Stock',
            image: 'attachments/snipers/skeleton.png'
        },
        {
            name: 'VLK Lightweight Stock',
            image: 'attachments/snipers/lightweight.png'
        },
        {
            name: 'FTAC Stalker-Scout',
            image: 'attachments/snipers/stalker.png'
        },

    ];


    var stock = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt5").innerHTML = "";

    if (attArr.includes(4)) {
        stock = true;
        //console.log("stock is true");
    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * 4) + 0;

        var stockPick = stocks[ranStock];
        //console.log(stockPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt5").innerHTML = '<b>' + "Stock -  " + '</b>' + stockPick.name + '<br>' + '<img  style="width:250px;"  src="' + stockPick.image + '">';
    }




    //Underbarrel

    var underbarrels = [{
        name: 'Bipod',
        image: 'attachments/snipers/bipod.png'
    }, ];


    var underbarrel = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt6").innerHTML = "";

    if (attArr.includes(5)) {
        underbarrel = true;
        //console.log("underbarrel is true");
    }

    if (underbarrel != false) {
        var ranUnderbarrel = Math.floor(Math.random() * 1) + 0;

        var underbarrelPick = underbarrels[ranUnderbarrel];
        //console.log(underbarrelPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt6").innerHTML = '<b>' + "Underbarrel -  " + '</b>' + underbarrelPick.name + '<br>' + '<img  style="width:250px;"  src="' + underbarrelPick.image + '">';
    }







    //Ammunation

    var ammunations = [{
            name: '15 Round Mags',
            image: 'attachments/snipers/15.png'
        },
        {
            name: '20 Round Mags',
            image: 'attachments/snipers/20.png'
        },
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


    //Perks

    var perks = [{
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
            name: 'Focus',
            image: 'attachments/perks/focus.png'
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
            name: 'Presence of Mind',
            image: 'attachments/perks/mind.png'
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
        var ranPerk = Math.floor(Math.random() * 11) + 0;

        var perkPick = perks[ranPerk];
        //console.log(perkPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt9").innerHTML = '<b>' + "Perk -  " + '</b>' + perkPick.name + '<br>' + ' <img  style="width:250px;"  src="' + perkPick.image + '" "' + '">';
    }






}

function ax50o() {
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
    var underbarrel = false;

    //Muzzles

    var muzzles = [{
            name: 'Flash Guard',
            image: 'attachments/snipers/flashguard.png'
        },
        {
            name: 'Monolithic Suppressor',
            image: 'attachments/snipers/monolithicsuppressor.png'
        },
        {
            name: 'Breacher Device',
            image: 'attachments/snipers/breacherdevice.png'
        },
        {
            name: 'Muzzle Brake',
            image: 'attachments/snipers/muzzlebrake.png'
        },
        {
            name: 'Tactical Suppressor',
            image: 'attachments/snipers/tacticalsuppressor.png'
        },
        {
            name: 'Compensator',
            image: 'attachments/snipers/compensator.png'
        },
        {
            name: 'Lightweight Suppressor',
            image: 'attachments/snipers/lightweightsuppressor.png'
        },
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
            name: 'Singuard Arms Pro',
            image: 'attachments/snipers/singuardarms.png'
        },
        {
            name: '17.0 Factory Barrel',
            image: 'attachments/snipers/17factory.png'
        },
        {
            name: '32.0 Factory Barrel',
            image: 'attachments/snipers/32factory.png'
        },
    ];


    var barrel = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        barrel = true;
        //console.log("Barrel is true");
    }

    if (barrel != false) {
        var ranBarrel = Math.floor(Math.random() * 3) + 0;

        var barrelPick = barrels[ranBarrel];
        //console.log(barrelPick.name);


        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt2").innerHTML = '<b>' + "Barrel -  " + '</b>' + barrelPick.name + '<br>' + '<img  style="width:250px;"  src="' + barrelPick.image + '">';
    }




    //Laser

    var lasers = [{
        name: 'Tac Laser',
        image: 'attachments/snipers/taclaser.png'
    }, ];


    var laser = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt3").innerHTML = "";

    if (attArr.includes(2)) {
        laser = true;
        //console.log("laser is true");
    }

    if (laser != false) {
        var ranLaser = Math.floor(Math.random() * 1) + 0;

        var laserPick = lasers[ranLaser];
        //console.log(laserPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt3").innerHTML = '<b>' + "Laser -  " + '</b>' + laserPick.name + '<br>' + '<img  style="width:250px;"  src="' + laserPick.image + '">';
    }



    //Optic

    var optics = [{
            name: 'Scout Combat Optic',
            image: 'attachments/snipers/scout.png'
        },
        {
            name: 'Thermal Sniper Scope',
            image: 'attachments/snipers/thermal.png'
        },
        {
            name: 'VLK 3.0x Optic',
            image: 'attachments/snipers/vlk.png'
        },
        {
            name: 'Variable Zoom Scope',
            image: 'attachments/snipers/variable.png'
        },
        {
            name: 'Thermal Dual Power Scope',
            image: 'attachments/snipers/thermaldual.png'
        },
        {
            name: 'Cronen C480 Pro Optic',
            image: 'attachments/snipers/cronen.png'
        },
        {
            name: 'Merc Thermal Optic',
            image: 'attachments/snipers/merc.png'
        },
    ];


    var optic = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt4").innerHTML = "";

    if (attArr.includes(3)) {
        optic = true;
        //console.log("optic is true");
    }

    if (optic != false) {
        var ranOptic = Math.floor(Math.random() * 7) + 0;

        var opticPick = optics[ranOptic];
        //console.log(opticPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt4").innerHTML = '<b>' + "Optic -  " + '</b>' + opticPick.name + '<br>' + '<img  style="width:250px;"  src="' + opticPick.image + '">';
    }



    //Stock

    var stocks = [{
            name: 'Singuard Arms Marksman',
            image: 'attachments/snipers/marksman.png'
        },
        {
            name: 'Singuard Arms Evader',
            image: 'attachments/snipers/evader.png'
        },
        {
            name: 'Singuard Arms Assassin',
            image: 'attachments/snipers/assassin.png'
        },
    ];


    var stock = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt5").innerHTML = "";

    if (attArr.includes(4)) {
        stock = true;
        //console.log("stock is true");
    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * 3) + 0;

        var stockPick = stocks[ranStock];
        //console.log(stockPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt5").innerHTML = '<b>' + "Stock -  " + '</b>' + stockPick.name + '<br>' + '<img  style="width:250px;"  src="' + stockPick.image + '">';
    }




    //Underbarrel

    var underbarrels = [{
        name: 'Bipod',
        image: 'attachments/snipers/bipod.png'
    }, ];


    var underbarrel = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt6").innerHTML = "";

    if (attArr.includes(5)) {
        underbarrel = true;
        //console.log("underbarrel is true");
    }

    if (underbarrel != false) {
        var ranUnderbarrel = Math.floor(Math.random() * 1) + 0;

        var underbarrelPick = underbarrels[ranUnderbarrel];
        //console.log(underbarrelPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt6").innerHTML = '<b>' + "Underbarrel -  " + '</b>' + underbarrelPick.name + '<br>' + '<img  style="width:250px;"  src="' + underbarrelPick.image + '">';
    }







    //Ammunation

    var ammunations = [{
            name: '7 Round Mags',
            image: 'attachments/snipers/7.png'
        },
        {
            name: '9 Round Mags',
            image: 'attachments/snipers/9.png'
        },
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
            image: 'attachments/reargrips/granulated.png'
        },
        {
            name: 'Rubberized Grip Tape',
            image: 'attachments/reargrips/rubberized.png'
        },
        {
            name: 'Stippled Grip Tape',
            image: 'attachments/reargrips/stippled.png'
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

    var perks = [{
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
            name: 'Focus',
            image: 'attachments/perks/focus.png'
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
            name: 'Presence of Mind',
            image: 'attachments/perks/mind.png'
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
        var ranPerk = Math.floor(Math.random() * 11) + 0;

        var perkPick = perks[ranPerk];
        //console.log(perkPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt9").innerHTML = '<b>' + "Perk -  " + '</b>' + perkPick.name + '<br>' + ' <img  style="width:250px;"  src="' + perkPick.image + '" "' + '">';
    }






}

function augo() {
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
    // console.log(attArr);
    var underbarrel = false;

    //Muzzles

    var muzzles = [{
            name: 'CQB Breacher Device',
            image: 'attachments/smgs/cqbbreacherdevice.png'
        },
        {
            name: 'Tactical Suppressor',
            image: 'attachments/smgs/tacticalsuppressor.png'
        },
        {
            name: 'Flash Guard',
            image: 'attachments/smgs/flashguard.png'
        },
        {
            name: 'Monolithic Suppressor',
            image: 'attachments/smgs/monolithicsuppressor.png'
        },
        {
            name: 'Muzzle Brake',
            image: 'attachments/smgs/muzzlebrake.png'
        },
        {
            name: 'Compensator',
            image: 'attachments/smgs/compensator.png'
        },
        {
            name: 'Lightweight Suppressor',
            image: 'attachments/smgs/lightweightsuppressor.png'
        },
    ];


    var muzzle = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        muzzle = true;
        // console.log("Muzzle is true");
    }

    if (muzzle != false) {
        var ranMuzzle = Math.floor(Math.random() * 7) + 0;

        var muzzlePick = muzzles[ranMuzzle];
        // console.log(muzzlePick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt1").innerHTML = '<b>' + "Muzzle -  " + '</b>' + muzzlePick.name + '<br>' + '<img  style="width:250px;"  src="' + muzzlePick.image + '">';
    }

    //Barrel

    var barrels = [{
            name: '407mm Extended Barrel',
            image: 'attachments/smgs/407mmextendedbarrel.png'
        },
        {
            name: '407mm Lightweight',
            image: 'attachments/smgs/407mmlightweight.png'
        },
        {
            name: '622mm Long Barrel',
            image: 'attachments/smgs/622mmlongbarrel.png'
        },
    ];


    var barrel = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        barrel = true;
        // console.log("Barrel is true");
    }

    if (barrel != false) {
        var ranBarrel = Math.floor(Math.random() * 3) + 0;

        var barrelPick = barrels[ranBarrel];
        // console.log(barrelPick.name);
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
        // console.log("laser is true");
    }

    if (laser != false) {
        var ranLaser = Math.floor(Math.random() * 3) + 0;

        var laserPick = lasers[ranLaser];
        // console.log(laserPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt3").innerHTML = '<b>' + "Laser -  " + '</b>' + laserPick.name + '<br>' + '<img  style="width:250px;"  src="' + laserPick.image + '">';
    }



    //Optic

    var optics = [{
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
            name: 'VLK 3.0x Optic',
            image: 'attachments/smgs/vlk.png'
        },
        {
            name: 'Thermal hybrid',
            image: 'attachments/smgs/thermal.png'
        },
        {
            name: 'Viper Reflex Sight',
            image: 'attachments/smgs/viper.png'
        },
        {
            name: 'PBX Holo 7 sight',
            image: 'attachments/smgs/pbx.png'
        },
        {
            name: 'Solozero NVG Enhanced',
            image: 'attachments/smgs/solozero.png'
        },
        {
            name: 'Cronen LP945 Mini Reflex',
            image: 'attachments/smgs/cronenlp945.png'
        },
        {
            name: '4.0x Flip Hybrid',
            image: 'attachments/smgs/40x.png'
        },
        {
            name: 'Monocle Reflex Sight',
            image: 'attachments/smgs/monocle.png'
        },
        {
            name: 'Integral 3.0x Optic',
            image: 'attachments/smgs/integral30x.png'
        },
        {
            name: 'Cronen C480 Pro Optic',
            image: 'attachments/smgs/cronenc480.png'
        },
        {
            name: 'Merc Thermal Optic',
            image: 'attachments/smgs/mercthermal.png'
        },
        {
            name: 'Integral Hybrid',
            image: 'attachments/smgs/integral.png'
        },
    ];


    var optic = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt4").innerHTML = "";

    if (attArr.includes(3)) {
        optic = true;
        // console.log("optic is true");
    }

    if (optic != false) {
        var ranOptic = Math.floor(Math.random() * 19) + 0;

        var opticPick = optics[ranOptic];
        // console.log(opticPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt4").innerHTML = '<b>' + "Optic -  " + '</b>' + opticPick.name + '<br>' + '<img  style="width:250px;"  src="' + opticPick.image + '">';
    }



    //Stock

    var stocks = [{
            name: 'FTAC Ultralight Hollow',
            image: 'attachments/smgs/ftacultralighthollow.png'
        },
        {
            name: 'FORGE TAC CQB Comb',
            image: 'attachments/smgs/forgetaccqbcomb.png'
        },
        {
            name: 'FSS Heavy Stock Pro',
            image: 'attachments/smgs/fssheavystockpro.png'
        },
    ];


    var stock = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt5").innerHTML = "";

    if (attArr.includes(4)) {
        stock = true;
        // console.log("stock is true");
    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * 3) + 0;

        var stockPick = stocks[ranStock];
        // console.log(stockPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt5").innerHTML = '<b>' + "Stock -  " + '</b>' + stockPick.name + '<br>' + '<img  style="width:250px;"  src="' + stockPick.image + '">';
    }




    //Underbarrel

    var underbarrels = [{
            name: 'Merc Foregrup',
            image: 'attachments/smgs/merc.png'
        },
        {
            name: 'Commando Foregrip',
            image: 'attachments/smgs/commando.png'
        },
        {
            name: 'Tactical Foregrip',
            image: 'attachments/smgs/tactical.png'
        },
        {
            name: 'Ranger Foregrip',
            image: 'attachments/smgs/ranger.png'
        },
        {
            name: 'Operator Foregrip',
            image: 'attachments/smgs/operator.png'
        },
    ];


    var underbarrel = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt6").innerHTML = "";

    if (attArr.includes(5)) {
        underbarrel = true;
        // console.log("underbarrel is true");
    }

    if (underbarrel != false) {
        var ranUnderbarrel = Math.floor(Math.random() * 5) + 0;

        var underbarrelPick = underbarrels[ranUnderbarrel];
        // console.log(underbarrelPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt6").innerHTML = '<b>' + "Underbarrel -  " + '</b>' + underbarrelPick.name + '<br>' + '<img  style="width:250px;"  src="' + underbarrelPick.image + '">';
    }







    //Ammunation

    var ammunations = [{
            name: '32 Round Mags',
            image: 'attachments/smgs/32roundmags.png'
        },
        {
            name: '5.56 NATO 30-Round Mags',
            image: 'attachments/smgs/556nato30roundmags.png'
        },
        {
            name: '5.56 NATO 60-Round Drums',
            image: 'attachments/smgs/556nato60rounddrums.png'
        },
    ];


    var ammunation = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt7").innerHTML = "";

    if (attArr.includes(6)) {
        ammunation = true;
        // console.log("ammunation is true");
    }

    if (ammunation != false) {
        var ranAmmunation = Math.floor(Math.random() * 3) + 0;

        var ammunationPick = ammunations[ranAmmunation];
        // console.log(ammunationPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt7").innerHTML = '<b>' + "Ammunation -  " + '</b>' + ammunationPick.name + '<br>' + '<img  style="width:250px;"  src="' + ammunationPick.image + '">';
    }




    //RearGrip

    var reargrips = [{
            name: 'Granulated Grip Tape',
            image: 'attachments/smgs/granulatedgriptape.png'
        },
        {
            name: 'Rubberized Grip Tape',
            image: 'attachments/smgs/rubberizedgriptape.png'
        },
        {
            name: 'Stippled Grip Tape',
            image: 'attachments/smgs/stippledgriptape.png'
        },
    ];


    var reargrip = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt8").innerHTML = "";

    if (attArr.includes(7)) {
        reargrip = true;
        // console.log("rear grip is true");
    }

    if (reargrip != false) {
        var ranRearGrip = Math.floor(Math.random() * 3) + 0;

        var rearGripPick = reargrips[ranRearGrip];
        // console.log(rearGripPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt8").innerHTML = '<b>' + "Rear Grip -  " + '</b>' + rearGripPick.name + '<br>' + '<img  style="width:250px;"  src="' + rearGripPick.image + '">';
    }


    //Perks

    var perks = [{
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
            name: 'Burst',
            image: 'attachments/perks/burst.png'
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
        // console.log("perk is true");
    }

    if (perk != false) {
        var ranPerk = Math.floor(Math.random() * 10) + 0;

        var perkPick = perks[ranPerk];
        // console.log(perkPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt9").innerHTML = '<b>' + "Perk -  " + '</b>' + perkPick.name + '<br>' + ' <img  style="width:250px;"  src="' + perkPick.image + '" "' + '">';
    }





}

function s725o() {
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
    // console.log(attArr);
    var underbarrel = false;

    //Muzzles

    var muzzles = [{
            name: 'Breacher Device',
            image: 'attachments/shotguns/725/breacherdevice.png'
        },
        {
            name: 'Flash Guard',
            image: 'attachments/shotguns/725/flashguard.png'
        },
        {
            name: 'Monolithic Suppressor',
            image: 'attachments/shotguns/725/monolithicsuppressor.png'
        },
        {
            name: 'Muzzle Brake',
            image: 'attachments/shotguns/725/muzzlebrake.png'
        },
        {
            name: 'Compensator',
            image: 'attachments/shotguns/725/compensator.png'
        },
        {
            name: 'Choke',
            image: 'attachments/shotguns/725/choke.png'
        },
        {
            name: 'Lightweight Suppressor',
            image: 'attachments/shotguns/725/lightweightsuppressor.png'
        },
        {
            name: 'Tactical Suppressor',
            image: 'attachments/shotguns/725/tacticalsuppressor.png'
        },

    ];


    var muzzle = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        muzzle = true;
        // console.log("Muzzle is true");
    }

    if (muzzle != false) {
        var ranMuzzle = Math.floor(Math.random() * 8) + 0;

        var muzzlePick = muzzles[ranMuzzle];
        // console.log(muzzlePick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt1").innerHTML = '<b>' + "Muzzle -  " + '</b>' + muzzlePick.name + '<br>' + '<img  style="width:250px;"  src="' + muzzlePick.image + '">';
    }

    //Barrel

    var barrels = [{
            name: 'Tempus Smooth Bore',
            image: 'attachments/shotguns/725/tmpussmoothbore.png'
        },
        {
            name: 'Sawed-off Barrel',
            image: 'attachments/shotguns/725/sawedoffbarrel.png'
        },
        {
            name: 'Tempus 32 Competition',
            image: 'attachments/shotguns/725/tempus32competition.png'
        },
    ];


    var barrel = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        barrel = true;
        // console.log("Barrel is true");
    }

    if (barrel != false) {
        var ranBarrel = Math.floor(Math.random() * 3) + 0;

        var barrelPick = barrels[ranBarrel];
        // console.log(barrelPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt2").innerHTML = '<b>' + "Barrel -  " + '</b>' + barrelPick.name + '<br>' + '<img  style="width:250px;"  src="' + barrelPick.image + '">';
    }




    //Laser

    var lasers = [{
            name: '1mW Laser',
            image: 'attachments/shotguns/725/1mwlaser.png'
        },
        {
            name: '5mW Laser',
            image: 'attachments/shotguns/725/5mwlaser.png'
        },
        {
            name: 'Tac Laser',
            image: 'attachments/shotguns/725/taclaser.png'
        },
    ];


    var laser = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt3").innerHTML = "";

    if (attArr.includes(2)) {
        laser = true;
        // console.log("laser is true");
    }

    if (laser != false) {
        var ranLaser = Math.floor(Math.random() * 3) + 0;

        var laserPick = lasers[ranLaser];
        // console.log(laserPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt3").innerHTML = '<b>' + "Laser -  " + '</b>' + laserPick.name + '<br>' + '<img  style="width:250px;"  src="' + laserPick.image + '">';
    }



    //Optic
    var optics = [{
            name: 'Operator Reflex Sight',
            image: 'attachments/shotguns/optics/operatorrelfexsight.png'
        },
        {
            name: 'Corp Combat Holo Sight',
            image: 'attachments/shotguns/optics/corpcombatholosight.png'
        },
        {
            name: 'Aim-Op Reflex Sight',
            image: 'attachments/shotguns/optics/aimopreflexsight.png'
        },
        {
            name: 'Cronen LP945 Mini Reflex',
            image: 'attachments/shotguns/optics/cronenlp945minireflex.png'
        },
        {
            name: 'APX5 Holographic Sight',
            image: 'attachments/shotguns/optics/apx5holographicsight.png'
        },
        {
            name: 'Scout Combat Optic',
            image: 'attachments/shotguns/optics/scoutcombatoptic.png'
        },
        {
            name: 'Viper Reflex Sight',
            image: 'attachments/shotguns/optics/viperreflexsight.png'
        },
        {
            name: 'VLK 3.0x Optic',
            image: 'attachments/shotguns/optics/vlk30xoptic.png'
        },
        {
            name: 'G.I. Mini Reflex',
            image: 'attachments/shotguns/optics/giminireflex.png'
        },
        {
            name: 'Solozero NVG Enhanced',
            image: 'attachments/shotguns/optics/solozeronvgenhanced.png'
        },
        {
            name: 'PBX Holo 7 Sight',
            image: 'attachments/shotguns/optics/pbxholo7sight.png'
        },
        {
            name: 'Monocle Reflex Sight',
            image: 'attachments/shotguns/optics/monoclereflexsight.png'
        },
        {
            name: 'Cronen C480 Pro Optic',
            image: 'attachments/shotguns/optics/cronenc480prooptic.png'
        },
        {
            name: 'Brownlee 32mm Scope',
            image: 'attachments/shotguns/optics/brownlee32mmscope.png'
        },
        {
            name: 'Solozero Optics Mini Reflex',
            image: 'attachments/shotguns/optics/solozeroopticsminireflex.png'
        },
    ];


    var optic = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt4").innerHTML = "";

    if (attArr.includes(3)) {
        optic = true;
        // console.log("optic is true");
    }

    if (optic != false) {
        var ranOptic = Math.floor(Math.random() * 15) + 0;

        var opticPick = optics[ranOptic];
        // console.log(opticPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt4").innerHTML = '<b>' + "Optic -  " + '</b>' + opticPick.name + '<br>' + '<img  style="width:250px;"  src="' + opticPick.image + '">';
    }



    //Stock

    var stocks = [{
            name: 'FTAC Equilibrium',
            image: 'attachments/shotguns/725/ftacequilibrium.png'
        },
        {
            name: 'Chronen Pro Light',
            image: 'attachments/shotguns/725/chronenprolight.png'
        },
        {
            name: 'Sawed-off Stock',
            image: 'attachments/shotguns/725/sawedoffstock.png'
        },
        {
            name: 'Tempus Sport',
            image: 'attachments/shotguns/725/tempussport.png'
        },
    ];


    var stock = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt5").innerHTML = "";

    if (attArr.includes(4)) {
        stock = true;
        // console.log("stock is true");
    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * 4) + 0;

        var stockPick = stocks[ranStock];
        // console.log(stockPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt5").innerHTML = '<b>' + "Stock -  " + '</b>' + stockPick.name + '<br>' + '<img  style="width:250px;"  src="' + stockPick.image + '">';
    }




    //Underbarrel

    var underbarrels = [{
            name: 'Merc Foregrip',
            image: 'attachments/shotguns/725/mercforegrip.png'
        },
        {
            name: 'Ranger Foregrip',
            image: 'attachments/shotguns/725/rangerforegrip.png'
        },
        {
            name: 'Commando Foregrip',
            image: 'attachments/shotguns/725/commandoforegrip.png'
        },
        {
            name: 'Tactical Foregrip',
            image: 'attachments/shotguns/725/tacticalforegrip.png'
        },
        {
            name: 'Operator Foregrip',
            image: 'attachments/shotguns/725/operatorforegrip.png'
        },
    ];


    var underbarrel = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt6").innerHTML = "";

    if (attArr.includes(5)) {
        underbarrel = true;
        // console.log("underbarrel is true");
    }

    if (underbarrel != false) {
        var ranUnderbarrel = Math.floor(Math.random() * 5) + 0;

        var underbarrelPick = underbarrels[ranUnderbarrel];
        // console.log(underbarrelPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt6").innerHTML = '<b>' + "Underbarrel -  " + '</b>' + underbarrelPick.name + '<br>' + '<img  style="width:250px;"  src="' + underbarrelPick.image + '">';
    }







    //Ammunation

    var ammunations = [{
        name: 'Slug Rounds',
        image: 'attachments/shotguns/model680/slugrounds.png'
    }, ];


    var ammunation = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt7").innerHTML = "";

    if (attArr.includes(6)) {
        ammunation = true;
        // console.log("ammunation is true");
    }

    if (ammunation != false) {
        var ranAmmunation = Math.floor(Math.random() * 1) + 0;

        var ammunationPick = ammunations[ranAmmunation];
        // console.log(ammunationPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt7").innerHTML = '<b>' + "Ammunation -  " + '</b>' + ammunationPick.name + '<br>' + '<img  style="width:250px;"  src="' + ammunationPick.image + '">';
    }

    //Guard

    var reargrips = [{
            name: 'Tempus SlimGrip',
            image: 'attachments/shotguns/725/tempusslimgrip.png'
        },
        {
            name: 'FORGE TAC Steady Grip',
            image: 'attachments/shotguns/725/forgetacsteadygrip.png'
        },
        {
            name: 'FORGE TAC Commander',
            image: 'attachments/shotguns/725/forgetaccommander.png'
        },
    ];


    var reargrip = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt8").innerHTML = "";

    if (attArr.includes(7)) {
        reargrip = true;
        // console.log("rear grip is true");
    }

    if (reargrip != false) {
        var ranRearGrip = Math.floor(Math.random() * 3) + 0;

        var rearGripPick = reargrips[ranRearGrip];
        // console.log(rearGripPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt8").innerHTML = '<b>' + "Guard -  " + '</b>' + rearGripPick.name + '<br>' + '<img  style="width:250px;"  src="' + rearGripPick.image + '">';
    }

    //Perks

    var perks = [{
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
    ];


    var perk = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt9").innerHTML = "";

    if (attArr.includes(8)) {
        perk = true;
        // console.log("perk is true");
    }

    if (perk != false) {
        var ranPerk = Math.floor(Math.random() * 9) + 0;

        var perkPick = perks[ranPerk];
        // console.log(perkPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt9").innerHTML = '<b>' + "Perk -  " + '</b>' + perkPick.name + '<br>' + ' <img  style="width:250px;"  src="' + perkPick.image + '" "' + '">';
    }





}

function rioto() {

    document.getElementById("secondaryAttH2").innerHTML = "None";
    document.getElementById("secondaryAtt1").innerHTML = ""
    document.getElementById("secondaryAtt2").innerHTML = ""
    document.getElementById("secondaryAtt3").innerHTML = ""
    document.getElementById("secondaryAtt4").innerHTML = ""
    document.getElementById("secondaryAtt5").innerHTML = ""
    document.getElementById("secondaryAtt6").innerHTML = ""
    document.getElementById("secondaryAtt7").innerHTML = ""
    document.getElementById("secondaryAtt8").innerHTML = ""
    document.getElementById("secondaryAtt9").innerHTML = ""
}