<template>
  <div>
    <h1>Globális komponens</h1>
    <!-- Itt használuk a komponenst -->
    <DobozGlobalis
        v-for="(doboz,index) in dobozok" :key="index"
    />
  </div>
</template>

<script>
import DobozGlobalis from '@/components/dobozok/DobozGlobalis.vue';

export default {
    data(){
        return {
            dobozok: [1,2,3,4],
        }
    }
}
</script>

<style>

</style>