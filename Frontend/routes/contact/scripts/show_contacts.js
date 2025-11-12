const show_contacts = document.getElementById("show-contacts");
show_contacts.addEventListener("click", () => {
   if (contacts_container.classList.contains("hidden")) {
      contacts_container.classList.remove("hidden");
      for (let i = 0; i < contacts_container.childElementCount; i++)
         contacts_container.removeChild(contacts_container.lastChild);
      load_contacts();
      return;
   }
   contacts_container.classList.add("hidden");
})
