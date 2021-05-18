import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('CatsController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(() => {
    appService = new AppService();
    appController = new AppController(appService);
  });

  describe('getPrice1', () => {
    it('should return an object of price1', async () => {
      const result = {
        mid: '44953.5',
        bid: '44952.0',
        ask: '44955.0',
        last_price: '44952.06987148',
        low: '42128.0',
        high: '45911.0',
        volume: '27409.908034779999998',
        timestamp: '1621331979.7909703',
      };

      jest.spyOn(appService, 'getPrice1').mockImplementation(() => result);

      expect(appController.getPrice1()).toBe(result);
    });
  });

  describe('getPrice2', () => {
    it('should return an object of price2', async () => {
      const result = {
        symbol: 'GBYTE-BTC',
        lastTradeRate: '0.00128665',
        bidRate: '0.00130356',
        askRate: '0.00131667',
      };

      jest.spyOn(appService, 'getPrice2').mockImplementation(() => result);

      expect(appController.getPrice2()).toBe(result);
    });
  });
});
