import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

function NavBar() {
	return (
		<div>
			<Navbar bg='light' expand='lg' className='navbar'>
				<Container>
					<Navbar.Brand href='/'>Movie DB</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='me-auto ml-auto'>
							<Nav.Link href='/'>Home</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	)
}

export default NavBar

{
	/* <Navbar bg='light' expand='lg'>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='mr-auto'>
						<Nav.Link href='/'>Home</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar> */
}
