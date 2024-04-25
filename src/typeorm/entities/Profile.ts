import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Recipes } from "./Recipe";

@Entity({ name: 'profiles' })
export class Profile {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    middleName: string;

    @Column()
    lastName: string;

    @Column()
    height: number;

    @Column()
    age: number;

    @Column()
    gender: number;

    @Column()
    dateOfBirth: string;

    @Column()
    activityFactor: number;

    @Column()
    totalEnergyRequirement: number;

    @Column()
    macronutrientDistribution: number;
} 