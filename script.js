function firstWord(s) {
  // your code here
if (str.trim() === '' || !str.includes(' ')) {
    return str;}

	
} return str.split(' ')[0]; 

}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
