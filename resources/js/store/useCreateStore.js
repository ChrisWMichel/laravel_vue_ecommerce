import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useCreateStore = defineStore("createStore", () => {
    const user = ref({
        token: 1234,
        data: {},
    });
    const count = ref(1234);
    const name = ref("Eduardo");
    const doubleCount = computed(() => count.value * 2);
    function increment() {
        count.value++;
    }

    return { count, name, doubleCount, increment, user };
});
