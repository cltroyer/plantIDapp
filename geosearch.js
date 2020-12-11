// directory of states
var wgs_states = {
    "AL": "ala", // Alabama 
    "AK": "ask", // Alaska 
    "AZ": "ari", // Arizona 
    "AR": "ark", // Arkansas 
    "CA": "cal", // California 
    "CO": "col", // Colorado 
    "CT": "cnt", // Connecticut 
    "DE": "del", // Delaware 
    "DC": "wdc", // District of Columbia 
    "FL": "fla", // Florida 
    "GA": "geo", // Georgia 
    "HI": "haw", // Hawaii
    "ID": "ida", // Idaho 
    "IL": "ill", // Illinois 
    "IN": "ini", // Indiana 
    "IA": "iow", // Iowa 
    "KS": "kan", // Kansas 
    "KY": "kty", // Kentucky 
    "LA": "lou", // Louisiana 
    "ME": "mai", // Maine 
    "MD": "mry", // Maryland 
    "MA": "mas", // Massachusetts 
    "MI": "mic", // Michigan 
    "MN": "min", // Minnesota 
    "MS": "msi", // Mississippi 
    "MO": "mso", // Missouri 
    "MT": "mnt", // Montana 
    "NE": "neb", // Nebraska 
    "NV": "nev", // Nevada 
    "NH": "nwh", // New Hampshire 
    "NJ": "nwj", // New Jersey 
    "NM": "nwm", // New Mexico 
    "NY": "nwy", // New York 
    "NC": "nca", // North Carolina 
    "ND": "nda", // North Dakota 
    "OH": "ohi", // Ohio 
    "OK": "okl", // Oklahoma 
    "OR": "ore", // Oregon 
    "PA": "pen", // Pennsylvania 
    "RI": "rho", // Rhode Island 
    "SC": "sca", // South Carolina 
    "SD": "sda", // South Dakota 
    "TN": "ten", // Tennessee 
    "TX": "tex", // Texas 
    "UT": "uta", // Utah 
    "VT": "ver", // Vermont 
    "VA": "vrg", // Virginia 
    "WA": "was", // Washington 
    "WV": "wva", // West Virginia 
    "WI": "wis", // Wisconsin 
    "WY": "wyo", // Wyoming 
  }
function initMap () {
    console.log('something')
    var form=document.getElementById('searchform')
  form.addEventListener('submit', handlesearch)
}
// function that handles taking user input: state and passing that through Google Maps to identify location
function handlesearch (event) {
    event.preventDefault();
    console.log(event.target.elements.search.value)
    var search=event.target.elements.search.value
    var geocoder= new google.maps.Geocoder();
    geocoder.geocode({
           address: search, 
           componentRestrictions: {
               country: 'US'
           }
    }, function(results, status){
        console.log(results, status)
        if(results.length>0){
// function that filters through results found by Google Maps to isolate state
            var state=results[0].address_components.find(function(address){
                return address.types.filter(function(type){
                    return type=='administrative_area_level_1'
                }).length
            })
            console.log(state.short_name)
           localStorage.setItem('statecode',wgs_states[state.short_name])
           Treflesearch()
        }
    })
}
//taking state code and providing Trefle with it in order to pull list of plants by user dictated location
function Treflesearch() {
    var statecode=localStorage.getItem ('statecode')
    if(!statecode){
        alert('Please search for a state')
        return
    }
    fetch(`https://dc-2020-09-trefle-proxy.herokuapp.com/api/v1/distributions/${statecode}/plants`)
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
