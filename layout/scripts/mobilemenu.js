var rel = [true, true];


function AnimateRotate(angleStart, angleStop) {
    // caching the object for performance reasons
    var $elem = $('#top');

    // we use a pseudo object for the animation
    // (starts from `0` to `angle`), you can name it as you want
    $({ deg: angleStart }).animate({ deg: angleStop }, {
        duration: 500,
        step: function (now) {
            // in the step-callback (that is fired each step of the animation),
            // you can use the `now` paramter which contains the current
            // animation-position (`0` up to `angle`)
            $elem.css({
                transform: 'rotate(' + now + 'deg)'
            });
        }
    });
}

function menu_activ() {
    $("#nav a").each(function () {
        var e = $(this);
        if ($(e).parents("ul ul ul").length >= 1) { $("<a />", { href: e.attr("href"), text: "- - " + e.text(), onclick: "clo()" }).appendTo("#mobile_menu div") }
        else if ($(e).parents("ul ul").length >= 1) { $("<a />", { href: e.attr("href"), text: "- " + e.text(), onclick: "clo()" }).appendTo("#manu div") }
        else if ($(e).parents("ul").length >= 1) { $("<a />", { href: e.attr("href"), text: "" + e.text(), onclick: "clo()" }).appendTo("#mobile_menu div") }
        else { $("<a />", { href: e.attr("href"), text: e.text(), onclick: "clo()" }).appendTo("#mobile_menu div") }
        // $("#mobile_menu div a").addEventListener("click", close, false);
    });
}

function stp() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    })
}


function clo() {

    if ($("#bars svg").hasClass("svg-inline--fa fa-times fa-w-12")) {
        $("#bars svg").attr("class", "svg-inline--fa fa-bars fa-w-14");
        $("#bars svg").css("color", "black");
        $(".blockquote").css({
            top: '+=110px'
        })
        $("#bar").css({
            width: '15%',

        })
        AnimateRotate(90, 0);
        $("#top").css({
            left: "-=100px",
            opacity: '1'
        })
        $("#icons").css({
            left: '-250px',
        });
        $("#box").css({
            width: '15%',

        });
        $('html, body').css({
            overflow: 'auto',
            height: 'auto'
        });
        $("#mobile_menu form").remove();
        $("#bar").css({
            "z-index": "3",
        })

        $(".github, .facebook").css({
            display: "none",
        })
    }




}

$("#bars").click(function mobile_menu() {
    if ($("#bars svg").hasClass("svg-inline--fa fa-bars fa-w-14") && rel[0] == true && rel[1] == true  && !(go[0]== true && go[1]==false) && $("#start")[0].getBoundingClientRect().top == 0) {

        rel = [false, false];

        $("#bars svg").attr("class", "svg-inline--fa fa-times fa-w-14");
        $("#bars svg").css("color", "#black");



        $('<form class="new" action="#"><div/></form>').appendTo("#mobile_menu");

        menu_activ();
        stp();

        $("#bar").css({
            "z-index": "0",
        })

        $("#mobile_menu").css({
            position: "relative",
            left: '-250px',
            top: "0"

        })

        $("#icons").css({
            top: "10px",
            left: "-250px"
        })

        $(".github, .facebook").css({
            display: "unset",
        })

        $("#grzegorz").css("display", "block");


        $('html, body').css({
            overflow: 'hidden',
            height: '100%'
        });



        $("#bar").animate({
            width: '100%',
        }, 500, function () {
            $(".blockquote").animate({
                top: '-=110px'

            }, 500, function () {

                $("#box").animate({
                    width: '100%',

                }, 500)

                $("#mobile_menu").animate({
                    left: '0',

                }, 500)

                $("#icons").animate({
                    left: '0',
                }, 500);



            });

        });


        AnimateRotate(0, 90);


        $("#top").animate({
            left: "+=100px",
            opacity: '0.6'
        }, 500);

        rel[0]=true;
        setTimeout(function(){
            rel[1]=true;
        },1000);



    }
    else if ($("#bars svg").hasClass("svg-inline--fa fa-times fa-w-12") && rel[0] == true && rel[1] == true) {
        $("#bars svg").attr("class", "svg-inline--fa fa-bars fa-w-14");
        $("#bars svg").css("color", "black");
        rel = [false, false];


        $("#mobile_menu").animate({
            left: '-250px',
        }, 500, function () {
            $(".blockquote").animate({
                top: '+=110px'

            }, 500, function () {

                $("#bar").animate({
                    width: '15%',

                }, 500)

                AnimateRotate(90, 0);

                $("#top").animate({
                    left: "-=100px",
                    opacity: '1'
                }, 500);

                $(".github, .facebook").css({
                    display: "none",
                })


            });

        });

        

        $("#icons").animate({
            left: '-250px',
        }, 500)

        $("#box").animate({
            width: '15%',

        }, 500)

        $('html, body').css({
            overflow: 'auto',
            height: 'auto'
        });

        setTimeout(function () {
            $("#mobile_menu form").remove();
        }, 500);

        setTimeout(function () {
            $("#bar").css({
                "z-index": "3",
            })
        }, 1500);

        rel[0]=true;
        setTimeout(function(){
            rel[1]=true;
        },1000);


    }

    else if ($("#bars svg").hasClass("svg-inline--fa fa-sort-down fa-w-10") && rel[0] == true && rel[1] == true &&  !(go[0]== false && go[1]==true)) {
        $("#bars svg").attr("class", "svg-inline--fa fa-sort-up fa-w-10");

        $('<form class="new2" action="#"><div/></form>').appendTo("#mobile_menu");
        rel = [false, false];


        menu_activ();
        stp();

        $('<div class=new3/>').appendTo("#mobile_menu");
        $('<a class="github2" href="#"><i class="fab fa-github"></i></a>').appendTo("#mobile_menu .new3 ");
        $('<a class="facebook2" href="#"><i class="fab fa-facebook"></i></a>').appendTo("#mobile_menu .new3 ");
        $('<p class="grzegorz_mobilne">Grzegorz Kikut</p>').appendTo("#mobile_menu .new3 ");


        $("#mobile_menu").css({
            position: "relative",
            top: '-500px',
            left: "0",
            'text-align': "center",

        })

        $("#mobile_menu").animate({
            top: "0"
        }, 500);


        $("#bar").animate({
            height: "450px"
        }, 500);

        $("#bars").animate({
            top: "20px",
        }, 200);


        $("#bar").css({
            "z-index": "5",
            "background-color": "rgba(207, 207, 207, 0.8)"
        })

        rel[0]=true;
        setTimeout(function(){
            rel[1]=true;
        },1000);


    }
    else if ($("#bars svg").hasClass("svg-inline--fa fa-sort-up fa-w-10") && rel[0] == true && rel[1] == true) {
        rel = [false, false];
        $("#bars svg").attr("class", "svg-inline--fa fa-sort-down fa-w-10");

        $("#bar").animate({
            height: "20px"
        }, 500);

        $("#bars").animate({
            top: "2px",
        }, 200);

        $("#mobile_menu").animate({
            top: "-500px"
        }, 500);

        setTimeout(function () {
            $("#bar").css({
                "background-color": "rgba(207, 207, 207, 0.6)"
            })
        }, 500)


        setTimeout(function () {
            $("#mobile_menu .new3").remove();
            $("#mobile_menu form").remove();
        }, 500);

        rel[0]=true;
        setTimeout(function(){
            rel[1]=true;
        },1000);

    }




})

