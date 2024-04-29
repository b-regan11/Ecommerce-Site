import { defineStore } from 'pinia';

export const useResults = defineStore({
    id: 'products',
    state: () => ({
        search_text: "",
        category_text: "",
        job_id: 0,
        products: [
            { 
                id: 0,
                name: "Amazon Fire TV", 
                fullName: "Amazon Fire TV 50 inch 4-Series 4K UHD smart TV, stream live TV without cable",
                brand: "Amazon",
                category: "Electronics",
                path: "/firetv", 
                short_description: "Bring movies and shows to life with support for vivid 4K Ultra HD, HDR 10, HLG, and Dolby Digital Plus.", 
                full_description: "",
                web_link: "https://www.amazon.com/amazon-fire-tv-50-inch-4-series-4k-smart-tv/dp/B0B3GTSQ9Q/ref=sr_1_1_ffob_sspa?crid=1KB0GSIYWMJWH&keywords=tv&qid=1707707517&sprefix=tv%2Caps%2C213&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
                imagePath: "/ProductImages/Electronics/FireTV.jpg", 
                imageAlt: "Amazon Fire TV",
                price: 450
            },
            {
                id: 1,
                name: "Apple AirPods 3rd Generation", 
                fullName: "Apple AirPods (3rd Generation) Wireless Ear Buds, Bluetooth Headphones, Personalized Spatial Audio, Sweat and Water Resistant, Lightning Charging Case Included, Up to 30 Hours of Battery Life",
                brand: "Apple",
                category: "Electronics",
                path: "/airpods", 
                short_description: "AirPods 3rd Generation take the listening experience to a new level of individuality. Personalized Spatial Audio with dynamic head tracking works with all your devices to immerse you deeper in all-around-you sound.", 
                full_description: "",
                web_link: "https://www.amazon.com/Apple-Generation-Lightning-Resistant-Headphones/dp/B0BDHB9Y8H?ref_=ast_sto_dp",
                imagePath: "/ProductImages/Electronics/AppleAirPods.jpg", 
                imageAlt: "Apple AirPods 3rd Generation ",
                price: 150
            },
            {
                id: 2,
                name: "Apple iPad Pro", 
                fullName: "Apple iPad Pro 12.9-inch (6th Generation): with M2 chip, Liquid Retina XDR Display, 128GB, Wi-Fi 6E, 12MP front/12MP and 10MP Back Cameras, Face ID, All-Day Battery Life - Space Gray",
                brand: "Apple",
                category: "Electronics",
                path: "/ipad", 
                short_description: "iPad makes editing, enjoying, and sharing your photos and videos easy.", 
                full_description: "",
                web_link: "https://www.amazon.com/Apple-12-9-inch-iPad-Pro-Wi-Fi-128GB/dp/B0BJLF2BRM?ref_=ast_sto_dp&th=1&psc=1https://www.amazon.com/Apple-12-9-inch-iPad-Pro-Wi-Fi-128GB/dp/B0BJLF2BRM",
                imagePath: "/ProductImages/Electronics/AppleiPad.jpg", 
                imageAlt: "Apple iPad Pro",
                price: 1000
            },
            {
                id: 3,
                name: "Apple iPhone 15 Pro", 
                fullName: "Apple iPhone 15 Pro (128 GB) - Natural Titanium | [Locked] | Boost Infinite plan required starting at $60/mo. | Unlimited Wireless | No trade-in needed to start | Get the latest iPhone every year",
                brand: "Apple",
                category: "Electronics",
                path: "/iphone", 
                short_description: "The innovative new design features back glass that has color infused throughout the material.", 
                full_description: "",
                web_link: "https://www.amazon.com/dp/B0CHBMRD1G?ref=boost_bsp_iphone",
                imagePath: "/ProductImages/Electronics/AppleiPhone.jpg", 
                imageAlt: "Apple iPhone 15 Pro",
                price: 1000
            },
            {
                id: 4,
                name: "Apple Watch Ultra 2", 
                fullName: "Apple Watch Ultra 2 [GPS + Cellular 49mm] Smartwatch with Rugged Titanium Case & Blue Ocean Band. Fitness Tracker, Precision GPS, Action Button, Extra-Long Battery Life, Bright Retina Display",
                brand: "Apple",
                category: "Electronics",
                path: "/applewatch", 
                short_description: "Custom Apple silicon makes Apple Watch Ultra 2 more capable, easier to use, and faster.", 
                full_description: "",
                web_link: "https://www.amazon.com/Apple-Cellular-Smartwatch-Precision-Extra-Long/dp/B0CHWZ5VVM?ref_=ast_sto_dp&th=1&psc=1",
                imagePath: "/ProductImages/Electronics/AppleWatch.jpg", 
                imageAlt: "Apple Watch Ultra 2",
                price: 800
            },
            {
                id: 5,
                name: "Dell Desktop Tower", 
                fullName: "Dell XPS 8960 Desktop - Intel Core i7-13700, 16GB DDR5 RAM, 512GB SSD + 2TB HDD, NVIDIA GeForce RTX 3050 8GB GDDR6, Windows 11 Pro, 1-Year Onsite Service - Black",
                brand: "Dell",
                category: "Electronics",
                path: "/desktop", 
                short_description: "The Dell XPS 8960 Desktop offers exceptional performance and versatility, powered by an Intel Core i7 processor.", 
                full_description: "",
                web_link: "https://www.amazon.com/Dell-XPS-8960-Desktop-i7-13700/dp/B0C3T2TBWT/ref=sr_1_2_sspa?c=ts&keywords=Tower+Computers&qid=1707773308&s=pc&sr=1-2-spons&ts_id=13896597011&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
                imagePath: "/ProductImages/Electronics/Desktop.jpg", 
                imageAlt: "Dell Desktop Tower",
                price: 1200 
            },
            { 
                id: 6,
                name: "Pedestal Fan", 
                fullName: "Amazon Basics Oscillating Dual Blade Standing Pedestal Fan with Remote, 16-Inch, Black",
                brand: "Amazon",
                category: "Office",
                path: "/pedestalfan", 
                short_description: "Standing pedestal dual-blade fan with wide oscillation for circulating air in medium to large rooms.", 
                full_description: "",
                web_link: "https://www.amazon.com/AmazonBasics-Adjustable-Oscillating-Standing-Pedestal/dp/B07BNGPWT4/ref=sr_1_7?crid=2L7Y06LB9T7DY&keywords=fan&qid=1707706543&sprefix=fan%2Caps%2C102&sr=8-7",
                imagePath: "/ProductImages/Office/PedestalFan.jpg", 
                imageAlt: "Pedestal Fan",
                price: 50
            },
            {
                id: 7,
                name: "Office Chair", 
                fullName: "Amazon Basics Mid-back Mesh Office Drafting Chair Stool with Adjustable Footrest, Flip-Up Arms, Black",
                brand: "Amazon Basics",
                category: "Office",
                path: "/chair", 
                short_description: "Drafting chair for standard or above standard height work areas; ideal for architects, graphic artists, and more", 
                full_description: "",
                web_link: "https://www.amazon.com/Amazon-Basics-Swivel-footrest-Chair/dp/B09ZVK4FYP?ref_=ast_sto_dp&th=1",
                imagePath: "/ProductImages/Office/Chair.jpg", 
                imageAlt: "Office Chair",
                price: 160
            },
            {
                id: 8,
                name: "Writing Notepad", 
                fullName: "Amazon Basics Wide Ruled Lined Writing Note Pad, 8.5 inch x 11.75 inch, Canary, 600 Sheets ( 12 Pack of 50 )",
                brand: "Amazon Basics",
                category: "Office",
                path: "/notepad", 
                short_description: "12-pack of 50-sheet note pads with letter-size 15-pound Canary paper; ideal for everyday use at home, school, or office.", 
                full_description: "",
                web_link: "https://www.amazon.com/Amazon-Basics-11-75-Inch-50-Sheet-Writing/dp/B00QSR9KFU?ref_=ast_sto_dp&th=1",
                imagePath: "/ProductImages/Office/Notepad.jpg", 
                imageAlt: "Writing Notepad",
                price: 15
            },
            {
                id: 9,
                name: "Paper Shredder",
                fullName: "Amazon Basics Cross Cut Paper and Credit Card Shredder, 12 Sheet (New Model), Black",
                brand: "Amazon Basics",
                category: "Office",
                path: "/shredder",
                short_description: "Shreds up to 12 sheets of 20-pound bond paper at a time, also can shred credit cards (one at a time, but not suitable for metal credit cards), staples, and small paper clips.",
                full_description: "",
                web_link: "https://www.amazon.com/Amazon-Basics-12-Sheet-Cross-Cut-Shredder/dp/B0C6LZG69W?ref_=ast_sto_dp&th=1&psc=1",
                imagePath: "/ProductImages/Office/PaperShredder.jpg",
                imageAlt: "Paper Shredder",
                price: 75
            },
            {
                id: 10,
                name: "Pens",
                fullName: "Amazon Basics Retractable Gel Pens, Fine Point (0.7mm), Black, 12 Count (Pack of 1)",
                brand: "Amazon Basics",
                category: "Office",
                path: "/pens",
                short_description: "Retractable gel pen with no-smear, smudge-free ink for clean, reliable writing.",
                full_description: "",
                web_link: "https://www.amazon.com/Amazon-Basics-Retractable-Medium-12-Pack/dp/B0BZVGC5TZ?ref_=ast_sto_dp&th=1",
                imagePath: "/ProductImages/Office/Pens.jpg",
                imageAlt: "Pens",
                price: 10
            },
            {
                id: 11,
                name: "Printing Paper",
                fullName: "Hammermill Printer Paper, Premium Color 32 Lb Copy Paper, 8.5 x 11 - 1 Ream (500 Sheets) - 100 Bright, Made in the USA, 102630, White, Letter",
                brand: "Hammermill",
                category: "Office",
                path: "/paper",
                short_description: "Premium Color Copy 32lb Paper provides a high-tech sheet that’s designed to show your work at its best so you can confidently use it for design proposals, full-color presentations, photographs, brochures and more.",
                full_description: "",
                web_link: "https://www.amazon.com/Hammermill-Premium-Letter-Bright-102630R/dp/B0010T5NF2/ref=sr_1_2_sspa?c=ts&keywords=Paper%2B%26%2BPrintable%2BMedia&qid=1707773183&s=office-products&sr=1-2-spons&ts_id=1069664&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1",
                imagePath: "/ProductImages/Office/Paper.jpg",
                imageAlt: "Printing Paper",
                price: 15
            },
            {
                id: 12,
                name: "HP Printer",
                fullName: "HP DeskJet 2755e Wireless Color inkjet-printer, Print, scan, copy, Easy setup, Mobile printing, Best-for home, Instant Ink with HP+,white",
                brand: "HP",
                category: "Office",
                path: "/printer",
                short_description: "Best for printing basic color documents like recipes, forms, and travel documents. Print speeds up to 7.5 pages per minute in black or 5.5 pages per minute in color.",
                full_description: "",
                web_link: "https://www.amazon.com/HP-DeskJet-2755e-Wireless-Printer/dp/B08XYP6BJV?ref_=Oct_d_otopr_d_172646_0&pd_rd_w=B1qMX&content-id=amzn1.sym.472f0888-5e02-4b8b-ac4e-af0d4b63f492&pf_rd_p=472f0888-5e02-4b8b-ac4e-af0d4b63f492&pf_rd_r=GFPSMEVVEK2RY9B8XHTN&pd_rd_wg=pRSlD&pd_rd_r=bc6b665a-c2d8-4936-aae9-5192daf7a74f&pd_rd_i=B08XYP6BJV",
                imagePath: "/ProductImages/Office/Printer.jpg",
                imageAlt: "HP Printer",
                price: 85
            },
            {
                id: 13,
                name: "adidas Duffle Bag",
                fullName: "adidas Unisex Defender 4 Small Duffel Bag",
                brand: "adidas",
                category: "Outdoors",
                path: "/dufflebag",
                short_description: "2 zippered end pockets with space for your team's branding and a zippered outside pocket to stash the little stuff.",
                full_description: "",
                web_link: "https://www.amazon.com/adidas-Defender-Small-Duffel-Black/dp/B087LNQLG5?pf_rd_p=18521b78-5654-4964-a3c2-4c1503d2513a&pf_rd_r=NNCXH13W0QAKV5JNYEM0&ref_=so_exfit_win_essentials_B087LNQLG5",
                imagePath: "/ProductImages/Outdoors/DuffleBag.jpg",
                imageAlt: "Adidas Duffle Bag",
                price: 40
            },
            {
                id: 14,
                name: "C4 Pre-Workout Powder",
                fullName: "C4 Original Pre Workout Powder Fruit Punch - Vitamin C for Immune Support - Sugar Free Preworkout Energy for Men & Women - 150mg Caffeine + Beta Alanine + Creatine - 60 Servings",
                brand: "Cellucor",
                category: "Outdoors",
                path: "/c4preworkout",
                short_description: "Formulated with a super creatine compound to support strength and performance. Whether you're just starting your fitness journey or striving for a new goal, C4 will help unlock your full potential.",
                full_description: "",
                web_link: "https://www.amazon.com/Cellucor-Original-Supplement-Creatine-Citrulline/dp/B00U464HYK?pf_rd_p=b197b67d-b48b-48b3-bc24-3dc96ca0fe14&pf_rd_r=NNCXH13W0QAKV5JNYEM0&ref_=so_exfit_win_vitamins_B00U464HYK",
                imagePath: "/ProductImages/Outdoors/C4.jpg", 
                imageAlt: "C4 Pre-Workout Powder",
                price: 50
            },
            { 
                id: 15,
                name: "Gatorade Bottle", 
                fullName: "Gatorade Gx, Marble Blue, 30 Oz",
                brand: "Gatorade",
                category: "Outdoors",
                path: "/gatoradebottle", 
                short_description: "Fuel your game with Gatorade's new customizable hydration platform.", 
                full_description: "",
                web_link: "https://www.amazon.com/Gatorade-Gx-Marble-Blue-30/dp/B0BXFM9HRJ/ref=sr_1_1_sspa?crid=31Q05ABGMWZBU&keywords=water%2Bbottle&qid=1707707389&sprefix=water%2Bbottle%2Caps%2C117&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1",
                imagePath: "/ProductImages/Outdoors/GatoradeBottle.jpg", 
                imageAlt: "Gatorade Bottle",
                price: 25
            },
            {
                id: 16,
                name: "Schwinn Mountain Bike",
                fullName: "Schwinn High Timber Youth/Adult Mountain Bike for Men and Women, Aluminum and Steel Frame Options, 7-21 Speeds Options, 24-29-Inch Wheels",
                brand: "Schwinn",
                category: "Outdoors",
                path: "/mountainbike",
                short_description: "Lightweight 16.5-inch aluminum mountain frame is the perfect bike for rides around your neighborhood or trails with 26-inch wheels fit riders 5'4'' to 6'2'' inches tall.",
                full_description: "",
                web_link: "https://www.amazon.com/dp/B08239YG6B/ref=sspa_dk_browse_0/?_encoding=UTF8&ie=UTF8&sp_csd=d2lkZ2V0TmFtZT1zcF9icm93c2VfdGhlbWF0aWM%3D&pd_rd_w=61nKe&content-id=amzn1.sym.f31e8df5-e09e-479f-81aa-d268b4469778&pf_rd_p=f31e8df5-e09e-479f-81aa-d268b4469778&pf_rd_r=3QV8EZ460MCTE1Y23XEJ&pd_rd_wg=pXPGG&pd_rd_r=a9fcad6f-38cd-4309-983e-c8c75f3d4200&ref_=sspa_dk_browse&th=1&psc=1",
                imagePath: "/ProductImages/Outdoors/SchwinnBike.jpg",
                imageAlt: "Schwinn Mountain Bike",
                price: 400
            },
            {
                id: 17,
                name: "Stanley Cup", 
                fullName: "Stanley IceFlow Stainless Steel Tumbler with Straw, Vacuum Insulated Water Bottle for Home, Office or Car, Reusable Cup with Straw Leak Resistant Flip",
                brand: "Stanley",
                category: "Outdoors",
                path: "/stanleycup",
                short_description: "This large tumbler with lid and straw can hold 30 oz of thirst-quenching beverage to power you through your longest days; Perfect for drinking water, smoothies, or iced coffee; Just fill it up and get on with your day.",
                full_description: "",
                web_link: "https://www.amazon.com/Stanley-IceFlow-Stainless-Steel-Tumbler/dp/B0CSF47VXR/ref=sr_1_4?c=ts&keywords=Water%2BBottles&qid=1707769333&s=sporting-goods&sr=1-4&ts_id=3395091&th=1",
                imagePath: "/ProductImages/Outdoors/StanleyCup.jpg",
                imageAlt: "Stanley Cup",
                price: 35
            },
            {
                id: 18,
                name: "Exercise Bike",
                fullName: "Exercise Bike, WENOKER Stationary Bike for Home, Indoor Bike with Silent Belt Drive, Heavy Flywheel, Comfortable Seat Cushion and Upgraded LCD Monitor (Newest Version)",
                brand: "Wenoker",
                category: "Outdoors",
                path: "/exercisebike",
                short_description: "Unlike the deceptive bikes online that are with a noisy iron sand flywheel, this indoor bike inertia-enhanced flywheel maintains a quiet smooth motion.",
                full_description: "",
                web_link: "https://www.amazon.com/Exercise-Stationary-Flywheel-Comfortable-Upgraded/dp/B0C3CWVRPK?pf_rd_r=NNCXH13W0QAKV5JNYEM0&pf_rd_t=PageFrameworkApplication&pf_rd_i=3407731&pf_rd_p=57a17964-b404-4ab1-a0b6-bba2903e3035&pf_rd_s=merchandised-search-8&ref=dlx_34077_sh_dcl_tlt_15_caf89a19_dt_mese8_35&th=1",
                imagePath: "/ProductImages/Outdoors/ExerciseBike.jpg",
                imageAlt: "Exercise Bike",
                price: 260
            },
            {
                id: 19,
                name: "Resistant Bands",
                fullName: "WHATAFIT Resistance Bands Set, Exercise Bands with Door Anchor, Handles, Carry Bag, Legs Ankle Straps for Resistance Training, Physical Therapy, Home Workouts for Men and Women",
                brand: "WHATAFIT",
                category: "Outdoors",
                path: "/resistantbands",
                short_description: "Multifunction and portable: Our resistance bands can apply to different types of exercise. Good for toning your arms, shoulders, chest, glutes, legs etc. Also comes with a convenient travel pouch!",
                full_description: "",
                web_link: "https://www.amazon.com/UPOWEX-Resistance-Whatafit-Exercise-Training/dp/B07DWSPQQY?ref_=Oct_d_orecs_d_23533915011_2&pd_rd_w=Mebb6&content-id=amzn1.sym.d1803dfb-acf0-4c17-832e-b616d44f1538&pf_rd_p=d1803dfb-acf0-4c17-832e-b616d44f1538&pf_rd_r=ZZRV3RQ9A5YC5GP7PNTG&pd_rd_wg=EtOWM&pd_rd_r=182aa6f5-5982-4dcf-a1de-53c34e50836f&pd_rd_i=B07DWSPQQY&th=1",
                imagePath: "/ProductImages/Outdoors/ResistantBands.jpg",
                imageAlt: "Resistant Bands",
                price: 25
            },
            {
                id: 20,
                name: "Meta Quest 3",
                fullName: "Quest 3 128GB— Breakthrough Mixed Reality — Powerful Performance — Asgard’s Wrath 2 Bundle",
                brand: "Meta",
                category: "VideoGames",
                path: "/quest3",
                short_description: "Dive into extraordinary experiences with a mixed reality headset that transforms your home into an exciting new playground, where virtual elements blend into your actual surroundings.",
                full_description: "",
                web_link: "https://www.amazon.com/Meta-Quest-128GB-Breakthrough-Reality-3/dp/B0C8VKH1ZH/ref=sr_1_3?keywords=meta+quest&qid=1707771722&sr=8-3",
                imagePath: "/ProductImages/VideoGames/Quest3.jpg",
                imageAlt: "Meta Quest 3",
                price: 500
            },
            {
                id: 21,
                name: "Nintendo Switch OLED", 
                fullName: "Nintendo Switch - OLED Model w/ Neon Red & Neon Blue Joy-Con",
                brand: "Nintendo",
                category: "VideoGames",
                path: "/switch",
                short_description: "The Nintendo Switch is a hybrid video game console, consisting of a console unit, a dock, and two Joy-Con controllers.",
                full_description: "",
                web_link: "https://www.amazon.com/Nintendo-Switch-OLED-Model-Neon-Joy/dp/B098RL6SBJ/ref=sr_1_2?crid=3F2MLD4C2KEX&keywords=nintendo+switch&qid=1707771764&sprefix=nint%2Caps%2C193&sr=8-2",
                imagePath: "/ProductImages/VideoGames/Switch.jpg",
                imageAlt: "Nintendo Switch OLED",
                price: 350
            },
            { 
                id: 22,
                name: "Playstation 5", 
                fullName: "PlayStation 5 Digital Edition Slim",
                brand: "Sony",
                category: "Videogames",
                path: "/PS5", 
                short_description: "Bundle includes Marvel's Spider-Man 2 full game digital voucher.", 
                full_description: "Slim Design - With PS5, players get powerful gaming technology packed inside a sleek and compact console design.",
                web_link: "https://www.amazon.com/PlayStation%C2%AE5-Digital-slim-PlayStation-5/dp/B0CL5KNB9M/ref=sr_1_1?crid=3HBJOMO2OREID&dib=eyJ2IjoiMSJ9.kgp6If9Ie8zGHwBo-0htBKlg8Wq71JJPT6Rv2RTlend71HCZHS2uBjT_a0Iwt4YzXxNXVmtD-4ihgEoP0Ju2W0V8PZ82LIXWiUK0oi5qcXcWwEHAqasGtlr2sYX2Dhl4H7FRAeHXWHMkMlHqbeFIptx3QRv3EGwCVlvHyDktQa-mZCv6VWjqNOqsrM_nkIo29brGmZ00NIhzZyftBpR5haVBnCGOqV4sKtcxr35EuaQ.3J_F4r6Y7pNG6NA3Zw5tu3wPqgYYa1yK_gGSZ8fL5M4&dib_tag=se&keywords=ps5&qid=1710043159&sprefix=ps5+,aps,99&sr=8-1&th=1",
                imagePath: "/ProductImages/VideoGames/PS5.jpg", 
                imageAlt: "Playstation 5 Bundle",
                price: 450
            },
            {
                id: 23,
                name: "Xbox Series X",
                fullName: "Xbox Series X 1TB SSD Console - Includes Wireless Controller - Up to 120 frames per second - 16GB RAM 1TB SSD - Experience True 4K Gaming Velocity Architecture.",
                brand: "Xbox",
                category: "VideoGames",
                path: "/xbox", 
                short_description: "The fastest, most powerful Xbox ever. Explore rich new worlds with 12 teraflops of raw graphic processing power, DirectX ray tracing, a custom SSD, and 4K gaming.", 
                full_description: "",
                web_link: "https://www.amazon.com/Xbox-1TB-SSD-Console-Controller-Architecture/dp/B08H75RTZ8/ref=sr_1_3?crid=1VA8UJYGCQKZX&keywords=xbox+series+x&qid=1707771801&sprefix=xbox%2Caps%2C176&sr=8-3",
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
        changeJobId(id) {
            this.job_id = id;
        }
    },
    getters: {
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
                product.short_description.toLowerCase().includes(state.search_text.toLowerCase())
            );
        },
        category_products: (state) => {
            return state.products.filter((product) =>
                product.category.toLowerCase().includes(state.category_text.toLowerCase())
            );
        },
        specificProduct: (state) => {
            return state.products[state.job_id]
        }
    }
})