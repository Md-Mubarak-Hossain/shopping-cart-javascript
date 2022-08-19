


document.getElementById('case-btn-plus').addEventListener('click', function () {
    updateNumberWithSetValue(true, 'case-number-field');
})

document.getElementById('case-btn-minus').addEventListener('click', function () {
    updateNumberWithSetValue(false, 'case-number-field');
})