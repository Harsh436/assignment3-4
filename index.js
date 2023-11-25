function changeSelectId(selectElement) {
  const selectedValue = selectElement.value;
  const parentDiv = selectElement.closest(".converter");
  const otherSelect = selectElement.parentElement.classList.contains(
    "input-field-1"
  )
    ? parentDiv.querySelector(".input-field-2 select")
    : parentDiv.querySelector(".input-field-1 select");

  if (selectedValue === "usd") {
    otherSelect.value = "cad";
  } else if (selectedValue === "cad") {
    otherSelect.value = "usd";
  }
}

function convertCurrency() {
  const amountInput = document.getElementById("amount");
  const usdCurrencySelect = document.getElementById("usdCurrency");
  const cadAmountInput = document.getElementById("cadAmount");
  const cadCurrencySelect = document.getElementById("cadCurrency");

  const amount = parseFloat(amountInput.value);
  const cadAmount = parseFloat(cadAmountInput.value);
  var selectedUsdCurrency = usdCurrencySelect.value;
  var selectedCadCurrency = cadCurrencySelect.value;

  if (
    selectedUsdCurrency === "usd" &&
    selectedCadCurrency === "cad" &&
    amount
  ) {
    // Convert USD to CAD
    const usdToCadRate = 1.37; // Example conversion rate
    var convertedAmount = (parseFloat(amount) * usdToCadRate).toFixed(3);
    cadAmountInput.value = convertedAmount;
  } else if (
    selectedUsdCurrency === "cad" &&
    selectedCadCurrency === "usd" &&
    amount
  ) {
    // Convert CAD to USD
    const cadToUsdRate = 0.72; // Example conversion rate
    var convertedAmount = (parseFloat(amount) * cadToUsdRate).toFixed(3);
    cadAmountInput.value = convertedAmount;
  } else if (
    selectedUsdCurrency === "cad" &&
    selectedCadCurrency === "usd" &&
    cadAmount
  ) {
    // Convert USD to CAD
    const usdToCadRate = 1.37; // Example conversion rate
    var convertedAmount = (parseFloat(cadAmount) * usdToCadRate).toFixed(3);
    amountInput.value = convertedAmount;
  } else if (
    selectedUsdCurrency === "usd" &&
    selectedCadCurrency === "cad" &&
    cadAmount
  ) {
    // Convert CAD to USD
    const cadToUsdRate = 0.72; // Example conversion rate
    var convertedAmount = (parseFloat(cadAmount) * cadToUsdRate).toFixed(3);
    amountInput.value = convertedAmount;
  } else {
    // Handle invalid input
    alert("Please enter a valid amount.");
  }
}

const convertButton = document.getElementById("convertButton");
convertButton.addEventListener("click", convertCurrency);
