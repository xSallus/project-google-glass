import React from "react";

const Form = () => {
  return (
    <form method="#" id="contactForm" >
      <fieldset>
        <legend>User identity</legend>
        <div>
          <label>Name:</label>
          <input name="name" id="name" type="text" placeholder="Your name" />
        </div>
        <div>
          <label>Passphrase:</label>
          <input name="password" id="password" type="password" />
        </div>
        <div>
          <label>Email:</label>
          <input name="email" id="email" type="email" />
        </div>
        <fieldset>
          <legend>Gender</legend>
          <input
             type="radio"
             name="gender"
             id="gender"
             value="male"
          >Male</input>
          <input
             type="radio"
             name="gender"
             id="gender"
             value="female"
          >Female</input>
        </fieldset>
        <div>
          <label>Birthday:</label>
          <input name="birth" id="birth" type="date" />
        </div>
      </fieldset>
      <fieldset>
        <legend>User address</legend>
        <div>
          <label>Logradouro:</label>
          <input name="street" id="street" type="text" placeholder="St, Ave, Trav.." />
        </div>
        <div>
          <label>Number:</label>
          <input name="houseNumber" id="houseNumber" type="number" />
        </div>
        <div>
          <label>State:</label>
          <select name="state" id="state">{/* options here*/}</select> 
        </div>
        <div>
          <label>City:</label>
          <input name="city" id="city" type="text" placeholder="Your city name" /> 
        </div>
      </fieldset>
      <fieldset>
        <legend>User message</legend>
        {/*Slider here*/}
        <div>
            <label>Message</label>
            <textarea placeholder="Your message" name="" id="" />
        </div>
      </fieldset>
      <fieldset>
        <legend>I wanna a Google Glass</legend>
        <div>
          <label>Color</label>
          <select name="colorChoice" id="colorChoice" >
            <option value="#f00" >Red</option>
            <option value="#00f" >Blue</option>
            <option value="#0f0" >Green</option>
            <option value="#ff5" >Yellow</option>
            <option value="#faf" >Ros&eacute;</option>
            <option value="#ddd" >Silver</option>
            <option value="#000" >Black Piano</option>
            <option value="#fff" >Pearl white</option>
          </select>
        </div>
        <div>
          <label>Quantity</label>
          <input type="number" name="howMany" id="howMany" />
        </div>
        <div>
          <label>Total price</label>
          <span id="price_total"  />
        </div>
        <div>
          <input type="checkbox" name="wannaBuy" id="wannaBuy" />
          <label>I would apreciate to buy a Google Glass when available</label>
        </div>
      </fieldset>
    </form>
  );
};

export default Form;
