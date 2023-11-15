let zorb = {
    message: "Hello Kitty!!!",

    get greeting() {
        return this.message;
    },

    set greeting(value) {
        this.message = value;
    } 
}

let shout = {
    _message: "HELLO!",

    get message(){
        return this._message;
    },

    set message(value){
        this._message = value.toUpperCase();
    }
};

console.log(zorb.greeting)
zorb.greeting = "Omg!!"
console.log(zorb.greeting)

console.log("<-------------------------->")

console.log(shout.message)
shout.message = "Hello Kitty!"
console.log(shout.message)

console.log("<-------------------------->")

