import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PerfumeForm from "./Componentes/PerfumeForm";
import ProductList from "./Componentes/ProductList";
import Cart from "./Componentes/Cart"; // Importe o componente Cart
import { getPerfumes } from "./localStorage";
import styled from "styled-components";
import { FaShoppingBag, FaHome, FaPlus } from "react-icons/fa";

const Header = styled.header`
  background: linear-gradient(45deg, #8a2be2, #5d00b3);
  color: white;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 1.8rem;
    font-family: "Arial", sans-serif;
    letter-spacing: 1px;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 20px;

    a {
      color: white;
      text-decoration: none;
      font-weight: bold;
      font-size: 1rem;
      display: flex;
      align-items: center;
      gap: 5px;
      padding: 8px 12px;
      border-radius: 8px;
      transition: background 0.3s ease;

      &:hover {
        background: rgba(255, 255, 255, 0.2);
      }
    }
  }

  .cart-icon {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;

    .icon {
      font-size: 1.5rem;
    }

    .badge {
      background: #ff4081;
      color: white;
      font-size: 0.8rem;
      font-weight: bold;
      border-radius: 50%;
      padding: 5px 10px;
      position: relative;
      top: -5px;
    }
  }
`;

const perfumesData = [
  // Dados dos perfumes aqui
];

const App = () => {
  const [perfumes, setPerfumes] = useState(perfumesData);
  const [editingPerfume, setEditingPerfume] = useState(null);

  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const storedPerfumes = getPerfumes();
    setPerfumes(storedPerfumes);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (perfume) => {
    setCart((prevCart) => [...prevCart, perfume]);
  };

  const toggleCart = () => {
    setIsCartOpen((prevState) => !prevState);
  };

  const handleCheckout = () => {
    alert("Compra finalizada com sucesso!");
    setCart([]);
    setIsCartOpen(false);
  };

  const handleSubmitSuccess = () => {
    const storedPerfumes = getPerfumes();
    setPerfumes(storedPerfumes);
  };

  return (
    <Router>
      <Header>
        <h1>Aroma Style</h1>
        <nav>
          <Link to="/">
            <FaHome /> Home
          </Link>
          <Link to="/cadastrar-perfume">
            <FaPlus /> Cadastrar
          </Link>
          <div className="cart-icon" onClick={toggleCart}>
            <FaShoppingBag className="icon" />
            <span className="badge">{cart.length}</span>
          </div>
        </nav>
      </Header>
      <Routes>
        <Route
          path="/"
          element={<ProductList perfumes={perfumes} addToCart={addToCart} />}
        />
        <Route
          path="/cadastrar-perfume"
          element={
            <PerfumeForm
              onSubmitSuccess={handleSubmitSuccess}
              editingPerfume={editingPerfume}
              setEditingPerfume={setEditingPerfume}
            />
          }
        />
      </Routes>
      {isCartOpen && (
        <Cart cart={cart} onClose={toggleCart} onCheckout={handleCheckout} />
      )}
    </Router>
  );
};

export default App;
