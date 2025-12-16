<script setup></script>

<template>
  <div class="container-fluid my-container my-border mt-5">
    <!-- Head -->
    <h1>Direktívák</h1>

    <!-- Menü -->
    <p>
      <RouterLink to="/">Home</RouterLink> | 
      <RouterLink to="/about">About</RouterLink> | 
      <RouterLink to="/databind">Data bind</RouterLink> |
      <RouterLink to="/vif">v-if</RouterLink> |
      <RouterLink to="/vshow">v-show</RouterLink> |
      <RouterLink to="/vfor">v-for</RouterLink> |
      <RouterLink to="/von">v-on</RouterLink> |
      <RouterLink to="/cssbinding">Css binding</RouterLink> |
      <RouterLink to="/computed">Computed</RouterLink> |
      <RouterLink to="/watch">Watch</RouterLink> |
    </p>
    <hr>
    <!-- Ide töltődnek be az oldalak -->
    <RouterView />
  </div>
</template>

<style>

</style>
