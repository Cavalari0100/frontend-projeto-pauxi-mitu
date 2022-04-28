import React from "react";
import { NavbarBrand, Navbar, NavbarToggler, Collapse, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu } from "reactstrap";

function BarraDeTarefas() {
    return (
        <div>
            <Navbar
                color="success"
                dark
                expand="lg"
                fixed="top"
                full
                light
            >
                <NavbarBrand href="/">
                {/* <img src="assets/logo-pauxi-mitu.png" width='20%' height='30%'></img> */}
                <h2>Intituto Pauxi Mitu</h2>
                </NavbarBrand>
                <NavbarToggler onClick={function noRefCheck() { }} />
                <Collapse navbar>
                    <Nav
                        className="me-auto"
                        navbar
                    >
                        <NavItem>
                            <NavLink href="/cadastronoticia">
                                Cadastar noticia
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/cadastroave">
                                Cadastar passaro
                            </NavLink>
                        </NavItem>
                        <UncontrolledDropdown
                            inNavbar
                            nav
                        >
                            <DropdownToggle
                                caret
                                nav
                            >
                                Opções
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    <NavLink href='/postagem' style={{ color: 'black' }}>
                                        Noticias
                                    </NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink href='/historia' style={{ color: 'black' }}>
                                        Historia
                                    </NavLink>
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    <NavLink href="/login" style={{ color: 'black' }}>
                                        Login
                                    </NavLink>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    {/* <NavbarBrand>
                     <img src="assets/logo-paraiso-das-aves.png" width='60px'></img>
                    </NavbarBrand> */}
                    <Nav>
                        <NavItem>
                            <NavLink href="/paraisodasaves" style={{color:'white'}}>
                                Acessar o Paraiso
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}
export default BarraDeTarefas;