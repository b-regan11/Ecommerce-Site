<template>
    <div class="results">
      <h1>ShopZone.com</h1>
      <br>
      <h2>Search Results</h2>

      <div v-if="products && products.length > 0">
        <h3>Found Products:</h3>
        <div>
          <div v-for="(product, index) in products" :key="index">
            <h4>{{ product.name }}</h4>
          </div>
        </div>
      </div>

      <div v-else>
        <p>No products found.</p>
      </div>


    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        products: [],
        filterKeyword: "", // Adds value to property to stroe the filter keyword
      };
    },
    computed: {
      filteredProducts() {
        // Filter products based on the filter keyword
        return this.products.filter((product) =>
          product.name.toLowerCase().includes(this.filterKeyword.toLowerCase())
        );
      },
    },
    mounted() {
        // get item
        const productsString = sessionStorage.getItem("products"); // string
        this.products = JSON.parse(productsString) || [];

    },
  };


  
  </script>
  
  <style>
  
  </style>
  