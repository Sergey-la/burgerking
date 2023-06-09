import MainPage from './pages/MainPage';
import CartPage from './pages/CartPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

import { CART_ROUTE, MAIN_ROUTE, NOT_FOUND_ROUTE } from './utils/consts';

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: MainPage,
    },
    {
        path: CART_ROUTE,
        Component: CartPage,
    },
    {
        path: NOT_FOUND_ROUTE,
        Component: NotFoundPage,
    },
];
