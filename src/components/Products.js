import React, { useState } from 'react';

const Products = () => {

    const [products, setProducts] = useState([]);

    const getProducts = async () => {

        const response = await fetch(" https://assessment.api.vweb.app/products");
        const data = await response.json();
        console.log(data);
        setProducts(data);
    }
    useState(() => {
        getProducts();
    }, []);
    return (
        <>
            <h2>Products</h2>
            <div className="container-fluid mt-5">
                <div className="row text-center">
                    {
                        products.map((curElem) => {
                            const { product_id, name, stock, selling_price } = curElem;
                            return (
                                <div className="col-10 col-md-4 mt-5" key={product_id}>
                                    <div className="card p-2">
                                        <div className="d-flex align-items-center">
                                            <div className="ml-3 w-100">
                                                <h4 className="mb-0 mt-0 textLeft">{name}</h4>
                                                <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                                    <div className="d-flex flex-column">
                                                        <span className="rating">Product Id</span>
                                                        <span className="number2">{product_id}</span></div>
                                                    <div className="d-flex flex-column">
                                                        <span className="articles">Price</span>
                                                        <span className="number1">{selling_price}</span></div>
                                                    <div className="d-flex flex-column">
                                                        <span className="followers">Stock</span>
                                                        <span className="number2">{stock}</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )

}

export default Products;