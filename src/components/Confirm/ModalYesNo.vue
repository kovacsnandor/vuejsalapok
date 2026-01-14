<template>
  <!-- Button trigger modal -->
  <!-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#yesNoModal">
  Launch demo modal
</button> -->

  <!-- Modal -->
  <div
    class="modal fade"
    
    ref="modalYesNo"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">{{ title }}</h1>
          <button
            type="button"
            class="btn-close"
            aria-label="Close"
            @click="hide(); $event.target.blur()"
          ></button>
        </div>
        <div class="modal-body">
            <slot></slot>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            
            @click="hide(); $event.target.blur()"
          >
            {{ noButton }}
          </button>
          <button type="button" class="btn btn-primary"
            @click="onClickButtonYes(); $event.target.blur()"
          >
            {{ yesButton }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from 'bootstrap';
export default {
    name:'ModalYesNo',
    props:{
        id: {type: String, default: 'yesNoModal'},
        yesButton: {type: String, default: 'Igen'},
        noButton: {type: String, default: 'Nem'},
        title: {type: String, default: 'Kérdés'}
    },
    data(){
      return {
        modal: null
      }
    },
    methods:{
      onClickButtonYes(){
        this.$emit('csinalhatod');
        this.hide()
      },
      show(){
        this.modal.show();
      },
      hide(){
        this.modal.hide();
      },
    },
    mounted(){
      //Ez akkor fut le, ha már betöltődött az oldal
      this.modal = new Modal(this.$refs.modalYesNo);
    }

};
</script>

<style></style>
