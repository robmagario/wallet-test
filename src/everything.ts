class Coin {
  private value: number;

  constructor(value: number) {
    this.value = value;
  }
 public showValue(): number {
    return this.value;
      }

}

class Distribution {
  public buckets: Array<Array<Coin>>;

  constructor(value: Array<Array<Coin>>) {
    this.buckets = value;
  }
}

class Wallet {
  private coins: Array<Coin>;

  constructor(value: number) {
    // You are free to change the constructor to match your needs.
    this.coins = [new Coin(value)];
  }

  public available(): number {
    // TODO: Your implementation here
    let sum: number = 0;
    this.coins.forEach(a => sum += a.showValue());
    return sum;
  }

  public add(coin: Coin) {
    // TODO: Your implementation here
    var val = this.coins.push(coin);
  }

  public distribution(scale: number): Distribution {
    let buckets = new Array();
    // TODO: Your implementation here
    var x = 0;
    var multiplier=0;
    let temp_array = new Array();
    let ClonedCoins  = [...coins];

        for(multiplier=scale;multiplier<=1000000000; multiplier=multiplier*scale) {
            buckets.push(ClonedCoins.filter(x => x.showValue() < multiplier));
            temp_array = ClonedCoins.filter(x => x.showValue() < multiplier);
            ClonedCoins = ClonedCoins.filter(item => !temp_array.includes(item))
            console.log("multiplier :  "+multiplier);
            }
         console.log("multiplier :  "+multiplier);

    return new Distribution(buckets);
  }

  public spend(amount: number): Array<Coin> {

      let sum: number = 0;
      this.coins.forEach(a => sum += a.showValue());
      let tempComparisonValue:number = 10000000000;
      var tempIndex;

       if (sum < amount) {
      throw new Error('Spend Error: Insufficient funds in the wallet.');
      }
      else {

                  for (var index in this.coins) {
              if ((this.coins[index].showValue() >= amount)&&(this.coins[index].showValue()<tempComparisonValue)) {
                      tempComparisonValue = this.coins[index].showValue();
                      console.log("show value :  "+tempComparisonValue);
                      tempIndex = index;
              }
          }
          console.log("show index value :  "+tempIndex);

          this.coins[tempIndex] = new Coin(this.coins[tempIndex].showValue() - amount);
          console.log("current amount after deduction :  "+this.coins[tempIndex].showValue());
      }

    }

}

  public reserve(amount: number): ReservationHandle{


       this.handlers.push(new ReservationHandle(new Coin(amount), 1));


    }

  public reservationSpend(reservation: ReservationHandle): Array<Coin> {
    // TODO: Your implementation here
    return new Array();
  }

  public reservationCancel(reservation: ReservationHandle) {
    delete this.handlers[reservation];

    for( var i = 0; i < this.handlers.length; i++){

        if ( this.handlers[i] === (reservation)) {

            this.handlers.splice(i, 1);
        }

    }
  }

//Initiate the wallet
var obj = new Wallet(5);

var coins: Array<Coin> = [new Coin(5), new Coin(67), new Coin(1234), new Coin(1000001)];
var dist = new Distribution([coins]);


//Check amount available. Should return 30
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
