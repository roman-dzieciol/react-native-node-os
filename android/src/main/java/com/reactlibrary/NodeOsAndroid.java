package com.reactlibrary;


import android.content.Context;
import android.os.SystemClock;

import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;

import java.nio.ByteOrder;
import java.util.Map;

final class NodeOsAndroid {

    private final Context context;

    public NodeOsAndroid(Context context) {
        this.context = context;
    }

    public Map<String, Object> getConstants() {
        return null;
    }

    public String arch() {
        return System.getProperty("os.arch");
    }

    public ReadableArray cpus() {
        return null;
    }

    public String endianness() {
        if (ByteOrder.nativeOrder() == ByteOrder.BIG_ENDIAN) {
            return "BE";
        } else {
            return "LE";
        }
    }

    public String eol() {
        return "\n";
    }

    public Double freemem() {
        return new Double(Runtime.getRuntime().freeMemory());
    }

    public String homedir() {
        return context.getFilesDir().getAbsolutePath();
    }

    public String hostname() {
        return null;
    }

    public ReadableArray loadavg() {
        return null;
    }

    public ReadableMap networkInterfaces() {
        return null;
    }

    public String osPlatform() {
        return null;
    }

    public String osRelease() {
        return null;
    }

    public String osType() {
        return null;
    }

    public String tmpdir() {
        return context.getCacheDir().getAbsolutePath();
    }

    public Double totalmem() {
        return new Double(Runtime.getRuntime().totalMemory());
    }

    public Double uptime() {
        return new Double(SystemClock.uptimeMillis());
    }

    public ReadableMap userInfo() {
        return null;
    }
}
