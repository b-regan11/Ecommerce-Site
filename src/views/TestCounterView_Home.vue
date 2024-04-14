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
    </div>
</template>

<script setup>
import { useCounterStore } from '@/store/counter'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from '@/App.vue'

const app = createApp(App)

const storeCounter = useCounterStore()
app.use(storeCounter)

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