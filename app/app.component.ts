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
        <button (click)="editRecipe()">Edit</button>
    </div>

    <div>
        <h3>Edit Task</h3>
        <input [(ngModel)]="selectedRecipe.recipeName"><br>
        <input [(ngModel)]="selectedRecipe.ingredients"><br>
        <input [(ngModel)]="selectedRecipe.instructions"><br>
    </div>

    <div>
        <h3>Add new recipe</h3>
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

    masterRecipeList: Recipe[] = [
        new Recipe('SpagBol', 'Spag and Bol', 'Combine Spag with Bol'),
        new Recipe('Grilled Cheese', 'Grill and Cheese', 'Use Grill to Cheese')
    ];

    selectedRecipe: Recipe = this.masterRecipeList[0];

    hideEdit() {
        this.selectedRecipe = null;
    }

    editRecipe() {
        alert("Button clicky")
    }

    addRecipe(newRecipe: Recipe) {
        this.masterRecipeList.push(newRecipe);
    }

    submitForm(newRecipeName: string, newIngredients: string, newInstructions: string) {
        console.log(newRecipeName + ", " + newIngredients + ", " + newInstructions);
        var newRecipe: Recipe = new Recipe (newRecipeName, newIngredients, newInstructions);
        this.masterRecipeList.push(newRecipe);
    }
}

export class Recipe {
    constructor( public recipeName: string, public ingredients: string, public instructions: string){ }

}



//
// <!--EDIT FORM-->
// <!--    <div *ngIf="selectedRecipe">
// <form> -->
// <!-- <input [(ngModel)]="selectedRecipe.recipeName"><br>
// <input [(ngModel)]="selectedRecipe.ingredients"><br>
// <input [(ngModel)]="selectedRecipe.instructions"><br>
// <button (click)="hideEdit()">Hide</button> -->
// <!-- </form>
// </div> -->
// <!--
// <div *ngIf="selectedTask">
// <h3>{{selectedTask.description}}</h3>
// <p>Task Complete? {{selectedTask.done}}</p>
// <hr>
// <h3>Edit Task</h3>
// <label>Enter Task Description:</label>
// <input [(ngModel)]="selectedTask.description">
// <label>Enter Task Priority (1-3):</label><br>
// <input type="radio" [(ngModel)]="selectedTask.priority" [value]="1">1 (Low Priority)<br>
// <input type="radio" [(ngModel)]="selectedTask.priority" [value]="2">2 (Medium Priority)<br>
// <input type="radio" [(ngModel)]="selectedTask.priority" [value]="3">3 (High Priority)
// <button (click)="finishedEditing()">Done</button>
// </div>
// -->
//
