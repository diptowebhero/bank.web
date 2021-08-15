//handle deposit button event
document.getElementById('deposit-button').addEventListener('click',function(){
    //get the amaount deposited
    const depositInput = document.getElementById('deposit-input');

    const newDepositAmaountText = depositInput.value;
    const newDepositAmaount = parseFloat(newDepositAmaountText);

    //update deposit-total
    const depositTotal = document.getElementById('deposit-total');
    const prviousDepositText = depositTotal.innerText;
    const prviousDepositAmount = parseFloat(prviousDepositText);

    const newDepositToatl = prviousDepositAmount + newDepositAmaount;
    depositTotal.innerText = newDepositToatl;



    //update account balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBlanceTotal = previousBalanceTotal + newDepositAmaount;
    balanceTotal.innerText = newBlanceTotal;

    //clear the deposit input
    depositInput.value = '';
})

//handle withdraw button event
document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmaountText = withdrawInput.value;
    const newWithdrawAmaount = parseFloat(withdrawAmaountText);
    console.log(withdrawAmaountText);

    //set withdraw total
    const widthdrawTotal = document.getElementById('withdraw-Total');
    const previousWithdrawText = widthdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);
    const newWithdarwTotal = previousWithdrawTotal + newWithdrawAmaount;
    widthdrawTotal.innerText = newWithdarwTotal;

    //update balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBlanceTotal = previousBalanceTotal - newWithdrawAmaount;

    balanceTotal.innerText = newBlanceTotal;

    //clear the withdraw input
    withdrawInput.value = '';
})


