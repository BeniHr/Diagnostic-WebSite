document.addEventListener("DOMContentLoaded", function(){
    const toggleButton = document.getElementsByClassName('toggle-button')[0];

const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
navbarLinks.classList.toggle('active');
console.log(toggleButton)
})
});

const parent = document.getElementById("entries");

document.getElementById("map-button").addEventListener("click", newEntry);

function newEntry() {
    const newDiv = document.createElement("div");
    newDiv.style.width = '100%';
    newDiv.style.height = '30rem';
    newDiv.style.backgroundColor = '#1a62a0';
    newDiv.style.marginTop = '2rem';
    newDiv.setAttribute('id', 'map1')
    parent.appendChild(newDiv);
    window.initMap = initMap;
    // execOnce();
}

function initMap() {
    const suceava = { lat: -25.344, lng: 131.031 }
    const map = new google.maps.Map(document.getElementById("entries"), {
        zoom: 4,
        center: suceava,
      });

      const marker = new google.maps.Marker({
        position: suceava,
        map: map,
      });
}

