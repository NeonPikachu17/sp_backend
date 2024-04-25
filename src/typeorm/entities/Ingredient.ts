import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { FoodType } from "./FoodType";
import { Recipes } from "./Recipe";

// export enum foodTypeFormat {
//     VEGGIE = 'hardcover',
//     FRUITS = 'paperback',
//     MILK = 'digital',
//     RICE = 'rice',
//     MEAT = 'meat',
//     SUGAR = 'sugar',
//     FAT = 'fat',
//     FREE = 'free food'
// }  

@Entity({ name: 'ingredients' })
export class Ingredients {

    @PrimaryGeneratedColumn()
    id: number;

    // Probably make new entity for names kasi name can have english or tagalog name based on talks
    // Combine these two in the future
    @Column()
    englishName: string;

    @Column()
    tagalogName: string;

    // Not sure if this is right so my try this out muna
    // @OneToOne(() => FoodType)
    // @JoinColumn()
    // foodType: FoodType;

    @ManyToMany(() => Recipes, (recipes) => recipes.ingredients)
    recipes: Recipes[];

    // Not sure yet
    @Column()
    image: string;

    @Column()
    foodType: number;
} 