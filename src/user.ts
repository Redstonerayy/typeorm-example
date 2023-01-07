import "reflect-metadata";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

// user class
@Entity()
export default class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;
}
