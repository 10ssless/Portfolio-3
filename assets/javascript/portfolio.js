$(document).ready(function(){
    $(".stuff").hide()

    var intro = ["you dont even kno","but you gon learn","pace yourself","$tay fro$tyyy©"]
    var timer,timer2;
    $(".name").click(function(){
        // clearInterval(timer);
        timer = setInterval(function(){
            switch(j){
                case 0:
                    $(".center").text(intro[j]).fadeToggle(2000).delay(1000).fadeToggle(2000);
                    j = 1
                    break;
                    case 1:
                        $(".center").text(intro[j].substring(8)).fadeToggle(2000).delay(1000).fadeToggle(2000);
                        $(".name").text(intro[j].substring(0,8)).hide().fadeToggle(2000).delay(1000).fadeToggle(2000);
                    j = 2
                    break;
                case 2:
                    // $(".center").text(intro[j]).fadeToggle(2000).delay(1000).fadeToggle(2000);
                    $(".sound").text(intro[j].substring(0,4)).fadeToggle(2000).delay(1000).fadeToggle(2000);
                    $(".art").text(intro[j].substring(5,9)).fadeToggle(2000).delay(1000).fadeToggle(2000);
                    $(".code").text(intro[j].substring(9,13)).fadeToggle(2000).delay(1000).fadeToggle(2000);
                    j = 3
                    break;
                case 3:
                    $(".name").text("zubin mulji").fadeToggle(20).fadeToggle(20).fadeToggle(20).fadeToggle(20).fadeToggle(20).fadeToggle(20).fadeToggle(20).fadeToggle(20).fadeToggle(200).fadeToggle(20).fadeToggle(20).fadeToggle(20).fadeToggle(20).fadeToggle(20).fadeToggle(20).fadeToggle(20).fadeToggle(20).fadeToggle(200).fadeToggle(20).fadeToggle(20).fadeToggle(20).fadeToggle(20).fadeToggle(20).fadeToggle(20).fadeToggle(20).fadeToggle(20).fadeToggle(200).fadeToggle(20).fadeToggle(20).fadeToggle(20).fadeToggle(20).fadeToggle(20).fadeToggle(20).fadeToggle(20).fadeToggle(20).fadeToggle(300).fadeToggle(1000).fadeToggle(300).fadeToggle(1000).fadeToggle(300).fadeToggle(1000);                    
                    j = 0
                    clearInterval(timer)
                    break;
            }
        }, 5500)
    })

    // $(".center").click(function(){
    //     $(this).css("transform-origin", "50% 50%").css("transform", "perspective(500px) rotateX(30deg)");
    // })

    var j = 1;
    var incr = -60
    var right = false
    // $(".center-1").click(function(){
    //     $(".ticker-fill").text("$tay fro$tyyy©")
    //     timer2 = setInterval(function(){
    //         if(!right){
    //             incr += 15
    //             if(incr >= 1200){
    //                 right = true
    //                 j = 1
    //             }
    //             else{
    //                 $(".ticker-fill").css("right",incr)
    //             }
    //         }
    //         else {
    //             incr -= 15
    //             if (incr <= -60) {
    //                 right = false
    //                 j = 1
    //             }
    //             else{
    //                 $(".ticker-fill").css("right", incr)
    //             }
    //         }
    //     }, 500)
    // })

    $(".center").click(function(){
        $(".stuff").fadeToggle(1000)
    })





})