import React from "react";

const Glass = () => {
  return (
    <>
      <article id="top">
        <header>
          <h2>Click on any detatched area in red</h2>
        </header>
        <img src="images/mao.png" alt="Apointing hand icon" />
      </article>

      <article id="screen">
        <header>
          <h1>Screen</h1>
          <h2>How world will look like</h2>
        </header>
        <p>De acordo com Google , these glasses will have an AMOLED screen.</p>
        <img src="images/det-tela.jpg" alt="Google Glass screen" />
      </article>
      
      <article id="camera">
        <header>
          <h1>Camera</h1>
          <h2>Make videos and photos at any time</h2>
        </header>
        <img src="images/det-camera.jpg" alt="Google Glass camera" />
        <p>With Google Glass is possible to take up to 5 photos with at ost 5megapixels and record videos at 720p.</p>
     </article>

      <article id="sensors">
        <header>
          <h1>Sensors</h1>
          <h2>A simple glass sensibility</h2>
        </header>
        <p>Who think that to handle Google Glass will need a mouse and keyboard, makes a mistake.</p>
        <img src="images/det-touch.jpg" alt="Google Glass sensors" />
      </article>

      <article id="gadgets">
        <header>
          <h1>Battery and Gadgets</h1>
          <h2>Whats the devices that complets Google Glass</h2>
        </header>
        <img src="images/det-bateria.jpg" alt="Google Glass gadgets" />
        <p>Segundo Google itself, Google Glass will have a battery that has sufficent autonomy to last an entire day</p>
     </article>
    </>
  );
};

export default Glass;
