setInterval(() => {
    var tiempo = new Date();
    horas.innerHTML = tiempo.getHours();
    minutos.innerHTML = tiempo.getMinutes();
    segundos.innerHTML = tiempo.getSeconds();
}, 1000);