// calls unnamed function that does this
// source = Responsive Navigation Bar Tutorial - Dev Ed
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.links');
    const links = document.querySelectorAll('.links div');


    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        links.forEach((link) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = "linkfade 0.5s ease forwards 0.3s ";
            }
        })

        //burger animation
        burger.classList.toggle('toggle');
    })


}


var modalhelper = (modal, btn, span) => {
    btn.addEventListener('click', () => {
        modal.style.display = "block";
    })
    span.addEventListener('click', () => {
        modal.style.display = "none";
    })
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    })
}

var colorModalHelp = (modal, btn) => {
    var bool = true;
    btn.addEventListener('click', () => {
        if (bool) {
            modal.style.display = "block";
        } else {
            modal.style.display = "none";
        }
        bool = !bool;
    })
}

var modelFunc = () => {
    //smartwheel
    // Get the modal
    var modal1 = document.querySelector("#swmodel");
    // Get the button that opens the modal
    var btn1 = document.querySelector("#smartwheel");
    // Get the <span> element that closes the modal
    var span1 = document.querySelectorAll(".close")[0];



    // hypersudoku
    var modal3 = document.querySelector("#hsmodal");
    var btn3 = document.querySelector("#hyper");
    var span3 = document.querySelectorAll(".close")[1];

    //cipher 
    var modal4 = document.querySelector("#ciphermodal");
    var btn4 = document.querySelector("#cipher");
    var span4 = document.querySelectorAll(".close")[2];

    //slidingpuzzle
    var modal11 = document.querySelector("#slidemodal");
    var btn11 = document.querySelector("#slide");
    var span11 = document.querySelectorAll(".close")[3];

    // clicker
    var modal2 = document.querySelector("#clickermodal");
    var btn2 = document.querySelector("#clicker");
    var span2 = document.querySelectorAll(".close")[4];

    //care 
    var modal5 = document.querySelector("#caremodal");
    var btn5 = document.querySelector("#care");
    var span5 = document.querySelectorAll(".close")[5];


    //harrypotter
    var modal7 = document.querySelector("#movmodal");
    var btn7 = document.querySelector("#movpic");
    var span7 = document.querySelectorAll(".close")[6];

    //mixed
    var modal8 = document.querySelector("#realmodal");
    var btn8 = document.querySelector("#reality");
    var span8 = document.querySelectorAll(".close")[7];

    //poetry
    var modal6 = document.querySelector("#pmodal");
    var btn6 = document.querySelector("#poetry");
    var span6 = document.querySelectorAll(".close")[8];


    //email
    var modal9 = document.querySelector("#btnmodal");
    var btn9 = document.querySelector("#emailbtn");
    var span9 = document.querySelectorAll(".close")[9];

    //toggle theme
    var modal10 = document.querySelector("#themebtn");
    var btn10 = document.querySelector("#paint");




    modalhelper(modal1, btn1, span1);
    modalhelper(modal2, btn2, span2);
    modalhelper(modal3, btn3, span3);
    modalhelper(modal4, btn4, span4);
    modalhelper(modal5, btn5, span5);
    modalhelper(modal6, btn6, span6);
    modalhelper(modal7, btn7, span7);
    modalhelper(modal8, btn8, span8);
    modalhelper(modal9, btn9, span9);
    modalhelper(modal11, btn11, span11);
    colorModalHelp(modal10, btn10);

}

var hoverelem = () => {
    var elem = document.querySelector("#assist");
    var help = document.querySelector("#assist .help");
    var icon = document.querySelector("#assist .text");
    var icon2 = document.querySelector("#assist .color");

    elem.addEventListener('mouseenter', () => {
        elem.style.width = "60px";
        elem.style.color = "black";
        elem.style.transition = "0.3s";

    })
    elem.addEventListener('mouseleave', () => {
        elem.style.width = "25px";
        elem.style.color = "black";

    })

    elem.addEventListener('mouseenter', () => {
        // icon.style.display = "none";
        // icon2.style.display = "none";
        help.style.transition = "0.2s";
        help.style.color = "black"
        help.style.display = "inline";
        help.style.flexDirection = "column";
        help.style.justifyContent = "space-between";
    })
    elem.addEventListener('mouseleave', () => {
        help.style.display = "none";
        help.style.color = "rgb(240,240,240)";
        icon.style.display = "inline";
        icon2.style.display = "inline";

    })

}



