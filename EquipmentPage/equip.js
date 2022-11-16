document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementsByClassName('toggle-button')[0];

    const navbarLinks = document.getElementsByClassName('navbar-links')[0];

    toggleButton.addEventListener('click', () => {
        navbarLinks.classList.toggle('active');
        console.log(toggleButton);
    });
});

// let section = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('.content aside nav a');

// window.onscroll = () => {
//     section.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if (top >= offset && top < offset + height) {
//             navLinks.forEach(links => {
//                 links.classList.remove('active');
//                 document.querySelector('.content aside nav a[href*=' + id + ']').classList.add('active');
//             });
//         }
//     });
// };
