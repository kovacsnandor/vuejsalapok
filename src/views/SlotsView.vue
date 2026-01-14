<template>
  <div>
    <h1>Slot</h1>

    <!-- <ButtonOpenCloseModal :id="'yesNoModal'">
      Nyit csuk
    </ButtonOpenCloseModal> -->

    
    <button type="button" class="btn btn-primary"
    @click="onClikcButtonEltuntetMegjelenit"
    >
    <span v-if="szovegLatszik">Szöveg eltüntet</span>
    <span  v-if="!szovegLatszik">Szöveg megjelenit</span>
    
  </button>
  <p v-if="szovegLatszik">Ez egy szöveg</p>

    <ModalYesNo
    ref="modalYesNo"
    :yesButton="'Yes'" 
    :noButton="'No'" 
    :title="'Akarod-e'"
    @csinalhatod="csinalhatodHandler"
    >
        <h5>Ez egy kédés</h5>
        <ul>
            <li>enni</li>
            <li>inni</li>
            <li>hazamenni</li>
        </ul>
    </ModalYesNo>
  </div>
</template>

<script>
import ModalYesNo from "@/components/Confirm/ModalYesNo.vue";
import ButtonOpenCloseModal from "@/components/Confirm/ButtonOpenCloseModal.vue";
export default {
  name: "SlotsView",
  data(){
    return {
      szovegLatszik: true
    }
  },
  components: {
    ModalYesNo,
    ButtonOpenCloseModal,
  },
  methods: {
    onClikcButtonEltuntetMegjelenit(){
      this.$refs.modalYesNo.show();
    },
    csinalhatodHandler(){
      this.szovegLatszik = ! this.szovegLatszik;

    }
  }
};
</script>

<style></style>
