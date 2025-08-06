// js/cart.js

const CART_KEY = 'shoppingCart';

// Function to get the cart from localStorage
export const getCart = () => {
    const cart = localStorage.getItem(CART_KEY);
    return cart ? JSON.parse(cart) : [];
};

// Function to save the cart to localStorage
const saveCart = (cart) => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

// Function to add a product to the cart
export const addToCart = (product) => {
    const cart = getCart();
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart(cart);
};

// Function to clear the cart
export const clearCart = () => {
    localStorage.removeItem(CART_KEY);
};
