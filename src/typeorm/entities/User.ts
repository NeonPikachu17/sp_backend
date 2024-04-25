import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Profile } from "./Profile";

// can pass options
// The name will enable TypeORM to create table 
// same name as the class

// For user type
export enum Type {
    ADMIN = "admin",
    USER = "user",
    GUEST = "guest",
}  

// Literally a class
// Can pass unique entity
@Entity({ name: 'users' })
export class User {
    // Primary Key
    @PrimaryGeneratedColumn()
    id: number;

    // For development purposes
    // Can be null 
    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    type: number;

    @CreateDateColumn()
    createdAt: Date;

    // Profile
    @OneToOne(() => Profile)
    @JoinColumn()
    profile: Profile;

    // Not sure if will store passwords in account, 
    // maybe only google authentication
    // @Column()
    // password: string;



    // Enables for nullable creation for creation using gmail
    // @Column({ nullable: true })s
    // authStrategy: string;
}