(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function bank(store) {
      var request = new XMLHttpRequest();
      request.open('GET', 'http://trinkets.queencityiron.com/price');
      request.onload = function () {
        var data = JSON.parse(request.responseText);
        var exchange = document.getElementById('exchange');
        exchange.textContent = data.price;
        document.getElementById('exchange');
        exchange.textContent = (data.price.toFixed(2));

        store(data.price);
    };
    request.send();
};

},{}],2:[function(require,module,exports){
window.addEventListener('load', function(){
  var bank = require ('./bank');
  var makeWallet = require('./wallet');

  var newCoins = document.getElementById('coin-wealth');
  var newTrinket = document.getElementById('trinket-wealth');

  var wallet = makeWallet(5000);
  wallet.setPrice(5);

  var buybutton = document.getElementById('buy');
  var sellbutton = document.getElementById('sell');
  buybutton.addEventListener('click',function(){
    console.log("Buy!");
    wallet.buy();
  });
  sellbutton.addEventListener('click',function(){
    console.log("Sell!");
    wallet.sell();
  });
  function store(price) {
    wallet.setPrice(price);
  }
  function periodic () {
    bank(store);
  }
  setInterval(periodic, 3000);
});

},{"./bank":1,"./wallet":3}],3:[function(require,module,exports){
module.exports = function(starting) {
  var price = 10;
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

    },
    trinkets: function () {

    },
  };
};

},{}]},{},[2])