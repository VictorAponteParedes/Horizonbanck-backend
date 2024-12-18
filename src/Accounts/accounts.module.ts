import { Module } from '@nestjs/common';
import { AccountsController } from './accounts.controller';
import { AccountsService } from './accounts.service';

@Module({
    controllers: [AccountsController], // Registrar el controlador
    providers: [AccountsService], // Registrar el servicio
    exports: [AccountsService], // Exportar el servicio si otro módulo lo necesita
})
export class AccountsModule { }
