import { useSelector } from "react-redux";

function CheckoutItem() {
    const customer = useSelector(store => store.customer);
    const pizza = useSelector(store => store.cart);
    let delv = ""
    console.log(pizza);
    let total = 0
    console.log('customer is', customer);

    for (let piece of pizza ){
        total+= Number(piece.price);
    }

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
            {pizza.map((pizzas, index) =>(
                <li id="pizza" key={index}> {pizzas.name} ${pizzas.price}</li>
            ))}
            <div>
                <p>Total is: ${total}</p>
            </div>
        </>
    )
}
export default CheckoutItem;