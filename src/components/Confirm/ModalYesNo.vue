<template>
  <!-- Button trigger modal -->
  <!-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#yesNoModal">
  Launch demo modal
</button> -->

  <!-- Modal -->
  <div
    class="modal fade"
    :id="id"
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
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="$event.target.blur()"
          ></button>
        </div>
        <div class="modal-body">
            <slot></slot>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            @click="$event.target.blur()"
          >
            {{ noButton }}
          </button>
          <button type="button" class="btn btn-primary">{{ yesButton }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'ModalYesNo',
    props:{
        id: {type: String, default: 'yesNoModal'},
        yesButton: {type: String, default: 'Igen'},
        noButton: {type: String, default: 'Nem'},
        title: {type: String, default: 'Kérdés'}
    }

};
</script>

<style></style>
