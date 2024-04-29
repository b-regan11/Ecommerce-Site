<template>
  <div class="app-container">
    <!-- Navigation Bar Component -->
    <nav class="nav-bar">
      <router-link to="/about">About</router-link> |
      <router-link to="/">Home</router-link> |
      <router-link to="/all">Products</router-link> |
      <router-link to="/cart">Cart</router-link>
    </nav>

    <!-- Search Bar Component -->
    <div class="search-container">
      <button class="search-button" @click="onButtonClick">Search</button>
      <div class="search-bar">
        <input type="text" v-model="inputText" placeholder="Search ..." @keyup.enter="onButtonClick"/>
        <div class="search-results" v-if="storeProductList.search_text.trim()">
          <div class="item product" v-for="product in storeProductList.filter_products" :key="product.id">
            <a :href="product.path"><p>{{ product.name }}</p></a>
          </div>
          <div class="item error" v-if="storeProductList.search_text && !storeProductList.filtered_products.length">
            <p>No Results Found</p>
          </div>
        </div>
        <div class="item empty" v-else></div>
      </div>
    </div>

    <router-view/>

    <!-- Side Note: This is where I could put footers... -->
  </div>
</template>

<!-- Search Bar Component -->
<script setup>
import { useResults } from '@/store/results'
import { useCart } from '@/store/cart'
import { ref } from 'vue'

// Search Bar Button Component
import router from "@/router";

const storeProductList = useResults()
const storeCartList = useCart()

const inputText = ref('');

function onButtonClick() {
  storeProductList.search_text = inputText.value;
  router.push('/results');
}

</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}

body {
  padding: 20px;
  min-height: 100vh;
  background-color: rgb(234, 242, 255);
}

.item {
  width: 350px;
  margin: 0 auto 10px auto;
  padding: 10px 20px;
  color: white;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
}

.item a {
  color: hotpink;
  text-decoration: none;
}

.item a:hover {
  text-decoration: none;
  font-weight: bolder;
  color: navy;
}

a {
  text-decoration: none;
}

a:hover {
  background-color: rgb(248, 216, 245);
  border-radius: 25px;
  color: orange;
  text-decoration: none;
}

.empty {
  display: none;
}

.nav-bar {
  display: flex;
  justify-content: right; 
  align-items: right;
  gap: 10px; 
  margin: 0; 
  width: 50%;
  float: left;
  padding-right: 20px;
}

.search-container {
  display: grid;
  grid-template-columns: auto 1fr; 
  gap: 10px; 
  margin: 0; 
  width: 50%;
  float: right;
}

.search-bar {
  width: max-content;
}

/* Media query for screens smaller than 768px */
@media screen and (max-width: 620px) {
  .nav-bar {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  .search-container {
    padding-top: 10px;
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
  }
}
</style>