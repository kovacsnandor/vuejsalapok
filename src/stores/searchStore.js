import { defineStore } from "pinia";

export const useSearchStore = defineStore("search", {
  //Ezek a változók
  state: () => ({
    searchWord: "",
  }),
  //valamilyen formában visszaadja
  getters: {},
  //csinál vele valamit
  actions: {
    setSearchWord(searchWord) {
      this.searchWord = searchWord;
    },
    reset() {
      this.searchWord = '';
    },
  },
});
