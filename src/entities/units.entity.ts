import { Column, Check, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'units' })
export class UnitsEntity {
  @PrimaryColumn({
    name: 'unit',
    nullable: false,
    type: 'varchar',
    length: 44,
  })
  unit: string;

  @Column({
    name: 'creation_date',
    nullable: false,
    type: 'integer',
    default: () => 'CURRENT_TIMESTAMP',
  })
  creationDate: string;

  @Column({
    name: 'version',
    nullable: false,
    type: 'varchar',
    length: 3,
    default: '1.0',
  })
  version: string;

  @Column({
    name: 'alt',
    nullable: false,
    type: 'varchar',
    length: 3,
    default: '1',
  })
  alt: string;

  @Column({
    name: 'witness_list_unit',
    nullable: true,
    type: 'varchar',
    length: 44,
  })
  witnessListUnit: string;

  @Column({
    name: 'last_ball_unit',
    nullable: true,
    type: 'varchar',
    length: 44,
  })
  lastBallUnit: string;

  @Column({
    name: 'timestamp',
    nullable: false,
    type: 'int',
    default: 0,
  })
  timestamp: number;

  @Column({
    name: 'content_hash',
    nullable: true,
    type: 'varchar',
    length: 44,
  })
  contentHash: string;

  @Column({
    name: 'headers_commission',
    nullable: false,
    type: 'int',
  })
  headersCommission: number;

  @Column({
    name: 'payload_commission',
    nullable: false,
    type: 'int',
  })
  payloadCommission: number;

  @Column({
    name: 'is_free',
    nullable: false,
    type: 'tinyint',
    default: 1,
  })
  isFree: number;

  @Column({
    name: 'is_on_main_chain',
    nullable: false,
    type: 'tinyint',
    default: 0,
  })
  isOnMainChain: number;

  @Column({
    name: 'main_chain_index',
    nullable: true,
    type: 'int',
  })
  mainChainIndex: number;

  @Column({
    name: 'latest_included_mc_index',
    nullable: true,
    type: 'int',
  })
  latestIncludedMcIndex: number;

  @Column({
    name: 'level',
    nullable: true,
    type: 'int',
  })
  level: number;

  @Column({
    name: 'witnessed_level',
    nullable: true,
    type: 'int',
  })
  witnessedLevel: number;

  @Column({
    name: 'is_stable',
    nullable: false,
    type: 'tinyint',
    default: 0,
  })
  isStable: number;

  @Column({
    name: 'sequence',
    nullable: false,
    type: 'text',
    default: 'good',
  })
  sequence: number;

  @Column({
    name: 'best_parent_unit',
    nullable: true,
    type: 'varchar',
    length: 44,
  })
  bestParentUnit: string;
}
