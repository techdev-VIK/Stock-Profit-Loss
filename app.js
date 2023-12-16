
const company= document.getElementById("company")
const output = document.getElementById("output")


const submit = document.querySelector("#submit")


 submit.addEventListener('click', (e) =>{
  e.preventDefault();
  const UserSharePrice = parseInt(document.getElementById("sharePrice").value)
console.log(UserSharePrice)
const OwnedShares = parseInt(document.getElementById("OwnedShares").value)
console.log(OwnedShares)
const userChange = parseInt(document.getElementById("change").value)
console.log(userChange)

  const formData = [`Price Company ${UserSharePrice}`, `Quantity ${OwnedShares}`, `Change ${userChange}`]
  console.log(formData)

  output.innerText = calculateProfitOrLoss(formData)

  if (profit < 0) {
    output.style.color = 'red';
} else if (profit > 0) {
    output.style.color = 'green';
} else {
    output.style.color = 'black'; // Default color for zero profit
}
 })

//SharePrice - 100
//Shares - 20
//Change - 10
//Result - profit/loss  => here profit will be 120

// use this  array, take the shareprice then check the share and look for the change. Calculate the profit or loss depending on the Share Quantity and change in share price.



// const array = ["Price googl 100", "Quantity 20", "Change -10"];
// const array1 = ["Price appl 200", "Quantity 5", "Change  3"];
function calculateProfitOrLoss(arr) {
    let sharePrice, shareQuantity, change;
    
    for (let i = 0; i < arr.length; i++) {
     const num = parseInt(arr[i].split(" ").slice(-1)[0]);
    //   console.log(typeof num)
    // const num = (preNum[i].substr(-1))
    // console.log(num)

    if(arr[i][0] == "P"){
        sharePrice = num
        console.log(sharePrice)
    }
    if(arr[i][0] == "Q"){
        shareQuantity = num
        console.log(shareQuantity)
    }
    if(arr[i][0] == "C"){
        change = num
        console.log(change)
    }

    }
  // Calculate profit or loss
  const finalResult = [];
  let message1;
  let message2;
  if ((sharePrice !== undefined && shareQuantity !== undefined && change <= 99999)) {
   
    let originalPrice = sharePrice*shareQuantity;
    let newPrice = (sharePrice+change)*shareQuantity;
    let profitOrLoss = newPrice-originalPrice;
    finalResult.push(profitOrLoss, newPrice);
    message1 = "Your Net Income = " +finalResult[0] + " Dollars\r\n";
    message2 = "Your Current Fortune = " + finalResult[1] + " Dollars";
    console.log(message1+ message2);
  } else{
    return "Error! Please recheck your inputs";
  }

  return message1 + " \n" + message2
  
};
