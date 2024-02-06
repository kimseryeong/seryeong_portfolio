$(document).ready(function(){
    // 메뉴 스크롤
    fnMenuScroll();
    menuScrllColor();
    
    //맨위로
    fnTopScroll();
    
    //프로젝트 슬라이드
    //fnSlide();
    fnPjtDesc();

    //메뉴 클릭 시
    fnMenuClick();
    
    
    // $(window).scroll(function(){
       
    //     var scll_about = $('#about').offset().top;
    //     console.log('scll_about offset', Math.ceil(scll_about));
        
    //     var scll_skill = $('#skill').offset().top;
    //     console.log('scll_skill offset', Math.ceil(scll_skill));
        
    //     var scll_pjt = $('#project').offset().top;
    //     console.log('scll_pjt offset', Math.ceil(scll_pjt));

    //     var scll_rsm = $('#resume').offset().top;
    //     console.log('scll_rsm offset', Math.ceil(scll_rsm));

    //     var height = $(document).scrollTop();
    //     console.log('height', height);
    
        
    //     if(scll_about <= height || height < scll_skill){
    //         console.log("scll_about 도착했습니다.");
    //         $('#scll_about').addClass("on");
    //     }
    //     else if(scll_skill <= height || height < scll_pjt){
    //         console.log("scll_skill 도착했습니다.");
    //         $('#scll_skill').addClass("on");
    //     }
    //     else if(scll_pjt <= height || height < scll_rsm){
    //         console.log("scll_pjt 도착했습니다.");
    //         $('#scll_pjt').addClass("on");
    //     }
    //     else if(scll_rsm <= height){
    //         console.log("scll_rsm 도착했습니다.");
    //         $('#scll_rsm').addClass("on");
    //     }
// })
});

function menuScrllColor(){
    document.addEventListener('DOMContentLoaded', function () {
        window.addEventListener('scroll', function () {
          var header = document.querySelector('header');
          var sections = document.querySelectorAll('section');
          var scrollPosition = window.scrollY;
      
          sections.forEach(function (section) {
            var top = section.offsetTop;
            var bottom = top + section.offsetHeight;
      
            if (scrollPosition >= top && scrollPosition < bottom) {
              header.querySelector('.scroll.on').classList.remove('on');
              header.querySelector('a[href="#' + section.id + '"]').classList.add('on');
            }
          });
        });
      });
}


// 소개보기
function fnViewDetail(){
    
    var btn = document.getElementById('about_info');
    console.log(btn);
    console.log(btn.classList[1]);

    if(btn.classList[1] === 'toggle'){
        $('.viewDetail').html('소개 보기')
        btn.classList.remove('toggle');
    }
    else{
        btn.classList.add('toggle');
        $('.toggle').show();
        $('.viewDetail').html('소개 닫기')
    }

    
    // $('#about_info').show();
}



//메뉴 스크롤
function fnMenuScroll(){
    $('.scroll').click(function(e){
        //console.log($(this).text(), '클릭됨')
        // e.preventDefault();
        $('html, body').animate({scrollTop: $(this.hash).offset.top}, '400'); //$(this.hash).offset().top
        
        //$(this).addClass('on');
        //$(this).css('color', 'red');
    });
}

function fnScroll(){

    var skill = document.querySelector('#skill');
    var skill_h = skill.getBoundingClientRect().height;
    console.log('skill_h', skill_h);
    var project = document.querySelector('#project');
    var project_h = project.getBoundingClientRect().height;
    console.log('project_h', project_h);

    document.addEventListener('scroll', () => {
        if(window.screenY > skill_h){
            $('#scroll_skill').addClass("on");
        }
        else{
            $('#scroll_skill').addClass("on");
        }
        
    })
    // var aHref = $(this).attr('href');
    //console.log('aHref : ', aHref);
    //var menuHeight = document.getElementById(aHref).getBoundingClientRect().height;
    //console.log('menuHeight : ', menuHeight);


    // for(var i = 0; i < scrollList.length; i++){
    //     var menuHeight = scrollList[i].getBoundingClientRect().height;
    //     console.log('menuHeight', i, menuHeight);
        
        
    // }
}


var scrollList = document.getElementsByClassName('scroll');
//메뉴 클릭 시 클래스추가
function fnMenuClick() {
    for (var i = 0; i < scrollList.length; i++) {
        scrollList[i].addEventListener("click", handleClick);
    }
}
function handleClick(e){
    console.log('e className : ', e.target.classList);
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


function fnPjtDesc(){
    $('.project').on('mouseenter', ()=>{
        console.log('마우스 오버 중');
        $('.desc').show();
    });
    $('.project').on('mouseleave', ()=>{
        console.log('마우스 오버 아님');
    });
}