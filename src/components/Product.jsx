import { Card } from "react-bootstrap"
import products from "../products"
import {Link } from 'react-router-dom';

const Product = ({product}) => {
    return(
        <Card className="my-3 p-3 rounded">
            <Link to={`/product/${products._id}`}>
                <Card.Img src={product.image} variant="top" />
            </Link>
        <Card.Body>
            <Link to={`/products/${product._id}`}>
                <Card.Title as="div">
                    <strong>{product.name}</strong>
                    </Card.Title>
                </Link>

                <Card.Text as="h3">
                    ${product.price}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
export default Product