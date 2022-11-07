/*Consigna: Ingresar el nombre de los 5 candidatos a presidente de CusCús, la edad de cada uno y la cantidad de votos (no menor a cero) que sacó en las elecciones.
Informar: 
el candidato con más votos
el candidato con menos votos
el promedio de edades de los candidatos
total de votos emitidos.*/

function mostrar() 
{

let nombre;
let edad;
let cantidadDeVotos;
let contador;
let mayorCantidadDeVotos;
let candidatoConMasVotos;
let menorCantidadDeVotos;
let candidatoConMenosVotos;
let acumuladorDeEdad;
let promedioDeEdad;
let mensaje;
let acumuladorDeVotos;
let totalDeVotos;

acumuladorDeEdad = 0;
acumuladorDeVotos = 0;

for(contador = 0; contador < 3; contador++)
{

    nombre = prompt("Ingrese un nombre: ").toLowerCase();
    while (isNaN(nombre) == false || nombre == " ")
    {
        nombre = prompt("Error. Ingrese un nombre nuevamente");       
    }

    edad = parseInt(prompt("Ingrese una edad: "));
    while (isNaN(edad) == true || edad < 0 || edad > 125) 
    {
        edad = parseInt(prompt("Error. Reingrese una edad nuevamente: "));
    }

    cantidadDeVotos = parseInt(prompt("Ingrese una cantidad"));
    while ( cantidadDeVotos < 1 || isNaN(cantidadDeVotos)) {
      cantidadDeVotos = prompt("Error. Ingrese la cantidad nuevamente");
    }

    //a) El candidato con más votos

    if(cantidadDeVotos > mayorCantidadDeVotos || contador == 0)
    {
      mayorCantidadDeVotos =  cantidadDeVotos;
      candidatoConMasVotos = nombre;
     
    }

    //b) El candidato con menos votos

    if(cantidadDeVotos < menorCantidadDeVotos || contador == 0)
    {
      menorCantidadDeVotos = cantidadDeVotos;
      candidatoConMenosVotos = nombre;
    
    }

    acumuladorDeEdad += edad;
    acumuladorDeVotos += cantidadDeVotos;
 
}

  //c) El promedio de edades de los candidatos.
  if( contador != 0) 
  {
  promedioDeEdad = acumuladorDeEdad / contador;
  } else {
    mensaje = "No se puede calcular el promedio"
  }

  
    //Total de votos emitidos. 
    totalDeVotos = acumuladorDeVotos;
  
  document.write("a) El candidato con mas votos es " + candidatoConMasVotos + "<br>" + "b) El candidato con menos votos es " + candidatoConMenosVotos + "<br>" + "c) El promedio de edades de los candidatos es " + promedioDeEdad + "<br>" + "d) El total de votos emitidos es " + totalDeVotos)


}

