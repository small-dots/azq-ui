/*
 * @Author: 『安忠琪』 anzhongqi@marknum.com
 * @Date: 2022-06-27 09:49:25
 * @Description: 
 */
import { createApp } from 'vue'
import App from './App.vue'
import Components from "azqUi"
const app = createApp(App)
app.use(Components)
app.mount('#app')
