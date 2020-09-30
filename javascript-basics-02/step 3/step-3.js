document.querySelector("input").addEventListener("blur", myFunction);

function myFunction() {
    var text=document.querySelector("input").value;
    document.querySelector("div").innerHTML=text;
}