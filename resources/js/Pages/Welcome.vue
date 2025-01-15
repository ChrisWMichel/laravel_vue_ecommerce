<template>
    <Head title="Welcome" />
    <div>
        {{ createStore.count }}
    </div>
</template>

<script setup>
import { Head, Link } from "@inertiajs/vue3";
import { useCreateStore } from "@/store/useCreateStore.js";

const createStore = useCreateStore();
</script>
