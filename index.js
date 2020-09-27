console.log('Step 2');
var isHotOutside = true;
var isWeekday = true;
var hasMoneyInPocket = false;
console.log(isHotOutside);
console.log(isWeekday);
console.log(hasMoneyInPocket);

indexedDB.jsin
console.log('Step 3');
var costOfMilk = 3.99;
var moneyInWallet = 40;
var thirstLevel = 7;
console.log('The cost of milk is ' + costOfMilk);
console.log('Amount of money in wallet is ' + moneyInWallet);
console.log('Thirst level is ' + thirstLevel);




console.log('Step 4');
var shouldBuyIcecream = isHotOutside && hasMoneyInPocket;
var willGoSwimming = isHotOutside && !isWeekday;
var isAGoodDay = isHotOutside && hasMoneyInPocket && !isWeekday;
var willBuyMilk = isHotOutside && thirstLevel >= 3 && moneyInWallet >= 2 * costOfMilk;
console.log('Should buy icecream is ' + shouldBuyIcecream);
console.log('Will go swimming is ' + willGoSwimming);
console.log('Is a good day is ' + isAGoodDay);  
console.log('Will buy milk is ' + willBuyMilk);










