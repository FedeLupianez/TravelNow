
const img = document.getElementById("landing-image");
const landing_container = document.getElementById("landing-container");
const title = document.getElementById("landing-title");
const country = document.getElementById("landing-country");
const description = document.getElementById("description");
const price = document.getElementById("price");
const rank = document.getElementById("rank");


const url = new URLSearchParams(window.location.search);
const dest_id = url.get('id');


const set_rank_color = (rank_number) => {
   switch (rank_number) {
      case 1:
         rank.style.backgroundColor = "lightred";
         break;
      case 2:
         rank.style.backgroundColor = "orange";
         break;
      case 3:
         rank.style.backgroundColor = "lightyellow";
         break;
      default:
         rank.style.backgroundColor = "lightgreen";
         break;
   }
}

const load_data = async (id) => {
   const response = await fetch(`http://localhost:8080/dest/get_one/${id}`);
   const data = await response.json();
   title.innerHTML = data.title;
   description.innerHTML = data.description;
   price.innerHTML = data.price;
   landing_container.style.backgroundImage = `url(${data.image})`;
   title.innerHTML = data.title;
   country.innerHTML = data.country;

   rank.innerHTML = data.rank;
   set_rank_color(data.rank);
}

window.onload = () => {
   load_data(dest_id);
}

const form = document.getElementById("form");

form.addEventListener("submit", async (e) => {
   e.preventDefault()
   const data = {
      name: document.getElementById("form_name").value,
      lastname: document.getElementById("form_lastname").value,
      email: document.getElementById("form_email").value,
      number: document.getElementById("form_number").value,
      dest_id: dest_id
   }
   const button = document.getElementById("reserve-button");


   const response = await fetch("http://localhost:8080/dest/reserve", {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
   })

   if (response.ok) {
      button.innerHTML = "Reservado";
      button.style.backgroundColor = "lightgreen";
   } else {
      button.innerHTML = "Error";
      button.style.backgroundColor = "red";
   }

})
