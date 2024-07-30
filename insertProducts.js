// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const dotenvExpand = require('dotenv-expand');
// const myEnv = dotenv.config();
// dotenvExpand.expand(myEnv);

// const Product = require('./model/product');

// const User = require('./model/user')

// const products = [
//     {
//         id: 3,
//         title: 'MENS COTTON JACKET',
//         price: 55.99,
//         description: 'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
//         image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
//         category: 'Mens',
//     },
//     {
//         id: 4,
//         title: "LOCK AND LOVE WOMEN'S REMOVABLE HOODED FAUX LEATHER MOTO BIKER JACKET",
//         price: 39.99,
//         description: '100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON',
//         image: 'https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg',
//         category: 'Womens',
//     },
//     // Add more products as needed
// ];

// const users = [
//     {
//         id: 1,
//         email: 'manish091102@gmail.com',
//         username: 'manish091102',
//         password: '12345678',
//         name: {
//             firstname: 'Manish',
//             lastname: 'Chaudhary'
//         },
//         address: {
//             city: 'Ahmedabad',
//             street: 'Main Street',
//             number: 6352809136,
//             zipcode: '380054',
//             geolocation: {
//                 lat: '40.7128',
//                 long: '74.0060'
//             }
//         },
//         phone: '6352809136'
//     },
//     {
//         id: 2,
//         email: 'jane@example.com',
//         username: 'jane123',
//         password: 'password123',
//         name: {
//             firstname: 'Jane',
//             lastname: 'Doe'
//         },
//         address: {
//             city: 'Los Angeles',
//             street: 'Sunset Boulevard',
//             number: 456,
//             zipcode: '90001',
//             geolocation: {
//                 lat: '34.0522',
//                 long: '118.2437'
//             }
//         },
//         phone: '098-765-4321'
//     },
//     // Add more users as needed
// ];


// mongoose
//     .connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(async () => {
//         console.log('Connected to the database');
//         await Product.insertMany(products);
//         // await User.insertMany(users);
//         console.log('Data inserted');
//         mongoose.disconnect();
//     })
//     .catch((err) => {
//         console.error('Error connecting to the database', err);
//     });
