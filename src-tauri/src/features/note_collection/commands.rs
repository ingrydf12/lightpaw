use tauri::{AppHandle, Manager};

#[tauri::command]
pub fn open_main_app(app: AppHandle, cofre_nome: String) {
    println!("Abrindo: {}", cofre_nome);

    if let Some(main) = app.get_webview_window("main") {
        main.show().unwrap();
    }

    if let Some(splash) = app.get_webview_window("splashscreen") {
        splash.close().unwrap();
    }
}