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
};

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