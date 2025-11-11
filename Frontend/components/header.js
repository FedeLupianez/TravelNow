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
