import { createApp, h } from 'vue'

const App = () => h("h1", {innerText: "About page!"})
createApp(App).mount('#app')
