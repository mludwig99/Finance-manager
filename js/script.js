const sectionIncome = document.querySelector(".income-area");
const sectionExpenses = document.querySelector(".expenses-area");
const availableMoney = document.querySelector(".available-money");
const transactionPanel = document.querySelector(".add-transaction-panel");

const inputName = document.querySelector("#name");
const inputAmount = document.querySelector("#amount");
const selectCategory = document.querySelector("#category");

const transactionBtn = document.querySelector(".add-transaction");
const saveBtn = document.querySelector(".save");
const cancelBtn = document.querySelector(".cancel");
// const deleteBtn = document.querySelector(".delete");
const dleteAllBtn = document.querySelector(".delete-all");

let root = document.documentElement;
let ID = 0;
let categoryIcon;
let selectedCategory;
let moneyArr = [0];

const showPanel = () => {
  transactionPanel.style.display = 'flex';
};
const closePanel = () => {
  transactionPanel.style.display = 'none';
  clearInputs();
};

const checkForm = () => {
  if (
    inputName.value !== "" &&
    inputAmount.value !== "" &&
      selectCategory.value !== "none"
      
  ) {
    createNewTransaction();
      
  } else {
    alert("Some input data is not entered!");
  }
};

const clearInputs = () => {
  inputName.value = "";
  inputAmount.value = "";
  selectCategory.selectedIndex = 0;
};

const createNewTransaction = () => {
  const newTransaction = document.createElement("div");

  newTransaction.classList.add("transaction");
    newTransaction.setAttribute("id", ID);

    checkCategory(selectedCategory);

  newTransaction.innerHTML = `
        <p class="transaction-name">
                ${categoryIcon} ${inputName.value}
              </p>
              <p class="transaction-amount">
               ${inputAmount.value}zł
                <button class="delete" onclick="deleteTransaction(${ID})">
                  <i class="fa-solid fa-xmark"></i>
                </button>
              </p>`;

  inputAmount.value > 0
    ? sectionIncome.appendChild(newTransaction) &&
      newTransaction.classList.add("income")
    : sectionExpenses.appendChild(newTransaction) &&
      newTransaction.classList.add("expense");
    moneyArr.push(parseFloat(inputAmount.value));
    
    closePanel();
    ID++;
    clearInputs();
};

const selectCat = () => {
    selectedCategory =
      selectCategory.options[selectCategory.selectedIndex].text;
}


const checkCategory = (transaction) => {
  switch (transaction) {
    case '" + " Income':
      categoryIcon = '<i class="fa-solid fa-money-bill"></i>';
      break;
    case '" - " Shopping':
      categoryIcon = '<i class="fa-solid fa-cart-shopping"></i>';
      break;
    case '" - " Food':
      categoryIcon = '<i class="fa-solid fa-utensils"></i>';
      break;
    case '" - " Entertainment':
      categoryIcon = '<i class="fa-regular fa-futbol"></i>';
      break;
  }
};

transactionBtn.addEventListener("click", showPanel);
cancelBtn.addEventListener("click", closePanel);
saveBtn.addEventListener("click", checkForm, );
