import { Time } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from 'src/shared/ingredient.model';
import { Recipe } from 'src/shared/recipe.model';
import { InteractionService } from '../interaction.service';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {
  item:Ingredient[]=[];
  time:Time;
  constructor(private interaction:InteractionService,private recipeService : RecipeService) { }

  ngOnInit(): void {
   this.interaction.recipeId$.subscribe(
     recipeId =>{
       this.getRecipe(recipeId);
     }
   )
  }
  getRecipe(recipeId:number){
    this.recipeService.getRecipe(recipeId).subscribe(response =>{
      this.item=response.ingredients;
      this.time=response.preptime;
    });
  }

}
