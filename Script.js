
// Sip section controls to manipulate values on change

// This will change the value of Monthly investment amount
function ChangeValue() {

    var slider = document.getElementById("MonthlyInvetmentSlider").value;
    var output = document.getElementById("value");

    output.innerHTML = slider;
    Calculation()


}

// This will change the value of input Monthly investment 
function ChangeTextValue() {
    var output = document.getElementById("MonthlyInvetmentSlider").value;

    document.getElementById("MonthlyInvetment").value = output
    Calculation()

}

// This will change the value of Slider on change of input 
function ChangeSliderValue() {

    var inputText = document.getElementById("MonthlyInvetment")
    if (inputText.value < 100) {
        document.getElementById("MonthlyInvetment").value = 100;
    }
    var inputText = document.getElementById("MonthlyInvetment")
    if (inputText.value > 100000) {
        document.getElementById("MonthlyInvetment").value = 100000;
    }




    var TextInput = document.getElementById("MonthlyInvetment").value

    document.getElementById("MonthlyInvetmentSlider").value = TextInput
    document.getElementById("value").innerHTML = TextInput
    Calculation()


}






function ERRChangeValue() {

    var slider = document.getElementById("ExpectedReturnSlider").value;
    var output = document.getElementById("ExpectedRatevalue");

    output.innerHTML = slider;
    Calculation()


}


function ERRChangeTextValue() {
    var output = document.getElementById("ExpectedReturnSlider").value;

    document.getElementById("ExpectedReturn").value = output
    Calculation()

}


function ERRChangeSliderValue() {


    var inputText = document.getElementById("ExpectedReturn")
    if (inputText.value < 0) {
        document.getElementById("ExpectedReturn").value = 0;
    }



    var TextInput = document.getElementById("ExpectedReturn").value

    document.getElementById("ExpectedReturnSlider").value = TextInput
    document.getElementById("ExpectedRatevalue").innerHTML = TextInput
    Calculation()
}





function TPChangeValue() {

    var slider = document.getElementById("TimePeriodSlider").value;
    var output = document.getElementById("TimePeriodvalue");

    output.innerHTML = slider;
    Calculation()

}


function TPChangeTextValue() {
    var output = document.getElementById("TimePeriodSlider").value;

    document.getElementById("TimePeriod").value = output
    Calculation()

}


function TPChangeSliderValue() {

    
    var inputText = document.getElementById("TimePeriod")
    if (inputText.value < 0) {
        document.getElementById("TimePeriod").value = 0;
    }

    var TextInput = document.getElementById("TimePeriod").value

    document.getElementById("TimePeriodSlider").value = TextInput
    document.getElementById("TimePeriodvalue").innerHTML = TextInput
    Calculation()
}



// Calculation for sip result section 

function Calculation() {
    debugger
    document.getElementById("InvestedAmountvalue").innerHTML = (((document.getElementById("MonthlyInvetmentSlider").value) * 12) * document.getElementById("TimePeriodSlider").value)


    document.getElementById("Totalvalue").innerHTML =
        Math.ceil(
            (
                (
                    document.getElementById("MonthlyInvetmentSlider").value
                ) *
                [(
                    Math.pow(
                        (1 + ((document.getElementById("ExpectedReturnSlider").value / 12) / 100)),
                        (document.getElementById("TimePeriodSlider").value * 12)
                    ) - 1
                ) /
                    (document.getElementById("ExpectedReturnSlider").value / 12)
                ]

                * (

                    1 + ((document.getElementById("ExpectedReturnSlider").value / 12) / 100)
                )
                * 100
            )
        )

        
    if (isNaN(document.getElementById("Totalvalue").innerHTML)){ 
        document.getElementById("Totalvalue").innerHTML  = document.getElementById("InvestedAmountvalue").innerHTML;
        
    }

    document.getElementById("returnvalue").innerHTML = document.getElementById("Totalvalue").innerHTML - document.getElementById("InvestedAmountvalue").innerHTML
    updatechart()

}










//lumpsum result calculations


