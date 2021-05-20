import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AAResponsesEntity } from './entities/aa_responses.entity';
import { OutputsEntity } from './entities/outputs.entity';
import { UnitAuthorsEntity } from './entities/unit_authors.entity';
import { UnitsEntity } from './entities/units.entity';
import { HistoryModule } from './history/history.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: process.env.PATH_TO_SQLITE_FILE,
      entities: [
        AAResponsesEntity,
        OutputsEntity,
        UnitAuthorsEntity,
        UnitsEntity,
      ],
      logging: true,
      synchronize: false,
    }),
    HistoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
