
var body = document.querySelector("body")
var txt = document.getElementById("texte")



body.addEventListener("click", (e) => {
    let target = e.target

    if (e.target.id == "hide"){
        txt.style.display = "none"
    }

    if (e.target.id == "show"){
        txt.style.display = "inline"
    }

});