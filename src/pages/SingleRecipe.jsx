import { useContext } from "react"
import { useParams } from "react-router"
import { recipeContext } from "../context/Recipecontext"

const SingleRecipe = () => {
    let params = useParams()
    let {data} = useContext(recipeContext)
    let recipe = data.find((data) => data.id === params.name)
    return (
        <div className="recipe_details_card">
            <div className="left_side">
                <img className="recipe-image" src={recipe.image ? recipe.image : null} alt={recipe?.title} />
                <h1 className="title">{recipe?.title}</h1>
                <p className="description">{recipe?.description}</p>
                <div className="info">
                <span>Prep: {recipe?.prepTime}</span>
                <span>Cook: {recipe?.cookTime}</span>
                <span>Total: {recipe?.totalTime}</span>
                <span>Servings: {recipe?.servings}</span>
                </div>
            </div>
            <div className="right_side">
                <div className="section ingredients">
                <h3>Ingredients</h3>
                {recipe.ingredients == "" ? "No ingredients available" : 
                <ul>
                    {recipe?.ingredients.map((ing, idx) => (
                    <li key={idx}>{ing}</li>
                    ))}
                </ul>
                }
                </div>
                <div className="nutrition">
                <h3>Nutrition</h3>
                <p>Calories: {recipe?.nutrition.calories}</p>
                <p>Protein: {recipe?.nutrition.protein}</p>
                <p>Fat: {recipe?.nutrition.fat}</p>
                <p>Carbohydrates: {recipe?.nutrition.carbohydrates}</p>
                </div>
                <div className="section instructions">
                <h3>Instructions</h3>
                {recipe.instructions == "" ? "No instructions available" : 
                <ol>
                    {recipe?.instructions.map((step, idx) => (
                    <li key={idx}>{step}</li>
                    ))}
                </ol>
                }
                </div>
            </div>
        </div>
        // <h1>hello</h1>
    )
}

export default SingleRecipe