import { useState } from 'react';
import { useDispatch } from 'react-redux';


function CustomerInfo() {

    const dispatch = useDispatch();

    let [name, setName] = useState('');
    let [streetAddress, setStreetAddress] = useState('');
    let [city, setCity] = useState('');
    let [zip, setZip] = useState('');
    let [delivery, setDelivery] = useState(false);

    const resetInput = event => {
        console.log('resetInput');
        setName(''),
            setStreetAddress(''),
            setCity(''),
            setZip(''),
            setDelivery(false)

    }
    const handleSubmit = event => {
        event.preventDeafault();
        let customerInfo = {
            costomer_name: name,
            street_address: streetAddress,
            city: city,
            zip: zip,
            delivery: delivery
        };
        dispatch({ type: 'COSTUMER_INFO', payload: customerInfo });
        console.log(`costumerInfo`, { name, street, city, zip, delivery });
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
                <input placeholder='Street Address' value={streetAddress} onChange={(event) => setName(event.target.value)} />
            </div>
            <div>
                <input placeholder='City' value={city} onChange={(event) => setName(event.target.value)} />
           </div>

            <div>
                <input placeholder='Zip' value={zip} onChange={(event) => setName(event.target.value)}/>
            </div>
            <div>
                <h3>Pick up</h3><input type="checkbox" name="" value="pickup" />
            </div>
            <div>
                <h3>Delivery</h3><input type="checkbox" name="" value="delivery" />
            </div>




        </div>
        </section>
    )



}

export default CustomerInfo;