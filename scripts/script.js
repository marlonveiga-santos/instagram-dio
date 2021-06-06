var image = document.getElementById("logo");

var checkbox = document.getElementById("themeToggle");

/* Verifica se modo escuro está habilitado */
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    checkbox.checked = true;
} else {
    checkbox.checked = false;
}

/* Altera as cores dinamicamente, através do data-attribute selector */
checkbox.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        image.src = "images/instagram-white-logo.png";
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        image.src = "images/instagram-logo.png";
        document.documentElement.setAttribute('data-theme', 'light');
    }
});