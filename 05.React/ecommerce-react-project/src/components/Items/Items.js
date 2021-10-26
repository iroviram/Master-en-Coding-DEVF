import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './items.css';

const Items = ({
    key,
    name,
    image,
    brand,
    price
}) => {
    return (
        <Router>
            <Switch>
                <li className="item-cointainer">
                    <div className="item-row">
                        <img className="item-image" src={image} alt="" />
                        <p className="item-name">{name}</p>
                        <span className="item-brand">{brand}</span>
                        <span className="item-price">${price}.00 MXN</span>
                    </div>
                </li>
            </Switch>
        </Router>
    )
}

export default Items
