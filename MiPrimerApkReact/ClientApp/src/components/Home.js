import React, { Component } from 'react';
import './Home.css';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <body>
      <div>
        <strong><h1 class= "text-center">Bienvenidos a Nuestra aplicacion de Pulsaciones En REACT</h1></strong><br></br>
        
        <img class="image-responsive" src="https://pbs.twimg.com/media/Ei5IJcFXkAAMwUM?format=jpg&name=medium"></img><br></br>
        <br></br>
        <p><strong>El pulso es un movimiento arterial generado por los latidos cardíacos y sirve como medición del mismo. Son los latidos del corazón que genera que las arterias se expandan y contraigan al tiempo que la sangre circula por el organismo. ... Además de medir presión sanguínea, la temperatura y respiración.</strong></p>
        <br></br>
        <br></br>
      </div>
      </body>
    );
  }
}
