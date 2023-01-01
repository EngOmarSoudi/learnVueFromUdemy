import { createApp } from 'vue'
import App from './App.vue'
// import Greeting from '@/components/Greeting.vue'   //this way is not recommended 
// import './assets/main.css'

let vm = createApp( App )
// vm.component("Greeting",Greeting) ^ not recommended to be Glopley
vm.mount( '#app' )  
