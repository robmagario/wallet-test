import Coin from './coin';

class ReservationHandle {

  private coin: Coin;
  private index: number;

  constructor(coin: Coin, index: number) {
    this.coin = coin;
    this.index = index;
  }
 public showCoin(): Coin {
    return this.coin;
      }
 public showIndex(): number {
    return this.index;
      }

}

export default ReservationHandle;
