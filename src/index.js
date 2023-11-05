import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import './index.css';
import App from './App';
import Shop from "./Shop";
import Product from "./components/ShopItem/ShopItem";
import ProductList from "./ProductList";
import Cart from "./Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/shop/classic-brew",
    element: <Product id={ProductList[0].id} img={ProductList[0].img} name={ProductList[0].name} price={ProductList[0].price} description={ProductList[0].description} priceNumber={ProductList[0].priceNumber} />
  },
  {
    path: "/shop/vanilla-dream",
    element: <Product id={ProductList[1].id} img={ProductList[1].img} name={ProductList[1].name} price={ProductList[1].price} description={ProductList[1].description} priceNumber={ProductList[1].priceNumber} />
  },
  {
    path: "/shop/caramel-delight",
    element: <Product id={ProductList[2].id} img={ProductList[2].img} name={ProductList[2].name} price={ProductList[2].price} description={ProductList[2].description} priceNumber={ProductList[2].priceNumber}/>
  },
  {
    path: "/shop/hazelnut-heaven",
    element: <Product id={ProductList[3].id} img={ProductList[3].img} name={ProductList[3].name} price={ProductList[3].price} description={ProductList[3].description} priceNumber={ProductList[3].priceNumber}/>
  },
  {
    path: "/shop/irish-cream",
    element: <Product id={ProductList[4].id} img={ProductList[4].img} name={ProductList[4].name} price={ProductList[4].price} description={ProductList[4].description} priceNumber={ProductList[4].priceNumber}/>
  },
  {
    path: "/shop/coconut-bliss",
    element: <Product id={ProductList[5].id} w="100" img={ProductList[5].img} name={ProductList[5].name} price={ProductList[5].price} description={ProductList[5].description} priceNumber={ProductList[5].priceNumber}/>
  },
  {
    path: "/shop/cinamon-swirl",
    element: <Product id={ProductList[6].id} img={ProductList[6].img} name={ProductList[6].name} price={ProductList[6].price} description={ProductList[6].description} priceNumber={ProductList[6].priceNumber}/>
  },
  {
    path: "/shop/peppermint-perfection",
    element: <Product id={ProductList[7].id} img={ProductList[7].img} name={ProductList[7].name} price={ProductList[7].price} description={ProductList[7].description} priceNumber={ProductList[7].priceNumber}/>
  },
  {
    path: "/shop/toffee-temptation",
    element: <Product id={ProductList[8].id} img={ProductList[8].img} name={ProductList[8].name} price={ProductList[8].price} description={ProductList[8].description} priceNumber={ProductList[8].priceNumber}/>
  },
  {
    path: "/shop/pumpkin-spice",
    element: <Product id={ProductList[9].id} w="100" img={ProductList[9].img} name={ProductList[9].name} price={ProductList[9].price} description={ProductList[9].description} priceNumber={ProductList[9].priceNumber}/>
  },
  {
    path: "/shop/almond-joy",
    element: <Product id={ProductList[10].id} img={ProductList[10].img} name={ProductList[10].name} price={ProductList[10].price} description={ProductList[10].description} priceNumber={ProductList[10].priceNumber}/>
  },
  {
    path: "/shop/maple-pecan",
    element: <Product id={ProductList[11].id} img={ProductList[11].img} name={ProductList[11].name} price={ProductList[11].price} description={ProductList[11].description} priceNumber={ProductList[11].priceNumber}/>
  },
  {
    path: "/shop/butterscotch-brew",
    element: <Product id={ProductList[12].id} w="100" img={ProductList[12].img} name={ProductList[12].name} price={ProductList[12].price} description={ProductList[12].description} priceNumber={ProductList[12].priceNumber}/>
  },
  {
    path: "/shop/salted-caramel",
    element: <Product id={ProductList[13].id} img={ProductList[13].img} name={ProductList[13].name} price={ProductList[13].price} description={ProductList[13].description} priceNumber={ProductList[13].priceNumber}/>
  },
  {
    path: "/cart",
    element: <Cart />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
       <RouterProvider router={router} />
     </PersistGate>
    </Provider>
  </React.StrictMode>
);
