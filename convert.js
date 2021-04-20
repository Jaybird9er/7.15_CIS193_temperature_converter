window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   var cVal = document.getElementById("cInput");
   var fVal = document.getElementById("fInput");

   document.getElementById("convertButton").addEventListener("click", function () {
      if (cVal.value === "") { // farenheit to celsius
         var fNum = parseFloat(fVal.value);
         cVal.value = convertFtoC(fNum);
      }
      else if (fVal.value === "") { // celsius to farenheit
         var cNum = parseFloat(cVal.value);
         fVal.value = convertCtoF(cNum);
      }
   });
}

function convertCtoF(degreesCelsius) {
   return degreesCelsius * 9/5 + 32;
}

function convertFtoC(degreesFahrenheit) {
   return (degreesFahrenheit - 32) * 5/9
}
