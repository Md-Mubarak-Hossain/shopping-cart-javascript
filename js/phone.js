

document.getElementById('phone-btn-plus').addEventListener('click', function () {
    updateNumberWithSetValue(true, 'phone-number-field');
})

document.getElementById('phone-btn-minus').addEventListener('click', function () {
    updateNumberWithSetValue(false, 'phone-number-field');
})