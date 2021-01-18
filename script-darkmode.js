/*jslint browser */
/*global window*/

window.onload = function(){
    
/* Definir variables utilisée (le bouton et le thème) */
var btn = document.querySelector("#customSwitch1");
console.log(btn);

var theme = document.querySelector("#theme-link");

/* Au clic du bouton effectuer une action */

btn.addEventListener("click", function() {
    /* si theme css normal alors utiliser le lien dark */
    if (theme.getAttribute("href") == "css/style.css" ) {
        theme.href = "css/style-darkmode.css";
    /* si theme css dark alors utiliser le lien normal */
    } else {
        theme.href = "css/style.css";
    }
})


}