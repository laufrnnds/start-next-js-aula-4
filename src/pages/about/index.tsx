import DefaultLayout from "@/layout/default";
import Dialog from "../../components/dialog";
import { useState } from "react";

export default function About() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const closeModal = () => {
    setShowModal(false);
  };
  const confirmModal = () => {
    console.log("Confirmado");
    closeModal();
  };
  return (
    <>
      <h1>Será que é mesmo, Sobre</h1>;
      <button onClick={() => setShowModal(!showModal)}>Abrir Modal</button>
      <Dialog
        open={showModal}
        actionClose={closeModal}
        title="Aqui é a página de sobre"
        content="Onde estou?"
        labelConfirm="Fechar"
        actionConfirm={confirmModal}
      />
    </>
  );
}

About.getLayout = DefaultLayout;
