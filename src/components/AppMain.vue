<script>
import { store } from '../store.js';
import Card from './Card.vue';
import axios from 'axios' ;

export default{
    components : { Card },
    data(){
        return{
            store
        }
    },
    methods:{

        callApi(){
            let searchFilm = store.api;
            axios
            .get(searchFilm)
            .then(res => {
                store.arrayItem = res.data.results
            })
        },

    },
    mounted(){
        this.callApi()
       
    }
}
</script>

<template>
<h3 class="fw-bold text-white">Popular:</h3>
<div class="d-flex flex-wrap gap-2 ">
    <Card v-for="(card,index) in store.arrayItem" :key="index" :item="card" />
</div>




</template>

<style scoped lang="scss">

</style>
