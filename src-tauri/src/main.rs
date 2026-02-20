#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::{Manager, WindowEvent};
use tauri::Emitter;

#[tauri::command]
async fn open_main_app(app: tauri::AppHandle, cofre_nome: String) {
    println!("Abrindo cofre: {}", cofre_nome);
    
    if let Some(splash) = app.get_webview_window("splashscreen") {
        splash.close().unwrap();
    }

    if let Some(main) = app.get_webview_window("main") {
        main.show().unwrap();
        let _ = main.emit("setup-cofre", cofre_nome);
    }
}

fn main() {
    tauri::Builder::default()
        .setup(|app| {
            let splash = app.get_webview_window("splashscreen").unwrap();
            let app_handle = app.handle().clone();

            splash.on_window_event(move |event| {
                if let WindowEvent::Destroyed = event {
                    app_handle.exit(0); 
                }
            });

            Ok(())
        })
        .invoke_handler(tauri::generate_handler![open_main_app])
        .run(tauri::generate_context!())
        .expect("failed to run app");
}