function revarseString(text){
    let reversed = '';
    for (let index = text.length-1; index >= 0; index--) {
        const element = text[index];
        reversed += element;
        console.log(element, reversed);
    }
    return reversed;
}
const myString = "I am a good boy";
const reversed = revarseString(myString);
console.log("Reversed Output:", reversed);