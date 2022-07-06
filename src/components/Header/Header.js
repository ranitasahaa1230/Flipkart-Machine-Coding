import React from 'react'
import {Container,Navbar,Form,Nav,Button} from 'react-bootstrap';
import { useProducts } from '../../contexts/product-context';

export const Header = () => {
  const {productState:{searchQuery},productDispatch}=useProducts();

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/">Flipkart App</Navbar.Brand>
        <Navbar.Collapse id="navbarScroll">
           <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            {/* <Nav.Link href="#action2">Cart</Nav.Link> */}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchQuery}
              onChange={(e)=>productDispatch({type:'SEARCH_PRODUCTS',payload:e.target.value})}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

