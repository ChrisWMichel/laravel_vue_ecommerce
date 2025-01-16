import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "./Pages/Dashboard.vue";
import login from "./Pages/auth/login.vue";
import requestPassword from "./Pages/auth/requestPassword.vue";
import restPassword from "./Pages/auth/resetPassword.vue";
import appLayout from "./Layouts/appLayout.vue";
import Products from "./Pages/Products.vue";
import { useCreateStore } from "./store/useCreateStore";
import NotFound from "./Pages/NotFound.vue";

const routes = [
    {
        path: "/app",
        component: appLayout,
        name: "appLayout",
        meta: { requiresAuth: true },
        children: [
            {
                path: "dashboard",
                component: Dashboard,
                name: "app.dashboard",
            },
            {
                path: "products",
                component: Products,
                name: "app.products",
            },
        ],
    },

    {
        path: "/login",
        component: login,
        name: "login",
        meta: { requiresGuest: true },
    },
    {
        path: "/request-password",
        component: requestPassword,
        name: "requestPassword",
        meta: { requiresGuest: true },
    },
    {
        path: "/rest-password/:token",
        component: restPassword,
        name: "restPassword",
        meta: { requiresGuest: true },
    },
    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: NotFound,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const store = useCreateStore();
    const user = store.user;

    if (to.meta.requiresAuth && !user.token) {
        next({ name: "login" });
        return;
    } else if (to.meta.requiresGuest && user.token) {
        next({ name: "app.dashboard" });
        return;
    }
    next();
});

export default router;
