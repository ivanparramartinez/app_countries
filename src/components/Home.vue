<template>
  <div>
    <div class="search-filter my-2 filter-content">
      <div class="search">
        <form class="form-search">
          <label>
            <i class="fa fa-search"></i>
            <input type="text" placeholder="Search Blog" v-model="search">
          </label>
        </form>
      </div>
      <div class="filter">
        <label>
          <select name="countries" class="filter" v-model="region">
            <option value="" selected disabled hidden>Filter by Region</option>
            <option value="All">All</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </label>
      </div>
    </div>

    <div class="container grid" v-if="region === 'All' || !region">
      <article v-for="(country, id1) in Countries" :key="id1" class="card">
        <img :src="country.flag" alt="" class="img-fluid">
        <div class="card-content">
          <h3>{{ country.name }}</h3>
          <p>
            <b>Population: </b>
            {{ country.population }}
          </p>
          <p>
            <b>Region: </b>
            {{ country.region }}
          </p>
          <p>
            <b>Capital: </b>
            {{ country.capital }}
          </p>
        </div>
      </article>
    </div>
    <div class="container grid" v-else>
      <article v-for="(country1, id2) in filterCountriesByRegion" :key="id2" class="card">
        <img :src="country1.flag" alt="" class="img-fluid">
        <div class="card-content">
          <h3>{{ country1.name }}</h3>
          <p>
            <b>Population: </b>
            {{ country1.population }}
          </p>
          <p>
            <b>Region: </b>
            {{ country1.region }}
          </p>
          <p>
            <b>Capital: </b>
            {{ country1.capital }}
          </p>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import axios from 'axios';

export default {
  name: 'Home',
  data() {
    return {
      Countries: null,
      search: '',
      region: ''
    }
  },
  mounted() {
    this.getCountries();
    this.filterCountriesByRegion();
    this.filteredCountriesSearch();
  },
  methods: {
    getCountries() {
      axios
          .get('https://restcountries.eu/rest/v2/all')
          .then(response => {
            this.Countries = response.data
          })
          .catch(e => console.log(e))
    }
  },
  computed: {
    filterCountriesByRegion: function () {
      return this.Countries.filter((country1) => {
        return country1.region.match(this.region)
    });
    },
    filteredCountriesSearch: function (){
      return this.Countries.filter((country2) => {
        return country2.name.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  }
}
</script>

<style scoped>

</style>