<template>
    <!-- Szülő -->
  <div>
    <h1>Komponens kommunikáció</h1>
    <KommunikaloDoboz/>
  </div>
</template>

<script>
import KommunikaloDoboz from '@/components/kommunikaloDoboz/KommunikaloDoboz.vue';    
export default {
    name: 'ComponentKommunikacioView',
    components: {
        KommunikaloDoboz
    }
}
</script>

<style>

</style>