import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'Recipe description',
      'https://i.postimg.cc/pTdgCS65/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
