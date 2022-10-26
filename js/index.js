function checkForSpam(message) {
  let result;
  // Change code below this line
  let messageNormalized = message.toLowerCase();
  if (messageNormalized.includes('spam' || 'sale')) {
    result = true;
  } else {
    result = false;
  }
  // Change code above this line
  return result;
}
console.log(checkForSpam("Latest technology news"));
console.log(checkForSpam("JavaScript weekly newsletter"));
console.log(checkForSpam("Get best sale offers now!"));
console.log(checkForSpam("Amazing SalE, only tonight!"));
console.log(checkForSpam("Trust me, this is not a spam message"));
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"));
console.log(checkForSpam("[SPAM] How to earn fast money?"));