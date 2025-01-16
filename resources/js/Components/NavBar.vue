<template>
    <header
        class="flex items-center justify-between px-5 py-4 bg-white shadow h-14"
    >
        <button
            @click="emit('toggleSidebar')"
            class="flex items-center justify-center p-4 text-gray-700 transition-colors rounded focus:outline-none hover:bg-black/10"
        >
            <Bars3Icon class="w-6 h-6" />
        </button>
        <div class="flex items-center justify-between">
            <Menu as="div" class="relative inline-block text-left">
                <div>
                    <MenuButton class="flex items-center text-sm text-gray-700">
                        <img
                            src="https://randomuser.me/api/portraits/men/76.jpg"
                            class="w-10 h-10 mr-2 rounded-full"
                        />
                        <small>John Smith</small>
                        <ChevronDownIcon
                            class="w-5 h-5 text-indigo-200 hover:text-indigo-100"
                            aria-hidden="true"
                        />
                    </MenuButton>
                </div>

                <transition
                    enter-active-class="transition duration-100 ease-out"
                    enter-from-class="transform scale-95 opacity-0"
                    enter-to-class="transform scale-100 opacity-100"
                    leave-active-class="transition duration-75 ease-in"
                    leave-from-class="transform scale-100 opacity-100"
                    leave-to-class="transform scale-95 opacity-0"
                >
                    <MenuItems
                        class="absolute right-0 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg w-36 ring-1 ring-black/5 focus:outline-none"
                    >
                        <div class="px-1 py-1">
                            <MenuItem v-slot="{ active }">
                                <button
                                    :class="[
                                        active
                                            ? 'bg-indigo-600 text-white'
                                            : 'text-gray-900',
                                        'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                    ]"
                                >
                                    <UserIcon
                                        :active="active"
                                        class="w-5 h-5 mr-2 text-indigo-400"
                                        aria-hidden="true"
                                    />
                                    Profile
                                </button>
                            </MenuItem>
                            <MenuItem v-slot="{ active }">
                                <button
                                    :class="[
                                        active
                                            ? 'bg-indigo-600 text-white'
                                            : 'text-gray-900',
                                        'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                    ]"
                                >
                                    <ArrowDownLeftIcon
                                        :active="active"
                                        class="w-5 h-5 mr-2 text-indigo-400"
                                        aria-hidden="true"
                                    />
                                    Logout
                                </button>
                            </MenuItem>
                        </div>
                    </MenuItems>
                </transition>
            </Menu>
        </div>
    </header>
</template>
<script setup>
import {
    Bars3Icon,
    ArrowDownLeftIcon,
    UserIcon,
} from "@heroicons/vue/24/outline";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";

const emit = defineEmits(["toggleSidebar"]);
</script>

<style></style>
