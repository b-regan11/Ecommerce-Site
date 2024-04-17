import { defineStore } from 'pinia';

export const useCart = defineStore({
    id: 'cart',
    state: () => ({
        itemsInCart: []
    }),
    persist: {
        storage: localStorage,
        paths: ['cart'],
    },
    actions: {
        addToCart(item) {
            this.itemsInCart.push(item)
        }
    },
    getters: {
        all_items: (state) => {
            if (state.itemsInCart.length) {
                return state.itemsInCart
            }
            return
        }
    }
})