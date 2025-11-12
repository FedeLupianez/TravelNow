class Header extends HTMLElement {
   constructor() {
      super();
   }


   connectedCallback() {
      this.innerHTML = `
         <nav id="nav-container">
            <div id="logo">
               <img src="/Frontend/img/logo.png" id="logo" alt="logo" ></img>
               <span>TravelNow</span>
            </div>

            <div id="nav-center">
               <a href="/Frontend/index.html" class="link_span">Paquetes
                  <span class="material-symbols-outlined">
                     keyboard_arrow_down
                  </span>
               </a>
               <a href="/Frontend/index.html" class="link_span">Destinos
                  <span class="material-symbols-outlined">
                     keyboard_arrow_down
                  </span>
               </a>
               <a href="/Frontend/index.html" class="link_span">Promociones
                  <span class="material-symbols-outlined">
                     keyboard_arrow_down
                  </span>
               </a>
               <a href="/Frontend/routes/contact/contact.html" target="_self" class="link_span">Contacto
                  <span class="material-symbols-outlined">
                     keyboard_arrow_down
                  </span>
               </a>
               <button id="mute_volume">
                  <span class="material-symbols-outlined" id="volume_icon">
                     volume_up
                  </span>
               </button>
            </div>
         </nav>
      `
   }
}

customElements.define("header-nav", Header);

// para que cuando haga scrool se oculte el logo
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
