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
