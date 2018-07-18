$(document).ready(function() {


 var panier = {}
  $("section").append('<h2 class="text-center subtitle"></h2>"Spring Summer 2017"<div class="row" id="main">')

  for (var i = 0; i < catalog.length; i++) {
    var html = '<div class="col-xl-2  col-sm-6 col-xs-12 col-md-4 article">\
          <a href="product.html">\
                <div class="card">\
                      <img class="card-img-top" src="https://picsum.photos/200/300/?random"\ alt="Card image cap">\
                      <div class="card-body">\
                            <h3 class="card-text">buy</h3>\
                            <h4 class="card-text">trololo</h4>\
                            <p class="card-text">$154.45</p>\
                      </div>\
                </div>\
          </a>\
    </div>'
    $("#main").append(html)
  }

  function savePanier() {
    var panier_json = JSON.stringify(panier);
    sessionStorage.setItem("panier", panier_json);
  }

  function loadPanier() {
    var panier_json = sessionStorage.getItem("panier");
    panier = JSON.parse(panier_json) || {};
  }



  loadPanier();
  console.log(panier);
  $(".btn_add").click(function() {
    productId = $(this).val()
    if (panier[productId]) {
      panier[productId]++
    } else {
      panier[productId] = 1
    }
    savePanier();

    console.log(panier);


  })

});
