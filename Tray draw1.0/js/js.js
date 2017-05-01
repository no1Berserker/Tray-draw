$('.btn, .closed').on('click', function(){
    $('.cover').fadeOut();
})

var a = 0;
var times = 5;
var sta = 0;
$('.pointer').on('click', function(){
    
    if(sta == 0){        //等于0时可以旋转 旋转时不能触发下一个旋转
        sta = 1;
        if(times >= 1){
            times --;
            $('.times').html(times);
            var an = Math.round(Math.random() * 7) * 45;
            a = a + an + 360*2;
            $('.four').css({'transform': 'rotate('+ -a +'deg)', 'transition': 'transform linear 1s'});
            wards();
        }else {
            $('.pointer img').attr('src', 'img/pointer2.png');
        }
    }else {
        $('.cover').hide();
        
    }
    

    function wards(){
        setTimeout(function(){
            sta = 0;
            var b = a%360/45;
            if(b == 0 || b == 4){
                $('.img-award img').attr('src', 'img/01.png');
                $('.cover').fadeIn();
            }
            if(b == 2 || b == 6){
                $('.img-award img').attr('src', 'img/02.png');
                $('.cover').fadeIn();
            }
            if(b == 1 || b == 5){
                $('.img-award img').attr('src', 'img/04.png');
                $('.cover').fadeIn();
            }
            if(b == 3 || b == 7){
                $('.cover').fadeIn();
                $('.img-award img').attr('src', 'img/03.png');
            }
        }, 1000)    
    }
    
})