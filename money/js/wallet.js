module.exports = function(starting) {
  var trinkets = 0;
  var coins = starting;
  return {
    buy: function () {
      if (coins >= price) {
        trinkets = trinkets + 1;
        coins = coins - price;
        console.log("coins: " + coins);
        console.log("trinkets: " + trinkets);
      }
    },
    sell: function () {
      if (trinkets > 0) {
        trinkets = trinkets - 1;
        coins = coins + price;
        console.log("coins: " + coins);
        console.log("trinkets: " + trinkets);
      }
    },
    setPrice: function (num) {
      price = num;
    },
    coins: function () {
      var coinWealth = document.getElementById("coin-wealth");
      coinWealth.textContent = coins.toFixed(2);
      return coinWealth;
    },
    trinkets: function () {
      var trinketWealth = document.getElementById("trinket-wealth");
      trinketWealth.textContent = trinkets;
      return trinketWealth;
    },
  };
};
