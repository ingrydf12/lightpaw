import React, { useState } from "react";
import { FileText, Search, Star, Clock, FilePlus, FolderPlus } from "lucide-react";

const SidebarTabs = () => {
  const [active, setActive] = useState("files");
  const tabs = [
    { id: "files", icon: FileText, label: "Arquivos" },
    { id: "search", icon: Search, label: "Busca" },
    { id: "starred", icon: Star, label: "Favoritos" },
    { id: "recent", icon: Clock, label: "Recentes" },
  ];

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        padding: "6px 8px",
        borderBottom: "1px solid var(--bg-border)",
      }}
    >
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = active === tab.id;
        return (
          <button
            key={tab.id}
            title={tab.label}
            onClick={() => setActive(tab.id)}
            style={{
              width: 26,
              height: 26,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 5,
              border: "none",
              background: isActive ? "var(--bg-hover)" : "transparent",
              color: isActive ? "var(--bg-txt-prim)" : "var(--bg-txt-fainted)",
              cursor: "pointer",
            }}
          >
            <Icon size={15} strokeWidth={1.6} />
          </button>
        );
      })}
      <div style={{ flex: 1 }} />
      <button
        title="Nova nota"
        style={{
          width: 26,
          height: 26,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 5,
          border: "none",
          background: "transparent",
          color: "var(--bg-txt-fainted)",
          cursor: "pointer",
        }}
      >
        <FilePlus size={15} strokeWidth={1.6} />
      </button>
      <button
        title="Nova pasta"
        style={{
          width: 26,
          height: 26,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 5,
          border: "none",
          background: "transparent",
          color: "var(--bg-txt-fainted)",
          cursor: "pointer",
        }}
      >
        <FolderPlus size={15} strokeWidth={1.6} />
      </button>
    </div>
  );
};

export default SidebarTabs;