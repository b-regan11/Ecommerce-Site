import { useLocalStorage } from '@vueuse/core';
import { defineStore } from 'pinia';

export const useCart = defineStore("cart", {
    state: () => ({
        itemsInCart: useLocalStorage('cart', [])
    }),
    actions: {
        addToCart(item) {
            // Check if the item is already in the cart
            const existingItem = this.itemsInCart.find(cartItem => cartItem.id === item.id);

            if (existingItem) {
                // If the item already exists in the cart, increment its quantity
                existingItem.quantity++;
            } else {
                // If the item is not in the cart, add it with a quantity of 1
                this.itemsInCart.push({ ...item, quantity: 1 });
            }
        },
        removeFromCart(item) {
            // Find the index of the first occurrence of 'item'
            const index = this.itemsInCart.findIndex(cartItem => cartItem.id === item.id);
            
            // If the item is found
            if (index !== -1) {
                // If the quantity of the item is greater than 1, decrement the quantity
                if (this.itemsInCart[index].quantity > 1) {
                    this.itemsInCart[index].quantity--;
                } else {
                    // If the quantity is 1, remove the item from the cart
                    this.itemsInCart.splice(index, 1);
                }
            }
        },
        clearCart() {
            this.itemsInCart = []
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