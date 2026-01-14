<template>
  <div>
    <h1>Tégla ({{ teglakSzama }})</h1>
    <button type="button" class="btn btn-primary" @click="onClickMinuszTegla">
      - Tégla
    </button>
    <button
      type="button"
      class="btn btn-success ms-2"
      @click="onClickPluszTegla"
    >
      + Tégla
    </button>
    <!-- téglák -->
    <div class="mt-3">
      <img
        class="ms-2"
        style="width: 80px"
        v-for="(tegla, index) in teglak"
        :key="index"
        :src="`pictures/${tegla}`"
        alt=""
      />
    </div>
    <!-- yesno -->
    <ModalYesNo
      ref="modalYesNo"
      :yesButton="'Yes'"
      :noButton="'No'"
      :title="'Akarod-e'"
      @csinalhatod="csinalhatodHandler"
    >
      <div v-if="plusz">
        <h5>Hozzáadjam a téglát?</h5>
        <i class="bi bi-magic"></i>
    </div>
    <div v-if="!plusz">
        <h5>Elvegyem a téglát?</h5>
        <i class="bi bi-trash3"></i>
      </div>
    </ModalYesNo>
  </div>
</template>

<script>
import ModalYesNo from "@/components/Confirm/ModalYesNo.vue";
export default {
  components: {
    ModalYesNo,
  },
  data() {
    return {
      teglak: ["tegla.jpg", "tegla.jpg", "tegla.jpg"],
      tegla: "tegla.jpg",
      plusz: true,
    };
  },
  methods: {
    onClickMinuszTegla() {
      this.plusz = false;
      this.$refs.modalYesNo.show();
    },
    onClickPluszTegla() {
      this.plusz = true;
      this.$refs.modalYesNo.show();
    },
    csinalhatodHandler() {
      if (this.plusz) {
        this.teglak.push(this.tegla);
      } else {
        this.teglak.pop();
      }
    },
  },
  computed: {
    teglakSzama(){
        return this.teglak.length;
    }
  }
};
</script>

<style></style>
