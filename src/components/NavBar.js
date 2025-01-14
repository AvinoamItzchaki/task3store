import { Link } from "react-router-dom";
import  "./css/Nav.css";

function NavBar(){

    return (
        <nav>
            <ul id='navList'>
                <li className='navItem'><Link class='navLink' to="/shop">Shop</Link></li>
                <li className='navItem'><Link class='navLink' to="/cart">Cart</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar;
