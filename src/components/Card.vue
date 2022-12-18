<script >
import { store } from '../store';
export default{
props :["item"],
data(){
  return{
    store,
    cardVisible : true,
    isFlipped: false
    
  }
},
methods:{
  flipCard() {
      this.isFlipped = !this.isFlipped;
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
<!-- @mouseover="cardVisible = false" @mouseleave="cardVisible = true" -->
<template>
    <div class="item" v-bind:class="{ flipped: isFlipped }" v-on:click="flipCard">
      <div class="item-front" >
        <img :src="store.imgEndPoint + item.poster_path" :alt="item.title">
      </div>
      <div class="item-back" >
        <span class="title">{{ item.title }}</span>
        <span class="title-original">{{ item.original_title }}</span>
        <img :src="flagString" alt="">
        <span class="leng">{{ item.original_language }}</span>
        <span class="vote"> {{ item.vote_average }} </span>
      </div>
    </div>

</template>

<style scoped lang="scss">
@use '../styles/partials/variables' as *;
.item {
  perspective: 1000px;
  position: relative;
  width: 200px;
  height: 300px;
}

.item-front, .item-back {
  position: absolute;

  backface-visibility: hidden; /* nasconde il lato posteriore della carta quando viene ruotata */
  transition: transform 1s; /* aggiunge una transizione alla rotazione della carta */
}
.item-front{
  img{
    width: 100%;
    height: 100%;
  }
}
.item-back {
  transform: rotateY(180deg); /* ruota il lato posteriore della carta di 180 gradi */
  background: yellow;
  width: 100%;
  height: 100%;
  img{
    width: 50px;
    height: 50px;
  }
}


.item.flipped .item-front {
  transform: rotateY(180deg); /* ruota il lato frontale della carta di 180 gradi quando la classe "flipped" viene aggiunta alla carta */
}

.item.flipped .item-back {
  transform: rotateY(0); /* ruota il lato posteriore della carta di 0 gradi quando la classe "flipped" viene aggiunta alla carta */
}












// .item-front{
//     width: 100%;
//     border: 1px solid black;
//     background: bisque;
//     display: flex;
//     flex-direction: column;
//     position: absolute;
//     z-index: 2;
//     backface-visibility: hidden;
// }
// .item-back{
//   width: 100%;
//   height: 100%;
//   border: 1px solid black;
//   background: red;
//   display: flex;
//   flex-direction: column;
//   position: absolute;
//   z-index: 1;
//   backface-visibility: hidden;
//   img{
//     width: 50px;
//     height: 50px;
//   }
// }


// }
// .item:hover .item-front {
//     transform: rotateY(180deg);
//     transition: 5s;
//   }
//   .item:hover .item-back {
//     transform: rotateY(360deg);
//     // transition: 5s;
//   }
</style>
