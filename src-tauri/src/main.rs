#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::{Manager, WindowEvent};
mod features;
use crate::features::note_collection::commands::open_main_app; 

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