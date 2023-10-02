import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./components/pages/product/Product";
import Pricing from "./components/pages/pricing/Pricing";
import Homepage from "./components/pages/homepage/Homepage";
import PageNotFound from "./components/pages/pageNotFound/PageNotFound";
import AppLayout from "./components/pages/appLayout/AppLayout";
import Login from "./components/pages/login/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<AppLayout />}>
          <Route index element={<p>List of cities</p>} />
          <Route path="cities" element={<p>List of cities</p>} />
          <Route path="countries" element={<p>List of countries</p>} />
          <Route path="form" element={<p>Form</p>} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;