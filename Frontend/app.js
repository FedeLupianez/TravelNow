
function initialize_cards() {
   const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
         if (entry.isIntersecting) {
            entry.target.classList.add("card-entry")
         } else {
            entry.target.classList.remove("card-entry")
         }
      })
   }, { threshold: 0.1 })
   document.querySelectorAll(".card").forEach((card) => observer.observe(card))


   const rankings_containers = document.querySelectorAll(".card-rank-container")
   const rankings = document.querySelectorAll(".card-rank-number")


   for (let i = 0; i < rankings.length; i++) {
      const number = parseFloat(rankings[i].innerHTML)
      if (number > 8) {
         rankings_containers[i].style.backgroundColor = "#7ed957"
      } else {
         rankings_containers[i].style.backgroundColor = "#ff5757"
      }
   }
}

async function load_cards_data() {
   try {
      console.log("cargando datos");

      // const response = await fetch("./cards.json");
      // const data = await response.json();

      const response = await fetch("http://localhost:8000/dest/get_all");
      const data = await response.json();
      const cards_container = document.querySelector(".cards-container");
      for (let i = 0; i < data.length; i++) {
         const card = document.createElement("card-item");
         card.setAttribute("title", data[i].title)
         card.setAttribute("country", data[i].country)
         card.setAttribute("rank", data[i].rank)
         card.setAttribute("price", data[i].price)
         card.setAttribute("image", data[i].image)
         cards_container.appendChild(card)
      }
      console.log("cards cargadas")
      setTimeout(initialize_cards, 100);
   } catch (error) {
      console.log(error);
   }
}

window.addEventListener("DOMContentLoaded", load_cards_data)
