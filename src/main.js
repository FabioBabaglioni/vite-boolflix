import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// fontawasome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'


library.add(fasStar, farStar)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
