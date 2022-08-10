/* global info */
var windowWidth = window.innerWidth ; 
var centerOfWindow = window.innerWidth/2;
var app = document.getElementById('typing');
var typewriter = new Typewriter(app, {
  loop: true,
  delay: 0,
});
typewriter
  .typeString("Hey I'm <span class='myname'> Fady </span> ")
  .pauseFor(300)
  .deleteChars(1)
  .typeString('Front End Devloper')
  .pauseFor(300)
  .deleteChars(18)
  .typeString('software engineer')
  .pauseFor(300)
  .deleteChars(17)
  .pauseFor(1000)
  .start();



  window.onscroll = ()=>{
    var headerOffset = (document.getElementsByClassName("header")[0].offsetTop ) - 200
    var info =( document.getElementsByClassName("info")[0].offsetTop) - 200
    var portofilio =( document.getElementsByClassName("portofilio")[0].offsetTop) - 200
    var contactMe = (document.getElementsByClassName("contact-me")[0].offsetTop) -200
    contactMe = contactMe - 200
    var windowOffset = window.pageYOffset
if( headerOffset<windowOffset && windowOffset <info ){
  document.getElementsByClassName("navbar")[0].querySelector(".active").classList.remove("active")
  document.getElementsByClassName("navbarList")[0].classList.add("active")
}
else if (windowOffset >= info && windowOffset < portofilio){
  document.getElementsByClassName("navbar")[0].querySelector(".active").classList.remove("active")
  document.getElementsByClassName("navbarList")[1].classList.add("active")
}
else if (windowOffset >= portofilio && windowOffset < contactMe){
  document.getElementsByClassName("navbar")[0].querySelector(".active").classList.remove("active")
  document.getElementsByClassName("navbarList")[2].classList.add("active")
}
else if (windowOffset >= contactMe ){
  document.getElementsByClassName("navbar")[0].querySelector(".active").classList.remove("active")
  document.getElementsByClassName("navbarList")[3].classList.add("active")
}


if(windowOffset >= info - 100){
  document.getElementsByClassName("aboutMe")[0].style.cssText += "transform: translateX(0);"
  document.getElementsByClassName("progress")[0].style.cssText += "transform: translateX(0);"
}

}
document.getElementsByClassName("navbar")[0].onclick = (e)=>{
  var scrollTo = e.target.id
  var headerOffset = document.getElementsByClassName("header")[0].offsetTop
  var info = document.getElementsByClassName("info")[0].offsetTop
  var portofilio = document.getElementsByClassName("portofilio")[0].offsetTop
  var contactMe = document.getElementsByClassName("contact-me")[0].offsetTop
  switch (scrollTo) {
     case "home-link":window.scrollTo({top : headerOffset , left : 0 , behavior : "smooth"}) ; break ;  
     case "about-link":window.scrollTo({top : info, left : 0 , behavior : "smooth"}) ; break ; 
     case "portfolio-link":window.scrollTo({top : portofilio, left : 0 , behavior : "smooth"}) ; break ; 
     case "contact-link":window.scrollTo({top : contactMe, left : 0 , behavior : "smooth"}); break ; 
     default : break ; 
    }
}


/* portoflio */
var numberOfSlides;  //5
var PreviosPointSlide = 0;  //0 1 2 3 4
var currentPointSlide = 0 ; 
var listSlideElement = document.getElementsByClassName("listSlide")[0]                //point
var slideContainerElement = document.getElementsByClassName("slide-container")[0];    //slide container
goSlide = (e)=>{
  currentPointSlide = e.target.getAttribute("name");
  numberOfSlides = listSlideElement.children.length ; 
    for(let i = 0 ; i<numberOfSlides ; i++){
          if(listSlideElement.children[i].classList.contains("active")){
              listSlideElement.children[i].classList.remove("active");
              slideContainerElement.children[i].classList.remove("active");
              PreviosPointSlide = listSlideElement.children[i].getAttribute("name");
          }
    }
    slideContainerElement.children[Number(currentPointSlide)].classList.add("active");
    e.target.classList.add("active");
if(currentPointSlide !=PreviosPointSlide ){
  for(let i = 0 ; i<numberOfSlides ; i++){
    document.getElementsByClassName("slide")[i].style = "transform: translateX(-"+ (currentPointSlide) *100+"%); "; 
  }
}
}



var isDbClicked = false ; 
startSwiping = ()=>{
  isDbClicked = true 
}

var activeSlide = 0 ;
var transX ; //0 -400
var slideLength = slideContainerElement.children.length ; 
swiping = (e)=>{
  if(isDbClicked){
    var move = ((e.clientX - centerOfWindow) / (windowWidth - centerOfWindow)) * 100 ;
    for(let i = 0  ; i <slideLength ; i++){
      if(slideContainerElement.children[i].classList.contains("active")){
        activeSlide = Number(slideContainerElement.children[i].getAttribute("name")) //0
        transX = -(100 * activeSlide) ; 
        transX = transX + move           
      }
  }
  traslateXfunc(slideContainerElement,transX , slideLength);
  }
}


endSwiping = ()=>{
  isDbClicked = false ;  
    if(transX < 100 && transX > -50){
      traslateXfunc(slideContainerElement,0 , slideLength);
      removeAndActive(0)
    }
    if(transX <-50  && transX> -150 ){
     traslateXfunc(slideContainerElement,-100 , slideLength);
     removeAndActive(1);
    }
    if(transX <-150 && transX > -250){
     traslateXfunc(slideContainerElement,-200 , slideLength);
     removeAndActive(2);
    }
    if(transX <= -250 && transX > -350){
     traslateXfunc(slideContainerElement,-300 , slideLength);
     removeAndActive(3);
    }
    if(transX <= -350 && transX > -650){
     traslateXfunc(slideContainerElement,-400 , slideLength);
     removeAndActive(4);
    }
    else{
    }
}
removeAndActive = (index)=>{
  for(let i = 0 ; i< slideLength ; i++){
    if( slideContainerElement.children[i].classList.contains("active")){
      slideContainerElement.children[i].classList.remove("active");
      listSlideElement.children[i].classList.remove("active");
    }
  }
    slideContainerElement.children[index].classList.add("active")
    listSlideElement.children[index].classList.add("active");
}

traslateXfunc= (slideContainer,transxlateBy , slideLength)=>{
  for(let i = 0  ; i <slideLength ; i++){
    slideContainer.children[i].style = "transform: translateX("+ transxlateBy +"%); ";
}
}

document.getElementsByClassName("nav-button")[0].addEventListener("click"  , function(){
  document.getElementsByClassName("nav-button-content")[0].classList.toggle("show");
});



window.addEventListener("resize",function(){
  windowWidth = window.innerWidth ; 
  centerOfWindow = window.innerWidth/2;
});


