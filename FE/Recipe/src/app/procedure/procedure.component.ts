import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../interaction.service';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-procedure',
  templateUrl: './procedure.component.html',
  styleUrls: ['./procedure.component.css']
})
export class ProcedureComponent implements OnInit {
  procedure:String;
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
      this.procedure=response.procedure;
    });
  }
}
