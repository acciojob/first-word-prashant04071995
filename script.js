function firstWord(str) {
  // Trim the string to remove leading and trailing spaces
  str = str.trim();

  // Check if the string is empty or does not contain any space
  if (str === '' || !str.includes(' ')) {
    return str;
  }

  // Split the trimmed string by space and return the first element
  return str.split(' ')[0];
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));