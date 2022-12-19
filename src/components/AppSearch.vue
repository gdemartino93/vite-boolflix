<script >
import { store } from '../store';
export default{
  data(){
    return{
      store
    }
  },
  methods:{

  }
}
</script>

<template>
            <div class="input-group mx-3 flex-nowrap">
                <input type="text" class="form-control" placeholder="Cerca Film" aria-label="Recipient's username" aria-describedby="button-addon2" v-model="store.searchName">
                <button class="btn btn-danger" type="button" id="button-addon2" @click="$emit('ricerca')">Cerca</button>
            </div>
</template>

<style scoped lang="scss">
@use '../styles/partials/variables' as *;


.input-group{
    min-width: 40vh;
}
</style>
