import React from 'react';
import { FiEdit, FiTrash2 } from 'react-icons/fi';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: 'In Stock' | 'Low Stock' | 'Out of Stock';
}

const Products: React.FC = () => {
  const products: Product[] = [
    { id: 1, name: "Laptop", category: "Electronics", price: 999.99, stock: 50, status: "In Stock" },
    { id: 2, name: "Smartphone", category: "Electronics", price: 699.99, stock: 100, status: "In Stock" },
    { id: 3, name: "Headphones", category: "Accessories", price: 149.99, stock: 5, status: "Low Stock" },
    { id: 4, name: "Mouse", category: "Accessories", price: 29.99, stock: 0, status: "Out of Stock" },
    { id: 5, name: "Monitor", category: "Electronics", price: 299.99, stock: 25, status: "In Stock" },
  ];

  return (
    <div className="container px-6 mx-auto">
      <h2 className="my-6 text-2xl font-semibold text-gray-700">Products</h2>
      <div className="w-full overflow-hidden rounded-lg shadow-xs">
        <div className="w-full overflow-x-auto">
          <table className="w-full whitespace-no-wrap">
            <thead>
              <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-gray-50">
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-4 py-3">Stock</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y">
              {products.map((product) => (
                <tr key={product.id} className="text-gray-700">
                  <td className="px-4 py-3">
                    <div className="flex items-center text-sm">
                      <div>
                        <p className="font-semibold">{product.name}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm">{product.category}</td>
                  <td className="px-4 py-3 text-sm">${product.price.toFixed(2)}</td>
                  <td className="px-4 py-3 text-sm">{product.stock}</td>
                  <td className="px-4 py-3 text-xs">
                    <span className={`px-2 py-1 font-semibold leading-tight rounded-full ${
                      product.status === 'In Stock' ? 'text-green-700 bg-green-100' :
                      product.status === 'Low Stock' ? 'text-yellow-700 bg-yellow-100' :
                      'text-red-700 bg-red-100'
                    }`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <div className="flex items-center space-x-4 text-sm">
                      <button className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg focus:outline-none focus:shadow-outline-gray" aria-label="Edit">
                        <FiEdit />
                      </button>
                      <button className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg focus:outline-none focus:shadow-outline-gray" aria-label="Delete">
                        <FiTrash2 />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Products;