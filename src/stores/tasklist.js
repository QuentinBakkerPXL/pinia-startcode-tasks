import {defineStore} from 'pinia';

export const useExampleStore = defineStore('example', {
    state: () => ({
        exampleList: [],
        id: 0
    }),

    actions: {

        methode(nieuweTaak){
            nieuweTaak.id = thsis.id;
            this.id = this.id +1
            this.exampleList.push(nieuweTaak);
        }
    },
})