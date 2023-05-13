import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

//app Creation
const app = createApp(App);
// pinia creation
const pinia = createPinia();

app.use(pinia);
app.use(router);

console.log(pinia);

// App Mount @index.html
app.mount("#app");
