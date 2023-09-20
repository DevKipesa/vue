import Home from './components/Home.vue';
import SignUp from './components/SignUp.vue';
import { createRouter, createWebhHistory } from 'vue-router';

const routes = [
    {
        name: 'Home',
        component: Home,
        path: '/'
    },
{
    name: 'SignUp',
        component: SignUp,
            path: '/sign-up'
}
];

const router= createRouter({
    history: createWebhHistory(),
    routes,
});
export default router;