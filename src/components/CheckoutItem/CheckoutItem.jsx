import { useSelector, useDispatch} from "react-redux";
import  {useHistory} from "react-router-dom"

import './Checkoutitem.css'
import swal from 'sweetalert';
import axios from "axios";

function CheckoutItem() {
    const dispatch = useDispatch();
    const history= useHistory();
    const customer = useSelector(store => store.customer);
    const pizza = useSelector(store => store.cart);
    let delv = ""
    console.log(pizza);
    let total = 0
    console.log('customer is', customer);

    for (let piece of pizza ){
        total+= Number(piece.price);
    }
console.log(total);

function clickhandler(total){
    
    axios.post('/api/order', {
        ...customer,
        pizzas: pizza,
        total: total
    }).then(response => {
        swal("Order Complete", "Thank you!", "success");
        history.push('/');
    })

}

    return (
        <>
       
            <div>
                <h3>{customer.customer_name}</h3>
                <h3>{customer.street_address}</h3>
                <h3>{customer.city}</h3>
                <h3>{customer.zip}</h3>
                <h3>{customer.type}</h3>
                <p>{delv}</p>
            </div>
            {pizza.map((pizzas, index) =>(
                <li id="pizza" key={index}> {pizzas.name} ${pizzas.price}</li>
            ))}
            <div>
                <p>Total is: ${total}</p>
            </div>
            <h3 id="complete" 
                onClick={()=>clickhandler(total)}>
                Complete Order
                </h3>
               
        </>
    )
}
export default CheckoutItem;
