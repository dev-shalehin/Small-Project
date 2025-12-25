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
  let totalExpence = 0;
  let totalIncome = 0;
function addExpence() {
  const expenseTitle = document.getElementById("expenseTitle").value;
  const expenseCategory = document.getElementById("expenseCategory").value;
  const expenseDate = new Date().toDateString();
  const expenseAmount = Number(document.getElementById("expenseAmount").value);

  if (!isNaN(expenseAmount) && expenseAmount > 0) {
    // Calling Expence add function
    creatingExpence(expenseTitle, expenseCategory, expenseDate, expenseAmount);
    totalExpence += expenseAmount;
    autoUpdate()
    
  } else alert("Please Enter Valid Input");

  document.getElementById("form").reset();
}

// Adding Expence
function addIncome() {
  const incomeInput = Number(document.getElementById("income").value);
  if(!isNaN(incomeInput) && incomeInput > 0){
    totalIncome+=incomeInput;
    autoUpdate();
  }

  incomeInput.value = "";

  // return totalIncome;
}

function autoUpdate(){
    const incomeDisplay = document.getElementById("incomeDisplay");
    const expence = document.getElementById("expence")
    incomeDisplay.textContent = totalIncome;

    if (totalExpence > totalIncome) {
      expence.textContent = `- ${totalExpence}`;
    } else {
      expence.textContent = totalExpence;
    }
}

// Control Switch
document.getElementById("addIncimeBtn").addEventListener("click", addIncome);
document.getElementById("addExpenseBtn").addEventListener("click", (e) => {
  e.preventDefault();
  addExpence();
});



const num = [3,6,89,45,76,90,32,34,67];
let height = -Infinity;
let second_height = -Infinity;

for (let n of num){
  if(n > height){
    second_height = height;
    height = n;
  }else if(n > second_height && n !=height){
    second_height =n;
  }
}

// console.log("Highest:", height);
console.log("Second Highest:", second_height);