const lyrics = 'Tumi bondhu kala pakhi ami jeno ki. Bosonto kale tomay bolte pari ni';
const searchString = 'PaKhI';
// const doesExist = lyrics.includes('pokhi');
// const doesExist = lyrics.includes('Pakhi');
// const doesExist = lyrics.includes('searchString');
// const lyricsLowerCase = lyrics.toLowerCase();
// const doesExist = lyricsLowerCase.includes(searchString);
// const searchStringLower = searchString.toLowerCase();
// const doesExist = lyricsLowerCase.includes(searchStringLower);
const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());
console.log(doesExistOneLine);

/***********************************************/
// Index of

console.log(lyrics.indexOf('Tumi'));

if (lyrics.indexOf('lal pakhi') !== -1){
    console.log('Exists inside the string');
} else {
    console.log('Can not find it');
}

/***********************************************/
// Starts with

console.log(lyrics.startsWith('2mi'));

/***********************************************/
// Ends with
const fileName = 'mybiodata.pdf';
const otherFile = 'myPic.png';
fileName.endsWith('.pdf');
