/* Se ingresan 5 importes, marca del producto y pais de origen (China, Uruguay o Paraguay).
Calcular y mostrar:
a.  Minimo importe con su pais
b.  Maximo importe con su marca
c.  Promedio importe
d.  Cantidad de productos de China
e.  Sobre el maximo encontrado aplicar un descuento del 10% a dicho importe. */

function mostrar() 
{ 

let importe;
let marca;
let pais;
let contador;
let minimoImporte;
let paisConMenosImporte;
let maximoImporte;
let marcaDeMayorImporte;
let promedioDeImporte;
let acumuladorDeImporte;
let mensaje;
let contadorCantidadProductosChina;
let maximoImporteTotal;
let descuento;
let maximoImporteConDescuento;

acumuladorDeImporte = 0;
contadorCantidadProductosChina = 0;


for(contador = 0; contador < 5; contador++ )
{

    marca = prompt("Ingrese una marca");    
  
    importe = parseFloat(prompt("Ingrese un importe: "));
    while (isNaN(importe) == true || importe < 0 || importe > 120) 
    {
        importe = parseFloat(prompt("Error. Ingrese un importe nuevamente"));
    }

      pais = prompt("Ingrese el pais ").toLowerCase();
    while (pais != "china" && pais != "uruguay" && pais != "paraguay" ) 
    {
      pais = prompt("Error. Ingrese el pais ");
    }

    //a.  Minimo importe con su pais

    if(importe < minimoImporte || contador == 0)
    {
      minimoImporte = importe;
      paisConMenosImporte = pais;
    }

    //b.  Maximo importe con su marca

    if(importe > maximoImporte || contador == 0)
    {
      maximoImporte = importe;
      marcaDeMayorImporte = marca;
    }

    //d.  Cantidad de productos de China
    switch (pais)
    {
      case "china":
        contadorCantidadProductosChina ++;
        
        break;
    
      case "uruguay":
        
        break;

      case "paraguay":
        break;
    }


    acumuladorDeImporte += importe;

}

//c.  Promedio importe
if( contador != 0){
promedioDeImporte = acumuladorDeImporte / contador;
}else {
  mensaje = "No se puede calcular el promedio";
}

//e.  Sobre el maximo encontrado aplicar un descuento del 10% a dicho importe.

  maximoImporteTotal = maximoImporte;
  descuento = maximoImporteTotal*10/100;
  maximoImporteConDescuento = maximoImporteTotal - descuento;

document.write("a) El minimo importe es " + minimoImporte + " del pais " + paisConMenosImporte + "<br>" + "b) El maximo importe es " + maximoImporte + " de la marca " + marcaDeMayorImporte + "<br>" + "c) El promedio es " + promedioDeImporte + "<br>" + "d) La cantidad de productos de China es " + contadorCantidadProductosChina + "<br>" + "e) El mayor importe con el descuento del 10% es " + maximoImporteConDescuento);

}

