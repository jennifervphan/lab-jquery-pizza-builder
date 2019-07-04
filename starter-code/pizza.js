// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {
    $(".green-pepper").hide();
    $(".mushroom").hide();
    $(".pep").hide();
    $(".price ul li").hide();

    $(".btn-pepperonni").click(function() {
        $(".pep").toggle();
        $(".price ul li:first").toggle();
        $(".btn-pepperonni").toggleClass("active");

        if ($(".btn-pepperonni").hasClass("active")) {
            totalPrice += pepPrice;
            $(".totalPrice").html(totalPrice);
        } else {
            totalPrice -= pepPrice;
            $(".totalPrice").html(totalPrice);
        }

    });

    $(".btn-mushrooms").click(function() {
        $(".mushroom").toggle();
        $(".price ul li:nth-child(2)").toggle();
        $(".btn-mushrooms").toggleClass("active");
        if ($('.btn-mushrooms').hasClass('active')) {
            totalPrice += mushPrice;
            $(".totalPrice").html(totalPrice);
        } else {
            totalPrice -= mushPrice;
            $(".totalPrice").html(totalPrice);

        }
    });

    $(".btn-green-peppers").click(function() {
        $(".green-pepper").toggle();
        $(".price ul li:nth-child(3)").toggle();
        $(".btn-green-peppers").toggleClass("active");
        if ($('.btn-green-peppers').hasClass('active')) {
            totalPrice += greenPrice;
            $(".totalPrice").html(totalPrice);
        } else {
            totalPrice -= greenPrice;
            $(".totalPrice").html(totalPrice);

        }

    });

    $(".btn-sauce").click(function() {
        $("#changeSauce").toggleClass("sauce-white");
        $(".price ul li:nth-child(4)").toggle();
        $("button.btn-sauce").toggleClass("active");
        if ($('.btn-sauce').hasClass('active')) {
            totalPrice += whitePrice;
            $(".totalPrice").html(totalPrice);
        } else {
            totalPrice -= whitePrice;
            $(".totalPrice").html(totalPrice);

        }
    });

    $(".btn-crust").click(function() {
        $("#changeCrust").toggleClass("crust-gluten-free");
        $(".price ul li:nth-child(5)").toggle();
        $("button.btn-crust").toggleClass("active");
        if ($('.btn-crust').hasClass('active')) {
            totalPrice += crustPrice;
            $(".totalPrice").html(totalPrice);
        } else {
            totalPrice -= crustPrice;
            $(".totalPrice").html(totalPrice);

        }
    });


    // $("button").click(
    //     function(e) {
    //         idClicked = e.target.id;
    //         var $total = $(totalPrice)
    //         var stri = '#' + String(idClicked);
    //         var striClass = "." + String(idClicked);
    //         console.log(stri);
    //         if ($(stri).hasClass("active")) {
    //             var tPrice = $total[0] + $(striClass).html();
    //             $(".totalPrice").html(tPrice);
    //         }
    //     });

});

// var pepPrice = 1;
// var mushPrice = 1;
// var greenPrice = 1;
// var whitePrice = 3;
// var crustPrice = 5;
// var totalPrice = 10;
// var idClicked;

// function calTotal() {
//     this.button = button;
//     if ($(`".${this.button}"`).hasClass("active")) {
//         this.totalPrice += $(`"#${this.button}"`).html;
//         $(".totalPrice").html(this.totalPrice);
//     }
// }