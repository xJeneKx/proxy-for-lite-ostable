import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'unit_authors' })
export class UnitAuthorsEntity {
  @PrimaryColumn({
    name: 'unit',
    nullable: false,
    type: 'varchar',
    length: 44,
  })
  unit: string;

  @PrimaryColumn({
    name: 'address',
    nullable: false,
    type: 'varchar',
    length: 32,
  })
  address: string;

  @Column({
    name: 'definition_chash',
    nullable: true,
    type: 'varchar',
    length: 32,
  })
  definitionChash: string;

  @Column({
    name: '_mci',
    nullable: true,
    type: 'int',
  })
  _mci: number;
}
