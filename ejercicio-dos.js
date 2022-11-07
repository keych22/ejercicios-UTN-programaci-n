/*Consigna: Se pide cargar la ficha médica para 11 jugadores de fútbol.
Se solicita Nombre, Edad, Peso (ej: 60.5kg) y Altura (ej: 1.65mt).
A) Nombre del jugador más joven.
B) El peso del jugador más alto.
C) Promedio de altura del equipo.
D) Promedio de peso del equipo.
E) Cantidad de jugadores que superen 1.7 mt y pesen más de 85 kg.
*/

function mostrar() 
{ 

    let nombre;
    let edad;
    let peso;
    let altura;
    let edadMasJoven;
    let nombreMasJoven;
    let alturaMasAlto;
    let pesoMasAlto;
    let promedioAltura;
    let acumuladorDeAltura;
    let mensajePromedioAltura;
    let promedioDePeso;
    let acumuladorDePeso;
    let mensajePromedioPeso;
    let cantidadDeJugadores;
    let contador;
    let contadorMasAlto;
    let sexo;
    let edadMasJovenFemenina;
    let mensajeJugadoraMasJovenFemenina;
    let nombreJugadoraMasJovenFemenina;
    let banderaMasJoven;
    

    acumuladorDeAltura = 0;
    acumuladorDePeso = 0;
    cantidadDeJugadores = 0;
    contadorMasAlto = 0;
    banderaMasJoven = "primer ingreso";
    

    for (contador = 0; contador < 3; contador++) 
    {
      
      nombre = prompt("Ingrese un nombre: ").toLowerCase();
      while (isNaN(nombre) == false || nombre == " ")
      {
      nombre = prompt("Error. Ingrese un nombre nuevamente");       
      }

      sexo = prompt("ingrese f ó m .");

      while (sexo != 'f' && sexo != 'm') 
      {
        sexo = prompt("Error. Reingrese f ó m nuevamente.");
      }


      edad = parseInt(prompt("Ingrese una edad"));
      while (isNaN(edad) == true || edad < 0 || edad > 125) 
      {
          edad = parseInt(prompt("Error. Ingrese una edad nuevamente"));
      }

      peso = parseFloat(prompt("Ingrese el peso"));
      while (isNaN(peso) == true || peso < 0 || peso > 450) 
      {
       peso = parseFloat(prompt("Error. Ingrese el peso"));
      }


      altura = parseFloat(prompt("Ingrese una altura"));
      while (isNaN(altura) == true ||  altura < 0 || altura > 2.60)
      {
         altura = parseFloat(prompt("Error. Ingrese una altura"));
      }
  
      //A) Nombre del jugador más joven.
      if(edad < edadMasJoven || contador == 0)
      {
        edadMasJoven = edad;
        nombreMasJoven = nombre;
      }

      //B) El peso del jugador más alto.
      if(altura > alturaMasAlto || contadorMasAlto == 0)
      {
        alturaMasAlto = altura;
        pesoMasAlto = peso;
        contadorMasAlto++;
      }

      //E) Cantidad de jugadores que superen 1.7 mt y pesen más de 85 kg.
      if(altura > 1.7 && peso > 85)
      {
        cantidadDeJugadores++;
      }

      //F) La jugadora mas joven femenina.
      if(sexo == 'f' ) 
      {
        if(edad < edadMasJovenFemenina || banderaMasJoven == "primer ingreso")
        {
          edadMasJovenFemenina = edad;
          nombreJugadoraMasJovenFemenina = nombre;
          banderaMasJoven = "siguiente ingreso";
        }
      }

      acumuladorDePeso += peso;
      acumuladorDeAltura += altura;

    } //Fin del bucle en esta linea.



    //C) Promedio de altura del equipo.
    if(contador != 0)
    {
    promedioAltura = (acumuladorDeAltura / contador).toFixed(1);
    mensajePromedioAltura = "El promedio de altura es ";
    }else 
      {
        promedioAltura = "Es cero."
        mensajePromedioAltura = "No se puede calcular el promedio, no hubo ingreso de jugadores.";
      }

      //D) Promedio de peso del equipo.
      if(contador != 0)
      {
      promedioDePeso = (acumuladorDePeso / contador).toFixed(1);
      mensajePromedioPeso = "El promedio de peso es ";
      }else 
        {
          promedioDePeso = "Es cero.";
          mensajePromedioPeso = "No se puede calcular el promedio, no hubo ingreso de jugadores.";
        }

        if (banderaMasJoven != "primer ingreso")
        {
          mensajeJugadoraMasJovenFemenina = "La jugadoras mas joven femenina es ";
          
        }else {
          mensajeJugadoraMasJovenFemenina = "No hubo ingreso de jugadoras del sexo femenino";
          nombreJugadoraMasJovenFemenina = "";
        }

        document.write("a) El nombre del jugador mas joven es " + nombreMasJoven + "<br>");
        document.write("b) El peso del jugador mas alto es " + pesoMasAlto + " kg"+ "<br>" );
        document.write("c) " +  mensajePromedioAltura + promedioAltura + "<br>");
        document.write("d) " + mensajePromedioPeso + promedioDePeso + "<br>");
        document.write("e) La cantidad de jugadores que superan 1.7 mt y pesan mas de 85 kg es " + cantidadDeJugadores + "<br>");
        document.write("f) "+ mensajeJugadoraMasJovenFemenina + nombreJugadoraMasJovenFemenina + "<br>");
  

}


