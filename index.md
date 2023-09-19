<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sip Calculator</title>
    <link rel="stylesheet" href="style.css">


</head>
<!-- This is for chart JS  -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js"></script>

<!-- Piechart will get loads as per prefilled values and lumpsum section will get hidden -->
<body onload="hideLumpsumSec()">

    <header>
        <nav>

            <marquee  hspace="40%" direction="right">SIP CALCULATOR</marquee>
            
        </nav>
    </header>

    <div class="Calculator">
        <h1 >
            Let's Get Started
        </h1>
        <h2>
            Why should you invest?
        </h2>
        <p>
            The answer is very simple: to create wealth. And why would you want to create wealth? Well, to fund various
            financial goals you may have in your life like an expensive car, foreign holiday, retirement, and so on.
        </p>



    </div>

    <div>
        <!-- Two Buttons for  -->
        <div class="Buttons">
            <button class="Sip" onClick="ChangeValue(),hideLumpsumSec()">SIP</button>
            <button class="Lumpsum" onClick="LChangeValue(),hideSip()">LUMPSUM</button>
            <!-- <button class="LimitedSip" onClick="LChangeValue(),hideSip()">LIMITED SIP</button> -->
        </div>
        <div class="flex-container">



            <!-- Sip section -->
            <div class="Sip_Sec" id="SipSec">

                <div>
                    <b class="Left">Monthly Investment </b>

                    <input onchange="ChangeSliderValue()" type="number" id="MonthlyInvetment"
                        name="InputMonthlyInvetment" class="Right" value="500" min="100" max="100000">
                </div>

                <div class="SliderContainer">
                    <input onchange="ChangeValue(),ChangeTextValue()" class="Slider" id="MonthlyInvetmentSlider"
                        type="range" min="100" max="100000" value="500" step="50">
                    <p>Amount: <span id="value">500</span> RS</p>
                </div>



                <b>Expected rate of return (anually)</b>

                <Input onchange="ERRChangeSliderValue()" type="number" id="ExpectedReturn" name="ExpectedRateOfReturn"
                    class="Right" value="12">



                <div class="SliderContainer">
                    <input onchange="ERRChangeValue(),ERRChangeTextValue()" class="Slider" id="ExpectedReturnSlider"
                        type="range" min="0" max="30" value="12" step="1">
                    <p>Expected return: <span id="ExpectedRatevalue">12</span> %</p>
                </div>



                <div>
                    <b>Time period</b>

                    <Input onchange="TPChangeSliderValue()" type="number" id="TimePeriod" name="InvestmentTimePeriod"
                        class="Right" value="10">
                </div>

                <div class="SliderContainer">
                    <input onchange="TPChangeValue(),TPChangeTextValue()" class="Slider" id="TimePeriodSlider"
                        type="range" min="0" max="30" value="10" step="1">
                    <p>Time Period: <span id="TimePeriodvalue">10</span>Years</p>
                </div>

            </div>

            












<!-- Lumpsum section -->
            <div class="Lumpsum_Sec" id="LumpsumSec">

                <div>
                    <b class="Left">Lumpsum Investment </b>

                    <input onchange="LChangeSliderValue()" type="number" id="LumpsumInvetment"
                        name="InputLumpsumInvetment" class="Right" value="100000" min="10000" max="10000000">
                </div>

                <div class="SliderContainer">
                    <input onchange="LChangeValue(),LChangeTextValue()" class="Slider" id="LumpsumInvetmentSlider"
                        type="range" min="10000" max="10000000" value="100000" step="5000">
                    <p>Amount: <span id="Lvalue">100000</span> RS</p>
                </div>



                <b>Expected rate of return (anually)</b>

                <Input onchange="LERRChangeSliderValue()" type="number" id="LExpectedReturn" name="ExpectedRateOfReturn"
                    class="Right" value="12">



                <div class="SliderContainer">
                    <input onchange="LERRChangeValue(),LERRChangeTextValue()" class="Slider" id="LExpectedReturnSlider"
                        type="range" min="0" max="30" value="12" step="1">
                    <p>Expected return: <span id="LExpectedRatevalue">12</span> %</p>
                </div>



                <div>
                    <b>Time period</b>

                    <Input onchange="LTPChangeSliderValue()" type="number" id="LTimePeriod" name="InvestmentTimePeriod"
                        class="Right" value="10">
                </div>

                <div class="SliderContainer">
                    <input onchange="LTPChangeValue(),LTPChangeTextValue()" class="Slider" id="LTimePeriodSlider"
                        type="range" min="0" max="30" value="10" step="1">
                    <p>Time Period: <span id="LTimePeriodvalue">10</span>Years</p>
                </div>

            </div>





<!-- Result Section -->

            <div class=" Expectation">


                <div class="container">




                    <canvas id="myChart" style="width:140%"></canvas>

                    




                </div>


                <table>
                    <tr>
                        <td>Invested Amount</td>
                        <td>₹ <span id="InvestedAmountvalue">60000</span></td>
                    </tr>
                    <tr>
                        <td>Est. Returns</td>
                        <td>₹ <span id="returnvalue">56170</span></td>
                    </tr>
                    <tr>
                        <td>Total Value</td>
                        <td>₹ <span id="Totalvalue">116170</span></td>
                    </tr>
                </table>


            </div>
        </div>

    </div>

    <script src="Script.js"></script>


</body>

</html>
