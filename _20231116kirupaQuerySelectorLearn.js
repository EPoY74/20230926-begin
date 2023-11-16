let mainDivElement = document.querySelector("#main")
let imagesElements = document.querySelectorAll(".theImage")

for (let i = 0; i < imagesElements.length; i++){
    let image = imagesElements[i]
    console.log(image.getAttribute("src"))
}