var Calculate = document.getElementById('Calculate');
// error function
function errorMessage(id) {
    const error = document.getElementById(id);
    error.style.display = 'block';
    error.style.textAlign = 'center';
    error.style.color = 'red';
}

Calculate.addEventListener('click', function () {
    var Income = document.getElementById('Income').value;
    var incomeAmount = parseFloat(Income);
    var Food = document.getElementById('Food').value;
    var foodAmount = parseFloat(Food);
    var Rent = document.getElementById('Rent').value;
    var rentAmount = parseFloat(Rent);
    var Clothes = document.getElementById('Clothes').value;
    var clothesAmount = parseFloat(Clothes);


    // error handle
    if ((incomeAmount === Number(incomeAmount) && incomeAmount > -1) && (foodAmount === Number(foodAmount) && foodAmount > -1) && (rentAmount === Number(rentAmount) && rentAmount > -1) && (clothesAmount === Number(clothesAmount) && clothesAmount > -1)) {
        // total expenses
        var totalCost = foodAmount + rentAmount + clothesAmount;
        var totalExpenses = document.getElementById('total-expenses');
        var totalExpensesNumber = parseFloat(totalExpenses.innerText = totalCost)

        if (incomeAmount >= totalExpensesNumber) {
            // balance
            var balance = document.getElementById('balance');
            balance.innerText = incomeAmount - totalExpensesNumber;
        } else {
            errorMessage('error-handle-massage3');
        }

    } else {
        errorMessage('error-handle-massage');
    }


})

var saveButton = document.getElementById('save');

saveButton.addEventListener('click', function () {
    var saveInputFild = document.getElementById('save-input-fild').value;
    var saveInputFildNumber = parseFloat(saveInputFild);
    var Income = document.getElementById('Income').value;
    var incomeAmount = parseInt(Income);
    var amount = parseInt(saveInputFildNumber / 100 * incomeAmount);

    var savingAmount = document.getElementById('saving-amount');
    var savingAmountNumber = parseInt(savingAmount.innerText = amount);

    var balance = document.getElementById('balance').innerText;
    var balanceNumber = parseInt(balance);

    if (balanceNumber >= savingAmountNumber) {
        var remainingAmount = document.getElementById('remaining-amount');
        remainingAmount.innerText = balanceNumber - savingAmountNumber;
    } else {
        errorMessage('error-handle-massage2');
    }
})
