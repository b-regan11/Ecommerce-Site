<template>
  <div class="allproducts">
    <h1>ShopZone.com</h1>
    <br>
    <h2>All Products</h2>

    <div>
      <div v-for="(product, index) in products" :key="index">
        <!-- Call Image Here-->
        <a :href="getProductLink(product)">
          <img :src="require(`@/assets${product.imagePath}`)" :alt="product.imageAlt" style="width: 200px">
        </a>
        <h4><a :href="getProductLink(product)">{{ product.name }}</a></h4>
        <p>{{ product.description }}</p>
        <p>$ {{ product.price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  methods: {
    getProductLink(product) {
      // Implement the logic to generate the correct link based on your product data
      return product.path;
    },
  },
  mounted() {
    const productsString = sessionStorage.getItem("products");

    this.products = JSON.parse(productsString) || [];
  },
};
</script>

<style>
.product-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.product-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.product-info {
  text-align: center;
}
</style>