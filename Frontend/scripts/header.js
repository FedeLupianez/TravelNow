const nav = document.getElementById("nav-container")
let ticking = false;

window.addEventListener("scroll", () => {
   if (!ticking) {
      window.requestAnimationFrame(() => {
         const y = window.scrollY;
         if (y > 50 && y < 100) {
            nav.classList.remove("logo-hidden")
         } else if (y > 100 && y < 500) {
            nav.classList.add("logo-hidden")
         };
         ticking = false;
      })
      ticking = true;
   }
})
