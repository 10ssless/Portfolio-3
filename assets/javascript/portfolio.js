$(document).ready(function(){
    $(".stuff").hide()
    $(".center-select").hide()
    $(".center-scroll").hide()
    $(".name").hide()
    $("nav").hide()

    var intro = ["you dont even kno","but you gon learn","pace yourself","$tay fro$tyyy©"]
    var timer,timer2;
    // $(".name").click(function(){
    //     // clearInterval(timer);
    //     timer = setInterval(function(){
    //         switch(j){
    //             case 0:
    //                 $(".center").text(intro[j]).fadeToggle(2000).delay(1000).fadeToggle(2000);
    //                 j = 1
    //                 break;
    //                 case 1:
    //                     $(".center").text(intro[j].substring(8)).fadeToggle(2000).delay(1000).fadeToggle(2000);
    //                     $(".name").text(intro[j].substring(0,8)).hide().fadeToggle(2000).delay(1000).fadeToggle(2000);
    //                 j = 2
    //                 break;
    //             case 2:
    //                 // $(".center").text(intro[j]).fadeToggle(2000).delay(1000).fadeToggle(2000);
    //                 $(".sound").text(intro[j].substring(0,4)).fadeToggle(2000).delay(1000).fadeToggle(2000);
    //                 $(".art").text(intro[j].substring(5,9)).fadeToggle(2000).delay(1000).fadeToggle(2000);
    //                 $(".code").text(intro[j].substring(9,13)).fadeToggle(2000).delay(1000).fadeToggle(2000);
    //                 j = 3
    //                 break;
    //             case 3:
    //                 $(".name").text("zubin mulji").fadeToggle(20).fadeToggle(20).fadeToggle(20).fadeToggle(20).fadeToggle(20).fadeToggle(20).fadeToggle(20).fadeToggle(20).fadeToggle(200).fadeToggle(20).fadeToggle(20).fadeToggle(20).fadeToggle(20).fadeToggle(20).fadeToggle(20).fadeToggle(20).fadeToggle(20).fadeToggle(200).fadeToggle(20).fadeToggle(20).fadeToggle(20).fadeToggle(20).fadeToggle(20).fadeToggle(20).fadeToggle(20).fadeToggle(20).fadeToggle(200).fadeToggle(20).fadeToggle(20).fadeToggle(20).fadeToggle(20).fadeToggle(20).fadeToggle(20).fadeToggle(20).fadeToggle(20).fadeToggle(300).fadeToggle(1000).fadeToggle(300).fadeToggle(1000).fadeToggle(300).fadeToggle(1000);                    
    //                 j = 0
    //                 clearInterval(timer)
    //                 break;
    //         }
    //     }, 5500)
    // })



    var clicked = false
    $(".center").click(function(){
        // $(".stuff").fadeToggle(1000)
        $(".center-select").html("")
        $(".center-scroll").fadeOut(1000)
        let select = $(this).html()
        let div = $("<div>").addClass("center")
        div.append(select)
        $(".center-select").append(div)
        $(".name").fadeOut(1000)
        $("nav").fadeOut(1000)
        $(".center-select").delay(1000).fadeIn(1000)
        clicked = true
    })
    
    $(".center-select").click(function(){
        $(".center-select").fadeOut(1000)
        $(".center-scroll").delay(1000).fadeIn(1000)
        $(".name").delay(2000).fadeIn(1500)
        $("nav").delay(2500).fadeTo(1500, 0.5)

    })

    var x = 0;
    $(".center-scroll").scroll(function(){
        x += 10

        // if(x < 200){
        //     $(".sound").css("color", "red")
        // }
        // else if(x > 200){
        //     $(".art").css("color", "red")
        // }
        // else {
        //     $(".code").css("color", "red")

        

    })


    $(".name").delay(1000).fadeIn(1500)
    $("nav").delay(1500).fadeIn(1500)
    $(".center-scroll").delay(3000).fadeIn(1500)


})