package com.nagarro.jsag.phonegapworkshop;

import org.apache.cordova.DroidGap;

import android.os.Bundle;

public class MainActivity extends DroidGap {
    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        super.loadUrl("file:///android_asset/www/action.html");
//        super.loadUrl("file:///android_asset/www/libs/jquery.mobile/1.1.1/demos/index.html");
    }
}