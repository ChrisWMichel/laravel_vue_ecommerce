<template>
    <Head title="Request Password" />
    <GuestLayout title="Request Password">
        <form class="space-y-6" action="#" method="POST">
            <div>
                <label
                    for="email"
                    class="block font-medium text-gray-900 text-sm/6"
                    >Email address</label
                >
                <div class="mt-2">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        autocomplete="email"
                        required
                        class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                </div>
            </div>
            <div class="text-sm">
                <router-link
                    :to="{ name: 'login' }"
                    class="font-semibold text-indigo-600 hover:text-indigo-500"
                    >Back to login</router-link
                >
            </div>

            <div>
                <button
                    type="submit"
                    class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Submit
                </button>
            </div>
        </form>
    </GuestLayout>
</template>

<script lang="ts" setup>
import GuestLayout from "@/Layouts/GuestLayout.vue";
import { Head } from "@inertiajs/vue3";
</script>

<style></style>
