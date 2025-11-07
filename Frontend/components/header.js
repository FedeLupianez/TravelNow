class Header extends HTMLElement {
  constructor() {
    super();
  }


  connectedCallback() {
    this.innerHTML = `
         <nav id="nav-container">
            <div id="logo">
               <img src="img/logo.png" id="logo" alt="logo" ></img>
               <span>TravelNow</span>
            </div>

            <div id="nav-center">
               <a href="/index.html" class="link_span">Packages
                  <span class="material-symbols-outlined">
                     keyboard_arrow_down
                  </span>
               </a>
               <a href="/index.html" class="link_span">Destinations
                  <span class="material-symbols-outlined">
                     keyboard_arrow_down
                  </span>
               </a>
               <a href="/index.html" class="link_span">Promotions
                  <span class="material-symbols-outlined">
                     keyboard_arrow_down
                  </span>
               </a>
               <a href="routes/contact.html" target="_self" class="link_span">Contact
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
