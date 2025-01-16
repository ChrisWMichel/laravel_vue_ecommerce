<template>
    <div class="flex min-h-screen bg-gray-200">
        <!-- Sidebar -->
        <transition name="slide">
            <sidebar v-if="sidebarOpen" />
        </transition>
        <!-- Sidebar -->
        <div class="flex-1">
            <!-- content -->
            <navBar @toggle-sidebar="toggleSidebar" />
            <main class="flex-1 p-6 bg-gray-100">
                <div class="flex min-h-screen p-4 bg-gray-200">
                    <router-view />
                </div>
            </main>
            <!-- content -->
        </div>
    </div>
</template>

<script setup>
import sidebar from "@/Components/sidebar.vue";
import navBar from "@/Components/NavBar.vue";
import { ref, onMounted, onUnmounted } from "vue";

let sidebarOpen = ref(true);

const toggleSidebar = () => {
    sidebarOpen.value = !sidebarOpen.value;
};

onMounted(() => {
    window.addEventListener("resize", resizeHandler);
});

onUnmounted(() => {
    window.removeEventListener("resize", resizeHandler);
});

const resizeHandler = () => {
    if (window.outerWidth <= 768) {
        sidebarOpen.value = false;
    } else {
        sidebarOpen.value = true;
    }
};
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
    transition: transform 0.3s ease;
}
.slide-enter,
.slide-leave-to {
    transform: translateX(-100%);
}
</style>