$(document).ready(function() {
    var textsize = true;
    var windowcolor = true;

    navSlide();
    modelFunc();
    // hoverelem();

    $("#top").click(function() {
        $("html, body").animate({ scrollTop: $(".content").offset().top }, 500);
    });

    $(".arrow").click(function() {
        $("html, body").animate({ scrollTop: $(".content").offset().top }, 500);
    });

    $("#aboutscroll").click(function() {
        $("html, body").animate({ scrollTop: $("#allabout").offset().top - 80 }, 500, 'swing');
    });

    $("#skillscroll").click(function() {
        $("html, body").animate({ scrollTop: $("#skills").offset().top - 80 }, 500);
    });

    $("#exscroll").click(function() {
        $("html, body").animate({ scrollTop: $("#experience").offset().top - 80 }, 500);
    });

    $("#projscroll").click(function() {
        $("html, body").animate({ scrollTop: $("#projects").offset().top - 80 }, 500);
    });

    $("#contactscroll").click(function() {
        $("html, body").animate({ scrollTop: $("#contactform").offset().top - 80 }, 500);
    });



    $('.text').click(function() {
        if (textsize) {
            $("body").css("fontSize", "large");
            $("body").css("transition", "0.3s");
            $(".biglabel").css("fontSize", "xx-large");
            $(".biglabel").css("transition", "0.3s");
            $(".edu").css("fontSize", "xx-large");
            $(".edu").css("transition", "0.3s");
            $(".sect").css("fontSize", "36px");
            $(".sect").css("transition", "0.3s");
            $(".linked").css("fontSize", "medium");
            $(".linked").css("transition", "0.3s");


        } else {
            $(".biglabel").css("fontSize", "large");
            $(".biglabel").css("transition", "0.3s");
            $("body").css("fontSize", "small");
            $("body").css("transition", "0.3s");
            $(".edu").css("fontSize", "x-large");
            $(".edu").css("transition", "0.3s");
            $(".sect").css("fontSize", "24px");
            $(".sect").css("transition", "0.3s");
            $(".linked").css("fontSize", "small");
            $(".linked").css("transition", "0.3s");
        }
        textsize = !textsize;
    })

    $('.color').click(function() {
        console.log('here');
        if (windowcolor) {
            $("body").css("backgroundColor", "#141d26");
            $("body").css("color", "white");
            $("body").css("transition", "0.7s");
            $(".modal-content").css("backgroundColor", "#141d26");
            $(".modal2").css("backgroundColor", "#141d26");
            $(".modal2").css("color", "white");
            $(".modal2").css("transition", "0.7s");
            $(".assistMe").css("backgroundColor", "#1d2a37");
            $(".assistMe i").css("color", "rgb(240, 240, 240)");
            $(".assistMe").css("transition", "0.7s");
            $(".text-primary").css("cssText", "color: white !important");
            $(".text-primary").css("transition", "0.7s");


        } else {
            $("body").css("backgroundColor", "white");
            $("body").css("color", "#141d26");
            $("body").css("transition", "0.7s");
            $(".modal-content").css("backgroundColor", "white");
            $(".modal2").css("backgroundColor", "white");
            $(".modal2").css("color", "#141d26");
            $(".modal2").css("transition", "0.7s");
            $(".assistMe").css("backgroundColor", "rgb(240, 240, 240)");
            $(".assistMe i").css("color", "#141d26");
            $(".assistMe").css("transition", "0.7s");
            $(".text-primary").css("cssText", "color: black!important");
            $(".text-primary").css("transition", "0.7s");

        }
        windowcolor = !windowcolor;
    })


    var blue = "rgb(72, 185, 255)";
    var pink = "#f3629a";
    var purple = "rgb(170, 86, 248)";
    var green = "#24c984";
    var yellow = "rgb(209, 172, 5)";
    var grey = "rgb(95, 95, 95)";
    var array = ["linksblue", "linkspinks", "linkspurp", "linksgreen", "linksyellow", "linksgrey"];

    $(".blue").click(function() {
        $(".mynav").css("backgroundColor", blue);
        $(".hline").css("color", blue);
        $(".me img").css("border", "2px " + blue + " solid");
        $(".contactme .btn").css("backgroundColor", blue);
        $("#contact").css("backgroundColor", blue);
        $(".contactme .btn:hover").css("backgroundColor", blue);
        $(".links").css("backgrounColor", blue);
        $(".mynav").css("transition", "0.5s");
        $("#contact").css("transition", "0.5s");
        $(".mynav ul").removeClass(array.join(' '));
        $(".mynav ul").addClass("linksblue");
    })

    $(".pink").click(function() {
        $(".mynav").css("backgroundColor", pink);
        $(".hline").css("color", pink);
        $(".me img").css("border", "2px " + pink + " solid");
        $(".contactme .btn").css("backgroundColor", pink);
        $("#contact").css("backgroundColor", pink);
        $(".contactme .btn:hover").css("backgroundColor", pink);
        $(".links").css("backgrounColor", pink);
        $(".mynav").css("transition", "0.5s");
        $("#contact").css("transition", "0.5s");
        $(".mynav ul").removeClass(array.join(' '));
        $(".mynav ul").addClass("linkspinks");
    })

    $(".purple").click(function() {
        $(".mynav").css("backgroundColor", purple);
        $(".hline").css("color", purple);
        $(".me img").css("border", "2px " + purple + " solid");
        $(".contactme .btn").css("backgroundColor", purple);
        $("#contact").css("backgroundColor", purple);
        $(".contactme .btn:hover").css("backgroundColor", purple);
        $(".mynav").css("transition", "0.5s");
        $("#contact").css("transition", "0.5s");
        $(".mynav ul").removeClass(array.join(' '));
        $(".mynav ul").addClass("linkspurp");
    })

    $(".green").click(function() {
        $(".mynav").css("backgroundColor", green);
        $(".hline").css("color", green);
        $(".me img").css("border", "2px " + green + " solid");
        $(".contactme .btn").css("backgroundColor", green);
        $("#contact").css("backgroundColor", green);
        $(".contactme .btn:hover").css("backgroundColor", green);
        $(".mynav").css("transition", "0.5s");
        $("#contact").css("transition", "0.5s");
        $(".mynav ul").removeClass(array.join(' '));
        $(".mynav ul").addClass("linksgreen");
    })
    $(".mustard").click(function() {
        $(".mynav").css("backgroundColor", yellow);
        $(".hline").css("color", yellow);
        $(".me img").css("border", "2px " + yellow + " solid");
        $(".contactme .btn").css("backgroundColor", yellow);
        $("#contact").css("backgroundColor", yellow);
        $(".contactme .btn:hover").css("backgroundColor", yellow);
        $(".mynav").css("transition", "0.5s");
        $("#contact").css("transition", "0.5s");
        $(".mynav ul").removeClass(array.join(' '));
        $(".mynav ul").addClass("linksyellow");
    })
    $(".gray").click(function() {
        $(".mynav").css("backgroundColor", grey);
        $(".hline").css("color", grey);
        $(".me img").css("border", "2px " + grey + " solid");
        $(".contactme .btn").css("backgroundColor", grey);
        $("#contact").css("backgroundColor", grey);
        $(".contactme .btn:hover").css("backgroundColor", grey);
        $(".mynav").css("transition", "0.5s");
        $("#contact").css("transition", "0.5s");
        $(".mynav ul").removeClass(array.join(' '));
        $(".mynav ul").addClass("linksgrey");
    })






    // $('#assist').mouse(function(){
    //     $(this).animate({width: '200px'}, 500);
    // }, function(){
    //     $(this).animate({width:'35px'}, 500);
    // }).trigger('mouseleave');


    $(window).on('scroll', function() {
        if (Math.round($(window).scrollTop()) >= 70) {
            $(".topbar").css("padding", "2vh");
            $(".topbar").css("transition", "0.3s ease");

        } else {
            $(".topbar").css("padding", "");

        }
    })

})