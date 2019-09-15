import { NativeModules } from 'react-native';

const { NodeOs } = NativeModules;

const signals = {
    SIGHUP: NodeOs.constants.signals.SIGHUP,        // Sent to indicate when a controlling terminal is closed or a parent process exits.
    SIGINT: NodeOs.constants.signals.SIGINT,        // Sent to indicate when a user wishes to interrupt a process ((Ctrl+C)).
    SIGQUIT: NodeOs.constants.signals.SIGQUIT,      // Sent to indicate when a user wishes to terminate a process and perform a core dump.
    SIGILL: NodeOs.constants.signals.SIGILL,        // Sent to a process to notify that it has attempted to perform an illegal, malformed, unknown, or privileged instruction.
    SIGTRAP: NodeOs.constants.signals.SIGTRAP,      // Sent to a process when an exception has occurred.
    SIGABRT: NodeOs.constants.signals.SIGABRT,      // Sent to a process to request that it abort.
    SIGIOT: NodeOs.constants.signals.SIGIOT,        // Synonym for SIGABRT
    SIGBUS: NodeOs.constants.signals.SIGBUS,        // Sent to a process to notify that it has caused a bus error.
    SIGFPE: NodeOs.constants.signals.SIGFPE,        // Sent to a process to notify that it has performed an illegal arithmetic operation.
    SIGKILL: NodeOs.constants.signals.SIGKILL,      // Sent to a process to terminate it immediately.
    SIGUSR1: NodeOs.constants.signals.SIGUSR1,      // Sent to a process to identify user-defined conditions.
    SIGUSR2: NodeOs.constants.signals.SIGUSR2,      // Sent to a process to identify user-defined conditions.
    SIGSEGV: NodeOs.constants.signals.SIGSEGV,      // Sent to a process to notify of a segmentation fault.
    SIGPIPE: NodeOs.constants.signals.SIGPIPE,      // Sent to a process when it has attempted to write to a disconnected pipe.
    SIGALRM: NodeOs.constants.signals.SIGALRM,      // Sent to a process when a system timer elapses.
    SIGTERM: NodeOs.constants.signals.SIGTERM,      // Sent to a process to request termination.
    SIGCHLD: NodeOs.constants.signals.SIGCHLD,      // Sent to a process when a child process terminates.
    SIGSTKFLT: NodeOs.constants.signals.SIGSTKFLT,  // Sent to a process to indicate a stack fault on a coprocessor.
    SIGCONT: NodeOs.constants.signals.SIGCONT,      // Sent to instruct the operating system to continue a paused process.
    SIGSTOP: NodeOs.constants.signals.SIGSTOP,      // Sent to instruct the operating system to halt a process.
    SIGTSTP: NodeOs.constants.signals.SIGTSTP,      // Sent to a process to request it to stop.
    SIGBREAK: NodeOs.constants.signals.SIGBREAK,    // Sent to indicate when a user wishes to interrupt a process.
    SIGTTIN: NodeOs.constants.signals.SIGTTIN,      // Sent to a process when it reads from the TTY while in the background.
    SIGTTOU: NodeOs.constants.signals.SIGTTOU,      // Sent to a process when it writes to the TTY while in the background.
    SIGURG: NodeOs.constants.signals.SIGURG,        // Sent to a process when a socket has urgent data to read.
    SIGXCPU: NodeOs.constants.signals.SIGXCPU,      // Sent to a process when it has exceeded its limit on CPU usage.
    SIGXFSZ: NodeOs.constants.signals.SIGXFSZ,      // Sent to a process when it grows a file larger than the maximum allowed.
    SIGVTALRM: NodeOs.constants.signals.SIGVTALRM,  // Sent to a process when a virtual timer has elapsed.
    SIGPROF: NodeOs.constants.signals.SIGPROF,      // Sent to a process when a system timer has elapsed.
    SIGWINCH: NodeOs.constants.signals.SIGWINCH,    // Sent to a process when the controlling terminal has changed its size.
    SIGIO: NodeOs.constants.signals.SIGIO,          // Sent to a process when I/O is available.
    SIGPOLL: NodeOs.constants.signals.SIGPOLL,      // Synonym for SIGIO
    SIGLOST: NodeOs.constants.signals.SIGLOST,      // Sent to a process when a file lock has been lost.
    SIGPWR: NodeOs.constants.signals.SIGPWR,        // Sent to a process to notify of a power failure.
    SIGINFO: NodeOs.constants.signals.SIGINFO,      // Synonym for SIGPWR
    SIGSYS: NodeOs.constants.signals.SIGSYS,        // Sent to a process to notify of a bad argument.
    SIGUNUSED: NodeOs.constants.signals.SIGUNUSED,  // Synonym for SIGSYS
};

