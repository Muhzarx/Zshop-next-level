// Simple cart badge simulation
let cartCount = 0;

document.querySelectorAll('.add-cart').forEach(btn => {
  btn.addEventListener('click', () => {
    cartCount++;
    localStorage.setItem('cartCount', cartCount);
    updateCartBadge();
    alert('Produk ditambahkan ke keranjang!');
  });
});

function updateCartBadge() {
  const badge = document.querySelectorAll('#cart-count');
  badge.forEach(b => b.textContent = localStorage.getItem('cartCount') || 0);
}

updateCartBadge();
