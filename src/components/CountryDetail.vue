<template>
  <div class="details-wrapper my-2">
    <div>
      <button @click="back" class="buttons"><i class="fa fa-chevron-left" aria-hidden="true"></i> Atrás</button>
    </div>

    <div class="country-flag">
      <img :src="country_detail.flag" class="flag" :alt="country_detail.name"/>
    </div>
    <div class="country-details">
      <div class="country-name">{{ country_detail.name }}</div>
      <div class="data-wrapper">
        <div class="left-col">
          <p class="label"><b>Native Name: </b><span class="info">{{ country_detail.nativeName }}</span></p>
          <p class="label"><b>Population: </b><span class="info">{{ country_detail.population }}</span></p>
          <p class="label"><b>Region: </b><span class="info">{{ country_detail.region }}</span></p>
          <p class="label"><b>Sub Region: </b><span class="info">{{ country_detail.subregion }}</span></p>
          <p class="label"><b>Capital: </b><span class="info">{{ country_detail.capital }}</span></p>
        </div>
        <div class="right-col">
          <p class="label"><b>Top Level Domain: </b><span class="info">{{ country_detail.topLevelDomain[0] }}</span></p>
          <p class="label"><b>Currencies: </b><span class="info">{{ country_detail.currencies[0].name }}</span></p>
          <p class="label"><b>Languages: </b><span class="info" v-for="language in country_detail.languages"
                                                   :key="language.index">{{ language.name }} </span></p>
        </div>
        <div class="border-countries">
          <span class="label borders"><b>Border Countries: </b></span>
          <span v-for="border in country_detail.borders" :key="border.index">
            <button class="buttons-small">{{ border }}</button>
          </span>
          <span class="no-borders" v-if="country_detail.borders <= 0"> No borders </span>
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