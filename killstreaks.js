//Killstreak Sections
// --------- 3
//Personal Radar
//Shield Turret
var ks3 = [{
    name: 'Personal Radar',
    image: 'killstreaks/personalradar.png'
  },
  {
    name: 'Shield Turret',
    image: 'killstreaks/shieldturret.png'
  }
];

// --------- 4
//Counter UAV
//UAV
//Care Package
var ks4 = [{
    name: 'Counter UAV',
    image: 'killstreaks/counteruav.png'
  },
  {
    name: 'UAV',
    image: 'killstreaks/uav.png'
  },
  {
    name: 'Care Package',
    image: 'killstreaks/carepackage.png'
  },
];
// --------- 5
//Cluster Strike
//Cruise Missile
//Precision Airstrike
var ks5 = [{
    name: 'Cluster Strike',
    image: 'killstreaks/clusterstrike.png'
  },
  {
    name: 'Cruise Missile',
    image: 'killstreaks/cruisemissile.png'
  },
  {
    name: 'Precision Airstrike',
    image: 'killstreaks/precisionairstrike.png'
  },
];
// --------- 7
//Infantry Assault Vehicle
//Sentry Gun
//Wheelson
var ks7 = [{
    name: 'Infantry Assault Vehicle',
    image: 'killstreaks/infantry.png'
  },
  {
    name: 'Sentry Gun',
    image: 'killstreaks/sentrygun.png'
  },
  {
    name: 'Wheelson',
    image: 'killstreaks/wheelson.png'
  },
];
// --------- 8
//Emergency Airdrop
//VTOL Jet
var ks8 = [{
    name: 'Emergency Airdrop',
    image: 'killstreaks/emergency.png'
  },
  {
    name: 'VTOL Jet',
    image: 'killstreaks/vtoljet.png'
  }
];

// --------- 10
//White Phosphorus
//Chopper Gunner
var ks10 = [{
    name: 'White Phosphorus',
    image: 'killstreaks/white.png'
  },
  {
    name: 'Chopper Gunner',
    image: 'killstreaks/choppergunner.png'
  }
];

// --------- 11
//Support Helo
var ks11 = [{
  name: 'Support Helo',
  image: 'killstreaks/white.png'
}];

// --------- 12
//Gunship
//Advanced UAV
var ks12 = [{
    name: 'Gunship',
    image: 'killstreaks/gunship.png'
  },
  {
    name: 'Advanced UAV',
    image: 'killstreaks/advanced.png'
  }
];
// --------- 15
//Juggernaut
var ks15 = [{
  name: 'Juggernaut',
  image: 'killstreaks/juggernaut.png'
}];


// var personalRadar = false;
// var shieldTurret = false;
// var counterUav = false;
// var uav = false;
// var carePackage = false;
// var clusterStrike = false;
// var cruiseMissile = false;
// var precisionAirstrike = false;
// var infantryAssaultVehicle = false;
// var sentryGun = false;
// var wheelson = false;
// var emergencyAirdrop = false;
// var vtolJet = false;
// var whitePhosphorus = false;
// var chopperGunner = false;
// var supportHelo = false;
// var gunship = false;
// var advancedUav = false;
// var juggernaut = false;


