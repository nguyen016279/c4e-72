/* EX1 Censored String
const CHAR = '*'
const BANNED = ['u', 'e', 'o', 'a', 'i']
const sentence = 'Hello'
const censoredString = (sentence) => {
  const replaceWith = (match) => CHAR.repeat(match.length)
  const filter = new RegExp(BANNED.join('|'), 'gi')
  return sentence.replace(filter, replaceWith)
}
console.log(censoredString(sentence))
*/
/*EX2: Frequency distribution
function getFrequencies(arr) {
  return arr.reduce((op, inp) => {
    op[inp] = op[inp] || 0
    op[inp]++
    return op
  },{})
}
*/
/*EX3 Keys and value
function keysAndValues(object) {
  const arr = [];
  for (const item in object) {
    arr.push(item);
  }
  for (const item in object) {
    arr.push(object[item]);
  }
  return arr;
}
*/
/*Ex4 map letter
function mapLetters(str) {
  const arr = str.split("");
  const ml = arr.reduce((accumulator, currentItem, currentIndex) => {
    if (!accumulator[currentItem]) {
      accumulator[currentItem] = [];
      accumulator[currentItem].push(currentIndex);
    } else {
      accumulator[currentItem].push(currentIndex);
    }
    return accumulator;
  }, {});
  return ml;
}
console.log(mapLetters('dudududu'))
*/
/*Ex5: kha banh
function khaBanh(string) {
  let newString = "";
  newString += string[0];
  for (let i = 0; i < string.length; i++) {
    if (
      newString[i] === newString[i].toUpperCase() &&
      newString[i] !== " "
    ) {
      newString += string[i].toLowerCase();
    } else if (
      newString[i] === newString[i].toLowerCase() &&
      newString[i] !== " "
    ) {
      newString += string[i].toUpperCase();
    } else if (newString[i01] === " ") {
      if (newString[i - 1] === newString[i - 1].toUpperCase()) {
        newString += string[i].toLowerCase();
      } else if (newString[i - 1] === newString[i - 1].toLowerCase()) {
        newString += string[i].toUpperCase();
      }
    }
  }
  return newString;
}
console.log(khaBanh('html'))

*/
/*EX6:Reverse object
const data = {
  'Nguyen Minh Huy': 'name',
  'MindX C4E': 'class'
}
const reverseObject = Object.keys(data).reduce(function(obj, key) {
    obj[data[key]] = key;
    return obj;
}, {});
console.log(reverseObject);
*/

