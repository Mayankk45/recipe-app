import { Route, Routes } from "react-router"
import Home from "../pages/Home"
import Recipes from "../pages/Recipes"
import Contact from "../pages/Contact"
import Create from "../pages/Create"
import About from "../pages/About"
import SingleRecipe from "../pages/SingleRecipe"

const Mainroutes = () => {
    return (
        <Routes>
            <Route path="/" element= <Home/> />
            <Route path="/about" element= <About/> />
            <Route path="/create" element= <Create/> />
            <Route path="/contact" element=<Contact/> />
            <Route path="/recipe" element= <Recipes/> />
            <Route path="/recipe/details/:name" element= <SingleRecipe/> />
        </Routes>
    )
}

export default Mainroutes