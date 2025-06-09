import React, { useContext, useEffect } from 'react'
import { recipeContext } from '../context/Recipecontext'
import { useNavigate } from 'react-router'

const Recipes = () => {
    let navigate = useNavigate()
    let {data,setData} = useContext(recipeContext)
    
    // setting default recipe in localStorage 
    useEffect(() => {
        let recipes = localStorage.getItem("recipes")
        if(recipes.length == 2){
            localStorage.setItem('recipes',JSON.stringify(data))
            console.log(recipes.length)
        }
    },[])

    const handleRecipeClick = (id) => {
        navigate(`/recipe/details/${id}`)
    }

    let renderRecipes = data.map(recipe => {
        return (
        <div onClick={() => handleRecipeClick(recipe?.id)} key={recipe?.id} className="recipe_card">
            <div className="recipe_img">
                <img src= {recipe.image ? recipe.image : null} alt="" />
            </div>
            <h1>{recipe.title}</h1>
            <h3 className='desc'>{recipe?.description}</h3>
            <h4>Preperation time : {recipe?.prepTime +" mins"}</h4>
            <h4>Cook time : {recipe?.cookTime+" mins"}</h4>
            <h4>Total time : {recipe?.totalTime+" mins"}</h4>
            {/* <div className="nutrition">
                <h4>Nutrition Facts:</h4>
                <p>Calories: {recipe.nutrition.calories}</p>
                <p>Protein: {recipe.nutrition.protein}</p>
                <p>Fat: {recipe.nutrition.fat}</p>
                <p>Carbohydrates: {recipe.nutrition.carbohydrates}</p>
            </div> */}
        </div>)
    })
  return (
    <div className='recipes_container'>
        {renderRecipes.length > 0 ? renderRecipes : "No Recipes Found"}
    </div>
  )
}

export default Recipes