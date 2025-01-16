<template>
    <Head title="Not Found" />

    <main
        class="grid min-h-full px-6 py-24 bg-white place-items-center sm:py-32 lg:px-8"
    >
        <div class="text-center">
            <p class="text-base font-semibold text-indigo-600">404</p>
            <div
                class="mt-4 text-5xl font-semibold tracking-tight text-gray-900 text-balance sm:text-7xl"
            >
                Page not found
            </div>
            <p
                class="mt-6 text-lg font-medium text-gray-500 text-pretty sm:text-xl/8"
            >
                Sorry, we couldn’t find the page you’re looking for.
            </p>
            <div class="flex items-center justify-center mt-10 gap-x-6">
                <router-link
                    :to="{ name: 'app.dashboard' }"
                    class="p-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >Go back home</router-link
                >
            </div>
        </div>
    </main>
</template>

<script setup>
import { Head } from "@inertiajs/vue3";
</script>
