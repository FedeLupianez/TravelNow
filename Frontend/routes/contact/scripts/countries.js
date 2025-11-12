const select = document.getElementById("form_destination");

const set_countries = async () => {
   const response = await fetch('https://restcountries.com/v3.1/all?fields=name,flags');
   if (!response.ok)
      return [];

   const data = await response.json();

   for (let i = 0; i < data.length; i++) {
      const option = document.createElement("option");
      option.value = data[i].name.common;
      option.innerHTML = `
            <option value="${data[i].name.common}">
                ${data[i].name.common}
            </option>
        `;
      select.appendChild(option);
   }

}

set_countries();
