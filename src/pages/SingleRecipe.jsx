import { useContext } from "react"
import { useNavigate, useParams } from "react-router"
import { recipeContext } from "../context/Recipecontext"
import { toast } from "react-toastify"

const SingleRecipe = () => {
    const navigate = useNavigate()
    const {data,setData} = useContext(recipeContext)

    let params = useParams()
    let recipes = JSON.parse(localStorage.getItem('recipes')) || []
    let recipe = recipes.find((recipes) => recipes.id === params.name)

    const handleDelete = (id) => {
        let filteredData = data.filter((recipe) => recipe.id != id)
        setData(filteredData)
        navigate('/recipe')
        toast.success("recipe deleted! 😒",{
            position: "top-center",
            autoClose: 3000
        })
        localStorage.setItem('recipes',JSON.stringify(filteredData))
    }

    return (
        <div className="recipe_details_card">
            <div className="left_side">
                <img className="recipe-image" src={recipe?.image || null} alt={" no image available"} />
                <h1 className="title">{recipe?.title}</h1>
                <p className="description">{recipe?.description}</p>
                <div className="info">
                <span>Prep: {recipe?.prepTime +" mins"}</span>
                <span>Cook: {recipe?.cookTime+" mins"}</span>
                <span>Total: {recipe?.totalTime+" mins"}</span>
                <span>Servings: {recipe?.servings}</span>
                </div>
                <button className="deleteRecipe" onClick={() => handleDelete(recipe.id)}>Delete Recipe</button>
            </div>
            <div className="right_side">
                <div className="section ingredients">
                <h3>Ingredients</h3>
                {recipe?.ingredients == "" ? "No ingredients available" : 
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
                {recipe?.instructions == "" ? "No instructions available" : 
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