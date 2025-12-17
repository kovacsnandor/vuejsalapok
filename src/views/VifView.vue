<template>
  <div>
    <h1>v-if</h1>

    <h2>
      <span v-if="listaKivalasztottElem==1">*</span>
      <span v-else-if="listaKivalasztottElem==2">**</span>
      <span v-else-if="listaKivalasztottElem==3">***</span>
      <span v-else>?</span>
    </h2>


    <select class="form-select" aria-label="Default select example"
      v-model="listaKivalasztottElem"
    >
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
      <option value="4">Négy</option>
      <option value="5">Öt</option>
      <option value="6">Hat</option>
    </select>
  </div>
</template>

<script>
export default {
  data(){
    return {
      listaKivalasztottElem: 2,
    }
  }
};
</script>

<style>
</style>