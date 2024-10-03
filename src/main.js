import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import components from '@/components/UI'    // импортируем массив наших собственных компонентов (собственной библиотеки)
import Vintersection from './directives/Vintersection'
import directives from './directives'

// createApp(App).use(store).use(router).mount('#app')     // создали экземпляр приложения и монтировали его в div c id="app"
const app = createApp(App)

components.forEach(component => {
    // глобально регистрируем каждый наш собственный компонент
    app.component(component.name, component) // первый аргумент - название компонента текущей итерации, второй - сам компонент
})

// глобавльно регистрируем директивы
directives.forEach( directive => {
    app.directive(directive.name, directive);
})
// app.directive('intersection', Vintersection)

app
    .use(router)
    .use(store)
    .mount('#app')

