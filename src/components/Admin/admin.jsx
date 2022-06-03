import axios from "axios";
import { useEffect, useState } from "react";


function Admin() {
    let [orders, setOrder] = useState([]);

    function fetchOrders() {
        console.log('in fetch');
        axios.get('/api/order')
            .then((response) => {
                setOrder(response.data);
            }).catch(err => (console.log(err)))
    }

    useEffect(() => {
        fetchOrders()
    }, [])

    return (

        <table>
            <thead>
                <th>name</th>
                <th>address</th>
                <th>delivery type</th>
                <th>total</th>
            </thead>
            <tbody>
                {orders.map(order => (
                    <tr>
                        <td>{order.customer_name}</td>
                        <td>{order.street_address}</td>
                        <td>{order.type}</td>
                        <td>{order.total}</td>
                    </tr>
                ))}
            </tbody>
        </table>




    )
}

export default Admin;