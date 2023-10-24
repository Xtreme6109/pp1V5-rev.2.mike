<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <div class="header-container">
            <img src="/public/font.jpg" alt="Imagen de Encabezado" class="header-img" />
            <img src="/public/CM2.png" alt="Imagen 1" class="header-img" />
            <img src="/public/font2.jpg" alt="Imagen 2" class="header-img" />
          </div>
        </ion-toolbar>
      </ion-header>
  
      <ion-content>
        <div class="intro">
          <h2>Calculadora de Materiales</h2>
          <p>Estima la cantidad de materiales para tus proyectos de construcción.</p>
        </div>
  
        <div class="features">
          <h2>Características</h2>
          
            Calcula materiales como madera, concreto, acero, etc.<br>
            Personaliza dimensiones y cantidades.<br>
            Obtén estimaciones precisas para tus proyectos.<br><br>
          
        </div>
  
        <div class="actions">
          <ion-button class="btn" :router-link="`/tabs/CalculoCivil`" >¡Empezar Ahora!</ion-button>
          <ion-button class="btn">Aprender Más</ion-button>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script>
  import { IonPage, IonHeader, IonContent, IonToolbar, IonButton } from "@ionic/vue";
  
  export default {
    name: "Inicio",
    components: {
      IonPage,
      IonHeader,
      IonContent,
      IonToolbar,
      IonButton,
    },
  };
  </script>
  
  <style scoped>
  .header-container {
    display: flex; 
    background-color: #b3e0f2;
    justify-content: center; 
    align-items: center; 
    text-align: center; 
  }
  .header-img {
    width: 500px;
    height: 200px;
    margin-right: 1px; 
  }
  .features{
    text-align: center; 
  }
  .title-text {
    font-size: 28px;
    font-weight: bold;
    color: #333;
    margin-top: 10px;
    text-align: center; 
  }
  
  .intro h2 {
    font-size: 20px;
    color: #000000;
    margin-bottom: 10px;
    text-align: center; 
  }
  
  .intro p {
    font-size: 16px;
    color: #666;
    margin-bottom: 20px;
    text-align: center; 
  }
  
  .actions ion-button {
    display: flex;
    flex-direction: column;
  font-weight: bold;
  font-size: 16px; 
  text-align: center; 
  justify-content: center;
}

.actions ion-button:hover {
  --background: #113f5e; 
  --color: #fff
  transition: background-color 0.3s ease, color 0.3s ease; 
}
</style>