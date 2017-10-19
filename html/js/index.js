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


function diferencia (tmax, tmin){
    //max.style.color = "blue";
    var max = tmax.value;
    var min = tmin.value;
    if( min<26  || max<26 || min > 28 || max > 28){
        alert("La temperatura tiene que estar entre 28º y 26º");
    }
    if( max <26 || max > 28 ){
        //alert("La temperatura tiene que estar entre 28º y 26º");.
        tmax.style.color = "red";
    }
    else{
        tmax.style.color = "black";
    }
    if( min<26 || min > 28){
        tmin.style.color = "red";
    }
    else{
        tmin.style.color = "black";
    }
    if(max<=min){
        return err="La temperatura mínima "+ min.toString()+", debe ser menor que la máxima "+ max.toString()+".";
    }
    else{
        num = max-min;
        return dif="Diferencia: "+ num.toString()+"º";
    }
}

function cont (con, cuadro, nivel){
    longitud = 8;
    calidad = "Contraseña insegura. Aumenta la longitud";
    cuadro.style.width= longitud * con.value.length;
    if(con.value.length < 5){
        //alert("contraseña muy devil nivel "+calidad);
        cuadro.style.background="red";
    }
    else if (con.value.length < 8){
        calidad = "yellow";
        cuadro.style.background="yellow";
        calidad="Poco segura, se recomienda aumentar la longitud";
        //alert("contraseña nivel "+calidad);
    }
    else{
        calidad = "green";
        //alert("contraseña nivel "+calidad);
        cuadro.style.background="green";
        calidad="contraseña de tamaño aceptable";
    }
    nivel.value=calidad;
    document.getElementById("nivels").innerHTML = calidad;
}


function pstest(con, cuadro, nivel){
    var calidad=nivel.value;
    var passw=  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{5,25}$/;
    if((con.value.match(passw))){
        calidad=calidad + "y segura";
        //alert('Correct,'+calidad);
    }
    else{
        calidad=calidad + ", pero debe tener al menos una mayuscula, minuscula, número y un caracter especial permitido";
        //alert('Wrong...!'+calidad);
        document.getElementById("pass").value= "";
        cuadro.style.width= "4px";
        cuadro.style.background="white";
    }
    document.getElementById("nivels").innerHTML = calidad;
}

