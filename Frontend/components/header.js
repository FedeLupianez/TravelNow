class Header extends HTMLElement {
   constructor() {
      super();
   }


   connectedCallback() {
      this.innerHTML = `
         <nav id="nav-container">
            <div id="logo">
               <img src="/img/logo.png" id="logo" alt="logo" ></img>
               <span>TravelNow</span>
            </div>

            <div id="nav-center">
               <a href="/index.html" class="link_span">Paquetes
                  <span class="material-symbols-outlined">
                     keyboard_arrow_down
                  </span>
               </a>
               <a href="/index.html" class="link_span">Destinos
                  <span class="material-symbols-outlined">
                     keyboard_arrow_down
                  </span>
               </a>
               <a href="/index.html" class="link_span">Promociones
                  <span class="material-symbols-outlined">
                     keyboard_arrow_down
                  </span>
               </a>
               <a href="routes/contact.html" target="_self" class="link_span">Contacto
                  <span class="material-symbols-outlined">
                     keyboard_arrow_down
                  </span>
               </a>
            </div>
         </nav>
      `
   }
}

customElements.define("header-nav", Header);
