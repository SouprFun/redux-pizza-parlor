import { useSelector } from "react-redux";

function CheckoutItem() {
    const customer = useSelector(store => store.customer);
    const pizza = useSelector(store => store.cart);
    console.log(pizza);

    function chekoutButton(customer) {
        if (customer.delivery === true) {
            return ("for Delivery");
        } else {
            return ('for Pickup');
        }
    }
    return (
        <>

            <div>
                <h3>{customer.customer_name}</h3>
                <h3>{customer.costumer_address}</h3>
                <h3>{customer.city}</h3>
                <h3>{customer.zip}</h3>
                <h3>{chekoutButton}</h3>
            </div>

            {pizza.map((pizzas, index) =>
                <li id="pizza" key={index}>{pizzas.name}
                    {pizzas.price}</li>
            )}



        </>
    )
}

export default CheckoutItem;
