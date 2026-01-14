<template>
  <div>
    <h1>Slot</h1>

    <ButtonOpenCloseModal :id="'yesNoModal'">Nyit csuk</ButtonOpenCloseModal>

    <ModalYesNo :yesButton="'Yes'" :noButton="'No'" :title="'Akarod-e'">
        <h5>Ezgy egy kédés</h5>
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
  components: {
    ModalYesNo,
    ButtonOpenCloseModal,
  },
};
</script>

<style></style>
