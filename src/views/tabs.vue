<template>
    <ion-page>
      <ion-menu content-id="main-content">
        <ion-header>
          <ion-toolbar>
            <ion-title>Menú</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <ion-list>
            <ion-item button @click="navigateTo('/tabs/inicio')">
              <ion-icon :icon="homeIcon" slot="start"></ion-icon>
              Inicio
            </ion-item>
            <ion-item button @click="navigateTo('/tabs/CalculoCivil')">
              <ion-icon :icon="gridIcon" slot="start"></ion-icon>
              Calculo Civil
            </ion-item>
          </ion-list>
        </ion-content>
      </ion-menu>
  
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-toggle>
              <ion-button>
                <ion-icon slot="icon-only" :icon="menuIcon"></ion-icon>
              </ion-button>
            </ion-menu-toggle>
          </ion-buttons>
          <ion-title>A-SOLUTIONS</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content id="main-content">
        <ion-router-outlet/>
      </ion-content>
    </ion-page>
</template>
  
<script>
import { IonPage, IonMenu, IonHeader, IonToolbar, IonButtons, IonMenuToggle, IonButton, IonIcon, IonTitle, IonContent, IonList, IonItem, IonRouterOutlet } from "@ionic/vue";
import { home, grid, menu } from "ionicons/icons";

export default {
name: 'MyApp',
components: {
    IonPage, IonMenu, IonHeader, IonToolbar, IonButtons, IonMenuToggle, IonButton, IonIcon, IonTitle, IonContent, IonList, IonItem, IonRouterOutlet
},
data() {
    return {
    homeIcon: home,
    gridIcon: grid,
    menuIcon: menu,
    mostrar: false
    }
},
methods: {
    navigateTo(route) {
    this.$router.push(route);
    }
}
}
</script>

<style>

</style>