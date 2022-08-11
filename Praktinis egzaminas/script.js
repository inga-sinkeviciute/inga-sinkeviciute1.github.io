// AOS starter
AOS.init();

const navigation = document.getElementById("navigation")
const links = document.querySelector(".links")
const anchors = links.querySelectorAll("a")
const headings = document.querySelectorAll("h2")

navigation.addEventListener("click", function(){
   this.classList.toggle("rotate")
   links.classList.toggle("open")
})


window.addEventListener("resize", function(){
   if(window.innerWidth > 768){
      navigation.classList.remove("rotate")
      links.classList.remove("open")
   }
})

// Change links style on scroll position
const sections = document.querySelectorAll("section")
window.addEventListener("scroll", function(){
   let current = ""
   for(var section of sections){
      const sectionTop = section.offsetTop
      if(window.pageYOffset >= sectionTop / 1.2) {
         current = section.getAttribute("id")
      }
   }

   for(var anchor of anchors){
      anchor.classList.remove("selected")
      if(anchor.getAttribute("href") === "#" + current) {
         anchor.classList.add("selected")
      }
   }
})

anchors[0].classList.add("selected")

const swiper = new Swiper('.swiper', {
   // Optional parameters
   direction: 'horizontal',
 
   // If we need pagination
   pagination: {
     el: '.swiper-pagination',
   }
});

// Tabs
const buttons = document.querySelectorAll("button")
for(var x of buttons){
   x.addEventListener("click", function(){
       let index = this.getAttribute("index")
       // Pakeičia mygtukų stilių
       for(var x of buttons){
           x.classList.remove("selected")
       }
       this.classList.add("selected")

       // Nuskrolina pagal index
       swiper.slideTo(index)
   })
}


swiper.on("slideChange", function(){
   let currentIndex = swiper.activeIndex
   // Pakeičia mygtukų stilių
   for(var x of buttons){
        x.classList.remove("selected")
   }
   buttons[currentIndex].classList.add("selected")
})

