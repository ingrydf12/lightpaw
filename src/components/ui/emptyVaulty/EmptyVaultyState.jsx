import React from "react";

const EmptyVaultyState = ({ children }) => (
  <div
    style={{
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--bg-workspace)",
    }}
  >
    <div style={{ width: 280 }}>
      <h2
        style={{
          margin: "0 0 6px 0",
          fontSize: 16,
          fontWeight: 600,
          color: "var(--bg-txt-prim)",
        }}
      >
        Nenhum arquivo está aberto
      </h2>
      <p
        style={{
          margin: "0 0 20px 0",
          fontSize: 13,
          color: "var(--bg-txt-muted)",
          lineHeight: 1.5,
        }}
      >
        Crie uma nota nova ou abra uma existente para começar a escrever.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {children}
      </div>
    </div>
  </div>
);

export default EmptyVaultyState;