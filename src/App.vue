<template>
  <!-- Navigation Bar Component -->
  <nav>
    <router-link to="/about">About</router-link> |
    <router-link to="/">Home</router-link> |
    <router-link to="/all">Products</router-link> |
  </nav>

  <!-- Search Bar Button Component -->
  <div class="SearchComponents">
    <div class="SearchButton">
      <button @click="onButtonClick">Search</button>
    </div>

    <!-- Search Bar Component -->
    <div class="SearchBar">
        <div class="SearchBarInput">
          <input type="text" v-model="input" placeholder="Search ..." @keyup.enter="onButtonClick"/>
        </div>
      <div class="SearchBarResults">
        <div v-if="input.trim()">
          <div class="item product" v-for="product in filteredList()" :key="product">
            <a :href="product.path"><p>{{ product.name }}</p></a>
          </div>
          <div class="item error" v-if="input&&!filteredList().length">
            <p>No Results Found</p>
            <!--<br><br><br><br><br>-->
          </div>
        </div>
        <div class="item empty" v-if="!input.trim()"></div>
      </div>
    </div>
  </div>
  

  
  <router-view/>
</template>

<!-- Search Bar Component -->
<script setup>
import { ref } from "vue";
let input = ref("");
const products = [
  { 
    name: "Amazon Fire TV", 
    fullName: "Amazon Fire TV 50 inch 4-Series 4K UHD smart TV, stream live TV without cable",
    brand: "Amazon",
    category: "electronics",
    path: "/firetv", 
    description: "Bring movies and shows to life with support for vivid 4K Ultra HD, HDR 10, HLG, and Dolby Digital Plus.", 
    imagePath: "/ProductImages/Electronics/FireTV.jpg", 
    imageAlt: "Amazon Fire TV"
  },
  { 
    name: "Gatorade Bottle", 
    fullName: "Gatorade Gx, Marble Blue, 30 Oz",
    brand: "Gatorade",
    category: "outdoors",
    path: "/gatoradebottle", 
    description: "Fuel your game with Gatorades new customizable hydration platform.", 
    imagePath: "/ProductImages/Outdoors/GatoradeBottle.jpg", 
    imageAlt: "Gatorade Bottle"
  },
  { 
    name: "Pedestal Fan", 
    fullName: "Amazon Basics Oscillating Dual Blade Standing Pedestal Fan with Remote, 16-Inch, Black",
    brand: "Amazon",
    category: "office",
    path: "pedestalfan", 
    description: "Standing pedestal dual-blade fan with wide oscillation for circulating air in medium to large rooms.", 
    imagePath: "/ProductImages/Office/PedestalFan.jpg", 
    imageAlt: "Pedestal Fan"
  },
  { 
    name: "Playstation 5", 
    fullName: "PlayStation 5 Digital Edition Slim",
    brand: "Sony",
    category: "videogames",
    path: "/PS5", 
    description: "Bundle includes Marvels Spider-Man 2 full game digital voucher.", 
    imagePath: "/ProductImages/VideoGames/PS5.jpg", 
    imageAlt: "Playstation 5 Bundle"
  }
]
function filteredList() {
  const slicedProducts = products.filter((product) =>
  product.name.toLowerCase().includes(input.value.toLowerCase()) ||
    product.category.toLowerCase().includes(input.value.toLowerCase()) ||
    product.fullName.toLowerCase().includes(input.value.toLowerCase()) ||
    product.brand.toLowerCase().includes(input.value.toLowerCase())
  );
  return slicedProducts.slice(0, 3);
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