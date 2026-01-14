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
      <!-- Üzenőfal -->
      <div class="col">
        <h2>
          Üzenőfal
          <button
            type="button"
            class="btn btn-outline-danger"
            v-if="uzenetlista.length"
            @click="uzenetlista = []"
          >
            <i class="bi bi-trash3"></i>
          </button>
        </h2>
        <p v-for="(uzenet, index) in uzenetlista" :key="index">
          {{ uzenet.kicsoda }}: {{ uzenet.uzenet }}
        </p>
      </div>

      <!-- Gyerek elem -->
      <div class="col my-border">
        <h2>{{ titleGyerekek }}</h2>
        <KommunikaloDoboz
          v-for="(gyerek, index) in gyerekek"
          :key="index"
          :kicsoda="gyerek"
          :uzenetSzulotol="uzenetGyereknek"
          @uzenetEsemeny="uzenetFogadHandler"
        />
      </div>
    </div>
  </div>
</template>

<script>
import KommunikaloDoboz from "@/components/kommunikaloDoboz/KommunikaloDoboz.vue";
class Uzenet {
  constructor(kicsoda = "", uzenet = "") {
    this.kicsoda = kicsoda;
    this.uzenet = uzenet;
  }
}
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
      uzenetlista: [],
      uzenetObjektum: new Uzenet(),
      gyerekek: ["Pisti", "Áron", "Éva"],
    };
  },
  methods: {
    onClickUzenetKuldButton() {
      console.log("üzenet gyereknek", this.uzenetInput);
      this.uzenetGyereknek = this.uzenetInput;
      this.uzenetObjektum = new Uzenet("Szülő", this.uzenetGyereknek);
      this.uzenetlista.push(this.uzenetObjektum);
      this.uzenetInput = "";
    },
    uzenetFogadHandler(uzenet) {
      this.uzenetGyerektol = uzenet.uzenet;
      this.uzenetlista.push(uzenet);
    },
  },
  computed: {
    titleGyerekek() {
      let title = "";
      if (this.gyerekek.length == 0) {
        title = "Nincs gyerek";
      } else if (this.gyerekek.length == 1) {
        title = "Gyerek";
      } else {
        title = "Gyerekek";
      }
      return title;
    },
  },
};
</script>

<style></style>
