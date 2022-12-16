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
            let newUrl = store.api;
            axios
            .get(newUrl)
            .then(res => {
                store.arrayItem = res.data.results
            })
        }
    },
    mounted(){
        this.callApi()
    }
}
</script>

<template>

<Card v-for="(card,index) in store.arrayItem" :key="index" :item="card" />

</template>

<style scoped lang="scss">

</style>
