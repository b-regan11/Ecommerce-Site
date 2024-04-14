<template>
    <div class="aboutTest">
        <h1>About_Test</h1>
        <button 
            @click="storeCounter.increaseCount"
            class="counter-button"
        >
            {{ storeCounter.$state.count }}
        </button>
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
.counter-button {
    font-size: 50px;
}
</style>