// zmienne
var ile_2 = 0;
var time_2 = 0;
var y, x;
var status;
var how_many;
var val2 = true;
var font_bottom = '24px';
var font_standard = '28px';

var posT = [];
var posB = [];
var tab = [];
// alert($( '#li'+ ile_2).length);

//zegar

var timer_2 = setInterval(function () {
    time_2 = time_2 + 1;
}, 10);

// detekcja kierunku przewijania

var el = $(window),
    lastY = el.scrollTop();

el.on('scroll', function () {
    var currY = el.scrollTop();
    y = (currY > lastY) ? 'down' : ((currY === lastY) ? 'none' : 'up');
    lastY = currY;
});


// funkcja przemieszczenia top to bottom
function TtB() {
    // alert();
    time_2 = 0;
    status = 'change';
    how_many = 0;
    var loop = setInterval(function () {
        for (i = 0; i < ile_2; i++) {
            tab[i] = [posT[i][0] + Math.exp(time_2 / 5), posT[i][1] + 150 * Math.log(time_2 * 2)];

            if (tab[i][0] > posB[i][0] && tab[i][1] > posB[i][1]) {
                how_many++;
                $("#li" + (i + 1)).css({
                    "position": "absolute",
                    "left": posB[i][0],
                    "top": posB[i][1]
                });
                if (how_many == ile_2) {
                    clearTimeout(time_2);
                    clearTimeout(loop);
                    status = 'middle';
                }


            }

            else if (tab[i][0] > posB[i][0]) {
                how_many = 0;
                $("#li" + (i + 1)).css({
                    "position": "absolute",
                    "left": posB[i][0],
                    "top": tab[i][1]
                });
            }


            else if (tab[i][1] > posB[i][1]) {
                how_many = 0;
                $("#li" + (i + 1)).css({
                    "position": "absolute",
                    "left": tab[i][0],
                    "top": posB[i][1]
                });
            }


            else {
                how_many = 0;
                $("#li" + (i + 1)).css({
                    "position": "absolute",
                    "left": tab[i][0],
                    "top": tab[i][1]
                });
            }
        }
    }, 10)
}


// funkcja przemieszczenia bottom to top

function BtT() {
    status = 'change';
    how_many = 0;
    time_2 = 0;
    var loop = setInterval(function () {
        for (i = 0; i < ile_2; i++) {
            tab[i] = [posB[i][0] - time_2 * time_2 / 4, posB[i][1] - time_2 * time_2 / 5];

            if (tab[i][0] < posT[i][0] && tab[i][1] < posT[i][1]) {
                how_many++;
                $("#li" + (i + 1)).css({
                    "position": "absolute",
                    "left": posT[i][0],
                    "top": posT[i][1]
                });
                if (how_many == ile_2) {
                    clearTimeout(time_2);
                    clearTimeout(loop);
                    status = 'top';
                }


            }

            else if (tab[i][0] < posT[i][0]) {
                how_many = 0;
                $("#li" + (i + 1)).css({
                    "position": "absolute",
                    "left": posT[i][0],
                    "top": tab[i][1]
                });
            }


            else if (tab[i][1] < posT[i][1]) {
                how_many = 0;
                $("#li" + (i + 1)).css({
                    "position": "absolute",
                    "left": tab[i][0],
                    "top": posT[i][1]
                });
            }


            else {
                how_many = 0;
                $("#li" + (i + 1)).css({
                    "position": "absolute",
                    "left": tab[i][0],
                    "top": tab[i][1]
                });
            }
        }
    }, 10)
}

function Pb() {
    status = "change";

    $("#nav").css({
        "position": "fixed",
        "top": 0
    });
    $(".menu").animate({
        'font-size': font_bottom,
        'font-weight': 400
    }, 200)
    $(".menu").css({
        backgroundColor: 'rgba(245,245,245, 0.6)'
    })

    for (i = 0; i < ile_2; i++) {
        $("#li" + (i + 1)).css({
            "position": "relative",
            "left": 0,
            "top": 0
        });
    }

    status = "bottom";
}

function Bp() {
    status = "change";

    $("#nav").css({
        "position": "relative",
        "top": "975px"
    });
    $(".menu").animate({
        'font-size': font_standard,
        'font-weight': 700
    }, 200)
    $(".menu").css({
        backgroundColor: 'unset'
    })
    for (i = 0; i < ile_2; i++) {
        $("#li" + (i + 1)).css({
            "position": "absolute",
            "left": posB[i][0],
            "top": posB[i][1]
        });
    }


    status = "middle";

}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// definiowanie pozycji

