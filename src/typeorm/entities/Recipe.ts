import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Ingredients } from "./Ingredient";
import { Profile } from "./Profile";

@Entity({ name: 'recipes' })
export class Recipes {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    recipeName: string;

    @ManyToMany(() => Ingredients, (ingredients) => ingredients.recipes)
    @JoinTable()
    ingredients: Ingredients[];

    // @OneToMany(() => Ingredients, (ingredient) => ingredient.recipe)
    // ingredients: Ingredients[]

    @Column()
    description: string;

    @Column()
    steps: string;

    @Column()
    createdAt: Date;

    @Column()
    imageUrl: string;

} 