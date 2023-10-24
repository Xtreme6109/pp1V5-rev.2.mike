<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button></ion-back-button>
                </ion-buttons>
                <ion-title>formula</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
            <ion-card>
                <ion-card-header>
                    <ion-card-title>
                        formula {{ this.$route.params.formula }}
                    </ion-card-title>
                    <ion-card-subtitle>Listado de formulas</ion-card-subtitle>
                </ion-card-header>
                <ion-card-content>
                    <div class="contenedor">
                        <div v-for="(formula,i) in formulas" :key="i">
                            <div class="card" v-if="formula.tipo===this.$route.params.formula">
                                <div class="imagen">
                                    <img :alt="formula.nombre " :src="formula.imagen" />
                                </div>
                                <div class="title">
                                    {{ formula.nombre }}
                                </div>
                                <ion-button :router-link="`/tabs/Procedimiento/${formula.nombre}`" color="warning" size="large" expand="full">Acceder</ion-button>
                            </div>
                        </div>
                    </div>
                </ion-card-content>
            </ion-card>
        </ion-content>
    </ion-page>
</template>

<script>
    import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton,IonButtons,IonBackButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle,IonCardContent, IonList, IonThumbnail, IonLabel, IonItem} from '@ionic/vue'
    export default {
        name: 'Formulas',
        components: {
        IonPage, IonHeader, IonToolbar, IonTitle, IonContent,IonButton,IonButtons,IonBackButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle,IonCardContent, IonList, IonThumbnail, IonLabel, IonItem
        },
        data(){
            return {
                formulas: [
                    {id: 1,tipo:'Concreto', nombre: 'Concreto por volumen', imagen: '/C2/concreto.png'},
                    {id: 2,tipo:'Concreto', nombre: 'Losa de hormigon', imagen: '/C2/losa.png'},
                    {id: 3,tipo:'Concreto', nombre: 'Columna cuadrada de hormigon', imagen: '/C2/colum.png'},
                    {id: 4,tipo:'Concreto', nombre: 'Concreto de columna redonda', imagen: '/C2/redonda.png'},
                    {id: 5,tipo:'Concreto', nombre: 'Tanque circular de hormigon', imagen: '/C2/tanqueci.png'},
                    {id: 6,tipo:'Ladrillos', nombre: 'Ladrillos por volumen', imagen: '/C2/lavolum.png'},
                    {id: 7,tipo:'Ladrillos', nombre: 'Ladrillos de pared', imagen: '/C2/lapared.png'},
                    {id: 8,tipo:'Ladrillos', nombre: 'Ladrillos de pared circular', imagen: '/C2/cir.png'},
                    {id: 9,tipo:'Mecánica de suelos cálculo', nombre: 'Peso unitario seco', imagen: '/C2/pesoseco.png'},
                    {id: 10,tipo:'Mecánica de suelos cálculo', nombre: 'Peso unitario humedad', imagen: '/C2/cimiento.jpg'},
                    {id: 11,tipo:'Mecánica de suelos cálculo', nombre: 'Capacidad portante de cimientacion circular', imagen: '/C2/pesohume.jpg'},
                    {id: 12,tipo:'Mecánica de suelos cálculo', nombre: 'Capacidad portante de cimiento continua', imagen: '/C2/ci4.jpg'},
                ]
            }
        },
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
.card {
  border: 1px solid #7a7474;
  width: 450px; 
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
</style>