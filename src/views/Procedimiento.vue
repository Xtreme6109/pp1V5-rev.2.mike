<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button></ion-back-button>
                </ion-buttons>
                <ion-title>Procedimiento</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
            
            <ion-card>
                <ion-card-header>
                    <ion-card-title>
                        Procedimiento {{ this.$route.params.tipo }}
                    </ion-card-title>
                    <ion-card-subtitle>Listado de Procedimientos</ion-card-subtitle>
                </ion-card-header>
                <ion-card-content>
                    <div class="contenedor">
                        <div v-for="(Procedimiento,i) in Procedimientos" :key="i">
                            <div class="card" v-if="Procedimiento.opcion===this.$route.params.tipo">
                                <div class="imagen">
                                    <img :src="Procedimiento.imagen" />
                                </div>
                                <div class="html" v-html="Procedimiento.html"></div>
                                <ion-button class="boton" @click="Procedimiento.comprar">Comprar</ion-button>
                                <ion-button class="boton" @click="Procedimiento.calculo">Calcular</ion-button>
                                <ion-button class="boton" @click="Procedimiento.imprimir">Imprimir</ion-button>
                            </div>
                        </div>
                    </div>
                </ion-card-content>
            </ion-card>
        </ion-content>
    </ion-page>
</template>

<script>
     import {VolumenPrismaRectangular,VolumenCilindro,VolumenTanqueRectangular,VolumenVolqueteTriangular,VolumenVolqueteTrapezoide, VolumenEsfera,VolumenMediaEsfera,VolumenPrisma,AreaTrapecio,AreaFiguraPerspectiva,AreaCuadradoCopaCircularDoble,AreaCuadradoCopaCircular,AreaTrianguloEscaleno,AreaTrapezoide,AreaElipse,AreaTriangulo,AreaCuadrado,AreaRectangulo, ProcContVol , LosaHormig, yeso,asfalto,superelevacion, AceroCalc, EncofradoCalc, TanqueCalc, DiagonalCalc, CimentacionCalc, ConcretaCalc ,AreaCirculo} from '@/utils/calcular.js';
    
    
    import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton,IonButtons,IonBackButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle,IonCardContent, IonList, IonThumbnail, IonLabel, IonItem} from '@ionic/vue'
    export default {
        name: 'Procedimiento',
        components: {
        IonPage, IonHeader, IonToolbar, IonTitle, IonContent,IonButton,IonButtons,IonBackButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle,IonCardContent, IonList, IonThumbnail, IonLabel, IonItem
        }, 
        methods: {
       VolumenPrismaRectangular,VolumenCilindro, VolumenTanqueRectangular, VolumenVolqueteTriangular, VolumenVolqueteTrapezoide,  VolumenEsfera,VolumenMediaEsfera, VolumenPrisma,AreaTrapecio, AreaFiguraPerspectiva,AreaCuadradoCopaCircularDoble,  AreaCuadradoCopaCircular,AreaTrianguloEscaleno,   AreaTrapezoide,AreaElipse,AreaTriangulo, AreaRectangulo, AreaCuadrado,  ProcContVol, LosaHormig, yeso,asfalto,superelevacion, AceroCalc, EncofradoCalc, TanqueCalc, DiagonalCalc, CimentacionCalc, ConcretaCalc ,AreaCirculo
        },
        data(){
            return {
                Procedimientos: [
                    {id: 1,opcion:'Concreto por volumen', html: `
                    <style>.inputDis{border:1px solid #59e;border-radius:25px;padding:5px;text-align:center;width:80%;margin-bottom:10px}th{border:1px solid #000;padding:0 10px;border-radius:5px}td{border:1px solid #000;text-align:center;border-radius:5px}</style><table><tr><th colspan="3"><label>Volumen de hormigon</label><input class="inputDis" id="volumenHormigon" type="number"><label> m³</label></th></tr><tr><td><p>Cemento</p><input class="inputDis" id="Cemt" type="number"></td><td><p>Arena</p><input class="inputDis" id="Aren" type="number"></td><td><p>Agregado</p><input class="inputDis" id="Agre" type="number"></td></tr><tr><td><p>1 bolsa de cemento</p><input class="inputDis" id="bolsCemt" type="number"><label> kg</label></td><td><p>Volumen seco</p><input class="inputDis" id="volmSec" type="number"></td><td><p>Cantidad</p><input class="inputDis" id="Cant" type="number"></td></tr><tr><td colspan="2"><p>Precio de 1 bolsa de cemento</p><input class="inputDis" id="precBolsCem" type="number"><label> $</label></td><td><p>Relacion Agua-Cemento</p><input class="inputDis" id="RelAguCemt" type="number"></td></tr><tr><td colspan="3"><p>Precio del concreto</p><input class="inputDis" id="PrecConc" type="number"><label> Por m³</label></td></tr></table><p></p><table><tr><th>Material</th><th>Cantidad</th><th>Unidad</th></tr><tr><td>Volumen de hormigon</td><td><p><span id="resultado1"></span></p></td><td>m3</td></tr><tr><td>Volumen de hormigon seco</td><td><p><span id="resultado2"></span></p></td><td>m3</td></tr><tr><td>Peso de cemento</td><td><p><span id="resultado3"></span></p></td><td>kg</td></tr><tr><td>Cemento</td><td><p><span id="resultado4"></span></p></td><td>m3</td></tr><tr><td>Arena</td><td><p><span id="resultado5"></span></p></td><td>m3</td></tr><tr><td>Agregado</td><td><p><span id="resultado6"></span></p></td><td>m3</td></tr><tr><td>Agua</td><td><p><span id="resultado7"></span></p></td><td>litro</td></tr><tr><td>Bolsas de cemento</td><td><p><span id="resultado8"></span></p></td><td>bolsos</td></tr><tr><td>Coste de bolsas de cemento</td><td><p><span id="resultado9"></span></p></td><td>$</td></tr><tr><td>Coste concreto</td><td><p><span id="resultado10"></span></p></td><td>$</td></tr><tr><td>Peso de hormigon</td><td><p><span id="resultado11"></span></p></td><td>Kg</td></tr></table>
                    `, imagen: '/img2.jpg',calculo: ProcContVol, comprar: '',imprimir: ''
                    },
                    {id: 2,opcion:'Losa de hormigon', html: `
                    <style>.inputDis{border:1px solid #59e;border-radius:25px;padding:5px;text-align:center;width:80%;margin-bottom:10px}th{border:1px solid #000;padding:10px;border-radius:5px}td{border:1px solid #000;text-align:center;border-radius:5px}</style><table><tr><th colspan="3"><label>Longitud L: </label><input class="inputDis" id="longL" type="number"></th></tr><tr><th colspan="3"><label>Ancho W: </label><input class="inputDis" id="anchW" type="number"></th></tr><tr><th colspan="3"><label>Grosor T: </label><input class="inputDis" id="GrosT" type="number"></th></tr><tr><td><p>Cemento</p><input class="inputDis" id="Cemt" type="number"></td><td><p>Arena</p><input class="inputDis" id="Aren" type="number"></td><td><p>Agregado</p><input class="inputDis" id="Agre" type="number"></td></tr><tr><td><p>1 bolsa de cemento</p><input class="inputDis" id="bolsCemt" type="number"><label> Kg</label></td><td><p>Volumen seco</p><input class="inputDis" id="volmSec" type="number"></td><td><p>Cantidad</p><input class="inputDis" id="Cant" type="number"></td></tr><tr><td colspan="2"><p>Precio de 1 bolsa de cemento</p><input class="inputDis" id="precBolsCem" type="number"><label> $</label></td><td><p>Relacion agua cemento</p><input class="inputDis" id="RelAguCemt" type="number"></td></tr><tr><td colspan="3"><p>Precio del concreto</p><input class="inputDis" id="PrecConc" type="number"><label> Por m3</label></td></tr></table><table><tr><th>Material</th><th>cantidad</th><th>unidad</th></tr><tr><td>Volumen de hormigon</td><td><p><span id="resultado"></span></p></td><td>m3</td></tr><tr><td>Volumen de hormigon seco</td><td><p><span id="resultado2"></span></p></td><td>m3</td></tr><tr><td>Peso de cemento</td><td><p><span id="resultado3"></span></p></td><td>kg</td></tr><tr><td>Cemento</td><td><p><span id="resultado4"></span></p></td><td>m3</td></tr><tr><td>Arena</td><td><p><span id="resultado5"></span></p></td><td>m3</td></tr><tr><td>Agregado</td><td><p><span id="resultado6"></span></p></td><td>m3</td></tr><tr><td>Agua</td><td><p><span id="resultado7"></span></p></td><td>litro</td></tr><tr><td>Bolsas de cemento</td><td><p><span id="resultado8"></span></p></td><td>bolsos</td></tr><tr><td>Coste de bolsas de cemento</td><td><p><span id="resultado9"></span></p></td><td>$</td></tr><tr><td>Coste concreto</td><td><p><span id="resultado10"></span></p></td><td>$</td></tr><tr><td>Peso de hormigon</td><td><p><span id="resultado11"></span></p></td><td>Kg</td></tr></table>
                    `, imagen: '/img2.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                    },
                    {id: 3,opcion:'Columna cuadrada de hormigon', html: `
                    <style>.inputDis{border:1px solid #59e;border-radius:25px;padding:5px;text-align:center;width:80%;margin-bottom:10px}th{border:1px solid #000;padding:10px;border-radius:5px}td{border:1px solid #000;text-align:center;border-radius:5px}</style><table><tr><th colspan="3"><label>Longitud a: </label><input class="inputDis" id="longA" type="number"></th></tr><tr><th colspan="3"><label>Ancho b: </label><input class="inputDis" id="anchB" type="number"></th></tr><tr><th colspan="3"><label>Grosor h: </label><input class="inputDis" id="GrosH" type="number"></th></tr><tr><td><p>Cemento</p><input class="inputDis" id="Cemt" type="number"></td><td><p>Arena</p><input class="inputDis" id="Aren" type="number"></td><td><p>Agregado</p><input class="inputDis" id="Agre" type="number"></td></tr><tr><td><p>1 bolsa de cemento</p><input class="inputDis" id="bolsCemt" type="number"><label> Kg</label></td><td><p>volumen seco</p><input class="inputDis" id="volmSec" type="number"></td><td><p>Cantidad</p><input class="inputDis" id="Cant" type="number"></td></tr><tr><td colspan="2"><p>Precio de 1 bolsa de cemento</p><input class="inputDis" id="precBolsCem" type="number"><label> $</label></td><td><p>Relacion agua cemento</p><input class="inputDis" id="RelAguCemt" type="number"></td></tr><tr><td colspan="3"><p>Precio del concreto</p><input class="inputDis" id="PrecConc" type="number"></td></tr></table><table><tr><th>Material</th><th>Cantidad</th><th>Unidad</th></tr><tr><td>Volumen de hormigon</td><td><p><span id="resultado"></span></p></td><td>m3</td></tr><tr><td>Volumen de hormigon seco</td><td><p><span id="resultado2"></span></p></td><td>m3</td></tr><tr><td>Peso de cemento</td><td><p><span id="resultado3"></span></p></td><td>kg</td></tr><tr><td>Cemento</td><td><p><span id="resultado4"></span></p></td><td>m3</td></tr><tr><td>Arena</td><td><p><span id="resultado5"></span></p></td><td>m3</td></tr><tr><td>Agregado</td><td><p><span id="resultado6"></span></p></td><td>m3</td></tr><tr><td>Agua</td><td><p><span id="resultado7"></span></p></td><td>litro</td></tr><tr><td>Bolsas de cemento</td><td><p><span id="resultado8"></span></p></td><td>bolsos</td></tr><tr><td>Coste de bolsas de cemento</td><td><p><span id="resultado9"></span></p></td><td>$</td></tr><tr><td>Coste concreto</td><td><p><span id="resultado10"></span></p></td><td>$</td></tr><tr><td>Peso de hormigon</td><td><p><span id="resultado11"></span></p></td><td>Kg</td></tr></table>
                    `, imagen: '/img2.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                    },
                    {id: 4,opcion:'Concreto de columna redonda', html: `
                    <style>.inputDis{border:1px solid #59e;border-radius:25px;padding:5px;text-align:center;width:80%;margin-bottom:10px}th{border:1px solid #000;padding:10px;border-radius:5px}td{border:1px solid #000;text-align:center;border-radius:5px}</style><table><tr><th colspan="3"><label>Diametro d: </label><input class="inputDis" id="DiamD" type="number"></th></tr><tr><th colspan="3"><label>Altura h: </label><input class="inputDis" id="AltuH" type="number"></th></tr><tr><td><p>Cemento</p><input class="inputDis" id="Cemt" type="number"></td><td><p>Arena</p><input class="inputDis" id="Aren" type="number"></td><td><p>Agregado</p><input class="inputDis" id="Agre" type="number"></td></tr><tr><td><p>1 bolsa de cemento</p><input class="inputDis" id="bolsCemt" type="number"><label> Kg</label></td><td><p>volumen seco</p><input class="inputDis" id="volmSec" type="number"></td><td><p>Cantidad</p><input class="inputDis" id="Cant" type="number"></td></tr><tr><td colspan="2"><p>Precio de 1 bolsa de cemento</p><input class="inputDis" id="precBolsCem" type="number"><label> $</label></td><td><p>Relacion agua cemento</p><input class="inputDis" id="RelAguCemt" type="number"></td></tr><tr><td colspan="3"><p>Precio del concreto</p><input class="inputDis" id="PrecConc" type="number"><label> $</label></td></tr></table><table><tr><th>Material</th><th>Cantidad</th><th>unidad</th></tr><tr><td>Volumen de hormigon</td><td><p><span id="resultado"></span></p></td><td>m3</td></tr><tr><td>Volumen de hormigon seco</td><td><p><span id="resultado2"></span></p></td><td>m3</td></tr><tr><td>Peso de cemento</td><td><p><span id="resultado3"></span></p></td><td>kg</td></tr><tr><td>Cemento</td><td><p><span id="resultado4"></span></p></td><td>m3</td></tr><tr><td>Arena</td><td><p><span id="resultado5"></span></p></td><td>m3</td></tr><tr><td>Agregado</td><td><p><span id="resultado6"></span></p></td><td>m3</td></tr><tr><td>Agua</td><td><p><span id="resultado7"></span></p></td><td>litro</td></tr><tr><td>Bolsas de cemento</td><td><p><span id="resultado8"></span></p></td><td>bolsos</td></tr><tr><td>Coste de bolsas de cemento</td><td><p><span id="resultado9"></span></p></td><td>$</td></tr><tr><td>Coste concreto</td><td><p><span id="resultado10"></span></p></td><td>$</td></tr><tr><td>Peso de hormigon</td><td><p><span id="resultado11"></span></p></td><td>Kg</td></tr></table>
                    `, imagen: '/img2.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                    },
                    {id: 5,opcion:'Tanque circular de hormigon', html: `
                    <style>.inputDis{border:1px solid #59e;border-radius:25px;padding:5px;text-align:center;width:80%;margin-bottom:10px}th{border:1px solid #000;padding:0 10px;border-radius:5px}td{border:1px solid #000;text-align:center;border-radius:5px}</style><table><tr><th colspan="3"><label>Diametro exterior d: </label><input class="inputDis" id="DiamExtd" type="number"></th></tr><tr><th colspan="3"><label>Altura h: </label><input class="inputDis" id="AltuH" type="number"></th></tr><tr><th colspan="3"><label>Grosor t: </label><input class="inputDis" id="GrosT" type="number"></th></tr><tr><td><p>Cemento</p><input class="inputDis" id="Cemt" type="number"></td><td><p>Arena</p><input class="inputDis" id="Aren" type="number"></td><td><p>Agregado</p><input class="inputDis" id="Agre" type="number"></td></tr><tr><td><p>1 bolsa de cemento</p><input class="inputDis" id="bolsCemt" type="number"><label> Kg</label></td><td><p>volumen seco</p><input class="inputDis" id="volmSec" type="number"></td><td><p>Cantidad</p><input class="inputDis" id="Cant" type="number"></td></tr><tr><td colspan="2"><p>Precio de 1 bolsa de cemento</p><input class="inputDis" id="precBolsCem" type="number"><label> $</label></td><td><p>Relacion agua cemento</p><input class="inputDis" id="RelAguCemt" type="number"></td></tr><tr><td colspan="3"><p>Precio del concreto</p><input class="inputDis" id="PrecConc" type="number"><label> $</label></td></tr></table><table><tr><th>Material</th><th>Cantidad</th><th>Unidad</th></tr><tr><td>Volumen de hormigon</td><td><p><span id="resultado1"></span></p></td><td>m3</td></tr><tr><td>Volumen de hormigon seco</td><td><p><span id="resultado2"></span></p></td><td>m3</td></tr><tr><td>Peso de cemento</td><td><p><span id="resultado3"></span></p></td><td>kg</td></tr><tr><td>Cemento</td><td><p><span id="resultado4"></span></p></td><td>m3</td></tr><tr><td>Arena</td><td><p><span id="resultado5"></span></p></td><td>m3</td></tr><tr><td>Agregado</td><td><p><span id="resultado6"></span></p></td><td>m3</td></tr><tr><td>Agua</td><td><p><span id="resultado7"></span></p></td><td>Litro</td></tr><tr><td>Bolsas de cemento</td><td><p><span id="resultado8"></span></p></td><td>bolsos</td></tr><tr><td>Coste de bolsas de cemento</td><td><p><span id="resultado9"></span></p></td><td>$</td></tr><tr><td>Coste concreto</td><td><p><span id="resultado10"></span></p></td><td>$</td></tr><tr><td>Peso de hormigon</td><td><p><span id="resultado11"></span></p></td><td>Kg</td></tr></table>
                    `, imagen: '/img2.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                    },
                    {id: 6,opcion:'Ladrillos por volumen', html: `
                    <style>.inputDis{border:1px solid #59e;border-radius:25px;padding:5px;text-align:center;width:80%;margin-bottom:10px}th{border:1px solid #000;padding:0 10px;border-radius:5px}td{border:1px solid #000;text-align:center;border-radius:5px}</style><table><tr><th colspan="3"><label>Volumen de pared </label><input style="width" class="inputDis" id="VolmPard" type="number"><label>m3</label></th></tr><tr><td><p>Longitud L: </p><input class="inputDis" id="LongL" type="number"><label> mm</label></td><td><p>Altura H</p><input class="inputDis" id="AltuH" type="number"><label> mm</label></td><td><p>Grosor T</p><input class="inputDis" id="GrosT" type="number"><label> mm</label></td></tr><tr><td><p>Cemento</p><input class="inputDis" id="Cemt" type="number"></td><td><p>Arena</p><input class="inputDis" id="Aren" type="number"></td><td><p>Cantidad</p><input class="inputDis" id="Cant" type="number"></td></tr><tr><td colspan="3"><p>Precio de los ladrillos</p><input class="inputDis" id="PrecLadr" type="number"></td></tr></table><table><tr><th>Material</th><th>cantidad</th><th>unidad</th></tr><tr><td>Volumen Pared</td><td><p><span id="resultado1"></span></p></td><td>m3</td></tr><tr><td>Numero de ladrillos</td><td><p><span id="resultado2"></span></p></td><td>Ladrillos</td></tr><tr><td>Costo de ladrillos</td><td><p><span id="resultado3"></span></p></td><td>$</td></tr><tr><td>Mortero seco</td><td><p><span id="resultado4"></span></p></td><td>m3</td></tr><tr><td>Cemento</td><td><p><span id="resultado5"></span></p></td><td>m3</td></tr><tr><td>Arena</td><td><p><span id="resultado6"></span></p></td><td>m3</td></tr><tr><td>Cemento</td><td><p><span id="resultado7"></span></p></td><td>kg</td></tr></table>
                    `, imagen: '/img2.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                    },
                    {id: 7,opcion:'Ladrillos de pared', html: `
                    <style>.inputDis{border:1px solid #59e;border-radius:25px;padding:5px;text-align:center;width:80%;margin-bottom:10px}th{border:1px solid #000;padding:0 10px;border-radius:5px}td{border:1px solid #000;text-align:center;border-radius:5px}</style><table><tr><td><label>Longitud L: </label><input class="inputDis" id="longL1" type="number"></td><td><label>Longitud L: </label><input class="inputDis" id="LongL2" type="number"></td><td><label>Altura H: </label><input class="inputDis" id="AltuH1" type="number"></td></tr><tr><td><p>Altura H: </p><input class="inputDis" id="AltuH2" type="number"></td><td><p>Grosto T</p><input class="inputDis" id="GrosT1" type="number"></td><td><p>Grosor T</p><input class="inputDis" id="GrosT2" type="number"></td></tr><tr><td><p>Cemento</p><input class="inputDis" id="Cemt" type="number"></td><td><p>Arena</p><input class="inputDis" id="Aren" type="number"></td><td><p>Cantidad</p><input class="inputDis" id="Cant" type="number"></td></tr><tr><td colspan="3"><p>Restar arena</p><input class="inputDis" id="ResAren" type="number"></td></tr><tr><td colspan="3"><p>Precio de los ladrillos</p><input class="inputDis" id="PrecLadr" type="number"></td></tr></table><table><tr><th>Material</th><th>cantidad</th><th>unidad</th></tr><tr><td>Volumen Pared</td><td><p><span id="resultado1"></span></p></td><td>m3</td></tr><tr><td>Numero de ladrillos</td><td><p><span id="resultado2"></span></p></td><td>Ladrillos</td></tr><tr><td>Costo de ladrillos</td><td><p><span id="resultado3"></span></p></td><td>$</td></tr><tr><td>Mortero seco</td><td><p><span id="resultado4"></span></p></td><td>m3</td></tr><tr><td>Cemento</td><td><p><span id="resultado5"></span></p></td><td>m3</td></tr><tr><td>Arena</td><td><p><span id="resultado6"></span></p></td><td>m3</td></tr><tr><td>Cemento</td><td><p><span id="resultado7"></span></p></td><td>kg</td></tr></table>
                    `, imagen: '/img2.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                    },
                    {id: 8,opcion:'Ladrillos de pared circular', html: `
                    <style>.inputDis{border:1px solid #59e;border-radius:25px;padding:5px;text-align:center;width:80%;margin-bottom:10px}th{border:1px solid #000;padding:0 10px;border-radius:5px}td{border:1px solid #000;text-align:center;border-radius:5px}</style><table><tr><td><label>Diametro (d): </label><input class="inputDis" id="DiamD" type="number"></td><td><label>Longitud L: </label><input class="inputDis" id="LongL" type="number"></td><td><label>Altura (h): </label><input class="inputDis" id="AltuH1" type="number"></td></tr><tr><td><p>Altura H: </p><input class="inputDis" id="AltuH2" type="number"></td><td><p>Grosor (T)</p><input class="inputDis" id="Grot1" type="number"></td><td><p>Grosor T</p><input class="inputDis" id="Grost2" type="number"></td></tr><tr><td><p>Cemento</p><input class="inputDis" id="Cemt" type="number"></td><td><p>Arena</p><input class="inputDis" id="Aren" type="number"></td><td><p>Cantidad</p><input class="inputDis" id="Cant" type="number"></td></tr><tr><td colspan="3"><p>Restar Arena</p><input class="inputDis" id="RestAren" type="number"></td></tr><tr><td colspan="3"><p>Precio de los ladrillos</p><input class="inputDis" id="PrecLadr" type="number"></td></tr></table><table><tr><th>Material</th><th>cantidad</th><th>unidad</th></tr><tr><td>Volumen Pared</td><td><p><span id="resultado1"></span></p></td><td>m3</td></tr><tr><td>Numero de ladrillos</td><td><p><span id="resultado2"></span></p></td><td>Ladrillos</td></tr><tr><td>Costo de ladrillos</td><td><p><span id="resultado3"></span></p></td><td>$</td></tr><tr><td>Mortero seco</td><td><p><span id="resultado4"></span></p></td><td>m3</td></tr><tr><td>Cemento</td><td><p><span id="resultado5"></span></p></td><td>m3</td></tr><tr><td>Arena</td><td><p><span id="resultado6"></span></p></td><td>m3</td></tr><tr><td>Cemento</td><td><p><span id="resultado7"></span></p></td><td>kg</td></tr></table>
                    `, imagen: '/img2.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                    },
                    {id: 9,opcion:'Bloques', html: `
                    <style>.inputDis{border:1px solid #59e;border-radius:25px;padding:5px;text-align:center;width:80%;margin-bottom:10px}th{border:1px solid #000;padding:0 10px;border-radius:5px}td{border:1px solid #000;text-align:center;border-radius:5px}</style><table><tr><td><label>Longitud L: </label><input class="inputDis" id="LongL1" type="number"></td><td><label>Longitud L: </label><input class="inputDis" id="LongL2" type="number"></td><td><label>Altura h: </label><input class="inputDis" id="AltuH1" type="number"></td></tr><tr><td><p>Ancho W: </p><input class="inputDis" id="AnchW" type="number"></td><td><p>Grosor T</p><input class="inputDis" id="GrosT" type="number"></td><td><p>Altura h</p><input class="inputDis" id="AltuH2" type="number"></td></tr><tr><td><p>Cemento</p><input class="inputDis" id="Cemt" type="number"></td><td><p>Arena</p><input class="inputDis" id="Aren" type="number"></td><td><p>Cantidad</p><input class="inputDis" id="Cant" type="number"></td></tr><tr><td colspan="3"><p>Restar Arena</p><input class="inputDis" id="RestAren" type="number"></td></tr><tr><td colspan="3"><p>Precio de los ladrillos</p><input class="inputDis" id="PrecLadr" type="number"></td></tr></table><table><tr><th>Material</th><th>cantidad</th><th>unidad</th></tr><tr><td>Volumen Pared</td><td><p><span id="resultado1"></span></p></td><td>m3</td></tr><tr><td>Numero de Bloques</td><td><p><span id="resultado2"></span></p></td><td>Bloques</td></tr><tr><td>Costo de Bloques</td><td><p><span id="resultado3"></span></p></td><td>$</td></tr><tr><td>Mortero seco</td><td><p><span id="resultado4"></span></p></td><td>m3</td></tr><tr><td>Cemento</td><td><p><span id="resultado5"></span></p></td><td>m3</td></tr><tr><td>Arena</td><td><p><span id="resultado6"></span></p></td><td>m3</td></tr><tr><td>Cemento</td><td><p><span id="resultado7"></span></p></td><td>kg</td></tr></table>
                    `, imagen: '/img2.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                    },
                    {id: 10,opcion:'Peso unitario seco', html: `
                    <style>.inputDis{border:1px solid #59e;border-radius:25px;padding:5px;text-align:center;width:80%;margin-bottom:10px}th{border:1px solid #000;padding:0 10px;border-radius:5px}td{border:1px solid #000;text-align:center;border-radius:5px}</style><table><tr><td><label>Gravedad especifica del suelo</label><input class="inputDis" id="GravEspSuel" type="number"></td></tr><tr><td><label>Peso unitario</label><input class="inputDis" id="PesoUnit" type="number"></td></tr><tr><td><label>Porcion de vacio</label><input class="inputDis" id="PorcVaci" type="number"></td></tr></table><table><tr><th>Material</th><th>cantidad</th><th>unidad</th></tr><tr><td>Peso unitario seco</td><td><p><span id="resultado1"></span></p></td><td>N/m3</td></tr></table>
                    `, imagen: '/img2.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                    },
                    {id: 11,opcion:'Peso unitario humedad', html: `
                    <style>.inputDis{border:1px solid #59e;border-radius:25px;padding:5px;text-align:center;width:80%;margin-bottom:10px}th{border:1px solid #000;padding:0 10px;border-radius:5px}td{border:1px solid #000;text-align:center;border-radius:5px}</style><table><tr><td><label>Contenido de humedad</label><input class="inputDis" id="ContHume" type="number"></td></tr><tr><td><label>Gravedad especifica del suelo</label><input class="inputDis" id="GravEspSuel" type="number"></td></tr><tr><td><label>Peso unitario de agua</label><input class="inputDis" id="PesoUnitAgua" type="number"></td></tr><tr><td><label>Porcion de vacio</label><input class="inputDis" id="PorcVaci" type="number"></td></tr></table><table><tr><th>Material</th><th>cantidad</th><th>unidad</th></tr><tr><td>Peso unitario seco</td><td><p><span id="resultado1"></span></p></td><td>N/m3</td></tr></table>
                    `, imagen: '/img2.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                    },
                    {id: 12,opcion:'Capacidad portante de cimientacion circular', html: `
                    <style>.inputDis{border:1px solid #59e;border-radius:25px;padding:5px;text-align:center;width:80%;margin-bottom:10px}th{border:1px solid #000;padding:0 10px;border-radius:5px}td{border:1px solid #000;text-align:center;border-radius:5px}</style><table><tr><td><label>Cohesion Efectiva</label><input class="inputDis" id="CoheEfec" type="number"></td><td><label>Factor de capacidad de carga N_C</label><input class="inputDis" id="FactCapCarNC" type="number"></td><td><label>Esfuerzo efectivo vertical</label><input class="inputDis" id="EsfuEfecVet" type="number"></td></tr><tr><td><label>Factor de capacidad de carga N_q</label><input class="inputDis" id="FactCapCarNq" type="number"></td><td><label>Peso unitario efectivo</label><input class="inputDis" id="PesoUniEfec" type="number"></td><td><label>Peso o diametro de la cimentacion</label><input class="inputDis" id="PesoDiamCime" type="number"></td></tr><tr><td colspan="3"><label>Factor de capacidad de rondamiento N_gama</label><input class="inputDis" id="FactCapaRondNga" type="number"></td></tr></table><table><tr><th>Material</th><th>cantidad</th><th>unidad</th></tr><tr><td>Capacidad de carga</td><td><p><span id="resultado1"></span></p></td><td>N/m3</td></tr></table>
                    `, imagen: '/img2.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                    },
                    {id: 13,opcion:'Capacidad portante de cimiento continua', html: `
                    <style>.inputDis{border:1px solid #59e;border-radius:25px;padding:5px;text-align:center;width:80%;margin-bottom:10px}th{border:1px solid #000;padding:0 10px;border-radius:5px}td{border:1px solid #000;text-align:center;border-radius:5px}</style><table><tr><td><label>Cohesion Efectiva</label><input class="inputDis" id="CoheEfec" type="number"></td><td><label>Factor de capacidad de carga N_C</label><input class="inputDis" id="FactCapCarNC" type="number"></td><td><label>Esfuerzo efectivo vertical</label><input class="inputDis" id="EsfuEfecVet" type="number"></td></tr><tr><td><label>Factor de capacidad de carga N_q</label><input class="inputDis" id="FactCapCarNq" type="number"></td><td><label>Peso unitario efectivo</label><input class="inputDis" id="PesoUniEfec" type="number"></td><td><label>Peso o diametro de la cimentacion</label><input class="inputDis" id="PesoDiamCime" type="number"></td></tr><tr><td colspan="3"><label>Factor de capacidad de rondamiento N_gama</label><input class="inputDis" id="FactCapaRondNga" type="number"></td></tr></table><table><tr><th>Material</th><th>cantidad</th><th>unidad</th></tr><tr><td>Capacidad de carga</td><td><p><span id="resultado1"></span></p></td><td>N/m3</td></tr></table>
                    `, imagen: '/img2.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                    },
                    {id: 14,opcion:'Super Elevación cálculo', html: `
                    <div><div><h1>Super Elevacion</h1><label for="velocidad">Velocidad del coche</label><input type="number" label="Area" id="velocidad"><br><br><label for="radio">Radio de la carretera</label><input type="number" label="Espezor" id="radio"><br><br><label for="respuestay">Respuesta</label><input type="text" id="respuestase"></div></div>
                    `, imagen: '/img2.jpg',calculo: superelevacion, comprar: '',imprimir: ''
                    },
                    {id: 15,opcion:'Barra de hélice', html: `
                    <p>colocar html aqui </p>
                    `, imagen: '/img2.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                    },
                    {id: 16,opcion:'Yeso',html: `
                        <div><div><h1>Yeso</h1><label for="areay">Area</label><input type="number" label="Area" id="areay"><br><br><label for="espezory">Espezor</label><input type="number" label="Espezor" id="espezory"><br><br><label for="respuestay">Respuesta</label><input type="text" id="respuestay"></div></div>
                    `,imagen: '/img2.jpg',calculo: yeso,comprar: '',imprimir: ''
                    },
                    {id: 17,opcion:'Relleno', html: `
                    <p>colocar html aqui </p>
                    `, imagen: '/img2.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                    },
                    {id: 18,opcion:'Excavación', html: `
                    <p>colocar html aqui </p>
                    `, imagen: '/img2.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                    },
                    {id: 19,opcion:'Pintar', html: `
                    <p>colocar html aqui </p>
                    `, imagen: '/img2.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                    },
                    {id: 20,opcion:'Relleno de taludes cálculo', html: `
                    <p>colocar html aqui </p>
                    `, imagen: '/img2.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                    },
                    {id: 21,opcion:'Asfalto', html: `
                    <div><div><h1>Asfalto</h1><label for="areaa">Area</label><input type="number" label="Area" id="areaa"><br><br><label for="espezora">Espezor</label><input type="number" label="Espezor" id="espezora"><br><br><label for="respuestaa">Respuesta</label><input type="text" id="respuestaa" readonly="readonly"></div></div>
                    `, imagen: '/img2.jpg',calculo: asfalto, comprar: '',imprimir: ''
                    },
                    {id: 22,opcion:'Azulejos', html: `
                    <p>colocar html aqui </p>
                    `, imagen: '/img2.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                    },
                    {id: 23,opcion:'Terrazo', html: `
                    <p>colocar html aqui </p>
                    `, imagen: '/img2.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                    },
                    {id: 24,opcion:'Ladrillos de piso', html: `
                    <p>colocar html aqui </p>
                    `, imagen: '/img2.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                    },
                    {id: 25,opcion:'anti termitas', html: `
                    <p>colocar html aqui </p>
                    `, imagen: '/img2.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                    },
                    {id: 26,opcion:'Acero', html:`
                    <style>.inputDis{border:1px solid #59e;border-radius:25px;padding:5px;text-align:center;width:80%;margin-bottom:10px}th{border:1px solid #000;padding:10px;border-radius:5px}td{border:1px solid #000;text-align:center;border-radius:5px}</style><table><tr><th colspan="3"><label>Diametro (D)</label><input class="inputDis" id="diamAc" type="number"><label> mm</label></th></tr><tr><th colspan="3"><label>Longitud (L)</label><input class="inputDis" id="longAc" type="number"><label> m</label></th></tr><tr><td><p>Cantidad</p><input class="inputDis" id="cant" type="number"><label> #</label></td></tr><tr><th><p>Precio</p><input class="inputDis" id="precioAc" type="number"><label> $</label></td></tr></table><table><tr><th>Material</th><th>Cantidad</th><th>Unidad</th></tr><tr><td>Peso en Kg</td><td><p><span id="resultado"></span></p></td><td>Kg</td></tr><tr><td>Peso en Lb</td><td><p><span id="resultado2"></span></p></td><td>Lb</td></tr><tr><td>Peso en Toneladas</td><td><p><span id="resultado3"></span></p></td><td>T</td></tr><tr><td>Costo Total</td><td><p><span id="resultado4"></span></p></td><td>$</td></tr></table>
                    `, imagen: '/img2.jpg',calculo: AceroCalc, comprar: '',imprimir: ''
                    },
                    {id: 27,opcion:'Encofrado', html: `
                    <style>.inputDis{border:1px solid #59e;border-radius:25px;padding:5px;text-align:center;width:80%;margin-bottom:10px}th{border:1px solid #000;padding:10px;border-radius:5px}td{border:1px solid #000;text-align:center;border-radius:5px}</style><table><tr><th colspan="3"><label>Longitud</label><input class="inputDis" id="longEnc" type="number"><label> m</label></th></tr><tr><th colspan="3"><label><p>Ancho</p></label><input class="inputDis" id="anchoEnc" type="number"><label> m</label></th></tr><tr><th><p>Precio del encofrado</p><input class="inputDis" id="precioEnc" type="number"><label> $</label></td></tr></table><table><tr><th>Material</th><th>Cantidad</th><th>Unidad</th></tr><tr><td>Area</td><td><p><span id="resultado"></span></p></td><td>m³</td></tr><tr><td>Coste Total</td><td><p><span id="resultado2"></span></p></td><td>$</td></tr></table>
                    `, imagen: '/img2.jpg',calculo: EncofradoCalc, comprar: '',imprimir: ''
                    },
                    {id: 28,opcion:'Tanque de agua', html: `
                    <style>.inputDis{border:1px solid #59e;border-radius:25px;padding:5px;text-align:center;width:80%;margin-bottom:10px}th{border:1px solid #000;padding:10px;border-radius:5px}td{border:1px solid #000;text-align:center;border-radius:5px}</style><table><tr><th colspan="3"><label>Diametro</label><input class="inputDis" id="diamTanque" type="number"><label> m</label></th></tr><tr><th colspan="3"><label><p>Altura</p></label><input class="inputDis" id="alturaTanque" type="number"><label> m</label></th></tr></table><table><tr><th>Material</th><th>Cantidad</th><th>Unidad</th></tr><tr><td>Volumen</td><td><p><span id="resultado"></span></p></td><td>m³</td></tr><tr><td>Cantidad de agua</td><td><p><span id="resultado2"></span></p></td><td>Lt</td></tr><tr><td>Cantidad de agua</td><td><p><span id="resultado3"></span></p></td><td>Gal</td></tr></table>
                    `, imagen: '/img2.jpg',calculo: TanqueCalc, comprar: '',imprimir: ''
                    },
                    {id: 29,opcion:'BOQ', html: `
                    <p>colocar html aqui </p>
                    `, imagen: '/img2.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                    },
                    {id: 30,opcion:'Diagonal', html: `
                    <style>.inputDis{border:1px solid #59e;border-radius:25px;padding:5px;text-align:center;width:80%;margin-bottom:10px}th{border:1px solid #000;padding:10px;border-radius:5px}td{border:1px solid #000;text-align:center;border-radius:5px}</style><table><tr><th colspan="3"><label><p>Lado B</p></label><input class="inputDis" id="ladoB" type="number"><label> m</label></th></tr><tr><th colspan="3"><label><p>Lado H</p></label><input class="inputDis" id="ladoH" type="number"><label> m</label></th></tr></table><table><tr><th>Material</th><th>Cantidad</th><th>Unidad</th></tr><tr><td>Lado C</td><td><p><span id="resultado"></span></p></td><td>m</td></tr></table>
                    `, imagen: '/img2.jpg',calculo: DiagonalCalc, comprar: '',imprimir: ''
                    },
                    {id: 31,opcion:'Profundidad de la cimentación', html: `
                    <style>.inputDis{border:1px solid #59e;border-radius:25px;padding:5px;text-align:center;width:80%;margin-bottom:10px}th{border:1px solid #000;padding:10px;border-radius:5px}td{border:1px solid #000;text-align:center;border-radius:5px}</style><table><tr><th colspan="3"><label>Carga de la estructura</label><input class="inputDis" id="cargaEstr" type="number"><label> kN/m</label></th></tr><tr><th colspan="3"><label><p>Densidad del suelo</p></label><input class="inputDis" id="densidadSuelo" type="number"><label> kN/m</label></th></tr><tr><th colspan="3"><label><p>Angulo de reposo</p></label><input class="inputDis" id="anguloReposo" type="number"><label> φ</label></th></tr></table><table><tr><th>Material</th><th>Cantidad</th><th>Unidad</th></tr><tr><td>Profundidad</td><td><p><span id="resultado"></span></p></td><td>m</td></tr></table>
                    `, imagen: '/img2.jpg',calculo: CimentacionCalc, comprar: '',imprimir: ''
                    },
                    {id: 32,opcion:'Prueba concreta', html: `
                    <style>.inputDis{border:1px solid #59e;border-radius:25px;padding:5px;text-align:center;width:80%;margin-bottom:10px}th{border:1px solid #000;padding:10px;border-radius:5px}td{border:1px solid #000;text-align:center;border-radius:5px}</style><table><tr><th colspan="3"><label><p>Diametro del cilindro</p></label><input class="inputDis" id="diametroCilindro" type="number"><label> mm</label></th></tr><tr><th colspan="3"><label><p>Valor de resistencia a la compresion</p></label><input class="inputDis" id="valorResistencia" type="number"><label> kN/m</label></th></tr></table><table><tr><th>Material</th><th>Cantidad</th><th>Unidad</th></tr><tr><td>Area</td><td><p><span id="resultado"></span></p></td><td>cm2</td></tr><tr><td>Fuerza de compresion concreta</td><td><p><span id="resultado2"></span></p></td><td>kg/cm2</td></tr><tr><td>Fuerza de compresion concreta</td><td><p><span id="resultado3"></span></p></td><td>psi</td></tr></table>
                    `, imagen: '/img2.jpg',calculo: ConcretaCalc, comprar: '',imprimir: ''
                    },
                    {id: 33,opcion:'Losa Simple', html: `
                    <p>colocar html aqui </p>
                    `, imagen: '/img2.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                    },
                    {id: 34,opcion:'Losa Unidireccional', html: `
                    <p>colocar html aqui </p>
                    `, imagen: '/img2.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                    },
                    {id: 35,opcion:'Losa de dos vías', html: `
                    <p>colocar html aqui </p>
                    `, imagen: '/img2.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                    },
                    {id: 36,opcion:'columna de 4 barras', html: `
                    <p>colocar html aqui </p>
                    `, imagen: '/img2.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                    },
                    {id: 37,opcion:'columna de 6 barras', html: `
                    <p>colocar html aqui </p>
                    `, imagen: '/img2.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                    },
                    {id: 38,opcion:'columna redonda', html: `
                    <p>colocar html aqui </p>
                    `, imagen: '/img2.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                    },
                    {id: 39,opcion:'Simple viga de soporte', html: `
                    <p>colocar html aqui </p>
                    `, imagen: '/img2.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                    },
                    {id: 40,opcion:'Viga en voladizo', html: `
                    <p>colocar html aqui </p>
                    `, imagen: '/img2.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                    },
                    {id: 41,opcion:'Viga fija soportada', html: `
                    <p>colocar html aqui </p>
                    `, imagen: '/img2.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                    },
                    {id: 42,opcion:'Viga fija fija', html: `
                    <p>colocar html aqui </p>
                    `, imagen: '/img2.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                    },
                    {id: 43,opcion:'Pandeo critico de columna', html: `
                    <p>colocar html aqui </p>
                    `, imagen: '/img2.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                    },
                    {id: 44,opcion:'carga segura', html: `
                    <p>colocar html aqui </p>
                    `, imagen: '/img2.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                    },
                    {id: 45,opcion:'N/A', html: `
                    <p>N/A</p>
                    `, imagen: '/img2.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                    },
                    {id: 46,opcion:'Peso de barra redonda', html: `
                    <p>colocar html aqui </p>
                    `, imagen: '/img2.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                    },
                    {id: 47,opcion:'Peso de barra cuadrada', html: `
                    <p>colocar html aqui </p>
                    `, imagen: '/img2.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                    },
                    {id: 48,opcion:'Peso de barra de tubería', html: `
                    <p>colocar html aqui </p>
                    `, imagen: '/img2.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                    },
                    {id: 50,opcion:'Peso de barra hexagonal', html: `
                    <p>colocar html aqui </p>
                    `, imagen: '/img2.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                    },
                    {id: 51,opcion:'Prisma Cilindro', html: `
                    <style>
                        .inputDis{
                            border:1px solid #59e;border-radius:25px;
                            padding:5px;text-align:center;width:80%;
                            margin-bottom:10px}th{border:1px solid #000;
                            padding:10px;border-radius:5px
                        }
                            
                        td{
                            border:1px solid #000;
                            text-align:center;
                            border-radius:5px;
                            height:2rem;
                        }
                    </style>
                    
                    <table>
                        <tr>
                            <th colspan="3">
                                <label>Alto </label>
                                <input class="inputDis" id="alto" type="number">
                            </th>
                            <th colspan="3">
                                <label>Largo </label>
                                <input class="inputDis" id="largo" type="number">
                            </th>
                            <th colspan="3">
                                <label>Ancho </label>
                                <input class="inputDis" id="ancho" type="number">
                            </th>
                           
                        </tr>
                        
                        </table>
                        
                        <table>
                            <tr>
                                <th>Area</th>
                                <th>Perimetro</th>
                               
                            </tr>
                            <tr>
                                <td><span id="resultado1"></span></td>
                              
                            </tr>   
                        </table>
                    `, imagen: '/img2.jpg',calculo: VolumenPrismaRectangular, comprar: '',imprimir: ''
                    },
                    {id: 52,opcion:'Cilindro', html: `
                    <style>
                        .inputDis{
                            border:1px solid #59e;border-radius:25px;
                            padding:5px;text-align:center;width:80%;
                            margin-bottom:10px}th{border:1px solid #000;
                            padding:10px;border-radius:5px
                        }
                            
                        td{
                            border:1px solid #000;
                            text-align:center;
                            border-radius:5px;
                            height:2rem;
                        }
                    </style>
                    
                    <table>
                        <tr>
                            <th colspan="3">
                                <label>Alto </label>
                                <input class="inputDis" id="alto" type="number">
                            </th>
                            <th colspan="3">
                                <label>Diametro </label>
                                <input class="inputDis" id="diametro" type="number">
                            </th>
                           
                           
                        </tr>
                        
                        </table>
                        
                        <table>
                            <tr>
                                <th>Area</th>
                                <th>Perimetro</th>
                               
                            </tr>
                            <tr>
                                <td><span id="resultado1"></span></td>
                              
                            </tr>   
                        </table>
                    `, imagen: '/img2.jpg',calculo: VolumenCilindro, comprar: '',imprimir: ''
                    },
                    {id: 53,opcion:'Tanque rectangular', html: `
                    <style>
                        .inputDis{
                            border:1px solid #59e;border-radius:25px;
                            padding:5px;text-align:center;width:80%;
                            margin-bottom:10px}th{border:1px solid #000;
                            padding:10px;border-radius:5px
                        }
                            
                        td{
                            border:1px solid #000;
                            text-align:center;
                            border-radius:5px;
                            height:2rem;
                        }
                    </style>
                    
                    <table>
                        <tr>
                            <th colspan="3">
                                <label>Alto </label>
                                <input class="inputDis" id="alto" type="number">
                            </th>
                            <th colspan="3">
                                <label>Largo </label>
                                <input class="inputDis" id="largo" type="number">
                            </th>
                            <th colspan="3">
                                <label>Ancho </label>
                                <input class="inputDis" id="ancho" type="number">
                            </th>
                           
                        </tr>
                        
                        </table>
                        
                        <table>
                            <tr>
                                <th>Area</th>
                                <th>Perimetro</th>
                               
                            </tr>
                            <tr>
                                <td><span id="resultado1"></span></td>
                              
                            </tr>   
                        </table>
                    `, imagen: '/img2.jpg',calculo: VolumenTanqueRectangular, comprar: '',imprimir: ''
                    },
                    {id: 54,opcion:'Descargador triangular', html: `
                    <style>
                        .inputDis{
                            border:1px solid #59e;border-radius:25px;
                            padding:5px;text-align:center;width:80%;
                            margin-bottom:10px}th{border:1px solid #000;
                            padding:10px;border-radius:5px
                        }
                            
                        td{
                            border:1px solid #000;
                            text-align:center;
                            border-radius:5px;
                            height:2rem;
                        }
                    </style>
                    
                    <table>
                        <tr>
                            <th colspan="3">
                                <label>Alto </label>
                                <input class="inputDis" id="alto" type="number">
                            </th>
                            <th colspan="3">
                                <label>Ancho </label>
                                <input class="inputDis" id="ancho" type="number">
                            </th><th colspan="3">
                                <label>Largo 1</label>
                                <input class="inputDis" id="largo_uno" type="number">
                            </th><th colspan="3">
                                <label>Largo 2</label>
                                <input class="inputDis" id="largo_dos" type="number">
                            </th>
                           
                        </tr>
                        
                        </table>
                        
                        <table>
                            <tr>
                                <th>Area</th>
                                <th>Perimetro</th>
                               
                            </tr>
                            <tr>
                                <td><span id="resultado1"></span></td>
                              
                            </tr>   
                        </table>
                    `, imagen: '/img2.jpg',calculo: VolumenVolqueteTriangular, comprar: '',imprimir: ''
                    },
                    {id: 55,opcion:'Volquete trapezoidal', html: `
                    <style>
                        .inputDis{
                            border:1px solid #59e;border-radius:25px;
                            padding:5px;text-align:center;width:80%;
                            margin-bottom:10px}th{border:1px solid #000;
                            padding:10px;border-radius:5px
                        }
                            
                        td{
                            border:1px solid #000;
                            text-align:center;
                            border-radius:5px;
                            height:2rem;
                        }
                    </style>
                    
                    <table>
                        <tr>
                            <th colspan="3">
                                <label>Alto </label>
                                <input class="inputDis" id="alto" type="number">
                            </th>
                            <th colspan="3">
                                <label>Ancho </label>
                                <input class="inputDis" id="ancho" type="number">
                            </th><th colspan="3">
                                <label>Largo 1</label>
                                <input class="inputDis" id="largo_uno" type="number">
                            </th><th colspan="3">
                                <label>Largo 2</label>
                                <input class="inputDis" id="largo_dos" type="number">
                            </th>
                           
                        </tr>
                        
                        </table>
                        
                        <table>
                            <tr>
                                <th>Area</th>
                                <th>Perimetro</th>
                               
                            </tr>
                            <tr>
                                <td><span id="resultado1"></span></td>
                              
                            </tr>   
                        </table>
                    `, imagen: '/img2.jpg',calculo: VolumenVolqueteTrapezoide, comprar: '',imprimir: ''
                    },
                    {id: 56,opcion:'Esfera', html: `
                    <style>
                        .inputDis{
                            border:1px solid #59e;border-radius:25px;
                            padding:5px;text-align:center;width:80%;
                            margin-bottom:10px}th{border:1px solid #000;
                            padding:10px;border-radius:5px
                        }
                            
                        td{
                            border:1px solid #000;
                            text-align:center;
                            border-radius:5px;
                            height:2rem;
                        }
                    </style>
                    
                    <table>
                        <tr>
                            <th colspan="3">
                                <label>Diametro </label>
                                <input class="inputDis" id="diametro" type="number">
                            </th>
                           
                        </tr>
                        
                        </table>
                        
                        <table>
                            <tr>
                                <th>Area</th>
                                <th>Perimetro</th>
                               
                            </tr>
                            <tr>
                                <td><span id="resultado1"></span></td>
                              
                            </tr>   
                        </table>
                    `, imagen: '/img2.jpg',calculo: VolumenEsfera, comprar: '',imprimir: ''
                    },
                    // {id: 57,opcion:'ConoEsfera', html: `
                    // <p>colocar html aqui </p>
                    // `, imagen: '/img2.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                    // },
                    // {id: 58,opcion:'Frustum Cono', html: `
                    // <p>colocar html aqui </p>
                    // `, imagen: '/img2.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                    // },
                    // {id: 59,opcion:'Cono parabólico', html: `
                    // <p>colocar html aqui </p>
                    // `, imagen: '/img2.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                    // },
                    // {id: 60,opcion:'Cubo', html: `
                    // <p>colocar html aqui </p>
                    // `, imagen: '/img2.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                    // },
                    {id: 61,opcion:'Media Esfera', html: `
                    <style>
                        .inputDis{
                            border:1px solid #59e;border-radius:25px;
                            padding:5px;text-align:center;width:80%;
                            margin-bottom:10px}th{border:1px solid #000;
                            padding:10px;border-radius:5px
                        }
                            
                        td{
                            border:1px solid #000;
                            text-align:center;
                            border-radius:5px;
                            height:2rem;
                        }
                    </style>
                    
                    <table>
                        <tr>
                            <th colspan="3">
                                <label>Diametro </label>
                                <input class="inputDis" id="diametro" type="number">
                            </th>
                           
                        </tr>
                        
                        </table>
                        
                        <table>
                            <tr>
                                <th>Area</th>
                                <th>Perimetro</th>
                               
                            </tr>
                            <tr>
                                <td><span id="resultado1"></span></td>
                              
                            </tr>   
                        </table>
                    `, imagen: '/img2.jpg',calculo: VolumenMediaEsfera, comprar: '',imprimir: ''
                    },
                    {id: 62,opcion:'Prisma', html: `
                    <style>
                        .inputDis{
                            border:1px solid #59e;border-radius:25px;
                            padding:5px;text-align:center;width:80%;
                            margin-bottom:10px}th{border:1px solid #000;
                            padding:10px;border-radius:5px
                        }
                            
                        td{
                            border:1px solid #000;
                            text-align:center;
                            border-radius:5px;
                            height:2rem;
                        }
                    </style>
                    
                    <table>
                        <tr>
                            <th colspan="3">
                                <label>Alto </label>
                                <input class="inputDis" id="alto" type="number">
                            </th>
                            <th colspan="3">
                                <label>Lado 1 </label>
                                <input class="inputDis" id="lado_uno" type="number">
                            </th><th colspan="3">
                                <label>Lado 2 </label>
                                <input class="inputDis" id="lado_dos" type="number">
                            </th>
                        </tr>
                        
                        </table>
                        
                        <table>
                            <tr>
                                <th>Area</th>
                                <th>Perimetro</th>
                               
                            </tr>
                            <tr>
                                <td><span id="resultado1"></span></td>
                              
                            </tr>   
                        </table>
                    `, imagen: '/img2.jpg',calculo: VolumenPrisma, comprar: '',imprimir: ''
                    },
                    {id: 63,opcion:'Circulo', html: `
                    <style>
                        .inputDis{
                            border:1px solid #59e;border-radius:25px;
                            padding:5px;text-align:center;width:80%;
                            margin-bottom:10px}th{border:1px solid #000;
                            padding:10px;border-radius:5px
                        }
                            
                        td{
                            border:1px solid #000;
                            text-align:center;
                            border-radius:5px;
                            height:2rem;
                        }
                    </style>
                    
                    <table>
                        <tr>
                            <th colspan="3">
                                <label>Radio </label>
                                <input class="inputDis" id="radioCirculo" type="number">
                            </th>
                        </tr>
                        
                        </table>
                        
                        <table>
                            <tr>
                                <th>Area</th>
                                <th>Perimetro</th>
                               
                            </tr>
                            <tr>
                                <td><span id="resultado1"></span></td>
                                <td><span id="resultado2"></span></td>
                            </tr>   
                        </table>

                    `, imagen: '/img2.jpg',calculo: AreaCirculo, comprar: '',imprimir: ''
                    },
                    {id: 64,opcion:'Cuadrado', html: `
                    <style>
                        .inputDis{
                            border:1px solid #59e;border-radius:25px;
                            padding:5px;text-align:center;width:80%;
                            margin-bottom:10px}th{border:1px solid #000;
                            padding:10px;border-radius:5px
                        }
                            
                        td{
                            border:1px solid #000;
                            text-align:center;
                            border-radius:5px;
                            height:2rem;
                        }
                    </style>
                    
                    <table>
                        <tr>
                            <th colspan="3">
                                <label>Lado </label>
                                <input class="inputDis" id="lado" type="number">
                            </th>
                        </tr>
                        
                        </table>
                        
                        <table>
                            <tr>
                                <th>Area</th>
                                <th>Perimetro</th>
                               
                            </tr>
                            <tr>
                                <td><span id="resultado1"></span></td>
                                <td><span id="resultado2"></span></td>
                            </tr>   
                        </table>
                    `, imagen: '/img2.jpg',calculo: AreaCuadrado, comprar: '',imprimir: ''
                    },
                    {id: 65,opcion:'Rectangulo', html: `
                    <style>
                        .inputDis{
                            border:1px solid #59e;border-radius:25px;
                            padding:5px;text-align:center;width:80%;
                            margin-bottom:10px}th{border:1px solid #000;
                            padding:10px;border-radius:5px
                        }
                            
                        td{
                            border:1px solid #000;
                            text-align:center;
                            border-radius:5px;
                            height:2rem;
                        }
                    </style>
                    
                    <table>
                        <tr>
                            <th colspan="3">
                                <label>Base </label>
                                <input class="inputDis" id="base" type="number">
                            </th>
                            <th colspan="3">
                                <label>Altura </label>
                                <input class="inputDis" id="altura" type="number">
                            </th>
                        </tr>
                        
                        </table>
                        
                        <table>
                            <tr>
                                <th>Area</th>
                                <th>Perimetro</th>
                               
                            </tr>
                            <tr>
                                <td><span id="resultado1"></span></td>
                                <td><span id="resultado2"></span></td>
                            </tr>   
                        </table>
                    `, imagen: '/img2.jpg',calculo: AreaRectangulo, comprar: '',imprimir: ''
                    },
                    {id: 66,opcion:'Triangulo', html: `
                    <style>
                        .inputDis{
                            border:1px solid #59e;border-radius:25px;
                            padding:5px;text-align:center;width:80%;
                            margin-bottom:10px}th{border:1px solid #000;
                            padding:10px;border-radius:5px
                        }
                            
                        td{
                            border:1px solid #000;
                            text-align:center;
                            border-radius:5px;
                            height:2rem;
                        }
                    </style>
                    
                    <table>
                        <tr>
                            <th colspan="3">
                                <label>Base </label>
                                <input class="inputDis" id="base" type="number">
                            </th>
                            <th colspan="3">
                                <label>Altura </label>
                                <input class="inputDis" id="altura" type="number">
                            </th>
                        </tr>
                        
                        </table>
                        
                        <table>
                            <tr>
                                <th>Area</th>
                                <th>Perimetro</th>
                               
                            </tr>
                            <tr>
                                <td><span id="resultado1"></span></td>
                                <td><span id="resultado2"></span></td>
                            </tr>   
                        </table>
                    `, imagen: '/img2.jpg',calculo: AreaTriangulo, comprar: '',imprimir: ''
                    },
                    {id: 67,opcion:'Trapezoide', html: `
                    <style>
                        .inputDis{
                            border:1px solid #59e;border-radius:25px;
                            padding:5px;text-align:center;width:80%;
                            margin-bottom:10px}th{border:1px solid #000;
                            padding:10px;border-radius:5px
                        }
                            
                        td{
                            border:1px solid #000;
                            text-align:center;
                            border-radius:5px;
                            height:2rem;
                        }
                    </style>
                    
                    <table>
                        <tr>
                            <th colspan="3">
                                <label>Base </label>
                                <input class="inputDis" id="base" type="number">
                            </th>
                            <th colspan="3">
                                <label>Altura </label>
                                <input class="inputDis" id="altura" type="number">
                            </th>
                            <th colspan="3">
                                <label>Copa </label>
                                <input class="inputDis" id="copa" type="number">
                            </th>
                        </tr>
                        
                        </table>
                        
                        <table>
                            <tr>
                                <th>Area</th>
                                <th>Perimetro</th>
                               
                            </tr>
                            <tr>
                                <td><span id="resultado1"></span></td>
                                <td><span id="resultado2"></span></td>
                            </tr>   
                        </table>
                    `, imagen: '/img2.jpg',calculo: AreaTrapezoide, comprar: '',imprimir: ''
                    },
                    {id: 68,opcion:'Elipse', html: `
                    <style>
                        .inputDis{
                            border:1px solid #59e;border-radius:25px;
                            padding:5px;text-align:center;width:80%;
                            margin-bottom:10px}th{border:1px solid #000;
                            padding:10px;border-radius:5px
                        }
                            
                        td{
                            border:1px solid #000;
                            text-align:center;
                            border-radius:5px;
                            height:2rem;
                        }
                    </style>
                    
                    <table>
                        <tr>
                            <th colspan="3">
                                <label>Radio 1</label>
                                <input class="inputDis" id="radio_uno" type="number">
                            </th>
                            <th colspan="3">
                                <label>Radio 2</label>
                                <input class="inputDis" id="radio_dos" type="number">
                            </th>
                        </tr>
                        
                        </table>
                        
                        <table>
                            <tr>
                                <th>Area</th>
                                <th>Perimetro</th>
                               
                            </tr>
                            <tr>
                                <td><span id="resultado1"></span></td>
                                <td><span id="resultado2"></span></td>
                            </tr>   
                        </table>
                    `, imagen: '/img2.jpg',calculo: AreaElipse, comprar: '',imprimir: ''
                    },
                    {id: 69,opcion:'Forma 1', html: `
                                        <style>
                        .inputDis{
                            border:1px solid #59e;border-radius:25px;
                            padding:5px;text-align:center;width:80%;
                            margin-bottom:10px}th{border:1px solid #000;
                            padding:10px;border-radius:5px
                        }
                            
                        td{
                            border:1px solid #000;
                            text-align:center;
                            border-radius:5px;
                            height:2rem;
                        }
                    </style>
                    
                    <table>
                        <tr>
                            <th colspan="3">
                                <label>Largo </label>
                                <input class="inputDis" id="largo" type="number">
                            </th>
                            <th colspan="3">
                                <label>Alto </label>
                                <input class="inputDis" id="alto" type="number">
                            </th>
                        </tr>
                        
                        </table>
                        
                        <table>
                            <tr>
                                <th>Area</th>
                                <th>Perimetro</th>
                               
                            </tr>
                            <tr>
                                <td><span id="resultado1"></span></td>
                              <td><span id="">NO HAY</span></td>
                            </tr>   
                        </table>
                    `, imagen: '/img2.jpg',calculo: AreaTrianguloEscaleno, comprar: '',imprimir: ''
                    },
                    {id: 70,opcion:'Forma 2', html: `
                                        <style>
                        .inputDis{
                            border:1px solid #59e;border-radius:25px;
                            padding:5px;text-align:center;width:80%;
                            margin-bottom:10px}th{border:1px solid #000;
                            padding:10px;border-radius:5px
                        }
                            
                        td{
                            border:1px solid #000;
                            text-align:center;
                            border-radius:5px;
                            height:2rem;
                        }
                    </style>
                    
                    <table>
                        <tr>
                            <th colspan="3">
                                <label>Largo </label>
                                <input class="inputDis" id="largo" type="number">
                            </th>
                            <th colspan="3">
                                <label>Alto </label>
                                <input class="inputDis" id="alto" type="number">
                            </th>
                        </tr>
                        
                        </table>
                        
                        <table>
                            <tr>
                                <th>Area</th>
                                <th>Perimetro</th>
                               
                            </tr>
                            <tr>
                                <td><span id="resultado1"></span></td>
                                <td><span id="resultado2"></span></td>
                            </tr>   
                        </table>
                    `, imagen: '/img2.jpg',calculo: AreaCuadradoCopaCircular, comprar: '',imprimir: ''
                    },
                    {id: 71,opcion:'Forma 3', html: `
                                        <style>
                        .inputDis{
                            border:1px solid #59e;border-radius:25px;
                            padding:5px;text-align:center;width:80%;
                            margin-bottom:10px}th{border:1px solid #000;
                            padding:10px;border-radius:5px
                        }
                            
                        td{
                            border:1px solid #000;
                            text-align:center;
                            border-radius:5px;
                            height:2rem;
                        }
                    </style>
                    
                    <table>
                        <tr>
                            <th colspan="3">
                                <label>Largo </label>
                                <input class="inputDis" id="largo" type="number">
                            </th>
                            <th colspan="3">
                                <label>Alto </label>
                                <input class="inputDis" id="alto" type="number">
                            </th>
                        </tr>
                        
                        </table>
                        
                        <table>
                            <tr>
                                <th>Area</th>
                                <th>Perimetro</th>
                               
                            </tr>
                            <tr>
                                <td><span id="resultado1"></span></td>
                                <td><span id="resultado2"></span></td>
                            </tr>   
                        </table>
                    `, imagen: '/img2.jpg',calculo: AreaCuadradoCopaCircularDoble, comprar: '',imprimir: ''
                    },
                    {id: 72,opcion:'Forma 4', html: `
                                        <style>
                        .inputDis{
                            border:1px solid #59e;border-radius:25px;
                            padding:5px;text-align:center;width:80%;
                            margin-bottom:10px}th{border:1px solid #000;
                            padding:10px;border-radius:5px
                        }
                            
                        td{
                            border:1px solid #000;
                            text-align:center;
                            border-radius:5px;
                            height:2rem;
                        }
                    </style>
                    
                    <table>
                        <tr>
                            <th colspan="3">
                                <label>Lado 1</label>
                                <input class="inputDis" id="lado_1" type="number">
                            </th>
                            <th colspan="3">
                                <label>Lado 2</label>
                                <input class="inputDis" id="lado_2" type="number">
                            </th>
                            <th colspan="3">
                                <label>Lado 3</label>
                                <input class="inputDis" id="lado_3" type="number">
                            </th>
                            <th colspan="3">
                                <label>Lado 4</label>
                                <input class="inputDis" id="lado_4" type="number">
                            </th>
                        </tr>
                        
                        </table>
                        
                        <table>
                            <tr>
                                <th>Area</th>
                                <th>Perimetro</th>
                               
                            </tr>
                            <tr>
                                <td><span id="resultado1"></span></td>
                                <td><span id="resultado2"></span></td>
                            </tr>   
                        </table>
                    `, imagen: '/img2.jpg',calculo: AreaFiguraPerspectiva, comprar: '',imprimir: ''
                    },
                    {id: 73,opcion:'Forma 5', html: `
                                        <style>
                        .inputDis{
                            border:1px solid #59e;border-radius:25px;
                            padding:5px;text-align:center;width:80%;
                            margin-bottom:10px}th{border:1px solid #000;
                            padding:10px;border-radius:5px
                        }
                            
                        td{
                            border:1px solid #000;
                            text-align:center;
                            border-radius:5px;
                            height:2rem;
                        }
                    </style>
                    
                    <table>
                        <tr>
                            <th colspan="3">
                                <label>Base </label>
                                <input class="inputDis" id="base" type="number">
                            </th>
                            <th colspan="3">
                                <label>Altura </label>
                                <input class="inputDis" id="alto" type="number">
                            </th>
                            <th colspan="3">
                                <label>Copa </label>
                                <input class="inputDis" id="copa" type="number">
                            </th>
                        </tr>
                        
                        </table>
                        
                        <table>
                            <tr>
                                <th>Area</th>
                                <th>Perimetro</th>
                               
                            </tr>
                            <tr>
                                <td><span id="resultado1"></span></td>
                                <td><span id="resultado2"> NO HAY</span></td>
                            </tr>   
                        </table>
                    `, imagen: '/img2.jpg',calculo: AreaTrapecio, comprar: '',imprimir: ''
                    },
                    {id: 74,opcion:'Longitud', html: `
                    <p>colocar html aqui </p>
                    `, imagen: '/img2.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                    },
                    {id: 75,opcion:'Area', html: `
                    <p>colocar html aqui </p>
                    `, imagen: '/img2.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                    },
                    {id: 76,opcion:'Volumen', html: `
                    <p>colocar html aqui </p>
                    `, imagen: '/img2.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                    },
                    {id: 77,opcion:'Peso', html: `
                    <p>colocar html aqui </p>
                    `, imagen: '/img2.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                    },
                    {id: 78,opcion:'Presion', html: `
                    <p>colocar html aqui </p>
                    `, imagen: '/img2.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                    },
                    {id: 79,opcion:'Angulo', html: `
                    <p>colocar html aqui </p>
                    `, imagen: '/img2.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                    },
                    {id: 80,opcion:'Poder', html: `
                    <p>colocar html aqui </p>
                    `, imagen: '/img2.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                    },
                    {id: 81,opcion:'Fuerza', html: `
                    <p>colocar html aqui </p>
                    `, imagen: '/img2.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                    },
                    {id: 82,opcion:'Trabajo', html: `
                    <p>colocar html aqui </p>
                    `, imagen: '/img2.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                    },
                    {id: 83,opcion:'Temperatura', html: `
                    <p>colocar html aqui </p>
                    `, imagen: '/img2.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                    },
                    {id: 84,opcion:'Velocidad', html: `
                    <p>colocar html aqui </p>
                    `, imagen: '/img2.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                    },
                    {id: 85,opcion:'Tiempo', html: `
                    <p>colocar html aqui </p>
                    `, imagen: '/img2.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                    },
                    {id: 86,opcion:'Combustible', html: `
                    <p>colocar html aqui </p>
                    `, imagen: '/img2.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                    },
                    {id: 87,opcion:'Voltaje', html: `
                    <p>colocar html aqui </p>
                    `, imagen: '/img2.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                    },
                    {id: 88,opcion:'Datos', html: `
                    <p>colocar html aqui </p>
                    `, imagen: '/img2.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                    },
                ],
            }
        },
        beforeUnmount() {
        },
        unmounted() {
        }
}
</script>

<style scoped>
.contenedor{
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.card{
    border: 1px solid #000;
    width: 700px;
    padding: 10px;
    margin: 10px;
    text-align: center;
}

.imagen{
    height: 300px;
    width: 90%;
    margin: auto;
}
img{
    border: 1px solid transparent;
    border-radius: 25px;
    width: 100%;
    height: 100%;
}

.html{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.title{
    text-decoration: none;
    color: #A04000;
    text-align: center;
    margin: 5px;
}

.sub-title{
    text-decoration: none;
    color: #E59866;
    text-align: center;
    margin: 5px;
}
</style>