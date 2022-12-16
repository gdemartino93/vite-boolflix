<script >
import { store } from '../store';
export default{
props :["item"],
data(){
  return{
    store
  }
}
}
</script>

<template>
    <div class="item">
      <img :src="store.imgEndPoint + item.poster_path" alt="">
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
    img{
     
    }
}

</style>
