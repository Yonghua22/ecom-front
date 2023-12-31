import { Row, Col } from 'react-bootstrap';
import products from '../products';
import Product from '../components/Product';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomeScreen = () => {
    return(
        <>
        <Header />
        <div> Latest Products </div>
        <Row>
            {products.map((product)=> (
                <Col key= {product._id} sm = {12} md = {6} lg = {4} xl = {3}>
                    <Product product = {product}/>
                </Col>
            ))}
        </Row>
        <Footer />
        </>
        
    );
};
export default HomeScreen