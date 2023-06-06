import MainPage from './pages/MainPage';
import CartPage from './pages/CartPage';
import { CART_ROUTE, MAIN_ROUTE } from './utils/consts';

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: MainPage,
    },
    {
        path: CART_ROUTE,
        Component: CartPage,
    },
];
