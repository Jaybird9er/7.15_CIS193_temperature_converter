window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   var cVal = document.getElementById("cInput");
   var fVal = document.getElementById("fInput");
   var cNum;
   var fNum;

   // checks if the other field is blank first
   cVal.addEventListener("input", function() {
         fVal.value = "";
   });
   fVal.addEventListener("input", function() {
         cVal.value = "";
   });

   // after only one field is in use, the button click can run
   document.getElementById("convertButton").addEventListener("click", function () {
      cNum = parseFloat(cVal.value);
      fNum = parseFloat(fVal.value);
      if (cVal.value === "") { // farenheit to celsius
         cVal.value = convertFtoC(fNum);
      }
      else if (fVal.value === "") { // celsius to farenheit
         fVal.value = convertCtoF(cNum);
      }

      // change the weather image
      fNum = parseFloat(fVal.value);
      if (fNum < 32)
         document.getElementById("weatherImage").src = "cold.png";
      else if (fNum >= 32 && fNum <= 50)
         document.getElementById("weatherImage").src = "cool.png";
      else
         document.getElementById("weatherImage").src = "warm.png";
   });
}

function convertCtoF(degreesCelsius) {
   return degreesCelsius * 9/5 + 32;
}

function convertFtoC(degreesFahrenheit) {
   return (degreesFahrenheit - 32) * 5/9
}
