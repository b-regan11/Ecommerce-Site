<template>
  <div class="results">
    <h1>ShopZone.com</h1>
    <br>
    <h5>{{ storeProductList.filtered_products.length }} results for "{{ storeProductList.search_text }}"</h5>
    <!-- <h5>{{ filteredProducts.length }} results for "{{ filterKeyword }}"</h5> -->
    <h2>Search Results</h2>
    <ul style="list-style-type: none;">
        <li v-for="product in storeProductList.filtered_products" :key="product.id">
            <br><hr><br>
            <h4>{{ product.fullName }}</h4>
            <h3>{{ product.name }}</h3>
            <a :href="product.path">
                <img :src="require(`@/assets${product.imagePath}`)" :alt="product.imageAlt" style="width: 200px">
            </a>
            <p>{{ product.short_description }}</p>
            <p>$ {{ product.price }}</p>
            <button @click="addToCart(product.id)">
                <h4>Add to Cart</h4>
              </button>
            <br>
        </li>
      </ul>
  </div>
</template>

<script setup>
import { useCart } from '@/store/cart'
import { useResults } from '@/store/results'

const storeCartList = useCart()
const storeProductList = useResults()

function addToCart(num) {
  storeProductList.changeJobId(num)
  storeCartList.addToCart(storeProductList.specificProduct) 
}

</script>

<style>

</style>