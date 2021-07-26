import { checkProfitLoss } from "./modules/functions.js";

const form = document.querySelector("form");
const purchasePriceInputField = document.querySelector("#stock-purchase-price");
const quantityInputField = document.querySelector("#stock-quantity");
const currentPriceInputfield = document.querySelector("#stock-current-price");
const checkBtn = document.querySelector(".check-btn");
const resetBtn = document.querySelector(".reset-btn");
const messageContainer = document.querySelector(".message");
const outputContainer = document.querySelector(".output-container");
const absoluteValueContainer = document.querySelector(".absolute-value");
const percentageValueContainer = document.querySelector(".percentage-value");
const body = document.querySelector("body");
const profitSoundEffect = document.querySelector(".sound-effect-profit");
const lossSoundEffect = document.querySelector(".sound-effect-loss");

form.addEventListener("submit", (e) => e.preventDefault());

checkBtn.addEventListener("click", () => {
  const purchasePrice = parseFloat(purchasePriceInputField.value, 10);
  const quantity = parseFloat(quantityInputField.value, 10);
  const currentPrice = parseFloat(currentPriceInputfield.value, 10);

  if (
    isNaN(purchasePrice) === false &&
    isNaN(quantity) === false &&
    isNaN(currentPrice) === false
  ) {
    if (
      purchasePrice > 0 &&
      quantity > 0 &&
      currentPrice > 0 &&
      Number.isInteger(quantity)
    ) {
      const [result, absoluteValue, percentageValue, message] = checkProfitLoss(
        purchasePrice,
        quantity,
        currentPrice
      );

      messageContainer.innerText = "calculating ... ";
      outputContainer.style.display = "none";

      setTimeout(() => {
        if (result === false) {
          if (percentageValue > 50) {
            body.style.background = "red";
          } else {
            body.style.background = "#E6611B";
          }
          lossSoundEffect.play();
        } else if (result === true) {
          body.style.background = "#85E453";
          profitSoundEffect.play();
        } else {
          body.style.background = "#8685ef";
        }
        messageContainer.innerText = message;
        outputContainer.style.display = "block";
        absoluteValueContainer.innerText = `Absolute value - ${absoluteValue}rs`;
        percentageValueContainer.innerText = `Percentage value - ${percentageValue}%`;
      }, 1000);
    } else {
      body.style.background = "#8685ef";
      messageContainer.innerText = "";
      outputContainer.style.display = "none";
    }
  } else {
    body.style.background = "#8685ef";
    messageContainer.innerText = "";
    outputContainer.style.display = "none";
  }
});

resetBtn.addEventListener("click", () => {
  body.style.background = "#8685ef";
  messageContainer.innerText = "";
  outputContainer.style.display = "none";
});
