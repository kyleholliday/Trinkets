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
