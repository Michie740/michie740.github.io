$(document).ready(function(){
    var innerBody = $(".snoot").css( "backgroundColor" )
    var pants = $(".face").css("backgroundColor")
    var outerBody = $(".face").css("backgroundColor")
    var shirt = $(".body").css("backgroundColor") 
    $("#tabs").tabs();

    $(".pink").click(function(){
        console.log($(".body").css("backgroundColor") != "rbg(255,255,255)")
        if (shirt == "white" || shirt == "red" || shirt == "blue")
        {
            $(".body").css("backgroundColor","rgb(255,192,203)")
            $(".body").css("box-shadow","0 0 0 24em rgb(219,112,147) inset")
            $(".R-arm").css("backgroundColor","rgb(219,112,147)")
            $(".L-arm").css("backgroundColor","rgb(219,112,147)")
            $(".R-arm .inner").css("box-shadow","22em 22em 0 0 rgb(219,112,147) inset")
            $(".L-arm .inner").css("box-shadow","-22em 22em 0 0 rgb(219,112,147) inset")
            $(".R-leg").css("backgroundColor","rgb(219,112,147)")
            $(".L-leg").css("backgroundColor","rgb(219,112,147)")
        }
        $(".foot").css("backgroundColor","rgb(255,192,203)")
        $(".outer").css("backgroundColor","rgb(255,192,203)")
        $(".face").css("backgroundColor","rgb(219,112,147)")
        $(".R-ear").css("backgroundColor","rgb(255,192,203)")
        $(".L-ear").css("backgroundColor","rgb(255,192,203)")
        $(".snoot").css("backgroundColor","rgb(255,192,203)")

        innerBody = $(".snoot").css( "backgroundColor" )
        pants = $(".face").css("backgroundColor")
        outerBody = $(".face").css("backgroundColor")
        console.log(innerBody);
    })
    $(".brown").click(function(){
        if (shirt == "white" || shirt == "red" || shirt == "blue"){
            $(".body").css("backgroundColor"," rgb(230,160,90)")
            $(".body").css("box-shadow","0 0 0 24em  rgb(190,120,60) inset")
            $(".R-arm").css("backgroundColor","rgb(190,120,60)")
            $(".L-arm").css("backgroundColor","rgb(190,120,60)")
            $(".R-arm .inner").css("box-shadow","22em 22em 0 0 rgb(190,120,60) inset")
            $(".L-arm .inner").css("box-shadow","-22em 22em 0 0 rgb(190,120,60) inset")
            $(".R-leg").css("backgroundColor","rgb(190,120,60)")
            $(".L-leg").css("backgroundColor","rgb(190,120,60)")
        }
        $(".face").css("backgroundColor","rgb(190,120,60)")
        $(".R-ear").css("backgroundColor","rgb(95,60,30)")
        $(".L-ear").css("backgroundColor","rgb(95,60,30)")
        $(".snoot").css("backgroundColor","rgb(230,160,90)")
        $(".outer").css("backgroundColor","rgb(230,160,90)")
        $(".foot").css("backgroundColor","rgb(230,160,90)")
        innerBody = $(".snoot").css( "backgroundColor" )
        pants = $(".face").css("backgroundColor")
        outerBody = $(".face").css("backgroundColor")
    })
    

    $(".white").click(function(){
        if (shirt == "white" || shirt == "red" || shirt == "blue"){
            $(".body").css("backgroundColor","#fffff0")
            $(".body").css("box-shadow","0 0 0 24em #f1e1cc inset")
            $(".R-arm").css("backgroundColor","#f1e1cc")
            $(".L-arm").css("backgroundColor","#f1e1cc")
            $(".R-arm .inner").css("box-shadow","22em 22em 0 0 #f1e1cc inset")
            $(".L-arm .inner").css("box-shadow","-22em 22em 0 0 #f1e1cc inset")
            $(".R-leg").css("backgroundColor","#f1e1cc")
            $(".L-leg").css("backgroundColor","#f1e1cc")
        }
        $(".snoot").css("backgroundColor","#fffff0")
        $(".outer").css("backgroundColor","#faf0e6")
        $(".face").css("backgroundColor","#f1e1cc")
        $(".R-ear").css("backgroundColor","#faf0e6")
        $(".L-ear").css("backgroundColor","#faf0e6)")
        
        $(".foot").css("backgroundColor","#faf0e6")
        innerBody = $(".snoot").css( "backgroundColor" )
        pants = $(".face").css("backgroundColor")
        outerBody = $(".face").css("backgroundColor")
    })
    
    $(".black").click(function(){
        if (shirt == "white" || shirt == "red" || shirt == "blue"){
            $(".body").css("backgroundColor","#343434")
            $(".body").css("box-shadow","0 0 0 24em #16161d inset")
            $(".R-arm").css("backgroundColor","#16161d")
            $(".L-arm").css("backgroundColor","#16161d")
            $(".R-arm .inner").css("box-shadow","22em 22em 0 0 #16161d inset")
            $(".L-arm .inner").css("box-shadow","-22em 22em 0 0 #16161d inset")
            $(".R-leg").css("backgroundColor","#16161d")
            $(".L-leg").css("backgroundColor","#16161d")
        }
        $(".face").css("backgroundColor","#100c08")
        $(".R-ear").css("backgroundColor","#100c08")
        $(".L-ear").css("backgroundColor","#100c08")
        $(".snoot").css("backgroundColor","#343434")
        $(".outer").css("backgroundColor","#343434")
        
        $(".foot").css("backgroundColor","#343434")
        innerBody = $(".snoot").css( "backgroundColor" )
        pants = $(".face").css("backgroundColor")
        outerBody = $(".face").css("backgroundColor")
    })
    
    $(".blue").click(function(){
        if (shirt == "white" || shirt == "red" || shirt == "blue"){
            $(".body").css("backgroundColor","#E0EEEE")
            $(".body").css("box-shadow","0 0 0 24em #add8e6 inset")
            $(".R-arm").css("backgroundColor","#add8e6")
            $(".L-arm").css("backgroundColor","#add8e6")
            $(".R-arm .inner").css("box-shadow","22em 22em 0 0 #add8e6 inset")
            $(".L-arm .inner").css("box-shadow","-22em 22em 0 0 #add8e6 inset")
            $(".R-leg").css("backgroundColor","#add8e6")
            $(".L-leg").css("backgroundColor","#add8e6")
        }
        $(".face").css("backgroundColor","#add8e6")
        $(".R-ear").css("backgroundColor","#50A6C2")
        $(".L-ear").css("backgroundColor","#50A6C2")
        $(".snoot").css("backgroundColor","#E0EEEE")
        $(".outer").css("backgroundColor","#E0EEEE ")
        $(".foot").css("backgroundColor","#E0EEEE ")
        innerBody = $(".snoot").css( "backgroundColor" )
        pants = $(".face").css("backgroundColor")
        outerBody = $(".face").css("backgroundColor")
    })

    $(".extra").click(function(){
        $(".body").width("130")
    })

    $(".reg").click(function(){
        $(".body").width("100")
    })

    $(".outfit1").click(function(){
        $(".body").css("backgroundColor","white")
        $(".body").css("box-shadow","0 0 0 24em white inset")
        $(".R-arm").css("backgroundColor","white")
        $(".L-arm").css("backgroundColor","white")
        $(".R-arm .inner").css("box-shadow","22em 22em 0 0 white inset")
        $(".L-arm .inner").css("box-shadow","-22em 22em 0 0 white inset")
        $(".R-leg").css("backgroundColor","blue")
        $(".L-leg").css("backgroundColor","blue")
    })

    $(".outfit2").click(function(){
        $(".body").css("backgroundColor","red")
        $(".body").css("box-shadow","0 0 0 24em red inset")
        $(".R-arm").css("backgroundColor","red")
        $(".L-arm").css("backgroundColor","red")
        $(".R-arm .inner").css("box-shadow","22em 22em 0 0 red inset")
        $(".L-arm .inner").css("box-shadow","-22em 22em 0 0 red inset")
        $(".R-leg").css("backgroundColor","black")
        $(".L-leg").css("backgroundColor","black")
    })

    $(".outfit3").click(function(){
        $(".body").css("backgroundColor","blue")
        $(".body").css("box-shadow","0 0 0 24em blue inset")
        $(".R-arm").css("backgroundColor","blue")
        $(".L-arm").css("backgroundColor","blue")
        $(".R-arm .inner").css("box-shadow","22em 22em 0 0 blue inset")
        $(".L-arm .inner").css("box-shadow","-22em 22em 0 0 blue inset")
        $(".R-leg").css("backgroundColor","white")
        $(".L-leg").css("backgroundColor","white")
    })


    $(".outfit4").click(function(){
        console.log(outerBody);
        $(".body").css("backgroundColor", innerBody)
        $(".body").css("box-shadow","0 0 0 24em " + outerBody +  " inset")
        $(".body").css("box-shadow",)
        $(".R-arm").css("backgroundColor",outerBody)
        $(".L-arm").css("backgroundColor",outerBody)
        $(".R-arm .inner").css("box-shadow","22em 22em 0 0 " + outerBody + " inset")
        $(".L-arm .inner").css("box-shadow","-22em 22em 0 0 " + outerBody + " inset")
        $(".R-leg").css("backgroundColor",pants)
        $(".L-leg").css("backgroundColor",pants)
    })

    var watch = true;
    var necklace = true;
    var sneaks = true;
    $(".realwatch").hide();
    $(".realnecklace").hide();
    $(".realsneakers").hide();

    $(".watch").click(function(){
        if (watch){
            $(".realwatch").show()
        }
        else{
            $(".realwatch").hide()
        }
        watch = !watch;
    })

    $(".necklace").click(function(){
        if (necklace){
            $(".realnecklace").show()
        }
        else{
            $(".realnecklace").hide()
        }
        necklace = !necklace;
    })

    $(".sneakers").click(function(){
        if (sneaks){
            $(".realsneakers").show()
        }
        else{
            $(".realsneakers").hide()
        }
        sneaks = !sneaks;
    })

    $(".noaccessories").click(function(){
        $(".realwatch").hide()
        $(".realnecklace").hide()
        $(".realsneakers").hide()
        sneaks = true;
        necklace = true;
        watch = true;
    })


})