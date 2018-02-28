const Numbers = require('./index');

let source = 'The year was 1984.';

// Convert numbers to emoji:
let emojiText = Numbers.toEmoji(source);

// And do the reverse conversion - emoji to numbers:
let plainText = Numbers.fromEmoji(emojiText);

console.log(emojiText);
console.log(plainText);