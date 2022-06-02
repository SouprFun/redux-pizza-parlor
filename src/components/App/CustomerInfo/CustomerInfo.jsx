import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';


function CustomerInfo() {

const dispatch = useDispatch();

let [name, setName] = useState('');
let [streetAddress, setStreetAddress] = useState('');
let [city, setCity] = useState('');
let [zip, setZip] = useState('');
let [delivery, setDelivery] = useState(false);

const resetInput = event =>{
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
      name: name,
      street_address: streetAddress,
      city: city,
      zip: zip,
      delivery: delivery 
    };
    dispatch ({type: 'COSTUMER_INFO', payload: customerInfo});
    console.log(`costumerIfon`, {name, street, city, zip, delivery});
    // push

    axios.post('api/order', {customerInfo})
    .then (() => {
        fetchMenu()
    }).catch((err) => console.log('error in post', err));

    resetInput();
}

    return (
        <div>
            <input placeholder='Name' />
            <input placeholder='Street Address' />
            <input placeholder='City' />
            <input type="number" value={zip} placeholder='Zip' />
            <h3>Pick up</h3><input type="checkbox" name="" value="pickup" />
           <h3>Delivery</h3><input type="checkbox" name="" value="delivery" />

           <button>/NEXT`</button>


        </div>
    )



}

export default CustomerInfo;