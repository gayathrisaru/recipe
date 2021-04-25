import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Recipe } from 'src/shared/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {
  private recipeSource=new BehaviorSubject<number>(0);
  recipeId$=this.recipeSource.asObservable();
  constructor() { }

  sendId(recipeId:number){
    this.recipeSource.next(recipeId);
  }
}
