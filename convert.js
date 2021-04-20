window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   var cVal = document.getElementById("cInput");
   var fVal = document.getElementById("fInput");
   var cNum;
   var fNum;

   // checks if the other field is blank first
   cVal.addEventListener("input", function() {
      fVal.value = "";
      // validate that field input is a number
      if (isNaN(cVal.value))
         document.getElementById("errorMessage").innerHTML = cVal.value + " is not a number";
      else
         document.getElementById("errorMessage").innerHTML = "";
   });
   fVal.addEventListener("input", function() {
      cVal.value = "";
      // validate that field input is a number
      if (isNaN(fVal.value))
         document.getElementById("errorMessage").innerHTML = "<p>" + fVal.value + " is not a number</p>";
      else
         document.getElementById("errorMessage").innerHTML = "";
   });
   
   // after only one field is in use, the button click can run
   document.getElementById("convertButton").addEventListener("click", function () {
      if (cVal.value === "") { // farenheit to celsius
         fNum = parseFloat(fVal.value);
         cVal.value = convertFtoC(fNum);
      }
      else if (fVal.value === "") { // celsius to farenheit
         cNum = parseFloat(cVal.value);
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
