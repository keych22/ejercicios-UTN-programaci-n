/* Ingresar la información de películas hasta que el usuario quiera:
 + Título de cada película.
 + Genero: VALIDAR (ciencia ficcion - terror- drama)
 + Puntuación: VALIDAR ( 1 - muy mala; 2 - mala ; 3 - buena; 4 - muy buena; 5 - excelente)

Se pide informar por document.write() :
 a) la película de drama con peor puntuación (mostrar título, género y calificación)
 b) el título de la película con mejor puntuación.
 c) porcentaje de películas de cada género
 d) cantidad de películas de ciencia ficción con más de tres puntos. */

 function mostrar() 
{

  let tituloDePelicula;
  let genero;
  let puntuacion;
  let respuesta;
  let banderaPeorPuntuacion;
  let peorPuntuacion;
  let tituloPeorPuntuacion;
  let mejorPuntuacion;
  let tituloMejorPuntuacion;
  let contadorDrama;
  let contadorCienciaFiccion;
  let contadorTerror;
  let contador;
  let porcentaDrama;
  let porcentajeTerror;
  let porcentajeCienciaFiccion;
  let cantidadMayorAtresPuntos;
  let mensaje;
  let cantidadPeorPuntuacionUno;
  let cantidadPeorPuntuacionDos;
  let cantidadPeorPuntuacionTres;
  let cantidadPeorPuntuacionCuatro;
  let cantidadPeorPuntuacionCinco;
  let mayorCantidadDeRepetidosMenorPuntuacion;


  respuesta = true;
  banderaPeorPuntuacion = "primer ingreso";
  mensaje = "";
  contadorDrama = 0;
  contadorCienciaFiccion = 0;
  contadorTerror = 0;
  contador = 0;
  cantidadMayorAtresPuntos = 0;
  cantidadPeorPuntuacionUno = 0;
  cantidadPeorPuntuacionDos = 0;
  cantidadPeorPuntuacionTres = 0;
  cantidadPeorPuntuacionCuatro = 0;
  cantidadPeorPuntuacionCinco = 0;
 
  

  while (respuesta == true) 
  {
      tituloDePelicula = prompt("Ingrese el titulo");

      genero = prompt("Ingrese el genero", "ciencia ficcion - drama - terror").toLowerCase();
      while (genero != "ciencia ficcion" && genero != "drama" && genero != "terror") 
      {
      genero = prompt("Error. Ingrese el genero", "ciencia ficcion - drama - terror");  
      }

      puntuacion = parseInt(prompt("Ingrese puntuacion", "Entre 1 y 5"));
      while (puntuacion < 1 || puntuacion > 5 || isNaN(puntuacion))
      {
      puntuacion = parseInt(prompt("Error. Reingrese la puntuacion", 'Entre 1 y 5'));
      }

      //a) la película de drama con peor puntuación (mostrar título, género y calificación)

//NOTA: Si fueran 2 peliculas con la misma puntuacion como mostrar el nombre de las 2 y cantidades con la misma menor puntuacion.?

//NOTA: Porque el mensaje final no se imprime en el document write? 

    switch (genero) 
    {
      case "drama":
          
          if (puntuacion < peorPuntuacion || banderaPeorPuntuacion == "primer ingreso" )
          {
            peorPuntuacion = puntuacion;  
            tituloPeorPuntuacion = tituloDePelicula;
            banderaPeorPuntuacion = "siguiente puntuacion";
          }
        contadorDrama = contadorDrama + 1;
        switch (peorPuntuacion) 
        {
          case 1:
            cantidadPeorPuntuacionUno++;       
            break;
        
          case 2:
            cantidadPeorPuntuacionDos++;
            break;
          
          case 3:
            cantidadPeorPuntuacionTres++; 
            break;
      
          case 4:
            cantidadPeorPuntuacionCuatro++;
            break;
      
          case 5:
            cantidadPeorPuntuacionCinco++; 
            break;
        
        }

        break;
        
       
    
      case "terror":
          contadorTerror = contadorTerror + 1;
        break;

      case "ciencia ficcion":
        if(puntuacion > 3)  //d) cantidad de películas de ciencia ficción con más de tres puntos.
        {
            cantidadMayorAtresPuntos = cantidadMayorAtresPuntos + 1
        }
        contadorCienciaFiccion = contadorCienciaFiccion + 1;
        break;
    
    }
      //b) el título de la película con mejor puntuación.

      if (puntuacion > mejorPuntuacion ||  contador == 0 )
      {
        mejorPuntuacion = puntuacion;
        tituloMejorPuntuacion = tituloDePelicula;
      
      } 
      
      respuesta = confirm("Desea continuar");
      contador++;
  }

      mayorCantidadDeRepetidosMenorPuntuacion = Math.max(cantidadPeorPuntuacionUno,cantidadPeorPuntuacionDos,cantidadPeorPuntuacionTres, cantidadPeorPuntuacionCuatro,cantidadPeorPuntuacionCinco);

      switch (mayorCantidadDeRepetidosMenorPuntuacion) 
      {
        case cantidadPeorPuntuacionUno:
          cantidadDeRepeticiones = cantidadPeorPuntuacionUno; 
          break;
      
          case cantidadPeorPuntuacionDos:
            cantidadDeRepeticiones = cantidadPeorPuntuacionDos;
          break;

          case cantidadPeorPuntuacionTres:
            cantidadDeRepeticiones = cantidadPeorPuntuacionTres;
          break;

          case cantidadPeorPuntuacionCuatro:
            cantidadDeRepeticiones = cantidadPeorPuntuacionCuatro;
          break;

          case cantidadPeorPuntuacionCinco:
            cantidadDeRepeticiones = cantidadPeorPuntuacionCinco;
          break;
      }

    //c) porcentaje de películas de cada género
      if(contador != 0)
      {
        porcentaDrama = (contadorDrama / contador * 100).toFixed(1);
        porcentajeTerror = (contadorTerror / contador * 100).toFixed(1);
        porcentajeCienciaFiccion = (contadorCienciaFiccion / contador * 100).toFixed(1);
      }else {
        mensaje = "Los porcentajes de las peliculas de cada genero es cero";
      }

    document.write("a) La pelicula de Drama con la peor puntuacion es " + tituloPeorPuntuacion + " y su calificacion es de " + peorPuntuacion + "." + " La cantidad de veces que se repite esta peor puntuacion del genero drama es " +  cantidadDeRepeticiones + "<br>"+ "<br>" + "b) El titulo de la pelicula con mejor puntuacion es " + tituloMejorPuntuacion + "." + "<br>"+ "<br>" + "c) Los porcentajes de las peliculas son: Drama " + porcentaDrama + "% , ciencia ficcion " + porcentajeCienciaFiccion + "% y terror es " + porcentajeTerror + "%." + "<br>" + "<br>"+ "d) La cantidad de peliculas de ciencia ficcion mayor a tres puntos es " + cantidadMayorAtresPuntos + "." + "<br>" + mensaje + "<br>");

} 

