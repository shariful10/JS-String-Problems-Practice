function revarseWords(str){
    const words = str.split(' ');
    const result = [];
    for (let index = words.length-1; index >= 0; index--) {
        const element = words[index];
        result.push(element);
    }
    const reversed = result.join(' ');
    return reversed;
}
const myString = "I am a good boy";
const reversed = revarseWords(myString);
console.log("Reversed Output:", reversed);