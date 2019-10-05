//
// Created by Roman Dzieciol on 2019-09-24.
//

#include "NodeOsAndroid.h"
#include "NodeOsShared.h"
#include <string>
#include <locale>
#include <codecvt>


template <typename T>
std::string toUTF8(const std::basic_string<T, std::char_traits<T>, std::allocator<T>>& source)
{
    std::string result;

    std::wstring_convert<std::codecvt_utf8_utf16<T>, T> convertor;
    result = convertor.to_bytes(source);

    return result;
}

template <typename T>
void fromUTF8(const std::string& source, std::basic_string<T, std::char_traits<T>, std::allocator<T>>& result)
{
    std::wstring_convert<std::codecvt_utf8_utf16<T>, T> convertor;
    result = convertor.from_bytes(source);
}

jstring JavaStringFromUTF8(JNIEnv *env, const std::string& source)
{
    std::u16string result;
    fromUTF8(source, result);
    return env->NewString(reinterpret_cast<const jchar*>(result.c_str()), result.size());
}


extern "C" JNIEXPORT jstring JNICALL Java_com_reactlibrary_NodeOsAndroid_osPlatform(JNIEnv *env, jobject thisObject) {
    std::string result = "android";
    return env->NewStringUTF(result.c_str());

}

extern "C" JNIEXPORT jstring JNICALL Java_com_reactlibrary_NodeOsAndroid_osRelease(JNIEnv *env, jobject thisObject) {
    std::string result = nodeos::GetRelease();
    return env->NewStringUTF(result.c_str());

}

extern "C" JNIEXPORT jstring JNICALL Java_com_reactlibrary_NodeOsAndroid_osType(JNIEnv *env, jobject thisObject) {
    std::string result = nodeos::GetSysName();
    return env->NewStringUTF(result.c_str());

}

extern "C" JNIEXPORT jobject JNICALL Java_com_reactlibrary_NodeOsAndroid_userInfo(JNIEnv *env, jobject thisObject) {

    nodeos::UserInfo nativeUserInfo = nodeos::GetUserInfo();

    // Create the object of the class NodeOsUserInfo
    jclass userInfoClass = env->FindClass("com/reactlibrary/NodeOsUserInfo");
    jobject userInfo = env->AllocObject(userInfoClass);

    // Get the NodeOsUserInfo fields to be set
    jfieldID username = env->GetFieldID(userInfoClass, "username", "Ljava/lang/String;");
    jfieldID uid = env->GetFieldID(userInfoClass, "uid", "Ljava/lang/String;");
    jfieldID gid = env->GetFieldID(userInfoClass, "gid", "Ljava/lang/String;");
    jfieldID shell = env->GetFieldID(userInfoClass, "shell", "Ljava/lang/String;");
    jfieldID homedir = env->GetFieldID(userInfoClass, "homedir", "Ljava/lang/String;");

    env->SetObjectField(userInfo, username, JavaStringFromUTF8(env, nativeUserInfo.username));
    env->SetObjectField(userInfo, uid, JavaStringFromUTF8(env, nativeUserInfo.uid));
    env->SetObjectField(userInfo, gid, JavaStringFromUTF8(env, nativeUserInfo.gid));
    env->SetObjectField(userInfo, shell, JavaStringFromUTF8(env, nativeUserInfo.shell));
    env->SetObjectField(userInfo, homedir, JavaStringFromUTF8(env, nativeUserInfo.homedir));

    return userInfo;
}
