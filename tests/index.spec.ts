//********************************************************************************
// Part 2 : Tests
//
// * Describe your process to tests some of the functions and properties above
// * It can either be code, or just commented explanations on the testing procedure
//   (what, how, ..)
//********************************************************************************
import Coin from '../src/coin';
import Wallet from '../src/wallet';


var coins: Array<Coin> = [new Coin(5), new Coin(67), new Coin(1234), new Coin(1000001)];
var dist = new Distribution([coins]);
var obj = new Wallet(5);

//Check amount available. Should return 5
console.log("Amount available now :  "+obj.available());

// Check if the add function works.
obj.add(new Coin(67));
obj.add(new Coin(1234));
obj.add(new Coin(1000001));

// Check the amount again.
console.log("Amount available now :  "+obj.available());

dist = obj.distribution(1000);

console.log (dist.buckets[0]);
console.log (dist.buckets[1]);
console.log (dist.buckets[2]);


// Testing the spending assignment
var obj = new Wallet(5);
obj.add(new Coin(11));
obj.add(new Coin(3));
obj.add(new Coin(40));
obj.add(new Coin(22));
obj.spend(8);

// Testing the spending assignment
var obj = new Wallet(5);
obj.add(new Coin(11));
obj.add(new Coin(3));
obj.add(new Coin(40));
obj.add(new Coin(22));

obj.reserve(8);