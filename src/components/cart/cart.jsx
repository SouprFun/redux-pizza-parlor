import { useDispatch, useSelector } from "react-redux";
function Cartitems(){
    const cart =useSelector(store => store.cart)
    return(
        <>
        <div className="menuContainer">
            {cart.map((pizza, i) => (
                <div key={i} >
                 
                    <h5>{pizza.name}</h5>
                    <p>{pizza.description}</p>
                    <p>{pizza.price}</p>
                    
                </div>
            ))}
        </div>
       
    </>
    )

}

export default Cartitems;