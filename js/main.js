
// mobile navigation code
const hamburgerBtn = document.querySelector(".hamburger");
hamburgerBtn.addEventListener("click", () => {
     hamburgerBtn.classList.toggle("open");
 });

 const navMenu = document.querySelector(".nav-menu");
 hamburgerBtn.addEventListener("click", () => {
     navMenu.classList.toggle("open");
 });

 const navLink = document.querySelectorAll(".nav-link");
 navLink.forEach((item) => {
     item.addEventListener("click", () => {
       if (hamburgerBtn.classList.contains("open")) {
         hamburgerBtn.classList.toggle("open");
         navMenu.classList.toggle("open");
       }
     });
   });

