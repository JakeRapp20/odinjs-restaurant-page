function loadAbout() {
    let test = document.createElement("div")
    test.textContent = "About"
    document.querySelector("div#content").appendChild(test)
}

export {loadAbout}