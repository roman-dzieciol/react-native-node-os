package com.reactlibrary;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.common.MapBuilder;

import java.util.Map;

public class NodeOsModule extends ReactContextBaseJavaModule {

    private final ReactApplicationContext reactContext;
    private final NodeOsAndroid implementation;

    public NodeOsModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
        this.implementation = new NodeOsAndroid(reactContext);
    }

    @Override
    public String getName() {
        return "NodeOs";
    }

    private Map<String, Object> getConstantsSignals() {
        final Map<String, Object> signals = MapBuilder.newHashMap();
        signals.put("SIGHUP", android.system.OsConstants.SIGHUP); // Sent to indicate when a controlling terminal is closed or a parent process exits.
        signals.put("SIGINT", android.system.OsConstants.SIGINT); // Sent to indicate when a user wishes to interrupt a process ((Ctrl+C)).
        signals.put("SIGQUIT", android.system.OsConstants.SIGQUIT); // Sent to indicate when a user wishes to terminate a process and perform a core dump.
        signals.put("SIGILL", android.system.OsConstants.SIGILL); // Sent to a process to notify that it has attempted to perform an illegal, malformed, unknown, or privileged instruction.
        signals.put("SIGTRAP", android.system.OsConstants.SIGTRAP); // Sent to a process when an exception has occurred.
        signals.put("SIGABRT", android.system.OsConstants.SIGABRT); // Sent to a process to request that it abort.
        signals.put("SIGIOT", android.system.OsConstants.SIGABRT); // Synonym for SIGABRT
        signals.put("SIGBUS", android.system.OsConstants.SIGBUS); // Sent to a process to notify that it has caused a bus error.
        signals.put("SIGFPE", android.system.OsConstants.SIGFPE); // Sent to a process to notify that it has performed an illegal arithmetic operation.
        signals.put("SIGKILL", android.system.OsConstants.SIGKILL); // Sent to a process to terminate it immediately.
        signals.put("SIGUSR1", android.system.OsConstants.SIGUSR1); // Sent to a process to identify user-defined conditions.
        signals.put("SIGUSR2", android.system.OsConstants.SIGUSR2); // Sent to a process to identify user-defined conditions.
        signals.put("SIGSEGV", android.system.OsConstants.SIGSEGV); // Sent to a process to notify of a segmentation fault.
        signals.put("SIGPIPE", android.system.OsConstants.SIGPIPE); // Sent to a process when it has attempted to write to a disconnected pipe.
        signals.put("SIGALRM", android.system.OsConstants.SIGALRM); // Sent to a process when a system timer elapses.
        signals.put("SIGTERM", android.system.OsConstants.SIGTERM); // Sent to a process to request termination.
        signals.put("SIGCHLD", android.system.OsConstants.SIGCHLD); // Sent to a process when a child process terminates.
        signals.put("SIGSTKFLT", android.system.OsConstants.SIGSTKFLT); // Sent to a process to indicate a stack fault on a coprocessor.
        signals.put("SIGCONT", android.system.OsConstants.SIGCONT); // Sent to instruct the operating system to continue a paused process.
        signals.put("SIGSTOP", android.system.OsConstants.SIGSTOP); // Sent to instruct the operating system to halt a process.
        signals.put("SIGTSTP", android.system.OsConstants.SIGTSTP); // Sent to a process to request it to stop.
        //signals.put("SIGBREAK", android.system.OsConstants.SIGBREAK); // Sent to indicate when a user wishes to interrupt a process.
        signals.put("SIGTTIN", android.system.OsConstants.SIGTTIN); // Sent to a process when it reads from the TTY while in the background.
        signals.put("SIGTTOU", android.system.OsConstants.SIGTTOU); // Sent to a process when it writes to the TTY while in the background.
        signals.put("SIGURG", android.system.OsConstants.SIGURG); // Sent to a process when a socket has urgent data to read.
        signals.put("SIGXCPU", android.system.OsConstants.SIGXCPU); // Sent to a process when it has exceeded its limit on CPU usage.
        signals.put("SIGXFSZ", android.system.OsConstants.SIGXFSZ); // Sent to a process when it grows a file larger than the maximum allowed.
        signals.put("SIGVTALRM", android.system.OsConstants.SIGVTALRM); // Sent to a process when a virtual timer has elapsed.
        signals.put("SIGPROF", android.system.OsConstants.SIGPROF); // Sent to a process when a system timer has elapsed.
        signals.put("SIGWINCH", android.system.OsConstants.SIGWINCH); // Sent to a process when the controlling terminal has changed its size.
        signals.put("SIGIO", android.system.OsConstants.SIGIO); // Sent to a process when I/O is available.
        signals.put("SIGPOLL", android.system.OsConstants.SIGIO); // Synonym for SIGIO
        //signals.put("SIGLOST", android.system.OsConstants.SIGLOST); // Sent to a process when a file lock has been lost.
        signals.put("SIGPWR", android.system.OsConstants.SIGPWR); // Sent to a process to notify of a power failure.
        signals.put("SIGINFO", android.system.OsConstants.SIGPWR); // Synonym for SIGPWR
        signals.put("SIGSYS", android.system.OsConstants.SIGSYS); // Sent to a process to notify of a bad argument.
        signals.put("SIGUNUSED", android.system.OsConstants.SIGSYS); // Synonym for SIGSYS
        return signals;
    }

    private Map<String, Object> getConstantsErrNo() {
        final Map<String, Object> errno = MapBuilder.newHashMap();
        errno.put("E2BIG", android.system.OsConstants.E2BIG); // Indicates that the list of arguments is longer than expected.
        errno.put("EACCES", android.system.OsConstants.EACCES); // Indicates that the operation did not have sufficient permissions.
        errno.put("EADDRINUSE", android.system.OsConstants.EADDRINUSE); // Indicates that the network address is already in use.
        errno.put("EADDRNOTAVAIL", android.system.OsConstants.EADDRNOTAVAIL); // Indicates that the network address is currently unavailable for use.
        errno.put("EAFNOSUPPORT", android.system.OsConstants.EAFNOSUPPORT); // Indicates that the network address family is not supported.
        errno.put("EAGAIN", android.system.OsConstants.EAGAIN); // Indicates that there is currently no data available and to try the operation again later.
        errno.put("EALREADY", android.system.OsConstants.EALREADY); // Indicates that the socket already has a pending connection in progress.
        errno.put("EBADF", android.system.OsConstants.EBADF); // Indicates that a file descriptor is not valid.
        errno.put("EBADMSG", android.system.OsConstants.EBADMSG); // Indicates an invalid data message.
        errno.put("EBUSY", android.system.OsConstants.EBUSY); // Indicates that a device or resource is busy.
        errno.put("ECANCELED", android.system.OsConstants.ECANCELED); // Indicates that an operation was canceled.
        errno.put("ECHILD", android.system.OsConstants.ECHILD); // Indicates that there are no child processes.
        errno.put("ECONNABORTED", android.system.OsConstants.ECONNABORTED); // Indicates that the network connection has been aborted.
        errno.put("ECONNREFUSED", android.system.OsConstants.ECONNREFUSED); // Indicates that the network connection has been refused.
        errno.put("ECONNRESET", android.system.OsConstants.ECONNRESET); // Indicates that the network connection has been reset.
        errno.put("EDEADLK", android.system.OsConstants.EDEADLK); // Indicates that a resource deadlock has been avoided.
        errno.put("EDESTADDRREQ", android.system.OsConstants.EDESTADDRREQ); // Indicates that a destination address is required.
        errno.put("EDOM", android.system.OsConstants.EDOM); // Indicates that an argument is out of the domain of the function.
        errno.put("EDQUOT", android.system.OsConstants.EDQUOT); // Indicates that the disk quota has been exceeded.
        errno.put("EEXIST", android.system.OsConstants.EEXIST); // Indicates that the file already exists.
        errno.put("EFAULT", android.system.OsConstants.EFAULT); // Indicates an invalid pointer address.
        errno.put("EFBIG", android.system.OsConstants.EFBIG); // Indicates that the file is too large.
        errno.put("EHOSTUNREACH", android.system.OsConstants.EHOSTUNREACH); // Indicates that the host is unreachable.
        errno.put("EIDRM", android.system.OsConstants.EIDRM); // Indicates that the identifier has been removed.
        errno.put("EILSEQ", android.system.OsConstants.EILSEQ); // Indicates an illegal byte sequence.
        errno.put("EINPROGRESS", android.system.OsConstants.EINPROGRESS); // Indicates that an operation is already in progress.
        errno.put("EINTR", android.system.OsConstants.EINTR); // Indicates that a function call was interrupted.
        errno.put("EINVAL", android.system.OsConstants.EINVAL); // Indicates that an invalid argument was provided.
        errno.put("EIO", android.system.OsConstants.EIO); // Indicates an otherwise unspecified I/O error.
        errno.put("EISCONN", android.system.OsConstants.EISCONN); // Indicates that the socket is connected.
        errno.put("EISDIR", android.system.OsConstants.EISDIR); // Indicates that the path is a directory.
        errno.put("ELOOP", android.system.OsConstants.ELOOP); // Indicates too many levels of symbolic links in a path.
        errno.put("EMFILE", android.system.OsConstants.EMFILE); // Indicates that there are too many open files.
        errno.put("EMLINK", android.system.OsConstants.EMLINK); // Indicates that there are too many hard links to a file.
        errno.put("EMSGSIZE", android.system.OsConstants.EMSGSIZE); // Indicates that the provided message is too long.
        errno.put("EMULTIHOP", android.system.OsConstants.EMULTIHOP); // Indicates that a multihop was attempted.
        errno.put("ENAMETOOLONG", android.system.OsConstants.ENAMETOOLONG); // Indicates that the filename is too long.
        errno.put("ENETDOWN", android.system.OsConstants.ENETDOWN); // Indicates that the network is down.
        errno.put("ENETRESET", android.system.OsConstants.ENETRESET); // Indicates that the connection has been aborted by the network.
        errno.put("ENETUNREACH", android.system.OsConstants.ENETUNREACH); // Indicates that the network is unreachable.
        errno.put("ENFILE", android.system.OsConstants.ENFILE); // Indicates too many open files in the system.
        errno.put("ENOBUFS", android.system.OsConstants.ENOBUFS); // Indicates that no buffer space is available.
        errno.put("ENODATA", android.system.OsConstants.ENODATA); // Indicates that no message is available on the stream head read queue.
        errno.put("ENODEV", android.system.OsConstants.ENODEV); // Indicates that there is no such device.
        errno.put("ENOENT", android.system.OsConstants.ENOENT); // Indicates that there is no such file or directory.
        errno.put("ENOEXEC", android.system.OsConstants.ENOEXEC); // Indicates an exec format error.
        errno.put("ENOLCK", android.system.OsConstants.ENOLCK); // Indicates that there are no locks available.
        errno.put("ENOLINK", android.system.OsConstants.ENOLINK); // Indications that a link has been severed.
        errno.put("ENOMEM", android.system.OsConstants.ENOMEM); // Indicates that there is not enough space.
        errno.put("ENOMSG", android.system.OsConstants.ENOMSG); // Indicates that there is no message of the desired type.
        errno.put("ENOPROTOOPT", android.system.OsConstants.ENOPROTOOPT); // Indicates that a given protocol is not available.
        errno.put("ENOSPC", android.system.OsConstants.ENOSPC); // Indicates that there is no space available on the device.
        errno.put("ENOSR", android.system.OsConstants.ENOSR); // Indicates that there are no stream resources available.
        errno.put("ENOSTR", android.system.OsConstants.ENOSTR); // Indicates that a given resource is not a stream.
        errno.put("ENOSYS", android.system.OsConstants.ENOSYS); // Indicates that a function has not been implemented.
        errno.put("ENOTCONN", android.system.OsConstants.ENOTCONN); // Indicates that the socket is not connected.
        errno.put("ENOTDIR", android.system.OsConstants.ENOTDIR); // Indicates that the path is not a directory.
        errno.put("ENOTEMPTY", android.system.OsConstants.ENOTEMPTY); // Indicates that the directory is not empty.
        errno.put("ENOTSOCK", android.system.OsConstants.ENOTSOCK); // Indicates that the given item is not a socket.
        errno.put("ENOTSUP", android.system.OsConstants.ENOTSUP); // Indicates that a given operation is not supported.
        errno.put("ENOTTY", android.system.OsConstants.ENOTTY); // Indicates an inappropriate I/O control operation.
        errno.put("ENXIO", android.system.OsConstants.ENXIO); // Indicates no such device or address.
        errno.put("EOPNOTSUPP", android.system.OsConstants.EOPNOTSUPP); // Indicates that an operation is not supported on the socket. Note that while ENOTSUP and EOPNOTSUPP have the same value on Linux, according to POSIX.1 these error values should be distinct.)
        errno.put("EOVERFLOW", android.system.OsConstants.EOVERFLOW); // Indicates that a value is too large to be stored in a given data type.
        errno.put("EPERM", android.system.OsConstants.EPERM); // Indicates that the operation is not permitted.
        errno.put("EPIPE", android.system.OsConstants.EPIPE); // Indicates a broken pipe.
        errno.put("EPROTO", android.system.OsConstants.EPROTO); // Indicates a protocol error.
        errno.put("EPROTONOSUPPORT", android.system.OsConstants.EPROTONOSUPPORT); // Indicates that a protocol is not supported.
        errno.put("EPROTOTYPE", android.system.OsConstants.EPROTOTYPE); // Indicates the wrong type of protocol for a socket.
        errno.put("ERANGE", android.system.OsConstants.ERANGE); // Indicates that the results are too large.
        errno.put("EROFS", android.system.OsConstants.EROFS); // Indicates that the file system is read only.
        errno.put("ESPIPE", android.system.OsConstants.ESPIPE); // Indicates an invalid seek operation.
        errno.put("ESRCH", android.system.OsConstants.ESRCH); // Indicates that there is no such process.
        errno.put("ESTALE", android.system.OsConstants.ESTALE); // Indicates that the file handle is stale.
        errno.put("ETIME", android.system.OsConstants.ETIME); // Indicates an expired timer.
        errno.put("ETIMEDOUT", android.system.OsConstants.ETIMEDOUT); // Indicates that the connection timed out.
        errno.put("ETXTBSY", android.system.OsConstants.ETXTBSY); // Indicates that a text file is busy.
        //errno.put("EWOULDBLOCK", android.system.OsConstants.EWOULDBLOCK); // Indicates that the operation would block.
        errno.put("EXDEV", android.system.OsConstants.EXDEV); // Indicates an improper link.
        return errno;
    }

    private Map<String, Object> getConstantsDlOpen() {
        final Map<String, Object> dlopen = MapBuilder.newHashMap();
        //    dlopen.put("RTLD_NOW", RTLD_NOW); // Resolve all undefined symbols in the library before dlopen(3) returns.
        //    dlopen.put("RTLD_GLOBAL", RTLD_GLOBAL); // Symbols defined by the library will be made available for symbol resolution of subsequently loaded libraries.
        //    dlopen.put("RTLD_LOCAL", RTLD_LOCAL); // The converse of RTLD_GLOBAL. This is the default behavior if neither flag is specified.
        //    dlopen.put("RTLD_DEEPBIND", RTLD_DEEPBIND); // Make a self-contained library use its own symbols in preference to symbols from previously loaded libraries.
        return dlopen;
    }

    private Map<String, Object> getConstantsPriority() {
        final Map<String, Object> priority = MapBuilder.newHashMap();
        priority.put("PRIORITY_LOW", 19); // The lowest process scheduling priority. This corresponds to IDLE_PRIORITY_CLASS on Windows, and a nice value of 19 on all other platforms.
        priority.put("PRIORITY_BELOW_NORMAL", 10); // The process scheduling priority above PRIORITY_LOW and below PRIORITY_NORMAL. This corresponds to BELOW_NORMAL_PRIORITY_CLASS on Windows, and a nice value of 10 on all other platforms.
        priority.put("PRIORITY_NORMAL", 0); // The default process scheduling priority. This corresponds to NORMAL_PRIORITY_CLASS on Windows, and a nice value of 0 on all other platforms.
        priority.put("PRIORITY_ABOVE_NORMAL", -7); // The process scheduling priority above PRIORITY_NORMAL and below PRIORITY_HIGH. This corresponds to ABOVE_NORMAL_PRIORITY_CLASS on Windows, and a nice value of -7 on all other platforms.
        priority.put("PRIORITY_HIGH", -14); // The process scheduling priority above PRIORITY_ABOVE_NORMAL and below PRIORITY_HIGHEST. This corresponds to HIGH_PRIORITY_CLASS on Windows, and a nice value of -14 on all other platforms.
        priority.put("PRIORITY_HIGHEST", -20); // The highest process scheduling priority. This corresponds to REALTIME_PRIORITY_CLASS on Windows, and a nice value of -20 on all other platforms.
        return priority;
    }

    /**
     * @return a map of constants this module exports to JS. Supports JSON types.
     */
    @Override
    public Map<String, Object> getConstants() {

        final Map<String, Object> constants = MapBuilder.newHashMap();
        constants.put("signals", getConstantsSignals());
        constants.put("errno", getConstantsErrNo());
        constants.put("dlopen", getConstantsDlOpen());
        constants.put("priority", getConstantsPriority());

        final Map<String, Object> result = MapBuilder.newHashMap();
        result.put("EOL", "\n");
        result.put("constants", constants);
        return result;
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    public ReadableArray cpus() {
        return implementation.cpus();
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    public Double freemem() {
        return implementation.freemem();
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    public Integer getPriority(Integer pid) {
        return null;
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    public String hostname() {
        return implementation.hostname();
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    public ReadableArray loadavg() {
        return implementation.loadavg();
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    public ReadableMap networkInterfaces() {
        return implementation.networkInterfaces();
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    public void setPriority(Integer pid, Integer priority) {
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    public Double uptime() {
        return implementation.uptime();
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    public ReadableMap userInfo(ReadableMap options) {
        return implementation.userInfo();
    }
}