//future value = (invested amount)((1+(Rate of return %))^((years of investment)) )
function LCalculation() {
    // Invested Amount
    debugger
    var iA = document.getElementById("LumpsumInvetment").value
    // Rate of Return
    var rr = document.getElementById("LExpectedReturn").value
    // years
    var n = document.getElementById("LTimePeriod").value
    var tem = iA * (Math.pow((1 + (rr / 100)), (n)))
    var totalValue = Math.ceil(tem)

    document.getElementById("Totalvalue").innerHTML = totalValue

    document.getElementById("InvestedAmountvalue").innerHTML = iA

    document.getElementById("returnvalue").innerHTML = totalValue - iA

    updatechart()
}















// Piechart controller




var x = document.getElementById("InvestedAmountvalue")
var y = document.getElementById("returnvalue")


var xValues = ["Invested Amount", "Est. Returns"];
var yValues = [x.innerHTML, y.innerHTML];
var barColors = [
    "#FFF945",
    "#45FF65",
];

var chartmy = new Chart("myChart", {
    type: "doughnut",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            data: yValues
        }],

    },

    options: {
        legend: {
            position: 'bottom',

        }



    }

});



function updatechart() {
    var updatevalues = [x.innerHTML, y.innerHTML];
    chartmy.data.datasets[0].data = updatevalues;
    chartmy.update();
}

























// Sip section controls to manipulate values on change

// This will change the value of Monthly investment amount


function LChangeValue() {
    // debugger
    var slider = document.getElementById("LumpsumInvetmentSlider").value;
    var output = document.getElementById("Lvalue");

    output.innerHTML = slider;
    LCalculation()


}


function LChangeTextValue() {
    // debugger
    var output = document.getElementById("LumpsumInvetmentSlider").value;

    document.getElementById("LumpsumInvetment").value = output
    LCalculation()

}


function LChangeSliderValue() {

    var inputText = document.getElementById("LumpsumInvetment")
    if (inputText.value < 10000) {
        document.getElementById("LumpsumInvetment").value = 10000;
    }
    var inputText = document.getElementById("LumpsumInvetment")
    if (inputText.value > 10000000) {
        document.getElementById("LumpsumInvetment").value = 10000000;
    }




    var TextInput = document.getElementById("LumpsumInvetment").value

    document.getElementById("LumpsumInvetmentSlider").value = TextInput
    document.getElementById("Lvalue").innerHTML = TextInput
    LCalculation()


}






function LERRChangeValue() {

    var slider = document.getElementById("LExpectedReturnSlider").value;
    var output = document.getElementById("LExpectedRatevalue");

    output.innerHTML = slider;
    LCalculation()


}


function LERRChangeTextValue() {
    var output = document.getElementById("LExpectedReturnSlider").value;

    document.getElementById("LExpectedReturn").value = output
    LCalculation()

}


function LERRChangeSliderValue() {
    var TextInput = document.getElementById("LExpectedReturn").value

    document.getElementById("LExpectedReturnSlider").value = TextInput
    document.getElementById("LExpectedRatevalue").innerHTML = TextInput
    LCalculation()
}





function LTPChangeValue() {


    var slider = document.getElementById("LTimePeriodSlider").value;
    var output = document.getElementById("LTimePeriodvalue");

    output.innerHTML = slider;
    LCalculation()

}


function LTPChangeTextValue() {
    var output = document.getElementById("LTimePeriodSlider").value;

    document.getElementById("LTimePeriod").value = output
    LCalculation()

}


function LTPChangeSliderValue() {

     
    // var inputText = document.getElementById("TimePeriod")
    // if (inputText.value < 0) {
    //     document.getElementById("TimePeriod").value = ((-1)*document.getElementById("TimePeriod").value);
    // }

    if (document.getElementById("LTimePeriod").value<0){
        document.getElementById("LTimePeriod").value = 0
    }

    var TextInput = document.getElementById("LTimePeriod").value

    document.getElementById("LTimePeriodSlider").value = TextInput
    document.getElementById("LTimePeriodvalue").innerHTML = TextInput
    LCalculation()
}





// this will hide sip section and show's lumpsum section on click of lumpsum button 
function hideSip() {
    var x = document.getElementById("SipSec");
    x.style.display = "none"
    var y = document.getElementById("LumpsumSec");
    y.style.display = "block"
}
// this will hide Lumpsum section and show's Sip section on click of Sip button 
function hideLumpsumSec() {
    var x = document.getElementById("LumpsumSec");
    x.style.display = "none"
    var y = document.getElementById("SipSec");
    y.style.display = "block"
}