
// total phone prices
function updatePhoneCount(isIncrease) {

    const phoneNumber = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumber.value;
    const previousPhoneNumber = parseInt(phoneNumberString);
    let newPhoneNumber;
    if (isIncrease === true) {
        newPhoneNumber = previousPhoneNumber + 1;
        phoneNumber.value = newPhoneNumber;
    }
    else {
        newPhoneNumber = previousPhoneNumber - 1;
        phoneNumber.value = newPhoneNumber;
    }

    const balance = newPhoneNumber * 1259;
    const updateBalance = document.getElementById('phone-balance-field');
    updateBalance.innerText = balance;
    return balance;
}
document.getElementById('phone-btn-plus').addEventListener('click', function () {
    updatePhoneCount(true);
})
document.getElementById('phone-btn-minus').addEventListener('click', function () {
    updatePhoneCount(false);
})
