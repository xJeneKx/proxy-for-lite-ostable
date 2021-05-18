import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Price1 } from './interfaces/price1.interface';
import { Price2 } from './interfaces/price2.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/btcusd')
  getPrice1(): Price1 {
    return this.appService.getPrice1();
  }

  @Get('/gbytebtc')
  getPrice2(): Price2 {
    return this.appService.getPrice2();
  }
}
