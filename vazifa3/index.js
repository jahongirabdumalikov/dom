// ////////////  1  /////////////////


// function getRandomElements(arr, N) {
//     const result = [];
//     const usedIndices = new Set(); 
//     while (result.length < N) {
//         const randomIndex = Math.floor(Math.random() * arr.length); // Tasodifiy indeksni tanlash
//         if (!usedIndices.has(randomIndex)) {
//             result.push(arr[randomIndex]);
//             usedIndices.add(randomIndex); // Tanlangan indeksni saqlash
//         }
//     }

//     return result;
// }
// const array = [1, 2, 3, 4, 5, 6, 7, 8];
// const N = 3;
// const randomElements = getRandomElements(array, N);
// console.log(randomElements);


// /////////////  2  ////////////////


// function getUniqueWords(str) {
//     const words = str.split(' ');

//     const uniqueWords = [...new Set(words)];

//     return uniqueWords;
// }
// const inputString = "apple banana apple orange banana";

// const uniqueWords = getUniqueWords(inputString);
// console.log(uniqueWords);


// /////////////  3  /////////////////


// const inputArray = [1, [2, 3], [4, [5, 6]]];
// const flattenedArray = inputArray.flat(Infinity);
// console.log(flattenedArray);


// /////////////  4  /////////////////


// function capitalizeFirstLetter(str) {
//     return str.split(' ').map(word => {
//         return word.charAt(0).toUpperCase() + word.slice(1);
//     }).join(' '); 
// }

// const inputString = "hello world from javascript";
// const resultString = capitalizeFirstLetter(inputString);

// console.log(resultString);