$(document).ready(function () {
    ile_2 = 0;
    while (true) {
        if ($('#li' + (ile_2 + 1)).length == 0)
            break;
        else
            ile_2++
    }

    for (i = 0; i < ile_2; i++) {
        posB[i] = [$("#li" + (i + 1)).offset().left, 0];
        posT[i] = [0, -$("#li" + (i + 1)).offset().top + (i * 50) + 200];
    }

    // opoznenie by przy odsyłaczu hasza dobrze ustawic elementy
    setTimeout(function () {
        if ($("#start")[0].getBoundingClientRect().bottom > $(window).height() * 3 / 4) {
            status = 'top';

            for (i = 0; i < ile_2; i++) {
                $("#li" + (i + 1)).css({
                    "position": "absolute",
                    "left": posT[i][0],
                    "top": posT[i][1]
                });
            }
        }
        else if ($("#start")[0].getBoundingClientRect().bottom <= $(window).height() * 3 / 4 && $("#info")[0].getBoundingClientRect().top > $(".row").height()) {
            status = 'middle';

            for (i = 0; i < ile_2; i++) {
                $("#li" + (i + 1)).css({
                    "position": "absolute",
                    "left": posB[i][0],
                    "top": posB[i][1]
                });
            }
        }
        else if ($("#info")[0].getBoundingClientRect().top <= $(".row").height()) {
            status = 'bottom';

            $("#nav").css({
                "position": "fixed",
                "top": 0
            });
            $(".menu").css({
                'font-size': font_bottom,
                'font-weight': 400
            })

        }
    }, 100)
})


// odpornosc na zmiane szerokosci
$(window).resize(function () {
    if (status == 'top') {

        // trzy oddzielne petle bo pozycje determinuje ustawienie całej lini a nie jednego elementu
        for (i = 0; i < ile_2; i++) {
            $("#li" + (i + 1)).css({
                position: "relative",
                left: 0,
                top: 0
            })
        }
        for (i = 0; i < ile_2; i++) {
            posB[i] = [$("#li" + (i + 1)).offset().left, 0];
        }
        for (i = 0; i < ile_2; i++) {
            $("#li" + (i + 1)).css({
                position: "absolute",
                left: posT[i][0],
                top: posT[i][1]
            });
        }
    }
    else if (status == 'middle') {

        // trzy oddzielne petle bo pozycje determinuje ustawienie całej lini a nie jednego elementu
        for (i = 0; i < ile_2; i++) {
            $("#li" + (i + 1)).css({
                position: "relative",
                left: 0,
                top: 0
            })
        }
        for (i = 0; i < ile_2; i++) {
            posB[i] = [$("#li" + (i + 1)).offset().left, 0];
        }
        for (i = 0; i < ile_2; i++) {
            $("#li" + (i + 1)).css({
                position: "absolute",
                left: posB[i][0],
                top: posB[i][1]
            });
        }

    }
    else if (status == 'bottom') {
        for (i = 0; i < ile_2; i++) {
            $(".menu").css({
                fontSize: font_standard,
            })
            posB[i] = [$("#li" + (i + 1)).offset().left, 0];
            $(".menu").css({
                fontSize: font_bottom,
            })
        }

    }

});

//Zmiana pozycji menu
$(document).scroll(function () {
    if ($("#start")[0].getBoundingClientRect().bottom > $(window).height() * 3 / 4 && status == 'middle') {
        status = 'change';

        //czas na wykonanie detekcji kierunku scroll Y
        setTimeout(function () {
            if (y == 'up')
                BtT();
            else
                status = 'middle';
        },100);
    }

    else if ($("#start")[0].getBoundingClientRect().bottom <= $(window).height() * 3 / 4 && $("#info")[0].getBoundingClientRect().top > $(".row").height() && status == 'top') {
        status = 'change';

        //czas na wykonanie detekcji kierunku scroll Y
        setTimeout(function () {
            if (y == 'down')
                TtB();
            else
                status = 'top';
        },100);
    }

    else if ($("#info")[0].getBoundingClientRect().top <= $(".row").height() && status != 'bottom') {
        Pb();
    }

    else if ($("#info")[0].getBoundingClientRect().top > $(".row").height() && status == 'bottom') {
        Bp();
    }
})


//Zmiana po najechaniu
$('.menu').hover(
    function () {
        if (status == "bottom")
            $(this).animate({ backgroundColor: 'rgba(245,245,245, 0.9)', fontWeight: 600 }, 200);
    },
    function () {
        if (status == "bottom")
            $(this).animate({ backgroundColor: 'rgba(245,245,245, 0.6)', fontWeight: 400 }, 100);
    }
);



