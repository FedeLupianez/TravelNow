
const contacts_container = document.getElementById("contacts-container");

const load_contacts = async () => {
   const response = await fetch("http://localhost:8080/social/get_contacts");
   if (!response.ok)
      return;
   const data = await response.json();
   data.forEach(element => {
      const contact = document.createElement("contact-item");
      console.log(element);
      contact.setAttribute("name", element.name);
      contact.setAttribute("lastname", element.lastname);
      contact.setAttribute("email", element.email);
      contact.setAttribute("number", element.number);
      contact.setAttribute("subject", element.subject);
      contact.setAttribute("message", element.message);
      contacts_container.appendChild(contact);
   });
}
