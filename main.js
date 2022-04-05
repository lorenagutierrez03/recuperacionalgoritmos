function ejercicio1(){
    var nombre, edad;

    nombre = prompt ('Por favor introduce tu nombre:'); 
    if (nombre =="") { alert ('No has introducido ningún nombre'); }
    else { alert ('Hola '+nombre + '. Bienvenido a esta página web.'); }
    

    edad = prompt ('¿Cuál es tu edad?');
    
    edad = Number(edad);
    
    if (edad >3 && edad < 10) {alert ('Eres un niño.');}  
    else if (edad>=10 && edad <18) {alert ('Eres un jovencito.');}
    else if (edad >=18 && edad < 90) {alert ('Eres mayor de edad.');}
    else if (edad >=90) { alert ('Tienes muchos años encima...');}
    else {alert ('No has introducido un valor válido de edad ( '+edad+')');}
    
    
}

function ejercicio2(){
    var otoño =1;
    var verano =2;
    var primavera =3;
    var invierno =4;
    var codigo;
    
    codigo=parseInt(prompt("ingrese el codigo"));
    
    if(codigo==1){
          document.write("otoño");
    
    }
      else{
          if(codigo==2){
           document.write("verano")
          }
          else{
             if(codigo==3){
                 document.write("primavera")
             }
             else{
                 if(codigo==4){
                     document.write("invierno")
                 }
                 else{
                     document.write("la estacion no existe")
                 }
             }
            }

    }

    function ejercicio3(){
    var sueldobase = 0;
    var canthextras = 0;
    var sueldototal;
    var totalhextras;

    sueldobase=parseFloat(prompt("el sueldo base es: "));
    document.write("el sueldo base de esta persona es: "+sueldobase)
    canthextras=parseFloat(prompt("ingrese la cantidad de horas extras: "));
    document.write("la cantidad de horas extras trabajadas es: "+canthextras)

    totalhextras=canthextras*4500;
    sueldototal=sueldobase+totalhextras;

    document.write("el sueldo total de esta persona es: " +sueldototal);
    
    }
}

function ejercicio4(){
    var valorcompra = 0;
    var descuento = 0;
    var valorfinal = 0;
    
    valorcompra=parseFloat(prompt("ingrese el valor de la compra:  "));
    document.write("elvalor de la compra es:  " +valorcompra);
    
    
    descuento= 0;
    valorfinal= valorcompra;
    
    if(valorcompra>=200000){
    
         descuento=valorcompra*0.5;
         valorfinal=valorcompra-descuento;
    
         document.write("se genero un descuento del 50% equivalente a:  " +descuento);
         
             
    }
    else{
        descuento=valorcompra*0.1;
        valorfinal=valorcompra-descuento;
    
        document.write("se genero un descuento del 10% equivalente a:  " +descuento);
        
    }
        document.write("el total a pagar es:  " +valorfinal);
    
      }

