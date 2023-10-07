

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

function initMap() {
  const mapOptions = {
      center: { lat: YOUR_LATITUDE, lng: YOUR_LONGITUDE }, // Replace with your coordinates
      zoom: 15 // Adjust the zoom level as needed
  };
  const map = new google.maps.Map(document.getElementById("map-container"), mapOptions);
}

// Load the Google Map when the page is loaded
google.maps.event.addDomListener(window, "load", initMap);

document.querySelector('#contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.elements.name.value = '';
  e.target.elements.email.value = '';
  e.target.elements.message.value = '';
});
