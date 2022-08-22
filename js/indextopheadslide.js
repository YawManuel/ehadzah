let slideIndexx = 0;
showSlidess();

function showSlidess() {
    let i;
    let slides = document.getElementsByClassName("mySlidess");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndexx++;
    if (slideIndexx > slides.length) {slideIndexx = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndexx-1].style.display = "block";  
    dots[slideIndexx-1].className += " active";
    setTimeout(showSlidess, 2000); // Change image every 2 seconds
  }