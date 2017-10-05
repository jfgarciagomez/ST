function mostrarN(dir){
    a = dir;
    a = a.substring(1);
    dat = a.split("&");
    nom = dat[0].split("=");
    fto = dat[1].split("=");
    document.getElementById("nombr").innerHTML = "Hola " + nom[1]+ ": Bienvenido a smartroom.";
    salida = "Hola " + nom[1]+ ": Bienvenido a smartroom.";
    return  salida;
}
function aumentar(imag) {
    imag.style.height = "120px";
    imag.style.width = "px";
}

function normal(imag) {
    imag.style.height = "80px";
    imag.style.width = "px";
}