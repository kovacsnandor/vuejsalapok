<template>
  <div class="mb-3">
      <label for="text" class="form-label"> {{ label }} </label>
      <input type="text" class="form-control" id="text" 
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </div>
</template>

<script>
export default {
    name:'InputComponent',
    props: {
        modelValue: {type: String, default: ''},
        label: {type: String, default: 'Text'}
    }
}
</script>

<style>

</style>