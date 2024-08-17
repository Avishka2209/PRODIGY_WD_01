// Change navbar background color on scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Toggle menu on small screens
const logo = document.querySelector('.logo');
const navbar = document.querySelector('.navbar ul');

logo.addEventListener('click', () => {
    navbar.classList.toggle('show');
});

// Script to handle adding items to the cart and displaying them on the cart page

// Array to store cart items
let cart = [];

// Function to add item to cart
function addToCart(product, price, imageUrl) {
    const cartItem = {
        product: product,
        price: parseInt(price),
        imageUrl: imageUrl
    };
    cart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product} added to cart!`);
}

// Add event listeners to all "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const product = this.getAttribute('data-product');
        const price = this.getAttribute('data-price');
        const imageUrl = this.getAttribute('data-image');
        addToCart(product, price, imageUrl);
    });
});

// Function to display cart items on the cart page
function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceContainer = document.getElementById('total-price');
    let totalPrice = 0;

    const storedCart = JSON.parse(localStorage.getItem('cart'));

    if (storedCart && storedCart.length > 0) {
        cart = storedCart;
        cart.forEach(item => {
            const cartItemDiv = document.createElement('div');
            cartItemDiv.className = 'cart-item';
            cartItemDiv.innerHTML = `
                <img src="${item.imageUrl}" alt="${item.product}">
                <h3>${item.product}</h3>
                <p>Price: ₹${item.price}</p>
            `;
            cartItemsContainer.appendChild(cartItemDiv);
            totalPrice += item.price;
        });
    } else {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    }

    totalPriceContainer.innerText = totalPrice;
}

// Call displayCartItems function when on the cart page
if (window.location.pathname.includes('cart.html')) {
    displayCartItems();
}
