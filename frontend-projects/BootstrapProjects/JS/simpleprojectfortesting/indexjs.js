// js/script.js

function buyNow(imageUrl, name, price) {
  localStorage.setItem("buyImage", imageUrl);
  localStorage.setItem("buyName", name);
  localStorage.setItem("buyPrice", price);
  window.location.href = "buy.html";
}

function addToCart(imageUrl, name, price) {
  localStorage.setItem("cartImage", imageUrl);
  localStorage.setItem("cartName", name);
  localStorage.setItem("cartPrice", price);
  window.location.href = "cart.html";
}
