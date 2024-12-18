import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './Entities/User/user.entity';
import { UsersModule } from './Users/users.module';
import { AccountsModule } from './accounts/accounts.module';
import { Tarjeta } from './Entities/Account/account.entity'; // Importar la entidad de tarjeta

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Admin123.',
      database: 'horizonback',
      entities: [User, Tarjeta], // Registrar entidades
      synchronize: false, // Cambiar a true solo en desarrollo para sincronizar entidades automáticamente
    }),
    UsersModule,
    AccountsModule, // Agregar el módulo de cuentas
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
