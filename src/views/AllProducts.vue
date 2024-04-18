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


const storeProductList = useResults()

</script>

<style>

</style>