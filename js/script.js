// This function will run once the entire page has been loaded
window.onload = function() {
    // Check if the device is a touch device
    if(!('ontouchstart' in window)) {
        // Add an event listener for the 'mouseover' event on the 'about-me' element
        document.getElementById('about-me').addEventListener('mouseover', function() {
            // Change the background color of the body to '#004800' when the 'about-me' element is hovered over
            document.body.classList.add('about-me-hover');
        });

        // Add an event listener for the 'mouseout' event on the 'about-me' element
        document.getElementById('about-me').addEventListener('mouseout', function() {
            // Reset the background color of the body when the mouse is no longer hovering over the 'about-me' element
            document.body.classList.remove('about-me-hover');
        });

        // Add an event listener for the 'mouseover' event on the 'contact-me' element
        document.getElementById('portfolio').addEventListener('mouseover', function() {
            // Change the background color of the body to '#003500' when the 'contact-me' element is hovered over
            document.body.classList.add('portfolio-hover');
        });

        // Add an event listener for the 'mouseout' event on the 'about-me' element
        document.getElementById('portfolio').addEventListener('mouseout', function() {
            // Reset the background color of the body when the mouse is no longer hovering over the 'about-me' element
            document.body.classList.remove('portfolio-hover');
        });

        // Add an event listener for the 'mouseover' event on the 'contact-me' element
        document.getElementById('contact-me').addEventListener('mouseover', function() {
            // Change the background color of the body to '#003500' when the 'contact-me' element is hovered over
            document.body.classList.add('contact-me-hover');
        });

        // Add an event listener for the 'mouseout' event on the 'contact-me' element
        document.getElementById('contact-me').addEventListener('mouseout', function() {
            // Reset the background color of the body when the mouse is no longer hovering over the 'contact-me' element
            document.body.classList.remove('contact-me-hover');
        });
    }
};

// Add an event listener for the 'click' event on the 'menuButton' element
document.getElementById('menuButton').addEventListener('click', function () {
    var menu = document.getElementById('menu');
    if (menu.classList.contains('menu-hidden')) {
        menu.classList.replace('menu-hidden', 'menu-shown');
    } else {
        menu.classList.replace('menu-shown', 'menu-hidden');
    }
});