
//슬라이드 
const mySwiper = new Swiper('.swiper-container', {
    //옵션설정
    direction: 'horizontal' //수평(수직은 vertical, 기본값:horizontal)
    ,loop: false //슬라이드 무한 루프(기본값:true)
    ,loopAdditionalSlides: 1
    ,autoplay: {
        delay: 10000//20000 //자동재생(기본값:false, delay:딜레이 시간)
    }
    ,speed: 1000 //슬라이드 애니메이션 속도(기본값:300)
    ,slidesPerView: 3 //한번에 보여지는 슬라이드 개수 (auto->슬라이드 넓이,높이에 따라 자동 계산)
    ,pagination:{
        el: '.swiper-pagination'
        ,type: 'bullets'
        ,clickable: true
    }
    ,navigation: {
        nextEl: '.swiper-button-next'
        ,prevEl: '.swiper-button-prev'
    }
    ,spaceBetween: 30
    
});
// 마우스 호버 시 자동 재생 일시 중지
mySwiper.el.addEventListener('mouseenter', () => {
    mySwiper.autoplay.stop();
});

// 마우스 호버 해제 시 자동 재생 다시 시작
mySwiper.el.addEventListener('mouseleave', () => {
    mySwiper.autoplay.start();
});
