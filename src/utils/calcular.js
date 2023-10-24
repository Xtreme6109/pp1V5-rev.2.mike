/*
*   NOTES BY MIKKEL
*   -el metodo filter(a: cantidad de decimales despues del punto) = permite obtener una cantidad controlada de decimales
*
*   other notes....
*
*
*/
//---------------------------------------------------------------------------------------
//                                      AREA
//---------------------------------------------------------------------------------------
export function AreaCirculo() {
    var radioCirculo = parseInt(document.getElementById("radioCirculo").value);
    var pi = 3.14159;
    var area = pi * Math.pow(radioCirculo,2);
    var perimetro = 2 * pi * radioCirculo;
    document.getElementById("resultado1").textContent = area.toFixed(4) + " m²";
    document.getElementById("resultado2").textContent = perimetro.toFixed(4) + " m";
}

export function AreaCuadrado() {
    var lado = parseInt(document.getElementById("lado").value);
    var area = lado * lado;
    var perimetro = lado * 4;
    document.getElementById("resultado1").textContent = area.toFixed(4) + " m²";
    document.getElementById("resultado2").textContent = perimetro.toFixed(4) + " m";
}

export function AreaRectangulo() {
    var base = parseInt(document.getElementById("base").value);
    var altura = parseInt(document.getElementById("altura").value);
    var area = base * altura;
    var perimetro = (base * 2) + (altura * 2);
    document.getElementById("resultado1").textContent = area.toFixed(4) + " m²";
    document.getElementById("resultado2").textContent = perimetro.toFixed(4) + " m";
}

export function AreaTriangulo() {
    var base = parseInt(document.getElementById("base").value);
    var altura = parseInt(document.getElementById("altura").value);
    var area = (base * altura)/2;



    var ladoC = Math.sqrt(Math.pow(base, 2) + Math.pow(altura, 2));
    var ladoC = ladoC.toFixed(1)

    var perimetro = base + altura + ladoC;

    document.getElementById("resultado1").textContent = area.toFixed(4) + " m²";
    document.getElementById("resultado2").textContent = perimetro.toFixed(4) + " m";
}

export function AreaTrapezoide() {
    var base = parseInt(document.getElementById("base").value);
    var altura = parseInt(document.getElementById("altura").value);
    var copa = parseInt(document.getElementById("copa").value);
    var area = ((base + copa)/2) * altura;
    var lado = Math.sqrt(Math.pow(base - copa, 2) + Math.pow(altura, 2));
    var perimetro = (lado * 2) + base + copa;
    document.getElementById("resultado1").textContent = area.toFixed(4) + " m²";
    document.getElementById("resultado2").textContent = perimetro.toFixed(4) + " m";
}

export function AreaElipse() {
    var radio_uno = parseInt(document.getElementById("radio_uno").value);
    var radio_dos = parseInt(document.getElementById("radio_dos").value);
    var pi = 3.14159;
    var area = radio_uno * radio_dos * pi;
    var perimetro = 2 * pi * (Math.sqrt(Math.pow(radio_uno,2) * Math.pow(radio_dos,2)));
    document.getElementById("resultado1").textContent = area.toFixed(4) + " m²";
    document.getElementById("resultado2").textContent = perimetro.toFixed(4) + " m";
}


// FIGURA #1
export function AreaTrianguloEscaleno() {
    var largo = parseInt(document.getElementById("largo").value);
    var alto = parseInt(document.getElementById("alto").value);
    var area = (largo * alto)/2;
    document.getElementById("resultado1").textContent = area.toFixed(4) + " m²";
    // NO HAY PERIMETRO ACTUALMENTE
}

// FIGURA #2
export function AreaCuadradoCopaCircular() {
    var largo = parseInt(document.getElementById("largo").value);
    var alto = parseInt(document.getElementById("alto").value);
    var pi = 3.14159;
    var area = (largo * alto) + ((pi * Math.pow(largo,2)/8));
    var perimetro = (alto * 2) + largo + ((pi * largo)/2);
    document.getElementById("resultado1").textContent = area.toFixed(4) + " m²";
    document.getElementById("resultado2").textContent = perimetro.toFixed(4) + " m";   
}

