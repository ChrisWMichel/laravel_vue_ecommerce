<template>
    <div class="grid grid-cols-[200px_1fr] min-h-screen bg-gray-200">
        <!-- Sidebar -->
        <sidebar />
        <!-- Sidebar -->
        <div class="flex-1">
            <!-- content -->
            <header-app />
            <main class="flex-1 p-6 bg-gray-100">
                <div class="p-4 bg-white rounded shadow">
                    <router-view />
                </div>
            </main>
            <!-- content -->
        </div>
    </div>
</template>

<script setup>
//class="flex flex-col justify-center flex-1 min-h-full px-6 py-12 lg:px-8"
import sidebar from "@/Components/sidebar.vue";
import headerApp from "@/Components/headerApp.vue";
</script>

<style scoped></style>
