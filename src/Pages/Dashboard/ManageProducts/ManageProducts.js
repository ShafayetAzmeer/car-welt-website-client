import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const ManageProducts = () => {
    const [manageProducts, setManageProducts] = useState([]);
    const [controlDelete, setControlDelete] = useState(false);

    useEffect(()=> {
        fetch('https://fierce-lake-25951.herokuapp.com/manageProducts')
            .then(res => res.json())
            .then(data => setManageProducts(data));
      }, [controlDelete])  

      const handleDeleteManageProduct = (id) => {
        const proceed = window.confirm('Are you sure, you want to remove the product ?');
        if(proceed){
            fetch(`https://fierce-lake-25951.herokuapp.com/deleteManageProducts/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
                alert('Product has removed successfully.');
                setControlDelete(!controlDelete);
            }
          });
        }
      };


    return (
        <Container>
            <div className="Container Fluid">
                <h2 className="fs-1 fw-bold text-primary mt-5 mb-5">Manage Products</h2>
                <Row xs={1} md={2} className="g-4 gs-4">
                    {
                        manageProducts.map(manageProduct =>(

                        <Col>
                            <Card>
                                <Card.Img variant="top" className="h-50" src={manageProduct?.image} />
                                    <Card.Body>
                                    <Card.Title className="fs-3 fw-bold pb-2">{manageProduct?.name}</Card.Title>
                                    <Card.Text>
                                        <p className="fs-5"> {manageProduct?.description}</p>
                                        <h4 className="text-success mb-3"> Price : ${manageProduct?.price}</h4>
                                    <div className="d-flex align-items-center justify-content-evenly mb-3">

                                    {/* <input
                                        onChange={handleStatus}
                                        type="text"
                                        defaultValue={manageAllOrder?.status}
                                    /> */}

                                        <button
                                            onClick={() => handleDeleteManageProduct(manageProduct?._id)}
                                            className="btn btn-danger"
                                        >
                                            Remove Product
                                        </button>

                                        {/* <button onClick={() => handleUpdate(manageAllOrder?._id)}
                                        className="btn btn-success"
                                        >
                                            Update
                                        </button> */}
                                    </div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        )  

                       )
                    }
                </Row> 
            </div>
        </Container>
    );
};

export default ManageProducts;