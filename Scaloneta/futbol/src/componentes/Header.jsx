// importacion de bootstrap >> tuve que realizar esta importacion porque si no, no funcionaba bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// ---------------------------------------------
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// importacion de componentes
import { Contacto } from './Contacto/Contacto';
import { Inicio } from './Inicio/Home';
import { Institucion } from './Institucional/Intitucional';

// router
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

// iconos: de esta manera si funciona
import iconHome from '../icons/iconHome.png';
import iconData from '../icons/iconData.png'
import iconContact from '../icons/iconContact.png';

// no me funciona de esta forma no se porque
// import iconUsuario from './src/icons/iconUsuario.png';

export function Header() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <BrowserRouter>
            <Navbar collapseOnSelect expand='md' id='barra' className={scrolled ? 'navbar-scrolled' : ''}>
                <Container>
                    <Navbar.Brand href='/' className='colorLink'> SCALONETA </Navbar.Brand>
                    <Navbar.Toggle aria-controls='x' className='hamburger' />
                    <Navbar.Collapse>
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to='/Inicio' className='colorLink'>
                                <img src={iconHome} alt="Home" />
                                Home
                            </Nav.Link>

                            <Nav.Link as={Link} to='/institucional' className='colorLink'>
                                <img src={iconData} alt="Institucional" />
                                Institucional</Nav.Link>
                            <Nav.Link as={Link} to='/contacto' className='colorLink'>
                                <img src={iconContact} alt='contacto' />
                                Contacto</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div>
                <Routes>
                    <Route path='/' element={<Inicio/>}/>
                    <Route path='/Inicio' element={<Inicio />} />
                    <Route path='/Institucional' element={<Institucion />} />
                    <Route path='/Contacto' element={<Contacto />} />
                </Routes>
            </div>

        </BrowserRouter>

    );
}
