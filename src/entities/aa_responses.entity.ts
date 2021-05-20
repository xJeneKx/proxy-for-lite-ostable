import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity({ name: 'aa_responses' })
export class AAResponsesEntity {
  @PrimaryGeneratedColumn({
    name: 'aa_response_id',
    type: 'integer',
  })
  aaResponseId: number;

  @Column({
    name: 'mci',
    type: 'int',
    nullable: false,
  })
  mci: number;

  @Column({
    name: 'trigger_address',
    nullable: false,
    type: 'varchar',
    length: 32,
  })
  triggerAddress: string;

  @Column({
    name: 'aa_address',
    nullable: false,
    type: 'varchar',
    length: 32,
  })
  aaAddress: string;

  @Column({
    name: 'trigger_unit',
    nullable: false,
    type: 'varchar',
    length: 32,
  })
  triggerUnit: string;

  @Column({
    name: 'bounced',
    nullable: false,
    type: 'tinyint',
  })
  bounced: string;

  @Column({
    name: 'response_unit',
    nullable: true,
    type: 'varchar',
    length: 44,
  })
  responseUnit: string;

  @Column({
    name: 'response',
    nullable: true,
    type: 'text',
  })
  response: string;

  @Column({
    name: 'creation_date',
    nullable: false,
    type: 'integer',
    default: () => 'CURRENT_TIMESTAMP',
  })
  creationDate: string;
}
