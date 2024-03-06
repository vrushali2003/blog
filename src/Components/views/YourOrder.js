import React, { useState } from "react";
 import sql_1 from "../assest/sql_1.png";
import "../css/yourorder.scss";

const YourOrder = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

  const handleRadioChange = (event) => {
    setSelectedPaymentMethod(event.target.value);
  };
  const handlePlaceOrder = () => {
    console.log("Order placed with payment method:", selectedPaymentMethod);
  };
  return (
    <div className="container-fluid dv-your-order">
      <div className="row first-row">
        <div className="col-2 col-sm-2 col-md-2 col-lg-2 head-style">Image</div>

        <div className="col-3 col-sm-3 col-md-3 col-lg-3 head-style">Course Name</div>

        <div className="col-2 col-sm-2 col-md-2 col-lg-2 head-style">Price</div>

        <div className="col-3 col-sm-3 col-md-3 col-lg-3 head-style">Quantity</div>
        <div className="col-2 col-sm-2 col-md-2 col-lg-2 head-style">Total</div>
      </div>

      <div className="row second-row d-flex align-items-center ">
        <div className="col-2 col-sm-2 col-md-2 col-lg-2 ">
          <img
                        src={sql_1}
                        alt="sql_1"
                        className="w-100"
                      />
        </div>

        <div className="col-3 col-sm-3 col-md-3 col-lg-3 font-style">
          Learn SQL Essentials
        </div>

        <div className="col-2 col-sm-2 col-md-2 col-lg-2 font-style">
          <div className="color">Rs.399</div>
        </div>

        <div className="col-3 col-sm-3 col-md-3 col-lg-3 font-style">02</div>

        <div className="col-2 col-sm-2 col-md-2 col-lg-2 font-style">Rs 789</div>
      </div>
      <div className="row third-row">
        <div className="col-9 col-sm-9 col-md-9 col-lg-9 total">Subtotal</div>
        <div className="col-3 col-sm-3 col-md-3 col-lg-3 align-text total">₹971</div>
      </div>

      <div className="row forth-row">
        <div className="col-9 col-sm-9 col-md-9 col-lg-9 total">Total</div>
        <div className="col-3 col-sm-3 col-md-3 col-lg-3 align-text-2 total">
          ₹971
        </div>
      </div>

      <div className="row fifth-row pt-3">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
          <label className="paymentType">
            <input
              type="radio"
              name="paymentMethod"
              value="directBankTransfer"
              checked={selectedPaymentMethod === "directBankTransfer"}
              onChange={handleRadioChange}
            />
            Direct Bank Transfer
          </label>
          <hr className="horizontal-line" />
          {selectedPaymentMethod === "directBankTransfer" && (
           <p className="para">
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </p>
          )}
        </div>

        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
          <label className="paymentType">
            <input
              type="radio"
              name="paymentMethod"
              value="chequePayment"
              checked={selectedPaymentMethod === "chequePayment"}
              onChange={handleRadioChange}
            />
            Cheque Payment
          </label>
          <hr className="horizontal-line" />
          {selectedPaymentMethod === "chequePayment" && (
            <p className="para">
              Please send a check to Store Name, Store Street, Store Town, Store
              State / County, Store Postcode.
            </p>
          )}
        </div>

        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
          <label className="paymentType">
            <input
              type="radio"
              name="paymentMethod"
              value="creditCard"
              checked={selectedPaymentMethod === "creditCard"}
              onChange={handleRadioChange}
            />
            Credit Card
          </label>
          <hr className="horizontal-line" />
          {selectedPaymentMethod === "creditCard" && (
            <p className="para">Pay with cash upon delivery.</p>
          )}
        </div>

        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
          <label className="paymentType">
            <input
              type="radio"
              name="paymentMethod"
              value="paypal"
              checked={selectedPaymentMethod === "paypal"}
              onChange={handleRadioChange}
            />
            Paypal
          </label>
          <hr className="horizontal-line" />
          {selectedPaymentMethod === "paypal" && (
            <p className="para">
              Pay via PayPal; you can pay with your credit card if you don’t
              have a PayPal account.
            </p>
          )}
        </div>
      </div>

      
      <div className="row place-order-row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 ">
          <button className="place-order-button" onClick={handlePlaceOrder}>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default YourOrder;