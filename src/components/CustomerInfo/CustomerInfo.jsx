import { useState } from 'react';
import { useDispatch } from 'react-redux';


function CustomerInfo() {

    const dispatch = useDispatch();

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
            costomer_name: name,
            street_address: streetAddress,
            city: city,
            zip: zip,
            delivery: delivery
        };
        dispatch({ type: 'COSTUMER_INFO', payload: customerInfo });
        console.log(`costumerInfo`, { name, streetAddress, city, zip, delivery });
        // push
        resetInput();
    }

    return (
        <section id="input">
        <div>
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
                <input type="radio" name="deliver/pickup" value="pickup" checked onChange={() => setDelivery(false)} /> Pickup
                <input type="radio" name="deliver/pickup" value="delivery" onChange={() => setDelivery(true)} /> Delivery
            </div>

            <button onClick={() => handleSubmit()} >Checkout</button>


        </div>
        </section>
    )



}

export default CustomerInfo;