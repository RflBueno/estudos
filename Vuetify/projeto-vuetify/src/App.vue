<template>
  <v-app>
    <v-app-bar flat class="border-b bg-blue-grey-lighten-2 text-white">
      <v-app-bar-title class="text-white">Meu App</v-app-bar-title>
    </v-app-bar>
    <v-main>
      <v-container class="d-flex flex-column justify-space-between">
        <h1 class="hidden-sm-and-down text-h5">Dashboard</h1>
        <div class="w-100 pa-4 border rounded-lg elevation-2">teste1</div>
        <div class="w-100 pa-4 border rounded-lg elevation-2">teste2</div>
        <div class="w-100 pa-4 border rounded-lg elevation-2">teste3</div>
        <div class="w-100 pa-4 border rounded-lg elevation-2">teste4</div>
      </v-container>
      <HelloWorld />
    </v-main>

    <AppFooter />
  </v-app>
</template>

<script setup>
//
</script>
