// script.js

// Mock account details (for demo purposes)
const validAccountNumber = '1234567890';
const validPin = '1234';
let accountBalance = 1000; // Starting balance

function withdraw() {
    const accountNumber = document.getElementById('accountNumber').value;
    const pin = document.getElementById('pin').value;
    const withdrawAmount = parseFloat(document.getElementById('withdrawAmount').value);
    const messageElement = document.getElementById('message');

    if (accountNumber !== validAccountNumber || pin !== validPin) {
        messageElement.textContent = 'Invalid account number or PIN.';
        messageElement.style.color = 'red';
        return;
    }

    if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
        messageElement.textContent = 'Please enter a valid withdrawal amount.';
        messageElement.style.color = 'red';
        return;
    }

    if (withdrawAmount > accountBalance) {
        messageElement.textContent = 'Insufficient balance.';
        messageElement.style.color = 'red';
        return;
    }

    // If everything is okay, process the withdrawal
    accountBalance -= withdrawAmount;
    messageElement.textContent = `Withdrawal successful! Remaining balance: $${accountBalance}`;
    messageElement.style.color = 'green';
}
