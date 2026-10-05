const shoppingList = [
    {
        name: 'Rice',
        price: '2500'
    },
    {
        name: 'Milk',
        price: '1500'
    },
    {
        name: 'Bread',
        price: '1000'
    }
];


    shoppingList.forEach((product) => {
    console.log(`${product.name} - ₦${product.price}`);
});


function addProduct(name, price) {
    shoppingList.push({
        name: name,
        price: price
    });
} 

addProduct('Eggs', '500');

function calculateTotal () {
    
    let total = 0;

    // assigment - fix this loop to calculate the total price of the items before updating the total variable

    for(const product of shoppingList) {
        total += Number(product.price);
    };

    return total;
}

console.log(`Total: ₦${calculateTotal()}`);


const expensiveProducts = shoppingList.filter((product) => {
    return product.price > 1000;
});

console.log(expensiveProducts);