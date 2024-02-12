import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'postgres', // TODO: Change?
      password: 'foo', // TODO: Change?
      entities: [],
      database: 'postgres', // TODO: Change?
      synchronize: true, // TODO: Remove?
      logging: true // TODO: Disable?
    }),
    // UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
