# number-to-emoji

Converts a number like 1337 to emoji sequence like 1️⃣3️⃣3️⃣7️⃣. Or vice versa!

## Usage ##

```js
const Numbers = require('number-to-emoji');

let source = 'The year was 1984.';

// Convert numbers to emoji:
let emojiText = Numbers.toEmoji(source);

// And do the reverse conversion - emoji to numbers:
let plainText = Numbers.fromEmoji(emojiText);

console.log(emojiText); // The year was 1️⃣9️⃣8️⃣4️⃣ .
console.log(plainText); // The year was 1984.
```

## Methods ##

The class has two static methods, `toEmoji()` and `fromEmoji()`, both of which accept a string or a number as an argument.

Empty strings, nulls and undefineds are ignored. Other data types converted to string before returning.