import { createApp } from 'vue'
import App from './App.vue'

import "bootstrap/dist/css/bootstrap.css"
import axios, {isCancel, AxiosError} from 'axios';

import 'animate.css';
import 'font-awesome/css/font-awesome.css'

// /* import the fontawesome core */
// import { library } from '@fortawesome/fontawesome-svg-core'

// /* import font awesome icon component */
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// /* import specific icons */
// import { faStar } from '@fortawesome/free-solid-svg-icons'

// /* add icons to the library */
// library.add(faStar)

createApp(App).mount('#app')
