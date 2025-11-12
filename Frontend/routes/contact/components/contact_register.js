class contact_register extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        this.name = this.getAttribute('name') || '';
        this.innerHTML = `
        <div class="contact-item">
            <span>${this.name}</span>
        </div>
        `;
    }

}
customElements.define("contact-item", contact_register);