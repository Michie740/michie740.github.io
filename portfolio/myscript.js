// calls unnamed function that does this
// source = Responsive Navigation Bar Tutorial - Dev Ed
const navSlide = () =>{
    const burger = document.querySelector(".burger");
    const nav = document.querySelector('.links');
    const links = document.querySelectorAll('.links li');


    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');

        links.forEach((link)=>{
            if(link.style.animation){
                link.style.animation = "";
            }
            else{
                link.style.animation = "linkfade 0.5s ease forwards 0.3s ";
            }
        })

        //burger animation
        burger.classList.toggle('toggle');
    })


}


$(document).ready(function(){
    navSlide();
    // var windsize = window.matchMedia("(max-width: 650px)");
    $(window).on('scroll', function(){
        if (Math.round($(window).scrollTop()) >= 70){
            $(".topbar").css("padding", "4vh");
            $(".topbar").css("transition", "0.3s ease");
            // if (windsize.matches){
            //     $(".links").css("top", "9vh");
            //     $(".links").css("height", "91vh");
            //     $(".links").css("transition", "0.3s ease");
            // }

        }
        else{
            $(".topbar").css("padding", "");
            // if (windsize.matches){
            //     $(".links").css("top", "15vh");
            //     $(".links").css("height", "85vh");
            // }


        }
    })

})
