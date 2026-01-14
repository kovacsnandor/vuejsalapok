<template>
  <div class="d-flex align-items-center my-3">
    <button
      type="button"
      class="btn btn-primary"
      @click="onClickSzorKettoButton"
    >
      * {{ szorzo }}
    </button>
    <input
      type="range"
      class="form-range ms-2"
      style="width: 400px"
      :min="min"
      :max="max"
      :step="step"
      v-model="szorzo"
    />
  </div>
</template>

<script>
export default {
  props: {
    szam: { type: Number, default: 0 },
    min: { type: Number, default: 2 },
    max: { type: Number, default: 10 },
    step: { type: Number, default: 1 },
  },
  data() {
    return {
      szorzo: 0,
    };
  },
  mounted() {
    this.szorzo = this.min;
  },
  methods: {
    onClickSzorKettoButton() {
      this.$emit("szorzas", this.szam * this.szorzo);
    },
  },
};
</script>

<style></style>
