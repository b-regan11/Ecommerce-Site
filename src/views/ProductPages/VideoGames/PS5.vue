<template>
    <div class="ps5">
        <br>
        <h3>{{ storeProductList.specificProduct.fullName }}</h3>
        <h1>{{ storeProductList.specificProduct.name }}</h1>
        <a :href="storeProductList.specificProduct.web_link" target="_blank">
            <img :src="require(`@/assets${storeProductList.specificProduct.imagePath}`)" :alt="storeProductList.specificProduct.imageAlt" style="width: 300px">
        </a>
        <p>{{ storeProductList.specificProduct.short_description }}</p>
        <p>{{ storeProductList.specificProduct.full_description }}</p>
        <h4>
            $ {{ storeProductList.specificProduct.price }}
        </h4>
        <button @click="addToCart">
            <h4>Add to Cart</h4>
        </button>
        <a :href="storeProductList.specificProduct.web_link" target="_blank">
            <h4>Click For More</h4>
        </a>
        
    </div>
  </template>

<script setup>
import { useCart } from '@/store/cart'
import { useResults } from '@/store/results'
import { createPinia } from 'pinia'
import { createApp, provide } from 'vue'
import App from '@/App.vue'

const app = createApp(App)

const storeProductList = useResults()
app.use(storeProductList)

const storeCartList = useCart()
app.use(storeCartList)

const pinia = createPinia()
app.use(pinia)

storeProductList.changeJobId(22)

function addToCart() {
    // console.log('Product added to cart!');
    storeCartList.addToCart(storeProductList.specificProduct)
}

</script>