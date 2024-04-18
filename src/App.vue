<template>
  <!-- Navigation Bar Component -->
  <nav>
    <router-link to="/about">About</router-link> |
    <router-link to="/">Home</router-link> |
    <router-link to="/all">Products</router-link> |
    <router-link to="/cart">Cart</router-link>
  </nav>

  <!-- Search Bar Button Component -->
  <div class="SearchComponents">
    <div class="SearchButton">
      <button @click="onButtonClick">Search</button>
    </div>

    <!-- Search Bar Component -->
    <div class="SearchBar">
        <div class="SearchBarInput">
          <input type="text" v-model="inputText" placeholder="Search ..." @keyup.enter="onButtonClick"/>
        </div>
      <div class="SearchBarResults">
        <div v-if="storeProductList.search_text.trim()">
          <div class="item product" v-for="product in storeProductList.filter_products" :key="product.id">
            <a :href="product.path"><p>{{ product.name }}</p></a>
          </div>
          <div class="item error" v-if="storeProductList.search_text && !storeProductList.filtered_products.length">
            <p>No Results Found</p>
            <br><br><br><br><br>
          </div>
        </div>
        <div class="item empty" v-if="!storeProductList.search_text.trim()"></div>
      </div>
    </div>
  </div>
  <router-view/>
  <!-- Side Note: This is where I could put footers... -->
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

let isDropdownVisible = ref(false);

function toggleDropdown() {
  isDropdownVisible.value = !isDropdownVisible.value;
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

input {
  display: block;
  width: 350 px;
  margin-left: auto;
  padding: 10px 45px;
  background: white url("assets/search-icon.svg") no-repeat 15px center;
  background-size: 15px 15px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
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

.product {
  background-color: rgb(97, 62, 252);
  cursor: pointer;
  float: right;
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

.error {
  display: none;
}

.empty {
  display: none;
}

.SearchBarComponents {
  width: 100%;
  position: relative;
}

.SearchButton {
  width: 60%;
  height: 50px;
  float: right;
  
}

.SearchBar {
  position: relative;
  width: 40%;
  height: 50px;
  float: left;
  
}

.SearchBarResults {
  position: absolute;
  top: calc(100% - 0px); 
  left: 100%;
  transform: translateX(-50%);
  width: calc(100% + 100px);
  max-height: 300px;
  overflow-y: auto;
  z-index: 9999;
  background-color:teal ;
}
</style>