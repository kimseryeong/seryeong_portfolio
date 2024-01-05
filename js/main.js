$(document).ready(function(){
    // 메뉴 스크롤
    fnMenuScroll();
    
    //맨위로
    fnTopScroll();
    
    
});

//메뉴 스크롤
function fnMenuScroll(){
    $('.scroll').click(e=>{
        e.preventDefault();
        //$(this).attr('animation', '')
        $('html, body').animate({scrollTop: $(this.hash).offset.top}, 400); //$(this.hash).offset().top
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