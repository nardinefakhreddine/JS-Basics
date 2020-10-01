
document.querySelector("body").addEventListener("click", (e) => {

    switch(e.target.className){
        case "color green":

            document.querySelector("body").firstElementChild.style.color = "green";
            break;

        case "color red":

            document.querySelector("body").firstElementChild.style.color = "red";
            break;

        case "color blue":

            document.querySelector("body").firstElementChild.style.color = "blue";
            break;
    }
       


})