const slides = document.querySelectorAll(".slide");
var counter=1;
slides.forEach((slide,index)=>{
    slide.style.left = `${index*100}%`
})

var slideIndex = 1;
slideImage(slideIndex);


const func = (n) => {
    slideImage(slideIndex += n);

}

function slideImage(n){
    var i;
    var x = document.getElementsByClassName(".slide");
    if(n > x.length){
        slideIndex = 1;
    }
    if(n<x.length){
        slideIndex = x.length;
    }

    for(i = 0;i<x.length;i++){  
        x[i].style.display = "none"
    }
    x[slideIndex-1].style.display = "block"
}

