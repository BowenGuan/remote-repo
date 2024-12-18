import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from "@/views/HomeView.vue";
import TableView from "@/views/TableView.vue";
const routes = [
    { path: '/', component: HomeView },
    { path: '/tableview', component: TableView },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router