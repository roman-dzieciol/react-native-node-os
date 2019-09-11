import {NativeModules} from 'react-native';

const mockCpus = [
  {
    model: 'Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz',
    speed: 2926,
    times: {
      user: 252020,
      nice: 0,
      sys: 30340,
      idle: 1070356870,
      irq: 0,
    },
  },
  {
    model: 'Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz',
    speed: 2926,
    times: {
      user: 306960,
      nice: 0,
      sys: 26980,
      idle: 1071569080,
      irq: 0,
    },
  },
];

const mockNetworkInterfaces = {
  lo: [
    {
      address: '127.0.0.1',
      netmask: '255.0.0.0',
      family: 'IPv4',
      mac: '00:00:00:00:00:00',
      internal: true,
      cidr: '127.0.0.1/8',
    },
    {
      address: '::1',
      netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',
      family: 'IPv6',
      mac: '00:00:00:00:00:00',
      scopeid: 0,
      internal: true,
      cidr: '::1/128',
    },
  ],
  eth0: [
    {
      address: '192.168.1.108',
      netmask: '255.255.255.0',
      family: 'IPv4',
      mac: '01:02:03:0a:0b:0c',
      internal: false,
      cidr: '192.168.1.108/24',
    },
    {
      address: 'fe80::a00:27ff:fe4e:66a1',
      netmask: 'ffff:ffff:ffff:ffff::',
      family: 'IPv6',
      mac: '01:02:03:0a:0b:0c',
      scopeid: 1,
      internal: false,
      cidr: 'fe80::a00:27ff:fe4e:66a1/64',
    },
  ],
};

const mockSignals = {
  SIGHUP: 1, // Sent to indicate when a controlling terminal is closed or a parent process exits.
  SIGINT: 2, // Sent to indicate when a user wishes to interrupt a process ((Ctrl+C)).
  SIGQUIT: 3, // Sent to indicate when a user wishes to terminate a process and perform a core dump.
  SIGILL: 4, // Sent to a process to notify that it has attempted to perform an illegal, malformed, unknown, or privileged instruction.
  SIGTRAP: 5, // Sent to a process when an exception has occurred.
  SIGABRT: 6, // Sent to a process to request that it abort.
  SIGIOT: 6, // Synonym for SIGABRT
  SIGBUS: 8, // Sent to a process to notify that it has caused a bus error.
  SIGFPE: 9, // Sent to a process to notify that it has performed an illegal arithmetic operation.
  SIGKILL: 10, // Sent to a process to terminate it immediately.
  SIGUSR1: 11, // Sent to a process to identify user-defined conditions.
  SIGUSR2: 12, // Sent to a process to identify user-defined conditions.
  SIGSEGV: 13, // Sent to a process to notify of a segmentation fault.
  SIGPIPE: 14, // Sent to a process when it has attempted to write to a disconnected pipe.
  SIGALRM: 15, // Sent to a process when a system timer elapses.
  SIGTERM: 16, // Sent to a process to request termination.
  SIGCHLD: 17, // Sent to a process when a child process terminates.
  SIGSTKFLT: 18, // Sent to a process to indicate a stack fault on a coprocessor.
  SIGCONT: 19, // Sent to instruct the operating system to continue a paused process.
  SIGSTOP: 20, // Sent to instruct the operating system to halt a process.
  SIGTSTP: 21, // Sent to a process to request it to stop.
  SIGBREAK: 22, // Sent to indicate when a user wishes to interrupt a process.
  SIGTTIN: 23, // Sent to a process when it reads from the TTY while in the background.
  SIGTTOU: 24, // Sent to a process when it writes to the TTY while in the background.
  SIGURG: 25, // Sent to a process when a socket has urgent data to read.
  SIGXCPU: 26, // Sent to a process when it has exceeded its limit on CPU usage.
  SIGXFSZ: 27, // Sent to a process when it grows a file larger than the maximum allowed.
  SIGVTALRM: 28, // Sent to a process when a virtual timer has elapsed.
  SIGPROF: 29, // Sent to a process when a system timer has elapsed.
  SIGWINCH: 30, // Sent to a process when the controlling terminal has changed its size.
  SIGIO: 31, // Sent to a process when I/O is available.
  SIGPOLL: 31, // Synonym for SIGIO
  SIGLOST: 33, // Sent to a process when a file lock has been lost.
  SIGPWR: 34, // Sent to a process to notify of a power failure.
  SIGINFO: 34, // Synonym for SIGPWR
  SIGSYS: 36, // Sent to a process to notify of a bad argument.
  SIGUNUSED: 36, // Synonym for SIGSYS
};

