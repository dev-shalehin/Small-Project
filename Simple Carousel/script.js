const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let index = 0;
const totalSlids = slides.length;

// console.log(totalSlids);
function updateSlids(){
    track.style.transform = `translateX(-${index * 100}%)`;
    
}
nextBtn.addEventListener('click', ()=>{
    index++;
    if(index >= totalSlids ){
        index = 0;
    }

        updateSlids();
})

prevBtn.addEventListener('click', () =>{
    index--
    if(0 > index){
        index= totalSlids -1;
    }
    updateSlids()
})
