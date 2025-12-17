<template>
  <div>
    <h1>
      v-show
      <button type="button" class="btn btn-primary" @click="onButtonAlert1()">
        Alert 1
      </button>
      <button
        type="button"
        class="btn btn-danger ms-2"
        @click="onButtonAlert2()"
      >
        Alert 2
      </button>
      <button
        type="button"
        class="btn btn-warning ms-2"
        @click="onButtonAlertTime('Heló Világ')"
      >
        Alert Time
      </button>
    </h1>
    <!-- üzenet1 -->
    <div class="alert alert-primary" role="alert" v-show="show1">
      <div class="d-flex justify-content-between">
        1. Eltüntetés v-show-val
        <i class="bi bi-x-lg my-pointer" @click="onClickX1()"></i>
      </div>
    </div>
    <!-- üzenet2 -->
    <div class="alert alert-success" role="alert" v-if="show2">
      <div class="d-flex justify-content-between">
        2. Eltüntetés v-if-el
        <i class="bi bi-x-lg my-pointer" @click="onClickX2()"></i>
      </div>
    </div>
    <!-- üzenet3 -->
    <div class="alert alert-danger" role="alert" v-if="showAutoMessage">
      <div class="d-flex justify-content-between">
        {{ showAutoMessage }}
        <i class="bi bi-x-lg my-pointer" @click="onClickX3()"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show1: true,
      show2: true,
      showAutoMessage: null,
      showTime: 3000,
      setTimeId: null,
    };
  },
  methods: {
    onClickX1() {
      this.show1 = false;
    },
    onClickX2() {
      this.show2 = false;
    },
    onClickX3(){
      this.showAutoMessage = null;
      clearTimeout(this.setTimeId);
      this.setTimeId = null;
    },
    onButtonAlert1() {
      this.show1 = true;
    },
    onButtonAlert2() {
      this.show2 = true;
    },
    onButtonAlertTime(message){
      if (this.setTimeId) {
        return
      }

      this.showAutoMessage = message
      this.setTimeId=setTimeout(() => {
        this.showAutoMessage = null;
        this.setTimeId = null;
      }, this.showTime);
      console.log(this.setTimeId);
      
    },
  },
};
</script>

<style>
</style>