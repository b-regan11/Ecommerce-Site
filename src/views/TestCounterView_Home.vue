<template>
    <div class="homeTest">
        <div class="count">
            {{ storeCounter.$state.count }}
        </div>
        <div class="buttons">
            <button @click="storeCounter.decreaseCount">-</button>
            <button @click="storeCounter.increaseCount">+</button>
        </div>
        <hr>
        <div>
            This counter is: {{ storeCounter.oddOrEven }}
        </div>
        <hr>
        <div>
            <h3>Edit Counter:</h3>
            <input 
                v-model="storeCounter.count"
                type="number"
            >
        </div>
        <hr>
        <!-- <div class="buttons">
            <button @click="storeProductList.show_product_info">show</button>
        </div> -->
        <hr>
        <div>
            Here are all products -> {{ storeProductList.productTest }}
            <br>
            Here is the first product sent -> {{ storeProductList.firstProduct }}
            <br>
            <br>
            <h2>All Products</h2>
            <ul style="list-style-type: none;">
                <li v-for="product in storeProductList.all_products_info" :key="product.id">
                    <h4>{{ product.name }}</h4>
                    <a :href="product.path">
                        <img :src="require(`@/assets${product.imagePath}`)" :alt="product.imageAlt" style="width: 200px">
                    </a>
                    <p>{{ product.description }}</p>
                    <p>$ {{ product.price }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { useCounterStore } from '@/store/counter'
import { useResults } from '@/store/results'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from '@/App.vue'

const app = createApp(App)

const storeCounter = useCounterStore()
app.use(storeCounter)

const storeProductList = useResults()
app.use(storeProductList)

const pinia = createPinia()
app.use(pinia)
</script>


<style>
.count {
    font-size: 60px;
    margin: 20px;
}
.buttons button {
    font-size: 40px;
    margin: 10px;
}
</style>