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
    keresJelol(text) {
      if (this.searchWord) {
        let what = new RegExp(this.searchWord, "gi");
        if (text) {
          text = text.replace(what, (match) => {
            return `<span class="mark p-0">${match}</span>`;
          });
        }
        return text;
      } else {
        return text;
      }
    },
  },
});
