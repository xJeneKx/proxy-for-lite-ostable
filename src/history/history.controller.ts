import { Controller, Get, Param } from '@nestjs/common';
import { HistoryService } from './history.service';

@Controller('history')
export class HistoryController {
  constructor(private readonly historyService: HistoryService) {}

  @Get('/transactions/:address/:stable')
  getTransactions(
    @Param('address') address: string,
    @Param('stable') stable: string,
  ) {
    return this.historyService.findOutputsByAddress(address, stable);
  }
}
