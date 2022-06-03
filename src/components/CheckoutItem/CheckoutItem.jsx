import { useSelector } from "react-redux";
import  {useHistory} from "react-router-dom"
import './Checkoutitem.css'

function CheckoutItem() {
    const history= useHistory();
    const customer = useSelector(store => store.customer);
    const pizza = useSelector(store => store.cart);
    let delv = ""
    console.log(pizza);

    console.log('customer is', customer);

    return (
        <>
            <div>
                <h3>{customer.costomer_name}</h3>
                <h3>{customer.street_address}</h3>
                <h3>{customer.city}</h3>
                <h3>{customer.zip}</h3>
                <h3>{customer.delivery ? "delivery" : "pickup"}</h3>
                <p>{delv}</p>
            </div>
            {pizza.map((pizzas, index) =>
                <li id="pizza" key={index}>{pizzas.name}
                    {pizzas.price}</li>
            )}
            <h3 id="complete" 
                onClick={()=>{ history.push('/'); alert('completed order!')}}>
                Complete Order
                </h3>
               
        </>
    )
}
export default CheckoutItem;
