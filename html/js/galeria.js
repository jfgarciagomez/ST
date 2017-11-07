
$(document).ready(function(){
    cuadrado();
    $(window).resize(function(){
        cuadrado();
    });

    $("img.img1").click(function(){
        var im=  $(this).attr("src");
        $("#gran").attr("src",im);
        $("#fondo2").show();
    });

    $("#fondo2").click(function(){
        $("#fondo2").hide();
    });
    $("#bd").click(function(){
        var img ="images/h";
        var a = $("#i1").attr("src");
        var n = "#i0";
        n[0]="1";
        a = a.split("h");
        a = a[1];
        a = a.split(".");
        a = a[0];
        a = parseInt(a);
        for(var i=1;i<4;i++){
            if(a+1>20){
                a = 1;
            }
            else{
                a = a + 1;
            }
            img = img + a +".jpg";
            n = n.substring(0,2);
            n=n+i;
            $(n).attr("src",img);
            img ="images/h";
        }
    });
    $("#bi").click(function(){
        var img ="images/h";
        var a = $("#i3").attr("src");
        var n = "#i0";
        n[0]="1";
        a = a.split("h");
        a = a[1];
        a = a.split(".");
        a = a[0];
        a = parseInt(a);
        for(var i=3;i>0;i--){
            if(a<2){
                a = 20;
            }
            else{
                a = a - 1;
            }
            img = img + a +".jpg";
            n = n.substring(0,2);
            n=n+i;
            $(n).attr("src",img);
            img ="images/h";
        }
    });

    $("#i1").mouseover(function(){
        $( "#i1" ).css({'width' : '+=10%' , 'height' : '+=10%'});
        var n =$("#i1").attr("src");
        n = n.split("/");
        $("#t1").text( n[1] );
        $(window).hide();
        });
    $("#i2").mouseover(function(){
        $( "#i2" ).css({'width' : '+=10%' , 'height' : '+=10%'});
        var n =$("#i2").attr("src");
        n = n.split("/");
        $("#t2").text( n[1] );
        });
    $("#i3").mouseover(function(){
        $( "#i3" ).css({'width' : '+=10%' , 'height' : '+=10%'});
        var n =$("#i3").attr("src");
        n = n.split("/");
        $("#t3").text( n[1] );
        });
    $("#i1").mouseout(function(){
        $( "#i1" ).css({'width' : '-=10%' , 'height' : '-=10%'});
        $("#t1").text("");
        });
    $("#i2").mouseout(function(){
        $( "#i2" ).css({'width' : '-=10%' , 'height' : '-=10%'});
        $("#t2").text("");
        });
    $("#i3").mouseout(function(){
        $( "#i3" ).css({'width' : '-=10%' , 'height' : '-=10%'});
        $("#t3").text("");

        });

});

function cuadrado(){
    var ancho = $(window).width();
    var alto = $(window).height();
    alto = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    $( "#fondo2" ).css({'width' : ancho , 'height' : alto});
};