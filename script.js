let total = 0;
let totalPrice = 0;
let newPrice = 0;

function handleClick(target) {
    const selectedItemContainer = document.getElementById("selected-item");
    // console.log(target.parentNode.childNodes[6]);
    const itemName = target.parentNode.childNodes[5].innerText;
    // console.log(itemName);
    const li = document.createElement("li");
    li.innerText = itemName;
    selectedItemContainer.appendChild(li);
    //
    const price = target.parentNode.childNodes[7].innerText.split(" ")[0];
    totalPrice = parseFloat(totalPrice) + parseFloat(price);
    document.getElementById("total-price").innerText = totalPrice;
    //
    if (totalPrice > 200) {
        document.getElementById("apply-btn").disabled = false;
    } else {
        document.getElementById("apply-btn").disabled = true;
    }
    if (totalPrice > 0) {
        document.getElementById("make-purchase-btn").disabled = false;
    }
}


document.getElementById("apply-coupon").addEventListener("click", function () {
    if (document.getElementById("couponField").value.trim() !== "SALE200") {
        alert("Please enter a valid coupon code");
        return;
    }
    document.getElementById("couponField").value = "";
    let discount = 0;
    if (totalPrice > 200) {
        discount = (totalPrice - 200) * 0.2;
    }
    if (discount == 0) {
        return;
    }
    newPrice = totalPrice - discount;
    document.getElementById("discount").innerText = discount.toFixed(2);
    document.getElementById("new-price").innerText = newPrice.toFixed(2);
});