<template>
  <div>
    <div class="search-filter my-2 filter-content">
      <div class="search">
        <input type="text" v-model="search" placeholder="Buscar País..." aria-label="Search"/>
      </div>
      <div class="filter" style="width:200px;">
        <select name="countries" class="filter-select" v-model="region" aria-label="Select">
          <option value="" selected>Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>

    </div>
    <div class="container grid">
      <article v-for="(country1, id2) in filterCountries" :key="id2" class="card">
        <router-link :to="url(country1.name)">
          <img :src="country1.flag" class="flag" :alt="country1.name"/>
        </router-link>
        <div class="card-content">
          <h3>{{ country1.name }}</h3>
          <br>
          <p>
            <b>Population: </b>
            {{ country1.population.toLocaleString() }}
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

import axios from 'axios';

export default {
  name: 'Home',
  metaInfo: {
    title: 'Home'
  },
  data() {
    return {
      regions: [
        "Filter by Region",
        "Africa",
        "America",
        "Asia",
        "Europa",
        "Oceania"
      ],
      Countries: [],
      search: '',
      region: ''
    }
  },
  mounted() {
    this.getCountries();
  },
  methods: {
    getCountries() {
      axios
          .get('https://restcountries.eu/rest/v2/all')
          .then(response => {
            this.Countries = response.data
          })
          .catch(e => console.log(e))
    },
    url(country) {
      return "/country/" + country;
    }
  },
  computed: {
    filterCountries() {
      return this.Countries.filter(country => {
        if (this.region) {
          return (
              country.region.toLowerCase() === this.region.toLowerCase() &&
              country.name.toLowerCase().startsWith(this.search.toLowerCase())
          )
        } else {
          return country.name.toLowerCase().startsWith(this.search.toLowerCase())
        }


      })
    }
  }
}
</script>

<style scoped>

</style>