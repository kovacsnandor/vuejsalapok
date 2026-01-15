<template>
  <div>
    <h1>Input komponens</h1>
    <p>Beírt szöveg: {{ text }}</p>
    <div class="mb-3">
      <label for="text" class="form-label"> Text: </label>
      <input type="text" class="form-control" id="text" 
        v-model="text"
      />
    </div>
    <hr>
<!-- input komponens -->
    <InputComponent
        label="Valami szöveg:"
        v-model="text"
    />
  </div>
</template>

<script>
import InputComponent from '@/components/InputComponentView/InputComponent.vue';    
export default {
    components: {
        InputComponent
    },
    data(){
        return {
            text: '',
            label: 'Valami szöveg:'
        }
    }
};
</script>

<style></style>
