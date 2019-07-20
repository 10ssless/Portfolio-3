var about = {
    img: "../images/habitat.jpg",
}


$(document).ready(function(){
    $(".stuff").hide()
    $(".center-select").hide()
    $(".side").hide()
    $(".center-scroll").hide()
    $(".name").hide()
    $("nav").hide()

    // ABOUT ME 
    $("#center-1").click(function(){
        $(".bio").show()
        $(".moodi").hide()
        $(".rpg").hide()
        $(".nyt").hide()
        $(".art").hide()
        $(".contact").hide()

        $(".center-scroll").fadeOut(1000)
        $(".name").fadeOut(1000)
        $("nav").fadeOut(1000)
        $(".center-select").delay(1000).fadeIn(1000)
        $(".bio-text").delay(1500).fadeIn(1000)
        
    })

    // MOODI 
    $("#center-2").click(function(){
        $(".bio").hide()
        $(".moodi").show()
        $(".rpg").hide()
        $(".nyt").hide()
        $(".art").hide()
        $(".contact").hide()
        
        $(".center-scroll").fadeOut(1000)
        $(".name").fadeOut(1000)
        $("nav").fadeOut(1000)
        $(".center-select").delay(1000).fadeIn(1000)
        $(".moodi-text").delay(1500).fadeIn(1000)
        $(".moodi-name").delay(1500).fadeIn(1000)
        
    })
    
    // NYT 
    $("#center-3").click(function(){
        $(".bio").hide()
        $(".moodi").hide()
        $(".nyt").show()
        $(".rpg").hide()
        $(".art").hide()
        $(".contact").hide()

        $(".center-scroll").fadeOut(1000)
        $(".name").fadeOut(1000)
        $("nav").fadeOut(1000)
        $(".center-select").delay(1000).fadeIn(1000)
        $(".nyt-text").delay(1500).fadeIn(1000)
        $(".nyt-name").delay(1500).fadeIn(1000)
        
    })
   

    // RPG 
    $("#center-4").click(function(){
        $(".bio").hide()
        $(".moodi").hide()
        $(".nyt").hide()
        $(".rpg").show()
        $(".art").hide()
        $(".contact").hide()

        $(".center-scroll").fadeOut(1000)
        $(".name").fadeOut(1000)
        $("nav").fadeOut(1000)
        $(".center-select").delay(1000).fadeIn(1000)
        $(".rpg-text").delay(1500).fadeIn(1000)
        $(".rpg-name").delay(1500).fadeIn(1000)
        
    })
    
    // ART 
    $("#center-5").click(function(){
        $(".bio").hide()
        $(".moodi").hide()
        $(".nyt").hide()
        $(".rpg").hide()
        $(".art").show()
        $(".contact").hide()

        $(".center-scroll").fadeOut(1000)
        $(".name").fadeOut(1000)
        $("nav").fadeOut(1000)
        $(".center-select").delay(1000).fadeIn(1000)
        $(".art-text").delay(1500).fadeIn(1000)
        $(".art-name").delay(1500).fadeIn(1000)
        
    })
    
    // $$$ 
    $("#center-6").click(function(){
        $(".bio").hide()
        $(".moodi").hide()
        $(".nyt").hide()
        $(".rpg").hide()
        $(".art").hide()
        $(".contact").show()

        $(".center-scroll").fadeOut(1000)
        $(".name").fadeOut(1000)
        $("nav").fadeOut(1000)
        $(".center-select").delay(1000).fadeIn(1000)
        $(".contact-text").delay(1500).fadeIn(1000)
        $(".contact-name").delay(1500).fadeIn(1000)
        
    })

    // $(".center-scroll").scroll(function () {
    //     w = Math.floor($(".center-scroll").scrollTop());
    //     $('.nav-item').css('color', '');
    //     if (w <= $('#center-1').offset().top) {
    //         $('.nav-item').css('color', 'white');
    //         $('.nav-about').css('color', 'red');
    //     } else if (w <= $('#center-2').offset().top) {
    //         $('.nav-item').css('color', 'white');
    //         $('.nav-code').css('color', 'red');
    //     } else if (w <= $('#center-5').offset().top) {
    //         $('.nav-item').css('color', 'white');
    //         $('.nav-art').css('olor', 'red');
    //     } else if (w <= $('#center-6').offset().top) {
    //         $('.nav-item').css('color', 'white');
    //         $('.nav-contact').css('color', 'red');
    //     } 

    // });

    // reset to center-scroll
    $(".center-select").click(function () {
        $(".center-select").fadeOut(1000)
        $(".side").fadeOut(1000)
        $(".center-scroll").delay(1000).fadeIn(1000)
        $(".name").delay(2000).fadeIn(1500)
        $("nav").delay(2500).fadeTo(1500, 0.5)

    })

 

    // fade intro
    $(".name").delay(1000).fadeIn(1500)
    $("nav").delay(1500).fadeIn(1500)
    $(".center-scroll").delay(3000).fadeIn(1500)


})