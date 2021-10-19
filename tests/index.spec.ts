//********************************************************************************
// Part 2 : Tests
//
// * Describe your process to tests some of the functions and properties above
// * It can either be code, or just commented explanations on the testing procedure
//   (what, how, ..)
//********************************************************************************
import Coin from '../src/coin';
import Wallet from '../src/wallet';

//Initiate the wallet 
var obj = new Wallet(30);

//Check amount available. Should return 30
console.log("Amount available now :  "+obj.available());

// Check if the add function works.
obj.add(new Coin(50));

// Check the amount again. Now it should return 80 because 30 + 50
console.log("Amount available now :  "+obj.available());
