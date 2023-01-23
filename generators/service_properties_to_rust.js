const xd = `
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly s Type = '...';
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly s ExitType = '...';
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly s Restart = '...';
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly s PIDFile = '...';
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly s NotifyAccess = '...';
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly t RestartUSec = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly t TimeoutStartUSec = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly t TimeoutStopUSec = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly t TimeoutAbortUSec = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly s TimeoutStartFailureMode = '...';
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly s TimeoutStopFailureMode = '...';
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly t RuntimeMaxUSec = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly t RuntimeRandomizedExtraUSec = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly t WatchdogUSec = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly t WatchdogTimestamp = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly t WatchdogTimestampMonotonic = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly b RootDirectoryStartOnly = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly b RemainAfterExit = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly b GuessMainPID = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly (aiai) RestartPreventExitStatus = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly (aiai) RestartForceExitStatus = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly (aiai) SuccessExitStatus = ...;
readonly u MainPID = ...;
readonly u ControlPID = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly s BusName = '...';
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly u FileDescriptorStoreMax = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly u NFileDescriptorStore = ...;
readonly s StatusText = '...';
readonly i StatusErrno = ...;
readonly s Result = '...';
readonly s ReloadResult = '...';
readonly s CleanResult = '...';
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly s USBFunctionDescriptors = '...';
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly s USBFunctionStrings = '...';
readonly u UID = ...;
readonly u GID = ...;
readonly u NRestarts = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly s OOMPolicy = '...';
readonly t ExecMainStartTimestamp = ...;
readonly t ExecMainStartTimestampMonotonic = ...;
readonly t ExecMainExitTimestamp = ...;
readonly t ExecMainExitTimestampMonotonic = ...;
readonly u ExecMainPID = ...;
readonly i ExecMainCode = ...;
readonly i ExecMainStatus = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("invalidates")
readonly a(sasbttttuii) ExecCondition = [...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("invalidates")
readonly a(sasasttttuii) ExecConditionEx = [...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("invalidates")
readonly a(sasbttttuii) ExecStartPre = [...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("invalidates")
readonly a(sasasttttuii) ExecStartPreEx = [...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("invalidates")
readonly a(sasbttttuii) ExecStart = [...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("invalidates")
readonly a(sasasttttuii) ExecStartEx = [...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("invalidates")
readonly a(sasbttttuii) ExecStartPost = [...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("invalidates")
readonly a(sasasttttuii) ExecStartPostEx = [...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("invalidates")
readonly a(sasbttttuii) ExecReload = [...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("invalidates")
readonly a(sasasttttuii) ExecReloadEx = [...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("invalidates")
readonly a(sasbttttuii) ExecStop = [...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("invalidates")
readonly a(sasasttttuii) ExecStopEx = [...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("invalidates")
readonly a(sasbttttuii) ExecStopPost = [...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("invalidates")
readonly a(sasasttttuii) ExecStopPostEx = [...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly s Slice = '...';
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly s ControlGroup = '...';
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly t ControlGroupId = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly t MemoryCurrent = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly t MemoryAvailable = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly t CPUUsageNSec = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly ay EffectiveCPUs = [...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly ay EffectiveMemoryNodes = [...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly t TasksCurrent = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly t IPIngressBytes = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly t IPIngressPackets = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly t IPEgressBytes = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly t IPEgressPackets = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly t IOReadBytes = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly t IOReadOperations = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly t IOWriteBytes = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly t IOWriteOperations = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly b Delegate = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly as DelegateControllers = ['...', ...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly b CPUAccounting = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly t CPUWeight = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly t StartupCPUWeight = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly t CPUShares = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly t StartupCPUShares = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly t CPUQuotaPerSecUSec = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly t CPUQuotaPeriodUSec = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly ay AllowedCPUs = [...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly ay StartupAllowedCPUs = [...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly ay AllowedMemoryNodes = [...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly ay StartupAllowedMemoryNodes = [...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly b IOAccounting = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly t IOWeight = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly t StartupIOWeight = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly a(st) IODeviceWeight = [...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly a(st) IOReadBandwidthMax = [...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly a(st) IOWriteBandwidthMax = [...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly a(st) IOReadIOPSMax = [...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly a(st) IOWriteIOPSMax = [...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly a(st) IODeviceLatencyTargetUSec = [...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly b BlockIOAccounting = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly t BlockIOWeight = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly t StartupBlockIOWeight = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly a(st) BlockIODeviceWeight = [...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly a(st) BlockIOReadBandwidth = [...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly a(st) BlockIOWriteBandwidth = [...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly b MemoryAccounting = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly t DefaultMemoryLow = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly t DefaultMemoryMin = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly t MemoryMin = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly t MemoryLow = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly t MemoryHigh = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly t MemoryMax = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly t MemorySwapMax = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly t MemoryLimit = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly s DevicePolicy = '...';
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly a(ss) DeviceAllow = [...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly b TasksAccounting = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly t TasksMax = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly b IPAccounting = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly a(iayu) IPAddressAllow = [...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly a(iayu) IPAddressDeny = [...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly as IPIngressFilterPath = ['...', ...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly as IPEgressFilterPath = ['...', ...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly as DisableControllers = ['...', ...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly s ManagedOOMSwap = '...';
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly s ManagedOOMMemoryPressure = '...';
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly u ManagedOOMMemoryPressureLimit = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly s ManagedOOMPreference = '...';
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly a(ss) BPFProgram = [...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly a(iiqq) SocketBindAllow = [...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly a(iiqq) SocketBindDeny = [...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("false")
readonly (bas) RestrictNetworkInterfaces = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly as Environment = ['...', ...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly a(sb) EnvironmentFiles = [...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly as PassEnvironment = ['...', ...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly as UnsetEnvironment = ['...', ...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly u UMask = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly t LimitCPU = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly t LimitCPUSoft = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly t LimitFSIZE = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly t LimitFSIZESoft = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly t LimitDATA = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly t LimitDATASoft = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly t LimitSTACK = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly t LimitSTACKSoft = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly t LimitCORE = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly t LimitCORESoft = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly t LimitRSS = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly t LimitRSSSoft = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly t LimitNOFILE = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly t LimitNOFILESoft = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly t LimitAS = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly t LimitASSoft = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly t LimitNPROC = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly t LimitNPROCSoft = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly t LimitMEMLOCK = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly t LimitMEMLOCKSoft = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly t LimitLOCKS = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly t LimitLOCKSSoft = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly t LimitSIGPENDING = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly t LimitSIGPENDINGSoft = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly t LimitMSGQUEUE = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly t LimitMSGQUEUESoft = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly t LimitNICE = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly t LimitNICESoft = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly t LimitRTPRIO = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly t LimitRTPRIOSoft = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly t LimitRTTIME = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly t LimitRTTIMESoft = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly s WorkingDirectory = '...';
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly s RootDirectory = '...';
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly s RootImage = '...';
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly a(ss) RootImageOptions = [...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly ay RootHash = [...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly s RootHashPath = '...';
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly ay RootHashSignature = [...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly s RootHashSignaturePath = '...';
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly s RootVerity = '...';
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly as ExtensionDirectories = ['...', ...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly a(sba(ss)) ExtensionImages = [...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly a(ssba(ss)) MountImages = [...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly i OOMScoreAdjust = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly t CoredumpFilter = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly i Nice = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly i IOSchedulingClass = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly i IOSchedulingPriority = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly i CPUSchedulingPolicy = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly i CPUSchedulingPriority = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly ay CPUAffinity = [...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly b CPUAffinityFromNUMA = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly i NUMAPolicy = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly ay NUMAMask = [...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly t TimerSlackNSec = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly b CPUSchedulingResetOnFork = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly b NonBlocking = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly s StandardInput = '...';
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly s StandardInputFileDescriptorName = '...';
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly ay StandardInputData = [...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly s StandardOutput = '...';
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly s StandardOutputFileDescriptorName = '...';
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly s StandardError = '...';
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly s StandardErrorFileDescriptorName = '...';
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly s TTYPath = '...';
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly b TTYReset = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly b TTYVHangup = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly b TTYVTDisallocate = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly q TTYRows = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly q TTYColumns = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly i SyslogPriority = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly s SyslogIdentifier = '...';
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly b SyslogLevelPrefix = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly i SyslogLevel = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly i SyslogFacility = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly i LogLevelMax = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly t LogRateLimitIntervalUSec = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly u LogRateLimitBurst = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly aay LogExtraFields = [[...], ...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly s LogNamespace = '...';
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly i SecureBits = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly t CapabilityBoundingSet = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly t AmbientCapabilities = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly s User = '...';
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly s Group = '...';
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly b DynamicUser = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly b RemoveIPC = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly a(say) SetCredential = [...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly a(say) SetCredentialEncrypted = [...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly a(ss) LoadCredential = [...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly a(ss) LoadCredentialEncrypted = [...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly as SupplementaryGroups = ['...', ...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly s PAMName = '...';
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly as ReadWritePaths = ['...', ...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly as ReadOnlyPaths = ['...', ...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly as InaccessiblePaths = ['...', ...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly as ExecPaths = ['...', ...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly as NoExecPaths = ['...', ...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly as ExecSearchPath = ['...', ...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly t MountFlags = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly b PrivateTmp = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly b PrivateDevices = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly b ProtectClock = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly b ProtectKernelTunables = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly b ProtectKernelModules = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly b ProtectKernelLogs = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly b ProtectControlGroups = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly b PrivateNetwork = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly b PrivateUsers = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly b PrivateMounts = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly b PrivateIPC = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly s ProtectHome = '...';
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly s ProtectSystem = '...';
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly b SameProcessGroup = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly s UtmpIdentifier = '...';
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly s UtmpMode = '...';
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly (bs) SELinuxContext = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly (bs) AppArmorProfile = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly (bs) SmackProcessLabel = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly b IgnoreSIGPIPE = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly b NoNewPrivileges = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly (bas) SystemCallFilter = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly as SystemCallArchitectures = ['...', ...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly i SystemCallErrorNumber = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly (bas) SystemCallLog = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly s Personality = '...';
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly b LockPersonality = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly (bas) RestrictAddressFamilies = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly a(sst) RuntimeDirectorySymlink = [...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly s RuntimeDirectoryPreserve = '...';
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly u RuntimeDirectoryMode = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly as RuntimeDirectory = ['...', ...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly a(sst) StateDirectorySymlink = [...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly u StateDirectoryMode = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly as StateDirectory = ['...', ...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly a(sst) CacheDirectorySymlink = [...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly u CacheDirectoryMode = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly as CacheDirectory = ['...', ...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly a(sst) LogsDirectorySymlink = [...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly u LogsDirectoryMode = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly as LogsDirectory = ['...', ...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly u ConfigurationDirectoryMode = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly as ConfigurationDirectory = ['...', ...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly t TimeoutCleanUSec = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly b MemoryDenyWriteExecute = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly b RestrictRealtime = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly b RestrictSUIDSGID = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly t RestrictNamespaces = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly (bas) RestrictFileSystems = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly a(ssbt) BindPaths = [...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly a(ssbt) BindReadOnlyPaths = [...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly a(ss) TemporaryFileSystem = [...];
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly b MountAPIVFS = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly s KeyringMode = '...';
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly s ProtectProc = '...';
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly s ProcSubset = '...';
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly b ProtectHostname = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly s NetworkNamespacePath = '...';
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly s IPCNamespacePath = '...';
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly s KillMode = '...';
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly i KillSignal = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly i RestartKillSignal = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly i FinalKillSignal = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly b SendSIGKILL = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly b SendSIGHUP = ...;
@org.freedesktop.DBus.Property.EmitsChangedSignal("const")
readonly i WatchdogSignal = ...;
`
