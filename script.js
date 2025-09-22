document.addEventListener('DOMContentLoaded', () => {
  const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
  const cartItemsList = document.getElementById('cart-items');
  const cartTotalElement = document.getElementById('cart-total');
  const cartCountElement = document.getElementById('cart-count');
  const cartModal = document.getElementById('cart-modal');
  const viewCartButton = document.getElementById('view-cart');
  const closeCartButton = document.getElementById('close-cart');

  let cart = [];

  // Add to Cart
  addToCartButtons.forEach(button => {
    button.addEventListener('click', event => {
      const productCard = event.target.closest('.product-card');
      const productTitle = productCard.querySelector('.product-title').textContent;
      const productPrice = parseFloat(productCard.querySelector('.product-price').textContent);

      cart.push({ title: productTitle, price: productPrice });
      updateCartUI();
    });
  });

  // Update Cart
  function updateCartUI() {
    cartItemsList.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
      const li = document.createElement('li');
      li.textContent =' ${item.title} - $${item.price.toFixed(2)}';
      cartItemsList.appendChild(li);
      total += item.price;
    });
    cartTotalElement.textContent = total.toFixed(2);
    cartCountElement.textContent = cart.length;
  }

  // Show/Hide Cart Modal
  viewCartButton.addEventListener('click', () => {
    cartModal.classList.remove('hidden');
  });
  closeCartButton.addEventListener('click', () => {
    cartModal.classList.add('hidden');
  });

  // Reviews
  document.querySelectorAll('.add-review-btn').forEach(button => {
    button.addEventListener('click', event => {
      const productCard = event.target.closest('.product-card');
      const reviewInput = productCard.querySelector('.review-input');
      const reviewList = productCard.querySelector('.review-list');

      if (reviewInput.value.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = reviewInput.value;
        reviewList.appendChild(li);
        reviewInput.value = '';
      }
    });
  });
});