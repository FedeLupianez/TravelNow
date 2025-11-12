
class like_button extends HTMLElement {
   constructor() {
      super();
      this.innerHTML = `
      <button class="like-button">
         <span class="material-symbols-outlined">favorite</span>
      </button>
      `
      this.state = false;
      this.icon = this.querySelector(".material-symbols-outlined");
      this.button = this.querySelector("button");

      this.active_color = "red";
      this.inactive_color = "black";

      this.style.cursor = "pointer";
      this.toogle = this.toogle.bind(this);

      this.setup_style();
      this.addEventListener("click", (e) => this.toogle(e));
   }

   setup_style() {
      // setup del button interno
      this.style.color = this.state ? this.active_color : this.inactive_color;
      this.icon.style.fontVariationSettings = `"FILL" ${this.state ? 1 : 0}`;
      this.icon.style.color = this.state ? this.active_color : this.inactive_color;
   }

   toogle(e) {
      e.stopPropagation();
      e.preventDefault();
      this.state = !this.state;
      this.style.color = this.state ? this.active_color : this.inactive_color;
      this.icon.style.fontVariationSettings = `"FILL" ${this.state ? 1 : 0}`;
      this.icon.style.color = this.state ? this.active_color : this.inactive_color;
   }
}

customElements.define("like-button", like_button);
