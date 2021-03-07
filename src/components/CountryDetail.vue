<template>
  <div class="hello">
    <div class="btn">
      <button @click="back" class="backBtn"> <i class="fa fa-chevron-left" aria-hidden="true"></i> Back</button>
    </div>
    <h1>{{ $route.params.name }}</h1>
    <h2>{{ country_detail }}</h2>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CountryDetail',
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
          .then(res => (this.country_detail = res))
          .catch(e => console.log(e))
    }
  }
}
</script>


<style scoped>

</style>
