use tauri::{AppHandle, Manager, Emitter, PhysicalSize};

#[tauri::command]
pub fn open_main_app(app: AppHandle, cofre_nome: String) -> Result<(), String> {
    println!("Abrindo: {}", cofre_nome);

    let main = app
        .get_webview_window("main")
        .ok_or_else(|| "janela 'main' não encontrada".to_string())?;

    main.set_size(PhysicalSize::new(1200, 800))
        .map_err(|e| e.to_string())?;

    main.emit("navigate", "landing").map_err(|e| e.to_string())?;

    main.show().map_err(|e| e.to_string())?;
    main.set_focus().map_err(|e| e.to_string())?;

    if let Some(splash) = app.get_webview_window("splashscreen") {
        splash.close().map_err(|e| e.to_string())?;
    }

    Ok(())
}