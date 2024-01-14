// This function will run once the entire page has been loaded
window.onload = function () {
	// Check if the device is a touch device
	if (!("ontouchstart" in window)) {
		// Add an event listener for the 'mouseover' event on the 'about-me' element
		var aboutMe = document.getElementById("about-me");
		if (aboutMe) {
			document
				.getElementById("about-me")
				.addEventListener("mouseover", function () {
					// Change the background color of the body to '#31bc31' when the 'about-me' element is hovered over
					document.body.classList.add("about-me-hover");
				});
			// Add an event listener for the 'mouseout' event on the 'about-me' element
			document
				.getElementById("about-me")
				.addEventListener("mouseout", function () {
					// Reset the background color of the body when the mouse is no longer hovering over the 'about-me' element
					document.body.classList.remove("about-me-hover");
				});
		}

		// Add an event listener for the 'mouseover' event on the 'contact-me' element
		var portfolio = document.getElementById("portfolio");
		if (portfolio) {
			document
				.getElementById("portfolio")
				.addEventListener("mouseover", function () {
					// Change the background color of the body to '#e8d90b' when the 'contact-me' element is hovered over
					document.body.classList.add("portfolio-hover");
				});

			// Add an event listener for the 'mouseout' event on the 'about-me' element
			document
				.getElementById("portfolio")
				.addEventListener("mouseout", function () {
					// Reset the background color of the body when the mouse is no longer hovering over the 'about-me' element
					document.body.classList.remove("portfolio-hover");
				});
		}

		// Add an event listener for the 'mouseover' event on the 'blog' element
		var blog = document.getElementById("blog");
		if (blog) {
			document
				.getElementById("blog")
				.addEventListener("mouseover", function () {
					// Change the background color of the body to '#41574a' when the 'contact-me' element is hovered over
					document.body.classList.add("blog-hover");
				});

			// Add an event listener for the 'mouseout' event on the 'blog' element
			document
				.getElementById("blog")
				.addEventListener("mouseout", function () {
					// Reset the background color of the body when the mouse is no longer hovering over the 'contact-me' element
					document.body.classList.remove("blog-hover");
				});
		}

		// Add an event listener for the 'mouseover' event on the 'contact-me' element
		var contactMe = document.getElementById("contact-me");
		if (contactMe) {
			document
				.getElementById("contact-me")
				.addEventListener("mouseover", function () {
					// Change the background color of the body to '#ce7f18' when the 'contact-me' element is hovered over
					document.body.classList.add("contact-me-hover");
				});

			// Add an event listener for the 'mouseout' event on the 'contact-me' element
			document
				.getElementById("contact-me")
				.addEventListener("mouseout", function () {
					// Reset the background color of the body when the mouse is no longer hovering over the 'contact-me' element
					document.body.classList.remove("contact-me-hover");
				});
		}

		// Add an event listener for the 'click' event on the 'menuButton' hamburger icon element
		var menuButton = document.getElementById("menuButton");
		if (menuButton) {
			var toggleMenu = function () {
				var menu = document.getElementById("menu");
				if (menu.classList.contains("menu-hidden")) {
					menu.classList.remove("menu-hidden");
					menu.classList.add("menu-shown");
				} else {
					menu.classList.remove("menu-shown");
					menu.classList.add("menu-hidden");
				}
			};
			menuButton.addEventListener("click", toggleMenu);
			menuButton.addEventListener("touchstart", toggleMenu);
		}
	}
};