const mockErrno = {
  E2BIG: 1, // Indicates that the list of arguments is longer than expected.
  EACCES: 2, // Indicates that the operation did not have sufficient permissions.
  EADDRINUSE: 3, // Indicates that the network address is already in use.
  EADDRNOTAVAIL: 4, // Indicates that the network address is currently unavailable for use.
  EAFNOSUPPORT: 5, // Indicates that the network address family is not supported.
  EAGAIN: 6, // Indicates that there is currently no data available and to try the operation again later.
  EALREADY: 7, // Indicates that the socket already has a pending connection in progress.
  EBADF: 8, // Indicates that a file descriptor is not valid.
  EBADMSG: 9, // Indicates an invalid data message.
  EBUSY: 10, // Indicates that a device or resource is busy.
  ECANCELED: 11, // Indicates that an operation was canceled.
  ECHILD: 12, // Indicates that there are no child processes.
  ECONNABORTED: 13, // Indicates that the network connection has been aborted.
  ECONNREFUSED: 14, // Indicates that the network connection has been refused.
  ECONNRESET: 15, // Indicates that the network connection has been reset.
  EDEADLK: 16, // Indicates that a resource deadlock has been avoided.
  EDESTADDRREQ: 17, // Indicates that a destination address is required.
  EDOM: 18, // Indicates that an argument is out of the domain of the function.
  EDQUOT: 19, // Indicates that the disk quota has been exceeded.
  EEXIST: 20, // Indicates that the file already exists.
  EFAULT: 21, // Indicates an invalid pointer address.
  EFBIG: 22, // Indicates that the file is too large.
  EHOSTUNREACH: 23, // Indicates that the host is unreachable.
  EIDRM: 24, // Indicates that the identifier has been removed.
  EILSEQ: 25, // Indicates an illegal byte sequence.
  EINPROGRESS: 26, // Indicates that an operation is already in progress.
  EINTR: 27, // Indicates that a function call was interrupted.
  EINVAL: 28, // Indicates that an invalid argument was provided.
  EIO: 29, // Indicates an otherwise unspecified I/O error.
  EISCONN: 30, // Indicates that the socket is connected.
  EISDIR: 31, // Indicates that the path is a directory.
  ELOOP: 32, // Indicates too many levels of symbolic links in a path.
  EMFILE: 33, // Indicates that there are too many open files.
  EMLINK: 34, // Indicates that there are too many hard links to a file.
  EMSGSIZE: 35, // Indicates that the provided message is too long.
  EMULTIHOP: 36, // Indicates that a multihop was attempted.
  ENAMETOOLONG: 37, // Indicates that the filename is too long.
  ENETDOWN: 38, // Indicates that the network is down.
  ENETRESET: 39, // Indicates that the connection has been aborted by the network.
  ENETUNREACH: 40, // Indicates that the network is unreachable.
  ENFILE: 41, // Indicates too many open files in the system.
  ENOBUFS: 42, // Indicates that no buffer space is available.
  ENODATA: 43, // Indicates that no message is available on the stream head read queue.
  ENODEV: 44, // Indicates that there is no such device.
  ENOENT: 45, // Indicates that there is no such file or directory.
  ENOEXEC: 46, // Indicates an exec format error.
  ENOLCK: 47, // Indicates that there are no locks available.
  ENOLINK: 48, // Indications that a link has been severed.
  ENOMEM: 49, // Indicates that there is not enough space.
  ENOMSG: 50, // Indicates that there is no message of the desired type.
  ENOPROTOOPT: 51, // Indicates that a given protocol is not available.
  ENOSPC: 52, // Indicates that there is no space available on the device.
  ENOSR: 53, // Indicates that there are no stream resources available.
  ENOSTR: 54, // Indicates that a given resource is not a stream.
  ENOSYS: 55, // Indicates that a function has not been implemented.
  ENOTCONN: 56, // Indicates that the socket is not connected.
  ENOTDIR: 57, // Indicates that the path is not a directory.
  ENOTEMPTY: 58, // Indicates that the directory is not empty.
  ENOTSOCK: 59, // Indicates that the given item is not a socket.
  ENOTSUP: 60, // Indicates that a given operation is not supported.
  ENOTTY: 61, // Indicates an inappropriate I/O control operation.
  ENXIO: 62, // Indicates no such device or address.
  EOPNOTSUPP: 63, // Indicates that an operation is not supported on the socket. Note that while ENOTSUP and EOPNOTSUPP have the same value on Linux, according to POSIX.1 these error values should be distinct.)
  EOVERFLOW: 64, // Indicates that a value is too large to be stored in a given data type.
  EPERM: 65, // Indicates that the operation is not permitted.
  EPIPE: 66, // Indicates a broken pipe.
  EPROTO: 67, // Indicates a protocol error.
  EPROTONOSUPPORT: 68, // Indicates that a protocol is not supported.
  EPROTOTYPE: 69, // Indicates the wrong type of protocol for a socket.
  ERANGE: 70, // Indicates that the results are too large.
  EROFS: 71, // Indicates that the file system is read only.
  ESPIPE: 72, // Indicates an invalid seek operation.
  ESRCH: 73, // Indicates that there is no such process.
  ESTALE: 74, // Indicates that the file handle is stale.
  ETIME: 75, // Indicates an expired timer.
  ETIMEDOUT: 76, // Indicates that the connection timed out.
  ETXTBSY: 77, // Indicates that a text file is busy.
  EWOULDBLOCK: 78, // Indicates that the operation would block.
  EXDEV: 79, // Indicates an improper link.
};

