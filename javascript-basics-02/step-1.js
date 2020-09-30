var img = document.querySelector("img");

img.addEventListener("mouseover", function(){
    img.src = "images/image1_2.jpg"
});

img.addEventListener("mouseout", function(){
    img.src = "images/image1.jpg"
});