const isPalindrome = function (text, first = 0, last = (text.length - 1)) {

  if (text[first] && !text[first].match(/[a-z]/i)) {
    first += 1;
  } else if (text[last] && !text[last].match(/[a-z]/i)) {
    last -= 1;
  }

  if ((text.length <= 1) || (first >= last)) {
    return true;
  } else {
    if (text[first] != text[last]) {
      return false;
    } else {
      return isPalindrome(text, first + 1, last - 1);
    }
  }
};

console.log(isPalindrome(''));
console.log(isPalindrome('a'));
console.log(isPalindrome('racecar'));
console.log(isPalindrome('too hot to hoot'));
console.log(isPalindrome('raceca'));
console.log(isPalindrome('asdf'));

module.exports = isPalindrome;

