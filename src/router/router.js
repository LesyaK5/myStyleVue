import MainPage from "@/views/MainPage";
import ProductsPage from "@/views/ProductsPage";
import ProductPage from "@/views/ProductPage";
import AboutPage from "@/views/AboutPage";
import CardsPageWithStore from "@/views/CardsPageWithStore";
import { createRouter, createWebHistory } from "vue-router";
import CardsPageCompositionAPI from "@/views/CardsPageCompositionAPI.vue";

const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/products',
        component: ProductsPage
    },
    {
        path: '/products/:id',
        component: ProductPage
    },
    {
        path: '/about',
        component: AboutPage
    },
    {
        path: '/store',
        component: CardsPageWithStore
    },
    {
        path: '/composition',
        component: CardsPageCompositionAPI
    }
]

const router = createRouter( {
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;