import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { AccountsService } from './accounts.service';

@Controller('accounts') // Ruta base: /accounts
export class AccountsController {
    constructor(private readonly accountsService: AccountsService) { }

    @Get()
    findAll() {
        // Obtener todas las cuentas
        return this.accountsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        // Obtener una cuenta por ID
        return this.accountsService.findOne(id);
    }

    @Post()
    create(@Body() account) {
        // Crear una nueva cuenta
        return this.accountsService.create(account);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() updateData) {
        // Actualizar una cuenta
        return this.accountsService.update(id, updateData);
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        // Eliminar una cuenta
        return this.accountsService.delete(id);
    }
}
