// Made the Food Type into database so that this will enable to program to easily change values

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'foodtypes' })
export class FoodType {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    foodTypeName: string;

    @Column()
    foodExchange: number;

    @Column()
    householdMeasure: string;

    @Column()
    grams: string;

    @Column()
    dimension: string;
    
    @Column()
    energy: number;

    @Column()
    carb: number;

    @Column()
    protein: number;

    @Column()
    fat: number;
} 