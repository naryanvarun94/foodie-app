import './Navbar.css'
import {Link} from 'react-router-dom';



const Navbar = () => {
    return (
        <div class="sidebar">
        <img src="./media/icons8-noodles-48.png" alt="" />
        <header>Foodie</header>
        <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="#">My Cart</a></li>
            <li><a href="#">My Account</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        {/* <div className='links'>
                <Link to="/">Sign In</Link>
                <Link to="/home"> Home</Link>

            </div> */}
    </div>
    );
}

export default Navbar;