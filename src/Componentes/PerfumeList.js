import styled from "styled-components";



const PerfumeList = ({ perfumes, onEdit, onDelete }) => {


  
  const ButtonContainer = styled.div`
    display: flex;
    gap: 10px;
    padding: 10px;
  `;

  const Button = styled.button`
    padding: 10px;
    border: none;
    border-radius: 5px;
    color: white;
    background: #8a2be2;
    font-weight: bold;
    cursor: pointer;
    &:hover {
      background: #5d3c8e;
    }
  `;

  const Table = styled.table`
    width: 100%;
    margin-top: 20px;
    border-collapse: collapse;
    th,
    td {
      padding: 10px;
      text-align: left;
      border-bottom: 1px solid #ddd;
    }
    th {
      background-color: #f3f3f3;
      color: #333;
    }
  `;

  return (
    <Table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Marca</th>
          <th>Preço</th>
          <th>Quantidade</th>
          <th>Data de Fabricação</th>
          <th>Data de Validade</th>
          <th>Imagem</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {perfumes.map((perfume) => (
          <tr key={perfume.id}>
            <td>{perfume.nome}</td>
            <td>{perfume.marca}</td>
            <td>{perfume.preco}</td>
            <td>{perfume.quantidade}</td>
            <td>{perfume.dataFabricacao}</td>
            <td>{perfume.dataValidade}</td>
            <td>
              <img src={perfume.imagem} alt={perfume.nome} width="50" />
            </td>
            <td>
              <ButtonContainer>
                <Button onClick={() => onEdit(perfume)}>Editar</Button>
                <Button onClick={() => onDelete(perfume.id)}>Excluir</Button>
              </ButtonContainer>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default PerfumeList;
