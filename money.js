// js fucnctions........./


function getIncomeValue(inputId) {
    const incomeInput = document.getElementById(inputId);
    const incomeText1 = incomeInput.value;
    const incomeAmount = parseFloat(incomeText1);
     if(incomeAmount == "") {
      alert("Income field cannot be empty ");
      document.getElementById("total-expenses").value = 0;
    } else if (incomeAmount < 0) {
      alert("retirn a positive number");
      document.getElementById("total-expenses").innerText = 0;
      document.getElementById("balance").innerText = 0;
      return 0 ;
    } else {
      return incomeAmount;
    }
  }
  // expenses section 
  function getExpensesInput(itemId) {
    const expensesInput = document.getElementById(itemId);
    const expensesAmountText = expensesInput.value;
    const expensesAmount = parseFloat(expensesAmountText);
    if (expensesAmount < 0) {
      alert("return a positive number");
      document.getElementById(itemId).value = 0;
    } else if (expensesInput.value == "") {
      alert("input field cannot be empty");
      document.getElementById(itemId).value = 0;
    } else {
      expensesInput.value = "";
      return expensesAmount;
    }
  }
  
  document.getElementById("income-total").addEventListener("click", function () {
    // Income amount
    const newIncomeAmount = getIncomeValue("income");
    
  
    // food amount
    const foodAmount = getExpensesInput("income-food");
  
  
    // Rent amount
    const rentAmount = getExpensesInput("income-rent");
  
    // clothes amount
    const clothesAmount = getExpensesInput("income-clothes");
  
    // total  expenses
    const totalExpense = document.getElementById("total-expense");
    const previousTotalText = totalExpense.innerText;
    const previousAmount = parseFloat(previousTotalText);
  
    const totalCost = clothesAmount + rentAmount + foodAmount;
    const newTotalAmount = totalCost + previousAmount;

    // console.log(foodAmount,rentAmount,clothesAmount,totalCost,previousAmount);

    totalExpense.innerText = totalCost;
  
  // error handing 
  const incomeText = getIncomeValue("income");
  let expensesText = newTotalAmount;
  if(incomeText < expensesText){
      alert("your  cannot greater than income ");
      document.getElementById('total-expense').innerText = 0;
      document.getElementById('remain-balance').innerText = 0;
  }
  
  
  
    // after shopping amount
    const afterShopping = document.getElementById("remain-balance");
    const afterShoppingText = afterShopping.innerText;
    const totalShopping = parseInt(newIncomeAmount) - parseInt( newTotalAmount);

    // console.log(totalShopping,newIncomeAmount,newTotalAmount);

    if(totalShopping < 0){
        afterShopping.innerText = 0;
    }
    else{
      afterShopping.innerText = totalShopping;
    }
    
  });
  
// btn function


  document.getElementById("savings-button").addEventListener("click", function() {

    const incomeInput2 = document.getElementById("income");
    const AmountText2 = incomeInput2.value;
    const incomeAmount2 = parseInt(AmountText2);

    // console.log(typeof incomeAmount2);
    // console.log(incomeAmount2, AmountText2);
   

    // saving percent
    const savingInfo = document.getElementById("percent");
    const savingPercentText = savingInfo.value;
    const savingPercent = parseFloat(savingPercentText);
    const savingAmount = parseFloat(AmountText2 * savingPercent) / 100;

    console.log(savingAmount,savingPercent,savingPercentText)

    // console.log(savingPercent,savingAmount);

    // saving amount

   document.getElementById("saving-income").innerText = savingAmount;
  
    // balance 
      const balanceInput = document.getElementById('remain-balance');
      const balanceAmount = parseFloat(balanceInput.innerText);
      
      // remaining balance 
      const remainingInput = document.getElementById('remaining-income');
      const remainingAmountText = parseInt(remainingInput.innerText);
  
      // total remaining balance 
      const totalRemainingAmount = parseFloat( balanceAmount) - parseFloat( savingAmount );
       remainingInput.innerText = totalRemainingAmount;

    //   console.log(balanceAmount,savingAmount,remainingInput);
      
  });

















