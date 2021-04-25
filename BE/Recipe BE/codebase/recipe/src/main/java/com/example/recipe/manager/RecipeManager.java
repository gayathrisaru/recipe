package com.example.recipe.manager;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Component;

import com.example.recipe.model.Recipe;
import com.example.recipe.repository.RecipeRepository;

@Component
public class RecipeManager {
	
	@Resource
	RecipeRepository recipeRepository;

	public List<Recipe> getAllItems() {
		return recipeRepository.findAllRecipes();
	}
	
	public Recipe findRecipeById(Integer recipeId) {
		return recipeRepository.findByrecipeId(recipeId);
	}
}
