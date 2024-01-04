// 비디오 재생속도
var v = document.getElementById("myVideoX");
v.playbackRate = 0.4

//aside 슬라이드
const items = document.querySelectorAll("article"); //모든 article 요소를 변수 items에 저장
const aside = document.querySelector("aside");
const close = aside.querySelector("span");

for(var i of items){
    i.addEventListener("click", e => {
        var title = e.currentTarget.querySelector("h2").innerText;
        var txt = e.currentTarget.querySelector("p").innerText;
        var vidSrc = e.currentTarget.querySelector("video").getAttribute("src");

        aside.querySelector("h1").innerText = title;
        aside.querySelector("p").innerText = txt;
        aside.querySelector("video").setAttribute("src", vidSrc);

        //aside 요소 안쪽의 동영상을 재생하고 aside 요소에 on을 붙여 패널 활성화
        aside.querySelector("video").play();
        aside.classList.add("on");

    })
    close.addEventListener("click", ()=>{
        //aside요소에 클래스를 on을 제거해 비활성화하고 안쪽의 영상을 재생 정지
        aside.classList.remove("on");
        aside.querySelector("video").pause();
    })
}

// 메뉴 스크롤
$(document).ready(function(){
    fnMenuScroll();
    
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
    
    
});

function fnMenuScroll(){
    $('.scroll').click(e=>{
        e.preventDefault();
        //$(this).attr('animation', '')
        $('html, body').animate({scrollTop: $(this.hash).offset.top}, 400); //$(this.hash).offset().top
    });

}