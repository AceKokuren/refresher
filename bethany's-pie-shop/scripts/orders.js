const pieDetails = localStorage.getItem("order");
const orderDetails = document.querySelector(".pie");

if (pieDetails) {
    const pieOrder = JSON.parse(pieDetails);
    orderDetails.querySelector("img").src = `../images/${pieOrder.id}.png`
    orderDetails.querySelector(".title").innerText = pieOrder.title;
    
}