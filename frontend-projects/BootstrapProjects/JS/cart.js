document.addEventListener("DOMContentLoaded", () => {
  const image = sessionStorage.getItem("itemImage");
  const title = sessionStorage.getItem("itemTitle");
  const desc = sessionStorage.getItem("itemDesc");
  const price = sessionStorage.getItem("itemPrice");

  document.getElementById("cartImage").src = image;
  document.getElementById("cartTitle").innerText = title;
  document.getElementById("cartDescription").innerText = desc;
  document.getElementById("cartPrice").innerText = price;
});
