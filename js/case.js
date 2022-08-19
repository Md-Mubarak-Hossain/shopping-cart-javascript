function phonecase(elementBol) {
    const totalPriceBalance = updateNumberWithSetValue(elementBol, 'case-number-field', 59);
    priceTotal(totalPriceBalance, 'case-balance-field');
    subTotal();
    tax();
    total();
}
document.getElementById('case-btn-plus').addEventListener('click', function () {
    phonecase(true);

})

document.getElementById('case-btn-minus').addEventListener('click', function () {
    phonecase(false);
})


