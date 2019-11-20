function m4a1(){
        var numAttachments = [0, 1, 2, 3, 4, 5, 7, 8, 9];
        var totalCount = 9;
        var ran = Math.floor(Math.random() * 5) + 0;
        var attArr = [];
        for (var i = 0; i <= ran; i++) {
        var rand = numAttachments[Math.floor(Math.random() * totalCount)];
        attArr.push(rand);
        numAttachments.splice(rand,1);
        totalCount--;
        }
        console.log(attArr);

        //Muzzles

        var muzzles = [
            { name: 'Flash Guard', image: 'attachments/m4a1/muzzles/flashguard.png' }, 
            { name: 'Breacher Device', image: 'attachments/m4a1/muzzles/breacherdevice.png' }, 
            { name: 'Tactical Suppressor', image: 'attachments/m4a1/muzzles/tacticalsuppressor.png' },
            { name: 'Muzzle Brake', image: 'attachments/m4a1/muzzles/muzzlebrake.png' },
            { name: 'Lightweight Suppressor', image: 'attachments/m4a1/muzzles/lightweightsuppressor.png' },
            { name: 'Compensator', image: 'attachments/m4a1/muzzles/compensator.png' },
            { name: 'Monolithic Suppressor', image: 'attachments/m4a1/muzzles/monolithicsuppressor.png' }
          ];


        var muzzle = false;
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt1").innerHTML = "";

        if (attArr.includes(0)){
            muzzle = true;
            console.log("Muzzle is true");
        }

        if (muzzle != false){
            var ranMuzzle = Math.floor(Math.random() * 7) + 0;
        
            var muzzlePick = muzzles[ranMuzzle];
            console.log(muzzlePick.name);
            document.getElementById("primaryAttH2").innerHTML = "";
            document.getElementById("primaryAtt1").innerHTML = "Muzzle " + '<br>' + '<img src="'+muzzlePick.image+'">';
        }

         //Barrel

         var barrels = [
            { name: 'FFS 11.5 Commando', image: 'attachments/m4a1/barrels/ffs115.png' }, 
            { name: 'Stock M16 Grenadier', image: 'attachments/m4a1/barrels/stockm16.png' }, 
            { name: 'FFS 14.5 Tac lite', image: 'attachments/m4a1/barrels/ffs145.png' },
            { name: 'Corvus Custom Marksman', image: 'attachments/m4a1/barrels/corvus.png' },
            { name: 'FFS 12.4 Predator', image: 'attachments/m4a1/barrels/ffs124.png' },
          ];


        var barrel = false;
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt2").innerHTML = "";

        if (attArr.includes(1)){
            barrel = true;
            console.log("Barrel is true");
        }

        if (barrel != false){
            var ranBarrel = Math.floor(Math.random() * 5) + 0;
        
            var barrelPick = barrels[ranBarrel];
            console.log(barrelPick.name);
            document.getElementById("primaryAttH2").innerHTML = "";
            document.getElementById("primaryAtt2").innerHTML = "Barrel " + '<br>' + '<img src="'+barrelPick.image+'">';
        }

    


        //Laser

        var lasers = [
            { name: '1mW Laser', image: 'attachments/m4a1/' }, 
            { name: '5mW Laser', image: 'attachments/m4a1/' }, 
            { name: 'Tac Laser', image: 'attachments/m4a1/' }
          ];


        var laser = false;
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt3").innerHTML = "";

        if (attArr.includes(2)){
            laser = true;
            console.log("laser is true");
        }

        if (laser != false){
            var ranLaser = Math.floor(Math.random() * 3) + 0;
        
            var laserPick = lasers[ranLaser];
            console.log(laserPick.name);
            document.getElementById("primaryAttH2").innerHTML = "";
            document.getElementById("primaryAtt3").innerHTML = "Laser " + '<br>' + '<img src="'+laserPick.image+'">';
        }



        //Optic

        var optics = [
            { name: 'Cronen LP945 Mini Reflex', image: 'attachments/m4a1/' },
            { name: 'Corp Combat Holo Sight', image: 'attachments/m4a1/' }, 
            { name: 'Operator Reflex Sight', image: 'attachments/m4a1/' },
            { name: 'Scout Combat Optic', image: 'attachments/m4a1/' },
            { name: '4.0x Flip Hybrid', image: 'attachments/m4a1/' },
            { name: 'Aim-Op Reflex Sight', image: 'attachments/m4a1/' },
            { name: 'APx5 Holographic Sight', image: 'attachments/m4a1/' },
            { name: 'Integral Hybrid', image: 'attachments/m4a1/' },
            { name: 'Solozero NVG Enhanced', image: 'attachments/m4a1/' },
            { name: 'VLK 3.0x Optic', image: 'attachments/m4a1/' },
            { name: 'Sniper Scope', image: 'attachments/m4a1/' },
            { name: 'Viper Reflex Sight', image: 'attachments/m4a1/' },
            { name: 'G.I. Mini Reflex', image: 'attachments/m4a1/' },
            { name: 'PBX Holo 7 Sight', image: 'attachments/m4a1/' },
            { name: 'Cronen C480 Pro Optic', image: 'attachments/m4a1/' },
            { name: 'Monocle Reflex Sight', image: 'attachments/m4a1/' },
            { name: 'Variable Zoom Scope', image: 'attachments/m4a1/' },
            { name: 'Canted Hybrid', image: 'attachments/m4a1/' },
            { name: 'Merc Thermal Optic', image: 'attachments/m4a1/' }, 
            { name: 'Thermal Hybrid', image: 'attachments/m4a1/' }
          ];


        var optic = false;
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt4").innerHTML = "";

        if (attArr.includes(3)){
            optic = true;
            console.log("optic is true");
        }

        if (optic != false){
            var ranOptic = Math.floor(Math.random() * 3) + 0;
        
            var opticPick = optics[ranOptic];
            console.log(opticPick.name);
            document.getElementById("primaryAttH2").innerHTML = "";
            document.getElementById("primaryAtt4").innerHTML = "Optic " + '<br>' + '<img src="'+opticPick.image+'">';
        }

        }
        