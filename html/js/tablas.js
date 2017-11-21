
$(document).ready(function(){
    ciudads= [["Madrid", 23, 30, 115, 225, true, "F0FF00"],
        ["Barcelona", 10, 80, 38, 193,  false, "191970"],
        ["Valencia", 20, 54, 27, 177, false, "F5FFFA"],
        ["Sevilla", 23, 56, 66, 253, true, "FFE4E1"],
        ["Zaragoza", 24, 25, 75, 370, true, "FFE4B5"],
        ["Malaga", 19, 33, 45, 288, false, "FFDEAD"],
        ["Murcia", 14, 58, 97, 106, true, "408000"],
        ["Mallorca", 28, 30, 68, 284, true, "3B8E23"],
        ["Gran Canaria", 34, 44, 55, 353, false, "FFA500"],
        ["Bilbao", 13, 38, 88, 232, true, "FF4500"],
        ["Alicante", 13, 60, 62, 243, true, "DA70D6"],
        ["Cordoba", 20, 47, 96, 177, false, "EEE8AA"],
        ["Valladolid", 43, 82, 64, 367, true, "98FB98"],
        ["Vigo", 27, 57, 89, 139, false, "AFEEEE"],
        ["Gijon", 23, 32, 56, 210, true, "DB7093"],
        ["Hospitalet", 31, 10, 85, 225, true, "FFEFD5"],
        ["Vitoria", 19, 70, 80, 179, false, "FFDAB9"],
        ["A Coruña", 28, 75, 75, 202, true, "CD853F"],
        ["Granada", 19, 10, 95, 192, true, "FFC0CB"],
                  //      ["Granada", 19, 10, 95, 192, true, "FFC0CB"],
        ["Elche", 31, 29, 71, 182, false, "DDA0DD"]];

    dats=["Hotel", "Temperatura", "Humedad", "Ruido", "Nivel de luz", "Movimiento", "Color luz"];
ciudades=[];

    datos=[];
//document.getElementById("npag").value);
    obtainDt();
    //alert(toXml(ciudads));
    //alert("datos1: "+datos)
   // alert(datos.length);
   // tablap();
    //rellenarT(0,"#p1");
    //var mfimas=document.getElementById('nmax').value;
    //alert (mfimas)
    //function nfil()



/*
    function tablap(numero){
        rellenarCAb(datos);
        rellenarL(ciudades, numero);
    }

*/
    function obtainDt(){
        if (window.XMLHttpRequest) {
            // codigo para IE7+, Firefox, Chrome, Opera, Safari
            xmlt = new XMLHttpRequest();
        }
        else {
            // codigo para IE6, IE5
            xmlt = new ActiveXObject ("Microsoft.XMLHTTP");
        }
        xmlt.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                obtainInf(xmlt);
               /* var tx=xmlt.responseText;
                var res=tx.replace(/<\?\w*\?>/g,"");
                tx=tx.replace(/>/g,">mn.,kl");
                tx=tx.replace(/</g,">mn.,kl");
                res=tx.replace(/<\//g,"2");
                res=res.replace(/</g,"1");
                res=res.replace(/>/g,"3");
                res=res.replace(/1\w*3/g,"abro");
                res=res.replace(/2\w*3/g,"cierro");
                res=res.replace(/\n/g,"");
                res=res.replace(/\n/g,"");
                res=res.replace(/\s/g,"");
*/
                //var tx=xmlt.responseXML;
                //var xxx=xmlt.childNodes;
                //tx = xmlt.documentElement.childNodes;
                //var xx=xxx.length;alert("dios");
                //tx=xmlt.responseText;
                //alert("res="+xx);
            }
        };
        xmlt.open('GET', 'coches.xml', true);
        xmlt.send();
    }

    function obtainInf(st){
        //alert("cambio de estatus:"+st);

        var y=st.responseXML;
        //var zz= z.getElementsByTagName("Habitacion");
        //alert(zz);
        var w = y.documentElement.childNodes;


        //var w = xmlDoc.documentElement.childNodes;
        //aux="";
        //var w = y.documentElement.childNodes;
        var w = y.childNodes;
        //alert("w.lent="+w.length);
        //alert("w[0].name: "+w[0].nodeName);
        //alert("w[0].childondes.name:"+w[0].childNodes[0].nodeName)

        var aux2= new Array (w.length);
        for(var h=0;h<w.length;h++){
            var x=w[h].childNodes;
            //alert("x.lent="+x.length)
            //alert("x.name: "+x.nodeName)
            //alert("x[0].name: "+x[0].nodeName)
            //alert("x.value: "+x.nodeValue);
            //alert("x[0].value: "+x[0].nodeValue);
            var aux1= [];
            for (var i = 0; i < x.length ;i++) {
              var z=x[i].childNodes;
              //alert("z.length: "+z.length);
              //alert("z.name: "+x[i].nodeName);
              //aux=aux+x[i].nodeName;
              //aux.push(x[i].nodeName);
                var aux=[];

                for(var k=0;k<z.length;k++){
                    var a=z[k].childNodes;
                    //alert("a.length"+a.length);
                    //alert("z.Name: "+z[k].nodeName);
                  //  alert("a[k].value: "+a[0].nodeValue);
                    aux.push(a[0].nodeValue)
                    if(i==0){
                        aux1.push(z[k].nodeName);
                        //alert("z.Name: "+z[k].nodeName)
                    }
                }
              //aux=aux+z[0].nodeValue+"\n";
              //aux.push(z[0].nodeValue);
                aux2[i]=aux;
                //alert("aux["+i+"]: "+aux2[i]);
                //txt += x[i].nodeName + ": " + 		 x[i].childNodes[0].nodeValue + "<br>";
          }

        }


       // var y=z.documentElement.childNodes;
        //alert("1 "+y.length);

        //for(var i=0;x.length;i++){
            //zz[i].getElementsByTagName[0];
           // alert("ZZ="+ zz[0].getElementsByTagName("Hotel")[0].childNodes[0].nodeValue);
            //alert("ZZ="+ zz[cambio de ciudad].getElementsByTagName("Hotel")[tiene que ser 0 porque solo hay uno].childNodes[0].nodeValue);
        //}
        ciudades=aux2;
        datos=aux1;

        rellenarCAb(aux1);
        rellenarL(aux2);
        //var nufi = document.getElementById("npag").value;
        //rellenarT(0,"#p1", nufi);

        rellenarT(0,"#p1");
       // alert("datos: "+datos)
    };

    function toXml(arr){
        var sal="<Habitaciones>";
        for(var i=0;i<arr.length;i++){
            sal=sal+"<Habitacion id=\""+i+"\">";
            for (var j=0;j<arr[i].length;j++){
                sal=sal+"<"+datos[j]+">"+arr[i][j]+"</"+datos[j]+">";
            }
            sal=sal+"</Habitacion>";
        }
        sal=sal+"</Habitaciones>";
        return sal;
    };


    $("th").filter(".lk").click(function(){alert("julio");
        var aux="#"+$(this).attr("id");
        var nume= document.getElementById('pag').value;
        var norig=aux.split("p");
        norig=norig[1];
        norig=(parseInt(norig)-1)*5;
        borrart("#tablad tr");
        //var nufi = document.getElementById("npag").value;
        //rellenarT(norig, aux, nufi);
        rellenarT(norig, aux);
    });

    $(window).resize(function(){
        var po=$("#p1");
        po=po.outerWidth(true);
        var tx1="";
        var n="";
        var Ncuadros = (ciudades.length)/5;
        var i;
        if(po<30){
            for(i=0;i< Ncuadros;i++){
                tx1 =(i+1);
                n="#p"+(i+1);
                $(n).text(tx1);
            }
        }
        else if(po<70){
            for(i=0;i< Ncuadros;i++){
                tx1 ="P"+(i+1);
                n="#p"+(i+1);
                $(n).text(tx1);
            }
        }
        else{
            for(i=0;i< Ncuadros;i++){
                tx1 ="Página "+(i+1);
                n="#p"+(i+1);
                $(n).text(tx1);
            }
        }
    });

    function rellenarCAb(dat){//alert("aki");
        var a = dat[0];
        var dat=datos;
        var nuevaf ="<tr>";
        for (var i=0;i<dat.length;i++){
            nuevaf=nuevaf+"<th>"+dat[i]+"</th>";
        }
        nuevaf=nuevaf+"</tr>";
        $("#tablad").append(nuevaf);
    };



    function rellenarL(cad){
        var num=cad.length;
        var nin=document.getElementById("npag").value;
        num=num/nin;
        var nuevaf ="<tr>";
        for (var i=0;i<num;i++){
            nuevaf=nuevaf+"<th id=\"p"+(i+1)+"\" class=\"lk\">"+"Página "+(i+1)+"</th>";
        }
        nuevaf=nuevaf+"</tr>";
        $("#tablalinks").append(nuevaf);
    };


    //function rellenarT(Norigen, a, numfila){
    function rellenarT(Norigen, a){
        var numfila=document.getElementById("npag").value;
        for(var j=1;j<6;j++){
            var id="#p";
            id=id+j;
            $(id).css("background-color", "lightBlue");
        }
        $(a).css("background-color", "CornflowerBlue");
        var numeroColumnas =$("#tablad tr:first th").length;
        for (var i=Norigen;i<(Norigen+numfila);i++){
            n=addfila(numeroColumnas, i);
            $("#tablad").append(n);
        }
    };

    function addfila(nCol, indice){
        var nuevafila ="<tr";
        if(indice%2){
            nuevafila=nuevafila+" class=\"par\">";
        }
        else{
            nuevafila=nuevafila+" class=\"impar\">";
        }
        var c=1;
        var j=0;
        for (var i=0;i<nCol;i++){
            if(i!=6){
                nuevafila=nuevafila+"<td>"+ ciudades[indice][i]+"</td>";
            }
            else{
                c=ciudades[indice][i];
                c=parseInt(c,16);
                c=0xFFFFFF ^ c;
                c=c.toString(16);
                for(j=6;(j-c.length)>0;j--){
                    c="0"+c;
                }
                nuevafila=nuevafila+"<td style=\"background-color:"+ciudades[indice][i]+";color:"+c+";\">"+ ciudades[indice][i]+"</td>";
            }
        }
        nuevafila=nuevafila+"</tr>";
        return nuevafila;
    };

    function borrart(tab){
        var trs=$(tab).length;
        var i;
        for (i=1;i<trs;i++){
            borrarf(tab);
        }
    };

    function borrarf(tab){
        if(($(tab).length)>1){
            $(tab+":last").remove();
        }
    };

  //  function cambioC(numpaginas);{
//alert(numpaginas);

        //rellenarT(0,"#p1", numpaginas);
        //rellenarT(0,"#p1");

    //};
    $("#npag").change(function(){

        borrart("#tablad tr");
        //borrart("#tablalinks tr");
        $("#tablalinks tr:last").remove();
        rellenarL(ciudades);
        rellenarT(0,"#p1");
    });
});
//function cambioC(np){
//            alert("dentro");
//        };