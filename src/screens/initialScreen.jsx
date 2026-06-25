import React, { useState } from "react";
import {
  PanelLeft,
  FileText,
  Search,
  Star,
  Clock,
  Settings,
  PlusCircle,
  FilePlus,
  FolderPlus,
  MoreHorizontal,
  ChevronRight,
  ChevronDown,
  Vault,
  Sparkles,
} from "lucide-react";
import GenericSidebar from "../components/ui/sidebar/GenericSidebar";
import EmptyVaultyState from "../components/ui/emptyVaulty/EmptyVaultyState";

const RibbonIcon = ({ icon: Icon, label, active = false }) => (
  <button
    title={label}
    style={{
      width: 28,
      height: 28,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 6,
      border: "none",
      background: active ? "var(--bg-txt-fainted)" : "transparent",
      color: active ? "var(--bg-txt-prim)" : "var(--bg-txt-muted)",
      cursor: "pointer",
    }}
    onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bg-hover)")}
    onMouseLeave={(e) =>
      (e.currentTarget.style.background = active ? "var(--bg-hover)" : "transparent")
    }
  >
    <Icon size={18} strokeWidth={1.6} />
  </button>
);

const Ribbon = ({ onToggleSidebar }) => {
  const topIcons = [
    {
      icon: PanelLeft,
      label: "Mostrar/ocultar painel lateral",
      onClick: onToggleSidebar,
    },
    { icon: FileText, label: "Nova nota" },
    { icon: Search, label: "Buscar no cofre" },
  ];
  const bottomIcons = [
    { icon: Sparkles, label: "Plugins comunitários" },
    { icon: Settings, label: "Configurações" },
  ];

  return (
    <div
      style={{
        width: 44,
        background: "var(--bg-ribbon)",
        borderRight: `1px solid ${"var(--bg-border)"}`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 0",
        userSelect: "none",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        {topIcons.map((item, i) => (
          <RibbonIcon key={i} {...item} />
        ))}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        {bottomIcons.map((item, i) => (
          <RibbonIcon key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

const LandingLightpawScreen = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "var(--bg-workspace)",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, sans-serif",
      }}
    >
      <div style={{ flex: 1, display: "flex", minHeight: 0 }}>
        <Ribbon onToggleSidebar={() => setSidebarVisible((v) => !v)} />
        <GenericSidebar visible={sidebarVisible} />
        <EmptyVaultyState />
      </div>
      {/* Barra de status */}
      <div
        style={{
          height: 22,
          background: "var(--bg-ribbon)",
          borderTop: `1px solid ${"var(--bg-border)"}`,
          display: "flex",
          alignItems: "center",
          gap: 14,
          padding: "0 10px",
          fontSize: 11,
          color: "var(--bg-txt-fainted)",
        }}
      >
        <span>0 palavras</span>
        <span>0 caracteres</span>
      </div>
    </div>
  );
};

export default LandingLightpawScreen;
