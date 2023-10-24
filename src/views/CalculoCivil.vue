<template>
    <ion-page>
        <ion-content class="ion-padding">
            <div class="contenedor">
                <div class="card" v-for="(CalculoCivil, i) in CalculoCiviles" :key="i">
                        <div class="imagen">
                            <img :src="CalculoCivil.imagen" :alt="CalculoCivil.nombre">
                        </div>
                        <ion-header>
                            <div class="title">
                                {{CalculoCivil.nombre}}
                            </div>
                        </ion-header>
                        <ion-button :router-link="`/tabs/Calculo/${CalculoCivil.nombre}`" color="warning" size="large" expand="full">Acceder</ion-button>
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>
<script>
    import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonGrid, IonRow, IonCol, IonButton} from "@ionic/vue"
    export default {
        name: "CalculoCivil",
        data(){
            return {
                CalculoCiviles: [
                    { id: 1, nombre: "Cantidad", imagen: "/cantidad.png" },
                    { id: 2, nombre: "RCC", imagen: "/RCC1.png" },
                    { id: 3, nombre: "Estructura", imagen: "/estructura.png" },
                    { id: 4, nombre: "Nuevos Cálculos", imagen: "/Ncalculos.png" },
                    { id: 5, nombre: "Metal", imagen: "/metal.png" },
                    { id: 6, nombre: "Volumen", imagen: "/volumen.png" },
                    { id: 7, nombre: "Área", imagen: "/area.png" },
                    { id: 8, nombre: "Conversión", imagen: "/conversion.png" },
                ],
            }
        },
        components: {
            IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonGrid, IonRow, IonCol, IonButton
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