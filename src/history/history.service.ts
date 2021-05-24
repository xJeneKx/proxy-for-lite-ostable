import { Injectable } from '@nestjs/common';
import { createQueryBuilder, Repository } from 'typeorm';

@Injectable()
export class HistoryService {
  getStatusTransactionsInAA(address: string, stable: string) {
    return createQueryBuilder('outputs', 'outputs')
      .select([
        'units.unit AS unit',
        'units.is_stable AS is_stable',
        'responses.bounced AS bounced',
        'responses.response AS response',
        'units.timestamp AS timestamp',
      ])
      .leftJoin('unit_authors', 'authors', 'authors.unit = outputs.unit')
      .leftJoin('units', 'units', 'units.unit = outputs.unit')
      .leftJoin(
        'aa_responses',
        'responses',
        'responses.trigger_unit = units.unit',
      )
      .where('outputs.address = :stable', { stable })
      .andWhere('authors.address = :address', { address })
      .orderBy('units.rowid', 'DESC')
      .groupBy('units.unit')
      .limit(15)
      .getRawMany();
  }
}