// FIGURA #3
export function AreaCuadradoCopaCircularDoble() {
    var largo = parseInt(document.getElementById("largo").value);
    var alto = parseInt(document.getElementById("alto").value);
    var pi = 3.14159;
    var area = (largo * alto) + ((pi * Math.pow(largo,2)/4));
    var perimetro = (alto * 2) * (pi * largo);
    document.getElementById("resultado1").textContent = area.toFixed(4) + " m²";
    document.getElementById("resultado2").textContent = perimetro.toFixed(4) + " m";   
}

// FIGURA #4
export function AreaFiguraPerspectiva() {
    var lado_uno = parseInt(document.getElementById("lado_1").value);
    var lado_dos = parseInt(document.getElementById("lado_2").value);
    var lado_tres = parseInt(document.getElementById("lado_3").value);
    var lado_cuatro = parseInt(document.getElementById("lado_4").value);
    var area = ((lado_uno + lado_tres)/2) * ((lado_dos + lado_cuatro)/2);
    var perimetro = lado_uno + lado_dos +lado_tres + lado_cuatro;
    document.getElementById("resultado1").textContent = area.toFixed(4) + " m²";
    document.getElementById("resultado2").textContent = perimetro.toFixed(4) + " m";   
}

// FIGURA #5
export function AreaTrapecio() {
    var base = parseInt(document.getElementById("base").value);
    var copa = parseInt(document.getElementById("copa").value);
    var alto = parseInt(document.getElementById("alto").value);
    var area = (copa * alto) + (((base + copa) * alto)/2);
    document.getElementById("resultado1").textContent = area + " m²";
    // NO HAY
}

//---------------------------------------------------------------------------------------
//                                      VOLUMEN
//---------------------------------------------------------------------------------------

export function VolumenPrisma() {

    var alto = parseInt(document.getElementById("alto").value);
    var lado_uno = parseInt(document.getElementById("lado_uno").value);
    var lado_dos = parseInt(document.getElementById("lado_dos").value);  
    var volumen = alto * lado_uno * lado_dos;

    document.getElementById("resultado1").textContent = volumen + " m³";


}

 

export function VolumenMediaEsfera() {

    var diametro = parseInt(document.getElementById("diametro").value);
    var volumen = (2/3) * 3.14159 * Math.pow((diametro/2),3);

    document.getElementById("resultado1").textContent = volumen + " m³";

}

 

// export function VolumenCono() {

//     var diametro = parseInt(document.getElementById("diametro").value);

//     var alto = parseInt(document.getElementById("alto").value);

//     var pi = 3.14159;

 

 

   

//     var volumen = (1/3) * Math.PI * (Math.pow(diametro/2),2) * alto;

 

 

//     document.getElementById("resultado1").textContent = volumen + " m³";

// }

 

export function VolumenEsfera() {

    var diametro = parseInt(document.getElementById("diametro").value);
    // var pi = 3.14159;
    var volumen = (4/3) * Math.PI * (Math.pow(diametro/2),3);


    document.getElementById("resultado1").textContent = volumen + " m³";

}

 

export function VolumenVolqueteTrapezoide() {

    var alto = parseInt(document.getElementById("alto").value);
    var largo_uno = parseInt(document.getElementById("largo_uno").value);
    var largo_dos = parseInt(document.getElementById("largo_dos").value);
    var ancho = parseInt(document.getElementById("ancho").value);
    var volumen = (((largo_uno + largo_dos)/2) * alto * ancho);

    document.getElementById("resultado1").textContent = volumen + " m³";

}

 

export function VolumenVolqueteTriangular() {

    var alto = parseInt(document.getElementById("alto").value);
    var largo_uno = parseInt(document.getElementById("largo_uno").value);
    var largo_dos = parseInt(document.getElementById("largo_dos").value);
    var ancho = parseInt(document.getElementById("ancho").value);
    var volumen = (((largo_uno + largo_dos)/2) * alto * ancho);


    document.getElementById("resultado1").textContent = volumen + " m³";

}

 

export function VolumenTanqueRectangular() {

    var alto = parseInt(document.getElementById("alto").value);
    var largo = parseInt(document.getElementById("largo").value);
    var ancho = parseInt(document.getElementById("ancho").value);
    var volumen = alto * largo * ancho;


    document.getElementById("resultado1").textContent = volumen + " m³";

}

 

