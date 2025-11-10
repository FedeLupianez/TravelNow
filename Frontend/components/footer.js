class Footer extends HTMLElement {
   constructor() {
      super();
   }

   connectedCallback() {
      this.innerHTML = `
         <footer>
            <div id="footer-social">
               <div class="social">
                  <span class="material-symbols-outlined">
                     location_on
                  </span>
                  <span class="description">Córdoba, Argentina</span>
               </div>
               <div class="social">
                  <span class="material-symbols-outlined">
                     call
                  </span>
                  <span class="description">03547477233</span>
               </div>
               <div class="social">
                  <span class="material-symbols-outlined">
                     email
                  </span>
                  <span class="description">travelnow@gmail.com</span>
               </div>
            </div>
            <div id="footer-logo"
               style="display: flex; align-items: center; justify-content: center; flex-direction: column;">
               <img src="/img/logo.png" id="logo" alt="logo" style="border-radius: 100%; width: 10rem; height: auto;"></img>
               <span>TravelNow</span>
            </div>
         </footer>
      `
   }
}

customElements.define("footer-component", Footer);
