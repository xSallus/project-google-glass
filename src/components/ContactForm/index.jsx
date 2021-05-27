import React from "react";

const Form = () => {
  return (
    <form>
      <fieldset>
        <legend>User identity</legend>
        <div>
          <label>Name:</label>
          <input type="text" placeholder="Your name" />
        </div>
        <div>
          <label>Passphrase:</label>
          <input type="password" />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" />
        </div>
        <fieldset>
          <legend>Gender</legend>
          <radio value="male">Male</radio>
          <radio value="female">Female</radio>
        </fieldset>
        <div>
          <label>Birthday:</label>
          <input type="date" />
        </div>
      </fieldset>
      <fieldset>
        <legend>User address</legend>
        <div>
          <label>Logradouro:</label>
          <input type="text" placeholder="St, Ave, Trav.." />
        </div>
        <div>
          <label>Number:</label>
          <input type="number" />
        </div>
        <div>
          <label>State:</label>
          <select>{/* options here*/}</select> 
        </div>
        <div>
          <label>City:</label>
          <input type="text" placeholder="Your city name" /> 
        </div>
      </fieldset>
      <fieldset>
        <legend>User message</legend>
        {/*Slider here*/}
        <div>
            <label>Message</label>
            <textarea placeholder="Your message" />
        </div>
      </fieldset>
      <fieldset>
        <legend>I wanna a Google Glass</legend>
        <div>
          <label>Color</label>
          <select>
            <option value="#f00" >Red</option>
            <option value="#00f" >Blue</option>
            <option value="#0f0" >Green</option>
            <option value="#fbff05" >Yellow</option>
            <option value="#f00" >Ros&eacute;</option>
            <option value="#f00" >Silver</option>
            <option value="#f00" >Black Piano</option>
            <option value="#f00" >Pearl white</option>
          </select>
        </div>
        <div>
          <label>Quantity</label>
          <input type="number" name="" id="" />
        </div>
        <div>
          <label>Total price</label>
          <span id="price_total"  />
        </div>
        <div>
          <input type="checkbox" name="" id="" />
          <label>I would apreciate to buy a Google Glass when available</label>
        </div>
      </fieldset>
    </form>
  );
};

export default Form;
