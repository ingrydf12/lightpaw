import React from "react";
import { PlusCircle } from "lucide-react";
import "./createColetanea.css";

const NewColetaneaComponent = ({
  label = "Criar nova coletânea",
  shortcut = "Ctrl N",
  onClick,
}) => (
  <button className="new-coletanea" onClick={onClick}>
    <span className="new-coletanea__icon">
      <PlusCircle size={16} strokeWidth={1.8} />
    </span>
    <span className="new-coletanea__label">{label}</span>
    {shortcut && <span className="new-coletanea__shortcut">{shortcut}</span>}
  </button>
);

export default NewColetaneaComponent;