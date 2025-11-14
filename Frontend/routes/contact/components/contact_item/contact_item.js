class contact_register extends HTMLElement {
   constructor() {
      super();
   }

   connectedCallback() {
      this.name = this.getAttribute('name') || '';
      this.lastname = this.getAttribute('lastname') || '';
      this.email = this.getAttribute('email') || '';
      this.destination = this.getAttribute('destination') || '';
      this.number = this.getAttribute('number') || '';
      this.subject = this.getAttribute('subject') || '';
      this.message = this.getAttribute('message') || '';

      this.innerHTML = `
        <div class="contact-item">
           <div class="contact-left-info">
              <h2>${this.name} ${(this.lastname == "undefined") ? '' : this.lastname}</h2>
              <p><strong>Email:</strong> ${this.email}</p>
              ${(this.destination == "undefined") ? '' : `<p><strong>Destino:</strong> ${this.destination}</p>`}
              <p><strong>Teléfono:</strong> ${this.number}</p>
              <p><strong>Asunto:</strong> ${this.subject}</p>
           </div>
           <p class="contact-message"><strong>Mensaje:</strong> ${this.message}</p>
        </div>
        `;
   }

}
customElements.define("contact-item", contact_register);
