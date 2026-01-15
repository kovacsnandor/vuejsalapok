<template>
  <div>
    <h1>Pinia</h1>
    <p>Keresőszó: {{ searchWord }}</p>
    <p>{{ counter }} | {{ paddedCount }}</p>
    <button type="button" class="btn btn-primary"
        @click="increment"
    >Increment</button>
    <button type="button" class="btn btn-danger ms-2"
        @click="reset"
    >Reset</button>
 
    <button type="button" class="btn btn-danger ms-2"
        @click="increaseDLength"
    >vezető nulla növelő</button>

    <div>
        <PiniaCounter/>
        <PiniaCounter/>
        <PiniaCounter/>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from '@/stores/counter';
import PiniaCounter from '@/components/Counter/PiniaCounter.vue';
import { useSearchStore } from '@/stores/searchStore';

export default {
    components: {
        PiniaCounter
    },
    data(){
        return {
            // counterStore: useCounterStore()
        }
    },
    methods:{
        ...mapActions(useCounterStore, ['increment', 'reset', 'increaseDLength'])
    },
    computed: {
        ...mapState(useCounterStore, ['counter', 'paddedCount']),
        ...mapState(useSearchStore, ['searchWord'])
    }
};
</script>

<style></style>
