async function convertCurrency(){

  const amount = document.getElementById("amount").value;

  const fromCurrency =
    document.getElementById("fromCurrency").value;

  const toCurrency =
    document.getElementById("toCurrency").value;

  const result =
    document.getElementById("result");

  if(amount <= 0){
    result.innerHTML = "Please enter valid amount";
    return;
  }

  const url =
    `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;

  try{

    const response = await fetch(url);

    const data = await response.json();

    const rate = data.rates[toCurrency];

    const convertedAmount =
      (amount * rate).toFixed(2);

    result.innerHTML =
      `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;

  }
  catch(error){

    result.innerHTML =
      "Error fetching exchange rates";

  }

}