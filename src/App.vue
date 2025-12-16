<script setup></script>

<template>
  <div class="container-fluid my-container my-border mt-5">
    <!-- Head -->
    <h1>Vue alkalmazás Tanár</h1>

    <!-- Menü -->
    <p>
      <RouterLink to="/">Home</RouterLink> | 
      <RouterLink to="/about">About</RouterLink>
    </p>

    <!-- Ide töltődnek be az oldalak -->
    <RouterView />
  </div>
</template>

<style>
.my-container {
  max-width: 1200px;
}

.my-border {
  border: 1px dashed black;
}

.my-pointer {
  cursor: pointer;
}
</style>
