import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./modal/Modal";

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const Card = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const ImageContainer = styled.div`
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin-top: 15px;
  }
`;

const Details = styled.div`
  padding: 15px;

  h3 {
    margin: 10px 0;
    font-size: 18px;
    color: #333;
  }

  p {
    color: #555;
    font-size: 14px;
    margin: 5px 0;
  }

  span {
    font-weight: bold;
    color: #8a2be2;
  }
`;

const Button = styled.button`
  background: #8a2be2;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  margin-top: auto;

  &:hover {
    background: #5d3c8e;
  }
`;

const ProductList = ({ perfumes, addToCart }) => {
  const [selectedPerfume, setSelectedPerfume] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleAddToCart = (perfume) => {
    setSelectedPerfume(perfume);
    setShowModal(true);
  };

  const confirmAddToCart = () => {
    addToCart(selectedPerfume);
    setShowModal(false);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPerfume(null);
  };

  return (
    <Container>
      <Grid>
        {perfumes.map((perfume) => (
          <Card key={perfume.id}>
            <ImageContainer>
              <img src={perfume.imagem} alt={perfume.nome} />
            </ImageContainer>
            <Details>
              <h3>{perfume.nome}</h3>
              <p>Marca: {perfume.marca}</p>
              <p>Preço: <span>{perfume.preco}</span></p>
              <Button onClick={() => handleAddToCart(perfume)}>Adicionar ao Carrinho</Button>
            </Details>
          </Card>
        ))}
      </Grid>
      {showModal && (
        <Modal
          onClose={closeModal}
          onConfirm={confirmAddToCart}
          perfume={selectedPerfume}
        />
      )}
    </Container>
  );
};

export default ProductList;
