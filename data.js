const data = [
    {
        name: 'Transparent Frame Clear glass for Men',
        category: 'Fashion',
        price: 120,
        image: 'https://i.ibb.co/1KJ0WGn/1df1ab69f4225f500a7e0044029bbc12.jpg'
    },
    {
        name: 'Army Green Color Casual Shirt for Men - Shirt For Men - Shirt',
        category: 'Fashion',
        price: 450,
        image: 'https://i.ibb.co/VxG7Zz9/a68525ffcac9f7f86b3e1b76c610f1c7.jpg'
    },
    {
        name: 'HH Fashion New Long Sleeve Casual Shirt for Men',
        category: 'Fashion',
        price: 450,
        image: 'https://i.ibb.co/w7C76jy/e29c9d599ef53af28d89cee63a8a7383.jpg'
    },
    {
        name: 'Premium Quality Band Collar Long Sleeve Casual Shirt For Man',
        category: 'Fashion',
        price: 450,
        image: 'https://i.ibb.co/x61YRfz/c08d46be46273dba38c40dd91a874337.jpg'
    },
    {
        name: 'Teal Colour Long Sleeve Casual Shirt For Man',
        category: 'Fashion',
        price: 450,
        image: 'https://i.ibb.co/QJkf7sH/1f733ad1189dd92f980bafa3f7cb296a.jpg'
    },
    {
        name: 'Sky Bule Slab Kapor casual huf Shirt for men new style',
        category: 'Fashion',
        price: 450,
        image: 'https://i.ibb.co/W3JFXXR/c5110bea73d27a1051c9f628cafab22b.jpg'
    },
    {
        name: 'Long Casual Cheak Shirt for men',
        category: 'Fashion',
        price: 450,
        image: 'https://i.ibb.co/ZzWt1qV/8be54fe17d9c6235228ffeb34809b237.jpg'
    },
    {
        name: 'New Style Cotton Long Sleeve Formal Shirt For Men - Formal Shirt For Men',
        category: 'Fashion',
        price: 450,
        image: 'https://i.ibb.co/Jtw3N50/f950fe6337145da107cd4e7a763e0c1b.jpg'
    },
    {
        name: 'Double Pocket Long Sleeve Casual Shirt For Man - Shirt',
        category: 'Fashion',
        price: 650,
        image: 'https://i.ibb.co/xmx0HmN/f1e2ee9886a769671962b21e016a956a.jpg'
    },
    {
        name: 'Black Half Silk Tangail Tat Saree Without Blouse Piece For Women',
        category: 'Fashion',
        price: 1650,
        image: 'https://i.ibb.co/tYR1PKW/815c0a84691372b7ac254021b0fd862f.jpg'
    },
    {
        name: 'Tangail Cotton Batik Print Saree For Women - Sari',
        category: 'Fashion',
        price: 1650,
        image: 'https://i.ibb.co/jfPRYgb/b6977a428451e960c73cf57a21dd3d6b.jpg'
    },
    {
        name: 'Girls High Hill Weightless Women Fashionable Full Stone Shoes',
        category: 'Fashion',
        price: 650,
        image: 'https://i.ibb.co/Rg9yvt7/02e5211dc36ff23ace13b85f56a3614d.jpg'
    },
    {
        name: 'Box Balance Heel Shoes For Women - Shoe For Women',
        category: 'Fashion',
        price: 650,
        image: 'https://i.ibb.co/MMJnLXF/8edc2f13189acc9a0fb63eaf48832073.jpg'
    },
    {
        name: 'MAVERICK MENS CASUAL SHIRT',
        category: 'Fashion',
        price: 1980,
        rating: 5,
        totalRating: 257,
        image: 'https://i.ibb.co/6v947RC/shirt.png'
    },
    {
        name: 'Comfy Relax Trouser',
        category: 'Fashion',
        price: 1480,
        image: 'https://i.ibb.co/0ZqFdtB/37a-600x600.jpg'
    },
    {
        name: 'Men’s Dark Blue color Denim Pant',
        category: 'Fashion',
        price: 1250,
        image: 'https://i.ibb.co/6DtYVVc/43-600x600.jpg'
    },
    {
        name: 'Rajkonna Olive Oil',
        category: 'Beauty',
        price: 600,
        image: 'https://i.ibb.co/6g1TK6M/Rajkonna-Olive-Oil-Front-570x570.jpg'
    },
    {
        name: 'Skin Cafe Coconut Oil',
        category: 'Beauty',
        price: 600,
        image: 'https://i.ibb.co/jkJ7hHX/Skin-caf-Coconut-Oil-1-570x570.jpg'
    },
    {
        name: 'Femfresh Intimate Skin Care Freshness Deodorants',
        category: 'Beauty',
        price: 650,
        image: 'https://i.ibb.co/xSYP5yt/Femfresh-Intimate-Skin-Care-Freshness-Deodorants-570x570.jpg'
    },
    {
        name: 'Rasasi Blue Lady Deodorant Body Spray For Women',
        category: 'Beauty',
        price: 650,
        image: 'https://i.ibb.co/1sYdr6t/Rasasi-Blue-Lady-Deodorant-Body-Spray-For-Women-200ml-570x570.jpg'
    },
    {
        name: 'She Is Sexy EDT Perfume For Women',
        category: 'Beauty',
        price: 800,
        image: 'https://i.ibb.co/ZLNhncL/She-Is-Sexy-EDT-Perfume-For-Women-570x570.jpg'
    },
    {
        name: 'Die Cast Toyota Land Cruiser Fj40 1:24 Model Car',
        category: 'Baby',
        price: 450,
        image: 'https://i.ibb.co/Fs3pW89/ezgif-com-webp-to-jpg-2-500x500-228x228.jpg'
    },
    {
        name: 'Disney Cars Value Vehicle Asst',
        category: 'Baby',
        price: 850,
        image: 'https://i.ibb.co/LJRDqsd/car-228x228.jpg'
    },
    {
        name: 'Aptamil Milk Stage 1',
        category: 'Baby',
        price: 3000,
        image: 'https://i.ibb.co/92yn7yL/apta1-228x228.jpg'
    },
    {
        name: 'Aptamil Milk Stage 2',
        category: 'Baby',
        price: 3000,
        image: 'https://i.ibb.co/gyLfPQZ/aptamill2-228x228.jpg'
    },
    {
        name: 'BIOMIL 1 Standard Infant Formula Pack 350g',
        category: 'Baby',
        price: 520,
        image: 'https://i.ibb.co/SPxqpD2/biomil-1-standard-infant-formula-pack-350g-dfg-BHKhgj8-228x228.png'
    },
    {
        name: 'Biomil 2 Follow-Up Infant Milk Formula Tin 400gm',
        category: 'Baby',
        price: 520,
        image: 'https://i.ibb.co/HCJLswM/Biomil-2-Follow-Up-Infant-Milk-Formula-Tin-6-12-months-2-min-228x228.jpg'
    },
    {
        name: 'Fisher ml Squeezy Silicone Food Feeder Blue',
        category: 'Baby',
        price: 420,
        image: 'https://i.ibb.co/VvNmTCT/51f-U4pz8jt-L-SL1200-228x228.jpg'
    },
    {
        name: 'Cool Kid Toddler Mini School Bags: Squirrel',
        category: 'Baby',
        price: 699,
        image: 'https://i.ibb.co/Wz4wrZ3/Cool-Kid-Toddler-Mini-School-Bags-Squirrel-500x500-228x228.jpg'
    },
    {
        name: 'Smiggle Ultra Explorer Comfort Backpack Black',
        category: 'Baby',
        price: 799,
        image: 'https://i.ibb.co/tYgXVyR/Capture-1-228x228.png'
    },
    {
        name: 'Johnsons Baby Milk + Rice Cream - 50gm',
        category: 'Baby',
        price: 499,
        image: 'https://i.ibb.co/YQ0PspP/628621df215f7-johnson-s-baby-milk-rice-cream-86275-228x228.jpg'
    },
    {
        name: 'Johnsons Baby Powder Blossoms 50 gm',
        category: 'Baby',
        price: 99,
        image: 'https://i.ibb.co/s577Fsm/50-228x228.jpg'
    },
    {
        name: 'Xiaomi Pinlo PL-T075W1H Bread Toaster Machine',
        category: 'Kitchen',
        price: 7370,
        rating: 5,
        totalRating: 35,
        image: 'https://i.ibb.co/pJgkq3L/Pinlo-Toaster-Maker-Xiaomi.webp'
    },
    {
        name: 'Royal Kitchen Shelf Classic 4 Door Blue',
        category: 'Kitchen',
        price: 5370,
        image: 'https://i.ibb.co/dDmNDBp/2022-07-21-918083-2.jpg'
    },
] 