class Card extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.title = this.getAttribute("title") || "";
    this.country = this.getAttribute("country") || "";
    this.rank = this.getAttribute("rank") || "";
    this.price = this.getAttribute("price") || "";
    this.image = this.getAttribute("image") || "";

    console.log("creating card ...")
    this.innerHTML = `
      <div class="card">
         <a href="index.html" class="image-container">
            <img src="${this.image}" />
            <like-button style="z-index: 10;"/>
         </a>
         <div class="middle-card">
            <div class="title-card-container">
               <span class="card-title">${this.title}</span>
               <span class="card-country">${this.country}</span>
            </div>
            <div class="card-rank-container">
               <span class="card-rank-number">${this.rank}</span>
            </div>
         </div>
         <div class="bottom-card">
            <span class="card-price">1 Noche</span>
            <span class="card-price">${this.price}</span>
         </div>
      </div>
      `
  }
}
customElements.define("card-item", Card);
