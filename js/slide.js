var slides = document.querySelector('slides');
var slide = document.querySelectorAll('slide li');
var slideCount = slide.length;

var currentIdx = 0;
var slideWidth = 200;
var slideMargin = 30;
var leftBtn = document.querySelector('left');
var rightBtn = document.querySelector('right');


window.onload = function (){
    //복사본 생성
    makeClone();
    
    //li 복사본 생성
    function makeClone(){
        for(var i = 0; i < slideCount; i++){
            var cloneSlide = slide[i].cloneNode(true);
            console(cloneSlide)
            cloneSlide.classList.add('clone');
            slides.appendChild(cloneSlide);
            console.log('append')
        }
        for(var i = slideCount-1; i > 0; i--){
            var cloneSlide = slide[i].cloneNode(true);
            cloneSlide.classList.add('clone');
            slides.prepend(cloneSlide);
        }
        updateWidth();
        setInitialPos();
        setTimeout(function (){
            
            slides.classList.add('animated');
        })
    }
}


function updateWidth(){
    var currentSlides = document.querySelectorAll('slide li');
    var newSlideCount = currentSlides.length;
    var newWidth = (slideWidth + slideMargin)*newSlideCount - slideMargin + 'px';
    slides.style.width = newWidth;
}
function setInitialPos(){
    var initialTransVal = -(slideWidth + slideMargin)*slideCount;
    slides.style.transform = 'translateX(' + initialTransVal + 'px)';
}
rightBtn.addEventListener('click', function(){
    moveSlide(currentIdx + 1);
})
leftBtn.addEventListener('click', function(){
    moveSlide(currentIdx - 1);
})
function moveSlide(num){
    slides.style.left = -num * (slideWidth + slideMargin) + 'px';
}