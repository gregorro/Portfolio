var tabId = [];
tabId[0] = document.getElementById("html");
tabId[1] = document.getElementById("css");
tabId[2] = document.getElementById("js");
tabId[3] = document.getElementById("boostrap");
tabId[4] = document.getElementById("scss");
tabId[5] = document.getElementById("mysql");
tabId[6] = document.getElementById("php");
tabId[7] = document.getElementById("cpp");

var tabIdDiv = [];
var name = ' div';

var change = function () {
    tabIdDiv[0] = $("#html" + name);
    tabIdDiv[1] = $("#css" + name);
    tabIdDiv[2] = $("#js" + name);
    tabIdDiv[3] = $("#boostrap" + name);
    tabIdDiv[4] = $("#scss" + name);
    tabIdDiv[5] = $("#mysql" + name);
    tabIdDiv[6] = $("#php" + name);
    tabIdDiv[7] = $("#cpp" + name);
}

change();


var valueTop = [];
var valueLeft = [];
var raw = [];
var set;

var skills = $("#skills")[0].getBoundingClientRect();
var skills_offset = $("#skills").offset();
var skills2 = $("#html")[0].getBoundingClientRect();

var modY = 150;
var modX = 100;

var A;
var B;

str = function () {

    if (skills.width < 670) {
        modY = 50;
        modifier2 = 4;
        modifier = 75;
        modX = 20;


    }

    else if (skills.width < 1040) {
        modY = 80;
        modifier2 = 20;
        modifier = 70;
        modX = 50;

    }
    else if (skills.width < 1300) {
        modY = 120;
        modifier2 = 20;
        modifier = 180;
        modX = 100;
    }
    else {
        modY = 150;
        modX = 100;
        modifier2 = 50;
        modifier = 180;
    }

    A = (skills.height / 2) - modY;
    B = (skills.width / 2) - modX;
}

var time = 0;
var om = 0.03;
var con = 0;
var step = 0;
var val=[true,true];
var int;
var timer;
var ilosc = null;
var nr = null;
var ile = 1;
var value;
var run;

// modyfikator x
var modifier = 180;

// modyfikator y
var modifier2 = 50;

var i;

// resizing
$(window).resize(function () {
    skills = $("#skills")[0].getBoundingClientRect();
    skills_offset = $("#skills").offset();
    set();
});

// Widocznosc logo
var one = function () {
    $(tabId[i]).css("display", "block");
};

$("#prev").click(function () {
    if (val[0] == true && val[1] == true) {
        val=[false,false];
        
        if (ilosc != null) {
            tabIdDiv[ilosc].animate({ left: 0 + 'px', opacity: '0' }, 1000);
        }
        if (document.getElementById("action").innerHTML == "Ukryj wszystkie")
            run();

        name = " img";
        change();
        $(tabIdDiv[i]).animate({ opacity: '1' }, 500);
        name = " div";
        change();
        ile = ile - 1;
        if (ile < 0)
            ile = 7;
        nr = ile;
        value();

        val[0]=true;
        setTimeout(function(){
            val[1]=true;      
          },1000);
    }
});

$("#next").click(function () {
    if (val[0] == true && val[1] == true) {
        val=[false,false];

        if (ilosc != null) {
            tabIdDiv[ilosc].animate({ left: 0 + 'px', opacity: '0' }, 1000);
        }
        if (document.getElementById("action").innerHTML == "Ukryj wszystkie")
            run();

        name = " img";
        change();
        $(tabIdDiv[i]).animate({ opacity: '1' }, 500);
        name = " div";
        change();
        om = -om;
        ile = ile + 1;
        if (ile > 7)
            ile = 0;
        nr = ile;
        value();

        val[0]=true;
        setTimeout(function(){
            val[1]=true;      
          },1000);
    }

});


// Początkowe ustawienie
$(window).ready(set = function () {
    str();

    for (i = 0; i < 8; i++) {
        tabId[i].style.top = (skills.height / 2 + skills_offset.top - modifier2) + (A * Math.sin(Math.PI * 10 / 8 + con + step)) + 'px';
        tabId[i].style.left = ((skills.width - skills2.width - modifier) / 2) + (B * Math.cos(Math.PI * 10 / 8 + con + step)) + 'px';
        tabIdDiv[i].animate({ top: 0 + 'px' }, 1);
        one();
        con = con + 2 / 8 * Math.PI;
    }
    con = 0;
});

// Obroty
value = function () {

    timer = setInterval(function () {
        time = time + 1;
    }, 1);


    int = setInterval(function () {
        for (i = 0; i < 8; i++) {
            ilosc = i;

            valueTop[i] = (skills.height / 2 + skills_offset.top - modifier2) + (A * Math.sin(time * om + (Math.PI * 10 / 8 + con + step)));
            valueLeft[i] = ((skills.width - skills2.width - modifier) / 2) + (B * Math.cos(time * om + (Math.PI * 10 / 8 + con + step)));

            if (valueTop[nr] <= (skills.height / 2 + skills_offset.top - modifier2) + (A * Math.sin(Math.PI * 12 / 8)) + 0.005) {
                clearTimeout(int);
                clearTimeout(timer);
                time = 0;
                nr = null;
                setTimeout(function () {
                    tabIdDiv[i].css("display", "inherit");
                    if (screen.width > 900)
                        tabIdDiv[i].animate({ opacity: '1', left: 150 + 'px' }, 1500);
                    if (screen.width <= 900 && screen.width > 670)
                        tabIdDiv[i].animate({ opacity: '1', left: 100 + 'px' }, 1500);
                    if (screen.width <= 670) {
                        $(".mobile_skills_info").remove();
                        $('<div class="mobile_skills_info"/>').appendTo(".here");
                        $(tabId[ilosc]).clone().appendTo(".mobile_skills_info");
                        $(".mobile_skills_info div div").css({ opacity: "1" });
                    }

                    name = " img";
                    change();
                    name = " div";
                    change();
                }, 500);

                if (om < 0) {
                    step = step - Math.PI * 2 / 8;
                    om = -om;

                }
                else
                    step = step + Math.PI * 2 / 8;
                break;
            }


            con = con + 2 / 8 * Math.PI;
            one();
            $(tabId[i]).animate({ left: valueLeft[i] + 'px', top: valueTop[i] + 'px' }, 1);
            valueTop[i] = (skills.height + skills_offset.top - modifier2) - (A * Math.sin(time * om + (Math.PI * 10 / 8 + con + step)));
            valueLeft[i] = ((skills.width - skills2.width - modifier) / 2) - (B * Math.cos(time * om + (Math.PI * 10 / 8 + con + step)));

        }
        con = 0;
        one = function () { ; };
    }, 1);
};

$("#action").click(run = function () {
    if (document.getElementById("action").innerHTML == "Pokaż wszystkie") {
        for (i = 0; i < 8; i++) {
            $(tabIdDiv[i]).css("display", "inherit");
            $(tabIdDiv[i]).animate({ opacity: '1' }, 1000);
            document.getElementById("action").innerHTML = "Ukryj wszystkie";
            name = " img";
            change();
            $(tabIdDiv[i]).animate({ opacity: '0.4' }, 1000);
            name = " div";
            change();

        }
    }
    else {
        for (i = 0; i < 8; i++) {
            $(tabIdDiv[i]).animate({ opacity: '0' }, 2000);
            document.getElementById("action").innerHTML = "Pokaż wszystkie";
            name = " img";
            change();
            $(tabIdDiv[i]).animate({ opacity: '1' }, 1000);
            name = " div";
            change();
        }

    }
}
);