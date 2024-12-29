function loadHome() {
    let test = document.createElement("div")
    test.textContent = "HOME"
    document.querySelector("div#content").appendChild(test)
}

export {loadHome}