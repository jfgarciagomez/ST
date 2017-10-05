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