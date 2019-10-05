LOCAL_PATH := $(call my-dir)

include $(CLEAR_VARS)

LOCAL_SRC_FILES += $(LOCAL_PATH)/src/NodeOsAndroid.cpp
LOCAL_SRC_FILES += $(LOCAL_PATH)/../../../../ios/NodeOsShared.cpp

LOCAL_C_INCLUDES += $(LOCAL_PATH)/include
LOCAL_C_INCLUDES += $(LOCAL_PATH)/../../../../ios
LOCAL_C_INCLUDES += $(LOCAL_PATH)/../../../../node_modules/react-native/ReactAndroid/src/main/jni/react/jni
LOCAL_C_INCLUDES += $(LOCAL_PATH)/../../../../node_modules/react-native/ReactAndroid/src/main/jni/first-party
LOCAL_C_INCLUDES += $(LOCAL_PATH)/../../../../node_modules/react-native/ReactAndroid/src/main/jni/third-party

LOCAL_MODULE:= NodeOsJNI
include $(BUILD_SHARED_LIBRARY)

