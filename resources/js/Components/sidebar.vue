<template>
    <div class="px-2 py-4 text-gray-200 bg-indigo-700 rounded-l-2xl">
        <router-link
            :to="{ name: 'app.dashboard' }"
            class="flex items-center p-4 transition-colors rounded hover:bg-black/30"
        >
            <span class="mr-2 text-gray-300"><HomeIcon class="w-5" /></span>
            <span>Dashboard</span>
        </router-link>
        <router-link
            :to="{ name: 'app.products' }"
            class="flex items-center p-4 transition-colors rounded hover:bg-black/30"
        >
            <span class="mr-2 text-gray-300"
                ><ShoppingCartIcon class="w-5"
            /></span>
            <span>Products</span>
        </router-link>
        <router-link
            :to="{ name: 'app.dashboard' }"
            class="flex items-center p-4 transition-colors rounded hover:bg-black/30"
        >
            <span class="mr-2 text-gray-300"><UserIcon class="w-5" /></span>
            <span>Users</span>
        </router-link>
        <router-link
            :to="{ name: 'app.dashboard' }"
            class="flex items-center p-4 transition-colors rounded hover:bg-black/30"
        >
            <span class="mr-2 text-gray-300"><ChartBarIcon class="w-5" /></span>
            <span>Reports</span>
        </router-link>
    </div>
</template>

<script lang="ts" setup>
import {
    HomeIcon,
    UserIcon,
    ChartBarIcon,
    ShoppingCartIcon,
} from "@heroicons/vue/24/outline";
</script>

<style></style>
