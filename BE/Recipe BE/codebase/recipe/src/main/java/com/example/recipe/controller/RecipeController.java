package com.example.recipe.controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.recipe.model.Recipe;
import com.example.recipe.service.RecipeService;

@RestController
@CrossOrigin
public class RecipeController {
	@Resource
	RecipeService recipeService;
	
	@GetMapping("/getAllItem")
	public ResponseEntity<List<Recipe>>getItems(){
		try {
			System.out.println("start");
			List<Recipe> recipes=recipeService.getAllItems();
			System.out.println("end");
			return new ResponseEntity<>(recipes,HttpStatus.OK);
		}catch(Exception ex) {
			System.out.println("exception:"+ex);
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@GetMapping("/getRecipe/{id}")
	public ResponseEntity<Recipe>getRecipe(@PathVariable(name="id") Integer recipeId){
		try {
			Recipe recipe=recipeService.getRecipe(recipeId);
			return new ResponseEntity<>(recipe,HttpStatus.OK);
		}catch(Exception ex) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
}
