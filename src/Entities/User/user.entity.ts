
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Tarjeta } from '../Account/account.entity';


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({ default: true })
    isActive: boolean;

    @Column({ nullable: true })
    profileImage: string;

    @Column({ unique: true })
    email: string;

    @OneToMany(() => Tarjeta, (tarjeta) => tarjeta.user)
    tarjetas: Tarjeta[];
}
