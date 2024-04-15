import { defineStore } from 'pinia';

export const useResults = defineStore({
    id: 'products',
    state: () => ({
        search_text: "",
        products: [
            { 
                id: 1,
                name: "Amazon Fire TV", 
                fullName: "Amazon Fire TV 50 inch 4-Series 4K UHD smart TV, stream live TV without cable",
                brand: "Amazon",
                category: "electronics",
                path: "/firetv", 
                description: "Bring movies and shows to life with support for vivid 4K Ultra HD, HDR 10, HLG, and Dolby Digital Plus.", 
                imagePath: "/ProductImages/Electronics/FireTV.jpg", 
                imageAlt: "Amazon Fire TV",
                price: 450
            },
            { 
                id: 2,
                name: "Gatorade Bottle", 
                fullName: "Gatorade Gx, Marble Blue, 30 Oz",
                brand: "Gatorade",
                category: "outdoors",
                path: "/gatoradebottle", 
                description: "Fuel your game with Gatorade's new customizable hydration platform.", 
                imagePath: "/ProductImages/Outdoors/GatoradeBottle.jpg", 
                imageAlt: "Gatorade Bottle",
                price: 25
            },
            { 
                id: 3,
                name: "Pedestal Fan", 
                fullName: "Amazon Basics Oscillating Dual Blade Standing Pedestal Fan with Remote, 16-Inch, Black",
                brand: "Amazon",
                category: "office",
                path: "/pedestalfan", 
                description: "Standing pedestal dual-blade fan with wide oscillation for circulating air in medium to large rooms.", 
                imagePath: "/ProductImages/Office/PedestalFan.jpg", 
                imageAlt: "Pedestal Fan",
                price: 50
            },
            { 
                id: 4,
                name: "Playstation 5", 
                fullName: "PlayStation 5 Digital Edition Slim",
                brand: "Sony",
                category: "videogames",
                path: "/PS5", 
                description: "Bundle includes Marvel's Spider-Man 2 full game digital voucher.", 
                imagePath: "/ProductImages/VideoGames/PS5.jpg", 
                imageAlt: "Playstation 5 Bundle",
                price: 450
            }
        ]
    }),
    persist: {
        storage: localStorage,
        paths: ['products'],
    },
    actions: {
        
    },
    getters: {
        productTest: (state) =>  {
            if (state.products.length > 0) return 'Product Info Sent Successfully'
            return 'No Product Info Sent'
        },
        firstProduct: (state) => {
            if (state.products.length > 0) {
                return state.products[0].name
            }
            return 'No Product Info Sent'
        },
        all_products_info: (state) => {
            if (state.products.length > 0) {
                return state.products
            }
            return 'No Product Info Sent'
        },
        filtered_products: (state) => {
            return state.products.filter((product) =>
                product.name.toLowerCase().includes(state.search_text.toLowerCase()) ||
                product.fullName.toLowerCase().includes(state.search_text.toLowerCase()) ||
                product.brand.toLowerCase().includes(state.search_text.toLowerCase()) ||
                product.category.toLowerCase().includes(state.search_text.toLowerCase()) ||
                product.description.toLowerCase().includes(state.search_text.toLowerCase())
            );
        }
    }
})
// Links to look at:
    // Reddit https://www.reddit.com/r/vuejs/comments/we6z21/how_to_store_lists_with_pinia_arrays_or_objects/ 
        // -> GitHub: https://github.com/lmiller1990/vuejs-composition-api-v3/blob/master/src/stores/posts.ts#L6-L10 
