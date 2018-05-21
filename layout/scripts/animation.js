var prawda = [];
$(document).ready(function () { 
    $("#me").css({
        "position": "relative",
        "opacity": "0",
        "left": "500px",
    });
    $(".a").css({
        "position": "relative",
        "opacity": "0",
        "left": "500px",
    });

    $(".b").css({
        "position": "relative",
        "opacity": "0",
        "left": "-500px",
    });
    $("#programowanie").css({
        "position": "relative",
        "opacity": "0",
        "top": "500px",
    });
    $(".c").css({
        "position": "relative",
        "opacity": "0",
        "left": "-500px",
    });

    $(".d").css({
        "position": "relative",
        "opacity": "0",
        "left": "500px",
    });


    anim(); 
});

$(document).scroll(anim = function () {
    if ($(".photo")[0].getBoundingClientRect().top < $(window).height()  && prawda[0] != 1) {

        $("#me").animate({
            opacity: 1,
            left: "0",
        }, 1000);

        prawda[0] = 1;

    }

    if ($("#projects")[0].getBoundingClientRect().top < $(window).height() - 50 && prawda[1] != 1) {


        $(".a").animate({
            opacity: 1,
            left: "0",
        }, 1000);

        $(".b").animate({
            opacity: 1,
            left: "0",
        }, 1000);

        prawda[1] = 1;

    }

    if ($(".p")[0].getBoundingClientRect().top < $(window).height() && prawda[2] != 1) {


        $("#programowanie").animate({
            opacity: 1,
            top: "0",
        }, 2000);

        prawda[2] = 1;
    }

    if ($(".c")[0].getBoundingClientRect().top < $(window).height() + 50 && prawda[3] != 1) {


        $(".c").animate({
            opacity: 1,
            left: "0",
        }, 1000);

        $(".d").animate({
            opacity: 1,
            left: "0",
        }, 1000);

        prawda[3] = 1;

    }

})