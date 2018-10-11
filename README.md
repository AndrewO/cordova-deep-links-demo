# Cordova Deep Links Demo

## Setup

Follow Cordova installation instructions. I had to use JDK 1.8 due to an incompatibility between the default JDK (10) and the current version of Cordova

## Android

As in `env.sh`, set these environment variables:

```sh
export JAVA_HOME=$(/usr/libexec/java_home -v 1.8.0_181)
export ANDROID_HOME=~/Library/Android/sdk
export PATH=$JAVA_HOME/bin:$ANDROID_HOME/platform-tools:$ANDROID_HOME/tools:$PATH
```

(Assuming that's where your Java and Android SDK have been installed.)

As described in the Cordova Android platform docs, open Android Studio, create a new empty project, make sure it downloads all SDK components, create an emulator.

With the emulator open, run:

```sh
$ cordova run android
```

To trigger the deep link, use `adb`:

```sh
$ adb shell am start -W -a android.intent.action.VIEW -d "http://myhost.com/news/" io.cordova.hellocordova
$ adb shell am start -W -a android.intent.action.VIEW -d "http://myhost.com/news/123" io.cordova.hellocordova
```

The event data should show up in the emulator. To watch the logs, run:

```sh
$ adb logcat chromium:V *:S
```