<template>
  <div class="my-box" @click="counter++">
    <h3>Lokális komponens: {{ counter }}</h3>
    <p>Engem globálisan deklaráltak a main.js-ben</p>
    <p>Nem kell importálni, bárhonnan elérhető vagyok</p>
  </div>
</template>

<script>
export default {
    data(){
        return {
            counter: 0
        }
    }
}
</script>

<style scoped>
.my-box {
  width: 300px;
  /* height: 300px; */
  border: 1px dashed black;
  background-color: lightgreen;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;

}
</style>