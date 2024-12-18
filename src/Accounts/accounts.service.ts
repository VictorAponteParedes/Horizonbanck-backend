import { Injectable } from '@nestjs/common';

@Injectable()
export class AccountsService {
    private accounts = []; // Esto puede ser reemplazado con una base de datos más adelante

    findAll() {
        // Retornar todas las cuentas (en este caso, tarjetas)
        return this.accounts;
    }

    findOne(id: number) {
        // Buscar una cuenta específica
        return this.accounts.find((account) => account.id === id);
    }

    create(account) {
        // Crear una nueva cuenta
        const newAccount = { id: Date.now(), ...account }; // Asignar un ID ficticio
        this.accounts.push(newAccount);
        return newAccount;
    }

    update(id: number, updateData) {
        // Actualizar una cuenta
        const index = this.accounts.findIndex((account) => account.id === id);
        if (index !== -1) {
            this.accounts[index] = { ...this.accounts[index], ...updateData };
            return this.accounts[index];
        }
        return null;
    }

    delete(id: number) {
        // Eliminar una cuenta
        const index = this.accounts.findIndex((account) => account.id === id);
        if (index !== -1) {
            return this.accounts.splice(index, 1);
        }
        return null;
    }
}
