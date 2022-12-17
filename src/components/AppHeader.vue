<script >
import { store } from '../store';
import AppSearch from './AppSearch.vue';
import axios from 'axios';
export default{
  components:{AppSearch},
  data(){
    return{
      store
    }
  },
  methods:{
    search(){
      let searchUrl = store.searchApi;
        searchUrl += `${store.searchName}`
      axios
      .get(searchUrl)
      .then(res => {
        store.arrayItem = res.data.results
      })
      .catch(err =>{
        console.log("error" + err);
      })
    }

  }
}
</script>

<template>
            <h1 class="mx-3">BOOLFIX</h1>
            <AppSearch @ricerca="search" />
</template>

<style scoped lang="scss">
@use '../styles/partials/variables' as *;


.input-group{
    width: 20%;
}
</style>
