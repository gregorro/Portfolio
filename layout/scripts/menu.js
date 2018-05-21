        // zmienne
        var ile_2 = 0;
        var time_2 = 0;
        var status;
        var how_many;

        var posT = [];
        var posB = [];
        var tab = [];
        // alert($( '#li'+ ile_2).length);

        //zegar

        var timer_2 = setInterval(function () {
            time_2 = time_2 + 1;
        }, 10);



        // funkcja przemieszczenia top to bottom
        function TtB() {
            // alert();
            time_2 = 0;
            status = 'change';
            how_many = 0;
            var loop = setInterval(function () {
                for (i = 0; i < ile_2; i++) {
                    tab[i] = [posT[i][0] + Math.exp(time_2 / 5), posT[i][1] + 150 * Math.log(time_2)];

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
                            status = 'bottom';
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

        function BtT() {
            status = 'change';
            how_many = 0;
            time_2 = 0;
            var loop = setInterval(function () {
                for (i = 0; i < ile_2; i++) {
                    tab[i] = [posB[i][0] - time_2*time_2/4 , posB[i][1] - time_2*time_2/5 ];

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

        start = function () {
            if (status != 'bottom') {
                for (i = 0; i < ile_2; i++) {
                    $("#li" + (i + 1)).css({
                        "position": "absolute",
                        "left": posT[i][0],
                        "top": posT[i][1]
                    });
                }
                status = 'top';
            }
            else
                bad();

        }


        // inicjalizacja pozycji

        $(document).ready(function () {
            ile_2=0;
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

            if ($("#start")[0].getBoundingClientRect().bottom < 0)
                status = 'bottom';


        })

        analysis = function()
        {
            if(status == 'bottom')
            {
                for (i = 0; i < ile_2; i++) {
                    $("#li" + (i + 1)).css({
                        "position": "relative",
                        "left": 0,
                        "top": 0
                    });
                }
                for (i = 0; i < ile_2; i++) {
                    posB[i] = [$("#li" + (i + 1)).offset().left, 0];
                }
                for (i = 0; i < ile_2; i++) {
                    $("#li" + (i + 1)).css({
                        "position": "absolute",
                        "left": posB[i][0],
                        "top": posB[i][1]
                    });

                }

            }

            if(status == 'top')
            {
                for (i = 0; i < ile_2; i++) {
                    $("#li" + (i + 1)).css({
                        "position": "relative",
                        "left": 0,
                        "top": 0
                    });
                }
                for (i = 0; i < ile_2; i++) {
                    posB[i] = [$("#li" + (i + 1)).offset().left, 0];
                }
                for (i = 0; i < ile_2; i++) {
                    $("#li" + (i + 1)).css({
                        "position": "absolute",
                        "left": posB[i][0],
                        "top": posB[i][1]
                    });

                }

            }
        }

        // odpornosc na zmiane szerokosci
        $(window).resize(function () {  analysis();});



        $(window).ready(function () { start(); });

        $(document).scroll(function () {
            if ($("#start")[0].getBoundingClientRect().top < -150 && status == 'top')
                TtB()

            else if ($("#start")[0].getBoundingClientRect().top >= -150 && status == 'bottom')
                BtT()
        })


        $(document).scroll(bad = function () {
            if ($("#start")[0].getBoundingClientRect().bottom < 0) {
                for (i = 0; i < ile_2; i++) {
                    $("#li" + (i + 1)).css({
                        "position": "relative",
                        "font-size": "100%",
                        "left": 0,
                        "top": 0
                    });


                    $(".menu li a").hover(function () {
                        $(this).css({
                            "color": "white"
                        });
                    },
                        function () {
                            $(this).css({
                                "color": "black"
                            });
                        }
                    );
                }


                $("#nav").css({
                    "position": "fixed",
                    "top": 0
                });
            }
            else {
                $("#nav").css({
                    "position": "relative",
                    "top": 975
                });



                $(".menu li a").hover(function () {
                    $(this).css({
                        "color": "orange"
                    });
                },
                    function () {
                        $(this).css({
                            "color": "black"
                        });
                    }
                );
                if (status == 'bottom')
                    for (i = 0; i < ile_2; i++) {
                        $("#li" + (i + 1)).css({
                            "position": "absolute",
                            "left": posB[i][0],
                            "top": posB[i][1]
                        });
                    }
            }
        });


