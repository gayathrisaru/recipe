import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from 'src/shared/recipe.model';

const baseURL = "http://localhost:8080";
@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  
  constructor(private httpClient: HttpClient) { }
  public getAllItems():Observable<Recipe[]>{
    return this.httpClient.get<Recipe[]>(baseURL+'/getAllItem');
  }
  public getRecipe(id:number):Observable<Recipe>{
    return this.httpClient.get<Recipe>(baseURL+'/getRecipe/'+id);
  }
}
