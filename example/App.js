/**
 * Sample React Native App
 *
 * adapted from App.js generated by the following command:
 *
 * react-native init example
 *
 * https://github.com/facebook/react-native
 */

import React, {Component} from 'react';
import {Platform, SectionList, StyleSheet, Text, View, SafeAreaView} from 'react-native';
import NodeOs from 'react-native-node-os';

const _renderItem = ({item}) => {
  return (
    <Text style={styles.item}>
      {item.key}: {item.value}
    </Text>
  );
};

const _renderSectionHeader = ({section}) => {
  return <Text style={styles.sectionHeader}>{section.title}</Text>;
};

const _keyExtractor = (item, index) => index;

const hexEncode = function(text) {
  return text.split('').reduce(
    (hex, c) =>
      (hex += c
        .charCodeAt(0)
        .toString(16)
        .padStart(4, '0')),
    '',
  );
};

const presentNumericConstant = value => {
  if (value) {
    return '0x' + value.toString(16).padStart(2, '0');
  } else {
    return 'undefined';
  }
};

const _sections = [
  {title: 'os', data: [{key: 'EOL', value: hexEncode(NodeOs.EOL)}]},
  {
    title: 'os.constants.signals',
    data: [
      {key: 'SIGHUP', value: presentNumericConstant(NodeOs.constants.signals.SIGHUP)},
      {key: 'SIGINT', value: presentNumericConstant(NodeOs.constants.signals.SIGINT)},
      {key: 'SIGQUIT', value: presentNumericConstant(NodeOs.constants.signals.SIGQUIT)},
      {key: 'SIGILL', value: presentNumericConstant(NodeOs.constants.signals.SIGILL)},
      {key: 'SIGTRAP', value: presentNumericConstant(NodeOs.constants.signals.SIGTRAP)},
      {key: 'SIGABRT', value: presentNumericConstant(NodeOs.constants.signals.SIGABRT)},
      {key: 'SIGIOT', value: presentNumericConstant(NodeOs.constants.signals.SIGIOT)},
      {key: 'SIGBUS', value: presentNumericConstant(NodeOs.constants.signals.SIGBUS)},
      {key: 'SIGFPE', value: presentNumericConstant(NodeOs.constants.signals.SIGFPE)},
      {key: 'SIGKILL', value: presentNumericConstant(NodeOs.constants.signals.SIGKILL)},
      {key: 'SIGUSR1', value: presentNumericConstant(NodeOs.constants.signals.SIGUSR1)},
      {key: 'SIGUSR2', value: presentNumericConstant(NodeOs.constants.signals.SIGUSR2)},
      {key: 'SIGSEGV', value: presentNumericConstant(NodeOs.constants.signals.SIGSEGV)},
      {key: 'SIGPIPE', value: presentNumericConstant(NodeOs.constants.signals.SIGPIPE)},
      {key: 'SIGALRM', value: presentNumericConstant(NodeOs.constants.signals.SIGALRM)},
      {key: 'SIGTERM', value: presentNumericConstant(NodeOs.constants.signals.SIGTERM)},
      {key: 'SIGCHLD', value: presentNumericConstant(NodeOs.constants.signals.SIGCHLD)},
      {key: 'SIGSTKFLT', value: presentNumericConstant(NodeOs.constants.signals.SIGSTKFLT)},
      {key: 'SIGCONT', value: presentNumericConstant(NodeOs.constants.signals.SIGCONT)},
      {key: 'SIGSTOP', value: presentNumericConstant(NodeOs.constants.signals.SIGSTOP)},
      {key: 'SIGTSTP', value: presentNumericConstant(NodeOs.constants.signals.SIGTSTP)},
      {key: 'SIGBREAK', value: presentNumericConstant(NodeOs.constants.signals.SIGBREAK)},
      {key: 'SIGTTIN', value: presentNumericConstant(NodeOs.constants.signals.SIGTTIN)},
      {key: 'SIGTTOU', value: presentNumericConstant(NodeOs.constants.signals.SIGTTOU)},
      {key: 'SIGURG', value: presentNumericConstant(NodeOs.constants.signals.SIGURG)},
      {key: 'SIGXCPU', value: presentNumericConstant(NodeOs.constants.signals.SIGXCPU)},
      {key: 'SIGXFSZ', value: presentNumericConstant(NodeOs.constants.signals.SIGXFSZ)},
      {key: 'SIGVTALRM', value: presentNumericConstant(NodeOs.constants.signals.SIGVTALRM)},
      {key: 'SIGPROF', value: presentNumericConstant(NodeOs.constants.signals.SIGPROF)},
      {key: 'SIGWINCH', value: presentNumericConstant(NodeOs.constants.signals.SIGWINCH)},
      {key: 'SIGIO', value: presentNumericConstant(NodeOs.constants.signals.SIGIO)},
      {key: 'SIGPOLL', value: presentNumericConstant(NodeOs.constants.signals.SIGPOLL)},
      {key: 'SIGLOST', value: presentNumericConstant(NodeOs.constants.signals.SIGLOST)},
      {key: 'SIGPWR', value: presentNumericConstant(NodeOs.constants.signals.SIGPWR)},
      {key: 'SIGINFO', value: presentNumericConstant(NodeOs.constants.signals.SIGINFO)},
      {key: 'SIGSYS', value: presentNumericConstant(NodeOs.constants.signals.SIGSYS)},
      {key: 'SIGUNUSED', value: presentNumericConstant(NodeOs.constants.signals.SIGUNUSED)},
    ],
  },
  {
    title: 'os.constants.errno',
    data: [
      {key: 'E2BIG', value: presentNumericConstant(NodeOs.constants.errno.E2BIG)},
      {key: 'EACCES', value: presentNumericConstant(NodeOs.constants.errno.EACCES)},
      {key: 'EADDRINUSE', value: presentNumericConstant(NodeOs.constants.errno.EADDRINUSE)},
      {key: 'EADDRNOTAVAIL', value: presentNumericConstant(NodeOs.constants.errno.EADDRNOTAVAIL)},
      {key: 'EAFNOSUPPORT', value: presentNumericConstant(NodeOs.constants.errno.EAFNOSUPPORT)},
      {key: 'EAGAIN', value: presentNumericConstant(NodeOs.constants.errno.EAGAIN)},
      {key: 'EALREADY', value: presentNumericConstant(NodeOs.constants.errno.EALREADY)},
      {key: 'EBADF', value: presentNumericConstant(NodeOs.constants.errno.EBADF)},
      {key: 'EBADMSG', value: presentNumericConstant(NodeOs.constants.errno.EBADMSG)},
      {key: 'EBUSY', value: presentNumericConstant(NodeOs.constants.errno.EBUSY)},
      {key: 'ECANCELED', value: presentNumericConstant(NodeOs.constants.errno.ECANCELED)},
      {key: 'ECHILD', value: presentNumericConstant(NodeOs.constants.errno.ECHILD)},
      {key: 'ECONNABORTED', value: presentNumericConstant(NodeOs.constants.errno.ECONNABORTED)},
      {key: 'ECONNREFUSED', value: presentNumericConstant(NodeOs.constants.errno.ECONNREFUSED)},
      {key: 'ECONNRESET', value: presentNumericConstant(NodeOs.constants.errno.ECONNRESET)},
      {key: 'EDEADLK', value: presentNumericConstant(NodeOs.constants.errno.EDEADLK)},
      {key: 'EDESTADDRREQ', value: presentNumericConstant(NodeOs.constants.errno.EDESTADDRREQ)},
      {key: 'EDOM', value: presentNumericConstant(NodeOs.constants.errno.EDOM)},
      {key: 'EDQUOT', value: presentNumericConstant(NodeOs.constants.errno.EDQUOT)},
      {key: 'EEXIST', value: presentNumericConstant(NodeOs.constants.errno.EEXIST)},
      {key: 'EFAULT', value: presentNumericConstant(NodeOs.constants.errno.EFAULT)},
      {key: 'EFBIG', value: presentNumericConstant(NodeOs.constants.errno.EFBIG)},
      {key: 'EHOSTUNREACH', value: presentNumericConstant(NodeOs.constants.errno.EHOSTUNREACH)},
      {key: 'EIDRM', value: presentNumericConstant(NodeOs.constants.errno.EIDRM)},
      {key: 'EILSEQ', value: presentNumericConstant(NodeOs.constants.errno.EILSEQ)},
      {key: 'EINPROGRESS', value: presentNumericConstant(NodeOs.constants.errno.EINPROGRESS)},
      {key: 'EINTR', value: presentNumericConstant(NodeOs.constants.errno.EINTR)},
      {key: 'EINVAL', value: presentNumericConstant(NodeOs.constants.errno.EINVAL)},
      {key: 'EIO', value: presentNumericConstant(NodeOs.constants.errno.EIO)},
      {key: 'EISCONN', value: presentNumericConstant(NodeOs.constants.errno.EISCONN)},
      {key: 'EISDIR', value: presentNumericConstant(NodeOs.constants.errno.EISDIR)},
      {key: 'ELOOP', value: presentNumericConstant(NodeOs.constants.errno.ELOOP)},
      {key: 'EMFILE', value: presentNumericConstant(NodeOs.constants.errno.EMFILE)},
      {key: 'EMLINK', value: presentNumericConstant(NodeOs.constants.errno.EMLINK)},
      {key: 'EMSGSIZE', value: presentNumericConstant(NodeOs.constants.errno.EMSGSIZE)},
      {key: 'EMULTIHOP', value: presentNumericConstant(NodeOs.constants.errno.EMULTIHOP)},
      {key: 'ENAMETOOLONG', value: presentNumericConstant(NodeOs.constants.errno.ENAMETOOLONG)},
      {key: 'ENETDOWN', value: presentNumericConstant(NodeOs.constants.errno.ENETDOWN)},
      {key: 'ENETRESET', value: presentNumericConstant(NodeOs.constants.errno.ENETRESET)},
      {key: 'ENETUNREACH', value: presentNumericConstant(NodeOs.constants.errno.ENETUNREACH)},
      {key: 'ENFILE', value: presentNumericConstant(NodeOs.constants.errno.ENFILE)},
      {key: 'ENOBUFS', value: presentNumericConstant(NodeOs.constants.errno.ENOBUFS)},
      {key: 'ENODATA', value: presentNumericConstant(NodeOs.constants.errno.ENODATA)},
      {key: 'ENODEV', value: presentNumericConstant(NodeOs.constants.errno.ENODEV)},
      {key: 'ENOENT', value: presentNumericConstant(NodeOs.constants.errno.ENOENT)},
      {key: 'ENOEXEC', value: presentNumericConstant(NodeOs.constants.errno.ENOEXEC)},
      {key: 'ENOLCK', value: presentNumericConstant(NodeOs.constants.errno.ENOLCK)},
      {key: 'ENOLINK', value: presentNumericConstant(NodeOs.constants.errno.ENOLINK)},
      {key: 'ENOMEM', value: presentNumericConstant(NodeOs.constants.errno.ENOMEM)},
      {key: 'ENOMSG', value: presentNumericConstant(NodeOs.constants.errno.ENOMSG)},
      {key: 'ENOPROTOOPT', value: presentNumericConstant(NodeOs.constants.errno.ENOPROTOOPT)},
      {key: 'ENOSPC', value: presentNumericConstant(NodeOs.constants.errno.ENOSPC)},
      {key: 'ENOSR', value: presentNumericConstant(NodeOs.constants.errno.ENOSR)},
      {key: 'ENOSTR', value: presentNumericConstant(NodeOs.constants.errno.ENOSTR)},
      {key: 'ENOSYS', value: presentNumericConstant(NodeOs.constants.errno.ENOSYS)},
      {key: 'ENOTCONN', value: presentNumericConstant(NodeOs.constants.errno.ENOTCONN)},
      {key: 'ENOTDIR', value: presentNumericConstant(NodeOs.constants.errno.ENOTDIR)},
      {key: 'ENOTEMPTY', value: presentNumericConstant(NodeOs.constants.errno.ENOTEMPTY)},
      {key: 'ENOTSOCK', value: presentNumericConstant(NodeOs.constants.errno.ENOTSOCK)},
      {key: 'ENOTSUP', value: presentNumericConstant(NodeOs.constants.errno.ENOTSUP)},
      {key: 'ENOTTY', value: presentNumericConstant(NodeOs.constants.errno.ENOTTY)},
      {key: 'ENXIO', value: presentNumericConstant(NodeOs.constants.errno.ENXIO)},
      {key: 'EOPNOTSUPP', value: presentNumericConstant(NodeOs.constants.errno.EOPNOTSUPP)},
      {key: 'EOVERFLOW', value: presentNumericConstant(NodeOs.constants.errno.EOVERFLOW)},
      {key: 'EPERM', value: presentNumericConstant(NodeOs.constants.errno.EPERM)},
      {key: 'EPIPE', value: presentNumericConstant(NodeOs.constants.errno.EPIPE)},
      {key: 'EPROTO', value: presentNumericConstant(NodeOs.constants.errno.EPROTO)},
      {key: 'EPROTONOSUPPORT', value: presentNumericConstant(NodeOs.constants.errno.EPROTONOSUPPORT)},
      {key: 'EPROTOTYPE', value: presentNumericConstant(NodeOs.constants.errno.EPROTOTYPE)},
      {key: 'ERANGE', value: presentNumericConstant(NodeOs.constants.errno.ERANGE)},
      {key: 'EROFS', value: presentNumericConstant(NodeOs.constants.errno.EROFS)},
      {key: 'ESPIPE', value: presentNumericConstant(NodeOs.constants.errno.ESPIPE)},
      {key: 'ESRCH', value: presentNumericConstant(NodeOs.constants.errno.ESRCH)},
      {key: 'ESTALE', value: presentNumericConstant(NodeOs.constants.errno.ESTALE)},
      {key: 'ETIME', value: presentNumericConstant(NodeOs.constants.errno.ETIME)},
      {key: 'ETIMEDOUT', value: presentNumericConstant(NodeOs.constants.errno.ETIMEDOUT)},
      {key: 'ETXTBSY', value: presentNumericConstant(NodeOs.constants.errno.ETXTBSY)},
      {key: 'EWOULDBLOCK', value: presentNumericConstant(NodeOs.constants.errno.EWOULDBLOCK)},
      {key: 'EXDEV', value: presentNumericConstant(NodeOs.constants.errno.EXDEV)},
    ],
  },
  {
    title: 'os.constants.dlopen',
    data: [
      {key: 'RTLD_LAZY', value: presentNumericConstant(NodeOs.constants.dlopen.RTLD_LAZY)},
      {key: 'RTLD_NOW', value: presentNumericConstant(NodeOs.constants.dlopen.RTLD_NOW)},
      {key: 'RTLD_GLOBAL', value: presentNumericConstant(NodeOs.constants.dlopen.RTLD_GLOBAL)},
      {key: 'RTLD_LOCAL', value: presentNumericConstant(NodeOs.constants.dlopen.RTLD_LOCAL)},
      {key: 'RTLD_DEEPBIND', value: presentNumericConstant(NodeOs.constants.dlopen.RTLD_DEEPBIND)},
    ],
  },
  {
    title: 'os.constants.priority',
    data: [
      {key: 'PRIORITY_LOW', value: NodeOs.constants.priority.PRIORITY_LOW},
      {key: 'PRIORITY_BELOW_NORMAL', value: NodeOs.constants.priority.PRIORITY_BELOW_NORMAL},
      {key: 'PRIORITY_NORMAL', value: NodeOs.constants.priority.PRIORITY_NORMAL},
      {key: 'PRIORITY_ABOVE_NORMAL', value: NodeOs.constants.priority.PRIORITY_ABOVE_NORMAL},
      {key: 'PRIORITY_HIGH', value: NodeOs.constants.priority.PRIORITY_HIGH},
      {key: 'PRIORITY_HIGHEST', value: NodeOs.constants.priority.PRIORITY_HIGHEST},
    ],
  },
  {
    title: 'os.getters',
    data: [
      {key: 'arch', value: '' + NodeOs.arch()},
      {key: 'cpus', value: '' + JSON.stringify(NodeOs.cpus())},
      {key: 'endianness', value: '' + NodeOs.endianness()},
      {key: 'freemem', value: '' + NodeOs.freemem()},
      {key: 'getPriority', value: '' + NodeOs.getPriority(0)},
      {key: 'homedir', value: '' + NodeOs.homedir()},
      {key: 'hostname', value: '' + NodeOs.hostname()},
      {key: 'loadavg', value: '' + NodeOs.loadavg()},
      {key: 'networkInterfaces', value: '' + JSON.stringify(NodeOs.networkInterfaces())},
      {key: 'platform', value: '' + NodeOs.platform()},
      {key: 'release', value: '' + NodeOs.release()},
      {key: 'type', value: '' + NodeOs.type()},
      {key: 'tmpdir', value: '' + NodeOs.tmpdir()},
      {key: 'totalmem', value: '' + NodeOs.totalmem()},
      {key: 'uptime', value: '' + NodeOs.uptime()},
    ],
  },
];

export default () => {
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={_sections}
        renderItem={_renderItem}
        renderSectionHeader={_renderSectionHeader}
        keyExtractor={_keyExtractor}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionHeader: {
    backgroundColor: '#FFFFFF99',
    fontSize: 20,
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  item: {
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
});
