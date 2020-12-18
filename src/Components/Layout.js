import React, {useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import {Link} from 'react-router-dom';
import './Layout.css'

export default function Layout({setQuery, children }) {

    const [inputText, setInputText] = useState('');

    const onChangeHandler = (e) => {
        setInputText(e.target.value);
    }
  
    const onClickHandler = (e) => {
  
        e.preventDefault();
        setQuery(inputText);
        
    }

    return (
        <div>
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Tham Nem's Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link>Home</Nav.Link>

                    <NavDropdown title="Recettes" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Bananes</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Cookies</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Nems</NavDropdown.Item>
                
                    </NavDropdown>
                </Nav>

            <Form inline>

                <FormControl
                    onChange={onChangeHandler}
                    value={inputText}
                    type="text" 
                    placeholder="Search" 
                    className="mr-sm-2" />

                <Button
                    variant="outline-success"
                    onClick={onClickHandler} 
                >Search</Button>

                </Form>
                </Navbar.Collapse>
            </Navbar>
            <div className="cardContainer" style={{ background: 'green' }}>
                {children}
            </div>
            <footer>
                <div style={{ color: 'white' }}>Copyright-2020.Tham Nem's Shop</div>
            </footer>
        </div>
    )
}
