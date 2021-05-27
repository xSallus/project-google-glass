import React from "react";

const Form = () => {
  return (
    <form method="#" id="" >
      <fieldset>
        <legend>User identity</legend>
        <div>
          <label>Name:</label>
          <input name="" id="" type="text" placeholder="Your name" />
        </div>
        <div>
          <label>Passphrase:</label>
          <input name="" id="" type="password" />
        </div>
        <div>
          <label>Email:</label>
          <input name="" id="" type="email" />
        </div>
        <fieldset>
          <legend>Gender</legend>
          <radio name="" id="" value="male">Male</radio>
          <radio name="" id="" value="female">Female</radio>
        </fieldset>
        <div>
          <label>Birthday:</label>
          <input name="" id="" type="date" />
        </div>
      </fieldset>
      <fieldset>
        <legend>User address</legend>
        <div>
          <label>Logradouro:</label>
          <input name="" id="" type="text" placeholder="St, Ave, Trav.." />
        </div>
        <div>
          <label>Number:</label>
          <input name="" id="" type="number" />
        </div>
        <div>
          <label>State:</label>
          <select name="" id="">{/* options here*/}</select> 
        </div>
        <div>
          <label>City:</label>
          <input name="" id="" type="text" placeholder="Your city name" /> 
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
          <select name="" id="" >
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
