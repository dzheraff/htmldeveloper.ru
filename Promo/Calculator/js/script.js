"use strict"
function func(){
  var supplyPipe = Number(document.getElementById("supplyPipe").value);
  var returnPipeline = Number(document.getElementById("returnPipeline").value);
  var result;
  var fault;

  result = (returnPipeline * 100 / supplyPipe);

  if (result > 100) {
    fault = result - 100;
  } else {
    fault = 100 - result;
  }

  if (fault < 4) {
    document.getElementById("fault").innerHTML = ('Погрешность в пределах нормы и равна ' + (fault.toFixed(1)) + '%');
  } else {
    document.getElementById("fault").innerHTML = ('Погрешность выше нормы и равна ' + (fault.toFixed(1)) + '%');
  }

}