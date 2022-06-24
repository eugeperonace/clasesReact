import React from "react";
import './styles.css';
import CartWidget from "../CartWidget";

const menuItems = [
    {
        id: 1,
        label: "Techno",
    },
    {
        id: 21,
        label: "Clothes",
    },
    {
        id: 3,
        label: "Decor",
    },
];

const NavBar = () =>{
    return(
        <div className="nav">
            <span className="nav-logo">EightShop</span>
            <div className="nav-items">
               {menuItems.map((item) => (
                    <a href="/" className="nav-item" key={item.id}>
                        {item.label}
                    </a>
                ))}
            </div>
            <CartWidget />
        </div>
    );
};

export default NavBar;