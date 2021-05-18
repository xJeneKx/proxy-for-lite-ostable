import {
  Injectable,
  OnModuleInit,
  BeforeApplicationShutdown,
} from '@nestjs/common';
import axios from 'axios';
import { Price1 } from './interfaces/price1.interface';
import { Price2 } from './interfaces/price2.interface';

@Injectable()
export class AppService implements OnModuleInit, BeforeApplicationShutdown {
  private price1: Price1;
  private price2: Price2;
  private timer = null;
  private isFirstCurrencyUpdate = true;

  async onModuleInit(): Promise<void> {
    await this.updateData();
    this.timer = setInterval(this.updateData, 5 * 60 * 1000);
  }

  beforeApplicationShutdown() {
    clearInterval(this.timer);
  }

  async updateData() {
    try {
      this.price1 = (
        await axios.get('https://api.bitfinex.com/v1/pubticker/btcusd')
      ).data as Price1;
    } catch (e) {
      if (this.isFirstCurrencyUpdate) process.exit(0);
    }

    try {
      this.price2 = (
        await axios.get('https://api.bittrex.com/v3/markets/GBYTE-BTC/ticker')
      ).data as Price2;
    } catch (e) {
      if (this.isFirstCurrencyUpdate) process.exit(0);
    }

    this.isFirstCurrencyUpdate = false;
  }

  getPrice1(): Price1 {
    return this.price1;
  }

  getPrice2(): Price2 {
    return this.price2;
  }
}
