//Funciones operaciones basicas

function sum() {
  document.getElementById("input").value += "+";
}

function substract() {
  document.getElementById("input").value += "-";
}

function multiply() {
  document.getElementById("input").value += "*";
}

function divide() {
  document.getElementById("input").value += "/";
}

// Funcion "="
function equal() {
  document.getElementById("input").value = eval(
    document.getElementById("input").value
  );
}

//Borra la pantalla
function ce() {
  document.getElementById("input").value = "";
}

//Coloca el decimal
function decimal() {
  document.getElementById("input").value += ".";
}

//Funicones números

function zero() {
  document.getElementById("input").value += "0";
}

function one() {
  document.getElementById("input").value += "1";
}

function two() {
  document.getElementById("input").value += "2";
}

function three() {
  document.getElementById("input").value += "3";
}

function four() {
  document.getElementById("input").value += "4";
}

function five() {
  document.getElementById("input").value += "5";
}

function six() {
  document.getElementById("input").value += "6";
}

function seven() {
  document.getElementById("input").value += "7";
}

function eight() {
  document.getElementById("input").value += "8";
}

function nine() {
  document.getElementById("input").value += "9";
}
