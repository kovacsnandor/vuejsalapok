<template>
  <div>
    <h1>Slot</h1>

    <!-- <ButtonOpenCloseModal :id="'yesNoModal'">
      Nyit csuk
    </ButtonOpenCloseModal> -->

    <button
      type="button"
      class="btn btn-primary"
      @click="onClikcButtonEltuntetMegjelenit"
    >
      {{ gombFelirat }}
    </button>
    <p v-if="szovegLatszik">Ez egy szöveg</p>

    <ModalYesNo
      ref="modalYesNo"
      :yesButton="'Yes'"
      :noButton="'No'"
      :title="'Akarod-e'"
      @csinalhatod="csinalhatodHandler"
    >
      <div v-if="szovegLatszik">
        <h5>Eltüntessem a szöveget?</h5>
        <img :src="kep" alt="">
        <i class="bi bi-trash3"></i>
      </div>
      <div v-if="!szovegLatszik">
        <h5>Megjelenítsem a szöveget?</h5>
        <img :src="kep" alt="">
        <i class="bi bi-magic"></i>
      </div>
    </ModalYesNo>
    <img 
      class="ms-2"
      style="width:20px"
      v-for="(tegla,index) in teglak" 
      :key="index" 
      :src="`pictures/${tegla}`" 
      alt=""/>
  </div>
</template>

<script>
import ModalYesNo from "@/components/Confirm/ModalYesNo.vue";
import ButtonOpenCloseModal from "@/components/Confirm/ButtonOpenCloseModal.vue";
export default {
  name: "SlotsView",
  data() {
    return {
      szovegLatszik: true,
      kep: 'pictures/kep.jfif',
      teglak: ['tegla.jpg','tegla.jpg','tegla.jpg']
    };
  },
  components: {
    ModalYesNo,
    ButtonOpenCloseModal,
  },
  methods: {
    onClikcButtonEltuntetMegjelenit() {
      this.$refs.modalYesNo.show();
    },
    csinalhatodHandler() {
      this.szovegLatszik = !this.szovegLatszik;
    },
  },
  computed: {
    gombFelirat(){
      return this.szovegLatszik ?
      'Szöveg eltüntet' 
      :
      'Szöveg megjelenit';
    }
  },
};
</script>

<style></style>
