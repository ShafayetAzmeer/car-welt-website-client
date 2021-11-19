import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);

      useEffect(()=> {
        fetch("http://localhost:7000/products")
            .then(res => res.json())
            .then(data => setProducts(data));
      }, []) 

    return (
        <Container id="products">
            <div className="Container Fluid">
                <h2 className="fs-1 fw-bold text-primary mt-5 mb-5">Our Products</h2>
                <Row xs={1} md={3} className="g-4 gs-4">
                    {
                        products.map(product => <Product
                        // key={product._id}
                        products = {product}
                        ></Product> )
                    }
                </Row> 
            </div>
        </Container>
    );
};

export default Products;