import { invoke } from "@tauri-apps/api/core";

class ColetaneaService {
  async listar() {
    try {
      return await invoke("list_cofres");
    } catch (error) {
      console.error("Erro ao listar coletâneas:", error);
      throw error;
    }
  }

  async criar(nome) {
    try {
      await invoke("create_cofre", { nome });
    } catch (error) {
      console.error("Erro ao criar coletânea:", error);
      throw error;
    }
  }

  async abrir(nome) {
    try {
      await invoke("open_main_app", { cofreNome: nome });
    } catch (error) {
      console.error("Erro ao abrir coletânea:", error);
      throw error;
    }
  }

  async deletar(nome) {
    try {
      await invoke("delete_cofre", { nome });
    } catch (error) {
      console.error("Erro ao deletar coletânea:", error);
      throw error;
    }
  }
}

const coletaneaService = new ColetaneaService();
export default coletaneaService;