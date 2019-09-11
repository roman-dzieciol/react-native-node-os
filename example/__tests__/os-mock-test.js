import NodeOs from 'react-native-node-os';

it('has EOL', () => {
  expect(NodeOs.EOL).toEqual('\n');
});

it('returns arch()', () => {
  expect(NodeOs.arch()).toStrictEqual('x64');
});

it('has constants', () => {
  expect(NodeOs.constants.signals.SIGHUP).toEqual(expect.anything());
  expect(NodeOs.constants.signals.SIGINT).toEqual(expect.anything());
  expect(NodeOs.constants.signals.SIGQUIT).toEqual(expect.anything());
  expect(NodeOs.constants.signals.SIGILL).toEqual(expect.anything());
  expect(NodeOs.constants.signals.SIGTRAP).toEqual(expect.anything());
  expect(NodeOs.constants.signals.SIGABRT).toEqual(expect.anything());
  expect(NodeOs.constants.signals.SIGIOT).toEqual(expect.anything());
  expect(NodeOs.constants.signals.SIGBUS).toEqual(expect.anything());
  expect(NodeOs.constants.signals.SIGFPE).toEqual(expect.anything());
  expect(NodeOs.constants.signals.SIGKILL).toEqual(expect.anything());
  expect(NodeOs.constants.signals.SIGUSR1).toEqual(expect.anything());
  expect(NodeOs.constants.signals.SIGUSR2).toEqual(expect.anything());
  expect(NodeOs.constants.signals.SIGSEGV).toEqual(expect.anything());
  expect(NodeOs.constants.signals.SIGPIPE).toEqual(expect.anything());
  expect(NodeOs.constants.signals.SIGALRM).toEqual(expect.anything());
  expect(NodeOs.constants.signals.SIGTERM).toEqual(expect.anything());
  expect(NodeOs.constants.signals.SIGCHLD).toEqual(expect.anything());
  expect(NodeOs.constants.signals.SIGSTKFLT).toEqual(expect.anything());
  expect(NodeOs.constants.signals.SIGCONT).toEqual(expect.anything());
  expect(NodeOs.constants.signals.SIGSTOP).toEqual(expect.anything());
  expect(NodeOs.constants.signals.SIGTSTP).toEqual(expect.anything());
  expect(NodeOs.constants.signals.SIGBREAK).toEqual(expect.anything());
  expect(NodeOs.constants.signals.SIGTTIN).toEqual(expect.anything());
  expect(NodeOs.constants.signals.SIGTTOU).toEqual(expect.anything());
  expect(NodeOs.constants.signals.SIGURG).toEqual(expect.anything());
  expect(NodeOs.constants.signals.SIGXCPU).toEqual(expect.anything());
  expect(NodeOs.constants.signals.SIGXFSZ).toEqual(expect.anything());
  expect(NodeOs.constants.signals.SIGVTALRM).toEqual(expect.anything());
  expect(NodeOs.constants.signals.SIGPROF).toEqual(expect.anything());
  expect(NodeOs.constants.signals.SIGWINCH).toEqual(expect.anything());
  expect(NodeOs.constants.signals.SIGIO).toEqual(expect.anything());
  expect(NodeOs.constants.signals.SIGPOLL).toEqual(expect.anything());
  expect(NodeOs.constants.signals.SIGLOST).toEqual(expect.anything());
  expect(NodeOs.constants.signals.SIGPWR).toEqual(expect.anything());
  expect(NodeOs.constants.signals.SIGINFO).toEqual(expect.anything());
  expect(NodeOs.constants.signals.SIGSYS).toEqual(expect.anything());
  expect(NodeOs.constants.signals.SIGUNUSED).toEqual(expect.anything());

  expect(NodeOs.constants.errno.E2BIG).toEqual(expect.anything());
  expect(NodeOs.constants.errno.EACCES).toEqual(expect.anything());
  expect(NodeOs.constants.errno.EADDRINUSE).toEqual(expect.anything());
  expect(NodeOs.constants.errno.EADDRNOTAVAIL).toEqual(expect.anything());
  expect(NodeOs.constants.errno.EAFNOSUPPORT).toEqual(expect.anything());
  expect(NodeOs.constants.errno.EAGAIN).toEqual(expect.anything());
  expect(NodeOs.constants.errno.EALREADY).toEqual(expect.anything());
  expect(NodeOs.constants.errno.EBADF).toEqual(expect.anything());
  expect(NodeOs.constants.errno.EBADMSG).toEqual(expect.anything());
  expect(NodeOs.constants.errno.EBUSY).toEqual(expect.anything());
  expect(NodeOs.constants.errno.ECANCELED).toEqual(expect.anything());
  expect(NodeOs.constants.errno.ECHILD).toEqual(expect.anything());
  expect(NodeOs.constants.errno.ECONNABORTED).toEqual(expect.anything());
  expect(NodeOs.constants.errno.ECONNREFUSED).toEqual(expect.anything());
  expect(NodeOs.constants.errno.ECONNRESET).toEqual(expect.anything());
  expect(NodeOs.constants.errno.EDEADLK).toEqual(expect.anything());
  expect(NodeOs.constants.errno.EDESTADDRREQ).toEqual(expect.anything());
  expect(NodeOs.constants.errno.EDOM).toEqual(expect.anything());
  expect(NodeOs.constants.errno.EDQUOT).toEqual(expect.anything());
  expect(NodeOs.constants.errno.EEXIST).toEqual(expect.anything());
  expect(NodeOs.constants.errno.EFAULT).toEqual(expect.anything());
  expect(NodeOs.constants.errno.EFBIG).toEqual(expect.anything());
  expect(NodeOs.constants.errno.EHOSTUNREACH).toEqual(expect.anything());
  expect(NodeOs.constants.errno.EIDRM).toEqual(expect.anything());
  expect(NodeOs.constants.errno.EILSEQ).toEqual(expect.anything());
  expect(NodeOs.constants.errno.EINPROGRESS).toEqual(expect.anything());
  expect(NodeOs.constants.errno.EINTR).toEqual(expect.anything());
  expect(NodeOs.constants.errno.EINVAL).toEqual(expect.anything());
  expect(NodeOs.constants.errno.EIO).toEqual(expect.anything());
  expect(NodeOs.constants.errno.EISCONN).toEqual(expect.anything());
  expect(NodeOs.constants.errno.EISDIR).toEqual(expect.anything());
  expect(NodeOs.constants.errno.ELOOP).toEqual(expect.anything());
  expect(NodeOs.constants.errno.EMFILE).toEqual(expect.anything());
  expect(NodeOs.constants.errno.EMLINK).toEqual(expect.anything());
  expect(NodeOs.constants.errno.EMSGSIZE).toEqual(expect.anything());
  expect(NodeOs.constants.errno.EMULTIHOP).toEqual(expect.anything());
  expect(NodeOs.constants.errno.ENAMETOOLONG).toEqual(expect.anything());
  expect(NodeOs.constants.errno.ENETDOWN).toEqual(expect.anything());
  expect(NodeOs.constants.errno.ENETRESET).toEqual(expect.anything());
  expect(NodeOs.constants.errno.ENETUNREACH).toEqual(expect.anything());
  expect(NodeOs.constants.errno.ENFILE).toEqual(expect.anything());
  expect(NodeOs.constants.errno.ENOBUFS).toEqual(expect.anything());
  expect(NodeOs.constants.errno.ENODATA).toEqual(expect.anything());
  expect(NodeOs.constants.errno.ENODEV).toEqual(expect.anything());
  expect(NodeOs.constants.errno.ENOENT).toEqual(expect.anything());
  expect(NodeOs.constants.errno.ENOEXEC).toEqual(expect.anything());
  expect(NodeOs.constants.errno.ENOLCK).toEqual(expect.anything());
  expect(NodeOs.constants.errno.ENOLINK).toEqual(expect.anything());
  expect(NodeOs.constants.errno.ENOMEM).toEqual(expect.anything());
  expect(NodeOs.constants.errno.ENOMSG).toEqual(expect.anything());
  expect(NodeOs.constants.errno.ENOPROTOOPT).toEqual(expect.anything());
  expect(NodeOs.constants.errno.ENOSPC).toEqual(expect.anything());
  expect(NodeOs.constants.errno.ENOSR).toEqual(expect.anything());
  expect(NodeOs.constants.errno.ENOSTR).toEqual(expect.anything());
  expect(NodeOs.constants.errno.ENOSYS).toEqual(expect.anything());
  expect(NodeOs.constants.errno.ENOTCONN).toEqual(expect.anything());
  expect(NodeOs.constants.errno.ENOTDIR).toEqual(expect.anything());
  expect(NodeOs.constants.errno.ENOTEMPTY).toEqual(expect.anything());
  expect(NodeOs.constants.errno.ENOTSOCK).toEqual(expect.anything());
  expect(NodeOs.constants.errno.ENOTSUP).toEqual(expect.anything());
  expect(NodeOs.constants.errno.ENOTTY).toEqual(expect.anything());
  expect(NodeOs.constants.errno.ENXIO).toEqual(expect.anything());
  expect(NodeOs.constants.errno.EOPNOTSUPP).toEqual(expect.anything());
  expect(NodeOs.constants.errno.EOVERFLOW).toEqual(expect.anything());
  expect(NodeOs.constants.errno.EPERM).toEqual(expect.anything());
  expect(NodeOs.constants.errno.EPIPE).toEqual(expect.anything());
  expect(NodeOs.constants.errno.EPROTO).toEqual(expect.anything());
  expect(NodeOs.constants.errno.EPROTONOSUPPORT).toEqual(expect.anything());
  expect(NodeOs.constants.errno.EPROTOTYPE).toEqual(expect.anything());
  expect(NodeOs.constants.errno.ERANGE).toEqual(expect.anything());
  expect(NodeOs.constants.errno.EROFS).toEqual(expect.anything());
  expect(NodeOs.constants.errno.ESPIPE).toEqual(expect.anything());
  expect(NodeOs.constants.errno.ESRCH).toEqual(expect.anything());
  expect(NodeOs.constants.errno.ESTALE).toEqual(expect.anything());
  expect(NodeOs.constants.errno.ETIME).toEqual(expect.anything());
  expect(NodeOs.constants.errno.ETIMEDOUT).toEqual(expect.anything());
  expect(NodeOs.constants.errno.ETXTBSY).toEqual(expect.anything());
  expect(NodeOs.constants.errno.EWOULDBLOCK).toEqual(expect.anything());
  expect(NodeOs.constants.errno.EXDEV).toEqual(expect.anything());

  expect(NodeOs.constants.dlopen.RTLD_LAZY).toEqual(expect.anything());
  expect(NodeOs.constants.dlopen.RTLD_NOW).toEqual(expect.anything());
  expect(NodeOs.constants.dlopen.RTLD_GLOBAL).toEqual(expect.anything());
  expect(NodeOs.constants.dlopen.RTLD_LOCAL).toEqual(expect.anything());
  expect(NodeOs.constants.dlopen.RTLD_DEEPBIND).toEqual(expect.anything());

  expect(NodeOs.constants.priority.PRIORITY_LOW).toEqual(expect.anything());
  expect(NodeOs.constants.priority.PRIORITY_BELOW_NORMAL).toEqual(expect.anything());
  expect(NodeOs.constants.priority.PRIORITY_NORMAL).toEqual(expect.anything());
  expect(NodeOs.constants.priority.PRIORITY_ABOVE_NORMAL).toEqual(expect.anything());
  expect(NodeOs.constants.priority.PRIORITY_HIGH).toEqual(expect.anything());
  expect(NodeOs.constants.priority.PRIORITY_HIGHEST).toEqual(expect.anything());
});

