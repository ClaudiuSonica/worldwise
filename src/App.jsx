import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./components/pages/product/Product";
import Pricing from "./components/pages/pricing/Pricing";
import Homepage from "./components/pages/homepage/Homepage";
import PageNotFound from "./components/pages/pageNotFound/PageNotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
