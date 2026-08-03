package com.studiclock.app;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;
import org.json.JSONArray;
import org.json.JSONException;
import android.content.Intent;
import android.provider.Settings;

public class AppLockerPlugin extends CordovaPlugin {
    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if ("startLockService".equals(action)) {
            Intent intent = new Intent(Settings.ACTION_ACCESSIBILITY_SETTINGS);
            this.cordova.getActivity().startActivity(intent);
            callbackContext.success("Accessibility settings opened");
            return true;
        }
        return false;
    }
}