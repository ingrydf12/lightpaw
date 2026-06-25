import React from "react";
import VaultyHeader from "../vaultyHeader/VaultyHeader";
import SidebarTabs from "./components/SidebarTabs";
import { MoreHorizontal } from "lucide-react";


const GenericSidebar = ({ visible }) => {
  if (!visible) return null;
  return (
    <div
      style={{
        width: 260,
        minWidth: 200,
        maxWidth: 400,
        background: "var(--bg-sidebar)",
        borderRight: `1px solid ${"var(--bg-border)"}`,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <VaultyHeader />
      <SidebarTabs />
      <div style={{ flex: 1, overflowY: "auto" }}>
        <div
          style={{
            padding: "24px 16px",
            textAlign: "center",
            color: "var(--bg-txt-fainted)",
            fontSize: 12.5,
            lineHeight: 1.5,
          }}
        >
          Nenhum arquivo ainda.
          <br />
          Crie sua primeira nota para começar.
        </div>
      </div>

      {/* rodapé da sidebar, status do cofre */}
      <div
        style={{
          borderTop: `1px solid ${"var(--bg-border)"}`,
          padding: "8px 10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span style={{ fontSize: 11.5, color: "var(--bg-txt-fainted)" }}>
          0 arquivos
        </span>
        <MoreHorizontal size={14} color={"var(--bg-txt-fainted)"} />
      </div>
    </div>
  );
};

export default GenericSidebar;
