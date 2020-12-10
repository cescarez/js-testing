const isPangram = function(text) {
  const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
  text = text.toLowerCase().split('');
  console.log(text.includes('x'));
  text.forEach((letter) => {
    const index = letters.indexOf(letter);
    if (index >= 0) {
      letters.splice(index, 1);
    }
  });
  if (letters.length > 0) {
    return false;
  } else {
    return true;
  }
};

module.exports = isPangram;
