document.addEventListener("DOMContentLoaded", () => {
  const image = sessionStorage.getItem("itemImage");
  const title = sessionStorage.getItem("itemTitle");
  const desc = sessionStorage.getItem("itemDesc");
  const price = sessionStorage.getItem("itemPrice");

  document.getElementById("buyImage").src = image;
  document.getElementById("buyTitle").innerText = title;
  document.getElementById("buyDescription").innerText = desc;
  document.getElementById("buyPrice").innerText = price;
});
