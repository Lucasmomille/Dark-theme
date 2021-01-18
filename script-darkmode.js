
/* Definir variables utilisée (le bouton et le thème) */
let btn = document.getElementByID("#customSwitch1");

let theme = document.getElementByID("#theme-link");

/* Au clic du bouton effectuer une action */

btn.addEventListener("click", function() {
    /* si theme css normal alors utiliser le lien dark */
    if (document.getAttribute("href") == style.css ) {
        theme.href = "style-dark.css";
    /* si theme css dark alors utiliser le lien normal */
    } else {
        theme.href = "style.css";
    }
})