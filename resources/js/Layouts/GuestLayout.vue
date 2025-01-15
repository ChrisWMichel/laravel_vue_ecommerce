<template>
    <div
        class="flex flex-col justify-center flex-1 min-h-full px-6 py-12 lg:px-8"
    >
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2
                class="mt-10 font-bold tracking-tight text-center text-gray-900 text-2xl/9"
            >
                {{ title }}
            </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
defineProps({
    title: String,
});

const emit = defineEmits(["submit"]);
</script>
