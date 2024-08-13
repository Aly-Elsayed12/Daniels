let nav = document.querySelector("#navbar")
let links = document.querySelectorAll("#navbar a")
let homelink = document.querySelector("#home-a")


const targetSection = document.querySelector('#about'); 
const sectionPosition = targetSection.getBoundingClientRect()

console.log(sectionPosition);




window.addEventListener("scroll" , changNavColor);




links.forEach(link => {
  link.style = "color :white"
});

nav.classList.add("py-4" ,"mt-3")


function changNavColor(){
  if (window.scrollY > (sectionPosition.top - 150) ) {
    nav.classList.remove("navbar-default" , "py-4" ,"mt-3" );
    nav.classList.add("nav-scroll" );
    links.forEach(link => {
      link.style = "color :black"
    });
    
  }else {
    nav.classList.remove("nav-scroll" );
    nav.classList.add("navbar-default" );
    links.forEach(link => {
      link.style = "color :white"
    });
    
    nav.classList.add("py-4" ,"mt-3")
  }
}



