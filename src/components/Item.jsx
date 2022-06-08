import React from 'react'
import {Button, Card} from 'react-bootstrap'

  const Item = ({pasta}) => {

    const {titulo, stock, precio, imagen} = pasta

  return (
    <Card style={{ width: '18rem', margin:20 }}>
  <Card.Img variant="top" src={imagen} />
  <Card.Body>
    <Card.Title>{titulo}</Card.Title>
    <Card.Text>
    stock:{stock}
    <br />
    precio: {precio}
    </Card.Text>
    <Button variant="secundary">Ver detalle</Button>
  </Card.Body>
</Card>
  )
}

export default Item
