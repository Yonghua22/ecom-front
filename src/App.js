import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import React from 'react';
import { Outlet } from 'react-router-dom';
const App = () => {
  return (
    <>
      {/* <ToastContainer /> */}
      <Header />
      <main className='py-3'>
        <Container>
          <Outlet />
         
        </Container>
      </main>
      <Footer />
    </>
  );
  
};

export default App;
// import {addBlankLine} from './addBlankLine';


// // Import React
// const React = require('react');
// const { Container, Row, Col, Carousel, Card } = require('react-bootstrap');

// // Assume that 'products' is an array of product objects
// const products = require('./sources/product.json');

// // Define App component using React.createElement

// const App = () => {
//   // addBlankLine();
//   return React.createElement(Container, null,
//     React.createElement(Carousel, { pause: 'hover', className: 'bg-dark' },
//       // Carousel items would be mapped from a data source here

//       React.createElement(Carousel.Item, null,
//         React.createElement('img', {
//           src: '',
//           alt: 'First slide',
//           className: 'd-block w-100'
//         }),
//         React.createElement(Carousel.Caption, { className: 'carousel-caption' },
//           React.createElement('h2', null, 'Logitech G-Series Gaming Mouse ($39.99)')
//         )
//       )
//       // More Carousel.Items
//     ),
//     React.createElement('h1', null, 'Latest Products'),
//     React.createElement(Row, null,
//       products.map(product => React.createElement(Col, {
//           key: product._id,
//           sm: 12,
//           md: 6,
//           lg: 4,
//           xl: 3
//         },
//         React.createElement(Card, { className: 'my-3 p-3 rounded' },
//           React.createElement('a', { href: '/' },
//             React.createElement(Card.Img, { src: product.image, variant: 'top' })
//           ),
//           React.createElement(Card.Body, null,
//             React.createElement('a', { href: `/product/${product._id}` },
//               React.createElement(Card.Title, { as: 'div' },
//                 React.createElement('strong', null, product.name)
//               )
//             ),
//             React.createElement(Card.Text, { as: 'div' },
//               // Rating component
//             ),
//             React.createElement(Card.Text, { as: 'h3' }, `$${product.price}`)
//           )
//         )
//       ))
//     )
//   );
// };

// Export the component
// module.exports = App;
