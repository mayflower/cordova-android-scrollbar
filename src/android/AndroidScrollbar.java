/*
 * Copyright 2015 Christian Speckner
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package de.mayflower.cordova.androidscrollbar;

import android.view.View;
import android.webkit.WebView;

import org.json.JSONArray;
import org.json.JSONException;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaWebView;
import org.apache.cordova.CallbackContext;

public class AndroidScrollbar extends CordovaPlugin {

    protected WebView webView;

    @Override
    public void initialize(CordovaInterface cordova, CordovaWebView cdvWebView) {
        super.initialize(cordova, cdvWebView);

        try {
            this.webView = (WebView)(cdvWebView.getEngine().getView());
        }
        catch (ClassCastException e) {
            this.webView = null;
            return;
        }

        this.webView.setScrollBarStyle(View.SCROLLBARS_INSIDE_OVERLAY);
    }

    @Override
    public boolean execute (
            String action,
            JSONArray args,
            CallbackContext callbackContext
        )
    {
        if (webView == null) {
            callbackContext.error("plugin not supported with this version of cordova");
            return true;
        }

        if ("toggleVerticalScrollbarVisibility".equals(action)) {
            return toggleVerticalScrollbarVisibility(args, callbackContext);
        }

        if ("queryVerticalScrollbarVisibility".equals(action)) {
            return queryVerticalScrollbarVisibility(callbackContext);
        }

        return false;
    }

    protected boolean toggleVerticalScrollbarVisibility(
            JSONArray args,
            CallbackContext callbackContext
        )
    {
        try {
            webView.setVerticalScrollBarEnabled(args.getBoolean(0));
            callbackContext.success(); 
        } catch (JSONException e) {
            callbackContext.error("missing parameter");
        }
        
        return true;
    }

    protected boolean queryVerticalScrollbarVisibility(CallbackContext callbackContext) {
        callbackContext.success(webView.isVerticalScrollBarEnabled() ? 1 : 0);

        return true;
    }
}
