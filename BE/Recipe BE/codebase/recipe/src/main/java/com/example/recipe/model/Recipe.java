package com.example.recipe.model;

import java.sql.Time;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="recipe")
public class Recipe {

	@Id
	@Column(name = "recipe_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Integer recipeId;
	
	@Column(name = "recipe_name")
	String recipeName;
	
	@Column(name = "preparation_time")
	Time preptime;
	
	@OneToMany(mappedBy="recipe")
	List<Ingredients> ingredients;
	
	@Column(name = "method")
	String procedure;

	public Integer getRecipeId() {
		return recipeId;
	}

	public void setRecipeId(Integer recipeId) {
		this.recipeId = recipeId;
	}

	public String getRecipeName() {
		return recipeName;
	}

	public void setRecipeName(String recipeName) {
		this.recipeName = recipeName;
	}

	public Time getPreptime() {
		return preptime;
	}

	public void setPreptime(Time preptime) {
		this.preptime = preptime;
	}

	public List<Ingredients> getIngredients() {
		return ingredients;
	}

	public void setIngredients(List<Ingredients> ingredients) {
		this.ingredients = ingredients;
	}

	public String getProcedure() {
		return procedure;
	}

	public void setProcedure(String procedure) {
		this.procedure = procedure;
	}
	
}
