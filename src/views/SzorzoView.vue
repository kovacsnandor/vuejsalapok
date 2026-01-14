<template>
  <div>
    <h1>Szorzó</h1>
    <!-- Szám beírása -->
    <div class="d-flex align-items-center">
        <label for="szam" class="form-label"
        >Szám:</label
        >
        <input
        type="number"
        class="form-control mx-2"
        id="szam"
        style="width: 100px"
        v-model="szam"
        />
        =
        {{ eredmeny }}
    </div>
    <!-- szorzó -->
      <Szorzo class="my-border p-3 mt-2"
    :szam="szam"
    @szorzas="duplazasHandler"
  />
  </div>
</template>

<script>
import Szorzo from "@/components/SzorzoView/Szorzo.vue";

export default {
  components: {
    Szorzo,
  },
  data(){
    return {
        szam: 0,
        eredmeny: 0
    }
  },
  methods: {
    duplazasHandler(eredmeny){
        this.eredmeny = eredmeny;
    }
  }
};
</script>

<style>

</style>