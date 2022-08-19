
function phone(elementBol) {
    const totalPriceBalance = updateNumberWithSetValue(elementBol, 'phone-number-field', 1259);
    priceTotal(totalPriceBalance, 'phone-balance-field');
    subTotal();
    tax();
    total();
}
document.getElementById('phone-btn-plus').addEventListener('click', function () {
    phone(true);
})

document.getElementById('phone-btn-minus').addEventListener('click', function () {
    phone(false);
})