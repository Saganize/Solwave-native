package com.solwave

import android.content.ClipData
import android.content.ClipboardManager
import android.content.Context
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise

class SolwaveModule internal constructor(context: ReactApplicationContext) :
  SolwaveSpec(context) {

  override fun getName(): String {
    return NAME
  }

  // Example method
  // See https://reactnative.dev/docs/native-modules-android
  @ReactMethod
  fun setString(text: String) {
    try {
      val clipboard = getReactApplicationContext().getSystemService(Context.CLIPBOARD_SERVICE) as ClipboardManager
      val clip = ClipData.newPlainText(null, text)
      clipboard.setPrimaryClip(clip)
    } catch (e: Exception) {
        e.printStackTrace()
    }
}

  companion object {
    const val NAME = "Solwave"
  }
}
