<script >
import { store } from '../store';
export default{
props :["item"],
data(){
  return{
    store,
    cardVisible : true,
    
  }
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
}

</style>
