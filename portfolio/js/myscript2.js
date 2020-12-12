const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.links');
    const links = document.querySelectorAll('.links div');

    console.log('slide');
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
    //toggle theme
    var modal10 = document.querySelector("#themebtn");
    var btn10 = document.querySelector("#paint");
    colorModalHelp(modal10, btn10);
}


$(document).ready(function() {
    modelFunc();
    navSlide();
    var windowcolor = true;
    var textsize = true;

    $('.color').click(function() {
        if (windowcolor) {
            $("body").css("backgroundColor", "#141d26");
            $("body").css("color", "white");
            $("body").css("transition", "0.7s");
            $(".assistMe").css("backgroundColor", "#1d2a37");
            $(".assistMe i").css("color", "rgb(240, 240, 240)");
            $(".assistMe").css("transition", "0.7s");
            $(".poetry a").css("color", "white");
            $(".poetry").css("transition", "0.7s");
        } else {
            $("body").css("backgroundColor", "white");
            $("body").css("color", "#141d26");
            $("body").css("transition", "0.3s");
            $(".assistMe").css("backgroundColor", "rgb(240, 240, 240)");
            $(".assistMe i").css("color", "#141d26");
            $(".assistMe").css("transition", "0.7s");
            $(".poetry a").css("color", "#141d26");
            $(".poetry").css("transition", "0.7s");


        }
        windowcolor = !windowcolor;
    })

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
            $("#michelle").css("fontSize", "38px");
            $("#michelle").css("transition", "0.3s");


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
            $("#michelle").css("fontSize", "30px");
            $("#michelle").css("transition", "0.3s");
        }
        textsize = !textsize;
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

    $("#top").click(function() {
        $("html, body").animate({ scrollTop: $(".body").offset().top }, 500);
    });

    $(".arrow").click(function() {
        $("html, body").animate({ scrollTop: $(".content").offset().top }, 500);
    });

    $("#dancescroll").click(function() {
        $("html, body").animate({ scrollTop: $(".dancing").offset().top - 100 }, 500);
    });

    $("#poetryscroll").click(function() {
        $("html, body").animate({ scrollTop: $(".poetry").offset().top - 100 }, 500);
    });

    $("#musicscroll").click(function() {
        $("html, body").animate({ scrollTop: $(".music").offset().top - 100 }, 500);
    });




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