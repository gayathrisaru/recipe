package com.example.recipe.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.example.recipe.manager.RecipeManager;
import com.example.recipe.model.Recipe;

@Service
public class RecipeService {
	
	@Resource
	RecipeManager recipeManger;

	public List<Recipe> getAllItems() throws Exception {
		try {
			return recipeManger.getAllItems();
		}catch(Exception ex) {
			throw new Exception(ex);
		}
	}
	public Recipe getRecipe(Integer recipeId) throws Exception {
		try {
			return recipeManger.findRecipeById(recipeId);
		}catch(Exception ex) {
			throw new Exception(ex);
		}
	}
}
