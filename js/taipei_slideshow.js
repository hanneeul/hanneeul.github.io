
let current = 0;
showSlides();    

function showSlides() {
    let slides = document.querySelectorAll("#slides > img");
    for(let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'; 
    }
    current++;
    if(current > slides.length) // 마지막 이미지라면 처음으로 이동
        current = 1;            
    slides[current - 1].style.display = 'block'; 
    setTimeout(showSlides, 2000);                
}