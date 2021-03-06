import React, { Component } from 'react';
import Card from './componnents/Card'
import Greatings from './componnents/Greatings';
import Random from './componnents/Random'
import Boxcolor from './componnents/Boxcolor'
import CreditCard from './componnents/CreditCard'
import Raiting from './componnents/Raiting'
import DriveCard from './componnents/DriveCard'
import ClickablePicture from './componnents/ClickablePicture'
import Likes from './componnents/Likes'

class App extends Component {
  render() {
  return (
      <div className="App">
        <h1>IdCard</h1>
        <Card
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14")}
        img="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <h1>IdCard</h1>
        <Card
        lastName='Thompson'
        firstName='Johana'
        gender='female'
        height={165}
        birth={new Date("1993-10-11")}
        img="https://randomuser.me/api/portraits/women/8.jpg"
        />


        <h1>Greetings</h1>
        <Greatings idioma="de"> Ricardo</Greatings>
        <Greatings idioma="fr"> Rish</Greatings>
        <Greatings idioma="en"> Ricardo</Greatings>
        <Greatings idioma="es"> Risha</Greatings>

        <h1>Random</h1>
        <Random min={1} max={6}/>
        <Random min={4} max={100}/>
        <h1>Boxcolor</h1>
        <Boxcolor r={255} g={0} b={0} />
        <Boxcolor r={128} g={255} b={0} />

        <h1>CreditCard</h1>
        <CreditCard
        img="./img/visa.png"
        tipo="Visa"
        expiraMes={3}
        numero={9718}
        expiraAnio = {22}
        banco ="Banco Nacional"
        nombre="Risha"
        bgc="rgb(17, 170, 153)"
        colorFuente ="white"
        />
         <CreditCard
        
        tipo="Mastercard"
        expiraMes={3}
        numero={9718}
        expiraAnio = {22}
        banco ="Banco Nacional"
        nombre="Risha"
        bgc="rgb(180, 80, 100)"
        colorFuente ="white"
        />

        <h1>Raiting</h1>
        <Raiting>1.4</Raiting>
        <Raiting>3</Raiting>
        <Raiting>3.8</Raiting>
        <Raiting>4.55</Raiting>

        <h1>DriveCard</h1>
        <DriveCard 
        name="Travis Kalanick"
        raiting={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: "Toyota Corolla Altis",
          licensePlate: "CO42DE"
        }} />


        <h1>ClickablePicture</h1>
        <h1>ClickablePicture</h1>
        <ClickablePicture
          img="/img/persons/maxence.png"
          imgClicked="/img/persons/maxence-glasses.png" />

          <h1>Like Button</h1>
          <Likes /> 
          <Likes />
      </div>
    )
  }
}

export default App;
