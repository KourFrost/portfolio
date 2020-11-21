var units = {
    terran: [
        {
            unitName: "Banshee",
            "Attacks Buildings": 1,
            IsAir: 1,
            teir: 2,
        },
        {
            unitName: "Battlecruiser",
            "Attacks Buildings": 1,
            IsAir: 1,
            teir: 3,
        },
        {
            unitName: "Cyclone",
            "Attacks Buildings": 1,
            IsAir: 0,
            teir: 2,
        },
        {
            unitName: "Ghost",
            "Attacks Buildings": 1,
            IsAir: 0,
            teir: 2,
        },
        {
            unitName: "Hellion/Hellbat",
            "Attacks Buildings": 1,
            IsAir: 0,
            teir: 1,
        },
        {
            unitName: "Marauder",
            "Attacks Buildings": 1,
            IsAir: 0,
            teir: 1,
        },
        {
            unitName: "Marine",
            "Attacks Buildings": 1,
            IsAir: 0,
            teir: 1,
        },
        {
            unitName: "Raven",
            "Attacks Buildings": 1,
            IsAir: 1,
            teir: 2,
        },
        {
            unitName: "Reaper",
            "Attacks Buildings": 1,
            IsAir: 0,
            teir: 1,
        },
        {
            unitName: "Seige Tank",
            "Attacks Buildings": 1,
            IsAir: 0,
            teir: 2,
        },
        {
            unitName: "Thor",
            "Attacks Buildings": 1,
            IsAir: 0,
            teir: 3,
        },
        {
            unitName: "Viking",
            "Attacks Buildings": 1,
            IsAir: 1,
            teir: 2,
        },
        {
            unitName: "Widow Mine",
            "Attacks Buildings": 0,
            IsAir: 0,
            teir: 2,
        },
        {
            unitName: "Liberator",
            "Attacks Buildings": 0,
            IsAir: 1,
            teir: 2,
        },
        {
            unitName: "Medivac",
            "Attacks Buildings": 0,
            IsAir: 1,
            teir: 2,
        },
    ],
    zerg: [
        {
            unitName: "Baneling",
            "Attacks Buildings": 1,
            IsAir: 0,
            teir: 1,
        },
        {
            unitName: "Brood Lord",
            "Attacks Buildings": 1,
            IsAir: 1,
            teir: 3,
        },
        {
            unitName: "Corruptor",
            "Attacks Buildings": 1,
            IsAir: 1,
            teir: 2,
        },
        {
            unitName: "Hydralisk",
            "Attacks Buildings": 1,
            IsAir: 0,
            teir: 2,
        },
        {
            unitName: "Lurker",
            "Attacks Buildings": 1,
            IsAir: 0,
            teir: 2,
        },
        {
            unitName: "Mutalisk",
            "Attacks Buildings": 1,
            IsAir: 1,
            teir: 2,
        },
        {
            unitName: "Queen",
            "Attacks Buildings": 1,
            IsAir: 0,
            teir: 1,
        },
        {
            unitName: "Ravager",
            "Attacks Buildings": 1,
            IsAir: 0,
            teir: 2,
        },
        {
            unitName: "Roach",
            "Attacks Buildings": 1,
            IsAir: 0,
            teir: 1,
        },
        {
            unitName: "Swarm Host",
            "Attacks Buildings": 1,
            IsAir: 0,
            teir: 2,
        },
        {
            unitName: "Ultralisk",
            "Attacks Buildings": 1,
            IsAir: 0,
            teir: 3,
        },
        {
            unitName: "Zergling",
            "Attacks Buildings": 1,
            IsAir: 0,
            teir: 1,
        },
        {
            unitName: "Viper",
            "Attacks Buildings": 0,
            IsAir: 1,
            teir: 3,
        },
        {
            unitName: "Infestor",
            "Attacks Buildings": 0,
            IsAir: 0,
            teir: 2,
        },
    ],
    protoss: [
        {
            unitName: "Adept",
            "Attacks Buildings": 1,
            IsAir: 0,
            teir: 1,
        },
        {
            unitName: "Archon",
            "Attacks Buildings": 1,
            IsAir: 0,
            teir: 2,
        },
        {
            unitName: "Carrier",
            "Attacks Buildings": 1,
            IsAir: 1,
            teir: 3,
        },
        {
            unitName: "Colossus",
            "Attacks Buildings": 1,
            IsAir: 0,
            teir: 3,
        },
        {
            unitName: "Dark Templar",
            "Attacks Buildings": 1,
            IsAir: 0,
            teir: 2,
        },
        {
            unitName: "High Templar",
            "Attacks Buildings": 1,
            IsAir: 0,
            teir: 2,
        },
        {
            unitName: "Immortal",
            "Attacks Buildings": 1,
            IsAir: 0,
            teir: 2,
        },
        {
            unitName: "Oracle",
            "Attacks Buildings": 1,
            IsAir: 1,
            teir: 2,
        },
        {
            unitName: "Sentry",
            "Attacks Buildings": 1,
            IsAir: 0,
            teir: 1,
        },
        {
            unitName: "Stalker",
            "Attacks Buildings": 1,
            IsAir: 0,
            teir: 1,
        },
        {
            unitName: "Tempest",
            "Attacks Buildings": 1,
            IsAir: 1,
            teir: 3,
        },
        {
            unitName: "Void Ray",
            "Attacks Buildings": 1,
            IsAir: 1,
            teir: 2,
        },
        {
            unitName: "Zealot",
            "Attacks Buildings": 1,
            IsAir: 0,
            teir: 1,
        },
        {
            unitName: "Phoenix",
            "Attacks Buildings": 0,
            IsAir: 1,
            teir: 2,
        },
        {
            unitName: "Distruptor",
            "Attacks Buildings": 0,
            IsAir: 0,
            teir: 3,
        },
    ],
};