const mockDlopen = {
  RTLD_LAZY: 1, // Perform lazy binding. Node.js sets this flag by default.
  RTLD_NOW: 2, // Resolve all undefined symbols in the library before dlopen(3) returns.
  RTLD_GLOBAL: 3, // Symbols defined by the library will be made available for symbol resolution of subsequently loaded libraries.
  RTLD_LOCAL: 4, // The converse of RTLD_GLOBAL. This is the default behavior if neither flag is specified.
  RTLD_DEEPBIND: 5, // Make a self-contained library use its own symbols in preference to symbols from previously loaded libraries.
};

const mockPriority = {
  PRIORITY_LOW: 1, // The lowest process scheduling priority. This corresponds to IDLE_PRIORITY_CLASS on Windows, and a nice value of 19 on all other platforms.
  PRIORITY_BELOW_NORMAL: 2, // The process scheduling priority above PRIORITY_LOW and below PRIORITY_NORMAL. This corresponds to BELOW_NORMAL_PRIORITY_CLASS on Windows, and a nice value of 10 on all other platforms.
  PRIORITY_NORMAL: 3, // The default process scheduling priority. This corresponds to NORMAL_PRIORITY_CLASS on Windows, and a nice value of 0 on all other platforms.
  PRIORITY_ABOVE_NORMAL: 4, // The process scheduling priority above PRIORITY_NORMAL and below PRIORITY_HIGH. This corresponds to ABOVE_NORMAL_PRIORITY_CLASS on Windows, and a nice value of -7 on all other platforms.
  PRIORITY_HIGH: 5, // The process scheduling priority above PRIORITY_ABOVE_NORMAL and below PRIORITY_HIGHEST. This corresponds to HIGH_PRIORITY_CLASS on Windows, and a nice value of -14 on all other platforms.
  PRIORITY_HIGHEST: 6, // The highest process scheduling priority. This corresponds to REALTIME_PRIORITY_CLASS on Windows, and a nice value of -20 on all other platforms.
};

jest.mock('NativeModules', () => ({
  os: {
    EOL: '\n',
    arch: jest.fn(() => {
      return 'x64';
    }),
    constants: {
      signals: mockSignals,
      errno: mockErrno,
      dlopen: mockDlopen,
      priority: mockPriority,
    },
    cpus: jest.fn(() => {
      return mockCpus;
    }),
    endianness: jest.fn(() => {
      return 'BE';
    }),
    freemem: jest.fn(() => {
      return 42;
    }),
    getPriority: jest.fn(pid => {
      return 1;
    }),
    homedir: jest.fn(() => {
      return 'HOME';
    }),
    hostname: jest.fn(() => {
      return 'hostname';
    }),
    loadavg: jest.fn(() => {
      return [1, 5, 15];
    }),
    networkInterfaces: jest.fn(() => {
      return mockNetworkInterfaces;
    }),
    platform: jest.fn(() => {
      return 'darwin';
    }),
    release: jest.fn(() => {
      return 'release';
    }),
    setPriority: jest.fn((pid, priority) => {}),
    tmpdir: jest.fn(() => {
      return 'tmp';
    }),
    totalmem: jest.fn(() => {
      return 42;
    }),
    type: jest.fn(() => {
      return 'Darwin';
    }),
    uptime: jest.fn(() => {
      return 42;
    }),
    userInfo: jest.fn(options => {
      return {
        username: 'username',
        uid: 'uid',
        gid: 'gid',
        shell: 'shell',
        homedir: 'homedir',
      };
    }),
  },
}));
