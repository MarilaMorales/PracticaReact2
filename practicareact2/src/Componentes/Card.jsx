import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import cardImage from "../IMG/cardImage.png"


function Card2() {
  return (
    <div className="CardContainer">
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={cardImage} />
        <Card.Body>
            <Card.Title>frases</Card.Title>
            <Card.Text>
            La vida no es siempre una cuestión de tener buenas cartas, sino, 
            a veces, de jugar bien una mala mano
            
            </Card.Text>
            <Button variant="primary">Ir</Button>
        </Card.Body>
        </Card>
    </div>    
    );
}

export default Card2;