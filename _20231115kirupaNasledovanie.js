//Изучаю наследование

let person = {
    getName: function () {
        return "The name is " + this.firstName + " " + this.lastName
    },

    getInitials: function () {
        if (this.firstName && this.lastName){
            return "The initials is " + this.firstName[0] + this.lastName[0]
        } 
    }
}


function shuffle(inputarr) {
    console.log("<------------------------------------->")
    console.log(inputarr)
    // let i
    for (let i = inputarr.length - 1; i >= 0; i--) {

        let randomIndex = Math.floor(Math.random() * (i + 1))
        console.log(randomIndex + " " + i)
        let itemAtIndex = inputarr[randomIndex]

        inputarr[randomIndex] = inputarr[i]
        inputarr[i] = itemAtIndex
    }
    return inputarr
}

let funnyGay = Object.create(person);
funnyGay.firstName = "Conan"
funnyGay.lastName = "O'Brine"

let theDude = Object.create(person);
theDude.firstName = "Jaffrey"
theDude.lastName = "Lebowski"

let detective = Object.create(person)
detective.firstName = "Adrian"
detective.lastName = "Monk"

console.log(detective.getName())
console.log(detective.getInitials())
// console.log(detective.prototype()) - Попробовал посмотреть прототип - не получилось


let shuffleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(shuffleArray.length)

console.log(shuffleArray);

shuffle(shuffleArray);

console.log(shuffleArray);
