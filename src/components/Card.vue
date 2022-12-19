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
  decimalToInt() {
  return Math.round(this.item.vote_average / 2);
}

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
        <span class="fw-bold">Title:</span>
        <span class="title">{{ item.title }}</span>
        <span class="fw-bold">Original Title:</span>
        <span class="title-original">{{ item.original_title }}</span>
        <span class="fw-bold">Leng:</span>
        <img :src="flagString" alt="">
        <span class="fw-bold">Vote average:</span>
        <span class="vote"> {{ decimalToInt }} </span>
        <div>
          <font-awesome-icon icon="fa-regular fa-star" />
          <font-awesome-icon icon="fa-regular fa-star" />
          <font-awesome-icon icon="fa-regular fa-star" />
          <font-awesome-icon icon="fa-regular fa-star" />
          <font-awesome-icon icon="fa-regular fa-star" />
        </div>

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
  color: white;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform: rotateY(180deg); /* ruota il lato posteriore della carta di 180 gradi */
  background-image: url('../../public/img/info.jpg');
  background-size: contain;
  text-align: center;
  

  img{
    width: 50px;
    height: 50px;
  }
  svg{
    width: 30px;
    height: 30px;
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
