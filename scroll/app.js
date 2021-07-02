
// set date
const date = document.getElementById("date")
date.innerHTML = new Date().getFullYear();

// close links

const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function(){
   // linksContainer.classList.toggle("show-links");
   const containerHeight = linksContainer.getBoundingClientRect().height;
   const linksHeight = links.getBoundingClientRect().height;

   if (containerHeight === 0){
       linksContainer.style.height = `${linksHeight}px`;
   }else{
       linksContainer.style.height = 0;
   }
})

// fixed navbar

const navBar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function(){
    const scrollHeigh = window.pageYOffset;
    const navHeight = navBar.getBoundingClientRect().height;
    if (scrollHeigh > navHeight){
        navBar.classList.add("fixed-nav")
    }else{
        navBar.classList.remove("fixed-nav")
    }
    // add toplinks
    
    if (scrollHeigh > 1000){
        console.log("hello");
        topLink.classList.add("show-link");
    }else{
        topLink.classList.remove("show-link")
    }
})