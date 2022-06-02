import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function PizzaMenu (){
    const dispatch = useDispatch();

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
            
        </div>
    )
}
export default PizzaMenu;