function firstWord(str) {
  // Check if the input string is empty or does not contain any space
  if (str.trim() === '' || !str.includes(' ')) {
    return str;
  }

  // Split the string by space and return the first element
  return str.split(' ')[0];
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
    