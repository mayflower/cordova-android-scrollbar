/// <reference path="./interface/typescript_deferred.d.ts"/>
/// <reference path="./interface/cordova.d.ts"/>

import tsd = require('typescript-deferred');

export function toggleVerticalScrollbarVisibility(visibility: boolean): tsd.PromiseInterface<void> {
    var deferred = tsd.create<void>();

    if (cordova.platformId.toLowerCase() === 'android') {
        cordova.exec(
            () => deferred.resolve(),
            (e: any) => deferred.reject(e),
            'AndroidScrollbar',
            'toggleVerticalScrollbarVisibility',
            [visibility]
        );
    } else {
        deferred.resolve();
    }

    return deferred.promise;
}

export function queryVerticalScrollbarVisibility(): tsd.PromiseInterface<boolean> {
    var deferred = tsd.create<boolean>();

    if (cordova.platformId.toLowerCase() === 'android') {
        cordova.exec(
            (result: number) => deferred.resolve(!!result),
            (e: any) => deferred.reject(e),
            'AndroidScrollbar',
            'queryVerticalScrollbarVisibility',
            []
        );
    } else {
        deferred.resolve(true);
    }

    return deferred.promise;
}
