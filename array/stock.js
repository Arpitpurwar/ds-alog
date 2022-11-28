var maxProfit = function (prices) {
  let maxProfit = 0;
  let cheapestPrice = prices[0];

  for (let i = 0; i < prices.length; i++) {
    const price = prices[i];

    if (price < cheapestPrice) {
      cheapestPrice = price;
    }

    const currentProfit = price - cheapestPrice;
    maxProfit = Math.max(currentProfit, maxProfit);
  }

  return maxProfit;
};

// tests
console.log(
  "[7, 1, 5, 3, 6, 4] expects 5",
  maxProfit([7, 1, 5, 3, 6, 4]) === 5
);
console.log("[7, 6, 4, 3, 1] expects 0", maxProfit([7, 6, 4, 3, 1]) === 0);
