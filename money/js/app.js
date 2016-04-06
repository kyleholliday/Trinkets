window.addEventListener('load', function(){
  var bank = require ('./bank');
  var makeWallet = require('./wallet');
  var wallet = makeWallet(500);
  wallet.setPrice(5);
  wallet.coins();
  wallet.trinkets();

  var buybutton = document.getElementById('buy');
  var sellbutton = document.getElementById('sell');
  buybutton.addEventListener('click',function(){
    console.log("Buy!");
    wallet.buy();
    wallet.coins();
    wallet.trinkets();
  });
  sellbutton.addEventListener('click',function(){
    console.log("Sell!");
    wallet.sell();
    wallet.coins();
    wallet.trinkets();
  });
  function store(price) {
    wallet.setPrice(price);
  }
  function periodic () {
    bank(store);
  }
  setInterval(periodic, 3000);
});
