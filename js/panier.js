$(document).ready(function() {
    var panier = {};

    function displayCart() {
            $("#panierUl").html("")
            var total = $("<p class='total'>")
            var addPrice = 0
            for (productId in panier) {
                $("#panierUl").append($(`
                    <div class="col-sm-12 col-md-2">\
                              <img src="https://picsum.photos/200/100/?random" class="img-fluid"\ alt="">\
                        </div>\
                        <div class="col-sm-12 col-md-4">\
                              <h3>Trololo</h2>\
                        </div>\
                        <div class="col-sm-12 col-md-3">\
                            <div class="row">\
                                <div class="col-6 col-lg-12">\
                                    <p>1616€</p>\
                                </div>\
                                <div class="col-6 col-lg-12">\
                                <select class="" name="">\
                                    <option value="1">1</option>\
                                    <option value="2">2</option>\
                                    <option value="3">3</option>\
                                    <option value="4">4</option>\
                                    <option value="5">5</option>\
                                    <option value="6">6</option>\
                                </select>\
                                </div>\
                            </div>\
                        </div>`))

                addPrice += catalog[productId].price * panier[productId]
            }

            $(".quezac").append(total.html(addPrice))
                    addClick()
                    remClick()

                }

                loadPanier();

                console.log(panier);
                displayCart()
                function addClick(){
                    $(".btn_add").click(function() {
                    productId = $(this).val()
                    if (panier[productId]) {
                        panier[productId]++
                            console.log(panier);
                    } else {
                        panier[productId] = 1
                    }
                    savePanier();
                    console.log(panier);
                    displayCart()
                })}


                function remClick(){
                    $(".btn_less").click(function() {
                    productId = $(this).val()
                    if (panier[productId]) {
                        panier[productId] -= 1
                            console.log(panier);
                    }

                    savePanier();
                    displayCart()
                })}


































});
