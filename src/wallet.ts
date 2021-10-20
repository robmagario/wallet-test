import Coin from './coin';
import Distribution from './distribution';
import ReservationHandle from './reservation-handle';

// The Wallet Class
class Wallet {
  private coins: Array<Coin>;

  constructor(value: number) {
    // You are free to change the constructor to match your needs.
    this.coins = [new Coin(value)];
  }

  //********************************************************************************
  // Part 1 : API
  //********************************************************************************


  //********************************************************************************
  // Part 1.1: return the total amount of coins available in this wallet
  //********************************************************************************
  public available(): number {
    // TODO: Your implementation here
    let sum: number = 0;
    this.coins.forEach(a => sum += a.showValue());
    return sum;
  }

  //********************************************************************************
  // Part 1.2: Add coins to this wallet
  //
  // We want the ability to reserve
  //********************************************************************************
  public add(coin: Coin) {
    // TODO: Your implementation here
    var val = this.coins.push(coin);
  }

  //********************************************************************************
  // Part 1.3: Distribution of coins
  //
  // We want to be able to categorize the coins scale distribution we have in the wallet.
  //
  // For example, using a scale of 1000, we want to categorize in bucket of the following range:
  //
  // * bucket[0] : 0 .. 999
  // * bucket[1] : 1_000 .. 999_999
  // * bucket[2] : 1_000_000 .. 999_999_999.
  // * bucket[3] : etc
  //
  // Given the following wallet coins: [1_234, 5, 67, 1_000_001] should result in the following:
  // * bucket[0] : [5, 67]
  // * bucket[1] : [1_234]
  // * bucket[2] : [1_000_001]
  //********************************************************************************

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

  //********************************************************************************
  // Part 1.4: Spending from this wallet a specific amount
  //
  // Try to construct a valid result where the sum of coins return are above the requested
  // amount, and try to stay close to the amount as possible. Explain your choice of
  // algorithm.
  //
  // If the requested cannot be satisfied then an error should be return.
  //********************************************************************************
  public spend(amount: number): Array<Coin> {
    // TODO: Your implementation here
    throw new Error('Spend Error: Insufficient funds in the wallet.');
  }


  //********************************************************************************
  // Part 1.5: Reserving assets
  //
  // In certain cases, it's important to consider that some coins need to be reserved;
  // for example we want to put aside some coins from a wallet while
  // we conduct other verification, so that once we really want to spend, we
  //
  // We need a way to reserve and keep a handle of this reservation; this works very similarly
  // to the previous part (1.4) except that the fund are kept in the wallet and reserved
  // until the user either 'cancel' or 'spend' this reservation.
  //
  // With cancel, the locked coins are returned to the available funds
  // With spend, the locked coins are remove from the wallet and given to the user
  //********************************************************************************
  public reserve(amount: number): ReservationHandle{
    // TODO: Your implementation here
    throw new Error('Spend Error: Insufficient funds in the wallet.');
  }

  public reservationSpend(reservation: ReservationHandle): Array<Coin> {
    // TODO: Your implementation here
    return new Array();
  }

  public reservationCancel(reservation: ReservationHandle) {
    // TODO: Your implementation here
  }
}

export default Wallet;
