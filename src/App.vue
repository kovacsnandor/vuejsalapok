<template>
  <div class="container-fluid my-container my-border mt-5">
    <!-- Head -->
    <h1>Komponensek</h1>

    <div class="my-border p-4 d-flex justify-content-between align-items-center">
      <!-- Menü -->
      <div>
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/about">About</RouterLink> |
        <RouterLink to="/globaliscomponent">Globális komponens</RouterLink> |
        <RouterLink to="/lokaliscomponent">Lokális komponens</RouterLink> |
        <RouterLink to="/componentkommunikacio"
          >Komponens kommunikáció</RouterLink
        >
        | <br>
        <RouterLink to="/szorzo">Szorzó</RouterLink> |
        <RouterLink to="/slot">Slot</RouterLink> |
        <RouterLink to="/tegla">Tégla</RouterLink> |
        <RouterLink to="/inputcomponent">Input komponens</RouterLink> |
        <RouterLink to="/piniacounter">Pinia counter</RouterLink> |
      </div>

      <!-- Kereső -->
      <div class="d-flex align-items-center" role="search">
        <label for="searchWord" class="form-label text-nowrap m-0"
          >Kereső:
        </label>
        <input
          id="searchWord"
          class="form-control me-2 ms-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          v-model="searchWordInput"
        />
        <button
          class="btn btn-outline-success"
          type="submit"
          @click="setSearchWord(searchWordInput)"
        >
          Search
        </button>
      </div>
    </div>

    <!-- Ide töltődnek be az oldalak -->
    <RouterView />
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { useSearchStore } from '@/stores/searchStore';

export default {
  data (){
    return {
      searchWordInput: ''
    }
  },
  watch: {
    searchWordInput(value){
      console.log("value", value);
      
      if (!value) {
        this.reset();
      }
    }
  },
  methods: {
    ...mapActions(useSearchStore, ['setSearchWord', 'reset']),
  },
  computed: {
    ...mapState(useSearchStore, ['searchWord'])
  }
}

</script>

<style></style>