function randomKillstreaks() {
  var numKsSections = [0, 1, 2, 3, 4, 5, 6, 7, 8]
  var totalSections = 9;
  var ran = 2;
  var ksArr = [];
 var count = 0;
  while(count != 3){
  // for (var i = 0; i <= 2; i++) {
    var rand = numKsSections[Math.floor(Math.random() * totalSections)];
    ksArr.push(rand);
    for( var i = 0; i < numKsSections.length; i++){ 
      if ( numKsSections[i] === rand) {
        numKsSections.splice(i, 1); 
      }
    }
    // numKsSections.splice(rand, 1);
    totalSections--;
    //console.log("The KS Rand is " + " " + rand);
    //console.log("The KS Num array is " + " " + numKsSections);
    count++;
  }

  // var rand = numKsSections[Math.floor(Math.random() * totalSections)];
  // ksArr.push(rand);
  // numKsSections.splice(rand, 1);
  // totalSections--;
  // console.log("The KS Rand is " + " " + rand);
  // console.log("The KS Num array is " + " " + numKsSections);

  // var rand = numKsSections[Math.floor(Math.random() * totalSections)];
  // ksArr.push(rand);
  // numKsSections.splice(rand-1, 1);
  // totalSections--;
  // console.log("The KS Rand is " + " " + rand);
  // console.log("The KS Num array is " + " " + numKsSections);


  // var rand = numKsSections[Math.floor(Math.random() * totalSections)];
  // ksArr.push(rand);
  // numKsSections.splice(rand-2, 1);
  // totalSections--;
  // console.log("The KS Rand is " + " " + rand);
  // console.log("The KS Num array is " + " " + numKsSections);

  // console.log(ksArr);

  if (ksArr.includes(0)) {
    //console.log("ks3");

    var ks3Ran = Math.floor(Math.random() * 2) + 0;

    var ks3Pick = ks3[ks3Ran];

    if (ks3Pick.name == "Personal Radar") {
      document.getElementById("ks1").innerHTML = '<img class="ksimage" src="killstreaks/colored/personalradar.png">';
    }

    if (ks3Pick.name == "Shield Turret") {
      document.getElementById("ks2").innerHTML = '<img class="ksimage" src="killstreaks/colored/shieldturret.png">';
    }

  }

  if (ksArr.includes(1)) {
    //console.log("ks4");
    var ks4Ran = Math.floor(Math.random() * 3) + 0;

    var ks4Pick = ks4[ks4Ran];

    if (ks4Pick.name == "Counter UAV") {
      document.getElementById("ks3").innerHTML = '<img class="ksimage" src="killstreaks/colored/counteruav.png">';
    }

    if (ks4Pick.name == "UAV") {
      document.getElementById("ks4").innerHTML = '<img class="ksimage" src="killstreaks/colored/uav.png">';
    }

    if (ks4Pick.name == "Care Package") {
      document.getElementById("ks5").innerHTML = '<img class="ksimage" src="killstreaks/colored/carepackage.png">';
    }
  }

  if (ksArr.includes(2)) {
    //console.log("ks5");
    var ks5Ran = Math.floor(Math.random() * 3) + 0;

    var ks5Pick = ks5[ks5Ran];

    if (ks5Pick.name == "Cluster Strike") {
      document.getElementById("ks6").innerHTML = '<img class="ksimage" src="killstreaks/colored/clusterstrike.png">';
    }

    if (ks5Pick.name == "Cruise Missile") {
      document.getElementById("ks7").innerHTML = '<img class="ksimage" src="killstreaks/colored/cruisemissile.png">';
    }

    if (ks5Pick.name == "Precision Airstrike") {
      document.getElementById("ks8").innerHTML = '<img class="ksimage" src="killstreaks/colored/precisionairstrike.png">';
    }
  }

  if (ksArr.includes(3)) {
    //console.log("ks7");
    var ks7Ran = Math.floor(Math.random() * 3) + 0;

    var ks7Pick = ks7[ks7Ran];

    if (ks7Pick.name == "Infantry Assault Vehicle") {
      document.getElementById("ks9").innerHTML = '<img class="ksimage" src="killstreaks/colored/infantry.png">';
    }

    if (ks7Pick.name == "Sentry Gun") {
      document.getElementById("ks10").innerHTML = '<img class="ksimage" src="killstreaks/colored/sentrygun.png">';
    }

    if (ks7Pick.name == "Wheelson") {
      document.getElementById("ks11").innerHTML = '<img class="ksimage" src="killstreaks/colored/wheelson.png">';
    }
  }

  if (ksArr.includes(4)) {
    //console.log("ks8");
    var ks8Ran = Math.floor(Math.random() * 2) + 0;

    var ks8Pick = ks8[ks8Ran];

    if (ks8Pick.name == "Emergency Airdrop") {
      document.getElementById("ks12").innerHTML = '<img class="ksimage" src="killstreaks/colored/emercencyairdrop.png">';
    }

    if (ks8Pick.name == "VTOL Jet") {
      document.getElementById("ks13").innerHTML = '<img class="ksimage" src="killstreaks/colored/vtoljet.png">';
    }
  }

  if (ksArr.includes(5)) {
    //console.log("ks10");
    var ks10Ran = Math.floor(Math.random() * 2) + 0;

    var ks10Pick = ks10[ks10Ran];

    if (ks10Pick.name == "White Phosphorus") {
      document.getElementById("ks14").innerHTML = '<img class="ksimage" src="killstreaks/colored/white.png">';
    }

    if (ks10Pick.name == "Chopper Gunner") {
      document.getElementById("ks15").innerHTML = '<img class="ksimage" src="killstreaks/colored/choppergunner.png">';
    }


  }

  if (ksArr.includes(6)) {
    //console.log("ks11");
    var ks11Ran = Math.floor(Math.random() * 1) + 0;

    var ks11Pick = ks11[ks11Ran];

    if (ks11Pick.name == "Support Helo") {
      document.getElementById("ks16").innerHTML = '<img class="ksimage" src="killstreaks/colored/supporthelo.png">';
    }
  }

  if (ksArr.includes(7)) {
    //console.log("ks12");
    var ks12Ran = Math.floor(Math.random() * 2) + 0;

    var ks12Pick = ks12[ks12Ran];

    if (ks12Pick.name == "Gunship") {
      document.getElementById("ks17").innerHTML = '<img class="ksimage" src="killstreaks/colored/gunship.png">';
    }
    if (ks12Pick.name == "Advanced UAV") {
      document.getElementById("ks18").innerHTML = '<img class="ksimage" src="killstreaks/colored/advanceduav.png">';
    }

  }

  if (ksArr.includes(8)) {
    //console.log("ks15");
    var ks15Ran = Math.floor(Math.random() * 1) + 0;

    var ks15Pick = ks15[ks15Ran];

    if (ks15Pick.name == "Juggernaut") {
      document.getElementById("ks19").innerHTML = '<img class="ksimage" src="killstreaks/colored/juggernaut.png">';
    }

  }


}
