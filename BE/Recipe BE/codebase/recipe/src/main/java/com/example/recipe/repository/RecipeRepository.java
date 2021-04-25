package com.example.recipe.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.recipe.model.Recipe;

public interface RecipeRepository extends JpaRepository<Recipe,Integer>{

	@Query("select rec from Recipe rec")
	List<Recipe> findAllRecipes();
	
	Recipe findByrecipeId(Integer id);

}
