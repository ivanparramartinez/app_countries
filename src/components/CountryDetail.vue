<template>
  <div class="hello">
    <div class="btn">
      <button @click="back" class="backBtn"><i class="fa fa-chevron-left" aria-hidden="true"></i> Back</button>
    </div>
    <div class="container my-2 wrapper">
      <div style="float:left; width: 50%">
        <img :src="country_detail.flag" class="flag" :alt="country_detail.name" width="100%"/>
      </div>
      <div style="float:right; width: 40%" class="card-content">
        <h1>{{ country_detail.name }}</h1>
        <br>
        <div style="float:left">
          <p><b>Native Name: </b>{{ country_detail.nativeName }}</p>
          <p><b>Population: </b>{{ country_detail.population }}</p>
          <p><b>Region: </b>{{ country_detail.region }}</p>
          <p><b>Sub Region: </b>{{ country_detail.subregion }}</p>
          <p><b>Capital: </b>{{ country_detail.capital }}</p>
        </div>
        <div style="float:right">
          <p><b>Top Level Domain: </b>{{ country_detail.topLevelDomain[0] }}</p>
          <p><b>Currencies: </b>{{ country_detail.currencies[0].name }}</p>
          <p><b>Languages: </b>{{ country_detail.languages[0].name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CountryDetail',
  data() {
    return {
      country_name: '',
      country_detail: null
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
