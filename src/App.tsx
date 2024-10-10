import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminLayout from './layouts/AdminLayout';
import Dashboard from './pages/Dashboard';
import Table from './components/Table';
import Products from './pages/Products';
import Category from './pages/Category';

const App: React.FC = () => {
  return (
    <Router>
      <AdminLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tables" element={<Table />} />
          <Route path="/articulos/products" element={<Products />} />
          <Route path="/articulos/category" element={<Category />} />
        </Routes>
      </AdminLayout>
    </Router>
  );
};

export default App;