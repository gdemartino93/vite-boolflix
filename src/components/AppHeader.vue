<script >
import { store } from '../store';
import AppSearch from './AppSearch.vue';
export default{
  components:{AppSearch},
  data(){
    return{
      store
    }
  }
}
</script>

<template>
            <h1 class="mx-3">BOOLFIX</h1>
            <AppSearch @ricerca="prova" />
</template>

<style scoped lang="scss">
@use '../styles/partials/variables' as *;


.input-group{
    width: 20%;
}
</style>
