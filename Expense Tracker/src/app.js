// Genarating Expence List
function creatingExpence(title, catg, date, cost) {
  const creatingItem = document.createElement("li");
  creatingItem.classList.add("item");
  const titleSpan = document.createElement("span");
  titleSpan.classList.add("title");
  titleSpan.textContent = title;

  const catgSpan = document.createElement("span");
  catgSpan.classList.add("catg");
  catgSpan.textContent = catg;

  const dateSpan = document.createElement("span");
  dateSpan.classList.add("date");
  dateSpan.textContent = date;
  const costSpan = document.createElement("span");
  catgSpan.classList.add("cost");
  costSpan.innerHTML = `<b>৳</b> ${cost}`;

  creatingItem.append(titleSpan, catgSpan, dateSpan, costSpan);
  const expanceContainer = document.getElementById("expenceList");
  expanceContainer.appendChild(creatingItem);
  return creatingItem;
}

// Adding Expence
function addExpence() {
  const expenseTitle = document.getElementById("expenseTitle").value;
  const expenseCategory = document.getElementById("expenseCategory").value;
  const expenseDate = new Date().toDateString();
  const expenseAmount = Number(document.getElementById("expenseAmount").value);

  if (!isNaN(expenseAmount) && expenseAmount > 0) {
    // Calling Expence add function
    creatingExpence(expenseTitle, expenseCategory, expenseDate, expenseAmount);

    // const prevExpence = Number(expence.textContent) || 0;
    // const totalExpence = prevExpence + expenseAmount;
    // expence.innerHTML = totalExpence;

    const expence =
      (Number(document.getElementById("expence").textContent) || 0) +
      expenseAmount;

    const income =
      Number(document.getElementById("incomeDisplay").textContent) || 0;
    document.getElementById("expence").textContent = expence;
    if (income < expence) {
      document.getElementById("expence").textContent = `- ${expence}`;
      // console.log('hi');
    } else {
      document.getElementById("expence").textContent = expence;
      // console.log('hlw');
    }

    // const expence = Number(document.getElementById('expence').textContent) || 0;
    // const prevExpence = Number(expence.textContent) ;
    // expence.textContent = prevExpence + expenseAmount;
    // console.log(expence);

    // const income = document.getElementById('incomeDisplay');
    // if(income< expence){
    //   document.getElementById('expence').textContent = ;
    // }else{
    //   document.getElementById('expence').textContent = expence;
    // }
  } else alert("Please Enter Valid Input");

  document.getElementById("form").reset();
}

// Adding Expence
function addIncome() {
  const incomeInput = document.getElementById("income");
  const incomeDisplay = document.getElementById("incomeDisplay");
  // const expence = document.getElementById('expence');

  const income = Number(incomeInput.value) || 0;
  const prevIncome = Number(incomeDisplay.innerText) || 0;
  const totalExpence = Number(expence.textContent) || 0;

  const totalIncome = prevIncome + income;
  incomeDisplay.innerText = totalIncome;

  // if(totalExpence > totalIncome){
  //   expence.textContent = `-${totalExpence}`
  // }else expence;

  incomeInput.value = "";

  return totalIncome;
}


// Control Switch
document.getElementById("addIncimeBtn").addEventListener("click", addIncome);
document.getElementById("addExpenseBtn").addEventListener("click", (e) => {
  e.preventDefault();
  addExpence();
});


