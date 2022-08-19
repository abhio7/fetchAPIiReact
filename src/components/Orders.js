import React, { useEffect, useState } from 'react';

const Orders = () => {

    const [Order, setOrder] = useState([]);

    const getData = async () => {
        const response = await fetch("https://assessment.api.vweb.app/orders");
        const data = await response.json();
        console.log(data)
        setOrder(data);
    }
    useEffect(() => {
        getData();
    }, []);
    return (
        <>
            <h2>Orders</h2>
            <section>
                <div class="tbl-header">
                    <table cellpadding="0" cellspacing="0" border="0">
                        <thead>
                            <tr>
                                <th>Order Id</th>
                                <th>User Id</th>
                                <th>Product Id</th>
                                <th>Quantity</th>
                                <th>Order Date</th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div class="tbl-content">
                    <table cellpadding="0" cellspacing="0" border="0">
                        <tbody>


                            {
                                Order.map((curElement) => {
                                    const { order_id, product_id, quantity, user_id, order_date } = curElement;
                                    return (
                                        <tr key={order_id}>
                                            <th >{order_id}</th>

                                            <th>{user_id}</th>
                                            <td>{product_id}</td>
                                            <td>{quantity}</td>
                                            <td>{order_date}</td>


                                        </tr>
                                    );
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}




export default Orders;