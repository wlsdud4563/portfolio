//마우스 휠 돌렸을 때 섹션 이동
$('section').on('mousewheel',function(e,d){
    if(d<0){
        let nxt = $(this).next().offset().top;
        $('html,body').stop()
        .animate({'scrollTop' : nxt},2000,'easeOutBounce');
    
    }else if(d>0){
        let prv = $(this).prev().offset().top;
        $('html,body').stop()
        .animate({'scrollTop' : prv},2000,'easeOutBounce');
    }
});


//각 섹션에 맞게끔 nav의 a활성화 
let winHig = $('section').height();

$(window).on('scroll',function(){
    let scr = $(this).scrollTop();

    if(winHig * 0 <= scr && winHig * 1 > scr){
        $('nav a').removeClass().eq(0).addClass('on');
    }

    if(winHig * 1 <= scr && winHig * 2 > scr){
        $('nav a').removeClass().eq(1).addClass('on');
    }

    if(winHig * 2 <= scr && winHig * 3 > scr){
        $('nav a').removeClass().eq(2).addClass('on');
    }

    if(winHig * 3 <= scr && winHig * 4 > scr){
        $('nav a').removeClass().eq(3).addClass('on');
    }


});

//nav 각 a 누르면 해당 섹션으로 이동

$('nav a').on('click',function(e){
    e.preventDefault();
    let i =$(this).index();
    
    $('html, body').stop().animate({
        'scrollTop' : i*winHig
    })
});

//section 내에서 마우스가 움직일때!
//이미지들이 꿈틀대게 만들거임 


$('section').on('mousemove',function(e){

    let x = e.pageX;
    let y = e.pageY;

    function imgs(a,b,c){
        
        $(a).css({
            'bottom' : b + y/20, 
            'right' : c+x/18});
    }
    
    imgs('.p11',20,20);
    imgs('.p12',-40,130);
    imgs('.p13',140,60);
    imgs('.p21',-480,-180);
    imgs('.p22',-40,130);
    imgs('.p31',30,180);
    imgs('.p32',-270,110);
    imgs('.p33',-130,-70);
    imgs('.p41',-120,20);
    imgs('.p42',-180,0);

});