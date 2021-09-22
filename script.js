function targetValue(a) {
  if (scr.value == 0) {
    scr.value = a;
  } else {
    scr.value += a;
  }
}

function totalValue() {
  scr.value = eval(scr.value);
}

function del1(jp) {
  scr.value = scr.value.substring(0, scr.value.length - 1);
  if (scr.value == "") {
    scr.value = 0;
  }
}

function specialFunction(v) {
  var myVal;
  var convertToDegree = (scr.value * Math.PI) / 180;
  if (v == "sin") {
    myVal = Math.sin(convertToDegree);
  } else if (v == "cos") {
    myVal = Math.cos(convertToDegree);
  } else if (v == "tan") {
    myVal = Math.tan(convertToDegree);
  }
  scr.value = myVal;
}
