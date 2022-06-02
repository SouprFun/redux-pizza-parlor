import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function PizzaMenu (){
    const dispatch = useDispatch();
    const menu = useSelector(store => store.pizza);

    const fetchMenu = () => {
        axios.get('/api/pizza')
        .then(response => dispatch({type: 'DISPLAY_MENU', payload: response.data}))
        .catch(err => console.log('error in fetch menu: ', err));
    }

    useEffect(() => {
        fetchMenu();
    }, []);

    return (
        <div className="menuContainer">
            {menu.map((pizza) => (
                <div key={pizza.id}>
                    <img src={pizza.image_path}/>
                    <h5>{pizza.name}</h5>
                    <p>{pizza.description}</p>
                    <p>{pizza.price}</p>

                </div>
            ))}

        </div>
    )
}
export default PizzaMenu;