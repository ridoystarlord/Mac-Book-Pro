// Extra Memory Part Start
document
  .getElementById("memory-8gb-btn")
  .addEventListener("click", function () {
    let price = 0;
    setValue(price, "memory-cost");
    setValue(totalCost(), "total-price");
    setValue(totalCost(), "discount-total");
  });
document
  .getElementById("memory-16gb-btn")
  .addEventListener("click", function () {
    let price = 180;
    setValue(price, "memory-cost");
    setValue(totalCost(), "total-price");
    setValue(totalCost(), "discount-total");
  });
// Extra Memory Part END
// Extra Storage Part Start
document
  .getElementById("storage-256gb-btn")
  .addEventListener("click", function () {
    let price = 0;
    setValue(price, "storage-cost");
    setValue(totalCost(), "total-price");
    setValue(totalCost(), "discount-total");
  });
document
  .getElementById("storage-512gb-btn")
  .addEventListener("click", function () {
    let price = 100;
    setValue(price, "storage-cost");
    setValue(totalCost(), "total-price");
    setValue(totalCost(), "discount-total");
  });

document
  .getElementById("storage-1tb-btn")
  .addEventListener("click", function () {
    let price = 180;
    setValue(price, "storage-cost");
    setValue(totalCost(), "total-price");
    setValue(totalCost(), "discount-total");
  });
// Extra Storage Part END
// Delivery Part Start
document
  .getElementById("free-delivery-btn")
  .addEventListener("click", function () {
    let deliveryCost = 0;
    setValue(deliveryCost, "shipping-cost");
    setValue(totalCost(), "total-price");
    setValue(totalCost(), "discount-total");
  });
document
  .getElementById("paid-delivery-btn")
  .addEventListener("click", function () {
    let deliveryCost = 20;
    setValue(deliveryCost, "shipping-cost");
    setValue(totalCost(), "total-price");
    setValue(totalCost(), "discount-total");
  });
// Delivery Part END

// Common Function Start
function setValue(amount, id) {
  document.getElementById(id).innerText = amount;
}
function totalCost() {
  let totalPrice =
    1299 +
    parseInt(document.getElementById("storage-cost").innerText) +
    parseInt(document.getElementById("memory-cost").innerText) +
    parseInt(document.getElementById("shipping-cost").innerText);
  return totalPrice;
}

// Common Function END

// Bonus Start

document
  .getElementById("coupon-apply-btn")
  .addEventListener("click", function () {
    let couponCode = document.getElementById("coupon-code").value;
    if (couponCode == "stevekaku") {
      setValue(totalCost() - totalCost() / 5, "discount-total");
      resetCouponField();
    } else {
      console.log("Invalid Coupon");
      resetCouponField();
    }
  });

function resetCouponField() {
  document.getElementById("coupon-code").value = "";
}

// Bonus END
