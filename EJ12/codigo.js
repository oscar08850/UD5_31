function ejercicio1() {
    //let fecha = "12/04/2010";
    let fecha = document.getElementById("ejercicio1").value;
    console.log(fecha);
    var pattern = /(0?[1-9]|[12][1-9]|3[01])\/(0?[1-9]|1[0-2])\/([12][0-9][0-9][0-9])/;
    console.log(pattern.test(fecha));
}

function ejercicio2() {
    let input = document.getElementById("ejercicio2").value;
    console.log(input);
    if (/^[A-Z0-9-.]{1,64}@(?:[A-Z0-9]{1,63}\.)[A-Z]{2,3}$/i.test(input)) {
        alert("Correo valido");
    } else {
        alert("Correo NO valido");
    }
}

function ejercicio3() {
    let nombre = document.getElementById("ejercicio3").value;
    document.getElementById("ejercicio3").value = nombre.replace(
        /([a-zA-Z]+) ([a-zA-Z]+)/,
        "$2, $1"
    );
}

function ejercicio4() {
    let input = document.getElementById("ejercicio4").value;
    console.log(input);
    console.log(input.replace(/<[^>]?[\w\s]*>/g, ""));
}
