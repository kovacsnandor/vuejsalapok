<template>
  <div>
    <h1>v-For</h1>
    <div class="row">
      <!-- lista -->
      <div class="col-5">
        <h2>Lista</h2>
        <ul class="list-group">
          <li
            class="list-group-item pt-0 pb-0"
            v-for="(tanulo, index) in tanulok"
            :key="index"
          >
            {{ index + 1 }}: {{ tanulo.nev }}, {{ tanulo.osztaly }},
            {{ tanulo.atlag }}
          </li>
        </ul>
      </div>
      <!-- táblázat -->
      <div class="col-7">
        <h2>Táblázat</h2>
        <div class="table-responsive">
          <table class="table table-dark table-hover">
            <thead>
              <tr>
                <th scope="col">S</th>
                <th scope="col">Név</th>
                <th scope="col">Osztály</th>
                <th scope="col">Átlag</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(tanulo, index) in tanulok" :key="index">
                <th>{{ index }}</th>
                <td class="text-nowrap">{{ tanulo.nev }}</td>
                <td class="text-center">{{ tanulo.osztaly }}</td>
                <td class="text-end">{{ tanulo.atlag }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tanulok: [
        { nev: "pisti", osztaly: "3a", atlag: 4.7 },
        { nev: "béla", osztaly: "1a", atlag: 3.7 },
        { nev: "anna", osztaly: "1a", atlag: 4.2 },
        {
          nev: "nemes nemzetes vitéz nagyérdemű címzetes gróf jenő",
          osztaly: "2a",
          atlag: 2.7,
        },
        { nev: "áron", osztaly: "1a", atlag: 4.3 },
        { nev: "feri", osztaly: "2a", atlag: 3.3 },
        { nev: "áron", osztaly: "2a", atlag: 3.3 },
        { nev: "emese", osztaly: "1a", atlag: 2.9 },
        { nev: "áron", osztaly: "1b", atlag: 4.8 },
        { nev: "évi", osztaly: "3a", atlag: 2.7 },
      ],
    };
  },
};
</script>

<style>
</style>