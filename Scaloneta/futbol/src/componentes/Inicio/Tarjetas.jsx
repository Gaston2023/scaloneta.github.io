import React from 'react';

// bootstrap
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export function Tarjeta (props)  {

    const { articulo } = props;

    return (
        
        <div className='container mt-4'>
            <Card className='tarjetaCustom'>
                <Card.Img variant="top" src={articulo.urlToImage} className='imgTarjeta'/>
                <Card.Body className='bodyCustom'>
                    <Card.Title>{articulo.title}</Card.Title>
                    <div className='subrayado'></div>
                    <Card.Text>
                        {articulo.description}
                    </Card.Text>
                    <Button className='verMasNoticias' as='a'
                        href={articulo.url}
                        target='_blank'>Ver Mas
                    </Button>
                </Card.Body>
            </Card>
        </div>
    )
}