export function VolumenCilindro() {

    var alto = parseInt(document.getElementById("alto").value);
    var diametro = parseInt(document.getElementById("diametro").value);
    var PI = 3.14159; // lo sustituire por el metodo Math.PI
    var volumen = Math.PI * (Math.pow((diametro/2), 2)) * alto;


    document.getElementById("resultado1").textContent = volumen + " m³";

}

 

export function VolumenPrismaRectangular() {

    var alto = parseInt(document.getElementById("alto").value);
    var largo = parseInt(document.getElementById("largo").value);
    var ancho = parseInt(document.getElementById("ancho").value);
    var volumen = alto * largo * ancho;

    document.getElementById("resultado1").textContent = volumen + " m³";

}


//---------------------------------------------------------------------------------------
//                                      OTHERS
//---------------------------------------------------------------------------------------

export function ProcContVol() {
    var volumenHormigon = parseInt(document.getElementById("volumenHormigon").value);
    var Cemt = parseInt(document.getElementById("Cemt").value);
    var Aren = parseInt(document.getElementById("Aren").value);
    var Agre = parseInt(document.getElementById("Agre").value);
    var bolsCemt = parseInt(document.getElementById("bolsCemt").value);
    var volmSec = parseInt(document.getElementById("volmSec").value);
    var Cant = parseInt(document.getElementById("Cant").value);
    var precBolsCem = parseInt(document.getElementById("precBolsCem").value);
    var RelAguCemt = parseInt(document.getElementById("RelAguCemt").value);
    var PrecConc = parseInt(document.getElementById("PrecConc").value);

    var VH = volumenHormigon;
    var VHS = VH * 1.54;
    var Peso_Cemento = Cemt * bolsCemt;
    var Cemento = Peso_Cemento / 2400; // Densidad del hormigón asumida: 2400 kg/m³
    var Cantidad_Cemento = VH * RelAguCemt;
    var Cantidad_Arena = Aren * RelAguCemt;
    var Cantidad_Agregado = Agre * RelAguCemt;
    var Cantidad_Agua = Cantidad_Cemento * RelAguCemt;
    var Bolsas_Cemento = Peso_Cemento / 50; // Asumiendo 1 bolsa de cemento = 50 kg
    var Coste_Bolsas_Cemento = Bolsas_Cemento * precBolsCem;
    var Coste_Concreto = VH * PrecConc;
    var Peso_Hormigon = VH * 2400; // Densidad del hormigón asumida: 2400 kg/m³

    document.getElementById("resultado1").textContent = VH + " m³";
    document.getElementById("resultado2").textContent = VHS + " m³";
    document.getElementById("resultado3").textContent = Peso_Cemento + " kg";
    document.getElementById("resultado4").textContent = Cemento + " m³";
    document.getElementById("resultado5").textContent = Cantidad_Arena + " m³";
    document.getElementById("resultado6").textContent = Cantidad_Agregado + " m³";
    document.getElementById("resultado7").textContent = Cantidad_Agua + " litros";
    document.getElementById("resultado8").textContent = Bolsas_Cemento + " bolsos";
    document.getElementById("resultado9").textContent = Coste_Bolsas_Cemento + " $";
    document.getElementById("resultado10").textContent = Coste_Concreto + " $";
    document.getElementById("resultado11").textContent = Peso_Hormigon + " kg";
}

export function LosaHormig() {
    var volumenHormigon = parseInt(document.getElementById("volumenHormigon").value);
    var cemento = parseInt(document.getElementById("cemento").value);
    var area = parseInt(document.getElementById("area").value);
    var agregado = parseInt(document.getElementById("agregado").value);
    var bolsaCemento = parseInt(document.getElementById("bolsaCemento").value);
    var volumenSeco = parseInt(document.getElementById("volumenSeco").value);
    var cantidad = parseInt(document.getElementById("cantidad").value);

    var suma = volumenHormigon - cemento + area + agregado + bolsaCemento + volumenSeco + cantidad;

    document.getElementById("resultado").textContent = suma;
}

export function superelevacion() {
    let ve = parseFloat(document.getElementById("velocidad").value);
    let R = parseFloat(document.getElementById("radio").value);

    let response= Math.pow(ve,2) / (9.8 * R)
    document.getElementById("respuestase").value =response
}

export function yeso(){
    let a = parseFloat(document.getElementById("areay").value);
    let e = parseFloat(document.getElementById("espezory").value);
    let response= a * e;
    console.log( document.getElementById("respuestay"));
document.getElementById("respuestay").value =response.toString()


}

