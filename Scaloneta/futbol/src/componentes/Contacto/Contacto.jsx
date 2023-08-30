//hook de react
import { useState } from "react";

// bootstrap
import { Form, Button, Container, Col, Row, Card } from "react-bootstrap";


export function Contacto() {

    const [formulario, setFormulario] = useState({ nombre: '', correo: '', mensaje: '' });

    function enviarInformacion() {
        return (
            alert(JSON.stringify(formulario))
        )

            ;
    }

    return (
        <>
            <div>
                <Container>
                    <Row>
                        <div className='espaciado2'></div>
                        {/* lg='12' */}
                        {/* xxl={8} */}
                        {/* lg="auto" */}
                        <Col lg='6'>
                            <h4>Formulario</h4>
                            <div className='subrayado'></div>
                            <div className='espaciado'></div>
                            <Form onSubmit={enviarInformacion}>
                                <Form.Group className="mb-3" controlId="formBasicNombre">
                                    <Form.Label>Nombre y Apellido</Form.Label>
                                    <Form.Control type="text" onChange={(e) => setFormulario({ ...formulario, nombre: e.target.value })} />
                                    <Form.Text className="text-muted">
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Direccion de email</Form.Label>
                                    <Form.Control type="email" placeholder="hola@email.com" onChange={(e) => setFormulario({ ...formulario, correo: e.target.value })} />
                                    <Form.Text className="text-muted">
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicMensaje">
                                    <Form.Label>Mensaje</Form.Label>
                                    <Form.Control as="textarea" rows={5} onChange={(e) => setFormulario({ ...formulario, mensaje: e.target.value })} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Enviar
                                </Button>
                            </Form>

                        </Col>
                        <Col>
                            <h4>Contacto</h4>
                            <div className='subrayado'></div>
                            <div className='espaciado'></div>

                            <Card className="contacto">
                                <Card.Img variant="top" src="https://soydelrojo.com/wp-content/uploads/2020/06/afa.jpg" className="oscurecer-img" />
                                <Card.Body>
                                    <Card.Title> Localidad y contacto</Card.Title>
                                    <div className='subrayado'></div>
                                    <Card.Text>
                                        Sede Social: Viamonte 1366, (C1053ACB)
                                        Ciudad Autónoma de Buenos Aires
                                        Teléfono: + 54 11 4370-7900
                                    </Card.Text>
                                    <div className='subrayado'></div>
                                    <Card.Text>
                                        Predio de Ezeiza: Autopista Ricchieri y
                                        Enrique Fernández Garcia, (1802), Ezeiza, Provincia de Buenos Aires
                                        Teléfono: + 54 4480-9393
                                    </Card.Text>

                                </Card.Body>
                            </Card>

                        </Col>
                        <div className='espaciado'></div>
                    </Row>
                </Container>
            </div>
        </>
    )

}