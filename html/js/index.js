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

function gpscolor(coor){
    coor.style.color="black";
}

function gpsclear(coor){
    document.getElementById("gps").value= "";
}

function gps2url(coor){
    var patron= /^([-+]?)(90|[0-8]\d)(\xBA|\xB0)\d\d\x27\d\d\x22,\s([-+]?)(180|1[0-7]\d|0\d\d)(\xBA|\xB0)\d\d\x27\d\d\x22$/;
    if(coor.value.match(patron)){
        var coor1 = coor.value;
        coor1=coor1.replace(" ","");
        //alert('Correct,'+coor1);
        coor1=coor1.split(",");
        var coor2 = coor1[1];
        coor1=coor1[0];
        var url = "https://maps.google.com/maps?q=";
        url=url+adaptecoor(coor1)+","+adaptecoor(coor2);
        //alert('url='+url);
        document.getElementById("map").value= url;
    }
    else{
        alert("Las coordenadas tienes que estar expresadas en GGºMM'SS\"");
        gpsclear();
    }
}

function adaptecoor(coor){
    if(coor[0]!="+"){
        coor="+"+coor;
    }
    coor=coor.replace("°","°+");
    coor=coor.replace("º","°+");
    coor=coor.replace("\'","\'+");
    return coor;
}

