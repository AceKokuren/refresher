const orderButtons = document.querySelectorAll("[data-order]")

orderButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const button = e.currentTarget;
        const container = button.parentNode;
        const pie = {
            id: button.dataset.order,
            title: container.querySelector(".title").innerText,
            price: container.querySelector(".price").innerText,
            desc: container.querySelector(".desc").innerText
        }
        localStorage.setItem("order", JSON.stringify(pie));
        window.location.href = "../order.html";
    })
})
