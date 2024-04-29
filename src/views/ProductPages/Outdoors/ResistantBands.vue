<template>
    <div class="resistantbands">
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
        <button @click="addToCart(storeProductList.specificProduct)">
            <h4>Add to Cart</h4>
        </button>
        <br>
        <a :href="storeProductList.specificProduct.web_link" target="_blank">
            <h4>Click For More</h4>
        </a>
        
    </div>
  </template>

<script setup>
import { useCart } from '@/store/cart'
import { useResults } from '@/store/results'

const storeProductList = useResults()
const storeCartList = useCart()

storeProductList.changeJobId(19)

function addToCart(product) {
    storeCartList.addToCart(product)
}

</script>