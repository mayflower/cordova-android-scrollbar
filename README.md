# What is it?

Cordova disables vertical scrollbars on android. This plugin provides you with a
way to programatically reenable them.

# How to use it?

## Installation

Install the plugin into your cordova project via

    cordova plugin add cordova-android-scrollbar

After installing the plugin, the API is exposed on the global
`mayflower.AndroidScrollbar` object.

## API

The plugin exposes two methods for querying and changing the visiblity of the
vertical scrollbar. All methods return [Promises/A+](https://promisesaplus.com/)
compliant promises.

**Important:** This plugin was written for reenabling the scrollbar on Android,
so the methods below are just stubs on all other platforms!

### Querying scrollbar visibility

    mayflower.AndroidScrollbar.queryVerticalScrollbarVisibility()
        .then(
            function(visiblity) {
                console.log('Vertical scrollbar is ' + (visibility ? 'visible' : 'hidden'));
            },
            function(error) {
                console.log('error', error);
            }
        );

### Changing scrollbar visibility

    mayflower.AndroidScrollbar.toggleVerticalScrollbarVisibility(true)
        .then(
            function() {
                console.log('Vertical scrollbar enabled');
            },
            function(error) {
                console.log('error', error);
            }
        );

# Test / Usage sample

There is a small usage sample in `test/index.html`. In order to use it, you'll
have to create a cordova project, add the plugin and configure `test/index.html`
as your entrypoint. The resulting app will show you a long webpage with a button
for controlling the scrollbar at the top.

# Building

If you want to hack on the plugin, you'll have to rebuild the Javascript bridge
from the TypeScript sources.

    npm install
    grunt

Obviously, this will only work if you install NodeJS / io.js and `grunt-cli` first.

# License

The plugin is published under the Apache license v2.0 .
