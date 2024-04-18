<template>
    <div class="pedestalfan">
        <br>
        <h3>{{ storeProductList.specificProduct.fullName }}</h3>
        <h1>{{ storeProductList.specificProduct.name }}</h1>
        <a :href="storeProductList.specificProduct.web_link" target="_blank">
            <img :src="require(`@/assets${storeProductList.specificProduct.imagePath}`)" :alt="storeProductList.specificProduct.imageAlt" style="width: 300px">
        </a>
        <p>{{ storeProductList.specificProduct.short_description }}</p>
        <p>{{ storeProductList.specificProduct.full_description }}</p>
        <h4>$ {{ storeProductList.specificProduct.price }}</h4>
        <a :href="storeProductList.specificProduct.web_link" target="_blank">Click For More</a>
        
    </div>
  </template>

<script setup>
import { useResults } from '@/store/results'

const storeProductList = useResults()

storeProductList.changeJobId(6)
</script>