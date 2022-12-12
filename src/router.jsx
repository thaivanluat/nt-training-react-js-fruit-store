import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";

import Blog from '@/components/pages/Blog'
import Home from '@/components/pages/Home'
import BlogDetail from '@/components/pages/BlogDetail'
import Checkout from '@/components/pages/Checkout'
import Contact from '@/components/pages/Contact'
import Shop from '@/components/pages/Shop'
import ShopDetail from '@/components/pages/ShopDetail'
import ShoppingCart from '@/components/pages/ShoppingCart'

import ErrorPage from '@/components/pages/ErrorPage'

const router = createBrowserRouter([
    {
        path: "/",
        element: < Home / >,
        errorElement: <ErrorPage />,
    },
    {
        path: "/blog",
        element: < Blog / >
    },
    {
        path: "/blog-detail",
        element: < BlogDetail / >
    },
    {
        path: "/checkout",
        element: < Checkout / >
    },
    {
        path: "/contact",
        element: < Contact / >
    },
    {
        path: "/shop",
        element: < Shop / >
    },
    {
        path: "/shop-detail",
        element: < ShopDetail / >
    },
    {
        path: "/shopping-cart",
        element: < ShoppingCart / >
    },
]);

export default router;