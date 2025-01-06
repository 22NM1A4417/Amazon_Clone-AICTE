import React from 'react'
import "./cart.css"
import { Divider } from '@mui/material';
const Cart = () => {
    return <div className='cart_section'>
        <div className="cart_container">
            <div className="left_cart">
                <img src="" alt="cart" />
                <div className="cart_btn">
                    <button className="cart_btn1" 
                    //onClick={() => addtocart(inddata.id)}
                    >Add to Cart</button>
                    <button className="cart_btn2">Buy Now</button>
                </div>
            </div>
                <div className="right_cart">
                        <h3>Fitness Gear</h3>
                        <h4>Pigeon Electric Kettle(1, SVGAElement.length, Silver, Black)</h4>
                        <Divider />
                        <p className="mrp">M.R.P. : ₹1995</p>
                        <p>Deal of the Day : <span style={{ color: "#B12704" }}>₹625.00</span></p>
                        <p>You save : <span style={{ color: "#B12704" }}> ₹125 </span></p>

                        <div className="discount_box">
                            <h5 >Discount : <span style={{ color: "#111" }}>Extra 10% Off</span> </h5>
                            <h4>FREE Delivery : <span style={{ color: "#111", fontWeight: "600" }}>Oct 8 - 21</span> Details</h4>
                            <p style={{ color: "#111" }}>Fastest delivery: <span style={{ color: "#111", fontWeight: "600" }}> Tomorrow 11AM</span></p>
                        </div>
                        <p className="description">About the Item : <span style={{ color: "#565959", fontSize: "14px", fontWeight: "500", letterSpacing: "0.4px" }}>description</span></p>
                    </div>
            </div>
    </div>;
};

export default Cart
