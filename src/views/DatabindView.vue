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
    <div class="row">
      <div class="col-4 my-border">
        <h5>Szövegdoboz</h5>
        <div class="mb-3 mt-3 d-flex align-items-center">
          <label for="szoveg" class="form-label">Szöveg:</label>
          <input
            type="text"
            class="form-control ms-2"
            id="szoveg"
            v-model="szoveg"
          />
        </div>
      </div>
      <div class="col-4 my-border">
        <h5>Lista</h5>
        <select
          class="form-select"
          aria-label="Default select example"
          v-model="listaKivalasztottElem"
        >
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div class="col-4 my-border p-2">
        <h5>Multi Lista
          <button type="button" class="btn btn-primary ms-2"
          @click="onClickMultiListSizeButton(1)">+</button>
          <button type="button" class="btn btn-primary ms-2"
          @click="onClickMultiListSizeButton(-1)">-</button>
        </h5>
        <select
          class="form-select"
          aria-label="Default select example"
          v-model="listaKivalasztottElemek"
          :size="sizeMultiList"
          multiple
        >
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="4">Five</option>
          <option value="5">Valami</option>
          <option value="6">Akármi</option>
          <option value="7">Doboz</option>
          <option value="8">Kutya</option>
        </select>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      szoveg: "szöveg",
      listaKivalasztottElem: 2,
      listaKivalasztottElemek: ["3", "5"],
      sizeMultiList: 6,
      kenyer: false,
      kifli: true,
      neme: "fiú",
      range: 0,
      min: -1,
      max: 1,
      step: 0.05,
    };
  },
  methods: {
    onClickMultiListSizeButton(number){
      this.sizeMultiList = Math.max(this.sizeMultiList + number, 2);
    }
  }
};
</script>

<style>
</style>