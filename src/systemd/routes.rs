use std::ops::Deref;

use crate::{
  api_errors::ApiError,
  systemd::{dbus::manager::OrgFreedesktopSystemd1Manager, dto::{UnitDto, ServiceDto, UnitDetails}},
  AppState,
};
use actix_web::{get, web, HttpResponse, Responder, http::header::ContentType};

#[get("/load-unit/{name}")]
async fn load_unit(
  state: web::Data<AppState<'static>>,
  path: web::Path<String>,
) -> Result<impl Responder, ApiError> {
  let name = path;
  let dbus = state.dbus.lock().unwrap();
  let manager = dbus.systemd_manager();

  let unit_info = manager.load_unit(&name)?;
  let unit_path = unit_info.deref().to_string();
  let unit_proxy = dbus.systemd_unit(&unit_path);
  let mut unit = UnitDto::create_from_proxy(&unit_proxy)?;
  if name.split(".").last().unwrap_or("") == "service" {
    let service_proxy = dbus.systemd_service(&unit_path);
    let service = ServiceDto::create_from_proxy(&service_proxy)?;
    unit.add_details(UnitDetails::Service(service));
  }
  let serialized = serde_json::to_string(&unit).unwrap_or("{}".to_owned());

  Ok(
    HttpResponse::Ok()
      .append_header(ContentType::json())
      .body(serialized)
  )
}
