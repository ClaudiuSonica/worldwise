import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CitiesProvider } from "./contexts/CitiesContext";

import Product from "./components/pages/product/Product";
import Pricing from "./components/pages/pricing/Pricing";
import Homepage from "./components/pages/homepage/Homepage";
import PageNotFound from "./components/pages/pageNotFound/PageNotFound";
import AppLayout from "./components/pages/appLayout/AppLayout";
import Login from "./components/pages/login/Login";
import CityList from "./components/molecules/cityList/CityList";
import CountriesList from "./components/molecules/countriesList/CountriesList";
import City from "./components/molecules/city/City";
import Form from "./components/organisms/form/Form";

const App = () => {
  return (
    <CitiesProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<AppLayout />}>
            <Route index element={<Navigate replace to="cities" />} />
            <Route path="cities" element={<CityList />} />
            <Route path="cities/:id" element={<City />} />
            <Route path="countries" element={<CountriesList />} />
            <Route path="form" element={<Form />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </CitiesProvider>
  );
};

export default App;
