
function TexasSearch(event) {
  event.preventDefault();

  fetch(
    `https://dc-2020-09-trefle-proxy.herokuapp.com/api/v1/distributions/tex/plants?filter[toxicity]=high&order[toxicity]=high`
  )
    .then(res => res.json())
    .then(apiResponse => {
      const resultsDiv = document.getElementById('results')
      let newHTML = ''
      apiResponse.data.forEach(function(plant) {
        newHTML += `
          <div>
            <h2>${plant.common_name}</h2>
            <h3>${plant.scientific_name}</h3>
            <img width="150" src="${plant.image_url}" />
          </div>
        `
      })
      resultsDiv.innerHTML = newHTML;
    });
}

const searchForm = document.getElementById('searchForm');
searchForm.addEventListener('submit', handleSearch);

function FloridaSearch(event) {
  event.preventDefault();

  fetch(
    `https://dc-2020-09-trefle-proxy.herokuapp.com/api/v1/distributions/fla/plants?filter[toxicity]=high&order[toxicity]=high`
  )
    .then(res => res.json())
    .then(apiResponse => {
      const resultsDiv = document.getElementById('results')
      let newHTML = ''
      apiResponse.data.forEach(function(plant) {
        newHTML += `
          <div>
            <h2>${plant.common_name}</h2>
            <h3>${plant.scientific_name}</h3>
            <img width="150" src="${plant.image_url}" />
          </div>
        `
      })
      resultsDiv.innerHTML = newHTML;
    });
}

const searchForm = document.getElementById('searchForm');
searchForm.addEventListener('submit', handleSearch);

function GeorgiaSearch(event) {
  event.preventDefault();

  fetch(
    `https://dc-2020-09-trefle-proxy.herokuapp.com/api/v1/distributions/geo/plants?filter[toxicity]=high&order[toxicity]=high`
  )
    .then(res => res.json())
    .then(apiResponse => {
      const resultsDiv = document.getElementById('results')
      let newHTML = ''
      apiResponse.data.forEach(function(plant) {
        newHTML += `
          <div>
            <h2>${plant.common_name}</h2>
            <h3>${plant.scientific_name}</h3>
            <img width="150" src="${plant.image_url}" />
          </div>
        `
      })
      resultsDiv.innerHTML = newHTML;
    });
}

const searchForm = document.getElementById('searchForm');
searchForm.addEventListener('submit', handleSearch);
