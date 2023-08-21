let totalPrice = 0;
let discount = 0;
let newPrice = 0;

let count = 1;
function getNameAndPrice(element) {
    // get name of the clicked element
    const name = element.querySelector("#name").innerText;
    // get price of the clicked element
    const priceText = element.querySelector("#price").innerText;
    const priceValue = parseFloat(priceText);
    totalPrice += priceValue;
    newPrice += priceValue;
    // create element p
    const p = document.createElement("p");
    p.innerHTML = `<p class="py-1"><span>${count++}</span>. <span>${name}</span> </p>`;
    // insert element p in the product cart
    const parentCartViewer = document.getElementById("selected-on-cart");
    parentCartViewer.appendChild(p);
    // show totalPrice and Total
    document.getElementById("total-price").innerText = totalPrice.toFixed(2);
    document.getElementById("new-price").innerText = newPrice.toFixed(2);
    // if the total price is greater than 200, activate apply button
    if (totalPrice > 200) {
        document.getElementById("apply-coupon").disabled = false;
    } else {
        document.getElementById("apply-coupon").disabled = true;
    }
    if (totalPrice > 0) {
        document.getElementById("make-purchase").disabled = false;
    }
}

// on click apply button
const couponCode = "SELL200";
document.getElementById("apply-coupon").addEventListener("click", function () {
    if (
        document.getElementById("input-coupon-code").value.trim() !== couponCode
    ) {
        alert("Invalid coupon, please enter a valid coupon");
        return;
    }
    document.getElementById("input-coupon-code").value = "";
    let discount = 0;
    if (totalPrice > 200) {
        discount = (totalPrice - 200) * (20 / 100);
    }
    if (discount == 0) {
        return;
    }
    newPrice = totalPrice - discount;
    document.getElementById("discount").innerText = discount.toFixed(2);
    document.getElementById("new-price").innerText = newPrice.toFixed(2);
});

// go home
function goHome() {
    // document.location.href = "./index.html";
    // or
    document.getElementById("selected-on-cart").innerText = "";
    document.getElementById("total-price").innerText = "0";
    document.getElementById("discount").innerText = "0";
    document.getElementById("new-price").innerText = "0";
    document.getElementById("apply-coupon").disabled = true;
    document.getElementById("make-purchase").disabled = true;
    totalPrice = 0;
    discount = 0;
    newPrice = 0;
    count = 1;
}
