use std::ops::Deref;

use crate::{api_errors::ApiError, AppState};
use actix_web::{get, web, HttpResponse, Responder};

#[get("/load-unit/{name}")]
async fn load_unit(
  state: web::Data<AppState<'static>>,
  path: web::Path<String>,
) -> Result<impl Responder, ApiError> {
  let name = path;
  let lock = state.dbus.lock().unwrap();
  let manager = lock.systemd_manager();

  let unit = manager.load_unit(&name)?;
  let unit_path = unit.deref().to_string();
  Ok(
    HttpResponse::Ok()
      .content_type("text/plain")
      .body(unit_path),
  )
}
