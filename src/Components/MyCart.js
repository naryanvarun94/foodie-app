import Sidebar from "./Sidebar";
import './MyCart.css'



const Cart = (props) => {

    // function Car(props) {
    //     return <li>I am a {props.brand.element.item}</li>;
    // }


    let item = props.element;
    let cart = sessionStorage.getItem('contactOptions');
    console.log('testLog--->', cart)
    return (
        <div className="content_mycart">
            <h1>My Cart</h1>
            <Sidebar />
            <h3>List</h3>
            <h5>{cart}</h5>
        </div>
    );
}

export default Cart;
