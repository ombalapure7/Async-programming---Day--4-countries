// Fetch list of countries
async function getCountries() {
  const data = await fetch("https://restcountries.eu/rest/v2/all");
  const countries = await data.json();

  // Store list of countries
  const countriesArr = [];
  countries.forEach((country) => {
    // Select the fields to display
    countriesArr.push({
      name: country.name,
      capital: country.capital,
      region: country.region,
      population: country.population,
      flag: country.flag,
    });
  });

  // Template to create a card
  let createCard = (name, flag, population, region, capital) => {
    return `
      <div class="image-wrapper">
        <img src="${flag}" />
      </div>
      <div class="description">
        <h4>${name}</h4>
        <p>Population: ${population}</p>
        <p>Region: ${region}</p>
        <p>Capital: ${capital}</p>
      </div>`;
  };

  // Iterate over the countires array and generate cards
  for (let i = 1; i <= countriesArr.length; i++) {
    let div = document.createElement("div");
    div.className = `card`;

    div.innerHTML = createCard(
      countriesArr[i].name,
      countriesArr[i].flag,
      countriesArr[i].population,
      countriesArr[i].region,
      countriesArr[i].capital
    );

    // Append the cards to each grid cells
    document.querySelector(`.item-${i}`).append(div);
  }
}

// Execute the function when the page loads
window.onload = getCountries();
