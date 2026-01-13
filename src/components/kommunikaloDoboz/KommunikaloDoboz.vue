<template>
  <div class="my-doboz">
    <h2>{{kicsoda}}</h2>
    <p>Szülőtől: {{uzenetSzulotol}}</p>
    <!-- Üzenet írás -->
    <label for="uzenet" class="form-label">Írj egy választ</label>
    <div class="d-flex">
      <input
        type="text"
        class="form-control"
        id="uzenet"
        v-model="uzenetSzulonek"
      />
      <!-- Üzenet küldés -->
      <button
        type="button"
        class="btn btn-primary ms-2"
        v-if="uzenetSzulonek.trim()"
        @click="onClickUzenetKuldButton"
      >
        <i class="bi bi-send"></i>
      </button>
    </div>
  </div>
</template>

<script>
class Uzenet {
  constructor(kicsoda = "", uzenet = ""){
    this.kicsoda = kicsoda;
    this.uzenet = uzenet;
  }
}
export default {
  props:{
    kicsoda: {type: String, default: 'Valaki'},
    uzenetSzulotol: {type: String, default: ''}
  },
  data() {
    return {
      uzenetSzulonek: '',
    };
  },
  methods: {
    onClickUzenetKuldButton() {
      console.log("üzenet szülőnek", this.uzenetSzulonek);
      //Kiváltjuk az eseményt
      this.$emit("uzenetEsemeny", new Uzenet(this.kicsoda, this.uzenetSzulonek))
      this.uzenetSzulonek = '';
      
    },
  },
};
</script>

<style scoped>
.my-doboz {
  min-width: 200px;
  min-height: 100px;
  padding: 5px;
  margin: 10px;
  background: lightgreen;
  border: 1px dashed black;
}
</style>