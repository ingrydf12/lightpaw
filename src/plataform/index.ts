export type Platform = "web" | "desktop";

export const isDesktop =
  typeof window !== "undefined" && "__TAURI__" in window;

export const platform: Platform = isDesktop ? "desktop" : "web";

/* NOTE: Esse aqui é o começo da implementação pra suporte web/desktop:
O problema aqui vai ser sobre o salvamento dos arquivos: o web pode ser feito o download para o PC e salvo no localstorage; 
desktop vai usar o salvamento automático e usando o Tauri. */