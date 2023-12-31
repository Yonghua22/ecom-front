import products from "../products"
import { useNavigate, useParams } from 'react-router-dom';
import Header from "../components/Header";
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
import {
    Row,
    Col,
    Image,
    ListGroup,
    Card,
    Button,
  } from 'react-bootstrap';

const ProductScreen = () => {
    const { id: productId } = useParams();
    const product = products.find((p) => p._id === productId)

    return(

       <>
        <Header />
       <Link className='btn btn-light my-3' to = '/'>

       </Link>
      
       <Row>
        <Col md = {5}>
            <Image src = {product.image} alt = {product.name} fluid/>
        </Col>
        <Col md = {4}>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <h3>{product.name}</h3>
                </ListGroup.Item>
            

                <ListGroup.Item>
                    <Rating value = {product.rating} text = {`${product.numReviews} reviews`}/>
                </ListGroup.Item>

                <ListGroup.Item>
                   Price: ${product.price}
                </ListGroup.Item>
                
            </ListGroup>
        </Col>
        <Col md = {3}>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <Row>
                        <Col>Price:</Col>
                        <Col>
                            <strong>${product.price}</strong>
                        </Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                        <Col>Status:</Col>
                        <Col>
                            <strong>${product.countInStock > 0? 'In Stock' : 'Out Of Stock'}</strong>
                        </Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Button
                    className = 'btn btn-block'
                    type = 'button'
                    disabled = {product.countInStock === 0}>
                    Add To Cart
                    </Button>
                </ListGroup.Item>
            </ListGroup>

            
        </Col>
       </Row>
       
    </>
    );
};
export default ProductScreen