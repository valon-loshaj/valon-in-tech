document.getElementById('menuButton').addEventListener('click', function () {
    document.getElementById('menu').classList.toggle('active');
});

window.onload = function() {
    document.getElementById('nav-panel').innerHTML =
        '<object type="text/html" data="pages/nav-panel.html" ></object>';
};