it('returns cpus()', () => {
  expect(NodeOs.cpus()).toStrictEqual([
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
  ]);
});

it('returns endianness', () => {
  expect(NodeOs.endianness()).toStrictEqual('BE');
});

it('returns freemem', () => {
  expect(NodeOs.freemem()).toStrictEqual(42);
});

it('returns getPriority', () => {
  expect(NodeOs.getPriority()).toStrictEqual(1);
});

it('returns homedir', () => {
  expect(NodeOs.homedir()).toStrictEqual('HOME');
});

it('returns hostname', () => {
  expect(NodeOs.hostname()).toStrictEqual('hostname');
});

it('returns loadavg', () => {
  expect(NodeOs.loadavg()).toStrictEqual([1, 5, 15]);
});

it('returns networkInterfaces()', () => {
  expect(NodeOs.networkInterfaces()).toStrictEqual({
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
  });
});

it('returns platform', () => {
  expect(NodeOs.platform()).toStrictEqual('darwin');
});

it('returns release', () => {
  expect(NodeOs.release()).toStrictEqual('release');
});

it('sets setPriority', () => {
  NodeOs.setPriority(1, 2);
  expect(NodeOs.setPriority.mock.calls[0][0]).toStrictEqual(1);
  expect(NodeOs.setPriority.mock.calls[0][1]).toStrictEqual(2);
});

it('returns tmpdir', () => {
  expect(NodeOs.tmpdir()).toStrictEqual('tmp');
});

it('returns totalmem', () => {
  expect(NodeOs.totalmem()).toStrictEqual(42);
});

it('returns type', () => {
  expect(NodeOs.type()).toStrictEqual('Darwin');
});

it('returns uptime', () => {
  expect(NodeOs.uptime()).toStrictEqual(42);
});

it('returns userInfo', () => {
  expect(NodeOs.userInfo()).toStrictEqual({
    username: 'username',
    uid: 'uid',
    gid: 'gid',
    shell: 'shell',
    homedir: 'homedir',
  });
});
