import React, { useState } from "react";

// Define la interfaz para los productos
interface Product {
  id: number;
  name: string;
  price: number;
}

// Ejemplo de lista de productos
const initialProducts: Product[] = [
  { id: 1, name: "Producto 1", price: 10 },
  { id: 2, name: "Producto 2", price: 20 },
  { id: 3, name: "Producto 3", price: 30 },
];

const Products: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]); // Estado del carrito

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]); // Agrega el producto al carrito
  };

  return (
    <div className="container">
      <h1>Lista de Productos</h1>
      <div className="row">
        {initialProducts.map((product) => (
          <div className="col-md-4 mb-3" key={product.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Precio: ${product.price}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => addToCart(product)}
                >
                  Agregar al Carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2>Carrito</h2>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Products;
