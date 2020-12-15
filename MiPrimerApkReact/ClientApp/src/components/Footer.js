import React, { Component } from 'react';
import {  footer } from 'react-bootstrap';
import './Footer.css';


export class Footer extends Component {
  static displayName = Footer.name;

  render () {
    return (
       
      <footer>
      <div class="container style-font">
        <div class="row ">
            <div class="col-md-3">
                <h1>
                    Mas Sobre la App:
                </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores harum officiis officia aspernatur. Quos distinctio assumenda animi in cumque laborum fugit illum repellat vel saepe. Reiciendis incidunt repudiandae dolore sunt.</p>
            </div>
            <div class="col-md-5 center">
                <h1 >
                    Redes Sociales:
                </h1>
                <a class="icon" href="https://www.facebook.com/" > 
                    <img src="https://pbs.twimg.com/media/EpNZDs1W4AE_hMy?format=png&name=small" alt="ico"/> Siguenos En facebook
                </a><br></br>
                <a class="icon" href="https://www.instagram.com/?hl=es-la" > 
                    <img src="https://pbs.twimg.com/media/EpNZIa_XcAANsJ4?format=png&name=small" alt="ico"/> Siguenos En instagram
                </a><br></br>
                <a class="icon" href="https://www.youtube.com/" > 
                    <img src="https://pbs.twimg.com/media/EpNZNStXEAMqg3S?format=png&name=small" alt="ico"/> Siguenos En You Tube
                </a><br></br>
            </div>
            <div class="col-md-4 center">
                <h1>
                    Contacto:
                </h1>
                <ul>
                    <li>Correo: johandrith@unicesar.edu.co</li>
                    <li>Correo: luarocha97@gmail.com</li>
                    <li>Telefono: 12344533224</li>
                    <li>Celular:  3014351494</li>
                    <li>Valledupar/Cesar 2020 </li>
                </ul>
            </div>
        </div>
    </div>
    </footer>
        
      
    );
  }
}