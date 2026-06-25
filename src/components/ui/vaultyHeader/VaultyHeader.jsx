import React from "react";
import { ChevronDown, Vault } from "lucide-react";

const VaultyHeader = ({ vaultName = "Meu cofre" }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: 6,
      padding: "8px 10px",
      cursor: "pointer",
    }}
  >
    <ChevronDown size={13} color="var(--bg-txt-fainted)" />
    <Vault size={14} color="var(--bg-txt-muted)" strokeWidth={1.6} />
    <span
      style={{
        fontSize: 13,
        fontWeight: 600,
        color: "var(--bg-txt-prim)",
      }}
    >
      {vaultName}
    </span>
  </div>
);

export default VaultyHeader;