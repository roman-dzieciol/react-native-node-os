import { NativeModules } from 'react-native';

const { os } = NativeModules;

const signals = {
    SIGHUP: os.constants.signals.SIGHUP,        // Sent to indicate when a controlling terminal is closed or a parent process exits.
    SIGINT: os.constants.signals.SIGINT,        // Sent to indicate when a user wishes to interrupt a process ((Ctrl+C)).
    SIGQUIT: os.constants.signals.SIGQUIT,      // Sent to indicate when a user wishes to terminate a process and perform a core dump.
    SIGILL: os.constants.signals.SIGILL,        // Sent to a process to notify that it has attempted to perform an illegal, malformed, unknown, or privileged instruction.
    SIGTRAP: os.constants.signals.SIGTRAP,      // Sent to a process when an exception has occurred.
    SIGABRT: os.constants.signals.SIGABRT,      // Sent to a process to request that it abort.
    SIGIOT: os.constants.signals.SIGIOT,        // Synonym for SIGABRT
    SIGBUS: os.constants.signals.SIGBUS,        // Sent to a process to notify that it has caused a bus error.
    SIGFPE: os.constants.signals.SIGFPE,        // Sent to a process to notify that it has performed an illegal arithmetic operation.
    SIGKILL: os.constants.signals.SIGKILL,      // Sent to a process to terminate it immediately.
    SIGUSR1: os.constants.signals.SIGUSR1,      // Sent to a process to identify user-defined conditions.
    SIGUSR2: os.constants.signals.SIGUSR2,      // Sent to a process to identify user-defined conditions.
    SIGSEGV: os.constants.signals.SIGSEGV,      // Sent to a process to notify of a segmentation fault.
    SIGPIPE: os.constants.signals.SIGPIPE,      // Sent to a process when it has attempted to write to a disconnected pipe.
    SIGALRM: os.constants.signals.SIGALRM,      // Sent to a process when a system timer elapses.
    SIGTERM: os.constants.signals.SIGTERM,      // Sent to a process to request termination.
    SIGCHLD: os.constants.signals.SIGCHLD,      // Sent to a process when a child process terminates.
    SIGSTKFLT: os.constants.signals.SIGSTKFLT,  // Sent to a process to indicate a stack fault on a coprocessor.
    SIGCONT: os.constants.signals.SIGCONT,      // Sent to instruct the operating system to continue a paused process.
    SIGSTOP: os.constants.signals.SIGSTOP,      // Sent to instruct the operating system to halt a process.
    SIGTSTP: os.constants.signals.SIGTSTP,      // Sent to a process to request it to stop.
    SIGBREAK: os.constants.signals.SIGBREAK,    // Sent to indicate when a user wishes to interrupt a process.
    SIGTTIN: os.constants.signals.SIGTTIN,      // Sent to a process when it reads from the TTY while in the background.
    SIGTTOU: os.constants.signals.SIGTTOU,      // Sent to a process when it writes to the TTY while in the background.
    SIGURG: os.constants.signals.SIGURG,        // Sent to a process when a socket has urgent data to read.
    SIGXCPU: os.constants.signals.SIGXCPU,      // Sent to a process when it has exceeded its limit on CPU usage.
    SIGXFSZ: os.constants.signals.SIGXFSZ,      // Sent to a process when it grows a file larger than the maximum allowed.
    SIGVTALRM: os.constants.signals.SIGVTALRM,  // Sent to a process when a virtual timer has elapsed.
    SIGPROF: os.constants.signals.SIGPROF,      // Sent to a process when a system timer has elapsed.
    SIGWINCH: os.constants.signals.SIGWINCH,    // Sent to a process when the controlling terminal has changed its size.
    SIGIO: os.constants.signals.SIGIO,          // Sent to a process when I/O is available.
    SIGPOLL: os.constants.signals.SIGPOLL,      // Synonym for SIGIO
    SIGLOST: os.constants.signals.SIGLOST,      // Sent to a process when a file lock has been lost.
    SIGPWR: os.constants.signals.SIGPWR,        // Sent to a process to notify of a power failure.
    SIGINFO: os.constants.signals.SIGINFO,      // Synonym for SIGPWR
    SIGSYS: os.constants.signals.SIGSYS,        // Sent to a process to notify of a bad argument.
    SIGUNUSED: os.constants.signals.SIGUNUSED,  // Synonym for SIGSYS
};

