
const shoppingCart = {
    tax: 0.08,
    items: [
        {
            title: "orange juice",
            price: 3.99,
            quantity: 1
        },
        {
            title: "rice",
            price: 1.99,
            quantity: 3
        },
        {
            title: "beans",
            price: 0.99,
            quantity: 3
        },
        {
            title: "chili sauce",
            price: 2.99,
            quantity: 1
        },
        {
            title: "chocolate",
            price: 0.75,
            quantity: 9
        }
    ]
};

// How do I make this a function?
// function totalNumberOfItems(shoppingCart([items]), shoppingCart('quantity') {
//     return (shoppingCart.items.Number(quantity));
// }
//





// Exercise 99
// Write a function named getAverageItemPrice that takes in the shopping cart as an input and returns the average of all the item prices.
// Hint - This should determine the total price divided by the number of types of items. This does not account for each item type's quantity.\
function getAverageItemPrice(shoppingCart) {
    function price(item) {
        return item.price;
    }
    return (
        shoppingCart.map(price).reduce(function(a, b) {
            return a + b;
        }, 0) / shoppingCart.map(price).length
    );
}
