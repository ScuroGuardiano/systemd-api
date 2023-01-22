const xd = `
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
      readonly s Id = '...';
      @org.freedesktop.DBus.Property.EmitsChangedSignal("const")
      readonly as Names = ['...', ...];
      @org.freedesktop.DBus.Property.EmitsChangedSignal("false")
      readonly s Following = '...';
      @org.freedesktop.DBus.Property.EmitsChangedSignal("const")
      readonly as Requires = ['...', ...];
      @org.freedesktop.DBus.Property.EmitsChangedSignal("const")
      readonly as Requisite = ['...', ...];
      @org.freedesktop.DBus.Property.EmitsChangedSignal("const")
      readonly as Wants = ['...', ...];
      @org.freedesktop.DBus.Property.EmitsChangedSignal("const")
      readonly as BindsTo = ['...', ...];
      @org.freedesktop.DBus.Property.EmitsChangedSignal("const")
      readonly as PartOf = ['...', ...];
      @org.freedesktop.DBus.Property.EmitsChangedSignal("const")
      readonly as Upholds = ['...', ...];
      @org.freedesktop.DBus.Property.EmitsChangedSignal("const")
      readonly as RequiredBy = ['...', ...];
      @org.freedesktop.DBus.Property.EmitsChangedSignal("const")
      readonly as RequisiteOf = ['...', ...];
      @org.freedesktop.DBus.Property.EmitsChangedSignal("const")
      readonly as WantedBy = ['...', ...];
      @org.freedesktop.DBus.Property.EmitsChangedSignal("const")
      readonly as BoundBy = ['...', ...];
      @org.freedesktop.DBus.Property.EmitsChangedSignal("const")
      readonly as UpheldBy = ['...', ...];
      @org.freedesktop.DBus.Property.EmitsChangedSignal("const")
      readonly as ConsistsOf = ['...', ...];
      @org.freedesktop.DBus.Property.EmitsChangedSignal("const")
      readonly as Conflicts = ['...', ...];
      @org.freedesktop.DBus.Property.EmitsChangedSignal("const")
      readonly as ConflictedBy = ['...', ...];
      @org.freedesktop.DBus.Property.EmitsChangedSignal("const")
      readonly as Before = ['...', ...];
      @org.freedesktop.DBus.Property.EmitsChangedSignal("const")
      readonly as After = ['...', ...];
      @org.freedesktop.DBus.Property.EmitsChangedSignal("const")
      readonly as OnSuccess = ['...', ...];
      @org.freedesktop.DBus.Property.EmitsChangedSignal("const")
      readonly as OnSuccessOf = ['...', ...];
      @org.freedesktop.DBus.Property.EmitsChangedSignal("const")
      readonly as OnFailure = ['...', ...];
      @org.freedesktop.DBus.Property.EmitsChangedSignal("const")
      readonly as OnFailureOf = ['...', ...];
      @org.freedesktop.DBus.Property.EmitsChangedSignal("const")
      readonly as Triggers = ['...', ...];
      @org.freedesktop.DBus.Property.EmitsChangedSignal("const")
      readonly as TriggeredBy = ['...', ...];
      @org.freedesktop.DBus.Property.EmitsChangedSignal("const")
      readonly as PropagatesReloadTo = ['...', ...];
      @org.freedesktop.DBus.Property.EmitsChangedSignal("const")
      readonly as ReloadPropagatedFrom = ['...', ...];
      @org.freedesktop.DBus.Property.EmitsChangedSignal("const")
      readonly as PropagatesStopTo = ['...', ...];
      @org.freedesktop.DBus.Property.EmitsChangedSignal("const")
      readonly as StopPropagatedFrom = ['...', ...];
      @org.freedesktop.DBus.Property.EmitsChangedSignal("const")
      readonly as JoinsNamespaceOf = ['...', ...];
      @org.freedesktop.DBus.Property.EmitsChangedSignal("const")
      readonly as SliceOf = ['...', ...];
      @org.freedesktop.DBus.Property.EmitsChangedSignal("const")
      readonly as RequiresMountsFor = ['...', ...];
      @org.freedesktop.DBus.Property.EmitsChangedSignal("const")
      readonly as Documentation = ['...', ...];
      @org.freedesktop.DBus.Property.EmitsChangedSignal("const")
      readonly s Description = '...';
      @org.freedesktop.DBus.Property.EmitsChangedSignal("const")
      readonly s AccessSELinuxContext = '...';
      @org.freedesktop.DBus.Property.EmitsChangedSignal("const")
      readonly s LoadState = '...';
      readonly s ActiveState = '...';
      readonly s FreezerState = '...';
      readonly s SubState = '...';
      @org.freedesktop.DBus.Property.EmitsChangedSignal("const")
      readonly s FragmentPath = '...';
      @org.freedesktop.DBus.Property.EmitsChangedSignal("const")
      readonly s SourcePath = '...';
      @org.freedesktop.DBus.Property.EmitsChangedSignal("const")
      readonly as DropInPaths = ['...', ...];
      @org.freedesktop.DBus.Property.EmitsChangedSignal("false")
      readonly s UnitFileState = '...';
      @org.freedesktop.DBus.Property.EmitsChangedSignal("false")
      readonly s UnitFilePreset = '...';
      readonly t StateChangeTimestamp = ...;
      readonly t StateChangeTimestampMonotonic = ...;
      readonly t InactiveExitTimestamp = ...;
      readonly t InactiveExitTimestampMonotonic = ...;
      readonly t ActiveEnterTimestamp = ...;
      readonly t ActiveEnterTimestampMonotonic = ...;
      readonly t ActiveExitTimestamp = ...;
      readonly t ActiveExitTimestampMonotonic = ...;
      readonly t InactiveEnterTimestamp = ...;
      readonly t InactiveEnterTimestampMonotonic = ...;
      @org.freedesktop.DBus.Property.EmitsChangedSignal("const")
      readonly b CanStart = ...;
      @org.freedesktop.DBus.Property.EmitsChangedSignal("const")
      readonly b CanStop = ...;
      @org.freedesktop.DBus.Property.EmitsChangedSignal("const")
      readonly b CanReload = ...;
      @org.freedesktop.DBus.Property.EmitsChangedSignal("const")
      readonly b CanIsolate = ...;
      @org.freedesktop.DBus.Property.EmitsChangedSignal("const")
      readonly as CanClean = ['...', ...];
      @org.freedesktop.DBus.Property.EmitsChangedSignal("const")
      readonly b CanFreeze = ...;
      readonly (uo) Job = ...;
      @org.freedesktop.DBus.Property.EmitsChangedSignal("const")
      readonly b StopWhenUnneeded = ...;
      @org.freedesktop.DBus.Property.EmitsChangedSignal("const")
      readonly b RefuseManualStart = ...;
      @org.freedesktop.DBus.Property.EmitsChangedSignal("const")
      readonly b RefuseManualStop = ...;
      @org.freedesktop.DBus.Property.EmitsChangedSignal("const")
      readonly b AllowIsolate = ...;
      @org.freedesktop.DBus.Property.EmitsChangedSignal("const")
      readonly b DefaultDependencies = ...;
      @org.freedesktop.DBus.Property.EmitsChangedSignal("const")
      readonly s OnSuccessJobMode = '...';
      @org.freedesktop.DBus.Property.EmitsChangedSignal("const")
      readonly s OnFailureJobMode = '...';
      @org.freedesktop.DBus.Property.EmitsChangedSignal("const")
      readonly b IgnoreOnIsolate = ...;
      @org.freedesktop.DBus.Property.EmitsChangedSignal("false")
      readonly b NeedDaemonReload = ...;
      @org.freedesktop.DBus.Property.EmitsChangedSignal("false")
      readonly as Markers = ['...', ...];
      @org.freedesktop.DBus.Property.EmitsChangedSignal("const")
      readonly t JobTimeoutUSec = ...;
      @org.freedesktop.DBus.Property.EmitsChangedSignal("const")
      readonly t JobRunningTimeoutUSec = ...;
      @org.freedesktop.DBus.Property.EmitsChangedSignal("const")
      readonly s JobTimeoutAction = '...';
      @org.freedesktop.DBus.Property.EmitsChangedSignal("const")
      readonly s JobTimeoutRebootArgument = '...';
      readonly b ConditionResult = ...;
      readonly b AssertResult = ...;
      readonly t ConditionTimestamp = ...;
      readonly t ConditionTimestampMonotonic = ...;
      readonly t AssertTimestamp = ...;
      readonly t AssertTimestampMonotonic = ...;
      @org.freedesktop.DBus.Property.EmitsChangedSignal("invalidates")
      readonly a(sbbsi) Conditions = [...];
      @org.freedesktop.DBus.Property.EmitsChangedSignal("invalidates")
      readonly a(sbbsi) Asserts = [...];
      @org.freedesktop.DBus.Property.EmitsChangedSignal("const")
      readonly (ss) LoadError = ...;
      @org.freedesktop.DBus.Property.EmitsChangedSignal("const")
      readonly b Transient = ...;
      @org.freedesktop.DBus.Property.EmitsChangedSignal("const")
      readonly b Perpetual = ...;
      @org.freedesktop.DBus.Property.EmitsChangedSignal("const")
      readonly t StartLimitIntervalUSec = ...;
      @org.freedesktop.DBus.Property.EmitsChangedSignal("const")
      readonly u StartLimitBurst = ...;
      @org.freedesktop.DBus.Property.EmitsChangedSignal("const")
      readonly s StartLimitAction = '...';
      @org.freedesktop.DBus.Property.EmitsChangedSignal("const")
      readonly s FailureAction = '...';
      @org.freedesktop.DBus.Property.EmitsChangedSignal("const")
      readonly i FailureActionExitStatus = ...;
      @org.freedesktop.DBus.Property.EmitsChangedSignal("const")
      readonly s SuccessAction = '...';
      @org.freedesktop.DBus.Property.EmitsChangedSignal("const")
      readonly i SuccessActionExitStatus = ...;
      @org.freedesktop.DBus.Property.EmitsChangedSignal("const")
      readonly s RebootArgument = '...';
      readonly ay InvocationID = [...];
      @org.freedesktop.DBus.Property.EmitsChangedSignal("const")
      readonly s CollectMode = '...';
      @org.freedesktop.DBus.Property.EmitsChangedSignal("false")
      readonly as Refs = ['...', ...];
      readonly a(ss) ActivationDetails = [...];
`

const type_mapping = {
    "s": "String",
    "as": "Vec<String>",
    "t": "u64",
    "b": "bool",
    "(uo)": "(u32, String)",
    "a(sbbsi)": "Vec<(String, bool, bool, String, i32)>",
    "(ss)": "(String, String)",
    "u": "u32",
    "i": "i32",
    "ay": "Vec<u8>",
    "a(ss)": "Vec<(String, String)>"
}

console.log(
    xd.replace(/@.*\n/g, "")
    .split('\n')
    .map(line => line.replace(/readonly\s/g, ""))
    .map(line => line.replace(/=.*/g, "").trim())
    .filter(line => line != '')
    .map(line => {
        let [type, name] = line.split(" ");
        // I copied this shit from here -> https://stackoverflow.com/a/30521308
        // It works ^_^
        name = name.replace(/(?:^|\.?)([A-Z]+)/g, function (x,y){return "_" + y.toLowerCase()}).replace(/^_/, "")
        return `${name}: ${type_mapping[type]}`
    })
    .map(line => `pub ${line}`)
    .join(',\n')
);

