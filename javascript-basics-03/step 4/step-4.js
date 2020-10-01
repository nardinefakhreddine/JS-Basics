

var confirm = document.getElementById("confirmation")

document.querySelector('button').addEventListener("click", (e) => {
    if (document.getElementById("password").value !== confirm.value){
        document.getElementById("password").style.borderColor = "red"
        confirm.style.borderColor = "red"
    }else {
        document.getElementById("password").style.borderColor = ""
        confirm.style.borderColor = ""
    }
})