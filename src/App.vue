<script setup></script>

<template>
  <div class="container-fluid my-container my-border mt-5">
    <!-- Head -->
    <h1>Komponensek</h1>

    <!-- Menü -->
      <p><RouterLink to="/">Home</RouterLink> | 
        <RouterLink to="/about">About</RouterLink> | 
        <RouterLink to="/globaliscomponent">Globális komponens</RouterLink> | 
        <RouterLink to="/lokaliscomponent">Lokális komponens</RouterLink> | 
        <RouterLink to="/componentkommunikacio">Komponens kommunikáció</RouterLink> | 
        <RouterLink to="/slot">Slot</RouterLink> | 
      </p>
        
    <!-- Ide töltődnek be az oldalak -->
    <RouterView />
  </div>
</template>

<style>

</style>
