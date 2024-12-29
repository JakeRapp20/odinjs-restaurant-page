import { loadAbout } from "./modules/about";
import { loadHome } from "./modules/home";
import { loadMenu } from "./modules/menu";
import "./styles.css";


const pageController = (function () {
    // function variables
    const nav = document.querySelector("nav")
    const content = document.querySelector("div#content")

    // Uses switch statement to clear webpage and load the new pages based on the button value that is selected. 
    const loadPage = (button) => {
        const buttonValue = button.target.innerHTML.toLowerCase();
        switch (buttonValue) {
            case "home":
                clearPageContent()
                loadHome();
                break;
                case "menu":
                clearPageContent()
                loadMenu();
                break;
                case "about":
                clearPageContent()
                loadAbout();
                break;
        }
    }
    // adds data-attribute to buttons and executes loadPage(e)
    const navButtons = () => {
        for (let i = 0; i < nav.children.length; i++) {
            let button = nav.children[i];
            button.setAttribute("data-button-id", `${i}`)
            button.addEventListener("click", (e) => {
                loadPage(e);
            })
        }       
    }
    // clears pagecontent 
    const clearPageContent = () => {
        for (let i = 0; i < content.children.length; i++) {
            let child = content.children[i]
            content.removeChild(child);
        }
    }
    return {loadPage, navButtons}
})();

pageController.navButtons()