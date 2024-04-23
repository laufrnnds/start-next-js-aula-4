import DefaultLayout from "@/layout/default";
import ListProducts from "../../components/products/list-products";
import Dialog from "../../components/dialog";
import { useState } from "react";
import Table from "../../components/table";

export default function Products() {
  const list = [
    { id: 1, name: "Lápis", category: "1" },
    { id: 2, name: "Caneta", category: "1" },
    { id: 3, name: "Borracha", category: "1" },
    { id: 4, name: "Caderno", category: "2" },
    { id: 5, name: "Agenda", category: "2" },
  ];
  const columns = [
    { key: "id", label: "Cód" },
    { key: "name", label: "Nome" },
    { key: "description", label: "Descrição" },
    { key: "price", label: "Preço" },
    { key: "category", label: "Categoria" },
  ];
  const data = [
    {
      id: 1,
      name: "Lápis",
      price: "2.00",
      description: "descrição do lápis",
      category: "1",
    },
    {
      id: 2,
      name: "Caneta",
      price: "1.00",
      description: "descrição da caneta",
      category: "1",
    },
    {
      id: 3,
      name: "Borracha",
      description: "descrição da borracha",
      category: "1",
    },
    {
      id: 4,
      name: "Caderno",
      price: "12.00",
      description: "descrição do caderno",
      category: "2",
    },
    {
      id: 5,
      name: "Agenda",
      price: "15.00",
      description: "descrição da agenda",
      category: "2",
    },
  ];

  const [showModal, setShowModal] = useState<boolean>(false);
  const closeModal = () => {
    setShowModal(false);
  };
  const confirmModal = () => {
    console.log("Fechou");
    closeModal();
  };
  return (
    <div>
      <h1>Produtos</h1>
      <button onClick={() => setShowModal(!showModal)}>Abrir Modal</button>
      <Dialog
        open={showModal}
        actionClose={closeModal}
        title="Meu componente genérico"
        content="Este foi nosso primeiro componente genérico"
        actionConfirm={confirmModal}
      />
      <div>
        <ListProducts products={list} />
        <Table columns={columns} data={data} />
      </div>
    </div>
  );
}

Products.getLayout = DefaultLayout;
