class Card extends HTMLElement {
   constructor() {
      super();
   }

   connectedCallback() {
      this.title = this.getAttribute("title") || "";
      this.country = this.getAttribute("country") || "";
      this.price = this.getAttribute("price") || "";
      this.image = this.getAttribute("image") || "";
      this.dest_id = this.getAttribute("dest_id") || "";

      this.innerHTML = `
      <a href="/Frontend/routes/destination/destination.html?id=${this.dest_id}">
         <div class="card" style="background-image: url(${this.image}); image-rendering: Optimizespeed;">
            <like-button></like-button>
            <div class="title-card-container">
               <span class="card-title">${this.title}</span>
               <span class="card-country">${this.country}</span>
            </div>
            <span class="card-price">${this.price}</span>
         </div>
      </a>
      `
   }
}
customElements.define("card-item", Card);