const errno = {
    E2BIG: os.constants.errno.E2BIG,                        // Indicates that the list of arguments is longer than expected.
    EACCES: os.constants.errno.EACCES,                      // Indicates that the operation did not have sufficient permissions.
    EADDRINUSE: os.constants.errno.EADDRINUSE,              // Indicates that the network address is already in use.
    EADDRNOTAVAIL: os.constants.errno.EADDRNOTAVAIL,        // Indicates that the network address is currently unavailable for use.
    EAFNOSUPPORT: os.constants.errno.EAFNOSUPPORT,          // Indicates that the network address family is not supported.
    EAGAIN: os.constants.errno.EAGAIN,                      // Indicates that there is currently no data available and to try the operation again later.
    EALREADY: os.constants.errno.EALREADY,                  // Indicates that the socket already has a pending connection in progress.
    EBADF: os.constants.errno.EBADF,                        // Indicates that a file descriptor is not valid.
    EBADMSG: os.constants.errno.EBADMSG,                    // Indicates an invalid data message.
    EBUSY: os.constants.errno.EBUSY,                        // Indicates that a device or resource is busy.
    ECANCELED: os.constants.errno.ECANCELED,                // Indicates that an operation was canceled.
    ECHILD: os.constants.errno.ECHILD,                      // Indicates that there are no child processes.
    ECONNABORTED: os.constants.errno.ECONNABORTED,          // Indicates that the network connection has been aborted.
    ECONNREFUSED: os.constants.errno.ECONNREFUSED,          // Indicates that the network connection has been refused.
    ECONNRESET: os.constants.errno.ECONNRESET,              // Indicates that the network connection has been reset.
    EDEADLK: os.constants.errno.EDEADLK,                    // Indicates that a resource deadlock has been avoided.
    EDESTADDRREQ: os.constants.errno.EDESTADDRREQ,          // Indicates that a destination address is required.
    EDOM: os.constants.errno.EDOM,                          // Indicates that an argument is out of the domain of the function.
    EDQUOT: os.constants.errno.EDQUOT,                      // Indicates that the disk quota has been exceeded.
    EEXIST: os.constants.errno.EEXIST,                      // Indicates that the file already exists.
    EFAULT: os.constants.errno.EFAULT,                      // Indicates an invalid pointer address.
    EFBIG: os.constants.errno.EFBIG,                        // Indicates that the file is too large.
    EHOSTUNREACH: os.constants.errno.EHOSTUNREACH,          // Indicates that the host is unreachable.
    EIDRM: os.constants.errno.EIDRM,                        // Indicates that the identifier has been removed.
    EILSEQ: os.constants.errno.EILSEQ,                      // Indicates an illegal byte sequence.
    EINPROGRESS: os.constants.errno.EINPROGRESS,            // Indicates that an operation is already in progress.
    EINTR: os.constants.errno.EINTR,                        // Indicates that a function call was interrupted.
    EINVAL: os.constants.errno.EINVAL,                      // Indicates that an invalid argument was provided.
    EIO: os.constants.errno.EIO,                            // Indicates an otherwise unspecified I/O error.
    EISCONN: os.constants.errno.EISCONN,                    // Indicates that the socket is connected.
    EISDIR: os.constants.errno.EISDIR,                      // Indicates that the path is a directory.
    ELOOP: os.constants.errno.ELOOP,                        // Indicates too many levels of symbolic links in a path.
    EMFILE: os.constants.errno.EMFILE,                      // Indicates that there are too many open files.
    EMLINK: os.constants.errno.EMLINK,                      // Indicates that there are too many hard links to a file.
    EMSGSIZE: os.constants.errno.EMSGSIZE,                  // Indicates that the provided message is too long.
    EMULTIHOP: os.constants.errno.EMULTIHOP,                // Indicates that a multihop was attempted.
    ENAMETOOLONG: os.constants.errno.ENAMETOOLONG,          // Indicates that the filename is too long.
    ENETDOWN: os.constants.errno.ENETDOWN,                  // Indicates that the network is down.
    ENETRESET: os.constants.errno.ENETRESET,                // Indicates that the connection has been aborted by the network.
    ENETUNREACH: os.constants.errno.ENETUNREACH,            // Indicates that the network is unreachable.
    ENFILE: os.constants.errno.ENFILE,                      // Indicates too many open files in the system.
    ENOBUFS: os.constants.errno.ENOBUFS,                    // Indicates that no buffer space is available.
    ENODATA: os.constants.errno.ENODATA,                    // Indicates that no message is available on the stream head read queue.
    ENODEV: os.constants.errno.ENODEV,                      // Indicates that there is no such device.
    ENOENT: os.constants.errno.ENOENT,                      // Indicates that there is no such file or directory.
    ENOEXEC: os.constants.errno.ENOEXEC,                    // Indicates an exec format error.
    ENOLCK: os.constants.errno.ENOLCK,                      // Indicates that there are no locks available.
    ENOLINK: os.constants.errno.ENOLINK,                    // Indications that a link has been severed.
    ENOMEM: os.constants.errno.ENOMEM,                      // Indicates that there is not enough space.
    ENOMSG: os.constants.errno.ENOMSG,                      // Indicates that there is no message of the desired type.
    ENOPROTOOPT: os.constants.errno.ENOPROTOOPT,            // Indicates that a given protocol is not available.
    ENOSPC: os.constants.errno.ENOSPC,                      // Indicates that there is no space available on the device.
    ENOSR: os.constants.errno.ENOSR,                        // Indicates that there are no stream resources available.
    ENOSTR: os.constants.errno.ENOSTR,                      // Indicates that a given resource is not a stream.
    ENOSYS: os.constants.errno.ENOSYS,                      // Indicates that a function has not been implemented.
    ENOTCONN: os.constants.errno.ENOTCONN,                  // Indicates that the socket is not connected.
    ENOTDIR: os.constants.errno.ENOTDIR,                    // Indicates that the path is not a directory.
    ENOTEMPTY: os.constants.errno.ENOTEMPTY,                // Indicates that the directory is not empty.
    ENOTSOCK: os.constants.errno.ENOTSOCK,                  // Indicates that the given item is not a socket.
    ENOTSUP: os.constants.errno.ENOTSUP,                    // Indicates that a given operation is not supported.
    ENOTTY: os.constants.errno.ENOTTY,                      // Indicates an inappropriate I/O control operation.
    ENXIO: os.constants.errno.ENXIO,                        // Indicates no such device or address.
    EOPNOTSUPP: os.constants.errno.EOPNOTSUPP,              // Indicates that an operation is not supported on the socket. Note that while ENOTSUP and EOPNOTSUPP have the same value on Linux, according to POSIX.1 these error values should be distinct.)
    EOVERFLOW: os.constants.errno.EOVERFLOW,                // Indicates that a value is too large to be stored in a given data type.
    EPERM: os.constants.errno.EPERM,                        // Indicates that the operation is not permitted.
    EPIPE: os.constants.errno.EPIPE,                        // Indicates a broken pipe.
    EPROTO: os.constants.errno.EPROTO,                      // Indicates a protocol error.
    EPROTONOSUPPORT: os.constants.errno.EPROTONOSUPPORT,    // Indicates that a protocol is not supported.
    EPROTOTYPE: os.constants.errno.EPROTOTYPE,              // Indicates the wrong type of protocol for a socket.
    ERANGE: os.constants.errno.ERANGE,                      // Indicates that the results are too large.
    EROFS: os.constants.errno.EROFS,                        // Indicates that the file system is read only.
    ESPIPE: os.constants.errno.ESPIPE,                      // Indicates an invalid seek operation.
    ESRCH: os.constants.errno.ESRCH,                        // Indicates that there is no such process.
    ESTALE: os.constants.errno.ESTALE,                      // Indicates that the file handle is stale.
    ETIME: os.constants.errno.ETIME,                        // Indicates an expired timer.
    ETIMEDOUT: os.constants.errno.ETIMEDOUT,                // Indicates that the connection timed out.
    ETXTBSY: os.constants.errno.ETXTBSY,                    // Indicates that a text file is busy.
    EWOULDBLOCK: os.constants.errno.EWOULDBLOCK,            // Indicates that the operation would block.
    EXDEV: os.constants.errno.EXDEV,                        // Indicates an improper link.
};

