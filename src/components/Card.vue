<script >
import { store } from '../store';
import axios from 'axios' ;
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
      // this.isFlipped = !this.isFlipped;
      if ( this.isFlipped == false){
        this.isFlipped = true
      }
    },
    flipLeave(){
      if ( this.isFlipped == true){
        this.isFlipped = false
      }
    },
    getActors(){
            let getActors = store.searchActors;
            axios
            .get(getActors)
            .then(res => {
                store.arrayActors = res.data.results

            })
        },
},
mounted(){
  this.getActors()
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
},

}
}
</script>
<template>
    <div class="item" :class="{ flipped: isFlipped }" @mouseover="flipCard" @mouseleave="flipLeave">
      <div class="item-front" >
        <img :src="store.imgEndPoint + item.poster_path" :alt="item.title" onerror="this.src='img/errore.jpg'">
      </div>
      <div class="item-back" >
        <div class="d-flex flex-column" >
          <span class="fw-bold">Title:</span>
          <span class="title" >{{ item.title }}</span>
        </div>
        <div class="d-flex flex-column" v-if="item.title !== item.original_title">
          <span class="fw-bold">Original Title:</span>
          <span class="title-original" >{{ item.original_title }}</span>
        </div>
        <span class="fw-bold">Leng:</span>
        <img :src="flagString" alt="">
        <span class="fw-bold">Vote average:</span>
        <div class="d-flex">
          <i class="fa-solid fa-star text-warning" v-for="item in decimalToInt" :key="item"></i>
          <i class="fa-regular fa-star" v-for="item in 5 - decimalToInt" :key="item"></i>
        </div>
        <span>ID:</span>
        <span>{{ item.id }}</span>
        <span v-for="(actor,index) in store.arrayActors" :key="index">
        {{ actor }}
        </span>
        


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
  border-radius: 18px 18px;
  backface-visibility: hidden; /* nasconde il lato posteriore della carta quando viene ruotata */
  transition: transform 1s; /* aggiunge una transizione alla rotazione della carta */
}
.item-front{
  img{
    width: 100%;
    height: 100%;
    border-radius: 18px 18px;
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
