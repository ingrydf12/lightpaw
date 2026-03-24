use tauri::{Manager, WindowEvent};
use tauri::Emitter;

#[tauri::command]
async fn open_main_app(app: tauri::AppHandle, note_collection: String) {    
    if let Some(splash) = app.get_webview_window("splashscreen") {
        splash.close().unwrap();
    }

    if let Some(main) = app.get_webview_window("main") {
        main.show().unwrap();
        let _ = main.emit("open_collection", note_collection);
    }
}