
const show_contacts = document.getElementById("show-contacts");
const contacts_container = document.getElementById("contacts-container");


const load_contacts = async () => {
    const response = await fetch("http://localhost:8080/social/get_contacts");
    if (!response.ok)
        return;
    const data = await response.json();
    data.forEach(element => {
        const contact = document.createElement("contact-item");
        contact.setAttribute("name", element.name);
        contact.setAttribute("lastname", element.lastname);
        contact.setAttribute("email", element.email);
        contact.setAttribute("number", element.number);
        contact.setAttribute("subject", element.subject);
        contact.setAttribute("message", element.message);
        contacts_container.appendChild(contact);
    });
}
show_contacts.addEventListener("click", () => {
    if (contacts_container.classList.contains("hidden")){
        contacts_container.classList.remove("hidden");
        load_contacts();
        return;
    }
    contacts_container.classList.add("hidden");
    show_contacts.style.display = "flex";
})
