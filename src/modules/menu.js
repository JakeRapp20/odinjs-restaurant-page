function loadMenu() {
    let test = document.createElement("div")
    test.textContent = "Menu"
    document.querySelector("div#content").appendChild(test)
}

export {loadMenu}