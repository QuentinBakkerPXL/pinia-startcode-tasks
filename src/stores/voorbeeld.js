import { defineStore } from 'pinia';
import {useExampleStore} from "@/stores/voorbeeld";

export const useExampleStore = defineStore('example', {
    state: () => ({
        exampleList: [],
    }),
    actions: {

    },
})