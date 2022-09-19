var r = "";
var a = "";
var s = "";
var o = "FE000ECOMM";
var t = "FE00ECOMMWS";
var c = "";
var n = "search";
var l = "allocate";
var u = "updateAccount";
var d = "";
$(document).ready(function() {
    if (window.location.href.indexOf("imag-dev") > -1) {
        r = "15c963db-bf17-48c1-a5b9-55b9ea32acba";
        a = "K8QK1R6YQMFEOC1F37C5";
        c = "https://api-stage.clutch.com/merchant/";
        s = "ForE6219"
    } else {
        r = "9f489883-bdd2-42e6-8699-8fef01a46d5c";
        a = "XIJF0ZD3UR8VQI8AG3UJ";
        c = "https://api.clutch.com/merchant/";
        s = "ForE8377"
    }
});
var f = function(e) {
    $(".subscribe-form").addClass("spinner");
    $(".field_error").html("");
    e.setRequestHeader("Authorization", "Basic " + btoa(r + ":" + a));
    e.setRequestHeader("Brand", s);
    e.setRequestHeader("Location", o);
    e.setRequestHeader("Terminal", t)
};
var m = function(e) {
    if (e.success) {
        $(".field_success").html("Thank you for signing up!").addClass("success");
        $(".subscribe-form").removeClass("spinner").hide()
    } else {
        console.log(e);
        $(".field_error").html("We're sorry, there was an error completing your request.")
    }
};
var h = function(e) {
    $(".field_error").html("We're sorry, there was an error completing your request.");
    console.log(e)
};
var b = function(e) {
    console.log(e);
    if (e.success) {
        var r = e.cardNumber;
        var a = {
            cardNumber: r,
            countAsEnrollment: !0,
            primaryCustomer: {
                email: d
            }
        };
        a = JSON.stringify(a);
        $.ajax({
            type: "POST",
            beforeSend: f,
            url: c + u,
            data: a,
            processData: !1,
            success: m,
            error: h
        })
    } else {
        $(".field_error").html("We're sorry, there was an error completing your request.");
        console.log(e)
    }
};
var y = function(e) {
    $(".field_error").html("We're sorry, there was an error completing your request.");
    console.log(e)
};
successfulSearch = function(e) {
    if (e.success) {
        if (e.cards.length) {
            for (i = 0; i < e.cards.length; i++) {
                var r = {
                    cardNumber: e.cards[i].cardNumber,
                    thirdPartyUpdates: [{
                        thirdParty: "email",
                        optIn: !0
                    }]
                };
                r = JSON.stringify(r);
                $.ajax({
                    type: "POST",
                    beforeSend: f,
                    url: c + u,
                    data: r,
                    processData: !1,
                    success: m,
                    error: h
                })
            }
        } else {
            var a = {
                cardSetId: "ForEyes4Combo"
            };
            a = JSON.stringify(a);
            $.ajax({
                type: "POST",
                beforeSend: f,
                url: c + l,
                data: a,
                processData: !1,
                success: b,
                error: y
            })
        }
    } else {
        $(".field_error").html("We're sorry, there was an error completing your request.");
        console.log(e)
    }
}
;
errorSearch = function(e) {
    $(".field_error").html("We're sorry, there was an error completing your request.");
    console.log(e)
}
;
function isEmail(e) {
    var r = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return r.test(e)
}
$(document).ready(function() {
    $("#subscribe-submit").on("click", function(e) {
        e.preventDefault();
        d = $("#subscriber-email").val();
        if (isEmail(d)) {
            var r = {
                filters: {
                    email: d
                }
            };
            r = JSON.stringify(r);
            $.ajax({
                type: "POST",
                beforeSend: f,
                url: c + n,
                data: r,
                processData: !1,
                success: successfulSearch,
                error: errorSearch
            })
        } else {
            $(".field_error").html("Please enter a valid email.")
        }
    })
});
