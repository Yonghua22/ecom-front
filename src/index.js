import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/bootstrap.custom.css';
import './assets/styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
// import {
//   createBrowserRouter,
//   createRoutessFromElements,
//   Route,
//   RouterProvider,
// } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from 'react-router-dom';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
    <Route index={true} path='/' element={<HomeScreen />} />
    <Route path='/product/:id' element={<ProductScreen />} />
    </Route>
  )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
