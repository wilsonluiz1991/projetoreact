import React from 'react';
import {Routes, Route } from 'react-router-dom';

import HomePage from './views/index';
import Products from './views/produtos';
import Stores from './views/NossaLojas';
import ContactPage from './views/contato';
import NotFound from './views/NotFound';

const MainRoutes = () => {
  return(
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/produtos" element={<Products/>}/>
        <Route path="/nossaslojas" element={<Stores/>}/>
        <Route path="/contato" element ={<ContactPage/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
  )

}
export default MainRoutes;