export function asfalto(){
let a = parseFloat(document.getElementById("areaa").value);
let e = parseFloat(document.getElementById("espezora").value);
let response= a * e;
document.getElementById("respuestaa").textContent =response
}

export function ConcretaCalc() {
    var diametroCilindro = parseFloat(document.getElementById("diametroCilindro").value);
    var valorResistencia = parseFloat(document.getElementById("valorResistencia").value);
    var pi = 3.14159;



    var area = pi * Math.pow((diametroCilindro/2),2);
    area = area / 100;
    area = area.toFixed(3);
    

    var kgFuerza = valorResistencia * pi * Math.pow((diametroCilindro/2), 2) * 1000;
    var psiFuerza = kgFuerza * 0.1450377377;


    document.getElementById("resultado").textContent = area;
    document.getElementById("resultado2").textContent = kgFuerza;
    document.getElementById("resultado3").textContent = psiFuerza;


}


export function CimentacionCalc() {
    var cargaEstructura = parseFloat(document.getElementById("cargaEstr").value);
    var densidadSuelo = parseFloat(document.getElementById("densidadSuelo").value);
    var anguloReposo = parseFloat(document.getElementById("anguloReposo").value);
    const gravedad = 9.8;


    var anguloReposo = anguloReposo * (Math.PI/180)
    var profundidad = (cargaEstructura/(densidadSuelo*gravedad*(Math.tan(anguloReposo))));
    var profundidad = profundidad.toFixed(3)


    document.getElementById("resultado").textContent = profundidad;


}

export function DiagonalCalc() {
    var ladoB = parseFloat(document.getElementById("ladoB").value);
    var ladoH = parseFloat(document.getElementById("ladoH").value);


    var ladoC = Math.sqrt(Math.pow(ladoB, 2) + Math.pow(ladoH, 2));
    var ladoC = ladoC.toFixed(1)


    document.getElementById("resultado").textContent = ladoC;


}

export function TanqueCalc() {
    var diametroTanque = parseFloat(document.getElementById("diamTanque").value);
    var alturaTanque = parseFloat(document.getElementById("alturaTanque").value);
    var pi = 3.14159;


    var volumen = pi * Math.pow((diametroTanque/2), 2) * alturaTanque;
    var volumenFix = volumen.toFixed(2)

    var agua = volumen * 1000;
    agua = agua.toFixed(2)

    var aguaGalon = agua / 3.785;
    aguaGalon = aguaGalon.toFixed(2)

    document.getElementById("resultado").textContent = volumenFix;
    document.getElementById("resultado2").textContent = agua;
    document.getElementById("resultado3").textContent = aguaGalon;

}

export function EncofradoCalc() {
    var anchoEncofrado = parseFloat(document.getElementById("anchoEnc").value);
    var longitudEncofrado = parseFloat(document.getElementById("longEnc").value);
    var precio = parseFloat(document.getElementById("precioEnc").value);

    var area = anchoEncofrado * longitudEncofrado;
    
    var precioEncofraado = area * precio;

    document.getElementById("resultado").textContent = area;
    document.getElementById("resultado2").textContent = precioEncofraado;

}

export function AceroCalc() {
    var diametroAcero = parseFloat(document.getElementById("diamAc").value);
    var longitudAcero = parseFloat(document.getElementById("longAc").value);
    var cantidad = parseFloat(document.getElementById("cant").value);
    var precio = parseFloat(document.getElementById("precioAc").value);
    var densidadAcero = 7850;
    var pi = 3.14159;
    diametroAcero = diametroAcero / 1000;


    var pesoKg =  (pi * Math.pow((diametroAcero/2), 2) * longitudAcero * densidadAcero) * cantidad ;
    pesoKg = pesoKg.toFixed(3);

    var pesoLb = pesoKg * 2.205;
    pesoLb = pesoLb.toFixed(3);
    
    var pesoT = pesoKg / 1000;
    pesoT = pesoT.toFixed(3);

    var precioAc = precio * pesoKg;
    precioAc = precioAc.toFixed(2)

    document.getElementById("resultado").textContent = pesoKg;
    document.getElementById("resultado2").textContent = pesoLb;
    document.getElementById("resultado3").textContent = pesoT;
    document.getElementById("resultado4").textContent = precioAc;
}
