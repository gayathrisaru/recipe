import { Time } from "@angular/common";
import { Ingredient } from "./ingredient.model";

export class Recipe{
    constructor(
        public recipeId:number,
        public recipeName : string,
        public procedure:string,
        public ingredients:Ingredient[],
        public preptime:Time
    ){}
}