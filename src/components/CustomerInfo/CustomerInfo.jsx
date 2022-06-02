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
        console.log(`costumerIfon`, { name, street, city, zip, delivery });
        // push
        resetInput();
    }

    return (
        <section id="input">
        <div>
            <div>
                <input placeholder='Name' />
            </div>
            <div>
                <input placeholder='Street Address' />
            </div>
            <div>
                <input placeholder='City' />
            </div>
            <div>
                <input type="number" value={zip} placeholder='Zip' />
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