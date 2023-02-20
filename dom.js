// get word from index.html
// let word = document.getElementById("user-input")

const input = document.getElementById("user-input")
const output = document.getElementById("output") 

const pigLatin = (event) => {
  event.preventDefault()
  let word = input.value 
  console.log(word)
    word = word.trim().toLowerCase();
   
    let vowels = ['a','e','i','o','u'];
    
    for(let letter = 0; letter < word.length; letter++) {

  
        if (vowels.includes(word[0])) {
            let newWord = word + "yay"

          return newWord;
      }   else if ((!vowels.includes(word[0]) && !vowels.includes(word[1]))){
   
          let newWord = word.slice(2) + word.slice(0,2) + "ay";
        return newWord
      } else {
          let newWord = word.slice(1) + word.slice(0,1) + "ay";
  
    
      return output.innerHTML = newWord
    }
  
    }
    // put newWord in the display-element div in the index.html
  }