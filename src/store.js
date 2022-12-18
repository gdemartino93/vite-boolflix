import { reactive } from "vue";
export const store = reactive({

arrayItem : [],
api: "https://api.themoviedb.org/3/movie/popular/?api_key=b1ef94c3c1268cf158fbe5a28e28a61c",
imgEndPoint : "https://image.tmdb.org/t/p/w500/",
searchApi : "https://api.themoviedb.org/3/search/movie/?api_key=b1ef94c3c1268cf158fbe5a28e28a61c&query=",
searchName : "",
error: "asdsadasd",
noFlag : "img/ww.png",
flags: [
    {
        img: "img/it.png",
        lang: "it"
    },
    {
        img: "img/fr.png",
        lang: "fr"
    },
    {
        img: "img/en.png",
        lang: "en"
    },
    {
        img: "img/ww.png",
        lang: "nd"
    }
]

    
})