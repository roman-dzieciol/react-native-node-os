//
// Created by Roman Dzieciol on 2019-09-24.
//

#ifndef ANDROID_NODEOSANDROID_H
#define ANDROID_NODEOSANDROID_H


#include <jni.h>

#ifdef __cplusplus
extern "C" {
#endif

    JNIEXPORT jobjectArray JNICALL Java_com_reactlibrary_NodeOsAndroid_cpus(JNIEnv *, jobject);

    JNIEXPORT jstring JNICALL Java_com_reactlibrary_NodeOsAndroid_hostname(JNIEnv *, jobject);

    JNIEXPORT jobject JNICALL Java_com_reactlibrary_NodeOsAndroid_loadavg(JNIEnv *, jobject);

    JNIEXPORT jobject JNICALL Java_com_reactlibrary_NodeOsAndroid_networkInterfaces(JNIEnv *, jobject);

    JNIEXPORT jstring JNICALL Java_com_reactlibrary_NodeOsAndroid_osPlatform(JNIEnv *, jobject);

    JNIEXPORT jstring JNICALL Java_com_reactlibrary_NodeOsAndroid_osRelease(JNIEnv *, jobject);

    JNIEXPORT jstring JNICALL Java_com_reactlibrary_NodeOsAndroid_osType(JNIEnv *, jobject);

    JNIEXPORT jobject JNICALL Java_com_reactlibrary_NodeOsAndroid_userInfo(JNIEnv *, jobject);

#ifdef __cplusplus
}
#endif



#endif //ANDROID_NODEOSANDROID_H
