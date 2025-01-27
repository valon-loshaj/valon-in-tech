// This function will run once the entire page has been loaded
window.onload = function () {
	// Theme switching functionality
	const themeToggle = document.getElementById('themeToggle');
	if (themeToggle) {
		// Check for saved theme preference or default to 'light'
		const savedTheme = localStorage.getItem('theme') || 'light';
		document.documentElement.setAttribute('data-theme', savedTheme);
		updateThemeIcon(savedTheme);
		
		themeToggle.addEventListener('click', () => {
			const currentTheme = document.documentElement.getAttribute('data-theme');
			const newTheme = currentTheme === 'light' ? 'dark' : 'light';
			
			document.documentElement.setAttribute('data-theme', newTheme);
			localStorage.setItem('theme', newTheme);
			updateThemeIcon(newTheme);
		});
	}

	// Menu functionality
	var menuButton = document.getElementById("menuButton");
	if (menuButton) {
		var toggleMenu = function () {
			var menu = document.getElementById("menu");
			
			// Toggle menu visibility with animation
			if (menu.classList.contains("menu-hidden")) {
				menu.style.display = "flex";  // Show menu first
				requestAnimationFrame(() => {  // Wait for next frame to start transition
					menu.classList.remove("menu-hidden");
					menu.classList.add("menu-shown");
					menuButton.classList.add("rotate");
				});
			} else {
				menu.classList.remove("menu-shown");
				menu.classList.add("menu-hidden");
				menuButton.classList.remove("rotate");
				
				// Wait for transition to finish before hiding menu
				setTimeout(() => {
					if (menu.classList.contains("menu-hidden")) {
						menu.style.display = "none";
					}
				}, 300); // Match this with your CSS transition time
			}
		};
		
		menuButton.addEventListener("click", toggleMenu);
		
		// Close menu when clicking outside
		document.addEventListener("click", function(event) {
			var menu = document.getElementById("menu");
			if (!menuButton.contains(event.target) && !menu.contains(event.target) && menu.classList.contains("menu-shown")) {
				toggleMenu();
			}
		});
	}
};

// Helper function to update theme icon
function updateThemeIcon(theme) {
	const themeToggle = document.getElementById('themeToggle');
	if (themeToggle) {
		themeToggle.innerHTML = theme === 'light' 
			? '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>'
			: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>';
	}
}
