<template>
    <ErrorBoundary>
        <div>
            <h2 class="WebName">Shopping Cart</h2>
            <template v-if="storeCartList.itemsInCart.length > 0">
                <h4 class="Cart-Options">
                    <button @click="buyCart()">Purchase Cart</button>
                    <button @click="clearCart()">Clear Cart</button>
                </h4>
                <ul class="product-list" style="list-style-type: none;">
                    <li v-for="item in storeCartList.all_items" :key="item.id">
                        <div class="product-item">
                            <h4>{{ item.fullName }}</h4>
                            <h3>{{ item.name }}</h3>
                            <a :href="item.path">
                                <img :src="require(`@/assets${item.imagePath}`)" :alt="item.imageAlt" style="width: 200px">
                            </a>
                            <p>{{ item.short_description }}</p>
                            <p>$ {{ item.price }}</p>
                            <h4>Quantity: {{ item.quantity }}</h4>
                            <button @click="removeFromCart(item.id)">
                                <h4>Remove From Cart</h4>
                            </button> 
                            <br>
                        </div>
                    </li>
                </ul>
            </template>
            <template v-else>
                <br><hr><br>
                <p>Your shopping cart is empty.</p>
            </template>
        </div>
    </ErrorBoundary>
</template>

<script setup>
import { useCart } from '@/store/cart'
import { useResults } from '@/store/results'
import ErrorBoundary from '@/views/ErrorBoundary.vue'

const storeCartList = useCart()
const storeProductList = useResults()

function removeFromCart(num) {
    storeProductList.changeJobId(num)
    storeCartList.removeFromCart(storeProductList.specificProduct)
}

function clearCart() {
    storeCartList.clearCart()
}

function buyCart() {
    // Construct a string containing item names and quantities
    const itemsInCartString = storeCartList.all_items.map(item => `${item.name} (Quantity: ${item.quantity})`).join("\n");
    
    // Show an alert with the item names and quantities
    alert(`Items in Cart:\n${itemsInCartString}`);
    clearCart()
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

.WebName {
  padding-top: 10px;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
}

.Cart-Options {
  padding-top: 10px;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
}

.Cart-Options button {
  margin: 0 10px;
}
</style>