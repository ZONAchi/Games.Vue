<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="h-20 w-screen flex flex-row px-10 bg-gray-50 items-center text-center justify-between" >
    <img alt="Vue logo" class="logo h-12" src="@/assets/253822.png"/>
    <nav class="w-auto text-lg font-bold">
      <RouterLink to="/bmi" class="p-4 hover:text-green-700">BMI計算機</RouterLink>
      <RouterLink to="/dice" class="p-4 hover:text-green-700">Dice Game</RouterLink>
      <RouterLink to="/guess" class="p-4 hover:text-green-700">Guessing Game</RouterLink>
      <!-- <RouterLink to="/weather" class="p-4 hover:text-green-700">Weather Cards</RouterLink> -->
    </nav>
  </header>
  <RouterView />
</template>

<style scoped>
* {
            box-sizing: border-box;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        }
</style>
