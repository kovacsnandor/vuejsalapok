<template>
  <div @click="onClickButton()">
    <h1>v-on (@) Eseménykezelés és módosítók</h1>
    <!-- v-on: @ -->
    <button type="button" class="btn btn-primary" @click="onClickButton()">
      {{ count }}
    </button>
    <h2>Esemény módosítók: .once, .prevent, .stop</h2>
    <!-- .once -->
    <h3>.once: csak egyszer</h3>
    <button type="button" class="btn btn-success" @click.once="onClickButton()">
      {{ count }}
    </button>
    <!-- .prevent -->
    <h3>.prevent: Alapértelmezés letiltása</h3>
    <a href="https://www.google.com/" target="_blank">Google</a>
    <hr />
    <a href="https://www.google.com/" @click.prevent="onClickLink()">
      Google linkje: {{ link }}
    </a>

    <h2>-stop: Buborékolás</h2>
    <button type="button" class="btn btn-success" @click="onClickButton()">
      <!-- szülő -->
      {{ count }}
      <button
        type="button"
        class="btn btn-danger"
        @click.stop="onClickButton()"
      >
        <!-- gyerek -->
        {{ count }}
      </button>
    </button>

    <!-- Események -->
    <h3>VueJs események</h3>
    <p>
      Egér: click, dblclick, mousemove, mousewheel, mouseover, mouseout,
      mousdown.left -right -middle
    </p>
    <p>Billentyű: keypress, keydown, keyup</p>
    <p>Egyéb: submit, drag, scroll, error, abort, load, $emit</p>

    <h3>Billentyű eseménykezelés</h3>
    <div class="mb-3">
      <label for="szoveg" class="form-label"
        >Szöveg</label
      >
      <input
        type="text"
        class="form-control"
        id="szoveg"
        v-model="szoveg"
        @keydown="billentyuLeutes()"
        @keyup.s="sBetuLeutes()"
        @keyup.enter="enterLeutes()"
      />
    </div>
    <p>{{ szoveg }}</p>
    <p>{{ billentyu }}</p>
    <p>{{ uzenet }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      link: null,
      szoveg: null,
      billentyu: null,
      uzenet: null
    };
  },
  methods: {
    onClickButton() {
      this.count++;
    },
    onClickLink() {
      this.link = "https://www.google.com/";
    },
    billentyuLeutes(){
      this.uzenet = "Leütöttél egy billentyűt";
      this.billentyu = event.key
    },
    sBetuLeutes(){
      this.uzenet = "Leütöttél egy s betűt";
    },
    enterLeutes(){
      this.uzenet = "Leütöttél egy entert";
    },
  },
};
</script>

<style>
</style>