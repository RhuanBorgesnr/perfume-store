import styled from "styled-components";



const PerfumeList = ({ perfumes, onEdit, onDelete }) => {


  const perfumesData = [
    {
      id: 1,
      nome: "Aqua di Gio",
      marca: "Giorgio Armani",
      preco: "R$ 420,00",
      quantidade: 50,
      dataFabricacao: "2022-03-15",
      dataValidade: "2025-03-15",
      imagem: "https://via.placeholder.com/50",
    },
    {
      id: 2,
      nome: "One Million",
      marca: "Paco Rabanne",
      preco: "R$ 499,00",
      quantidade: 60,
      dataFabricacao: "2022-05-10",
      dataValidade: "2025-05-10",
      imagem: "https://via.placeholder.com/50",
    },
    {
      id: 3,
      nome: "La Vie Est Belle",
      marca: "Lancôme",
      preco: "R$ 550,00",
      quantidade: 45,
      dataFabricacao: "2021-08-20",
      dataValidade: "2024-08-20",
      imagem: "https://via.placeholder.com/50",
    },
    {
      id: 4,
      nome: "Good Girl",
      marca: "Carolina Herrera",
      preco: "R$ 580,00",
      quantidade: 30,
      dataFabricacao: "2022-02-18",
      dataValidade: "2025-02-18",
      imagem: "https://via.placeholder.com/50",
    },
    {
      id: 5,
      nome: "Eros",
      marca: "Versace",
      preco: "R$ 460,00",
      quantidade: 70,
      dataFabricacao: "2023-01-12",
      dataValidade: "2026-01-12",
      imagem: "https://via.placeholder.com/50",
    },
    {
      id: 6,
      nome: "CK One",
      marca: "Calvin Klein",
      preco: "R$ 300,00",
      quantidade: 100,
      dataFabricacao: "2022-11-25",
      dataValidade: "2025-11-25",
      imagem: "https://via.placeholder.com/50",
    },
    {
      id: 7,
      nome: "The One",
      marca: "Dolce & Gabbana",
      preco: "R$ 570,00",
      quantidade: 50,
      dataFabricacao: "2021-04-10",
      dataValidade: "2024-04-10",
      imagem: "https://via.placeholder.com/50",
    },
    {
      id: 8,
      nome: "Sauvage",
      marca: "Dior",
      preco: "R$ 620,00",
      quantidade: 60,
      dataFabricacao: "2022-06-15",
      dataValidade: "2025-06-15",
      imagem: "https://via.placeholder.com/50",
    },
    {
      id: 9,
      nome: "212 VIP",
      marca: "Carolina Herrera",
      preco: "R$ 480,00",
      quantidade: 75,
      dataFabricacao: "2022-08-30",
      dataValidade: "2025-08-30",
      imagem: "https://via.placeholder.com/50",
    },
    {
      id: 10,
      nome: "Black Opium",
      marca: "Yves Saint Laurent",
      preco: "R$ 530,00",
      quantidade: 40,
      dataFabricacao: "2022-09-11",
      dataValidade: "2025-09-11",
      imagem: "https://via.placeholder.com/50",
    },
    // Mais 20 perfumes para completar os 30
    {
      id: 11,
      nome: "Bleu de Chanel",
      marca: "Chanel",
      preco: "R$ 700,00",
      quantidade: 50,
      dataFabricacao: "2023-02-20",
      dataValidade: "2026-02-20",
      imagem: "https://via.placeholder.com/50",
    },
    {
      id: 12,
      nome: "Miss Dior",
      marca: "Dior",
      preco: "R$ 650,00",
      quantidade: 60,
      dataFabricacao: "2021-12-10",
      dataValidade: "2024-12-10",
      imagem: "https://via.placeholder.com/50",
    },
    {
      id: 13,
      nome: "Flowerbomb",
      marca: "Viktor & Rolf",
      preco: "R$ 680,00",
      quantidade: 45,
      dataFabricacao: "2022-03-18",
      dataValidade: "2025-03-18",
      imagem: "https://via.placeholder.com/50",
    },
    {
      id: 14,
      nome: "Guilty",
      marca: "Gucci",
      preco: "R$ 620,00",
      quantidade: 50,
      dataFabricacao: "2021-05-05",
      dataValidade: "2024-05-05",
      imagem: "https://via.placeholder.com/50",
    },
    {
      id: 15,
      nome: "Joy",
      marca: "Dior",
      preco: "R$ 600,00",
      quantidade: 40,
      dataFabricacao: "2023-01-25",
      dataValidade: "2026-01-25",
      imagem: "https://via.placeholder.com/50",
    },
    {
      id: 16,
      nome: "Chance",
      marca: "Chanel",
      preco: "R$ 580,00",
      quantidade: 55,
      dataFabricacao: "2022-07-15",
      dataValidade: "2025-07-15",
      imagem: "https://via.placeholder.com/50",
    },
    {
      id: 17,
      nome: "Alien",
      marca: "Thierry Mugler",
      preco: "R$ 530,00",
      quantidade: 30,
      dataFabricacao: "2021-03-08",
      dataValidade: "2024-03-08",
      imagem: "https://via.placeholder.com/50",
    },
    {
      id: 18,
      nome: "Fahrenheit",
      marca: "Dior",
      preco: "R$ 590,00",
      quantidade: 65,
      dataFabricacao: "2022-12-12",
      dataValidade: "2025-12-12",
      imagem: "https://via.placeholder.com/50",
    },
    {
      id: 19,
      nome: "L'Interdit",
      marca: "Givenchy",
      preco: "R$ 600,00",
      quantidade: 50,
      dataFabricacao: "2021-06-25",
      dataValidade: "2024-06-25",
      imagem: "https://via.placeholder.com/50",
    },
    {
      id: 20,
      nome: "Idôle",
      marca: "Lancôme",
      preco: "R$ 550,00",
      quantidade: 45,
      dataFabricacao: "2022-04-30",
      dataValidade: "2025-04-30",
      imagem: "https://via.placeholder.com/50",
    },
    {
      id: 21,
      nome: "Versace Pour Homme",
      marca: "Versace",
      preco: "R$ 480,00",
      quantidade: 60,
      dataFabricacao: "2023-02-10",
      dataValidade: "2026-02-10",
      imagem: "https://via.placeholder.com/50",
    },
    {
      id: 22,
      nome: "Hugo",
      marca: "Hugo Boss",
      preco: "R$ 520,00",
      quantidade: 70,
      dataFabricacao: "2021-07-14",
      dataValidade: "2024-07-14",
      imagem: "https://via.placeholder.com/50",
    },
    {
      id: 23,
      nome: "Hypnotic Poison",
      marca: "Dior",
      preco: "R$ 590,00",
      quantidade: 40,
      dataFabricacao: "2022-10-05",
      dataValidade: "2025-10-05",
      imagem: "https://via.placeholder.com/50",
    },
    {
      id: 24,
      nome: "Dolce Garden",
      marca: "Dolce & Gabbana",
      preco: "R$ 640,00",
      quantidade: 50,
      dataFabricacao: "2021-01-15",
      dataValidade: "2024-01-15",
      imagem: "https://via.placeholder.com/50",
    },
    {
      id: 25,
      nome: "Olympea",
      marca: "Paco Rabanne",
      preco: "R$ 650,00",
      quantidade: 75,
      dataFabricacao: "2022-11-20",
      dataValidade: "2025-11-20",
      imagem: "https://via.placeholder.com/50",
    },
    {
      id: 26,
      nome: "Acqua di Gioia",
      marca: "Giorgio Armani",
      preco: "R$ 560,00",
      quantidade: 60,
      dataFabricacao: "2022-05-12",
      dataValidade: "2025-05-12",
      imagem: "https://via.placeholder.com/50",
    },
    {
      id: 27,
      nome: "Luna",
      marca: "Nina Ricci",
      preco: "R$ 480,00",
      quantidade: 50,
      dataFabricacao: "2023-08-15",
      dataValidade: "2026-08-15",
      imagem: "https://via.placeholder.com/50",
    },
    {
      id: 28,
      nome: "Yes I Am",
      marca: "Cacharel",
      preco: "R$ 490,00",
      quantidade: 40,
      dataFabricacao: "2021-10-10",
      dataValidade: "2024-10-10",
      imagem: "https://via.placeholder.com/50",
    },
    {
      id: 29,
      nome: "Light Blue",
      marca: "Dolce & Gabbana",
      preco: "R$ 600,00",
      quantidade: 70,
      dataFabricacao: "2022-03-18",
      dataValidade: "2025-03-18",
      imagem: "https://via.placeholder.com/50",
    },
    {
      id: 30,
      nome: "Mon Guerlain",
      marca: "Guerlain",
      preco: "R$ 650,00",
      quantidade: 45,
      dataFabricacao: "2023-09-05",
      dataValidade: "2026-09-05",
      imagem: "https://via.placeholder.com/50",
    },
  ];
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