//Standardize the intial paramaters
function onStart() {
    document.getElementById("AB").checked = false;
    document.getElementById("GU").checked = true;
    document.getElementById("AU").checked = true;
    document.getElementById("teir1").checked = true;
    document.getElementById("teir2").checked = true;
    document.getElementById("teir3").checked = true;
    document.getElementById("MV").checked = false;

    // genrateUnits();
    genrateUnitsPara();
}

function genrateUnitsPara() {
    let AB = document.getElementById("AB").checked;
    let guVal = document.getElementById("GU").checked;
    let auVal = document.getElementById("AU").checked;
    let teir1 = document.getElementById("teir1").checked;
    let teir2 = document.getElementById("teir2").checked;
    let teir3 = document.getElementById("teir3").checked;
    let MV = document.getElementById("MV").checked;

    availableUnits = units;
    ATU = units.terran;
    AZU = units.zerg;
    APU = units.protoss;

    // remove Unts that cant destroy buildsings
    if (AB) {
        ATU = ATU.filter(function (item) {
            return item["Attacks Buildings"] == 1;
        });

        AZU = AZU.filter(function (item) {
            return item["Attacks Buildings"] == 1;
        });

        APU = APU.filter(function (item) {
            return item["Attacks Buildings"] == 1;
        });
    }

    // remove Air Units
    if (!auVal) {
        ATU = ATU.filter(function (item) {
            return item.IsAir == 0;
        });

        AZU = AZU.filter(function (item) {
            return item.IsAir == 0;
        });

        APU = APU.filter(function (item) {
            return item.IsAir == 0;
        });
    }
    // remove Ground Units
    if (!guVal) {
        ATU = ATU.filter(function (item) {
            return item.IsAir == 1;
        });

        AZU = AZU.filter(function (item) {
            return item.IsAir == 1;
        });

        APU = APU.filter(function (item) {
            return item.IsAir == 1;
        });
    }

    if (!teir1) {
        let teirval = 1;
        ATU = ATU.filter(function (item) {
            return item.teir !== teirval;
        });

        AZU = AZU.filter(function (item) {
            return item.teir !== teirval;
        });

        APU = APU.filter(function (item) {
            return item.teir !== teirval;
        });
    }
    if (!teir2) {
        let teirval = 2;
        ATU = ATU.filter(function (item) {
            return item.teir !== teirval;
        });

        AZU = AZU.filter(function (item) {
            return item.teir !== teirval;
        });

        APU = APU.filter(function (item) {
            return item.teir !== teirval;
        });
    }
    if (!teir3) {
        let teirval = 3;
        ATU = ATU.filter(function (item) {
            return item.teir !== teirval;
        });

        AZU = AZU.filter(function (item) {
            return item.teir !== teirval;
        });

        APU = APU.filter(function (item) {
            return item.teir !== teirval;
        });
    }

    if (!MV) {
        ATU = ATU.filter(function (item) {
            return item.unitName !== "Medivac";
        });

        AZU = AZU.filter(function (item) {
            return item.unitName !== "Viper";
        });
    }

    let t = Math.floor(Math.random() * ATU.length);
    let z = Math.floor(Math.random() * AZU.length);
    let p = Math.floor(Math.random() * APU.length);
    console.log("New Roll");
    console.log("terran");
    console.log(ATU);
    console.log("Zerg");
    console.log(AZU);
    console.log("Protoss");
    console.log(APU);
    document.getElementById("terran").textContent = ATU[t].unitName;
    document.getElementById("zerg").textContent = AZU[z].unitName;
    document.getElementById("protoss").textContent = APU[p].unitName;
}

function genrateUnits() {
    let t = Math.floor(Math.random() * terranUnits.length);
    let z = Math.floor(Math.random() * zergUnits.length);
    let p = Math.floor(Math.random() * protossUnits.length);
    document.getElementById("terran").textContent = terranUnits[t];
    document.getElementById("zerg").textContent = zergUnits[z];
    document.getElementById("protoss").textContent = protossUnits[p];
}

function collapseDiv() {
    document.getElementById("rulebox").hidden = !document.getElementById(
        "rulebox"
    ).hidden;
}

function groundUnitsToggle() {
    let guVal = document.getElementById("GU").checked;
    let auVal = document.getElementById("AU").checked;

    if (!guVal && !auVal) {
        document.getElementById("AU").checked = true;
    }
}

function airUnitsToggle() {
    let guVal = document.getElementById("GU").checked;
    let auVal = document.getElementById("AU").checked;

    if (!guVal && !auVal) {
        document.getElementById("GU").checked = true;
    }
}

function teir1toggle(teir) {
    let teir1 = document.getElementById("teir1").checked;
    let teir2 = document.getElementById("teir2").checked;
    let teir3 = document.getElementById("teir3").checked;

    if (!teir2 && !teir3) {
        document.getElementById("AU").checked = false;
        airUnitsToggle();
    }

    if (!teir1 && !teir2 && !teir3) {
        if (teir == 1) {
            document.getElementById("teir2").checked = true;
        } else {
            document.getElementById("teir1").checked = true;
        }
    }
}

function supportToggle() {
    let AB = document.getElementById("AB").checked;
    let MV = document.getElementById("MV").checked;

    if (AB && MV) {
        document.getElementById("AB").checked = false;
    }
}

function AttackGroundToggle() {
    let AB = document.getElementById("AB").checked;
    let MV = document.getElementById("MV").checked;

    if (AB && MV) {
        document.getElementById("MV").checked = false;
    }
}

function profanityToggle() {
    let val = document.getElementById("pro").checked;
    if (val) {
        setTimeout(function () {
            document.getElementById("pro").checked = false;
        }, 500);
    }
}
