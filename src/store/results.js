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
                category: "Electronics",
                path: "/firetv", 
                description: "Bring movies and shows to life with support for vivid 4K Ultra HD, HDR 10, HLG, and Dolby Digital Plus.", 
                imagePath: "/ProductImages/Electronics/FireTV.jpg", 
                imageAlt: "Amazon Fire TV",
                price: 450
            },
            {
                id: 2,
                name: "Apple AirPods 3rd Generation", 
                fullName: "Apple AirPods (3rd Generation) Wireless Ear Buds, Bluetooth Headphones, Personalized Spatial Audio, Sweat and Water Resistant, Lightning Charging Case Included, Up to 30 Hours of Battery Life",
                brand: "Apple",
                category: "Electronics",
                path: "/airpods", 
                description: "AirPods 3rd Generation take the listening experience to a new level of individuality. Personalized Spatial Audio with dynamic head tracking works with all your devices to immerse you deeper in all-around-you sound.", 
                imagePath: "/ProductImages/Electronics/AppleAirPods.jpg", 
                imageAlt: "Apple AirPods 3rd Generation ",
                price: 150
            },
            {
                id: 3,
                name: "Apple iPad Pro", 
                fullName: "Apple iPad Pro 12.9-inch (6th Generation): with M2 chip, Liquid Retina XDR Display, 128GB, Wi-Fi 6E, 12MP front/12MP and 10MP Back Cameras, Face ID, All-Day Battery Life - Space Gray",
                brand: "Apple",
                category: "Electronics",
                path: "/ipad", 
                description: "iPad makes editing, enjoying, and sharing your photos and videos easy.", 
                imagePath: "/ProductImages/Electronics/AppleiPad.jpg", 
                imageAlt: "Apple iPad Pro",
                price: 1000
            },
            {
                id: 4,
                name: "Apple iPhone 15 Pro", 
                fullName: "Apple iPhone 15 Pro (128 GB) - Natural Titanium | [Locked] | Boost Infinite plan required starting at $60/mo. | Unlimited Wireless | No trade-in needed to start | Get the latest iPhone every year",
                brand: "Apple",
                category: "Electronics",
                path: "/iphone", 
                description: "The innovative new design features back glass that has color infused throughout the material.", 
                imagePath: "/ProductImages/Electronics/AppleiPhone.jpg", 
                imageAlt: "Apple iPhone 15 Pro",
                price: 1000
            },
            {
                id: 5,
                name: "Apple Watch Ultra 2", 
                fullName: "Apple Watch Ultra 2 [GPS + Cellular 49mm] Smartwatch with Rugged Titanium Case & Blue Ocean Band. Fitness Tracker, Precision GPS, Action Button, Extra-Long Battery Life, Bright Retina Display",
                brand: "Apple",
                category: "Electronics",
                path: "/applewatch", 
                description: "Custom Apple silicon makes Apple Watch Ultra 2 more capable, easier to use, and faster.", 
                imagePath: "/ProductImages/Electronics/AppleWatch.jpg", 
                imageAlt: "Apple Watch Ultra 2",
                price: 800
            },
            {
                id: 6,
                name: "Dell Desktop Tower", 
                fullName: "Dell XPS 8960 Desktop - Intel Core i7-13700, 16GB DDR5 RAM, 512GB SSD + 2TB HDD, NVIDIA GeForce RTX 3050 8GB GDDR6, Windows 11 Pro, 1-Year Onsite Service - Black",
                brand: "Dell",
                category: "Electronics",
                path: "/desktop", 
                description: "The Dell XPS 8960 Desktop offers exceptional performance and versatility, powered by an Intel Core i7 processor.", 
                imagePath: "/ProductImages/Electronics/Desktop.jpg", 
                imageAlt: "Dell Desktop Tower",
                price: 1200 
            },
            { 
                id: 7,
                name: "Pedestal Fan", 
                fullName: "Amazon Basics Oscillating Dual Blade Standing Pedestal Fan with Remote, 16-Inch, Black",
                brand: "Amazon",
                category: "Office",
                path: "/pedestalfan", 
                description: "Standing pedestal dual-blade fan with wide oscillation for circulating air in medium to large rooms.", 
                imagePath: "/ProductImages/Office/PedestalFan.jpg", 
                imageAlt: "Pedestal Fan",
                price: 50
            },
            {
                id: 8,
                name: "Office Chair", 
                fullName: "Amazon Basics Mid-back Mesh Office Drafting Chair Stool with Adjustable Footrest, Flip-Up Arms, Black",
                brand: "Amazon Basics",
                category: "Office",
                path: "/chair", 
                description: "Drafting chair for standard or above standard height work areas; ideal for architects, graphic artists, and more", 
                imagePath: "/ProductImages/Office/Chair.jpg", 
                imageAlt: "Office Chair",
                price: 160
            },
            {
                id: 9,
                name: "Writing Notepad", 
                fullName: "Amazon Basics Wide Ruled Lined Writing Note Pad, 8.5 inch x 11.75 inch, Canary, 600 Sheets ( 12 Pack of 50 )",
                brand: "Amazon Basics",
                category: "Office",
                path: "/notepad", 
                description: "12-pack of 50-sheet note pads with letter-size 15-pound Canary paper; ideal for everyday use at home, school, or office.", 
                imagePath: "/ProductImages/Office/Notepad.jpg", 
                imageAlt: "Writing Notepad",
                price: 15
            },
            {
                id: 10,
                name: "Paper Shredder",
                fullName: "Amazon Basics Cross Cut Paper and Credit Card Shredder, 12 Sheet (New Model), Black",
                brand: "Amazon Basics",
                category: "Office",
                path: "/shredder",
                description: "Shreds up to 12 sheets of 20-pound bond paper at a time, also can shred credit cards (one at a time, but not suitable for metal credit cards), staples, and small paper clips.",
                imagePath: "/ProductImages/Office/PaperShredder.jpg",
                imageAlt: "Paper Shredder",
                price: 75
            },
            {
                id: 11,
                name: "Pens",
                fullName: "Amazon Basics Retractable Gel Pens, Fine Point (0.7mm), Black, 12 Count (Pack of 1)",
                brand: "Amazon Basics",
                category: "Office",
                path: "/pens",
                description: "Retractable gel pen with no-smear, smudge-free ink for clean, reliable writing.",
                imagePath: "/ProductImages/Office/Pens.jpg",
                imageAlt: "Pens",
                price: 10
            },
            {
                id: 12,
                name: "Printing Paper",
                fullName: "Hammermill Printer Paper, Premium Color 32 Lb Copy Paper, 8.5 x 11 - 1 Ream (500 Sheets) - 100 Bright, Made in the USA, 102630, White, Letter",
                brand: "Hammermill",
                category: "Office",
                path: "/paper",
                description: "Premium Color Copy 32lb Paper provides a high-tech sheet that’s designed to show your work at its best so you can confidently use it for design proposals, full-color presentations, photographs, brochures and more.",
                imagePath: "/ProductImages/Office/Paper.jpg",
                imageAlt: "Printing Paper",
                price: 15
            },
            {
                id: 13,
                name: "Printer",
                fullName: "HP DeskJet 2755e Wireless Color inkjet-printer, Print, scan, copy, Easy setup, Mobile printing, Best-for home, Instant Ink with HP+,white",
                brand: "HP",
                category: "Office",
                path: "/printer",
                description: "Best for printing basic color documents like recipes, forms, and travel documents. Print speeds up to 7.5 pages per minute in black or 5.5 pages per minute in color.",
                imagePath: "/ProductImages/Office/Printer.jpg",
                imageAlt: "Printer",
                price: 85
            },
            {
                id: 14,
                name: "adidas Duffle Bag",
                fullName: "adidas Unisex Defender 4 Small Duffel Bag",
                brand: "adidas",
                category: "Outdoors",
                path: "/dufflebag",
                description: "2 zippered end pockets with space for your team's branding and a zippered outside pocket to stash the little stuff.",
                imagePath: "/ProductImages/Outdoors/DuffleBag.jpg",
                imageAlt: "Adidas Duffle Bag",
                price: 40
            },
            {
                id: 15,
                name: "C4 Pre-Workout Powder",
                fullName: "C4 Original Pre Workout Powder Fruit Punch - Vitamin C for Immune Support - Sugar Free Preworkout Energy for Men & Women - 150mg Caffeine + Beta Alanine + Creatine - 60 Servings",
                brand: "Cellucor",
                category: "Outdoors",
                path: "/c4preworkout",
                description: "Formulated with a super creatine compound to support strength and performance. Whether you're just starting your fitness journey or striving for a new goal, C4 will help unlock your full potential.",
                imagePath: "/ProductImages/Outdoors/C4.jpg", 
                imageAlt: "C4 Pre-Workout Powder",
                price: 50
            },
            { 
                id: 16,
                name: "Gatorade Bottle", 
                fullName: "Gatorade Gx, Marble Blue, 30 Oz",
                brand: "Gatorade",
                category: "Outdoors",
                path: "/gatoradebottle", 
                description: "Fuel your game with Gatorade's new customizable hydration platform.", 
                imagePath: "/ProductImages/Outdoors/GatoradeBottle.jpg", 
                imageAlt: "Gatorade Bottle",
                price: 25
            },
            {
                id: 17,
                name: "Schwinn Mountain Bike",
                fullName: "Schwinn High Timber Youth/Adult Mountain Bike for Men and Women, Aluminum and Steel Frame Options, 7-21 Speeds Options, 24-29-Inch Wheels",
                brand: "Schwinn",
                category: "Outdoors",
                path: "/mountainbike",
                description: "Lightweight 16.5-inch aluminum mountain frame is the perfect bike for rides around your neighborhood or trails with 26-inch wheels fit riders 5'4'' to 6'2'' inches tall.",
                imagePath: "/ProductImages/Outdoors/SchwinnBike.jpg",
                imageAlt: "Schwinn Mountain Bike",
                price: 400
            },
            {
                id: 18,
                name: "Stanley Cup", 
                fullName: "Stanley IceFlow Stainless Steel Tumbler with Straw, Vacuum Insulated Water Bottle for Home, Office or Car, Reusable Cup with Straw Leak Resistant Flip",
                brand: "Stanley",
                category: "Outdoors",
                path: "/stanleycup",
                description: "This large tumbler with lid and straw can hold 30 oz of thirst-quenching beverage to power you through your longest days; Perfect for drinking water, smoothies, or iced coffee; Just fill it up and get on with your day.",
                imagePath: "/ProductImages/Outdoors/StanleyCup.jpg",
                imageAlt: "Stanley Cup",
                price: 35
            },
            {
                id: 19,
                name: "Exercise Bike",
                fullName: "Exercise Bike, WENOKER Stationary Bike for Home, Indoor Bike with Silent Belt Drive, Heavy Flywheel, Comfortable Seat Cushion and Upgraded LCD Monitor (Newest Version)",
                brand: "Wenoker",
                category: "Outdoors",
                path: "/exercisebike",
                description: "Unlike the deceptive bikes online that are with a noisy iron sand flywheel, this indoor bike inertia-enhanced flywheel maintains a quiet smooth motion.",
                imagePath: "/ProductImages/Outdoors/ExerciseBike.jpg",
                imageAlt: "Exercise Bike",
                price: 260
            },
            {
                id: 20,
                name: "Resistant Bands",
                fullName: "WHATAFIT Resistance Bands Set, Exercise Bands with Door Anchor, Handles, Carry Bag, Legs Ankle Straps for Resistance Training, Physical Therapy, Home Workouts for Men and Women",
                brand: "WHATAFIT",
                category: "Outdoors",
                path: "/resistantbands",
                description: "Multifunction and portable: Our resistance bands can apply to different types of exercise. Good for toning your arms, shoulders, chest, glutes, legs etc. Also comes with a convenient travel pouch!",
                imagePath: "/ProductImages/Outdoors/ResistantBands.jpg",
                imageAlt: "Resistant Bands",
                price: 25
            },
            {
                id: 21,
                name: "Meta Quest 3",
                fullName: "Quest 3 128GB— Breakthrough Mixed Reality — Powerful Performance — Asgard’s Wrath 2 Bundle",
                brand: "Meta",
                category: "VideoGames",
                path: "/quest3",
                description: "Dive into extraordinary experiences with a mixed reality headset that transforms your home into an exciting new playground, where virtual elements blend into your actual surroundings.",
                imagePath: "/ProductImages/VideoGames/Quest3.jpg",
                imageAlt: "Meta Quest 3",
                price: 500
            },
            {
                id: 22,
                name: "Nintendo Switch OLED", 
                fullName: "Nintendo Switch - OLED Model w/ Neon Red & Neon Blue Joy-Con",
                brand: "Nintendo",
                category: "VideoGames",
                path: "/switch",
                description: "The Nintendo Switch is a hybrid video game console, consisting of a console unit, a dock, and two Joy-Con controllers.",
                imagePath: "/ProductImages/VideoGames/Switch.jpg",
                imageAlt: "Nintendo Switch OLED",
                price: 350
            },
            { 
                id: 23,
                name: "Playstation 5", 
                fullName: "PlayStation 5 Digital Edition Slim",
                brand: "Sony",
                category: "Videogames",
                path: "/PS5", 
                description: "Bundle includes Marvel's Spider-Man 2 full game digital voucher.", 
                imagePath: "/ProductImages/VideoGames/PS5.jpg", 
                imageAlt: "Playstation 5 Bundle",
                price: 450
            },
            {
                id: 24,
                name: "Xbox Series X",
                fullName: "Xbox Series X 1TB SSD Console - Includes Wireless Controller - Up to 120 frames per second - 16GB RAM 1TB SSD - Experience True 4K Gaming Velocity Architecture [video game] [video game] [video game] [video game]",
                brand: "Xbox",
                category: "VideoGames",
                path: "/xbox", 
                description: "The fastest, most powerful Xbox ever. Explore rich new worlds with 12 teraflops of raw graphic processing power, DirectX ray tracing, a custom SSD, and 4K gaming.", 
                imagePath: "/ProductImages/VideoGames/Xbox.jpg", 
                imageAlt: "Xbox Series X",
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
