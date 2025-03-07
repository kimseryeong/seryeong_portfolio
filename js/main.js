$(document).ready(function(){
    window.addEventListener('scroll', function () {
        var header = document.querySelector('header');
        var sections = document.querySelectorAll('section');
        var scrollPosition = window.scrollY;
    
        sections.forEach(function (section) {
            var top = section.offsetTop;
            var bottom = top + section.offsetHeight;
    
            if(top != 0){
                top = top - 10
            }
            console.log('section top : ', top + ' & bottom : ' + bottom);

            if (top <= scrollPosition && scrollPosition < bottom-10) {
                header.querySelector('.scroll.on').classList.remove('on');
                header.querySelector('a[href="#' + section.id + '"]').classList.add('on');
            }
        });
    });

    //새로고침 시 스크롤 top
    //$("html, body").animate({ scrollTop: 0 }, "slow"); 

    // 메뉴 스크롤
    fnMenuScroll();
    
    //맨위로
    fnTopScroll();

    //메뉴 클릭 시
    fnMenuClick();

    videoSpeed();
});
    
const videoSpeed = () => {
    const video = document.querySelectorAll('video');
    video.forEach((val)=>{
        val.playbackRate = 1.25;

    })
}



// 소개보기
function fnViewDetail(){    
    var btn = document.getElementById('about_info');

    if(btn.classList[1] === 'toggle'){
        $('.viewDetail').html('profile')
        btn.classList.remove('toggle');
    }
    else{
        btn.classList.add('toggle');
        $('.toggle').show();
        $('.viewDetail').html('profile close')
    }
}



//메뉴 클릭 시 스크롤
function fnMenuScroll(){
    $('.scroll').click(function(e){
        //console.log($(this).text(), '클릭됨')
        // e.preventDefault();
        $('html, body').animate({scrollTop: $(this.hash).offset.top}, '400'); //$(this.hash).offset().top
    });
}



//메뉴 클릭 시 클래스추가
var scrollList = document.getElementsByClassName('scroll');
function fnMenuClick() {
    for (var i = 0; i < scrollList.length; i++) {
        scrollList[i].addEventListener("click", handleClick);
    }
}
function handleClick(e){
    //console.log('e className : ', e.target.classList);
    if(e.target.classList[1] === 'on'){
        e.target.classList.remove('on');
    }
    else{
        for (var i = 0; i < scrollList.length; i++) {
            scrollList[i].classList.remove("on");
        }
    
        e.target.classList.add("on");
    }
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