import React, { useState, useEffect } from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import Tryon from './Tryon'


function Product({ id, title, image, price, rating }) {
    const [modalShow, setModalShow] = React.useState(false);

    const [{ basket }, dispatch] = useStateValue();
    // const [modalShow, setModalShow] = React.useState(false);


    // console.log('This is the basket', basket);
    const addToBasket = () => {
        // Dispach the item into the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}


                </div>
            </div>
            <img src={image} alt="" />
            <button onClick={() => setModalShow(true)}>Try-on</button>
            {/* <Button variant="primary" onClick={() => setModalShow(true)}>Try-on</Button> */}

            <Tryon
                show={modalShow}
                onHide={() => setModalShow(false)}

            />
            <button onClick={addToBasket}>Add to Basket</button>

        </div>
    );
}

export default Product
