package com.reactlibrary;


import android.content.Context;
import android.os.SystemClock;
import android.util.Log;

import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeArray;
import com.facebook.react.bridge.WritableNativeMap;

import java.io.File;
import java.nio.ByteOrder;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

final class NodeOsAndroid {

    private final Context context;

    public NodeOsAndroid(Context context) {
        this.context = context;
    }

    public static WritableNativeArray getCpuInfoArray() {
        WritableNativeArray result = new WritableNativeArray();
        WritableNativeMap cpuInfo = null;
        try {
            Scanner s = new Scanner(new File("/proc/cpuinfo"));
            while (s.hasNextLine()) {
                String[] vals = s.nextLine().split(": ");
                if (vals.length > 1) {
                    String key = vals[0].trim();
                    String value = vals[1].trim();
                    if (key == "processor") {
                        cpuInfo = new WritableNativeMap();
                        result.pushMap(cpuInfo);
                    }
                    if (cpuInfo != null) {
                        cpuInfo.putString(key, value);
                    }
                }
            }
        } catch (Exception e) {
            Log.e("getCpuInfoMap", Log.getStackTraceString(e));
        }
        return result;
    }

    public String arch() {
        return System.getProperty("os.arch");
    }

    public WritableArray cpus() {
        WritableNativeArray cpuInfos = getCpuInfoArray();
        WritableNativeArray result = new WritableNativeArray();

        String defaultModel = "unknown";
        Double defaultSpeed = 0.0;

        WritableNativeMap defaultCpuTimings = new WritableNativeMap();
        defaultCpuTimings.putDouble("user", 0.0);
        defaultCpuTimings.putDouble("sys", 0.0);
        defaultCpuTimings.putDouble("idle", 0.0);
        defaultCpuTimings.putDouble("nice", 0.0);
        defaultCpuTimings.putDouble("irq", 0.0);

        for (int i = 0; i < cpuInfos.size(); i++) {
            WritableNativeMap nativeInfo = (WritableNativeMap) cpuInfos.getMap(i);
            WritableNativeMap jsInfo = new WritableNativeMap();

            String model = nativeInfo.getString("model name");
            if (model != null) {
                defaultModel = model;
            } else {
                model = defaultModel;
            }
            jsInfo.putString("model", model);

            Double speed = Double.parseDouble(nativeInfo.getString("cpu MHz"));
            if (speed != null) {
                defaultSpeed = speed;
            } else {
                speed = defaultSpeed;
            }
            jsInfo.putDouble("speed", speed);

            // TODO: Implement if available
            jsInfo.putMap("times", defaultCpuTimings);
        }

        return cpuInfos;
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
        // TODO: Implement if available
        return "hostname";
    }

    public WritableArray loadavg() {
        // TODO: Implement if available
        WritableNativeArray result = new WritableNativeArray();
        result.pushDouble(0.0);
        result.pushDouble(0.0);
        result.pushDouble(0.0);
        return result;
    }

    public WritableMap networkInterfaces() {
        // TODO: Implement
        return new WritableNativeMap();
    }

    public native String osPlatform();

    public native String osRelease();

    public native String osType();

    public String tmpdir() {
        return context.getCacheDir().getAbsolutePath();
    }

    public Double totalmem() {
        return new Double(Runtime.getRuntime().totalMemory());
    }

    public Double uptime() {
        return new Double(SystemClock.uptimeMillis());
    }

    public WritableMap userInfo() {
        // TODO: Implement
        return new WritableNativeMap();
    }
}
