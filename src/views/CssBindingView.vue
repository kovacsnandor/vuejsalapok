<template>
  <div>
    <h1>Css binding (adatkötés)</h1>
    <h2>Szövegközi stílus</h2>
    <input
      type="range"
      class="form-range"
      id="range1"
      :min="min"
      :max="max"
      :step="step"
      v-model="opacity"
    />
    <div
      :style="{
        'background-color': `rgba(115, 20, 20, ${opacity})`,
        fontWeight: 'bold',
      }"
    >
      Szövegközi stílus
    </div>

    <h3>Camel case vs kebab case jelölés a :style-nál</h3>
    <div
      :style="{
        backgroundColor: 'lightpink',
        'font-weight': 'bold',
      }"
    >
      Camel case: backgroundColor <br />
      kebab case: background-color <br />
    </div>

    <h3>Tömb szintaxis: {{ isImportant }}</h3>
    <button type="button" class="btn btn-primary"
      @click="onClickButonVastagNemvastab()"
    >
      vastag/nem vastag
    </button>
    <button type="button" class="btn btn-danger"
      @click="onClickButonPirosNemPiros()"
    >
      piros/nem piros
    </button>

    <div 
      :class="{ 
        vastagClass: isImportant,
        pirosClass: isRed
        }"
      class="doboz sargaClass"
    >
      Valami
    </div>
    <!-- <div :class="[{ vastagClass: isImportant }, 'sargaClass']"
      class="doboz"
    >
      Valami
    </div> -->
    <!-- <div class="vastagClass sargaClass doboz">
      Valami
    </div> -->

    <h2>kaják</h2>
    <ul>
      <li v-for="(gyumolcs, index) in gyumolcsok" :key="index"
        @click="onClickGYumolcs(gyumolcs)"
        @mouseover="overGyumolcs(gyumolcs)"
        @mouseout="outGyumolcs()"
        :class="{
          kivalasztva: selectedGyumolcs == gyumolcs,
          felette: overedGyumolcs == gyumolcs
        }"
      >
        {{ gyumolcs }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      min: 0,
      max: 1,
      step: 0.01,
      opacity: 0.2,
      gyumolcsok: ["alma", "barack", "körte", "dió", "bejgli"],
      selectedGyumolcs: null,
      overedGyumolcs: null,
      isImportant: true,
      isRed: true,
    };
  },
  methods:{
    onClickButonVastagNemvastab(){
      this.isImportant = !this.isImportant;
    },
    onClickButonPirosNemPiros(){
      this.isRed = !this.isRed
    },
    onClickGYumolcs(gyumolcs){
      this.selectedGyumolcs = gyumolcs;
    },
    overGyumolcs(gyumolcs){
      //E folött vagyok
      this.overedGyumolcs=gyumolcs;
      console.log("felette");
      
    },
    outGyumolcs(){
      //Nem vagyok gyümölcsön
      this.overedGyumolcs=null
      console.log("lementem");
      
    },
  }
};
</script>

<style scoped>
h3 {
  margin-top: 1rem;
}

.kivalasztva {
  color: red;
}
.felette {
  background-color: silver;
}
li {
  cursor: pointer;
}

.vastagClass {
  font-weight: bold;
}
.sargaClass {
  background-color: rgb(255, 255, 139);
}
.doboz {
  border: dashed black 1px;
  width: 200px;
  margin: 20px;
  padding: 20px;
}
.pirosClass {
  color: red;
}
</style>