function checkpais(pais){
    var p=pais.value;
    p=p.toUpperCase();
    var listap=["AFGHANISTAN", "ALBANIA", "ALGERIA", "AMERICAN SAMOA", "ANDORRA", "ANGOLA", "ANGUILLA", "ANTARCTICA", "ANTIGUA AND BARBUDA", "ARGENTINA", "ARMENIA", "ARUBA", "AUSTRALIA", "AUSTRIA", "AZERBAIJAN", "BAHAMAS", "BAHRAIN", "BANGLADESH", "BARBADOS", "BELARUS", "BELGIUM", "BELIZE", "BENIN", "BERMUDA", "BHUTAN", "BOLIVIA", "BOSNIA AND HERZEGOVINA", "BOTSWANA", "BOUVET ISLAND", "BRAZIL", "BRITISH INDIAN OCEAN TERRITORY", "BRUNEI DARUSSALAM", "BULGARIA", "BURKINA FASO", "BURUNDI", "CAMBODIA", "CAMEROON", "CANADA", "CAPE VERDE", "CAYMAN ISLANDS", "CENTRAL AFRICAN REPUBLIC", "CHAD", "CHILE", "CHINA", "CHRISTMAS ISLAND", "COCOS (KEELING) ISLANDS", "COLOMBIA", "COMOROS", "CONGO", "CONGO, THE DEMOCRATIC REPUBLIC OF THE", "COOK ISLANDS", "COSTA RICA", "COTE D'IVOIRE", "CROATIA", "CUBA", "CYPRUS", "CZECH REPUBLIC", "DENMARK", "DJIBOUTI", "DOMINICA", "DOMINICAN REPUBLIC", "ECUADOR", "EGYPT", "EL SALVADOR", "EQUATORIAL GUINEA", "ERITREA", "ESTONIA", "ETHIOPIA", "FALKLAND ISLANDS (MALVINAS)", "FAROE ISLANDS", "FIJI", "FINLAND", "FRANCE", "FRENCH GUIANA", "FRENCH POLYNESIA", "FRENCH SOUTHERN TERRITORIES", "GABON", "GAMBIA", "GEORGIA", "GERMANY", "GHANA", "GIBRALTAR", "GREECE", "GREENLAND", "GRENADA", "GUADELOUPE", "GUAM", "GUATEMALA", "GUINEA", "GUINEA-BISSAU", "GUYANA", "HAITI", "HEARD ISLAND AND MCDONALD ISLANDS", "HOLY SEE (VATICAN CITY STATE)", "HONDURAS", "HONG KONG", "HUNGARY", "ICELAND", "INDIA", "INDONESIA", "IRAN, ISLAMIC REPUBLIC OF", "IRAQ", "IRELAND", "ISRAEL", "ITALY", "JAMAICA", "JAPAN", "JORDAN", "KAZAKHSTAN", "KENYA", "KIRIBATI", "KOREA, DEMOCRATIC PEOPLE'S REPUBLIC OF", "KOREA, REPUBLIC OF", "KUWAIT", "KYRGYZSTAN", "LAO PEOPLE'S DEMOCRATIC REPUBLIC", "LATVIA", "LEBANON", "LESOTHO", "LIBERIA", "LIBYAN ARAB JAMAHIRIYA", "LIECHTENSTEIN", "LITHUANIA", "LUXEMBOURG", "MACAO", "MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF", "MADAGASCAR", "MALAWI", "MALAYSIA", "MALDIVES", "MALI", "MALTA", "MARSHALL ISLANDS", "MARTINIQUE", "MAURITANIA", "MAURITIUS", "MAYOTTE", "MEXICO", "MICRONESIA, FEDERATED STATES OF", "MOLDOVA, REPUBLIC OF", "MONACO", "MONGOLIA", "MONTENEGRO", "MONTSERRAT", "MOROCCO", "MOZAMBIQUE", "MYANMAR", "NAMIBIA", "NAURU", "NEPAL", "NETHERLANDS", "NETHERLANDS ANTILLES", "NEW CALEDONIA", "NEW ZEALAND", "NICARAGUA", "NIGER", "NIGERIA", "NIUE", "NORFOLK ISLAND", "NORTHERN MARIANA ISLANDS", "NORWAY", "OMAN", "PAKISTAN", "PALAU", "PALESTINIAN TERRITORY, OCCUPIED", "PANAMA", "PAPUA NEW GUINEA", "PARAGUAY", "PERU", "PHILIPPINES", "PITCAIRN", "POLAND", "PORTUGAL", "PUERTO RICO", "QATAR", "REUNION", "ROMANIA", "RUSSIAN FEDERATION", "RWANDA", "SAINT HELENA", "SAINT KITTS AND NEVIS", "SAINT LUCIA", "SAINT PIERRE AND MIQUELON", "SAINT VINCENT AND THE GRENADINES", "SAMOA", "SAN MARINO", "SAO TOME AND PRINCIPE", "SAUDI ARABIA", "SENEGAL", "SERBIA", "SEYCHELLES", "SIERRA LEONE", "SINGAPORE", "SLOVAKIA", "SLOVENIA", "SOLOMON ISLANDS", "SOMALIA", "SOUTH AFRICA", "SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS", "SPAIN", "SRI LANKA", "SUDAN", "SURINAME", "SVALBARD AND JAN MAYEN", "SWAZILAND", "SWEDEN", "SWITZERLAND", "SYRIAN ARAB REPUBLIC", "TAIWAN, PROVINCE OF CHINA", "TAJIKISTAN", "TANZANIA, UNITED REPUBLIC OF", "THAILAND", "TIMOR-LESTE", "TOGO", "TOKELAU", "TONGA", "TRINIDAD AND TOBAGO", "TUNISIA", "TURKEY", "TURKMENISTAN", "TURKS AND CAICOS ISLANDS", "TUVALU", "UGANDA", "UKRAINE", "UNITED ARAB EMIRATES", "UNITED KINGDOM", "UNITED STATES", "UNITED STATES MINOR OUTLYING ISLANDS", "URUGUAY", "UZBEKISTAN", "VANUATU", "VENEZUELA", "VIET NAM", "VIRGIN ISLANDS, BRITISH", "VIRGIN ISLANDS, U.S", "WALLIS AND FUTUNA", "WESTERN SAHARA", "YEMEN", "ZAMBIA", "ZIMBABWE"]
    if(listap.indexOf(p)==-1){
        alert("País no válido")
        document.getElementsByName("pais")[0].value= "";
    }
    else{
        document.getElementsByName("pais")[0].value= p;
    }
}


///////////////////////////////////////////////////////////////////////
function mailcolor(mail){
    mail.style.color="black";
}

function mailclear(mail){
    document.getElementById("mail").value= "";
}

function checkmail(mail){
    var patron= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!mail.value.match(patron)){
        alert("Correo incorrecto");
        mailclear();
    }
}


