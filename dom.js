// get word from index.html
let word = document.getElementById("user-input")

const pigLatin = (word) => {

    // word = "car"
     //take the c off the front, add it to the end, and add "ay" = arcay
  
    
  
  
    //1. If word begins with vowel adds "yay"
    //2. if word begins with a consonant splices off beginning, add it to the end and add "ay"
    //3. if word begins with 2 consonants splices off beginning, add it to the end and add "ay"
    // assumptions: vowels are A E I O U
  
    // includes(searchString, position)
    //string.slice(start,end) text.slice(0,1);
  
    // var that's trimmed and lowercase
    word = word.trim().toLowerCase();
    // array of vowels to compare to the word
    let vowels = ['a','e','i','o','u'];
    
    for(let letter = 0; letter < word.length; letter++) {
  // loop through the letters in the word and find the first vowel
    // does the first letter show up in the vowels array?
  
        if (vowels.includes(word[0])) {
            let newWord = word + "yay"
      //if true, word + yay
          return newWord;
      }   else if ((!vowels.includes(word[0]) && !vowels.includes(word[1]))){
      // ne wvar for word to manipulate
          let newWord = word.slice(2) + word.slice(0,2) + "ay";
        return newWord
      } else {
          let newWord = word.slice(1) + word.slice(0,1) + "ay";
  
    
      //slice the first letter, concat that letter to the end, and add "ay"
      return newWord
    }
  
    }
    // put newWord in the display-element div in the index.html
  }