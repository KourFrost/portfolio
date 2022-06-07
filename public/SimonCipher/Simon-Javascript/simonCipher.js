
function simonBox(PT, KEY) {
    var halfVal = PT.length/2;

    let PT1 = PT.substring(0, halfVal);
    let PT2 = PT.substring(halfVal);

    let LS1 = leftCircularShift(PT1, 1);
    let LS8 = leftCircularShift(PT1, 8);
    let LS2 = leftCircularShift(PT1, 2);

    let And1 = bitwiseAND(LS1, LS8);

    let XOR1 = bitwiseXOR(And1, LS2);
    let XOR2 = bitwiseXOR(XOR1, PT2);
    let XOR3 = bitwiseXOR(XOR2, KEY);


    let CT = XOR3 + PT1;
    return CT;
}

module.exports.simonBox = simonBox;

function leftCircularShift(str, shifts){
    return str.substring(shifts)+str.substring(0, shifts);
}

module.exports.leftCircularShift = leftCircularShift;

function bitwiseAND(str1, str2){
    let returnStr = "";
    for (let i = 0; i < str1.length; i++){
        if(str1[i] == "1" && str2[i] == "1"){
            returnStr += "1";
        }else{
            returnStr += "0";
        }
    }
    return returnStr;
}
module.exports.bitwiseAND = bitwiseAND;

function bitwiseXOR(str1, str2){
    let returnStr = "";
    for (let i = 0; i < str1.length; i++){
        if(str1[i] != str2[i]){
            returnStr += "1";
        }else{
            returnStr += "0";
        }
    }
    return returnStr;
}
module.exports.bitwiseXOR = bitwiseXOR;

