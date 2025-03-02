//=========  기본 슬라이드 구현 시작 =========//

//슬라이드 전체 크기 구하기
const slide = document.querySelector('.slide');
let slideWidth = slide.clientWidth;

//버튼 엘리먼트 선택
const prevBtn = document.querySelector(".slide_left");
const nextBtn = document.querySelector(".slide_right");

let slideItems = document.querySelectorAll('.slide_item');
const maxSlide = slideItems.length;

//현재 슬라이드 위치
let currSlide = 1;

// 페이지네이션 생성
const pagination = document.querySelector(".slide_pagination");

for (let i = 0; i < maxSlide; i++) {
    if (i === 0) {pagination.innerHTML += `<li class="active">•</li>`;}
    else {pagination.innerHTML += `<li>•</li>`;}
}
const paginationItems = document.querySelectorAll(".slide_pagination > li");

//=========  기본 슬라이드 구현 끝 =========//







//right btn
function fnRightMove(){
    currSlide++;
    if(currSlide <= maxSlide){
        // 슬라이드를 이동시키기 위한 offset 계산
        const offset = slideWidth * currSlide;
        // 각 슬라이드 아이템의 left에 offset 적용
        slideItems.forEach((i) => {
            i.setAttribute("style", `left: ${-offset}px`);
        });
        // 슬라이드 이동 시 현재 활성화된 pagination 변경
        paginationItems.forEach((i) => i.classList.remove("active"));
        paginationItems[currSlide - 1].classList.add("active");
    }
    else{
        //마지막 슬라이드에서 첫 슬라이드로 이동
        currSlide = 0;
        let offset = slideWidth * currSlide;
        slideItems.forEach((i)=>{
            i.setAttribute("style", `transition:${0}s; left:${-offset}px`);
        });
        currSlide++;
        offset = slideWidth * currSlide;
        
        setTimeout(()=>{
            //각 슬라이드 아이템의 left 에 offset 적용
            slideItems.forEach((i) => {
                i.setAttribute("style", `transition: ${0.15}s; left: ${-offset}px`);
            });
        }, 0);
        //슬라이드 이동 시 현재 활성화된 pagination 변경
        paginationItems.forEach((e) => {
            e.classList.remove("active");
        });
        paginationItems[currSlide - 1].classList.add("active");
    }
}

//left btn
function fnLeftMove() {
    currSlide--;
    // 1번째 슬라이드 이하로 넘어가지 않게 하기 위해서
    if (currSlide > 0) {
        // 슬라이드를 이동시키기 위한 offset 계산
        const offset = slideWidth * currSlide;
        // 각 슬라이드 아이템의 left에 offset 적용
        slideItems.forEach((i) => {
            i.setAttribute("style", `left: ${-offset}px`);
        });
        // 슬라이드 이동 시 현재 활성화된 pagination 변경
        paginationItems.forEach((i) => i.classList.remove("active"));
        paginationItems[currSlide - 1].classList.add("active");
    } else {
        // 무한 슬라이드 기능 - currSlide 값만 변경해줘도 되지만 시각적으로 자연스럽게 하기 위해 아래 코드 작성
        currSlide = maxSlide + 1;
        let offset = slideWidth * currSlide;
        // 각 슬라이드 아이템의 left에 offset 적용
        slideItems.forEach((i) => {
            i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
        });
        currSlide--;
        offset = slideWidth * currSlide;
        setTimeout(() => {
            // 각 슬라이드 아이템의 left에 offset 적용
            slideItems.forEach((i) => {
                // i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
                i.setAttribute("style", `transition: ${0.15}s; left: ${-offset}px`);
            });
        }, 0);
        // 슬라이드 이동 시 현재 활성화된 pagination 변경
        paginationItems.forEach((i) => i.classList.remove("active"));
        paginationItems[currSlide - 1].classList.add("active");
    }
}

// 버튼 엘리먼트에 클릭 이벤트 추가하기
nextBtn.addEventListener("click", () => {
    // 이후 버튼 누를 경우 현재 슬라이드를 변경
    fnRightMove();
});
// 버튼 엘리먼트에 클릭 이벤트 추가하기
prevBtn.addEventListener("click", () => {
    // 이전 버튼 누를 경우 현재 슬라이드를 변경
    fnLeftMove();
});

// 브라우저 화면이 조정될 때 마다 slideWidth를 변경하기 위해
window.addEventListener("resize", () => {
    slideWidth = slide.clientWidth;
});

// 각 페이지네이션 클릭 시 해당 슬라이드로 이동하기
for (let i = 0; i < maxSlide; i++) {
    // 각 페이지네이션마다 클릭 이벤트 추가하기
    paginationItems[i].addEventListener("click", () => {
        // 클릭한 페이지네이션에 따라 현재 슬라이드 변경해주기(currSlide는 시작 위치가 1이기 때문에 + 1)
        currSlide = i + 1;
        // 슬라이드를 이동시키기 위한 offset 계산
        const offset = slideWidth * currSlide;
        // 각 슬라이드 아이템의 left에 offset 적용
        slideItems.forEach((i) => {
            i.setAttribute("style", `left: ${-offset}px`);
        });
        // 슬라이드 이동 시 현재 활성화된 pagination 변경
        paginationItems.forEach((i) => i.classList.remove("active"));
        paginationItems[currSlide - 1].classList.add("active");
    });
}

/*
//=========  무한 슬라이드 구현 시작 =========//
//무한 슬라이드를 위한 start, end 복제
const startSlide = slideItems[0];
const endSlide = slideItems[slideItems.length - 1];

//엘리먼트 생성
const startElem = document.createElement(startSlide.tagName);
const endElem = document.createElement(endSlide.tagName);

//엘리먼트에 클래스 적용, html 내용 복사 동일하게
endSlide.classList.array.forEach((element) => {
    endElem.classList.add(element);
    endElem.innerHTML = endSlide.innerHTML;
});
startSlide.classList.array.forEach((element) => {
    startElem.classList.add(element);
    startElem.innerHTML = startSlide.innerHTML;
});

//각 복제한 엘리먼트를 각 위치에 추가
slideItems[0].before(endElem);
slideItems[slideItems.length - 1].after(startElem);

//슬라이드 전체를 선택해 값을 변경해주기 위해 슬라이드 전체 선택
slideItems = document.querySelectorAll('.slide_item');
let offset = slideWidth * currSlide;
slideItems.forEach((i) => {
    i.setAttribute("style", `left:${-offset}px`);
})
//=========  무한 슬라이드 구현 끝 =========//
*/