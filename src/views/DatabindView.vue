<template>
  <div>
    <h1>Databind (adatkötés)</h1>
    <!-- Változók -->
     <h2>Változók</h2>
    <div class="row">
      <div class="col-4 my-border">
        <h5>Szövegdoboz</h5>
        {{ szoveg }}
      </div>
      <div class="col-4 my-border">
        <h5>Lista</h5>
        {{ listaKivalasztottElem }}
      </div>
      <div class="col-4 my-border">
        <h5>Multi Lista</h5>
        {{ listaKivalasztottElemek }}
      </div>
      <div class="col-4 my-border">
        <h5>CheckBox</h5>
        Kenér: {{ kenyer }} | Kifli: {{ kifli }}
      </div>
      <div class="col-4 my-border">
        <h5>Radio button</h5>
        {{ neme }}
      </div>
      <div class="col-4 my-border">
        <h5>Csúszka</h5>
        {{ range }}
      </div>
    </div>
    <!-- Vezérlő elemek -->
     <h2 class="mt-3">Vezérlő elemek</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      szoveg: "szöveg",
      listaKivalasztottElem: 2,
      listaKivalasztottElemek: ["3", "5"],
      kenyer: false,
      kifli: true,
      neme: "fiú",
      range: 0,
      min: -1,
      max: 1,
      step: 0.05,
    };
  },
};
</script>

<style>
</style>