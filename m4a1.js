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






        }
        