<template>
  <!-- Szülő -->
  <div>
    <h1>Komponens kommunikáció</h1>
    <div class="row my-border">
      <!-- Szülő üzenetküldő -->
      <h2>Szülő</h2>
      <div class="col">
        <div class="d-flex">
          <input
            type="text"
            class="form-control"
            id="uzenet"
            v-model="uzenetInput"
          />
          <!-- Üzenet küldés -->
          <button
            type="button"
            class="btn btn-primary ms-2"
            v-if="uzenetInput.trim()"
            @click="onClickUzenetKuldButton"
          >
            <i class="bi bi-send"></i>
          </button>
        </div>
        <!-- üzenet gyerektől -->
         <p>Üzenet gyerektől: {{ uzenetGyerektol }}</p>
      </div>
      <!-- Gyerek elem -->
      <div class="col my-border">
        <h2>Gyerek</h2>
        <KommunikaloDoboz 
          :kicsoda="'Pisti'"
          :uzenetSzulotol="uzenetGyereknek"
          @uzenetEsemeny="uzenetFogadHandler"
        />
      </div>
    </div>
  </div>
</template>

<script>
import KommunikaloDoboz from "@/components/kommunikaloDoboz/KommunikaloDoboz.vue";
export default {
  name: "ComponentKommunikacioView",
  components: {
    KommunikaloDoboz,
  },
  data() {
    return {
      uzenetInput: "",
      uzenetGyereknek: "",
      uzenetGyerektol: "",
      
    };
  },
  methods:{
    onClickUzenetKuldButton(){
      console.log("üzenet gyereknek", this.uzenetInput);
      this.uzenetGyereknek = this.uzenetInput
    },
    uzenetFogadHandler(uzenet){
      this.uzenetGyerektol = uzenet;
    }
  }
};
</script>

<style>
</style>