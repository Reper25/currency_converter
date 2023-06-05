const apiKey = "46469b87404c72cea4c46adf";

// fetch currency options

fetch(`https://v6.exchangerate-api.com/v6/46469b87404c72cea4c46adf/latest/USD`)
  .then((response) => response.json())
  .then((data) => {
    const { supported_codes } = data;
    const selectElements = document.querySelectorAll("select");

    supported_codes.forEach((code) => {
      const optionElement = document.createElement("option");
      optionElement.value = code;
      optionElement.text = code;

      selectElements.forEach((select) => {
        select.appendChild(optionElement.cloneNode(true));
      });
    });
  })
  .catch((error) => {
    console.log("Error fetching currency options:", error);
  });


function convertCurrency() {
    const amountInput = document.getElementById("amountInput")
    const fromCurrency = document.getElementById("fromCurrency").value
    const toCurrency =document.getElementById("toCurrency").value
    const resultElement = document.getElementById("result")

    fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrency}/${toCurrency}`)
    .then(response => response.json())
    .then(data => {
        const {conversion_rate} = data;
        const convertedAmount = (amountInput.value * conversion_rate).toFixed(2);

        resultElement.innerHTML = `${amountInput.value} ${fromCurrency} = ${convertedAmount} ${toCurrency}`
    })

    .catch(error => {
        console.log("Error fetching exchange rate:", error);
    })
}


const convertBtn = document.getElementById("convertBtn")
convertBtn.addEventListener('click', convertCurrency)
N
// // Include api for currency change
// const api = "https://v6.exchangerate-api.com/v6/46469b87404c72cea4c46adf/latest/USD";

// // For selecting different controls
// let search = document.querySelector(".searchBox");
// let convert = document.querySelector(".convert");
// let fromCurrecy = document.querySelector(".from");
// let toCurrecy = document.querySelector(".to");
// let finalValue = document.querySelector(".finalValue");
// let finalAmount = document.getElementById("finalAmount");
// let resultFrom;
// let resultTo;
// let searchValue;

// // Event when currency is changed
// fromCurrecy.addEventListener('change', (event) => {
// 	resultFrom = `${event.target.value}`;
// });

// // Event when currency is changed
// toCurrecy.addEventListener('change', (event) => {
// 	resultTo = `${event.target.value}`;
// });

// search.addEventListener('input', updateValue);

// // Function for updating value
// function updateValue(e) {
// 	searchValue = e.target.value;
// }

// // When user clicks, it calls function getresults
// convert.addEventListener("click", getResults);

// // Function getresults
// function getResults() {
// 	fetch(`${api}`)
// 		.then(currency => {
// 			return currency.json();
// 		}).then(displayResults);
// }

// // Display results after conversion
// function displayResults(currency) {
// 	let fromRate = currency.rates[resultFrom];
// 	let toRate = currency.rates[resultTo];
// 	finalValue.innerHTML =
// 		((toRate / fromRate) * searchValue).toFixed(2);
// 	finalAmount.style.display = "block";
}

// When user click on reset button
function clearVal() {
	window.location.reload();
	document.getElementsByClassName("finalValue").innerHTML = "";
};
