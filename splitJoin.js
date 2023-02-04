const lyrics = 'Tumi bondhu kala pakhi ami jeno ki. Bosonto kale tomay bolte pari ni';
const parts = lyrics.split(' ');
const sentence = lyrics.split('.');
const chars = lyrics.split('');
// console.log(chars);

const partial = lyrics.slice(5, 11);
const partial2 = lyrics.substring(5, 8);
console.log(partial2);

const lines = ['Tumi bondhu kala pakhi ami jeno ki.', 'Bosonto kale tomay bolte pari ni.', 'Kala Kala sada sada.', 'Maal jomeche sada sada'];
const newSong = lines.join(' ');
console.log(newSong);