import { useState } from 'react';
import { useDispatch } from 'react-redux';
import{ useHistory} from 'react-router-dom';


function CustomerInfo() {

    const dispatch = useDispatch();
    const history = useHistory();

    let [name, setName] = useState('');
    let [streetAddress, setStreetAddress] = useState('');
    let [city, setCity] = useState('');
    let [zip, setZip] = useState('');
    let [delivery, setDelivery] = useState(false);
    let something = false
    const resetInput = event => {
        console.log('resetInput');
        setName(''),
            setStreetAddress(''),
            setCity(''),
            setZip(''),
            setDelivery(false)

    }

    const handleSubmit = event => {
        //event.preventDeafault();
        let customerInfo = {
            customer_name: name,
            street_address: streetAddress,
            city: city,
            zip: zip,
            type: delivery
        };
        dispatch({ type: 'CUSTUMER_INFO', payload: customerInfo });
        console.log(`custumerInfo`, { name, streetAddress, city, zip, delivery });
        history.push('/CheckoutItem')
        resetInput();
    }

    return (
        <section id="input">
      
            <div>
                <input placeholder='Name' value={name} onChange={(event) => setName(event.target.value)} />
            </div>
  
            <div>
                <input placeholder='Street Address' value={streetAddress} onChange={(event) => setStreetAddress(event.target.value)} />
            </div>

            <div>
                <input placeholder='City' value={city} onChange={(event) => setCity(event.target.value)} />
           </div>

            <div>
                <input placeholder='Zip' value={zip} onChange={(event) => setZip(event.target.value)}/>
            </div>
            
            <div>
                <input type="radio" name="deliver/pickup" value="pickup" checked onChange={(event) => setDelivery(event.target.value)} /> Pickup
                <input type="radio" name="deliver/pickup" value="delivery" onChange={(event) => setDelivery(event.target.value)} /> Delivery
            </div>


         <div>
            <button onClick={() => handleSubmit()} >Checkout</button>


        </div>

        </section>
    )



}

export default CustomerInfo;