<template>
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
                    <br>
                </li>
            </ul>
        </template>
        <template v-else>
            <br><hr><br>
            <p>Your shopping cart is empty.</p>
        </template>
    </div>
</template>

<script setup>
import { useCart } from '@/store/cart'
import { createPinia } from 'pinia'
import { createApp } from 'vue';
import App from '@/App.vue'

const app = createApp(App)

const storeCartList = useCart()
app.use(storeCartList)

const pinia = createPinia()
app.use(pinia)
</script>