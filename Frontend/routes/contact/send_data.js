const form = document.getElementById("form");

form.addEventListener("submit", async (e) => {
   e.preventDefault()
   const data = {
      name: document.getElementById("form_name").value,
      lastname: document.getElementById("form_lastname").value,
      email: document.getElementById("form_email").value,
      number: document.getElementById("form_number").value,
      subject: document.getElementById("form_subject").value,
      message: document.getElementById("form_message").value
   }

   const response = await fetch("http://localhost:8000/social/contact", {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
   })
   const result = await response.json();
   if (result.ok) {
      console.log("message sent");
   } else {
      console.warn("message not sent")
   }
})
