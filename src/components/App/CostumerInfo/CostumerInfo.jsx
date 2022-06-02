import { useState } from 'react';
import { useDispatch } from 'react-redux';


function CustomerInfo() {

const dispatch = useDispatch();

let [name, setName] = useState('');
let [streetAddress, setStreetAddress] = useState('');
let [city, setCity] = useState('');
let [zip, setZip] = useState('');
let [delivery, setDelivery] = useState(false);

const recentInput = event =>{
    console.log('resetInput');
    setName(''),
    setStreetAddress(''),
    setCity(''),
    setZip(''),
    setDelivery(false)

}

    return (
        <div>
            <input placeholder='Name' />
            <input placeholder='Street Address' />
            <input placeholder='City' />
            <input placeholder='Zip' />
            <h3>Pick up</h3><input type="radio" name="" value="pickup" />
           <h3>Delivery</h3><input type="radio" name="" value="delivery" />

           <button>/NEXT</button>


        </div>
    )



}

export default CustomerInfo;