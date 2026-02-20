import LiquidEther from "./third-party/liquidEther";
import { invoke } from "@tauri-apps/api/core";

// Passagem direta do invoke já que é exclusivo do desktop
const WelcomeScreen = () => {
  const selecionarColetanea = async (nome) => {
    await invoke("open_main_app", { cofreNome: nome });
  };

  const criarColetanea = async () => {
    // TODO: Chamar o componente de INPUT do COFRE (create)
    const nome = prompt("Digite o nome do novo cofre:");
    if (nome && nome.trim() !== "") {
      await invoke("open_main_app", { cofreNome: nome.trim() });
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
          color0="#ff2756"
          color1="#26c0d4"
          color2="#F0E6EF"
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
          {/* <button onClick={() => selecionarColetanea("Pessoal")}>
            Cofre Pessoal
          </button>
          <button onClick={() => selecionarColetanea("Trabalho")}>
            Cofre Trabalho
          </button> */}
          <hr className="divider" />
          <button className="btn-new" onClick={criarColetanea}>
            + Criar nova coletânea
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
