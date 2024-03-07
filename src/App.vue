<template>
  <!-- Navigation Bar Component -->
  <nav>
    <router-link to="/about">About</router-link> |
    <router-link to="/">Home</router-link> |
    <router-link to="/all">Products</router-link> |
  </nav>

  <!-- Search Bar Button Component -->
  <button @click="onButtonClick">Search</button>

  <!-- Search Bar Component -->
  <input type="text" v-model="input" placeholder="Search ..." @keyup.enter="onButtonClick"/>
  <div class="item product" v-for="product in filteredList()" :key="product">
    <a :href="product.path"><p>{{ product.name }}</p></a>
  </div>
  <div class="item error" v-if="input&&!filteredList().length">
    <p>No Results Found</p>
  </div>
  <router-view/>
</template>

<!-- Search Bar Component -->
<script setup>
import { ref } from "vue";
let input = ref("");
const products = [
  { name: "Amazon Fire TV", path: "/firetv"},
  { name: "Gatorade Bottle", path: "/gatoradebottle"},
  { name: "Pedestal Fan", path: "pedestalfan"},
  { name: "Playstation 5", path: "/PS5"}
]
function filteredList() {
  const slicedProducts = products.filter((product) =>
    product.name.toLowerCase().includes(input.value.toLowerCase())
    );
  return slicedProducts.slice(0, 3);
}

function unfilteredList() {
  const unslicedProducts = products.filter((product) =>
    product.name.toLowerCase().includes(input.value.toLowerCase())
    );
  return unslicedProducts;
}


// Search Bar Button Component
import router from "@/router";

function onButtonClick() {
// set item / route to results page
sessionStorage.setItem("products", JSON.stringify(products)); // products
sessionStorage.setItem("searchInput", JSON.stringify(input.value)); // search input
  router.push({
    name: "results", 
  });
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
  margin: 20px auto;
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

.product {
  background-color: rgb(97, 62, 252);
  cursor: pointer;
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

.error {
  background-color: tomato;
}
</style>
