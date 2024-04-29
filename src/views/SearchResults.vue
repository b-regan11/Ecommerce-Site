<template>
  <div class="results">
    <h1>ShopZone.com</h1>
    <br>
    <h5>{{ storeProductList.filtered_products.length }} results for "{{ storeProductList.search_text }}"</h5>
    <h2>Search Results</h2>
    <br><hr><br>  
    <ul class="product-list" style="list-style-type: none;">
        <li v-for="product in storeProductList.filtered_products" :key="product.id">
          <div class="product-item">
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
          </div>
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
.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* Set the grid to automatically fill columns with a minimum width of 250px */
  gap: 20px; /* Gap between grid items */
  padding: 0;
  margin: 0;
}

.product-item {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
}

.product-item img {
  max-width: 100%;
}
</style>