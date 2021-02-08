var billAmt, serviceQuality, numPeople;
function calcTip() {

    billAmt = document.getElementById("billAmt").value;
    serviceQuality = document.getElementById("serviceQuality").value;
    numPeople = document.getElementById("numPeople").value;

    if (billAmt == "" || serviceQuality == 0){
        alert("Please Enter Values.");
        return;
    }

    if (numPeople == "" || numPeople <= 1){
        numPeople = 1;
        document.getElementById("each").style.display = "none";
    }

    else {
        document.getElementById("each").style.display = "block";
    }

    var total = (billAmt * serviceQuality)/numPeople;
    total = Math.round(total * 100) / 100;
    total.toFixed(2);

    document.getElementById("tip").style.display = "block";
    document.getElementById("tip").innerHTML = `$${total} Per Person.`;

}

document.getElementById("tip").style.display;
document.getElementById("each").style.background;

document.getElementById("calcTip").onclick = function() {
    calcTip();
};

function reset() {
    document.getElementById("billAmt").value = "";
    document.getElementById("serviceQuality").value = "0";
    document.getElementById("numPeople").value = "";
    document.getElementById("tip").innerHTML = "";
}