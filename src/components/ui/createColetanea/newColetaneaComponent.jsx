import React, { useState } from "react";

const NewColetaneaInputComponent = ({ onCreate, onCancel }) => {
  const [nome, setNome] = useState("");

  return (
    <div className="modal">
      <div className="modal-box">
        <h2>Nova Coletânea</h2>

        <input
          type="text"
          placeholder="Nome da coletânea"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <div className="actions">
          <button onClick={onCancel}>Cancelar</button>
          <button
            onClick={() => {
              if (nome.trim() !== "") {
                onCreate(nome.trim());
              }
            }}
          >
            Criar
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewColetaneaInputComponent;