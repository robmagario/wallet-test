import Coin from './coin';

class Distribution {
  public buckets: Array<Array<Coin>>;

  constructor(value: Array<Array<Coin>>) {
    this.buckets = value;
  }  
}

export default Distribution;
