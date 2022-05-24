function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("a2").innerHTML = ((valNum - 32) / 1.8) + 273.15;
}


function tempConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("a3").innerHTML = ((valNum - 273.15) * 1.8) + 32;
}


function temperatConvertor(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("a4").innerHTML = (valNum * 1.8) + 32;
}


function tconvertor(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("a5").innerHTML = (valNum - 32) / 1.8;
}

function TC(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("a6").innerHTML = valNum + 273.15;
}

function temCon(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("a1").innerHTML = valNum - 273.15;
}