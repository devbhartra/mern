// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";

function CreateProduct() {
    return (
        <Container>
            <h1>Create Product</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter product name" />
                    <Form.Text className="text-muted">
                        Enter the name of the product.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formCost">
                    <Form.Label>Cost</Form.Label>
                    <Form.Control type="number" placeholder="Enter the cost" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Enter the description" rows = {3}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default CreateProduct;
