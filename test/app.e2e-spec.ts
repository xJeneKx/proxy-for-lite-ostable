import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

describe('AppController (e2e)', () => {
  let app: NestFastifyApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication<NestFastifyApplication>(
      new FastifyAdapter(),
    );

    await app.init();
    await app.getHttpAdapter().getInstance().ready();
  });

  it('/btcusd (GET)', () => {
    return app
      .inject({
        method: 'GET',
        url: '/btcusd',
      })
      .then((result) => {
        expect(result.statusCode).toEqual(200);
        expect(result.json().timestamp).toBeDefined();
      });
  });

  it('/gbytebtc (GET)', () => {
    return app
      .inject({
        method: 'GET',
        url: '/gbytebtc',
      })
      .then((result) => {
        expect(result.statusCode).toEqual(200);
        expect(result.json().symbol).toBe('GBYTE-BTC');
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
