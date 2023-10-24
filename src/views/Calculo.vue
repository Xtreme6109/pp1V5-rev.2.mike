<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons>
                    <ion-back-button text="Regresar" :icon="arrowUpOutline" ></ion-back-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
            <ion-card>
                <ion-card-content>
                    <div class="contenedor">
                        <div v-for="(Calculo,i) in Calculos" :key="i">
                            <div class="card" v-if="Calculo.tipo===this.$route.params.categoria">
                                <div class="imagen">
                                    <img :alt="Calculo.nombre " :src="Calculo.imagen" />
                                </div>
                                <div class="title">
                                    {{ Calculo.nombre }}
                                </div>
                                <div v-if="Calculo.formula == 'si'">
                                    <ion-button :router-link="`/tabs/Formulas/${Calculo.nombre}`" color="warning" size="large" expand="full">Acceder</ion-button>
                                </div>
                                <div v-else>
                                    <ion-button :router-link="`/tabs/Procedimiento/${Calculo.nombre}`" color="warning" size="large" expand="full">Acceder</ion-button>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </ion-card-content>
            </ion-card>
        </ion-content>
    </ion-page>
</template>

<script>
    import {arrowUpOutline} from "ionicons/icons"
    import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton,IonButtons,IonBackButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle,IonCardContent, IonList, IonThumbnail, IonLabel, IonItem} from '@ionic/vue'
    export default {
        name: 'Calculo',
        components: {
        IonPage, IonHeader, IonToolbar, IonTitle, IonContent,IonButton,IonButtons,IonBackButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle,IonCardContent, IonList, IonThumbnail, IonLabel, IonItem
        },
        data(){
            return {
                arrowUpOutline, 
                Calculos: [
                    {id: 1,formula: 'si',tipo:'Cantidad', nombre: 'Concreto', imagen: '/C2/concreto.jpg'},
                    {id: 2,formula: 'si',tipo:'Cantidad', nombre: 'Ladrillos', imagen: '/C2/ladrillo.png'},
                    {id: 3,formula: 'no',tipo:'Cantidad', nombre: 'Bloques', imagen: '/C2/bloque2.jpg'},
                    {id: 4,formula: 'si',tipo:'Cantidad', nombre: 'Mecánica de suelos cálculo', imagen: '/C2/MSuelos.png'},
                    {id: 5,formula: 'no',tipo:'Cantidad', nombre: 'Super Elevación cálculo', imagen: '/C2/ele2.jpg'},
                    //{id: 6,formula: 'no',tipo:'Cantidad', nombre: 'Barra de hélice', imagen: '/C2/BarraElice.jpg'},
                    {id: 7,formula: 'no',tipo:'Cantidad', nombre: 'Yeso', imagen: '/C2/yeso2.png'},
                    //{id: 8,formula: 'no',tipo:'Cantidad', nombre: 'Relleno', imagen: '/C2/relleno.png'},
                    //{id: 9,formula: 'no',tipo:'Cantidad', nombre: 'Excavación', imagen: '/C2/excavacion2.jpg'},
                    //{id: 10,formula: 'no',tipo:'Cantidad', nombre: 'Pintar', imagen: '/C2/pintar2.jpg'},
                    //{id: 11,formula: 'no',tipo:'Cantidad', nombre: 'Relleno de taludes cálculo', imagen: '/C2/talu2.png'},
                    {id: 12,formula: 'no',tipo:'Cantidad', nombre: 'Asfalto', imagen: '/C2/asfalto.png'},
                    //{id: 13,formula: 'no',tipo:'Cantidad', nombre: 'Azulejos', imagen: '/C2/azulejos.jpg'},
                    //{id: 14,formula: 'no',tipo:'Cantidad', nombre: 'Terrazo', imagen: '/C2/terrazo1.jpg'},
                    //{id: 15,formula: 'no',tipo:'Cantidad', nombre: 'Ladrillos de piso', imagen: '/C2/piso.jpg'},
                    //{id: 16,formula: 'no',tipo:'Cantidad', nombre: 'anti termitas', imagen: '/C2/termas.png'},
                    {id: 17,formula: 'no',tipo:'Cantidad', nombre: 'Acero', imagen: '/C2/acero1.png'},
                    {id: 18,formula: 'no',tipo:'Cantidad', nombre: 'Encofrado', imagen: '/C2/formulario1.png'},
                    {id: 19,formula: 'no',tipo:'Cantidad', nombre: 'Tanque de agua', imagen: '/C2/tanque.jpg'},
                    //{id: 20,formula: 'no',tipo:'Cantidad', nombre: 'BOQ', imagen: '/C2/bqq.jpg'},
                    {id: 21,formula: 'no',tipo:'Cantidad', nombre: 'Diagonal', imagen: '/C2/diagonal.jpg'},
                    {id: 22,formula: 'no',tipo:'Cantidad', nombre: 'Profundidad de la cimentación', imagen: '/C2/pro.fundacion.png'},
                    {id: 23,formula: 'no',tipo:'Cantidad', nombre: 'Prueba concreta', imagen: '/C2/pruebaconcreta.jpg'},
                    {id: 24,formula: 'no',tipo:'RCC', nombre: 'Losa Simple', imagen: '/img2.jpg'},
                    {id: 25,formula: 'no',tipo:'RCC', nombre: 'Losa Unidireccional', imagen: '/img2.jpg'},
                    {id: 26,formula: 'no',tipo:'RCC', nombre: 'Losa de dos vías', imagen: '/img2.jpg'},
                    {id: 27,formula: 'no',tipo:'RCC', nombre: 'columna de 4 barras', imagen: '/img2.jpg'},
                    {id: 28,formula: 'no',tipo:'RCC', nombre: 'columna de 6 barras', imagen: '/img2.jpg'},
                    {id: 29,formula: 'no',tipo:'RCC', nombre: 'columna redonda', imagen: '/img2.jpg'},
                    {id: 30,formula: 'no',tipo:'Estructura', nombre: 'Simple viga de soporte', imagen: '/img2.jpg'},
                    {id: 31,formula: 'no',tipo:'Estructura', nombre: 'Viga en voladizo', imagen: '/img2.jpg'},
                    {id: 32,formula: 'no',tipo:'Estructura', nombre: 'Viga fija soportada', imagen: '/img2.jpg'},
                    {id: 33,formula: 'no',tipo:'Estructura', nombre: 'Viga fija fija', imagen: '/img2.jpg'},
                    {id: 34,formula: 'no',tipo:'Estructura', nombre: 'Pandeo critico de columna', imagen: '/img2.jpg'},
                    {id: 35,formula: 'no',tipo:'Estructura', nombre: 'carga segura', imagen: '/img2.jpg'},
                    {id: 36,formula: 'no',tipo:'Nuevos Calculos', nombre: 'N/A', imagen: '/img2.jpg'},
                    {id: 37,formula: 'no',tipo:'Metal', nombre: 'Peso de barra redonda', imagen: '/img2.jpg'},
                    {id: 38,formula: 'no',tipo:'Metal', nombre: 'Peso de barra cuadrada', imagen: '/img2.jpg'},
                    {id: 39,formula: 'no',tipo:'Metal', nombre: 'Peso de barra de tubería', imagen: '/img2.jpg'},
                    {id: 40,formula: 'no',tipo:'Metal', nombre: 'Peso de barra hexagonal', imagen: '/img2.jpg'},
                    {id: 41,formula: 'no',tipo:'Volumen', nombre: 'Prisma Cilindro', imagen: '/img2.jpg'},
                    {id: 42,formula: 'no',tipo:'Volumen', nombre: 'Cilindro', imagen: '/img2.jpg'},
                    {id: 43,formula: 'no',tipo:'Volumen', nombre: 'Tanque rectangular', imagen: '/img2.jpg'},
                    {id: 44,formula: 'no',tipo:'Volumen', nombre: 'Descargador triangular', imagen: '/img2.jpg'},
                    {id: 45,formula: 'no',tipo:'Volumen', nombre: 'Volquete trapezoidal', imagen: '/img2.jpg'},
                    {id: 46,formula: 'no',tipo:'Volumen', nombre: 'Esfera', imagen: '/img2.jpg'},
                    // {id: 47,formula: 'no',tipo:'Volumen', nombre: 'ConoEsfera', imagen: '/img2.jpg'},
                    // {id: 48,formula: 'no',tipo:'Volumen', nombre: 'Frustum Cono', imagen: '/img2.jpg'},
                    // {id: 49,formula: 'no',tipo:'Volumen', nombre: 'Cono parabólico', imagen: '/img2.jpg'},
                    // {id: 50,formula: 'no',tipo:'Volumen', nombre: 'Cubo', imagen: '/img2.jpg'},
                    {id: 51,formula: 'no',tipo:'Volumen', nombre: 'Media Esfera', imagen: '/img2.jpg'},
                    {id: 52,formula: 'no',tipo:'Volumen', nombre: 'Prisma', imagen: '/img2.jpg'},
                    {id: 53,formula: 'no',tipo:'Área', nombre: 'Circulo', imagen: '/img2.jpg'},
                    {id: 54,formula: 'no',tipo:'Área', nombre: 'Cuadrado', imagen: '/img2.jpg'},
                    {id: 55,formula: 'no',tipo:'Área', nombre: 'Rectangulo', imagen: '/img2.jpg'},
                    {id: 56,formula: 'no',tipo:'Área', nombre: 'Triangulo', imagen: '/img2.jpg'},
                    {id: 57,formula: 'no',tipo:'Área', nombre: 'Trapezoide', imagen: '/img2.jpg'},
                    {id: 58,formula: 'no',tipo:'Área', nombre: 'Elipse', imagen: '/img2.jpg'},
                    {id: 59,formula: 'no',tipo:'Área', nombre: 'Forma 1', imagen: '/img2.jpg'},
                    {id: 60,formula: 'no',tipo:'Área', nombre: 'Forma 2', imagen: '/img2.jpg'},
                    {id: 61,formula: 'no',tipo:'Área', nombre: 'Forma 3', imagen: '/img2.jpg'},
                    {id: 62,formula: 'no',tipo:'Área', nombre: 'Forma 4', imagen: '/img2.jpg'},
                    {id: 63,formula: 'no',tipo:'Área', nombre: 'Forma 5', imagen: '/img2.jpg'},
                    {id: 64,formula: 'no',tipo:'Conversion', nombre: 'Longitud', imagen: '/img2.jpg'},
                    {id: 65,formula: 'no',tipo:'Conversion', nombre: 'Area', imagen: '/img2.jpg'},
                    {id: 66,formula: 'no',tipo:'Conversion', nombre: 'Volumen', imagen: '/img2.jpg'},
                    {id: 67,formula: 'no',tipo:'Conversion', nombre: 'Peso', imagen: '/img2.jpg'},
                    {id: 68,formula: 'no',tipo:'Conversion', nombre: 'Presion', imagen: '/img2.jpg'},
                    {id: 69,formula: 'no',tipo:'Conversion', nombre: 'Angulo', imagen: '/img2.jpg'},
                    {id: 70,formula: 'no',tipo:'Conversion', nombre: 'Poder', imagen: '/img2.jpg'},
                    {id: 71,formula: 'no',tipo:'Conversion', nombre: 'Fuerza', imagen: '/img2.jpg'},
                    {id: 72,formula: 'no',tipo:'Conversion', nombre: 'Trabajo', imagen: '/img2.jpg'},
                    {id: 73,formula: 'no',tipo:'Conversion', nombre: 'Temperatura', imagen: '/img2.jpg'},
                    {id: 74,formula: 'no',tipo:'Conversion', nombre: 'Velocidad', imagen: '/img2.jpg'},
                    {id: 75,formula: 'no',tipo:'Conversion', nombre: 'Tiempo', imagen: '/img2.jpg'},
                    {id: 76,formula: 'no',tipo:'Conversion', nombre: 'Combustible', imagen: '/img2.jpg'},
                    {id: 77,formula: 'no',tipo:'Conversion', nombre: 'Voltaje', imagen: '/img2.jpg'},
                    {id: 78,formula: 'no',tipo:'Conversion', nombre: 'Datos', imagen: '/img2.jpg'},
                ]
            }
        },
}
</script>

<style scoped>
.contenedor {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;

}
.card {
  border: 1px solid #7a7474;
  width: 350px; 
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(28, 92, 148, 0.1);
  transition: transform 0.3s ease;
}

.card:hover {
  transform: scale(1.05);
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

.title{
    text-decoration: none;
    color: #A04000;
    text-align: center;
    margin: 5px;
    font-size: 24px; 
}

.sub-title{
    text-decoration: none;
    color: #E59866;
    text-align: center;
    margin: 5px;
}

.button-container {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

ion-button.custom-button {
  --background: #3498db; 
  --color: #fff; 
  --border-radius: 5px;
  font-weight: bold;
  margin-top: 10px;
  transition: background-color 0.3s ease;
}

ion-button.custom-button:hover {
  --background: #2980b9 !important;
}
</style>