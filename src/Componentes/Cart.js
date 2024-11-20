import React from "react";
import styled from "styled-components";

const CartContainer = styled.div`
  position: fixed;
  top: 60px;
  right: 20px;
  width: 300px;
  max-height: 80vh;
  background: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
  overflow-y: auto;
  z-index: 1000;
  transition: max-height 0.3s ease;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #8a2be2;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #5d3c8e;
  }
`;

const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h2 {
    margin: 0;
    font-size: 1.2rem;
    color: #333;
  }

  button {
    background: none;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
    color: #8a2be2;

    &:hover {
      color: #5d3c8e;
    }
  }
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  padding: 10px;
  border-bottom: 1px solid #ddd;

  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    margin-right: 15px;
    border-radius: 5px;
  }

  h4 {
    margin: 0;
    font-size: 1rem;
    color: #333;
  }

  p {
    margin: 0;
    font-size: 0.9rem;
    color: #555;
  }
`;

const EmptyCartMessage = styled.p`
  font-size: 1rem;
  color: #555;
  text-align: center;
  margin-top: 50px;
`;

const CheckoutButton = styled.button`
  width: 100%;
  padding: 15px;
  background: #8a2be2;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 20px;
  transition: background 0.3s ease;

  &:hover {
    background: #5d3c8e;
  }
`;

const Cart = ({ cart, onClose, onCheckout }) => {
  return (
    <CartContainer style={{ maxHeight: cart.length > 3 ? '80vh' : 'auto' }}>
      <CartHeader>
        <h2>Carrinho</h2>
        <button onClick={onClose}>&times;</button>
      </CartHeader>
      {cart.length === 0 ? (
        <EmptyCartMessage>Seu carrinho está vazio.</EmptyCartMessage>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem key={item.id}>
              <img src={item.imagem} alt={item.nome} />
              <div>
                <h4>{item.nome}</h4>
                <p>{item.preco}</p>
              </div>
            </CartItem>
          ))}
          <CheckoutButton onClick={onCheckout}>Finalizar Compra</CheckoutButton>
        </>
      )}
    </CartContainer>
  );
};

export default Cart;
