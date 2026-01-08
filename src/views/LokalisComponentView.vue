<template>
  <div>
    <h1>Globális komponens</h1>
    <!-- Itt használuk a komponenst -->
    <div class="row">
      <div class="col">
        <DobozGlobalis v-for="(doboz, index) in dobozok" :key="index" />
      </div>
      <div class="col">
        <DobozLokalis v-for="(doboz, index) in dobozok" :key="index" />
      </div>
    </div>
  </div>
</template>

<script>
import DobozLokalis from "@/components/dobozok/DobozLokalis.vue";

export default {
  components: { DobozLokalis },
  data() {
    return {
      dobozok: [1, 2, 3, 4],
    };
  },
};
</script>

<style>
</style>