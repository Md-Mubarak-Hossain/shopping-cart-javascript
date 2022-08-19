

function updateCaseNumber(isIncrease) {
    const caseNumber = document.getElementById('case-number-field');
    const caseNumberString = caseNumber.value;
    let newCaseNumber;
    const previousCaseNumber = parseInt(caseNumberString);
    if (isIncrease === true) {
        newCaseNumber = previousCaseNumber + 1;
        caseNumber.value = newCaseNumber;
    }
    else {
        newCaseNumber = previousCaseNumber - 1;
        caseNumber.value = newCaseNumber;
    }
    const balance = newCaseNumber * 59;
    const updateBalance = document.getElementById('case-balance-field');
    updateBalance.innerText = balance;

}

document.getElementById('case-btn-plus').addEventListener('click', function () {
    updateCaseNumber(true);

})
document.getElementById('case-btn-minus').addEventListener('click', function () {
    updateCaseNumber(false);
})