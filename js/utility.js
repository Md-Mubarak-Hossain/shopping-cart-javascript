
function updateNumberWithSetValue(isIncrease, elementId, perPrice) {
    const inputNumberElement = document.getElementById(elementId);
    const inputNumberElementString = inputNumberElement.value;
    const inputValue = parseInt(inputNumberElementString);
    let number;
    if (isIncrease === true) {
        number = inputValue + 1;
    }
    else {
        number = inputValue - 1;
    }
    inputNumberElement.value = number;
    const priceTotal = number * perPrice;
    return priceTotal;
}

function priceTotal(number, elementId) {
    const priceField = document.getElementById(elementId);
    priceField.innerText = number;
}

function subTotal() {
    const phone = document.getElementById('phone-balance-field');
    const phoneString = phone.innerText;
    const totalPhonePrice = parseFloat(phoneString);
    const phonecase = document.getElementById('case-balance-field');
    const phonecaseString = phonecase.innerText;
    const totalCasePrice = parseFloat(phonecaseString);
    const subTotal = totalPhonePrice + totalCasePrice;
    const subTotalElement = document.getElementById('subTotal');
    subTotalElement.innerText = subTotal;
    return subTotal;
}

function tax() {
    const tax = subTotal() * .0123;
    const taxFixed = parseFloat(tax.toFixed(2));
    const taxField = document.getElementById('tax');
    taxField.innerText = taxFixed;
    return taxFixed;
}
function total() {
    const total = subTotal() + tax();
    const totalField = document.getElementById('total');
    totalField.innerText = total;
}