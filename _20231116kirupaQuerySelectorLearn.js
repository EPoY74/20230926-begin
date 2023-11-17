let mainDivElement = document.querySelector("#main")// если целимся на  конкратный элемент с id = "main"
let imagesElements = document.querySelectorAll(".theImage") // возвращает все найденные элементы
let allImages = document.querySelectorAll("img") // ЕНсли надо нацелиться на все изображения
let mehImage = document.querySelectorAll("img[src='meh.png']")//целюсь на изображение, чей атрибут src = meh.pngzz


for (let i = 0; i < imagesElements.length; i++){
    let image = imagesElements[i]
    console.log(image.getAttribute("src"))
}