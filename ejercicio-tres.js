/*Realizar el algoritmo que permita 
el ingreso por prompt de las notas (validar entre 0 y 10) , 
el sexo (validar el sexo “f” o “m”) de 5 alumnos,
el nombre e informar por alert:
a) El promedio de las notas totales.
b) La nota más baja , el nombre y  el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6.
d) la nota de la primer mujer ingresada y su nombre.
e) cantidad de aprobados de cada sexo (mas de 5)
f) el sexo que más desaprobó
g) el promedio de notas de los aprobados
h) el promedio de notas de las mujeres
 */

function mostrar() 
{ 

    let sexo;
    let notas;
    let nombre;
    let contador;
    let promedioDeNotas;
    let acumuladorDeNotas;
    let mensaje;
    let sexoNotaMasBaja;
    let nombreNotaMasBaja;
    let notasMasBaja;
    let cantidadDeVarones;
    let notaPrimerMujer;
    let nombrePrimerMujerIngresada;
    let banderaPrimerMujerIngresada;
    let cantidadDeAprobadosMujer;
    let cantidadDeAprobadosHombre;
    let cantidadDeMujeres;
    let cantidadDeHombres;
    let sexoMasDesaprobado;
    let mensajeAprobados;
    let acumuladorDeAprobados;
    let promedioAprobados;
    let promedioDeNotasMujeres;
    let contadorDeAprobados;
    let acumuladorNotasMujeres;
    let mensajePromedioMujeres;
    let contadorDeDesaprobados;
    let contadorDeDesaprobadosFemenino;
    let contadorDeDesaprobadosMasculinos;
    let contadorPrimerIngresoFemenino;
    let mensajePrimeraMujerIngresada;


    acumuladorDeNotas = 0;
    cantidadDeVarones = 0;
    banderaPrimerMujerIngresada = "primer ingreso";
    cantidadDeAprobadosMujer = 0;
    cantidadDeAprobadosHombre = 0;
    cantidadDeMujeres = 0;
    cantidadDeHombres = 0;
    acumuladorDeAprobados = 0;
    contadorDeAprobados =0;
    acumuladorNotasMujeres = 0;
    contadorDeDesaprobados = 0;
    contadorDeDesaprobadosFemenino = 0;
    contadorDeDesaprobadosMasculinos = 0;
    mensaje = "No se puede calcular el promedio";
    mensajePromedioMujeres = "No hubo ingreso de mujeres, su promedio es 0";
    contadorPrimerIngresoFemenino = 0;



  for (contador = 0; contador < 3 ; contador++) 
  {   

      sexo = prompt("ingrese f ó m .");
      while (sexo != 'f' && sexo != 'm') 
      {
        sexo = prompt("Error. Ingrese f ó m nuevamente.");
      }

        nombre = prompt("Ingrese un nombre: ").toLowerCase();
      while (isNaN(nombre) == false || nombre == " ")
      { 
        nombre = prompt("Error. Ingrese un nombre nuevamente");       
      }

        notas = parseInt(prompt("ingrese una nota entre 0 y 10."));
      while (notas < 0 || notas > 10 || isNaN(notas)) 
      {
        notas = parseInt(prompt("Error. Ingrese una nota entre 0 y 10."));
      }

    //b) La nota más baja , el nombre y  el sexo de esa persona.

    if( notas < notasMasBaja || contador == 0)
    {
        notasMasBaja = notas;
        nombreNotaMasBaja = nombre;
        sexoNotaMasBaja = sexo;

    }

    //c) La cantidad de varones que su nota haya sido mayor o igual a 6.

    if(sexo == 'm' && notas >= 6) 
    {
        cantidadDeVarones++;
    }

    //d) la nota de la primer mujer ingresada y su nombre.
        if(sexo == 'f' && banderaPrimerMujerIngresada == "primer ingreso")
        {
            notaPrimerMujer = notas;
            nombrePrimerMujerIngresada = nombre;
            banderaPrimerMujerIngresada = "siguientes ingresos";
            contadorPrimerIngresoFemenino++;
        }
        
    //e) cantidad de aprobados de cada sexo (mas de 5)
        if(notas > 5) 
        {
          acumuladorDeAprobados += notas;
          contadorDeAprobados++;
          switch (sexo) 
          {
              case 'f':  
              cantidadDeAprobadosMujer++; 
                break;
              case 'm':
              cantidadDeAprobadosHombre++; 
              break;
          }
        }     //f) el sexo que mas desaprobo
          else 
          {
             if(sexo == 'f')
            {
              contadorDeDesaprobadosFemenino++;  
            }
            else 
            {
              contadorDeDesaprobadosMasculinos++; //10
            }
          }
   
        if(contadorDeDesaprobadosMasculinos != 0 &&  contadorDeDesaprobadosMasculinos > contadorDeDesaprobadosFemenino)
        {
          sexoMasDesaprobado = " El sexo mas desaprobado fue el masculino";
        }
          if(contadorDeDesaprobadosFemenino != 0 && contadorDeDesaprobadosFemenino > contadorDeDesaprobadosMasculinos)
          {
            sexoMasDesaprobado = "El sexo mas desaprobado fue el femenino";
          }
            else
            {
              sexoMasDesaprobado = "No hubo desaprobados";          
            }

       if(sexo == 'f')
       {
        acumuladorNotasMujeres += notas;
        cantidadDeMujeres++;
       }   

      acumuladorDeNotas += notas;
      

  } //Aqui termina el ciclo.

    //a) El promedio de las notas totales.
    if(contador != 0)
    {
      promedioDeNotas = (acumuladorDeNotas / contador).toFixed(1);
    }else {
    promedioDeNotas = mensaje;
    }

      //g) el promedio de notas de los aprobados
      if(contadorDeAprobados != 0)
      {
      promedioAprobados = (acumuladorDeAprobados / contadorDeAprobados).toFixed(1);
      }
      else 
        {
            mensajeAprobados = "No hubo aprobados";
        }
        
        //h) el promedio de notas de las mujeres
        if(cantidadDeMujeres != 0)
        {
        promedioDeNotasMujeres = acumuladorNotasMujeres / cantidadDeMujeres;
        mensajePromedioMujeres = promedioDeNotasMujeres;
        
        } else{
          
          mensajePromedioMujeres = '0 ya que no hubo ningun ingreso del sexo femenino';
        }

        if(contadorPrimerIngresoFemenino != 0)
        {
            nombrePrimerMujerIngresada = nombre;
            notaPrimerMujer = notas;
            mensajePrimeraMujerIngresada = "El nombre de la primer mujer ingresada es";

        }
        else 
          {
          mensajePrimeraMujerIngresada = "No hay nota para mujeres, ya que no se ingreso ninguna";
          nombrePrimerMujerIngresada = "No hay un nombre para asignar";
          notaPrimerMujer = " ni tampoco una nota";
          }
      

      
      alert("a) El promedio de notas total es " + promedioDeNotas + "\n" + "b) La nota mas baja es " + notasMasBaja + " y le corresponde a " + nombreNotaMasBaja + " del sexo " + sexoNotaMasBaja + "\n" + "c) La cantidad de varones con la nota mayor o igual a seis puntos es " + cantidadDeVarones + "\n" + "d) " + mensajePrimeraMujerIngresada + "." +nombrePrimerMujerIngresada + notaPrimerMujer + "\n" + "e) La cantidad de aprobados masculinos es " + cantidadDeAprobadosHombre + " y femeninas es " + cantidadDeAprobadosMujer + "\n" + "f) " + sexoMasDesaprobado + "\n" + 'g) El promedio de notas de los aprobados es ' + promedioAprobados + "\n" + "h) El promedio de nota de las mujeres es " + mensajePromedioMujeres);
      

}