import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "./Pages/Dashboard.vue";
import login from "./Pages/auth/login.vue";
import requestPassword from "./Pages/auth/requestPassword.vue";
import restPassword from "./Pages/auth/resetPassword.vue";
import appLayout from "./Layouts/appLayout.vue";

const routes = [
    {
        path: "/app",
        component: appLayout,
        name: "appLayout",
        children: [
            {
                path: "dashboard",
                component: Dashboard,
                name: "app.dashboard",
            },
        ],
    },

    { path: "/login", component: login, name: "login" },
    {
        path: "/request-password",
        component: requestPassword,
        name: "requestPassword",
    },
    {
        path: "/rest-password/:token",
        component: restPassword,
        name: "restPassword",
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
