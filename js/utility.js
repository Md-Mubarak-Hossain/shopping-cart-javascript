function updateNumberWithSetValue(isIncrease, elementId) {
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
}