const errno = {
    E2BIG: NodeOs.constants.errno.E2BIG,                        // Indicates that the list of arguments is longer than expected.
    EACCES: NodeOs.constants.errno.EACCES,                      // Indicates that the operation did not have sufficient permissions.
    EADDRINUSE: NodeOs.constants.errno.EADDRINUSE,              // Indicates that the network address is already in use.
    EADDRNOTAVAIL: NodeOs.constants.errno.EADDRNOTAVAIL,        // Indicates that the network address is currently unavailable for use.
    EAFNOSUPPORT: NodeOs.constants.errno.EAFNOSUPPORT,          // Indicates that the network address family is not supported.
    EAGAIN: NodeOs.constants.errno.EAGAIN,                      // Indicates that there is currently no data available and to try the operation again later.
    EALREADY: NodeOs.constants.errno.EALREADY,                  // Indicates that the socket already has a pending connection in progress.
    EBADF: NodeOs.constants.errno.EBADF,                        // Indicates that a file descriptor is not valid.
    EBADMSG: NodeOs.constants.errno.EBADMSG,                    // Indicates an invalid data message.
    EBUSY: NodeOs.constants.errno.EBUSY,                        // Indicates that a device or resource is busy.
    ECANCELED: NodeOs.constants.errno.ECANCELED,                // Indicates that an operation was canceled.
    ECHILD: NodeOs.constants.errno.ECHILD,                      // Indicates that there are no child processes.
    ECONNABORTED: NodeOs.constants.errno.ECONNABORTED,          // Indicates that the network connection has been aborted.
    ECONNREFUSED: NodeOs.constants.errno.ECONNREFUSED,          // Indicates that the network connection has been refused.
    ECONNRESET: NodeOs.constants.errno.ECONNRESET,              // Indicates that the network connection has been reset.
    EDEADLK: NodeOs.constants.errno.EDEADLK,                    // Indicates that a resource deadlock has been avoided.
    EDESTADDRREQ: NodeOs.constants.errno.EDESTADDRREQ,          // Indicates that a destination address is required.
    EDOM: NodeOs.constants.errno.EDOM,                          // Indicates that an argument is out of the domain of the function.
    EDQUOT: NodeOs.constants.errno.EDQUOT,                      // Indicates that the disk quota has been exceeded.
    EEXIST: NodeOs.constants.errno.EEXIST,                      // Indicates that the file already exists.
    EFAULT: NodeOs.constants.errno.EFAULT,                      // Indicates an invalid pointer address.
    EFBIG: NodeOs.constants.errno.EFBIG,                        // Indicates that the file is too large.
    EHOSTUNREACH: NodeOs.constants.errno.EHOSTUNREACH,          // Indicates that the host is unreachable.
    EIDRM: NodeOs.constants.errno.EIDRM,                        // Indicates that the identifier has been removed.
    EILSEQ: NodeOs.constants.errno.EILSEQ,                      // Indicates an illegal byte sequence.
    EINPROGRESS: NodeOs.constants.errno.EINPROGRESS,            // Indicates that an operation is already in progress.
    EINTR: NodeOs.constants.errno.EINTR,                        // Indicates that a function call was interrupted.
    EINVAL: NodeOs.constants.errno.EINVAL,                      // Indicates that an invalid argument was provided.
    EIO: NodeOs.constants.errno.EIO,                            // Indicates an otherwise unspecified I/O error.
    EISCONN: NodeOs.constants.errno.EISCONN,                    // Indicates that the socket is connected.
    EISDIR: NodeOs.constants.errno.EISDIR,                      // Indicates that the path is a directory.
    ELOOP: NodeOs.constants.errno.ELOOP,                        // Indicates too many levels of symbolic links in a path.
    EMFILE: NodeOs.constants.errno.EMFILE,                      // Indicates that there are too many open files.
    EMLINK: NodeOs.constants.errno.EMLINK,                      // Indicates that there are too many hard links to a file.
    EMSGSIZE: NodeOs.constants.errno.EMSGSIZE,                  // Indicates that the provided message is too long.
    EMULTIHOP: NodeOs.constants.errno.EMULTIHOP,                // Indicates that a multihop was attempted.
    ENAMETOOLONG: NodeOs.constants.errno.ENAMETOOLONG,          // Indicates that the filename is too long.
    ENETDOWN: NodeOs.constants.errno.ENETDOWN,                  // Indicates that the network is down.
    ENETRESET: NodeOs.constants.errno.ENETRESET,                // Indicates that the connection has been aborted by the network.
    ENETUNREACH: NodeOs.constants.errno.ENETUNREACH,            // Indicates that the network is unreachable.
    ENFILE: NodeOs.constants.errno.ENFILE,                      // Indicates too many open files in the system.
    ENOBUFS: NodeOs.constants.errno.ENOBUFS,                    // Indicates that no buffer space is available.
    ENODATA: NodeOs.constants.errno.ENODATA,                    // Indicates that no message is available on the stream head read queue.
    ENODEV: NodeOs.constants.errno.ENODEV,                      // Indicates that there is no such device.
    ENOENT: NodeOs.constants.errno.ENOENT,                      // Indicates that there is no such file or directory.
    ENOEXEC: NodeOs.constants.errno.ENOEXEC,                    // Indicates an exec format error.
    ENOLCK: NodeOs.constants.errno.ENOLCK,                      // Indicates that there are no locks available.
    ENOLINK: NodeOs.constants.errno.ENOLINK,                    // Indications that a link has been severed.
    ENOMEM: NodeOs.constants.errno.ENOMEM,                      // Indicates that there is not enough space.
    ENOMSG: NodeOs.constants.errno.ENOMSG,                      // Indicates that there is no message of the desired type.
    ENOPROTOOPT: NodeOs.constants.errno.ENOPROTOOPT,            // Indicates that a given protocol is not available.
    ENOSPC: NodeOs.constants.errno.ENOSPC,                      // Indicates that there is no space available on the device.
    ENOSR: NodeOs.constants.errno.ENOSR,                        // Indicates that there are no stream resources available.
    ENOSTR: NodeOs.constants.errno.ENOSTR,                      // Indicates that a given resource is not a stream.
    ENOSYS: NodeOs.constants.errno.ENOSYS,                      // Indicates that a function has not been implemented.
    ENOTCONN: NodeOs.constants.errno.ENOTCONN,                  // Indicates that the socket is not connected.
    ENOTDIR: NodeOs.constants.errno.ENOTDIR,                    // Indicates that the path is not a directory.
    ENOTEMPTY: NodeOs.constants.errno.ENOTEMPTY,                // Indicates that the directory is not empty.
    ENOTSOCK: NodeOs.constants.errno.ENOTSOCK,                  // Indicates that the given item is not a socket.
    ENOTSUP: NodeOs.constants.errno.ENOTSUP,                    // Indicates that a given operation is not supported.
    ENOTTY: NodeOs.constants.errno.ENOTTY,                      // Indicates an inappropriate I/O control operation.
    ENXIO: NodeOs.constants.errno.ENXIO,                        // Indicates no such device or address.
    EOPNOTSUPP: NodeOs.constants.errno.EOPNOTSUPP,              // Indicates that an operation is not supported on the socket. Note that while ENOTSUP and EOPNOTSUPP have the same value on Linux, according to POSIX.1 these error values should be distinct.)
    EOVERFLOW: NodeOs.constants.errno.EOVERFLOW,                // Indicates that a value is too large to be stored in a given data type.
    EPERM: NodeOs.constants.errno.EPERM,                        // Indicates that the operation is not permitted.
    EPIPE: NodeOs.constants.errno.EPIPE,                        // Indicates a broken pipe.
    EPROTO: NodeOs.constants.errno.EPROTO,                      // Indicates a protocol error.
    EPROTONOSUPPORT: NodeOs.constants.errno.EPROTONOSUPPORT,    // Indicates that a protocol is not supported.
    EPROTOTYPE: NodeOs.constants.errno.EPROTOTYPE,              // Indicates the wrong type of protocol for a socket.
    ERANGE: NodeOs.constants.errno.ERANGE,                      // Indicates that the results are too large.
    EROFS: NodeOs.constants.errno.EROFS,                        // Indicates that the file system is read only.
    ESPIPE: NodeOs.constants.errno.ESPIPE,                      // Indicates an invalid seek operation.
    ESRCH: NodeOs.constants.errno.ESRCH,                        // Indicates that there is no such process.
    ESTALE: NodeOs.constants.errno.ESTALE,                      // Indicates that the file handle is stale.
    ETIME: NodeOs.constants.errno.ETIME,                        // Indicates an expired timer.
    ETIMEDOUT: NodeOs.constants.errno.ETIMEDOUT,                // Indicates that the connection timed out.
    ETXTBSY: NodeOs.constants.errno.ETXTBSY,                    // Indicates that a text file is busy.
    EWOULDBLOCK: NodeOs.constants.errno.EWOULDBLOCK,            // Indicates that the operation would block.
    EXDEV: NodeOs.constants.errno.EXDEV,                        // Indicates an improper link.
};

