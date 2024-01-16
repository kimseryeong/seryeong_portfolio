$(document).ready(function(){
    // 메뉴 스크롤
    fnMenuScroll();
    
    //맨위로
    fnTopScroll();
    
    //프로젝트 슬라이드
    //fnSlide();
    fnPjtDesc();
});

//메뉴 스크롤
function fnMenuScroll(){
    $('.scroll').click(function(e){
        //console.log($(this).text(), '클릭됨')
        // e.preventDefault();
        $('html, body').animate({scrollTop: $(this.hash).offset.top}, '400'); //$(this.hash).offset().top
    });

}

//맨위로 스크롤
function fnTopScroll(){
    $(window).scroll(function() {
        // top button controll
	    if ($(this).scrollTop() > 500) {
            $('#topButton').fadeIn();
	    } else {
            $('#topButton').fadeOut();
	    }
	});
    
	$("#topButtonImg").click(function() {
        $('html, body').animate({scrollTop:0}, '300');
	});
}


function fnPjtDesc(){
    $('.project').on('mouseenter', ()=>{
        console.log('마우스 오버 중');
        $('.desc').show();
    });
    $('.project').on('mouseleave', ()=>{
        console.log('마우스 오버 아님');
    });
}