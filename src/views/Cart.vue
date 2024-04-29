<template>
    <ErrorBoundary>
        <div>
            <h1>ShopZone.com</h1>
            <br>
            <h2>Shopping Cart</h2>
            <template v-if="storeCartList.itemsInCart.length > 0">
                <ul style="list-style-type: none;">
                    <li v-for="item in storeCartList.all_items" :key="item.id">
                        <br><hr><br>
                        <h4>{{ item.fullName }}</h4>
                        <h3>{{ item.name }}</h3>
                        <a :href="item.path">
                            <img :src="require(`@/assets${item.imagePath}`)" :alt="item.imageAlt" style="width: 200px">
                        </a>
                        <p>{{ item.short_description }}</p>
                        <p>$ {{ item.price }}</p>
                        <h4>Quantity: {{ item.quantity }}</h4>
                        <button @click="removeFromCart(item.id)">
                            <h4>Remove From Cart</h4>
                        </button> 
                        <br>
                    </li>
                </ul>
                <button @click="clearCart()">
                    <h4>Clear Cart</h4>
                </button>
            </template>
            <template v-else>
                <br><hr><br>
                <p>Your shopping cart is empty.</p>
            </template>
        </div>
    </ErrorBoundary>
</template>

<script setup>
import { useCart } from '@/store/cart'
import { useResults } from '@/store/results'
import ErrorBoundary from '@/views/ErrorBoundary.vue'

const storeCartList = useCart()
const storeProductList = useResults()

function removeFromCart(num) {
    storeProductList.changeJobId(num)
    storeCartList.removeFromCart(storeProductList.specificProduct)
}

function clearCart() {
    storeCartList.clearCart()
}
</script>