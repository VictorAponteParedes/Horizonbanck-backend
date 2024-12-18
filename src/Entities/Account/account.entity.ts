import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../User/user.entity';

@Entity()
export class Tarjeta {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    cardNumber: string; // Número de la tarjeta

    @Column()
    cardHolderName: string; // Nombre del titular (puedes optar por relacionar con User)

    @Column()
    expirationDate: string; // Fecha de vencimiento (ej: MM/YY)

    @Column({ select: false }) // Evita devolver el CVV por seguridad
    cvv: string; // Código de seguridad

    @Column()
    cardType: string; // Tipo de tarjeta (ej: Visa, MasterCard)

    @Column()
    bankName: string; // Nombre del banco emisor

    @Column({ type: 'decimal', precision: 12, scale: 2, default: 0.00 })
    balance: number; // Balance actual de la tarjeta

    @Column({ default: true })
    isActive: boolean; // Estado de la tarjeta (activa/inactiva)

    @ManyToOne(() => User, (user) => user.email, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'userId' })
    user: User; // Relación con la tabla de usuarios
}
