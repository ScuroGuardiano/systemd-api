const props = `pub id: String,
pub names: Vec<String>,
pub following: String,
pub requires: Vec<String>,
pub requisite: Vec<String>,
pub wants: Vec<String>,
pub binds_to: Vec<String>,
pub part_of: Vec<String>,
pub upholds: Vec<String>,
pub required_by: Vec<String>,
pub requisite_of: Vec<String>,
pub wanted_by: Vec<String>,
pub bound_by: Vec<String>,
pub upheld_by: Vec<String>,
pub consists_of: Vec<String>,
pub conflicts: Vec<String>,
pub conflicted_by: Vec<String>,
pub before: Vec<String>,
pub after: Vec<String>,
pub on_success: Vec<String>,
pub on_success_of: Vec<String>,
pub on_failure: Vec<String>,
pub on_failure_of: Vec<String>,
pub triggers: Vec<String>,
pub triggered_by: Vec<String>,
pub propagates_reload_to: Vec<String>,
pub reload_propagated_from: Vec<String>,
pub propagates_stop_to: Vec<String>,
pub stop_propagated_from: Vec<String>,
pub joins_namespace_of: Vec<String>,
pub slice_of: Vec<String>,
pub requires_mounts_for: Vec<String>,
pub documentation: Vec<String>,
pub description: String,
pub access_selinux_context: String,
pub load_state: String,
pub active_state: String,
pub freezer_state: String,
pub sub_state: String,
pub fragment_path: String,
pub source_path: String,
pub drop_in_paths: Vec<String>,
pub unit_file_state: String,
pub unit_file_preset: String,
pub state_change_timestamp: u64,
pub state_change_timestamp_monotonic: u64,
pub inactive_exit_timestamp: u64,
pub inactive_exit_timestamp_monotonic: u64,
pub active_enter_timestamp: u64,
pub active_enter_timestamp_monotonic: u64,
pub active_exit_timestamp: u64,
pub active_exit_timestamp_monotonic: u64,
pub inactive_enter_timestamp: u64,
pub inactive_enter_timestamp_monotonic: u64,
pub can_start: bool,
pub can_stop: bool,
pub can_reload: bool,
pub can_isolate: bool,
pub can_clean: Vec<String>,
pub can_freeze: bool,
pub job: (u32, String),
pub stop_when_unneeded: bool,
pub refuse_manual_start: bool,
pub refuse_manual_stop: bool,
pub allow_isolate: bool,
pub default_dependencies: bool,
pub on_success_job_mode: String,
pub on_failure_job_mode: String,
pub ignore_on_isolate: bool,
pub need_daemon_reload: bool,
pub markers: Vec<String>,
pub job_timeout_usec: u64,
pub job_running_timeout_usec: u64,
pub job_timeout_action: String,
pub job_timeout_reboot_argument: String,
pub condition_result: bool,
pub assert_result: bool,
pub condition_timestamp: u64,
pub condition_timestamp_monotonic: u64,
pub assert_timestamp: u64,
pub assert_timestamp_monotonic: u64,
pub conditions: Vec<(String, bool, bool, String, i32)>,
pub asserts: Vec<(String, bool, bool, String, i32)>,
pub load_error: (String, String),
pub transient: bool,
pub perpetual: bool,
pub start_limit_interval_usec: u64,
pub start_limit_burst: u32,
pub start_limit_action: String,
pub failure_action: String,
pub failure_action_exit_status: i32,
pub success_action: String,
pub success_action_exit_status: i32,
pub reboot_argument: String,
pub invocation_id: Vec<u8>,
pub collect_mode: String,
pub refs: Vec<String>,
pub activation_details: Vec<(String, String)>
`

console.log(props.replace(/pub\s/gm, "")
    .replace(/\:.*/gm, "")
    .split("\n")
    .filter(line => line != "")
    .map(line => `${line}: proxy.${line}()?`)
    .join(",\n")
)

