import React from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
`;

const ModalButton = styled.button`
  background: #8a2be2;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background: #5d3c8e;
  }

  &.cancel-button {
    margin-left: 10px;
  }
`;

const Modal = ({ onClose, onConfirm, perfume }) => {
  return (
    <ModalOverlay>
      <ModalContent>
        <h2>Adicionar ao Carrinho</h2>
        <p>Você deseja adicionar {perfume.nome} ao carrinho?</p>
        <ModalButton onClick={onConfirm}>Confirmar</ModalButton>
        <ModalButton className="cancel-button" onClick={onClose}>Cancelar</ModalButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