const dlopen = {
    RTLD_LAZY: NodeOs.constants.dlopen.RTLD_LAZY,           // Perform lazy binding. Node.js sets this flag by default.
    RTLD_NOW: NodeOs.constants.dlopen.RTLD_NOW,             // Resolve all undefined symbols in the library before dlopen(3) returns.
    RTLD_GLOBAL: NodeOs.constants.dlopen.RTLD_GLOBAL,       // Symbols defined by the library will be made available for symbol resolution of subsequently loaded libraries.
    RTLD_LOCAL: NodeOs.constants.dlopen.RTLD_LOCAL,         // The converse of RTLD_GLOBAL. This is the default behavior if neither flag is specified.
    RTLD_DEEPBIND: NodeOs.constants.dlopen.RTLD_DEEPBIND,   // Make a self-contained library use its own symbols in preference to symbols from previously loaded libraries.
};

const priority = {
    PRIORITY_LOW: NodeOs.constants.priority.PRIORITY_LOW,                   // The lowest process scheduling priority. This corresponds to IDLE_PRIORITY_CLASS on Windows, and a nice value of 19 on all other platforms.
    PRIORITY_BELOW_NORMAL: NodeOs.constants.priority.PRIORITY_BELOW_NORMAL, // The process scheduling priority above PRIORITY_LOW and below PRIORITY_NORMAL. This corresponds to BELOW_NORMAL_PRIORITY_CLASS on Windows, and a nice value of 10 on all other platforms.
    PRIORITY_NORMAL: NodeOs.constants.priority.PRIORITY_NORMAL,             // The default process scheduling priority. This corresponds to NORMAL_PRIORITY_CLASS on Windows, and a nice value of 0 on all other platforms.
    PRIORITY_ABOVE_NORMAL: NodeOs.constants.priority.PRIORITY_ABOVE_NORMAL, // The process scheduling priority above PRIORITY_NORMAL and below PRIORITY_HIGH. This corresponds to ABOVE_NORMAL_PRIORITY_CLASS on Windows, and a nice value of -7 on all other platforms.
    PRIORITY_HIGH: NodeOs.constants.priority.PRIORITY_HIGH,                 // The process scheduling priority above PRIORITY_ABOVE_NORMAL and below PRIORITY_HIGHEST. This corresponds to HIGH_PRIORITY_CLASS on Windows, and a nice value of -14 on all other platforms.
    PRIORITY_HIGHEST: NodeOs.constants.priority.PRIORITY_HIGHEST,           // The highest process scheduling priority. This corresponds to REALTIME_PRIORITY_CLASS on Windows, and a nice value of -20 on all other platforms.
};

const NodeOsJS = {
    EOL: NodeOs.EOL,
    arch: NodeOs.arch,
    constants: {
        signals,
        errno,
        dlopen,
        priority
    },
    cpus: NodeOs.cpus,
    endianness: NodeOs.endianness,
    freemem: NodeOs.freemem,
    getPriority: NodeOs.getPriority,
    homedir: NodeOs.homedir,
    hostname: NodeOs.hostname,
    loadavg: NodeOs.loadavg,
    networkInterfaces: NodeOs.networkInterfaces,
    platform: NodeOs.platform,
    release: NodeOs.release,
    setPriority: NodeOs.setPriority,
    tmpdir: NodeOs.tmpdir,
    totalmem: NodeOs.totalmem,
    type: NodeOs.type,
    uptime: NodeOs.uptime,
    userInfo: NodeOs.userInfo,
};

export default NodeOsJS;