import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'postgres', // TODO: Change?
      password: 'foo', // TODO: Change?
      database: 'postgres', // TODO: Change?
      autoLoadEntities: true,
      synchronize: true, // TODO: Remove?
      logging: true // TODO: Disable?
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
