import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/shared/recipe.model';
import { InteractionService } from '../interaction.service';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  foodItem:Recipe[]=[];
  item:Recipe;
  items:String;
  display:boolean;
  constructor(private recipeService : RecipeService,private interactionService:InteractionService) { }

  ngOnInit(): void {
    this.getAllItems();
  }
  getAllItems(){
    this.recipeService.getAllItems().subscribe(response =>{
      this.foodItem=response;
    });
  }
  displayRecipe(foodItems: Recipe){
    this.display=true;
    this.item=foodItems;
    this.interactionService.sendId(foodItems.recipeId);
  }
}
