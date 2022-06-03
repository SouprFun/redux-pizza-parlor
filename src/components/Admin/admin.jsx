import { useSelector } from "react-redux";
function Admin(){
    let total =0;
    const customer = useSelector(store => store.customer);
    const pizza = useSelector(store => store.cart);

    console.log('in admin, pizza:', pizza);
    console.log('in admin, customer:', customer);
    for (let piece of pizza ){
        total+= Number(piece.price);
    }
    return(
        
        
        <>
        {console.log(customer)}
        {console.log(pizza)}
      
        <p>{customer.costomer_name}</p>
        <p>{customer.delivery ? "delivery" : "pickup"}</p>
        <p>{total}</p>
        </>


    )
}

export default Admin;