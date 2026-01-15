<template>
  <div>
    <h1>Pinia</h1>
    <p>Keresőszó: {{ searchWord }} {{ talalat }}</p>
    <p v-html="keresJelol(szoveg)"></p>
    <p>{{ counter }} | {{ paddedCount }}</p>
    <button type="button" class="btn btn-primary" @click="increment">
      Increment
    </button>
    <button type="button" class="btn btn-danger ms-2" @click="reset">
      Reset
    </button>

    <button type="button" class="btn btn-danger ms-2" @click="increaseDLength">
      vezető nulla növelő
    </button>

    <div>
      <PiniaCounter />
      <PiniaCounter />
      <PiniaCounter />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "@/stores/counter";
import PiniaCounter from "@/components/Counter/PiniaCounter.vue";
import { useSearchStore } from "@/stores/searchStore";

export default {
  components: {
    PiniaCounter,
  },
  data() {
    return {
      // counterStore: useCounterStore()
      szoveg: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sollicitudin nisl ut lectus interdum porta. Nunc hendrerit dui eget mollis volutpat. Sed ut odio nec diam malesuada laoreet ac a nibh. Quisque dictum, massa eu ultrices bibendum, neque ipsum imperdiet leo, at condimentum nunc sem et elit. Ut tincidunt nisl quis ante scelerisque porta. Nullam et molestie mi. Nunc mi risus, mollis eget augue in, rhoncus maximus sapien.

Pellentesque tempor orci a feugiat dignissim. Cras egestas eleifend diam, ac facilisis tortor molestie nec. Quisque tincidunt elit sit amet congue euismod. In ornare orci sed tempor accumsan. Vivamus eu elit ornare, fermentum odio ac, maximus urna. Pellentesque consectetur fringilla orci eget venenatis. Sed et tincidunt sem, a laoreet nibh. Ut tincidunt pulvinar orci, sed gravida urna auctor nec. Curabitur ac augue nisl. Sed a enim in libero mollis fermentum. Proin vel nibh quam. Nullam venenatis interdum ipsum.

In luctus auctor nulla at vulputate. Cras vulputate sed mauris a porta. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed sed interdum odio, in lobortis dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc quis augue vel eros eleifend fermentum non vitae erat. Sed eu posuere eros, eget luctus purus. Vivamus turpis justo, auctor id neque eget, gravida pulvinar urna. Cras gravida ante tellus, vitae fringilla nisl convallis at.

Donec dictum tortor id sagittis finibus. Suspendisse potenti. Praesent a mi sed arcu egestas interdum non in diam. Duis porta tellus enim, vitae laoreet orci imperdiet et. Duis non condimentum leo, ac tempor nulla. Mauris vitae purus vitae neque laoreet hendrerit vel id quam. Mauris porttitor dignissim vestibulum. Sed pulvinar vehicula odio eget blandit.

Morbi pellentesque consectetur eros id auctor. Fusce varius aliquet est. Sed sapien nibh, congue id dapibus a, auctor ut nibh. Fusce imperdiet leo in magna ornare vehicula. Donec varius tempus neque suscipit venenatis. Suspendisse luctus, turpis sit amet congue semper, odio libero venenatis augue, vitae luctus nibh arcu nec neque. Sed id est leo.`,
    };
  },
  methods: {
    ...mapActions(useCounterStore, ["increment", "reset", "increaseDLength"]),
    ...mapActions(useSearchStore, ["keresJelol"])
  },
  computed: {
    ...mapState(useCounterStore, ["counter", "paddedCount"]),
    ...mapState(useSearchStore, ["searchWord"]),
    talalat() {
      if (!this.searchWord) {
        return "";
      }
      return this.szoveg.includes(this.searchWord) ? "(van)" : "(nincs)";
    },
  },
};
</script>

<style>
.mark {
  background-color: orange;
}
</style>
