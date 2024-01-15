// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 3,  
//   slidesPerGroup: 3,
//   spaceBetween: 20,
//   centeredSlides: false,  //false로 바꾸면 왼쪽부터 순차적으로 슬라이드가 들어섬
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });


const mySwiper = new Swiper('.swiper-container', {
    //옵션설정
    direction: 'horizontal' //수평(수직은 vertical, 기본값:horizontal)
    ,loop: true //슬라이드 무한 루프(기본값:true)
    ,loopAdditionalSlides: 1
    ,autoplay: {
        delay: 8000 //자동재생(기본값:false, delay:딜레이 시간)
    }
    ,speed: 500 //슬라이드 애니메이션 속도(기본값:300)
    ,slidesPerView: 'auto' //한번에 보여지는 슬라이드 개수 (auto->슬라이드 넓이,높이에 따라 자동 계산)
    ,pagination:{
        el: '.swiper-pagination'
        ,type: 'bullets'
        ,clickable: true
    }
    ,navigation: {
        nextEl: '.swiper-button-next'
        ,prevEl: '.swiper-button-prev'
    }
    ,spaceBetween: 10
    
});