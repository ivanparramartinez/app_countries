<template>
  <div class="hello">
    <div class="btn">
      <button @click="back" class="backBtn"><i class="fa fa-chevron-left" aria-hidden="true"></i> Back</button>
    </div>
    <div class="container my-2 wrapper">
      <div>
        <img :src="country_detail.flag" class="flag" :alt="country_detail.name" width="100%"/>
      </div>
      <div class="wrapper">
        <h1>{{ country_detail.name }}</h1>
        <br>
        <div>
          <p><b>Native Name: </b>{{ country_detail.nativeName }}</p>
          <p><b>Population: </b>{{ country_detail.population }}</p>
          <p><b>Region: </b>{{ country_detail.region }}</p>
          <p><b>Sub Region: </b>{{ country_detail.subregion }}</p>
          <p><b>Capital: </b>{{ country_detail.capital }}</p>
        </div>
        <div>
          <p><b>Top Level Domain: </b>{{ country_detail.topLevelDomain[0] }}</p>
          <p><b>Currencies: </b>{{ country_detail.currencies[0].name }}</p>
          <p><b>Languages: </b>
            <span class="info" v-for="language in country_detail.languages" :key="language.index">{{ language.name}}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CountryDetail',
  metaInfo: {
    title: 'Country Detail'
  },
  data() {
    return {
      country_name: '',
      country_detail: []
    }
  },
  mounted() {
    this.country_name = this.$route.params.name;
    this.getCountryDetail()
  },
  methods: {
    back() {
      this.$router.push("/");
    },
    getCountryDetail() {
      axios
          .get('https://restcountries.eu/rest/v2/name/' + this.country_name)
          .then(res => (this.country_detail = res.data[0]))
          .catch(e => console.log(e))
    }
  }
}
</script>

<style scoped>

</style>
