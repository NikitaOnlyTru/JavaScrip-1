'use strict'

const products = [
    {
        id: 3,
        price: 200,
    },

    {
        id: 4,
        price: 900,
    },

    {
        id: 1,
        price: 1000,
    },
    ];

    products.forEach((item) => {
        if(item.price){
            let newprice = item.price - (item.price / 100 * 15);
            console.log(newprice);
        }
    });
