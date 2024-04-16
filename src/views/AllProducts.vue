<template>
  <div class="allproducts">
    <h1>ShopZone.com</h1>
    <br>
    <h2>All Products</h2>
      <ul style="list-style-type: none;">
          <li v-for="product in storeProductList.all_products_info" :key="product.id">
              <br><hr><br>  
              <h4>{{ product.fullName }}</h4>
              <h3>{{ product.name }}</h3>
              <a :href="product.path">
                  <img :src="require(`@/assets${product.imagePath}`)" :alt="product.imageAlt" style="width: 200px">
              </a>
              <p>{{ product.short_description }}</p>
              <p>$ {{ product.price }}</p>
              <br>
          </li>
      </ul>
  </div>
</template>

<script setup>
import { useResults } from '@/store/results'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from '@/App.vue'

const app = createApp(App)

const storeProductList = useResults()
app.use(storeProductList)

const pinia = createPinia()
app.use(pinia)
</script>

<style>

</style>