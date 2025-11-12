const form = document.getElementById("form");
const log = document.getElementById("log");

form.addEventListener("submit", async (e) => {
   e.preventDefault()
   const data = {
      name: document.getElementById("form_name").value,
      lastname: document.getElementById("form_lastname").value,
      email: document.getElementById("form_email").value,
      number: document.getElementById("form_number").value,
      subject: document.getElementById("form_subject").value,
      message: document.getElementById("form_message").value,
      destination: document.getElementById("form_destination").value
   }

   try {
      const response = await fetch("http://localhost:8080/social/contact", {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(data)
      })
      console.log("message sent");
      log.classList.remove("error");
      log.classList.add("success");
      log.innerHTML = "done";
   } catch (error) {
      console.warn("message not sent");
      log.classList.remove("success");
      log.classList.add("error");
      log.innerHTML = "error";
   }
   log.style.display = "flex";
})
