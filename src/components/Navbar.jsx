import { NavLink } from "react-router"

const Navbar = () => {

    const handleClick =(e) => `navlink ${e.isActive ? "clicked_link" : ''}`

    // Base path for public folder in Vite
    const base = import.meta.env.BASE_URL;
  return (
    <header>
        <div className="navbar_header_left">
            <div className="logo">
                <img src={`${base}/assets/header_logo.png`} alt="" />
            </div>
            <h2><span className="span">TASTY</span>BITES</h2>
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