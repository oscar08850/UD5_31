function foto(num) {
    console.log("Dentro");
    fotos = "./imagenes/foto" + num + ".jpg";
    console.log(fotos);
    document.images["fotoelegida"].src = fotos;
}
