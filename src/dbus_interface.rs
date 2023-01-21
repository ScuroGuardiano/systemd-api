use super::systemd::manager::OrgFreedesktopSystemd1Manager;
use dbus::blocking::{Connection, Proxy};
use std::{time::Duration, ops::Deref};

pub struct DBusInterface<'a> {
    _connection: Box<Connection>,
    systemd_manager: Proxy<'a, &'a Connection>,
}

// So I can send DBusInterface instance to different threads in a Mutex
unsafe impl Send for DBusInterface<'_> {}

impl DBusInterface<'static> {
    pub fn new<'a>() -> DBusInterface<'a> {
        // Okey, so I keep conn in box, coz box puts it's content in a fixed memory
        // location and won't change it
        let conn = Box::new(Connection::new_system().unwrap());

        // Create proxy will use it's pointer to create proxy which borrows it.
        let systemd_proxy = Self::create_proxy(
            &conn,
            "org.freedesktop.systemd1",
            "/org/freedesktop/systemd1",
            Duration::from_secs(5),
        );
        
        // And I put connection to struct, so it won't get deleted from memory
        // that would lead to my favourite "Segmentation fault (core dumped)"
        return DBusInterface {
            _connection: conn,
            systemd_manager: systemd_proxy,
        };
    }

    pub fn systemd_manager(&self) -> &dyn OrgFreedesktopSystemd1Manager {
        &self.systemd_manager
    }

    fn create_proxy<'a>(
        connection: &Box<Connection>,
        dest: &'a str,
        path: &'a str,
        timeout: Duration,
    ) -> Proxy<'a, &'a Connection> {
        let proxy = unsafe {
            // I can take a pointer to Connection after dereferencing Box
            let conn_ptr: *const Connection = connection.deref();
            // Then I create proxy with it, which borrows connection
            (*conn_ptr).with_proxy(dest, path, timeout)
        };
        return proxy;
    }
}
