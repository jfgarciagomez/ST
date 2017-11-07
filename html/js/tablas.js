

$(document).ready(function(){alert("adsf");
    ciudades= [["Madrid", 23, 30, 115, 225, true, "F0FF00"],
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
                        ["Granada", 19, 10, 95, 192, true, "FFC0CB"],
        ["Elche", 31, 29, 71, 182, false, "DDA0DD"]];

    rellenarL(ciudades);
    rellenarT(0,"#p1");


    $("th").filter(".lk").click(function(){
        var aux="#"+$(this).attr("id");
        var norig=aux.split("p");
        norig=norig[1];
        norig=(parseInt(norig)-1)*5;
        borrart();
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

    function rellenarL(cad){
        var num=cad.length;
        num=num/5;
        var nuevaf ="<tr>";
        for (var i=0;i<num;i++){
            nuevaf=nuevaf+"<th id=\"p"+(i+1)+"\" class=\"lk\">"+"Página "+(i+1)+"</th>";
        }
        nuevaf=nuevaf+"</tr>";
        $("#tablalinks").append(nuevaf);
    };


    function rellenarT(Norigen, a){
        for(var j=1;j<6;j++){
            var id="#p";
            id=id+j;
            $(id).css("background-color", "lightBlue");
        }
        $(a).css("background-color", "CornflowerBlue");
        var numeroColumnas =$("#tablad tr:first th").length;
        for (var i=Norigen;i<(Norigen+5);i++){
            n=addfila(numeroColumnas, i);
            $("#tablad").append(n);
        }
    }

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
    }

    function borrart(){
        var trs=$("#tablad tr").length;
        var i;
        for (i=1;i<trs;i++){
            borrarf();
        }
    }

    function borrarf(){
        if(($("#tablad tr").length)>1){
            $("#tablad tr:last").remove();
        }
    };
});
