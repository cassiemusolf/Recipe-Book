import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Recipe Box</h1>

    <div *ngFor="let currentRecipe of masterRecipeList">
        <h3>{{currentRecipe.recipeName}}</h3>
        <h5>Ingredients</h5>
        <p>{{currentRecipe.ingredients}}</p>
        <h5>Instructions</h5>
        <p>{{currentRecipe.instructions}}</p>
    </div>

    <div>
        <form>
            <input #newRecipeName type="text" ng-model="recipeName" placeholder="Name of recipe">
            <br>
            <textarea #newIngredients ng-model="ingredients" placeholder="Ingredients"></textarea>
            <br>
            <textarea #newInstructions ng-model="instructions" placeholder="Cooking instructions"></textarea>
            <br>
            <button (click)="submitForm(newRecipeName.value, newIngredients.value, newInstructions.value)">Add recipe</button>
        </form>
    </div>

  `,
})
export class AppComponent  {

    masterRecipeList: Recipe[] = [];

    addRecipe(newRecipe: Recipe) {
        this.masterRecipeList.push(newRecipe);
    }

    submitForm(newRecipeName: string, newIngredients: string, newInstructions: string) {
        console.log(newRecipeName + ", " + newIngredients + ", " + newInstructions);
        var newRecipe: Recipe = new Recipe (newRecipeName, newIngredients, newInstructions);
        this.masterRecipeList.push(newRecipe);
        // addRecipe(newRecipe);
    }

}

export class Recipe {
    constructor( public recipeName: string, public ingredients: string, public instructions: string){ }

}
