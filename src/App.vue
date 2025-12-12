<script setup></script>

<template>
  <!-- Head -->
  <h1>Vue alkalmazás</h1>

  <!-- Menü -->
  <ul>
    <li> <RouterLink to="/">Home</RouterLink> </li>
    <li> <RouterLink to="/about">About</RouterLink> </li>
  </ul>

  <!-- Ide töltődnek be az oldalak -->
   <RouterView/>
   
</template>

<style scoped></style>
