// Get references to the tbody element, input field and button
var $tbody = document.querySelector('tbody');
var $dateInput = document.querySelector('#datetime');
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector('#state');
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");
var $searchBtn = document.querySelector('#search');
var $resetBtn = document.querySelector("#reset");

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener('click', handleSearchButtonClick);
$resetBtn.addEventListener("click", handleResetButtonClick);

// Set filteredAddresses to addressData initially
// addressData comes from the addressData.js file
var filteredAddresses = addressData;

// renderTable renders the filteredAddresses to the tbody
function renderTable() {
  $tbody.innerHTML = '';
  for (var i = 0; i < filteredAddresses.length; i++) {
    // Get get the current address object and its fields
    var address = filteredAddresses[i];
    var fields = Object.keys(address);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = address[field];
    }
  }
}
function handleSearchButtonClick() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filterDate = $dateInput.value.trim().toLowerCase();
  if (filterDate !="") {
  // Set filteredAddresses to an array of all addresses whose "state" matches the filter
  filteredAddresses = addressData.filter(function(address) {
    var addressDate = address.datetime.toLowerCase();
    // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
    return addressDate === filterDate;
  });
};

   // Format the user's search by removing leading and trailing whitespace, lowercase the string
 var filterCity = $cityInput.value.trim().toLowerCase();
 if (filterCity !="") {
 // Set filteredAddresses to an array of all addresses whose "state" matches the filter
 filteredAddresses = addressData.filter(function(address) {
   var addressCity = address.city.toLowerCase();
   // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
   return addressCity === filterCity;
 });
};
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filterState = $stateInput.value.trim().toLowerCase();
  if (filterState !="") {
  // Set filteredAddresses to an array of all addresses whose "state" matches the filter
  filteredAddresses = addressData.filter(function(address) {
    var addressState = address.state.toLowerCase();
    // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
    return addressState === filterState;
  });
};
 // Format the user's search by removing leading and trailing whitespace, lowercase the string
 var filterCountry = $countryInput.value.trim().toLowerCase();
 if (filterCountry !="") {
 // Set filteredAddresses to an array of all addresses whose "state" matches the filter
 filteredAddresses = addressData.filter(function(address) {
   var addressCountry = address.country.toLowerCase();
   // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
   return addressCountry=== filterCountry;
 });
};
 var filterShape = $shapeInput.value.trim().toLowerCase();
 if (filterShape !="") {
   // Set filteredAddresses to an array of all addresses whose "state" matches the filter
   filteredAddresses = addressData.filter(function(address) {
     var addressShape = address.shape.toLowerCase();
     return addressShape=== filterShape;
   });
 };
    
 renderTable();

};

function handleResetButtonClick() {
  filteredAddresses = addressData;
  $dateInput.value = "";
  $cityInput.value = "";
  $stateInput.value = "";
  $countryInput.value = "";
  $shapeInput.value = "";
  renderTable();
};


// Render the table for the first time on page load
renderTable();
