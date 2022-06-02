import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './Menu.css';

function PizzaMenu() {
    const dispatch = useDispatch();
    const menu = useSelector(store => store.pizza);
    const cart =useSelector(store => store.cart)


    const fetchMenu = () => {
        axios.get('/api/pizza')
            .then(response => dispatch({ type: 'DISPLAY_MENU', payload: response.data }))
            .catch(err => console.log('error in fetch menu: ', err));
    }

    useEffect(() => {
        fetchMenu();
    }, []);

    const sendcart = (pizza) => {

        console.log(pizza)
        dispatch({ type: 'ADD_PIZZA', payload: { ...pizza, quantity: 1 } })
        console.log(cart)
    }
    


    return (
        <>
            <div className="menuContainer">
                {menu.map((pizza, i) => (
                    <div key={i} className="menuItem">
                        <img src={pizza.image_path} />
                        <h5>{pizza.name}</h5>
                        <p>{pizza.description}</p>
                        <p>{pizza.price}</p>
                        <button onClick={() => sendcart(pizza)} key={pizza.id} className="addToCart">Add To Cart</button>
                    </div>
                ))}
            </div>
            <button id="cartButton">Cart</button>
        </>
    )
}
export default PizzaMenu;