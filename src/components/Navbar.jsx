import { NavLink } from "react-router"
import { useEffect } from "react";

const Navbar = () => {

    const handleClick =(e) => `navlink ${e.isActive ? "clicked_link" : ''}`

  return (
    <header>
        <div className="navbar_header_left">
            <div className="logo">
                <img src="src\assets\header_logo.png" alt="" />
            </div>
            <h2><span className="span">COOK</span>ING</h2>
        </div>
        <div className="navbar_header_right">
            <NavLink className={(e) => handleClick(e)} to="/" >Home</NavLink>
            <NavLink className={(e) => handleClick(e)} to="/create" >Create-Recipe</NavLink>
            <NavLink className={(e) => handleClick(e)} to="/recipe" >Recipes</NavLink>
            <NavLink className={(e) => handleClick(e)} to="/about" >About</NavLink>
            <NavLink className={(e) => handleClick(e)} to="/contact" >Contact</NavLink>
        </div>
    </header>
  )
}

export default Navbar