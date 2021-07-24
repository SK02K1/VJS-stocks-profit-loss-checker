const checkProfitLoss = (purchasePrice, quantity, currentPrice) => {
  const totalPurchasePrice = purchasePrice * quantity;
  const totalCurrentPrice = currentPrice * quantity;
  if (purchasePrice === currentPrice) {
    return [null, 0, 0, "no profit no loss"];
  } else if (purchasePrice > currentPrice) {
    const absoluteLossValue = parseFloat(
      (totalPurchasePrice - totalCurrentPrice).toFixed(2)
    );
    const percentageLossValue = parseFloat(
      ((100 * absoluteLossValue) / totalPurchasePrice).toFixed(2)
    );
    return [
      false,
      absoluteLossValue,
      percentageLossValue,
      "😔 You've made loss"
    ];
  } else {
    const absoluteProfitValue = parseFloat(
      (totalCurrentPrice - totalPurchasePrice).toFixed(2)
    );
    const percentageProfitValue = parseFloat(
      ((100 * absoluteProfitValue) / totalPurchasePrice).toFixed(2)
    );
    return [
      true,
      absoluteProfitValue,
      percentageProfitValue,
      "🤩 You've made profit"
    ];
  }
};

export { checkProfitLoss };
