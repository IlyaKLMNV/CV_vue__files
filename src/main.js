import { createApp } from 'vue'
//element-plus library
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//default
import App from './App.vue'
import router from './router'
import './assets/main.css'

const app = createApp(App)


// for element-plus library
app.use(ElementPlus)


//default
app.use(router)
app.mount('#app')
