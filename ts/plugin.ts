/// <reference path="./interface/typescript_deferred.d.ts"/>
/// <reference path="./interface/cordova.d.ts"/>

import tsd = require('typescript-deferred');

export function toggleVerticalScrollbarVisibility(visibility: boolean): tsd.PromiseInterface<void> {
    var deferred = tsd.create<void>();

    if (cordova.platformId.toLowerCase() === 'android') {
        cordova.exec(
            () => deferred.resolve(),
            () => deferred.reject(),
            'AndroidScrollbar',
            'toggleVerticalScrollbarVisibility',
            [visibility]
        );
    } else {
        deferred.resolve();
    }

    return deferred.promise;
}

