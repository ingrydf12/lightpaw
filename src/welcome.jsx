import { useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import LiquidEther from "./third-party/liquidEther";
import coletaneaService from "./service/coletaneaService";
import NewColetaneaComponent from "./components/ui/createColetanea/newColetaneaComponent";

const WelcomeScreen = () => {
  const [showCreateCollect, setShowCreateCollect] = useState(false);

  const selecionarColetanea = async (nome) => {
    await coletaneaService.abrir(nome);
  };

  const criarColetanea = () => {
    setShowCreateCollect(true);
  };

  const confirmarCriacao = async (nome) => {
    await coletaneaService.criar(nome);
    await coletaneaService.abrir(nome);
    setShowCreateCollect(false);
  };
  
  const handleRedirectLanding = async () => {
    try {
      await invoke("open_main_app", { cofreNome: "" });
    } catch (err) {
      console.error("Falha ao abrir a aplicação:", err);
    }
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        color: "white",
        overflow: "hidden",
        fontFamily: "Figtree",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          backgroundColor: "#0a0a0f",
        }}
      >
        <LiquidEther
          colors={["#ff2756", "#26c0d4", "#F0E6EF"]}
          mouseForce={20}
          cursorSize={100}
          isViscous
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      <main
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          height: "100%",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <aside className="vault-sidebar">
          <h3>Suas coletâneas</h3>

          {/* Exemplo futuro */}
          {/* 
          <button onClick={() => selecionarColetanea("Pessoal")}>
            Cofre Pessoal
          </button>
          */}

          <hr className="divider" />

          <button className="btn-new" onClick={criarColetanea}>
            + Criar nova coletânea
          </button>

          <button className="generic-link" onClick={handleRedirectLanding}>
            Iniciar aplicação sem criar uma nova nota
          </button>
        </aside>

        <section className="hero">
          <img
            src="/logotipo_lightpaw.png"
            alt="Logo"
            style={{ maxWidth: "300px" }}
          />
          <p>Escolha ou crie uma coletânea para começar a criar.</p>
        </section>

        {showCreateCollect && (
          <NewColetaneaComponent
            onCreate={confirmarCriacao}
            onCancel={() => setShowCreateCollect(false)}
          />
        )}
      </main>

      <style>{`
        .divider { border: none; border-top: 1px solid #bbb; }
        .vault-sidebar { background: rgb(5, 5, 5, 0.4); padding: 20px; min-width: 250px; height: 100%; display: flex; flex-direction: column; justify-content: center; }
        .hero { flex: 1; display: flex; flex-direction: column; align-items: left; justify-content: center; gap: 0.4rem; }
        button { padding: 10px; margin: 5px 0; cursor: pointer; border-radius: 4px; border: none; background: #1a1919; color: white; }
        .btn-new { background: #0f4749; font-weight: bold; }
      `}</style>
    </div>
  );
};

export default WelcomeScreen;