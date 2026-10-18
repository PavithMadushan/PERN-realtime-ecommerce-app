import {
  Show,
  SignInButton,
  SignUpButton,
  useAuth,
  UserButton,
} from "@clerk/react";
import PageLoader from "./components/PageLoader";
import Layout from "./components/Layout";
import { Routes, Route, Navigate } from "react-router";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import OrderPage from "./pages/OrderPage";
import CheckoutReturnPage from "./pages/CheckoutReturnPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import { SentryDemoPage } from "./pages/SentryDemoPage";
import OrderDetailPage from "./pages/OrderDetailPage";
import OrderSummeryPage from "./pages/OrderSummeryPage";
import OrderChatPage from "./pages/OrderChatPage";
import OrderVideoPage from "./pages/OrderVideoPage";

function App() {
  const { isLoaded,isSignedIn } = useAuth();

  if (!isLoaded) {
    return <PageLoader />;
  }

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product/:slug" element={<ProductDetailPage />}/>
        <Route path="/orders" element={isSignedIn ? <OrderPage /> : <Navigate  to={"/"} replace/>} />
        <Route path="/checkout/return" element={<CheckoutReturnPage />} />
        <Route path="/demo-sentry" element={<SentryDemoPage/>}/>
        <Route path="/orders/:id/call" element={<OrderVideoPage/>}/>

        {/*NESTED ROUTES*/}
        <Route path="/orders/:id" element={isSignedIn ? <OrderDetailPage/>: <Navigate  to={"/"} replace/>}>
        <Route index element={<OrderSummeryPage/>}/>
        <Route path="chat" element={<OrderChatPage/>}/>
        
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
