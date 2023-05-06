<template>
  <v-app>
    <v-main>
      <v-container class="container" fluid >
        <img src="@/assets/logo.png" class="logo"/>
        <MainPage />
      </v-container>
    </v-main>
  </v-app>
</template>
<style>
.logo{
  width: 10%;
  height: auto;
}
.container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
<script setup lang="ts">
  import MainPage from '@/components/MainPage.vue'
</script>
