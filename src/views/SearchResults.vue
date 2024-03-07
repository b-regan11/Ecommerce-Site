<template>
  <div class="results">
    <h1>ShopZone.com</h1>
    <br>
    <h2>Search Results</h2>

    <div v-if="filteredProducts && filteredProducts.length > 0">
      <h3>Found Products:</h3>
      <div>
        <div v-for="(product, index) in filteredProducts" :key="index">
          <!-- Wrap the product name in an <a> tag with the appropriate href -->
          <h4><a :href="getProductLink(product)">{{ product.name }}</a></h4>
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
      filterKeyword: this.$route.query.searchInput || "",
    };
  },
  computed: {
    filteredProducts() {
      return this.products.filter((product) =>
        product.name.toLowerCase().includes(this.filterKeyword.toLowerCase())
      );
    },
  },
  methods: {
    getProductLink(product) {
      // Implement the logic to generate the correct link based on your product data
      return product.path;
    },
  },
  mounted() {
    const productsString = sessionStorage.getItem("products");
    const searchInputString = sessionStorage.getItem("searchInput");

    this.products = JSON.parse(productsString) || [];
    this.filterKeyword = JSON.parse(searchInputString) || "";
  },
  watch: {
    '$route.query.searchInput' (newSearchInput) {
      this.filterKeyword = newSearchInput || "";
    },
  },
};
</script>

<style>
</style>
