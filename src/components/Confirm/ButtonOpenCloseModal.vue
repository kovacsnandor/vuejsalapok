<template>
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      :data-bs-target="`#${id}`"
    >
      <slot></slot>
    </button>

</template>

<script>
export default {
    props:{
        id: {type: String, default:"yesNoModal"}
    }

}
</script>

<style>

</style>