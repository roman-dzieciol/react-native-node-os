#import "NodeOs.h"

#import <dlfcn.h>

@implementation NodeOs

RCT_EXPORT_MODULE(os)

+ (BOOL)requiresMainQueueSetup {
    return YES;
}

- (NSDictionary *)constantsToExport {
    return @{
        @"EOL": @"\n",
        @"constants": @{
                @"signals": @{
                        @"SIGHUP": @SIGHUP, // Sent to indicate when a controlling terminal is closed or a parent process exits.
                        @"SIGINT": @SIGINT, // Sent to indicate when a user wishes to interrupt a process ((Ctrl+C)).
                        @"SIGQUIT": @SIGQUIT, // Sent to indicate when a user wishes to terminate a process and perform a core dump.
                        @"SIGILL": @SIGILL, // Sent to a process to notify that it has attempted to perform an illegal, malformed, unknown, or privileged instruction.
                        @"SIGTRAP": @SIGTRAP, // Sent to a process when an exception has occurred.
                        @"SIGABRT": @SIGABRT, // Sent to a process to request that it abort.
                        @"SIGIOT": @SIGIOT, // Synonym for SIGABRT
                        @"SIGBUS": @SIGBUS, // Sent to a process to notify that it has caused a bus error.
                        @"SIGFPE": @SIGFPE, // Sent to a process to notify that it has performed an illegal arithmetic operation.
                        @"SIGKILL": @SIGKILL, // Sent to a process to terminate it immediately.
                        @"SIGUSR1": @SIGUSR1, // Sent to a process to identify user-defined conditions.
                        @"SIGUSR2": @SIGUSR2, // Sent to a process to identify user-defined conditions.
                        @"SIGSEGV": @SIGSEGV, // Sent to a process to notify of a segmentation fault.
                        @"SIGPIPE": @SIGPIPE, // Sent to a process when it has attempted to write to a disconnected pipe.
                        @"SIGALRM": @SIGALRM, // Sent to a process when a system timer elapses.
                        @"SIGTERM": @SIGTERM, // Sent to a process to request termination.
                        @"SIGCHLD": @SIGCHLD, // Sent to a process when a child process terminates.
                        @"SIGSTKFLT": [NSNull null], // Sent to a process to indicate a stack fault on a coprocessor.
                        @"SIGCONT": @SIGCONT, // Sent to instruct the operating system to continue a paused process.
                        @"SIGSTOP": @SIGSTOP, // Sent to instruct the operating system to halt a process.
                        @"SIGTSTP": @SIGTSTP, // Sent to a process to request it to stop.
                        @"SIGBREAK": [NSNull null], // Sent to indicate when a user wishes to interrupt a process.
                        @"SIGTTIN": @SIGTTIN, // Sent to a process when it reads from the TTY while in the background.
                        @"SIGTTOU": @SIGTTOU, // Sent to a process when it writes to the TTY while in the background.
                        @"SIGURG": @SIGURG, // Sent to a process when a socket has urgent data to read.
                        @"SIGXCPU": @SIGXCPU, // Sent to a process when it has exceeded its limit on CPU usage.
                        @"SIGXFSZ": @SIGXFSZ, // Sent to a process when it grows a file larger than the maximum allowed.
                        @"SIGVTALRM": @SIGVTALRM, // Sent to a process when a virtual timer has elapsed.
                        @"SIGPROF": @SIGPROF, // Sent to a process when a system timer has elapsed.
                        @"SIGWINCH": @SIGWINCH, // Sent to a process when the controlling terminal has changed its size.
                        @"SIGIO": @SIGIO, // Sent to a process when I/O is available.
                        @"SIGPOLL": [NSNull null], // Synonym for SIGIO
                        @"SIGLOST": [NSNull null], // Sent to a process when a file lock has been lost.
                        @"SIGPWR": [NSNull null], // Sent to a process to notify of a power failure.
                        @"SIGINFO": @SIGINFO, // Synonym for SIGPWR
                        @"SIGSYS": @SIGSYS, // Sent to a process to notify of a bad argument.
                        @"SIGUNUSED": [NSNull null], // Synonym for SIGSYS
                },
                @"errno": @{
                        @"E2BIG": @E2BIG, // Indicates that the list of arguments is longer than expected.
                        @"EACCES": @EACCES, // Indicates that the operation did not have sufficient permissions.
                        @"EADDRINUSE": @EADDRINUSE, // Indicates that the network address is already in use.
                        @"EADDRNOTAVAIL": @EADDRNOTAVAIL, // Indicates that the network address is currently unavailable for use.
                        @"EAFNOSUPPORT": @EAFNOSUPPORT, // Indicates that the network address family is not supported.
                        @"EAGAIN": @EAGAIN, // Indicates that there is currently no data available and to try the operation again later.
                        @"EALREADY": @EALREADY, // Indicates that the socket already has a pending connection in progress.
                        @"EBADF": @EBADF, // Indicates that a file descriptor is not valid.
                        @"EBADMSG": @EBADMSG, // Indicates an invalid data message.
                        @"EBUSY": @EBUSY, // Indicates that a device or resource is busy.
                        @"ECANCELED": @ECANCELED, // Indicates that an operation was canceled.
                        @"ECHILD": @ECHILD, // Indicates that there are no child processes.
                        @"ECONNABORTED": @ECONNABORTED, // Indicates that the network connection has been aborted.
                        @"ECONNREFUSED": @ECONNREFUSED, // Indicates that the network connection has been refused.
                        @"ECONNRESET": @ECONNRESET, // Indicates that the network connection has been reset.
                        @"EDEADLK": @EDEADLK, // Indicates that a resource deadlock has been avoided.
                        @"EDESTADDRREQ": @EDESTADDRREQ, // Indicates that a destination address is required.
                        @"EDOM": @EDOM, // Indicates that an argument is out of the domain of the function.
                        @"EDQUOT": @EDQUOT, // Indicates that the disk quota has been exceeded.
                        @"EEXIST": @EEXIST, // Indicates that the file already exists.
                        @"EFAULT": @EFAULT, // Indicates an invalid pointer address.
                        @"EFBIG": @EFBIG, // Indicates that the file is too large.
                        @"EHOSTUNREACH": @EHOSTUNREACH, // Indicates that the host is unreachable.
                        @"EIDRM": @EIDRM, // Indicates that the identifier has been removed.
                        @"EILSEQ": @EILSEQ, // Indicates an illegal byte sequence.
                        @"EINPROGRESS": @EINPROGRESS, // Indicates that an operation is already in progress.
                        @"EINTR": @EINTR, // Indicates that a function call was interrupted.
                        @"EINVAL": @EINVAL, // Indicates that an invalid argument was provided.
                        @"EIO": @EIO, // Indicates an otherwise unspecified I/O error.
                        @"EISCONN": @EISCONN, // Indicates that the socket is connected.
                        @"EISDIR": @EISDIR, // Indicates that the path is a directory.
                        @"ELOOP": @ELOOP, // Indicates too many levels of symbolic links in a path.
                        @"EMFILE": @EMFILE, // Indicates that there are too many open files.
                        @"EMLINK": @EMLINK, // Indicates that there are too many hard links to a file.
                        @"EMSGSIZE": @EMSGSIZE, // Indicates that the provided message is too long.
                        @"EMULTIHOP": @EMULTIHOP, // Indicates that a multihop was attempted.
                        @"ENAMETOOLONG": @ENAMETOOLONG, // Indicates that the filename is too long.
                        @"ENETDOWN": @ENETDOWN, // Indicates that the network is down.
                        @"ENETRESET": @ENETRESET, // Indicates that the connection has been aborted by the network.
                        @"ENETUNREACH": @ENETUNREACH, // Indicates that the network is unreachable.
                        @"ENFILE": @ENFILE, // Indicates too many open files in the system.
                        @"ENOBUFS": @ENOBUFS, // Indicates that no buffer space is available.
                        @"ENODATA": @ENODATA, // Indicates that no message is available on the stream head read queue.
                        @"ENODEV": @ENODEV, // Indicates that there is no such device.
                        @"ENOENT": @ENOENT, // Indicates that there is no such file or directory.
                        @"ENOEXEC": @ENOEXEC, // Indicates an exec format error.
                        @"ENOLCK": @ENOLCK, // Indicates that there are no locks available.
                        @"ENOLINK": @ENOLINK, // Indications that a link has been severed.
                        @"ENOMEM": @ENOMEM, // Indicates that there is not enough space.
                        @"ENOMSG": @ENOMSG, // Indicates that there is no message of the desired type.
                        @"ENOPROTOOPT": @ENOPROTOOPT, // Indicates that a given protocol is not available.
                        @"ENOSPC": @ENOSPC, // Indicates that there is no space available on the device.
                        @"ENOSR": @ENOSR, // Indicates that there are no stream resources available.
                        @"ENOSTR": @ENOSTR, // Indicates that a given resource is not a stream.
                        @"ENOSYS": @ENOSYS, // Indicates that a function has not been implemented.
                        @"ENOTCONN": @ENOTCONN, // Indicates that the socket is not connected.
                        @"ENOTDIR": @ENOTDIR, // Indicates that the path is not a directory.
                        @"ENOTEMPTY": @ENOTEMPTY, // Indicates that the directory is not empty.
                        @"ENOTSOCK": @ENOTSOCK, // Indicates that the given item is not a socket.
                        @"ENOTSUP": @ENOTSUP, // Indicates that a given operation is not supported.
                        @"ENOTTY": @ENOTTY, // Indicates an inappropriate I/O control operation.
                        @"ENXIO": @ENXIO, // Indicates no such device or address.
                        @"EOPNOTSUPP": @EOPNOTSUPP, // Indicates that an operation is not supported on the socket. Note that while ENOTSUP and EOPNOTSUPP have the same value on Linux, according to POSIX.1 these error values should be distinct.)
                        @"EOVERFLOW": @EOVERFLOW, // Indicates that a value is too large to be stored in a given data type.
                        @"EPERM": @EPERM, // Indicates that the operation is not permitted.
                        @"EPIPE": @EPIPE, // Indicates a broken pipe.
                        @"EPROTO": @EPROTO, // Indicates a protocol error.
                        @"EPROTONOSUPPORT": @EPROTONOSUPPORT, // Indicates that a protocol is not supported.
                        @"EPROTOTYPE": @EPROTOTYPE, // Indicates the wrong type of protocol for a socket.
                        @"ERANGE": @ERANGE, // Indicates that the results are too large.
                        @"EROFS": @EROFS, // Indicates that the file system is read only.
                        @"ESPIPE": @ESPIPE, // Indicates an invalid seek operation.
                        @"ESRCH": @ESRCH, // Indicates that there is no such process.
                        @"ESTALE": @ESTALE, // Indicates that the file handle is stale.
                        @"ETIME": @ETIME, // Indicates an expired timer.
                        @"ETIMEDOUT": @ETIMEDOUT, // Indicates that the connection timed out.
                        @"ETXTBSY": @ETXTBSY, // Indicates that a text file is busy.
                        @"EWOULDBLOCK": @EWOULDBLOCK, // Indicates that the operation would block.
                        @"EXDEV": @EXDEV, // Indicates an improper link.
                },
                @"dlopen": @{
                        @"RTLD_LAZY": @RTLD_LAZY, // Perform lazy binding. Node.js sets this flag by default.
                        @"RTLD_NOW": @RTLD_NOW, // Resolve all undefined symbols in the library before dlopen(3) returns.
                        @"RTLD_GLOBAL": @RTLD_GLOBAL, // Symbols defined by the library will be made available for symbol resolution of subsequently loaded libraries.
                        @"RTLD_LOCAL": @RTLD_LOCAL, // The converse of RTLD_GLOBAL. This is the default behavior if neither flag is specified.
                        @"RTLD_DEEPBIND": [NSNull null], // Make a self-contained library use its own symbols in preference to symbols from previously loaded libraries.
                        
                },
                @"priority": @{
                        @"PRIORITY_LOW": @19, // The lowest process scheduling priority. This corresponds to IDLE_PRIORITY_CLASS on Windows, and a nice value of 19 on all other platforms.
                        @"PRIORITY_BELOW_NORMAL": @10, // The process scheduling priority above PRIORITY_LOW and below PRIORITY_NORMAL. This corresponds to BELOW_NORMAL_PRIORITY_CLASS on Windows, and a nice value of 10 on all other platforms.
                        @"PRIORITY_NORMAL": @0, // The default process scheduling priority. This corresponds to NORMAL_PRIORITY_CLASS on Windows, and a nice value of 0 on all other platforms.
                        @"PRIORITY_ABOVE_NORMAL": @-7, // The process scheduling priority above PRIORITY_NORMAL and below PRIORITY_HIGH. This corresponds to ABOVE_NORMAL_PRIORITY_CLASS on Windows, and a nice value of -7 on all other platforms.
                        @"PRIORITY_HIGH": @-14, // The process scheduling priority above PRIORITY_ABOVE_NORMAL and below PRIORITY_HIGHEST. This corresponds to HIGH_PRIORITY_CLASS on Windows, and a nice value of -14 on all other platforms.
                        @"PRIORITY_HIGHEST": @-20, // The highest process scheduling priority. This corresponds to REALTIME_PRIORITY_CLASS on Windows, and a nice value of -20 on all other platforms.
                        
                },
        },
    };
    
}

@end
