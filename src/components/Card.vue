<script >
import { store } from '../store';
export default{
props :["item"],
data(){
  return{
    store,
    cardVisible : true,
    
  }
},
computed:{
  flagString(){
      for (let i = 0; i < this.store.flags.length; i++) {
        // se in questa iterazione store.flags.lang è inclusa nell'item original language allora ritorno il valore di store flag img.
                if (this.store.flags[i].lang.includes(this.item.original_language)) {
                    return this.store.flags[i].img
                }
      }
      // aggiungi ultima img dell'array ( da cambiare con altro elemento dello store per mantenibilitàe prevedere l'aggiornamento dell'array)
      return this.store.flags[this.store.flags.length - 1].img
  },

}
}
</script>

<template>

    <div class="item" v-show="cardVisible==true" @mouseover="cardVisible = false" @mouseleave="cardVisible = true">
      <img :src="store.imgEndPoint + item.poster_path" :alt="item.title">
    </div>
    <div class="item-back" v-show="cardVisible==false">
      <span class="title">{{ item.title }}</span>
      <span class="title-original">{{ item.original_title }}</span>
      <img :src="flagString" alt="">
      <span class="leng">{{ item.original_language }}</span>
      <span class="vote"> {{ item.vote_average }} </span>
    </div>
</template>

<style scoped lang="scss">
@use '../styles/partials/variables' as *;
.item{
    width: 200px;
    border: 1px solid black;
    background: bisque;
    display: flex;
    flex-direction: column;
}
.item-back{
  width: 200px;
  border: 1px solid black;
  background: red;
  display: flex;
  flex-direction: column;
  img{
    width: 50px;
    height: 50px;
  }
}

</style>
