import { useLocalStorage } from '@vueuse/core';
import { defineStore } from 'pinia';

export const useCart = defineStore("cart", {
    state: () => ({
        itemsInCart: useLocalStorage('cart'),
    }),
    actions: {
        addToCart(item) {
            this.itemsInCart = [item]
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