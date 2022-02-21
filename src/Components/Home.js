import './Home.css'
import Navbar from './Navbar';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Sidebar from './Sidebar';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Home = () => {   
    
    let id = 0;
    let food = [
        {
          "item": "Veggie Burger",
          "price": "₹199",
          "id": 1
        },
        {
          "title": "Vigge Supreme Pizza",
          "price": "₹399",
          "id": 2
        },
        {
          "title": "Devil's Veg Sandwich",
          "price": "₹149",
          "id": 3
        }
      ]
    
    let history = useHistory();
      
    let cartjson;
    let addBurger = (e) => {
        id = 1;
        food.forEach(element => {
            if(element.id==id){
                cartjson = element;
                console.log('cart',cartjson);
                alert("Burger Added to Cart")
            }
            sessionStorage.setItem('contactOptions', JSON.stringify(cartjson));

        });
        history.push('/my-cart')
    }

    return (
        <div>
            <div class="main">
                <Sidebar />
                <h1>Welcome to Foodie</h1>
                <ul class="cards">
                    <li class="cards_item">
                        <div class="card">
                            <div class="card_image"><img src="./media/burger.png"></img></div>
                            <div class="card_content">
                                <h2 class="card_title">Veggie Burger</h2>
                                <p class="card_text">A firm, crisp texture often identified by the sharp, audible noise that the food makes when being eaten</p>
                                <button class="btn card_btn" onClick={addBurger}><i class='bx bx-cart-alt'></i>
                                    Add to Cart</button>
                            </div>
                        </div>
                    </li>
                    <li class="cards_item">
                        <div class="card">
                            <div class="card_image"><img src="./media/pizza.png"></img></div>
                            <div class="card_content">
                                <h2 class="card_title">Vigge Supreme Pizza</h2>
                                <p class="card_text">A firm, crisp texture often identified by the sharp, audible noise that the food makes when being eaten</p>
                                <button class="btn card_btn" onClick={addBurger}><i class='bx bx-cart-alt'></i>
                                Add to Cart</button>
                            </div>
                        </div>
                    </li>
                    <li class="cards_item">
                        <div class="card">
                            <div class="card_image"><img src="./media/sandwich.png"></img></div>
                            <div class="card_content">
                                <h2 class="card_title">Devil's Veg Sandwich</h2>
                                <p class="card_text">A firm, crisp texture often identified by the sharp, audible noise that the food makes when being eaten</p>
                                <button class="btn card_btn" onClick={addBurger}><i class='bx bx-cart-alt'></i>
                                Add to Cart</button>
                            </div>
                        </div>
                    </li>
                    <li class="cards_item">
                        <div class="card">
                            <div class="card_image"><img src="./media/pizza.png"></img></div>
                            <div class="card_content">
                                <h2 class="card_title">Double Crust Cheeze</h2>
                                <p class="card_text">A firm, crisp texture often identified by the sharp, audible noise that the food makes when being eaten</p>
                                <button class="btn card_btn" onClick={addBurger}><i class='bx bx-cart-alt'></i>
                                Add to Cart</button>
                            </div>
                        </div>
                    </li>
                    <li class="cards_item">
                        <div class="card">
                            <div class="card_image"><img src="./media/burger.png"></img></div>
                            <div class="card_content">
                                <h2 class="card_title">Double Burger</h2>
                                <p class="card_text">A firm, crisp texture often identified by the sharp, audible noise that the food makes when being eaten</p>
                                <button class="btn card_btn" onClick={addBurger}><i class='bx bx-cart-alt'></i>
                                Add to Cart</button>
                            </div>
                        </div>
                    </li>
                    <li class="cards_item">
                        <div class="card">
                            <div class="card_image"><img src="./media/truffle.png"></img></div>
                            <div class="card_content">
                                <h2 class="card_title">Choco Truffle</h2>
                                <p class="card_text">A firm, crisp texture often identified by the sharp, audible noise that the food makes when being eaten</p>
                                <button class="btn card_btn" onClick={addBurger}><i class='bx bx-cart-alt'></i>
                                Add to Cart</button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Home;