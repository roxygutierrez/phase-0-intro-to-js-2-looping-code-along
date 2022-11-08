function writeCards(names, occassion) {
  const arrayOfMessages = [];
  for (let i = 0; i < names.length; i++) {
    arrayOfMessages.push(
      `Thank you, ${names[i]}, for the wonderful ${occassion} gift!`
    );
  }
  return arrayOfMessages;
}

function countDown(number) {
  while (number >= 0) {
    console.log(number--);
  }
}
