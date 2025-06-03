import { createContext, useState } from "react"

export const recipeContext = createContext(null)

const Recipecontext = (props) => {
    const [data, setData] = useState([
        {
            "id":'KmI9ODjFEhyRDBAC1_yc7',
            "title": "Chole Bhature",
            "description": "A classic North Indian dish made with spicy chickpeas (chole) served with fluffy fried bread (bhature).",
            "image": "https://namastebharattaste.com/wp-content/uploads/2023/08/chole_bhature-removebg-preview.png",
            "servings": 4,
            "prepTime": "20 mins",
            "cookTime": "30 mins",
            "totalTime": "50 mins",
            "ingredients": [
            "2 cups chickpeas (soaked overnight)",
            "2 onions (finely chopped)",
            "2 tomatoes (pureed)",
            "1 tbsp ginger-garlic paste",
            "2 green chilies (chopped)",
            "2 tsp chole masala",
            "1 tsp cumin seeds",
            "1/2 tsp turmeric powder",
            "1 tsp red chili powder",
            "Salt to taste",
            "Fresh coriander (for garnish)",
            "Oil (for cooking + frying)",
            "2 cups all-purpose flour (for bhature)",
            "1/2 cup curd",
            "1/2 tsp baking powder"
            ],
            "instructions": [
            "Pressure cook soaked chickpeas until soft.",
            "Heat oil in a pan, add cumin seeds, then chopped onions. Sauté till golden brown.",
            "Add ginger-garlic paste and green chilies. Cook for 2 mins.",
            "Add tomato puree, turmeric, red chili, salt, and chole masala. Cook until oil separates.",
            "Add boiled chickpeas and cook on low heat for 15–20 mins. Garnish with coriander.",
            "For Bhature: Mix flour, curd, baking powder, and salt. Knead into soft dough. Rest 2 hours.",
            "Roll dough into small discs and deep fry till golden and puffed.",
            "Serve hot chole with bhature, sliced onions, and lemon wedges."
            ],
            "nutrition": {
            "calories": "520 kcal (per serving)",
            "protein": "14g",
            "fat": "20g",
            "carbohydrates": "65g"
            }
        },
    ])
    return (
    <recipeContext.Provider value={{data, setData}}>
        {props.children}
    </recipeContext.Provider>
    )
}

export default Recipecontext