<template>
    <div class="cart">
        <h2>Shopping Cart</h2>
        <button @click="addToCart">Add to Cart</button>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const items = ref([]);

        function addToCart(item) {
            items.value.push(item);
            console.log(item)
        }

        function removeFromCart(index) {
            if (index >= 0 && index < items.value.length) {
                items.value.splice(index, 1);
            } else {
                console.error('Invalid index or item not found.');
            }
        }

        function clearCart() {
            items.value = [];
        }

        return {
            items,
            addToCart,
            removeFromCart,
            clearCart
        };
    }
};
</script>