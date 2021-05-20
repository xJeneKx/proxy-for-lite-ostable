import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity({ name: 'outputs' })
export class OutputsEntity {
  @PrimaryGeneratedColumn({
    name: 'output_id',
    type: 'integer',
  })
  outputId: number;

  @Column({
    name: 'unit',
    nullable: false,
    type: 'varchar',
    length: 44,
  })
  unit: number;

  @Column({
    name: 'message_index',
    nullable: false,
    type: 'tinyint',
  })
  messageIndex: number;

  @Column({
    name: 'output_index',
    nullable: false,
    type: 'tinyint',
  })
  outputIndex: number;

  @Column({
    name: 'asset',
    nullable: true,
    type: 'varchar',
    length: 44,
  })
  asset: number;

  @Column({
    name: 'denomination',
    nullable: false,
    type: 'int',
    default: 1,
  })
  denomination: number;

  @Column({
    name: 'address',
    nullable: true,
    type: 'varchar',
    default: 32,
  })
  address: string;

  @Column({
    name: 'amount',
    nullable: false,
    type: 'bigint',
  })
  amount: number;

  @Column({
    name: 'blinding',
    nullable: true,
    type: 'varchar',
    length: 16,
  })
  blinding: string;

  @Column({
    name: 'output_hash',
    nullable: true,
    type: 'varchar',
    length: 44,
  })
  outputHash: string;

  @Column({
    name: 'is_serial',
    nullable: true,
    type: 'tinyint',
  })
  isSerial: number;

  @Column({
    name: 'is_spent',
    nullable: false,
    type: 'tinyint',
    default: 0,
  })
  isSpent: number;
}
