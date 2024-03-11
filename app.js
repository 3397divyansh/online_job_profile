 
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');   
let SliderDom = carouselDom.querySelector('.carousel .list');
 
let timeRunning = 3000;//MAKING TIME TO LOAD NEXT SLIDE
let timeAutoNext = 7000;//TIME FOE HOW MUCH TIME SLIDESHOULD BE DISPLAYEED

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}



let runTimeOut;
let runNextAuto = setTimeout(() => {//RESPONSIBLE FOR THE CLICKING OF THE CLICKING OF THE NEXT ARROW BUTTON
    next.click();
}, timeAutoNext)




function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
      
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }



    clearTimeout(runTimeOut);
    
    runTimeOut = setTimeout(() => {//CLASSES 3WOULD BE REMOVED SO THAT  THE ANIMATION STOPS
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);

    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)


}