const dlopen = {
    RTLD_LAZY: os.constants.dlopen.RTLD_LAZY,           // Perform lazy binding. Node.js sets this flag by default.
    RTLD_NOW: os.constants.dlopen.RTLD_NOW,             // Resolve all undefined symbols in the library before dlopen(3) returns.
    RTLD_GLOBAL: os.constants.dlopen.RTLD_GLOBAL,       // Symbols defined by the library will be made available for symbol resolution of subsequently loaded libraries.
    RTLD_LOCAL: os.constants.dlopen.RTLD_LOCAL,         // The converse of RTLD_GLOBAL. This is the default behavior if neither flag is specified.
    RTLD_DEEPBIND: os.constants.dlopen.RTLD_DEEPBIND,   // Make a self-contained library use its own symbols in preference to symbols from previously loaded libraries.
};

const priority = {
    PRIORITY_LOW: os.constants.priority.PRIORITY_LOW,                   // The lowest process scheduling priority. This corresponds to IDLE_PRIORITY_CLASS on Windows, and a nice value of 19 on all other platforms.
    PRIORITY_BELOW_NORMAL: os.constants.priority.PRIORITY_BELOW_NORMAL, // The process scheduling priority above PRIORITY_LOW and below PRIORITY_NORMAL. This corresponds to BELOW_NORMAL_PRIORITY_CLASS on Windows, and a nice value of 10 on all other platforms.
    PRIORITY_NORMAL: os.constants.priority.PRIORITY_NORMAL,             // The default process scheduling priority. This corresponds to NORMAL_PRIORITY_CLASS on Windows, and a nice value of 0 on all other platforms.
    PRIORITY_ABOVE_NORMAL: os.constants.priority.PRIORITY_ABOVE_NORMAL, // The process scheduling priority above PRIORITY_NORMAL and below PRIORITY_HIGH. This corresponds to ABOVE_NORMAL_PRIORITY_CLASS on Windows, and a nice value of -7 on all other platforms.
    PRIORITY_HIGH: os.constants.priority.PRIORITY_HIGH,                 // The process scheduling priority above PRIORITY_ABOVE_NORMAL and below PRIORITY_HIGHEST. This corresponds to HIGH_PRIORITY_CLASS on Windows, and a nice value of -14 on all other platforms.
    PRIORITY_HIGHEST: os.constants.priority.PRIORITY_HIGHEST,           // The highest process scheduling priority. This corresponds to REALTIME_PRIORITY_CLASS on Windows, and a nice value of -20 on all other platforms.
};

const NodeOsJS = {
    EOL: os.EOL,
    arch: os.arch,
    constants: {
        signals,
        errno,
        dlopen,
        priority
    },
    cpus: os.cpus,
    endianness: os.endianness,
    freemem: os.freemem,
    getPriority: os.getPriority,
    homedir: os.homedir,
    hostname: os.hostname,
    loadavg: os.loadavg,
    networkInterfaces: os.networkInterfaces,
    platform: os.platform,
    release: os.release,
    setPriority: os.setPriority,
    tmpdir: os.tmpdir,
    totalmem: os.totalmem,
    type: os.type,
    uptime: os.uptime,
    userInfo: os.userInfo,
    };

export default NodeOsJS;