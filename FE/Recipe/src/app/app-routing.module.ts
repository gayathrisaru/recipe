import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { ProcedureComponent } from './procedure/procedure.component';
import { RecipeComponent } from './recipe/recipe.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path:'welcome',component: WelcomeComponent},
  { path: 'recipe', component: RecipeComponent,
    children: [
      { path: 'ingredient', component: IngredientsComponent },
      { path: 'procedure', component: ProcedureComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
