import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Landing from '../pages/Landing';
import Categories from '../pages/Categories';
import Items from '../pages/Items';
import Reservation from '../pages/Reservation';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';
import Produits from '../pages/Produits'
import ItemDetail from '../pages/ItemDetail';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Landing />} />
          <Route path="packs" element={<Categories />} />
          <Route path="produits" element={<Produits />} />
          <Route path="item/:id" element={<ItemDetail />} />
          <Route path="items/:categoryId" element={<Items />} />
          <Route path="reservation" element={<Reservation />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
